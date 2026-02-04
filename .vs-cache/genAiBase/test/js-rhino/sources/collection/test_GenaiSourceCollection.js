/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceCollection';

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    // Will install all the runtimes not yet been installed, so waitForSetup does not time out when installing
    TestApi.installRuntimes();
  }

  function validateSameFilesAfterSync(originalCollection, updatedCollection) {
    expect(originalCollection.lastSyncTime).toBeLessThan(updatedCollection.lastSyncTime);
    var originalFiles = originalCollection.files;
    var updatedFiles = updatedCollection.files;
    expect(updatedFiles.pluck('id').sorted()).toEqual(originalFiles.pluck('id').sorted());
  }

  beforeAll(function () {
    this.collectionLogger = Logger.for('Genai.SourceCollection');
    this.collectionLogger.setLogLevel('DEBUG');
    this.ctx = TestApi.createContext(filename);
    CronQueue.pause();
    CronQueue.clear();
    TestApi.waitForSetup(this.ctx, null, 1, 60);
  });

  afterAll(function () {
    CronQueue.resume();
    this.collectionLogger.setLogLevel('INFO');
    TestApi.teardown(this.ctx);
  });

  _.each([false, true], (doChunking) => {
    describe('sync ' + (doChunking ? 'with' : 'without') + ' chunking', function () {
      function checkPassages(files, expectedNumLinesArr, collection) {
        var collectionName = collection.name;
        files.each((file) => {
          var fileName = file.originalFile.fileName();
          var fileIdx = Number.parseInt(Str.removeSuffix(fileName, '.txt').slice(-1));
          var passages = file.readPassages();
          var expectedNumLines = expectedNumLinesArr[fileIdx];
          if (expectedNumLines) {
            expect(passages.size).toEqual(expectedNumLines);
            passages = passages.sorted(function (a, b) {
              return Number.parseInt(a.intraSourceId) - Number.parseInt(b.intraSourceId);
            });
            expect(Str.join('', passages.pluck('contentStr'))).toEqual(
              TestApi.makeTxtFileContent(fileName, collectionName, expectedNumLines)
            );
          } else {
            expect(passages).toBeNull();
          }
        });
      }

      beforeAll(function () {
        this.collectionRootSubpath = 'test_GenaiSourceCollection/' + Uuid.create() + '/testCollRoot';
        this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);

        // Create the SourceCollection
        this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
          description: 'mergedPassages collection',
          name: 'testMergedPassagesCollection',
          rootUrl: this.collectionRoot.url,
          targetUrl: filename + '/test',
        }).get('this');
        this.collectionFiles = TestApi.populateTxtSrcCollectionRoot(this.collection, 5);
        expect(this.collectionFiles.size).toEqual(5);

        this.preSyncTimestamp = DateTime.nowWithMillis();
        this.chunkingSpec = doChunking
          ? Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line })
          : null;
        // 5 files, batchSize 2 => 3 batches
        Genai.App.ReadOnlyConfig.inst().setConfigValue('sourceFileBatchSize', 2);
        this.eachFileProcessBatchSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile.Job.EachFileBatchJob', 'processBatch')
          .callThrough()
          .register();
      });

      afterAll(function () {
        Genai.App.ReadOnlyConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
        TestApi.cleanUpCollection(this.collection);
        TestApi.teardown(this.ctx);
      });

      it('completes successfully', function () {
        var syncJobs = this.collection.sync(null, this.chunkingSpec);
        var job = syncJobs.fileSystemJob;
        expect(job.type().name()).toEqual('Genai.SourceFile.Job.EachFileBatchJob');
        var jobWithOptions = job.get('options.this');
        expect(jobWithOptions.options.collectionUrl).toEqual(this.collection.rootUrl);

        var configuredBatchSize = Genai.App.ReadOnlyConfig.inst().configValue('sourceFileBatchSize');
        expect(jobWithOptions.options.batchSize).toEqual(configuredBatchSize);
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 600);
        TestApi.waitForSetup(this.ctx);
        expect(job.status().isCompleted()).toBeTrue();

        // 5 files, batchSize 2 => 3 batches
        expect(this.eachFileProcessBatchSpy.getActionMock().callCount()).toEqual(3);
      });

      it('creates SourceFiles', function () {
        var collection = this.collection.get('this, files.this');
        expect(collection.lastSyncTime).toBeLessThan(DateTime.nowWithMillis());
        expect(collection.lastSyncTime).toBeGreaterThanOrEqual(this.preSyncTimestamp);

        expect(collection.files.size).toEqual(this.collectionFiles.size);
        var collectionFilesUrls = collection.files.mapToStr((d) => {
          return d.originalFile.url;
        });
        expect(collectionFilesUrls.sorted()).toEqual(this.collectionFiles.pluck('url').sorted());
        var collectionFileDisplayUrls = collection.files.pluck('displayUrl').mapToStr((u) => {
          return u.toString();
        });
        expect(collectionFileDisplayUrls.sorted()).toEqual(
          this.collectionFiles.map((f) => {
            return f.apiEndpoint('GET');
          })
        );
        if (doChunking) {
          checkPassages(collection.files, [10, 10, 10, 10, 10], collection);
        }
        var srcFileHistory = [Genai.SourceFile.StatusEnum.NOT_INDEXED];
        if (doChunking) {
          srcFileHistory = [Genai.SourceFile.StatusEnum.CHUNKED, Genai.SourceFile.StatusEnum.CHUNKING];
        }
        TestApi.checkSrcFileHistory(this.collection.get('files').files, srcFileHistory);
      });

      it('ignores changes when syncSpec.doNotCheckForModifiedFiles is true', function () {
        var collection = this.collection.get('this, files.this');
        TestApi.populateTxtSrcCollectionRoot(collection, 2, 5).pluck('url'); // Rewrite first two files
        var syncJobs = this.collection.sync(
          Genai.SourceCollection.SyncSpec.make({ doNotCheckForModifiedFiles: true }),
          this.chunkingSpec
        );
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        var updatedCollection = this.collection.get('id, lastSyncTime, files.this');
        validateSameFilesAfterSync(collection, updatedCollection);
        if (doChunking) {
          checkPassages(collection.files, [10, 10, 10, 10, 10], collection);
        }
        var srcFileHistory = [
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
          Genai.SourceFile.StatusEnum.SYNCING,
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
        ];

        if (doChunking) {
          srcFileHistory = [
            Genai.SourceFile.StatusEnum.CHUNKED,
            Genai.SourceFile.StatusEnum.SYNCING,
            Genai.SourceFile.StatusEnum.CHUNKED,
            Genai.SourceFile.StatusEnum.CHUNKING,
            Genai.SourceFile.StatusEnum.NOT_INDEXED,
          ];
        }
        TestApi.checkSrcFileHistory(this.collection.get('files').files, srcFileHistory);
      });

      it('updates SourceFiles when source files are updated', function () {
        var collection = this.collection.get('this, files.this');
        var originalFiles = collection.files;

        // Rewrite first two files
        var updatedSrcFileUrls = TestApi.populateTxtSrcCollectionRoot(collection, 2, 15).pluck('url');
        var urls = this.collectionFiles.pluck('url');
        updatedSrcFileUrls.every((url) => {
          return expect(urls.contains(url)).toBeTrue();
        });
        expect(updatedSrcFileUrls.size).toEqual(2);
        var syncJobs = this.collection.sync(null, this.chunkingSpec);
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        var updatedCollection = this.collection.get('this, files.this');
        var updatedFiles = updatedCollection.files;
        expect(collection.lastSyncTime).toBeLessThan(updatedCollection.lastSyncTime);
        expect(updatedFiles.size).toEqual(this.collectionFiles.size);
        expect(updatedFiles.size).toEqual(originalFiles.size);
        if (!doChunking) {
          var srcFileHistory = [
            Genai.SourceFile.StatusEnum.NOT_INDEXED,
            Genai.SourceFile.StatusEnum.SYNCING,
            Genai.SourceFile.StatusEnum.NOT_INDEXED,
            Genai.SourceFile.StatusEnum.SYNCING,
            Genai.SourceFile.StatusEnum.NOT_INDEXED,
          ];
          TestApi.checkSrcFileHistory(this.collection.get('files').files, srcFileHistory);
        }
        this.collectionFiles.each((file) => {
          var originalFile = originalFiles.first((d) => {
            return d.originalFile.url === file.url;
          });
          var updatedFile = updatedFiles.first((d) => {
            return d.originalFile.url === file.url;
          });
          expect(Val.isEmpty(originalFile)).toBe(false);
          expect(Val.isEmpty(updatedFile)).toBe(false);
          expect(updatedFile.id).toEqual(originalFile.id);
          expect(updatedFile.get()).not.toBe(null);
        });
        if (doChunking) {
          checkPassages(updatedCollection.files, [15, 15, 10, 10, 10], updatedCollection);
        }
      });

      it('updates only specific SourceFiles in collection when re-sync is triggered and file is updated', function () {
        var collection = this.collection.get('this, files.this');
        var originalSrcFiles = collection.files;
        var updatedFileUrl = TestApi.populateTxtSrcCollectionRoot(collection, 1, 15).first().url;
        var sourceFileToBeUpdated = originalSrcFiles.first((f) => {
          return f.originalFile.url === updatedFileUrl;
        });
        if (doChunking) {
          this.collection.syncFiles([sourceFileToBeUpdated], this.chunkingSpec);
        } else {
          this.collection.syncFiles([sourceFileToBeUpdated]);
        }
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        var allUpdatedFiles = collection.get('files.this').files;
        expect(allUpdatedFiles.length).toEqual(originalSrcFiles.length);

        var updatedFile = allUpdatedFiles.first((f) => {
          return f.originalFile.url === updatedFileUrl;
        });
        expect(sourceFileToBeUpdated.meta.updated)
          .withContext('resynced source file')
          .toBeLessThan(updatedFile.meta.updated);

        var allUnchangedFiles = allUpdatedFiles.filter((f) => {
          return f.originalFile.url !== updatedFileUrl;
        });
        originalSrcFiles
          .filter((f) => {
            return f.originalFile.url !== updatedFileUrl;
          })
          .each((originalFile) => {
            var unchangedFile = allUnchangedFiles.first((f) => {
              return f.id === originalFile.id;
            });
            expect(originalFile.meta.updated).withContext('unchanged source file').toEqual(unchangedFile.meta.updated);
          });
      });

      it('does not update sourceFiles in collection when re-sync is triggered and file is not updated', function () {
        var collection = this.collection.get('this, files.this');
        var originalSrcFiles = collection.files;
        var sourceFileToBeUpdated = originalSrcFiles.first();
        if (doChunking) {
          this.collection.syncFiles([sourceFileToBeUpdated], this.chunkingSpec);
        } else {
          this.collection.syncFiles([sourceFileToBeUpdated]);
        }
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        var allUpdatedFiles = collection.get('files.this').files;
        expect(allUpdatedFiles.length).toEqual(originalSrcFiles.length);

        originalSrcFiles.each((originalFile) => {
          var unchangedFile = allUpdatedFiles.first((f) => {
            return f.id === originalFile.id;
          });
          expect(originalFile.meta.updated).withContext('unchanged source file').toEqual(unchangedFile.meta.updated);
        });
      });

      it('does not check for removed source files when checkForRemovedOriginalFiles is not true', function () {
        var collection = this.collection.get('this, files.this');
        this.collectionFiles.first().delete();
        expect(FileSystem.listFiles(collection.rootUrl).files.size).toEqual(this.collectionFiles.size - 1);
        var syncJobs = collection.sync(null, this.chunkingSpec);
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        validateSameFilesAfterSync(collection, collection.get('this, files.this'));
        if (doChunking) {
          checkPassages(collection.files, [15, 15, 10, 10, 10], collection.get('this, files.this'));
        }
      });

      it('archives stale SourceFiles when checkForRemovedOriginalFiles is true', function () {
        var collection = this.collection.get('this, files.this');
        var syncJobs = collection.sync(
          Genai.SourceCollection.SyncSpec.make({
            checkForRemovedOriginalFiles: true,
          }),
          this.chunkingSpec
        );
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForJob(this.ctx, syncJobs.objBatchJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        var archivedSourceFiles = Genai.SourceFile.fetch({
          filter: Filter.eq('collection.id', this.collection.id)
            .and()
            .eq('status.value', Genai.SourceFile.StatusEnum.ARCHIVED),
        }).objs;
        TestApi.checkSrcFileHistory(archivedSourceFiles, [Genai.SourceFile.StatusEnum.ARCHIVED]);
        var updatedCollection = this.collection.get('this, files.this');
        expect(updatedCollection.files.size).toEqual(5);
        var updatedCollectionUrls = updatedCollection.files.mapToStr((d) => {
          return d.originalFile.url;
        });
        expect(updatedCollectionUrls.contains(this.collectionFiles.first().url)).toBe(true);
        if (doChunking) {
          checkPassages(updatedCollection.files, [null, 15, 10, 10, 10], updatedCollection);
        }
      });

      it('does not create SourceFiles for unsupported files', function () {
        this.filesBeforeSync = this.collection.get('files.originalFile').files;

        // Add an unsupported file type
        var fileName = 'unsupported_file' + '.unsupported';
        var filePath = Str.removePrefix(UrlPath.fromString(this.collection.rootUrl).append(fileName).toString(), '/');
        C3.File.make(filePath).writeString('unsupported file content');
        var syncJobs = this.collection.sync(null, this.chunkingSpec);
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);
        this.filesAfterSync = this.collection.get('files.originalFile').files;

        // Count remains the same as unsupported file is not synced
        expect(this.filesBeforeSync.size).toEqual(this.filesAfterSync.size);

        // Unsupported file is not synced
        var unsupportedFile = this.filesAfterSync.first((f) => {
          return f.originalFile.url === filePath;
        });
        expect(unsupportedFile).toBeNull();
      });

      it('creates SourceFiles for files with uppercase extensions', function () {
        this.filesBeforeSync = this.collection.get('files.originalFile').files;

        var fileName = 'fileWithUpperCaseExt' + '.TXT';
        var filePath = Str.removePrefix(UrlPath.fromString(this.collection.rootUrl).append(fileName).toString(), '/');
        C3.File.make(filePath).writeString('file with upper case extension content');
        var syncJobs = this.collection.sync(null, this.chunkingSpec);
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);
        this.filesAfterSync = this.collection.get('files.originalFile').files;

        expect(this.filesAfterSync.size).toEqual(this.filesBeforeSync.size + 1);
      });

      it('does not create a new SourceFile after a file is renamed and moved to deleted folder', function () {
        const collection = this.collection.get('this, files.this');
        const collectionSizeBeforeSync = collection.files.size;

        // Modify one of the files
        const firstFile = collection.files.first();
        Genai.SourceFile.transitionFilesToStatus([firstFile], Genai.SourceFile.StatusEnum.DELETED);
        Genai.SourceFile.renameAndMoveToDeletedFolder([firstFile]);

        var syncJobs = this.collection.sync(null, this.chunkingSpec);
        TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);

        // Count remains the same as transitioned file is not synced
        const collectionSizeAfterSync = this.collection.get('this, files.this').files.size;
        expect(collectionSizeBeforeSync).toEqual(collectionSizeAfterSync);
      });
    });
  });

  describe('mergedPassages', function () {
    beforeAll(function () {
      // Create the SourceCollection
      this.collectionSubpath = filename + '/' + Uuid.create();
      this.collectionRootSubpath = this.collectionSubpath + '/testMergedPassagesCollRoot';
      this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);
      this.collectionTarget = FileSystem.makeFile(this.collectionSubpath + '/testMergedPassagesCollTarget');
      this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'mergedPassages collection',
        name: 'testMergedPassagesCollection',
        rootUrl: this.collectionRoot.url,
        targetUrl: this.collectionTarget.url,
      }).get();

      this.fileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', [
        {
          collection: this.collection,
          originalFile: FileSystem.makeFile(this.collectionRootSubpath + '/one.txt'),
        },
        {
          collection: this.collection,
          originalFile: FileSystem.makeFile(this.collectionRootSubpath + '/two.txt'),
        },
      ]);
      this.files = Genai.SourceFile.fetch({ filter: Filter.intersects('id', this.fileIds) }).objs;

      // Create the SourcePassages
      this.files[0].writePassages([
        {
          source: Genai.SourceFile.make({ id: this.fileIds[0] }),
          intraSourceId: '0',
          contentStr: 'file one passage zero',
        },
        {
          source: Genai.SourceFile.make({ id: this.fileIds[0] }),
          intraSourceId: '1',
          contentStr: 'file one passage one',
        },
        {
          source: Genai.SourceFile.make({ id: this.fileIds[0] }),
          intraSourceId: '2',
          contentStr: 'file one passage two',
        },
      ]);
      this.files[1].writePassages([
        {
          source: Genai.SourceFile.make({ id: this.fileIds[1] }),
          intraSourceId: '0',
          contentStr: 'file two passage zero',
        },
        {
          source: Genai.SourceFile.make({ id: this.fileIds[1] }),
          intraSourceId: '1',
          contentStr: 'file one passage one',
        },
      ]);
      var sourcePassagesBuilder = Genai.SourcePassage.arrayBuilder();
      this.files.each((file) => {
        sourcePassagesBuilder.addAll(file.readPassages());
      });
      this.sourcePassages = sourcePassagesBuilder.build();

      this.fromStringSpy = TestApi.spyOn(this.ctx, 'UrlPath', 'fromString').callThrough().register();
      this.readPassagesSpy = TestApi.spyOn(this.ctx, 'Genai.SourceFile', 'readPassages');
      this.checkFile = function (file, expectEmpty) {
        // File should have the correct structure
        expect(file).toBeDefined();
        expect(file.url).toEqual(this.collection.targetUrl + '/' + this.collection.id + '_combinedPassagesFile');

        // And should have the correct content
        var contents = file.readString();
        if (!expectEmpty) {
          this.sourcePassages.each((cur) => {
            return expect(contents).toContain(cur.contentStr);
          });
        } else {
          expect(contents).toEqual('[]');
        }
      };
    });

    afterAll(function () {
      TestApi.cleanUpCollection(this.collection);
      TestApi.teardown(this.ctx);
      FileSystem.deleteFiles(this.collectionRoot.url, true);
    });

    it('creates a File when it does not yet exist', function () {
      var file = this.collection.mergedPassages();
      this.checkFile(file);

      // Should have written to the file
      expect(this.fromStringSpy.getActionMock().callCount()).toEqual(1);
    });

    it('reads the file when it does exist', function () {
      var file = this.collection.mergedPassages();

      // Should have returned the already-persisted file
      this.checkFile(file);

      // Should not have written anything this time
      expect(this.fromStringSpy.getActionMock().callCount()).toEqual(1);
    });

    it('does not refresh the file when not stale', function () {
      var file = this.collection.mergedPassages(true);

      // Should have returned the already-persisted file
      this.checkFile(file);

      // Should not have written anything this time
      expect(this.fromStringSpy.getActionMock().callCount()).toEqual(1);
    });

    it('refreshes the file when stale', function () {
      this.collection.withoutVersion().withCombinedPassagesFileIsStale(true).merge();
      var file = this.collection.mergedPassages(true);

      // Should have returned the already-persisted file
      this.checkFile(file);

      // Should have re-written the file
      expect(this.fromStringSpy.getActionMock().callCount()).toEqual(2);

      // Should have updated the stale flag
      expect(this.collection.get('combinedPassagesFileIsStale').combinedPassagesFileIsStale).toEqual(false);
    });

    it('refreshes the file when forced', function () {
      var file = this.collection.mergedPassages(false, true);

      // Should have returned the already-persisted file
      this.checkFile(file);

      // Should not have written anything this time
      expect(this.fromStringSpy.getActionMock().callCount()).toEqual(3);
    });

    it('omits files that are empty (removed files or files without content)', function () {
      this.readPassagesSpy.returnValue([]).register();
      var file = this.collection.mergedPassages(true, true);

      // Should return a file with no passages (because readPassagesSpy is returning empty as well)
      this.checkFile(file, true);
    });
  });

  describe('upload', function () {
    beforeAll(function () {
      var dataMountPath = FileSystem.mounts().get('data-load');
      var kvMountPath = FileSystem.mounts().get('key-value');
      this.commonSubPath = filename + '/' + Uuid.create();
      this.collectionRootPath = dataMountPath + this.commonSubPath;
      this.filesPath = kvMountPath + this.commonSubPath;

      this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'upload collection',
        name: 'testUpload',
        rootUrl: this.collectionRootPath,
        targetUrl: this.collectionRootPath + '/target',
      }).get();
      this.numFiles = 10;
      this.files = TestApi.createFilesAndPopulate(this.filesPath, this.numFiles);
      this.filesToUpload = FileSystem.listFiles(this.filesPath).files;

      this.numFilesBeforeUpload = FileSystem.listFiles(this.collection.rootUrl).files.length;
      this.numSourceFilesBeforeUpload = Genai.SourceFile.fetchCount();

      // Upload the first 5 files with embedMetadata = false
      this.uploadedSourceFiles = this.collection.upload(this.filesToUpload.withSplice(5, 5));
      var collection = this.collection;
      var filesToUpload = this.filesToUpload.withSplice(5, 5);

      expect(function () {
        // Upload the same 5 files again to overwrite the previous ones
        collection.upload(filesToUpload);
      }).not.toThrowError();

      // Upload the next 5 files with embedMetadata = true
      this.collection.setMetadataConfig({ embedMetadata: true });
      this.collection.upload(this.filesToUpload.withSplice(0, 5));
      this.numFilesAfterUpload = FileSystem.listFiles(this.collection.rootUrl).files.length;
      this.numSourceFilesAfterUpload = Genai.SourceFile.fetchCount();
      this.vectorStore = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename,
      }).get();
      this.initialUnstructuredQueryEngineConfig = Genai.UnstructuredQuery.Engine.Config.inst();
      Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue('vectorStore', this.vectorStore);

      TestApi.waitForSetup(this.ctx, null, 1, 120);
    });

    afterAll(function () {
      this.sourceFilesToDelete = Genai.SourceFile.fetch({
        include: 'originalFile',
        filter: Filter.intersects(
          'originalFile.url',
          this.files.map((f) => {
            return f.url;
          })
        ),
      }).objs;
      this.collection.setMetadataConfig({ embedMetadata: false });

      Genai.SourceFile.removeBatch(this.sourceFilesToDelete);
      FileSystem.deleteFiles(this.collection.rootUrl, true);
      FileSystem.deleteFiles(this.filesPath, true);
      this.vectorStore.remove();
      this.initialUnstructuredQueryEngineConfig.setConfig();
      TestApi.cleanUpCollection(this.collection);
      TestApi.teardown(this.ctx);
    });

    it('returns the created source files', function () {
      expect(this.uploadedSourceFiles.length).toEqual(5);
    });

    it('uploads the file at the source collection root url', function () {
      expect(this.numFilesBeforeUpload).toEqual(0);
      expect(this.numFilesAfterUpload).toEqual(this.numFiles);
    });

    it('puts the files into the `NOT_INDEXED` state', function () {
      this.sourceFiles = Genai.SourceFile.fetch({
        filter: Filter.eq('collection.id', this.collection.id),
        include: 'status.value, statusHistory.value',
      }).objs;
      TestApi.checkSrcFileHistory(this.sourceFiles, [Genai.SourceFile.StatusEnum.NOT_INDEXED]);
    });

    it('creates SourceFile instances for each of the files uploaded', function () {
      var numSourceFilesAdded = this.numSourceFilesAfterUpload - this.numSourceFilesBeforeUpload;
      expect(numSourceFilesAdded).toEqual(this.numFiles);
    });

    it('adds metadata to the newly created SourceFiles', function () {
      var newSourceFilesAdded = this.collection.get('files.this').files;
      expect(newSourceFilesAdded.length).toEqual(this.filesToUpload.length);

      // TODO: GENAI-1205 Update test after author support is added based on fileType during ingestion
      newSourceFilesAdded.each((sourceFile) => {
        var metadata = sourceFile.metadata;
        expect(metadata.fileName).toEqual(sourceFile.originalFile.fileName());
        expect(metadata.fileType).toEqual(sourceFile.originalFile.fileExt());
      });
    });

    it('updates to correct file status on overwrite', function () {
      var sourceFile = this.collection.get('files.this').files[0];
      Genai.SourceFile.process([sourceFile]);

      // Allow extra time for indexing to complete
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 600);
      TestApi.checkSrcFileHistory(
        [sourceFile],
        [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
      );

      this.collection.upload([sourceFile.originalFile]);
      TestApi.waitForSetup(this.ctx, null, 1, 60);

      newSourceFilesAdded = this.collection.get('files.this').files;
      expect(newSourceFilesAdded.length).toEqual(this.filesToUpload.length);

      TestApi.checkSrcFileHistory(
        [sourceFile],
        [
          Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
    });
  });

  describe('setMetadataConfig', function () {
    beforeAll(function () {
      this.collectionSubpath = filename + '/' + Uuid.create();
      this.collectionRootSubpath = this.collectionSubpath + '/testMetadataConfigCollRoot';
      this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);
      this.collectionTarget = FileSystem.makeFile(this.collectionSubpath + '/testMetadataConfigCollTarget');
      this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'setMetadata collection',
        name: 'setMetadataCollection',
        rootUrl: this.collectionRoot.url,
        targetUrl: this.collectionTarget.url,
      }).get();

      TestApi.populateTxtSrcCollectionRoot(this.collection, 2);
      this.chunkingSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.Line,
      });

      var syncJobs = this.collection.sync(null, this.chunkingSpec);
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 120);
      TestApi.waitForSetup(this.ctx, null, 1, 180);
      this.collectionSrcFiles = this.collection.get('files').files;
      this.vectorStore = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename,
      }).get();
      this.initialUnstructuredQueryEngineConfig = Genai.UnstructuredQuery.Engine.Config.inst();
      Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue('vectorStore', this.vectorStore);
      this.collection = this.collection.get('id, files');
      Genai.SourceFile.process(this.collection.files, null, this.chunkingSpec);

      // Allow extra time for indexing to complete
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 600);
    });

    afterAll(function () {
      TestApi.cleanUpCollection(this.collection);
      this.vectorStore.remove();
      this.initialUnstructuredQueryEngineConfig.setConfig();
      Genai.SourceFile.Chunker.Engine.terminate();
    });

    it('sets the config correctly and updates state of source file to re-index required', function () {
      expect(this.collection.config().configValue('embedMetadata')).withContext('existing config').toEqual(false);

      var configToUpdate = Genai.SourceCollection.Metadata.Config.make({
        embedMetadata: true,
      });
      this.collection.setMetadataConfig(configToUpdate);
      TestApi.waitForSetup(this.ctx, null, 1, 60);

      var needsReindexFileCount = Genai.SourceFile.fetchCount({
        filter: Filter.eq('collection.id', this.collection.id)
          .and()
          .eq('status.value', Genai.SourceFile.StatusEnum.NEEDS_REINDEXING),
      });

      expect(this.collection.config().configValue('embedMetadata')).withContext('new config').toEqual(true);
      expect(needsReindexFileCount).toEqual(2);
    });
  });

  describe('beforeRemove', function () {
    beforeAll(function () {
      this.collectionSubpath = filename + '/' + Uuid.create();
      this.collectionRootSubpath = this.collectionSubpath + '/testBeforeRemoveRoot';
      this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);
      this.collectionTarget = FileSystem.makeFile(this.collectionSubpath + '/testBeforeRemoveTarget');
      this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'remove collection',
        name: 'beforeRemoveCollection',
        rootUrl: this.collectionRoot.url,
        targetUrl: this.collectionTarget.url,
      }).get();

      TestApi.populateTxtSrcCollectionRoot(this.collection, 2);
      this.chunkingSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.Line,
      });

      var syncJobs = this.collection.sync(null, this.chunkingSpec);
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60);
      TestApi.waitForSetup(this.ctx, null, 1, 60);
      this.vectorStore = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
        name: filename,
      }).get();
      this.initialUnstructuredQueryEngineConfig = Genai.UnstructuredQuery.Engine.Config.inst();
      Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue('vectorStore', this.vectorStore);
      this.collection = this.collection.get('id, files');
      Genai.SourceFile.process([this.collection.files[0]], null, this.chunkingSpec);

      // Allow extra time for indexing to complete
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'MapReduceQueue', 'CalcFieldsQueue'], 1, 600);
      this.collection.remove();
      TestApi.waitForSetup(this.ctx, null, 1, 60);
    });

    afterAll(function () {
      Genai.SourceFile.removeAll({ filter: Filter.intersects('id', this.collection.files.pluck('id')) }, true);
      this.vectorStore.remove();
      this.initialUnstructuredQueryEngineConfig.setConfig();
    });

    it('removes the collection and correctly transitions the source files', function () {
      expect(Genai.SourceCollection.forId(this.collection.id)).toBeNull();
      expect(this.collection.files[0].get('statusHistory.value').statusHistory[0].value).toEqual(
        Genai.SourceFile.StatusEnum.NEEDS_REMOVAL
      );
      expect(this.collection.files[1].get('statusHistory.value').statusHistory[0].value).toEqual(
        Genai.SourceFile.StatusEnum.ARCHIVED
      );
    });

    describe('files synced to a new collection after old collection is deleted', function () {
      beforeAll(function () {
        this.collection2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
          description: 'remove collection 2',
          name: 'beforeRemoveCollection2',
          rootUrl: this.collectionRoot.url,
          targetUrl: this.collectionTarget.url,
          files: this.collectionSrcFiles,
        }).get();
        var syncJobs2 = this.collection2.sync(null, this.chunkingSpec);
        TestApi.waitForJob(this.ctx, syncJobs2.fileSystemJob, 1, 60);
        TestApi.waitForSetup(this.ctx, null, 1, 60);
        this.collection2 = this.collection2.get('id, files');
      });

      afterAll(function () {
        Genai.SourceFile.removeAll({ filter: Filter.intersects('id', this.collection2.files.pluck('id')) }, true);
      });

      it('points to the new collection', function () {
        expect(this.collection.files[0].collection.id).not.toEqual(this.collection2.files[0].collection.id);
      });
    });
  });
});
