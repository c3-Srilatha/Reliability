/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_remove_embeddings.js';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    ActionQueue.clear();
    Genai.Retriever.IndexAction.removeAll({ filter: Filter.exists('id') }, true);

    // Setup test data i.e sourceFiles and collections
    this.testConfig = TestApi.setupRetrieverTestSources(this.ctx, filename);
    this.sourceCollections = this.testConfig.sourceCollections;
    this.sourceFiles = this.testConfig.sourceFiles;

    // Create a testing pgvector store
    var pgvector = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector', {
      name: filename + '-pgVector' + DateTime.now(),
    }).get();
    Genai.UnstructuredQuery.Engine.Config.inst().getConfig().setConfigValue('vectorStore', pgvector);
    Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue('vectorStore', pgvector);
    this.unstructuredVectorStore = pgvector;

    // Index some passages to the vector store for retrieval test without and without removing the embeddings
    this.unstructuredVectorStore.indexPassages(
      this.sourceCollections[1].readPassages().withAll(this.sourceFiles[3].readPassages())
    );
    TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 600);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride('APP');
    Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride('APP');
  });

  describe('get the correct embeddings when queried before "sourcePassage.removeAll" and incorrect ones after "removeAll"', function () {
    it('returns the correct embedding', function () {
      var results = this.unstructuredVectorStore.similaritySearch(
        Genai.Retriever.SearchSpec.make({
          searchQuery: Genai.Query.fromString('python sdk architectural principles'),
          k: 1,
        })
      );
      TestApi.waitForSetup(this.ctx, null, 1, 240);
      expect(results[0].page_content).toContain('Python SDK, Architectural');
    });

    it('returns an incorrect embedding', function () {
      Genai.Vector.SourcePassage.removeAll(
        { filter: Filter.startsWith('sourcePassage.source.id', 'test_Retriever_ColBERT_SourceFile1') },
        true
      ); // This line removes the embeddings/passages related to the initial query.
      var results = this.unstructuredVectorStore.similaritySearch(
        Genai.Retriever.SearchSpec.make({
          searchQuery: Genai.Query.fromString('python sdk architectural principles'),
          k: 1,
        })
      );
      TestApi.waitForSetup(this.ctx, null, 1, 240);
      expect(results[0].page_content).not.toContain('Python SDK, Architectural');
    });
  });
});
