/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UniversalChunker';
var testSets = [
  {
    postProcessing: false,
    expectedResults: {
      'Finetuning-Tutorial.ipynb': {
        minNumPassages: 7,
        maxNumPassages: 12,
        firstPassageSubstring: 'finetune',
        lastPassageSubstring: 'checkpoint folder',
      },
      'tutorial-lightbulb.c3doc': {
        minNumPassages: 40,
        maxNumPassages: 60,
        firstPassageSubstring: 'topic type',
        lastPassageSubstring: 'component type',
      },
      'tutorial-lightbulb.c3doc.md': {
        minNumPassages: 40,
        maxNumPassages: 60,
        firstPassageSubstring: 'topic type',
        lastPassageSubstring: 'component type',
      },
      'Digital-transformation.pdf': {
        minNumPassages: 13,
        maxNumPassages: 20,
        firstPassageSubstring: 'digital transformation',
        lastPassageSubstring: 'existential threat',
        lastPassagePageNum: 7,
      },
      'Digital-transformation2.PDF': {
        minNumPassages: 13,
        maxNumPassages: 20,
        firstPassageSubstring: 'digital transformation',
        lastPassageSubstring: 'existential threat',
        lastPassagePageNum: 7,
      },
      'Config.c3typ': {
        minNumPassages: 75,
        maxNumPassages: 95,
        firstPassageSubstring: 'configurations',
        lastPassageSubstring: 'captures any issues',
      },
      'PythonSDK1.md': {
        minNumPassages: 20,
        maxNumPassages: 40,
        firstPassageSubstring: 'python sdk',
        lastPassageSubstring: 'py4j',
      },
      'PythonSDK2.md': {
        minNumPassages: 20,
        maxNumPassages: 40,
        firstPassageSubstring: 'python sdk',
        lastPassageSubstring: 'py4j',
      },
      'Thor.md': {
        minNumPassages: 1,
        maxNumPassages: 10,
        firstPassageSubstring: 'Thor',
        lastPassageSubstring: 'Thunder',
      },
    },
  },
  {
    postProcessing: true,
    expectedResults: {
      'Finetuning-Tutorial.ipynb': {
        minNumPassages: 7,
        maxNumPassages: 12,
        firstPassageSubstring: 'finetune',
        lastPassageSubstring: 'checkpoint folder',
      },
      'tutorial-lightbulb.c3doc': {
        minNumPassages: 40,
        maxNumPassages: 60,
        firstPassageSubstring: 'topic type',
        lastPassageSubstring: 'component type',
      },
      'tutorial-lightbulb.c3doc.md': {
        minNumPassages: 40,
        maxNumPassages: 60,
        firstPassageSubstring: 'topic type',
        lastPassageSubstring: 'component type',
      },
      'Digital-transformation.pdf': {
        minNumPassages: 13,
        maxNumPassages: 20,
        firstPassageSubstring: 'digital transformation',
        lastPassageSubstring: 'existential threat',
        lastPassagePageNum: 7,
      },
      'Digital-transformation2.PDF': {
        minNumPassages: 13,
        maxNumPassages: 20,
        firstPassageSubstring: 'digital transformation',
        lastPassageSubstring: 'existential threat',
        lastPassagePageNum: 7,
      },
      'Config.c3typ': {
        minNumPassages: 75,
        maxNumPassages: 95,
        firstPassageSubstring: 'configurations',
        lastPassageSubstring: 'captures any issues',
      },
      'PythonSDK1.md': {
        minNumPassages: 20,
        maxNumPassages: 40,
        firstPassageSubstring: 'python sdk (i.e. software development kit)',
        lastPassageSubstring: 'py4j',
      },
      'PythonSDK2.md': {
        minNumPassages: 20,
        maxNumPassages: 40,
        firstPassageSubstring: 'python sdk (i.e. software development kit)',
        lastPassageSubstring: 'py4j',
      },
      'Thor.md': {
        minNumPassages: 1,
        maxNumPassages: 10,
        firstPassageSubstring: 'Thoooooor',
        lastPassageSubstring: 'Thunder',
      },
    },
  },
];
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.previousConfig = Genai.SourceFile.Chunker.UniversalChunker.Config.inst().getConfig();

    /*
     * Define a Lambda function to be used for post-processing.
     * This function replaces the words in the mapping (key) by their values.
     */
    this.replacementFunction = function (sourcePassage, args) {
      var content = sourcePassage.contentStr;

      var mapping = args.mapping;
      for (var toReplace in mapping) {
        var replaceWith = mapping[toReplace];
        var regex = new RegExp(toReplace, 'gi');
        content = content.replace(regex, replaceWith);
      }

      return sourcePassage.withContentStr(content);
    };

    this.lambdaReplacement = Lambda.fromJsFunc(this.replacementFunction);
    this.args = { mapping: { Thor: 'Thoooooor', Tutorial: 'Tuto', sdk: 'sdk (i.e. software development kit)' } };

    this.previousConfig.setConfigValue('postProcessingFunction', this.lambdaReplacement);
    this.previousConfig.setConfigValue('postProcessingArgs', this.args);

    this.checkPassages = function (sourceFile, passages, expectedResults) {
      var fileName = sourceFile.originalFile.fileName();
      var expected = expectedResults[fileName];
      TestApi.checkChunking(sourceFile, passages, expected);
    };

    this.checkPassagesFile = function (sourceFile, passages) {
      sourceFile = sourceFile.get('passagesFile.url, originalFile.url, collection.targetUrl');
      passagesFile = sourceFile.passagesFile;
      expect(passagesFile).toBeDefined();
      expect(passagesFile.fileNameNoExt()).toEqual(
        sourceFile.id + sourceFile.originalFile.fileNameNoExt() + '-passages'
      );
      var passagesFromFile = C3.type('Array<Genai.SourcePassage>').fromJsonString(passagesFile.readString());
      TestApi.checkSrcFileHistory(
        [sourceFile],
        [
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
          Genai.SourceFile.StatusEnum.CHUNKED,
          Genai.SourceFile.StatusEnum.CHUNKING,
        ]
      );

      passages = passages.sorted(function (p1, p2) {
        return p1.intraSourceId - p2.intraSourceId;
      });
      passagesFromFile = passagesFromFile.sorted(function (p1, p2) {
        return p1.intraSourceId - p2.intraSourceId;
      });
      passages.each((p, idx) => {
        var pff = passagesFromFile[idx];
        expect(pff.source.id).toEqual(p.source.id);
        expect(pff.intraSourceId).toEqual(p.intraSourceId);
        expect(pff.contentStr.length).toEqual(p.contentStr.length);
        expect(pff.contentStr).toEqual(p.contentStr);
      });
    };

    this.setupCollection = function () {
      this.collectionRootSubpath = filename + '/' + Uuid.create() + '/testUniversalChunkerCollRoot';
      this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);
      this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
        description: 'test universalchunker collection',
        name: 'testUniversalChunker',
        rootUrl: this.collectionRoot.url,
        targetUrl: filename + '/test',
      }).get();

      // Move test files from package metadata to collection root

      Pkg.files('meta://genAiBase/test/resource/chunker/universalChunker/*')
        .elements()
        .each((f) => {
          // Ignore Pkg.Issues files (they have category "cache")
          if (f.category === 'resource') {
            // C3typ files in non-source directories cause code-gen errors
            var targetFileName = f.fileName() === 'Config.c3' ? 'Config.c3typ' : f.fileName();
            f.copy(this.collectionRoot.url + '/' + targetFileName);
          }
        });
      var mdFile = C3.File.make('meta://genAiBase/test/src/tutorial-lightbulb.c3doc.md');
      mdFile.copy(this.collectionRoot.url + '/c3doc/' + 'tutorial-lightbulb.c3doc');
      mdFile.copy(this.collectionRoot.url + '/md/' + 'tutorial-lightbulb.c3doc.md');

      this.expectedFileNames = C3.Array.ofStr(
        'Config.c3typ',
        'Digital-transformation.pdf',
        'Digital-transformation2.PDF',
        'Finetuning-Tutorial.ipynb',
        'PythonSDK1.md',
        'PythonSDK2.md',
        'Thor.md',
        'tutorial-lightbulb.c3doc',
        'tutorial-lightbulb.c3doc.md'
      );

      var filesInRoot = FileSystem.listFiles(this.collectionRoot.url).files;
      var fileNamesInRoot = filesInRoot.mapToStr((f) => {
        return f.fileName();
      });

      expect(this.expectedFileNames.toSet().isSame(fileNamesInRoot.toSet())).toBe(true);

      this.files = filesInRoot.mapTo(Genai.SourceFile.meta().referenceType(), (file) => {
        return Genai.SourceFile.make({ collection: this.collection, originalFile: file });
      });
      var fileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', this.files);
      this.files = Genai.SourceFile.fetch({
        filter: Filter.intersects('id', fileIds),
        include: 'originalFile.this, collection.this, this',
      }).objs;
      expect(this.files.length).toEqual(this.expectedFileNames.length);

      return { collection: this.collection, files: this.files };
    };
  });

  afterAll(function () {
    // Restore the old config
    this.previousConfig.setConfig();
    TestApi.teardown(this.ctx);
  });

  _.each(testSets, function (testSet) {
    describe('With post-processing set ' + testSet.postProcessing, function () {
      beforeAll(function () {
        var setupObj = this.setupCollection();
        this.files = setupObj.files;
        this.collection = setupObj.collection;
        this.postProcessing = testSet.postProcessing;
        this.expectedResults = testSet.expectedResults;

        this.previousConfig.setConfigValue('doPostProcessing', this.postProcessing);
        this.chunkNoPersist = Genai.SourceFile.Chunker.Universal.chunkFile(
          this.files[0],
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
          true
        ).passages;
        this.chunkBatchNoPersist = Genai.SourceFile.Chunker.Universal.chunkFilesBatch(
          this.files.slice(1),
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal }),
          true
        ).passages;

        this.chunkPersist = Genai.SourceFile.Chunker.Universal.chunkFile(
          this.files[0],
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal })
        ).passages;
        this.chunkBatchPersist = Genai.SourceFile.Chunker.Universal.chunkFilesBatch(
          this.files.slice(1),
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal })
        ).passages;
        TestApi.waitForSetup(this.ctx);
      });

      afterAll(function () {
        TestApi.cleanUpCollection(this.collection);
      });

      describe('without persisting', function () {
        it('chunkFile', function () {
          this.checkPassages(this.files.first(), this.chunkNoPersist, this.expectedResults);
          this.checkPassagesFile(this.files.first(), this.chunkNoPersist);
        });

        it('chunkFilesBatch', function () {
          this.files.slice(1).each((file) => {
            this.checkPassages(
              file,
              this.chunkBatchNoPersist.filter((p) => {
                return p.source.id === file.id;
              }),
              this.expectedResults
            );
            this.checkPassagesFile(
              file,
              this.chunkBatchNoPersist.filter((p) => {
                return p.source.id === file.id;
              })
            );
          });
        });
      });

      describe('with persisting', function () {
        it('chunkFile', function () {
          var passages = this.files.first().readPassages();
          this.checkPassages(this.files.first(), passages, this.expectedResults);
          this.checkPassages(this.files.first(), this.chunkPersist, this.expectedResults);
        });

        it('chunkFilesBatch', function () {
          this.files.slice(1).each((file) => {
            this.checkPassages(
              file,
              this.chunkBatchPersist.filter((p) => {
                return p.source.id === file.id;
              }),
              this.expectedResults
            );
            var passages = file.readPassages();

            this.checkPassages(file, passages, this.expectedResults);
          });
        });

        it('writes to files in the collection.targetUrl', function () {
          var targetUrl = this.collection.get('targetUrl').targetUrl;
          var listFilesRes = FileSystem.listFiles(targetUrl);
          expect(listFilesRes.files.length).toEqual(this.expectedFileNames.length);
        });
      });
    });
  });
});
