/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_LineChunker';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Create the SourceCollection
    this.collectionRootSubpath = filename + '/' + Uuid.create() + '/testLineChunkerCollRoot';
    this.collectionRoot = FileSystem.makeFile(this.collectionRootSubpath);
    this.collection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      description: 'test linechunker collection',
      name: 'testLineChunkerCollection',
      rootUrl: this.collectionRoot.url,
      targetUrl: filename + '/test',
    }).get();

    var fileIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', [
      {
        collection: this.collection,
        originalFile: FileSystem.makeFile(this.collectionRootSubpath + '/0.txt'),
      },
      {
        collection: this.collection,
        originalFile: FileSystem.makeFile(this.collectionRootSubpath + '/1.txt'),
      },
      {
        collection: this.collection,
        originalFile: FileSystem.makeFile(this.collectionRootSubpath + '/2.txt'),
      },
    ]);
    this.files = Genai.SourceFile.fetch({
      filter: Filter.intersects('id', fileIds),
      include: 'originalFile.this, this',
    }).objs;
    expect(this.files.length).toEqual(3);

    this.lineContent = function (idx) {
      return 'file ' + idx + '\n';
    };

    this.fileContent = function (idx) {
      return this.lineContent(idx).repeat(5 * (idx + 1));
    };

    this.checkFile = function (file, idx) {
      // File should have the correct structure
      expect(file).toBeDefined();
      expect(file.url).toEqual(this.collectionRoot.url + '/' + idx + '.txt');

      // And should have the correct content
      var contents = file.readString();
      expect(contents).toEqual(this.fileContent(idx));
    };

    this.checkIntraSourceIds = function (fileIdx, foundIntraFileIndices) {
      expect(foundIntraFileIndices.length).toEqual(5 * (fileIdx + 1));
      foundIntraFileIndices
        .sort(function (a, b) {
          return a - b;
        })
        .forEach((e, i) => expect(e).toEqual(i));
    };

    this.checkPassages = function (file, passages, fileIdx) {
      expect(passages.length).toEqual(5 * (fileIdx + 1));
      var intraSourceIds = [];
      passages.each((p) => {
        expect(p.contentStr).toEqual(this.lineContent(fileIdx));
        expect(p.source.id).toEqual(file.id);
        intraSourceIds.push(Number.parseInt(p.intraSourceId));
      });
      this.checkIntraSourceIds(fileIdx, intraSourceIds);
    };

    this.checkPassagesFile = function (sourceFile, passages) {
      sourceFile = sourceFile.get('passagesFile.url, originalFile.url, collection.targetUrl');
      passagesFile = sourceFile.passagesFile;
      expect(passagesFile).toBeDefined();
      expect(passagesFile.fileNameNoExt()).toEqual(
        sourceFile.id + sourceFile.originalFile.fileNameNoExt() + '-passages'
      );
      TestApi.checkSrcFileHistory([sourceFile], [Genai.SourceFile.StatusEnum.CHUNKED]);

      var passagesFromFile = C3.type('Array<Genai.SourcePassage>').fromJsonString(passagesFile.readString());
      passages.each((p, idx) => {
        var pff = passagesFromFile[idx];
        expect(pff.source.id).toEqual(p.source.id);
        expect(pff.intraSourceId).toEqual(p.intraSourceId);
        expect(pff.contentStr).toEqual(p.contentStr);
      });
    };

    this.files.each((file, idx) => {
      file.originalFile.writeString(this.fileContent(idx));
      this.checkFile(file.originalFile, idx);
    });

    this.chunkNoPersist = Genai.SourceFile.Chunker.Line.chunkFile(
      this.files[0],
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line }),
      true
    ).passages;
    this.chunkBatchNoPersist = Genai.SourceFile.Chunker.Line.chunkFilesBatch(
      this.files.slice(1),
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line }),
      true
    ).passages;

    TestApi.waitForSetup(this.ctx, null, 1, 120);

    this.chunkPersist = Genai.SourceFile.Chunker.Line.chunkFile(
      this.files[0],
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line })
    ).passages;
    this.chunkBatchPersist = Genai.SourceFile.Chunker.Line.chunkFilesBatch(
      this.files.slice(1),
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Line })
    ).passages;

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    FileSystem.deleteFiles(this.collectionRoot.url, true);
  });

  describe('without persisting', function () {
    it('chunkFile', function () {
      this.checkPassages(this.files.first(), this.chunkNoPersist, 0);
      this.checkPassagesFile(this.files.first(), this.chunkNoPersist);
    });

    it('chunkFilesBatch', function () {
      expect(this.chunkBatchNoPersist.length).toEqual(25);
      var file1Psgs = [];
      var file2Psgs = [];
      this.chunkBatchNoPersist.each((c) => {
        if (c.source.id == this.files[1].id) {
          fileNum = 1;
          file1Psgs.push(c);
        } else {
          expect(c.source.id).toEqual(this.files[2].id);
          file2Psgs.push(c);
        }
      });

      this.checkPassages(this.files[1], Genai.SourcePassage.array(file1Psgs), 1);
      this.checkPassagesFile(this.files[1], Genai.SourcePassage.array(file1Psgs));
      this.checkPassages(this.files[2], Genai.SourcePassage.array(file2Psgs), 2);
      this.checkPassagesFile(this.files[2], Genai.SourcePassage.array(file2Psgs));
    });
  });

  describe('with persisting', function () {
    it('chunkFile', function () {
      var passages = this.files.first().readPassages();

      this.checkPassages(this.files.first(), passages, 0);
      this.checkPassages(this.files.first(), this.chunkPersist, 0);
    });

    it('chunkFilesBatch', function () {
      expect(this.chunkBatchNoPersist.length).toEqual(25);
      var file1Passages = [];
      var file2Passages = [];
      this.chunkBatchNoPersist.each((c) => {
        if (c.source.id == this.files[1].id) {
          fileNum = 1;
          file1Passages.push(c);
        } else {
          expect(c.source.id).toEqual(this.files[2].id);
          file2Passages.push(c);
        }
      });

      this.checkPassages(this.files[1], Genai.SourcePassage.array(file1Passages), 1);
      var passages = this.files[1].readPassages();
      this.checkPassages(this.files[1], passages, 1);

      this.checkPassages(this.files[2], Genai.SourcePassage.array(file2Passages), 2);
      passages = this.files[2].readPassages();
      this.checkPassages(this.files[2], passages, 2);
    });
  });
});
