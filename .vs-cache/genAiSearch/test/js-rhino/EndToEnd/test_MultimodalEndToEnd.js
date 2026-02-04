/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_MultimodalEndToEnd';

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  beforeAll(function () {
    Genai.PyUtil.terminateAllEngines();
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.inst().getConfig();
    mmPdfCfg.setConfigValue('enableLayoutParser', true);
    mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
    Genai.Setup.setUnstructuredConfig('azureGpt4o');

    // Used to test explicit metadata filtering
    this.syncMetadataLambda = Lambda.fromJsFunc(function (file) {
      return Genai.SourceFile.Metadata.make({
        fileName: file.originalFile.fileName(),
        fileType: file.originalFile.fileExt(),
        tags: [
          Genai.SourceFile.Metadata.Tag.fromString('study tag1'),
          Genai.SourceFile.Metadata.Tag.fromString('study tag2'),
        ],
      });
    });

    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.Dense', {
      name: filename,
      indexZipUrl: `${C3.FileSystem.makeFile(filename).url}/retriever-dense.zip`,
    }).get();
    Genai.UnstructuredQuery.Engine.Config.setConfigValue('vectorStore', this.retriever);
    this.collection = Genai.SourceCollection.forId('default-app-collection');
    this.collection.withSyncMetadataLambda(this.syncMetadataLambda).merge();

    // Move test files from package metadata to collection root
    C3.File.make('meta://genAiBase/resource/code/parsing/data/Docs/study.pdf').copy(
      this.collection.rootUrl + '/study.pdf'
    );

    C3.File.make('meta://genAiBase/test/resource/chunker/pdfChunker/sales_tax_table.pdf').copy(
      this.collection.rootUrl + '/sales_tax_table.pdf'
    );

    Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.UnstructuredQuery.Engine');
    TestApi.waitForSetup(this.ctx);

    this.query = 'How many blind people participated in the study?';
    this.expectedSnippets = ['5', 'blind', 'category', 'people', 'participants', 'example'];
    this.queries = [this.query, this.query + ' tags:"Manualstudy tag1"', this.query + ' tags:"Manualstudy tag2"'];
    this.results = [];
  });

  afterAll(function () {
    try {
      Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.ChatBot.Config.make().getConfig().clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.Agent.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      TestApi.cleanUpCollection(this.collection, false, true);
      this.retriever.purgeIndex(true);
    } finally {
      Genai.PyUtil.terminateAllEngines();

      // Shut everything down at the end
      TestApi.teardown(this.ctx);
    }
  });

  describe('setup', function () {
    it('syncs the collection', function () {
      var syncJobs = this.collection.sync(
        null,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.MultimodalPdf })
      );

      // Allow ample time for py-chunker to be installed
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 60 * 60);
      TestApi.waitForSetup(this.ctx);
    });

    it('has copied the expected files', function () {
      var filesInRoot = FileSystem.listFiles(this.collection.rootUrl).files;
      var fileNamesInRoot = filesInRoot.mapToStr((f) => {
        return f.fileName();
      });
      var expectedFileNames = C3.Array.ofStr('study.pdf', 'sales_tax_table.pdf');
      expect(expectedFileNames.toSet().isSame(fileNamesInRoot.toSet())).toBe(true);
    });

    it('has populated the passageFile', function () {
      this.collection.get('files').files.each((f) => {
        expect(f.readPassages())
          .withContext(f.id + ' passageFile')
          .toBeDefined();
      });
    });

    it('indexes the collection', function () {
      this.retriever.indexFiles(this.collection.get('files').files);

      // Allow time for the Python runtime to be installed
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 30 * 60);
    });
  });

  it('handles unstructured queries successfully', function () {
    var queryResultArr = this.results;
    this.queries.forEach((query) => {
      var queryResult = Genai.ChatBot.createInitialGenAiResult(query, Genai.Query.Type.QUERY);
      queryResult = Genai.ChatBot.query(queryResult);
      if (queryResult.failed) {
        fail(`query "${query}" failed with engineLog=${queryResult.get('engineLog').engineLog}`);
      } else {
        queryResultArr.push(queryResult);
      }
    });
  });

  it('answers successfully', function () {
    var queries = this.queries;
    this.results.forEach((res, idx) => {
      TestApi.checkStringMatches(res.answer, this.expectedSnippets, false, 'query: ' + queries[idx]);
    });
  });

  it('provides rationale', function () {
    var queries = this.queries;
    this.results.forEach((res, idx) => {
      expect(res.rationale)
        .withContext('rationale for query: ' + queries[idx])
        .toBeDefined();
      TestApi.checkRationale(res, this.expectedSnippets, ['study.pdf', 'sales_tax_table.pdf']);
    });
  });

  it('includes rationale sources', function () {
    var queries = this.queries;
    this.results.forEach((res, idx) => {
      res = res.get('{rationaleSources: [sourceFile.id, sourceFile.originalFile]}');
      expect(res.rationaleSources.length)
        .withContext('rationaleSources.length for query: ' + queries[idx])
        .toBeGreaterThan(0);
      TestApi.checkStringMatches(
        res.rationaleSources[0].sourceFile.originalFile.fileName(),
        ['study.pdf', 'sales_tax_table.pdf'],
        false
      );
    });
  });

  describe('uses Multimodal working with Multilingual', function () {
    beforeAll(function () {
      this.queryInSpanish = 'Cuántas personas ciegas participaron en el estudio?';
      this.expectedSnippetsSpanish = ['ciegas', 'categoría', 'personas', 'estudio', 'participantes', 'ejemplo'];
      Genai.Translator.Config.setConfigValue('enabled', true);
      Genai.Translator.Config.setConfigValue('translatorTypeName', Genai.Translator.Llm);
      this.translator = Genai.Translator.translator();
      Genai.PyUtil.restartAllEngines();

      this.genAiResultWithTranslation = Genai.Query.Result.make({
        searchQuery: Genai.Query.fromString(this.query)
          .withNonTranslatedQuery(this.queryInSpanish)
          .withDetectedLanguage('es'),
      }).upsert();
      this.genAiResultWithTranslation = Genai.ChatBot.query(this.genAiResultWithTranslation);
    });

    afterAll(function () {
      Genai.Translator.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('making a query in a supported language', function () {
      TestApi.checkStringMatches(
        this.genAiResultWithTranslation.answer.toLowerCase(),
        this.expectedSnippetsSpanish,
        false,
        'query'
      );
      TestApi.checkRationale(this.genAiResultWithTranslation, this.expectedSnippetsSpanish, ['study.pdf']);
      var sources = this.genAiResultWithTranslation.allRationaleSources();
      var tableSources = sources.filter((source) => {
        return source.passage.tableVerbalization !== undefined;
      });
      expect(tableSources.length).toBeGreaterThan(0);
      var detectLanguageResponse = {};

      // Check the passage's table verbalization
      expect(tableSources[0].passage.tableVerbalization).toBeDefined();
      detectLanguageResponse = this.translator.detectLanguage(tableSources[0].passage.tableVerbalization.toLowerCase());
      expect(detectLanguageResponse.detectedLanguageCode).toEqual('es');
      TestApi.checkStringMatches(
        tableSources[0].passage.tableVerbalization.toLowerCase(),
        this.expectedSnippetsSpanish,
        false,
        'query'
      );
    });
  });
});
