/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_Elser';

// TODO GEN-12263 re-enable the test when we have a new Elasticsearch cluster
xdescribe(filename, function () {
  beforeAll(function () {
    TestApi.setElasticKey();
    this.ctx = TestApi.createContext(filename);

    this.sourceFile1 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      id: filename + '_SourceFile1',
      originalFile: C3.File.make('sourceFile1'),
    });
    this.sourceFile2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      id: filename + '_SourceFile2',
      originalFile: C3.File.make('sourceFile2'),
    });
    this.tag = this.sourceFile2.addTag(filename + '-tag');

    this.sourcePassage1 = Genai.SourcePassage.make({
      source: this.sourceFile1,
      intraSourceId: '1',
      contentStr: "Thursday, or Thor's Day, is the day honoring Thor, the God of Thunder.\n\u7000\u000A\u000D\u0000\n",
    });
    this.sourcePassage2 = Genai.SourcePassage.make({
      source: this.sourceFile2,
      intraSourceId: '1',
      contentStr: 'Hello, world!',
    });
    this.sourcePassage3 = Genai.SourcePassage.make({
      source: this.sourceFile2,
      intraSourceId: '2',
      contentStr: 'This is a test!',
    });

    this.sourceFile1.writePassages([this.sourcePassage1]);
    this.sourceFile2.writePassages([this.sourcePassage2, this.sourcePassage3]);

    /*
     * The indexName must be all lowercase, must not contain any of #, \, /, *, ?, ", <, >, |, ,
     * and must not start with -, _, +, or =. It must also be unique.
     */
    this.indexName = `${filename.toLowerCase()}-${Uuid.create()}`;
    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Elser', {
      id: filename,
      name: filename,
      description: 'Index for ' + filename,
      indexName: this.indexName,
    });
  });

  afterAll(function () {
    try {
      this.retriever.purgeIndex();
    } finally {
      TestApi.teardown(this.ctx);
    }
  });

  describe('config', function () {
    it('contains the url and apikey', function () {
      expect(this.retriever.config().configValue('url')).withContext('config.url').toBeDefined();
      expect(this.retriever.config().secretValue('apikey')).withContext('config.apikey').toBeDefined();
    });
  });

  describe('purgeIndex', function () {
    it('deletes the index', function () {
      this.retriever.purgeIndex();
      expect(this.retriever.indexExists()).toBeFalse();
    });
  });

  describe('createIndex', function () {
    it('creates the index', function () {
      this.retriever.createIndex();
      expect(this.retriever.indexExists()).toBeTrue();
    });
  });

  describe('initialize', function () {
    it('does nothing when the index already exists', function () {
      expect(this.retriever.initialize()).toEqual(0);
      expect(this.retriever.indexExists()).toBeTrue();
    });

    it('purgeIndex removes the index', function () {
      this.retriever.purgeIndex();
      expect(this.retriever.indexExists()).toBeFalse();
    });

    it('creates the index when it does not exist', function () {
      expect(this.retriever.initialize()).toEqual(0);
      expect(this.retriever.indexExists()).toBeTrue();
    });
  });

  describe('indexFiles (using indexPassages)', function () {
    it('indexes a single passage', function () {
      var objList = this.retriever.indexFiles([this.sourceFile1], false);
      expect(objList.objs.length).toEqual(1);
      expect(objList.errors.length).toEqual(0);
      expect(this.retriever.passageCount()).toEqual(1);

      TestApi.checkSrcFileHistory(
        [this.sourceFile1],
        [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
      );
    });

    it('indexes multiple passages', function () {
      var objList = this.retriever.indexFiles([this.sourceFile2], false);
      expect(objList.objs.length).toEqual(1);
      expect(objList.errors.length).toEqual(0);
      expect(this.retriever.passageCount()).toEqual(3);

      // Check that the previous statuses remain and the new statuses are persisted
      TestApi.checkSrcFileHistory(
        [this.sourceFile1, this.sourceFile2],
        [Genai.SourceFile.StatusEnum.INDEXED, Genai.SourceFile.StatusEnum.INDEXING]
      );
    });

    it('reindexes multiple passages', function () {
      var objList = this.retriever.indexFiles([this.sourceFile1, this.sourceFile2], false);
      expect(objList.objs.length).toEqual(2);
      expect(objList.errors.length).toEqual(0);
      expect(this.retriever.passageCount()).toEqual(3);

      // Check that all previous statuses remain
      TestApi.checkSrcFileHistory(
        [this.sourceFile1, this.sourceFile2],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
    });
  });

  describe('similaritySearch', function () {
    it('returns exactly k matching results', function () {
      var results = this.retriever.similaritySearch({
        searchQuery: 'What is Thursday?',
        k: 1,
      });
      expect(results.length).toEqual(1);
      expect(results[0].page_content).toEqual(this.sourcePassage1.contentStr);
      expect(results[0].rank).toEqual(1);
      expect(results[0].score).toBeGreaterThan(0);
    });

    it('filters to only results from matching files', function () {
      var results = this.retriever.similaritySearch({
        searchQuery: 'What is Thursday? tags:"' + this.tag.id + '"',
      });

      // Default k is 5, but only two passages exist for the file with the tag
      expect(results.length).toEqual(2);
      expect(results[0].sourcePassage.source.id).toEqual(this.sourceFile2.id);
      expect(results[0].rank).toEqual(1);
      expect(results[0].score).toBeGreaterThan(0);
      expect(results[1].sourcePassage.source.id).toEqual(this.sourceFile2.id);
      expect(results[1].rank).toEqual(2);
      expect(results[1].score).toBeGreaterThan(0);
    });

    it('filters out everything', function () {
      var results = this.retriever.similaritySearch({
        searchQuery: 'What is Thursday? tags:"not-a-valid-tag"',
      });
      expect(results.length).toEqual(0);
    });

    describe('with otherSearchIndexNames', function () {
      beforeAll(function () {
        // Verifies that it is handling passing multiple indexes as a comma-separate list
        this.retriever = this.retriever.withField('otherSearchIndexNames', [this.indexName, this.indexName]).merge({
          mergeInclude: 'otherSearchIndexNames',
          returnInclude: 'this',
        });
      });

      it('returns exactly k matching results', function () {
        var results = this.retriever.similaritySearch({
          searchQuery: 'What is Thursday?',
          k: 1,
        });
        expect(results.length).toEqual(1);
        expect(results[0].page_content).toEqual(this.sourcePassage1.contentStr);
        expect(results[0].rank).toEqual(1);
        expect(results[0].score).toBeGreaterThan(0);
      });

      describe('that are invalid', function () {
        beforeAll(function () {
          // Index 'not-valid' does not exist, so adding it to the list will cause an index_not_found_exception
          this.retriever = this.retriever.get().withField('otherSearchIndexNames', ['not-valid']).merge({
            mergeInclude: 'otherSearchIndexNames',
            returnInclude: 'this',
          });
        });

        afterAll(function () {
          this.retriever = this.retriever.get().withoutField('otherSearchIndexNames').merge({
            mergeInclude: 'otherSearchIndexNames',
            returnInclude: 'this',
          });
        });

        it('throws the expected error', function () {
          var retriever = this.retriever;
          expect(function () {
            retriever.similaritySearch({
              searchQuery: 'What is Thursday?',
              k: 1,
            });
          }).toThrowError(/index_not_found_exception/);
        });
      });
    });

    describe('with otherSearchParams', function () {
      beforeAll(function () {
        // Verifies that it is handling passing additional parameters to client.search
        this.retriever = this.retriever.get().withField('otherSearchParams', { allow_no_indices: true }).merge({
          mergeInclude: 'otherSearchParams',
          returnInclude: 'this',
        });
      });

      it('returns exactly k matching results', function () {
        var results = this.retriever.similaritySearch({
          searchQuery: 'What is Thursday?',
          k: 1,
        });
        expect(results.length).toEqual(1);
        expect(results[0].page_content).toEqual(this.sourcePassage1.contentStr);
        expect(results[0].rank).toEqual(1);
        expect(results[0].score).toBeGreaterThan(0);
      });

      describe('that are invalid', function () {
        beforeAll(function () {
          // Param `allow_no_indices` allows boolean values only, so 'a' causes an illegal_argument_exception
          this.retriever = this.retriever.get().withField('otherSearchParams', { allow_no_indices: 'a' }).merge({
            mergeInclude: 'otherSearchParams',
            returnInclude: 'this',
          });
        });

        afterAll(function () {
          this.retriever = this.retriever.get().withoutField('otherSearchParams').merge({
            mergeInclude: 'otherSearchParams',
            returnInclude: 'this',
          });
        });

        it('throws the expected error', function () {
          var retriever = this.retriever;
          expect(function () {
            retriever.similaritySearch({
              searchQuery: 'What is Thursday?',
              k: 1,
            });
          }).toThrowError(/illegal_argument_exception/);
        });
      });
    });
  });

  describe('indexedSourcePassages', function () {
    it('returns all indexed Genai.SourcePassages', function () {
      var passages = this.retriever.indexedSourcePassages();
      expect(passages.length).toEqual(3);
      var contentStrs = passages.pluck('contentStr');
      expect(contentStrs).toContain(this.sourcePassage1.contentStr);
      expect(contentStrs).toContain(this.sourcePassage2.contentStr);
      expect(contentStrs).toContain(this.sourcePassage3.contentStr);
    });
  });

  describe('indexedSourceFiles', function () {
    it('returns all indexed Genai.SourceFiles', function () {
      var sourceFiles = this.retriever.indexedSourceFiles();
      expect(sourceFiles.length).toEqual(2);
      var sourceFileIds = sourceFiles.pluck('id');
      expect(sourceFileIds).toContain(this.sourceFile1.id);
      expect(sourceFileIds).toContain(this.sourceFile2.id);
    });
  });

  describe('unindexFiles (using unindexPassages)', function () {
    it('removes the passages', function () {
      var objList = this.retriever.unindexFiles([this.sourceFile2]);
      expect(objList.objs.length).toEqual(1);
      expect(objList.errors.length).toEqual(0);
      expect(this.retriever.passageCount()).toEqual(1);

      // Should be unchanged
      TestApi.checkSrcFileHistory(
        [this.sourceFile1],
        [
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );

      TestApi.checkSrcFileHistory(
        [this.sourceFile2],
        [
          Genai.SourceFile.StatusEnum.NOT_INDEXED,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
          Genai.SourceFile.StatusEnum.INDEXED,
          Genai.SourceFile.StatusEnum.INDEXING,
        ]
      );
    });
  });
});
