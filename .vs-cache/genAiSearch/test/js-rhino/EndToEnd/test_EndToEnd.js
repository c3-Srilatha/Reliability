/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_EndToEnd';

var logger = Logger.for(filename);

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  if (TestApi.isRunningInJarvis()) {
    TestApi.installRuntimes();
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();

    // Used to test explicit metadata filtering
    this.syncMetadataLambda = Lambda.fromJsFunc(function (file) {
      return Genai.SourceFile.Metadata.make({
        fileName: file.originalFile.fileName(),
        fileType: file.originalFile.fileExt(),
        author: 'Tom',
        date: '2018-01-01',
        tags: [
          Genai.SourceFile.Metadata.Tag.fromString('PythonSDK1 tag1'),
          Genai.SourceFile.Metadata.Tag.fromString('PythonSDK1 tag2'),
        ],
      });
    });

    this.collection = Genai.SourceCollection.forId('default-app-collection');
    this.collection.withSyncMetadataLambda(this.syncMetadataLambda).merge();

    // Move test files from package metadata to collection root
    C3.File.make('meta://genAiBase/test/resource/chunker/universalChunker/PythonSDK1.md').copy(
      this.collection.rootUrl + '/PythonSDK1.md'
    );

    this.retriever = Genai.Retriever.Dense.forName('default-dense');
    Genai.UnstructuredQuery.Engine.Config.setConfigValue('vectorStore', this.retriever);
    TestApi.waitForSetup(this.ctx);
    this.utaStr = Translation.getTranslationForLocale('EnterpriseSearch.ErrorMessage.UnableToAnswer', 'en');
    Genai.Setup.setUnstructuredConfig('azureGpt4o');
  });

  afterAll(function () {
    try {
      Genai.UnstructuredQuery.Engine.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.ChatBot.Config.make().getConfig().clearConfigAndSecretOverride(ConfigOverride.APP);

      TestApi.cleanUpCollection(this.collection, false, true);
      this.retriever.purgeIndex(true);
    } finally {
      Genai.PyUtil.terminateAllEngines();

      // Shut everything down at the end
      TestApi.teardown(this.ctx);
    }
  });

  describe('setup', function () {
    beforeAll(function () {
      CronQueue.pause();
      CronQueue.clear();
      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      CronQueue.resume();
    });

    it('syncs the collection', function () {
      var syncJobs = this.collection.sync(
        null,
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Universal })
      );
      TestApi.waitForJob(this.ctx, syncJobs.fileSystemJob, 1, 15 * 60);
      TestApi.waitForSetup(this.ctx);
    });

    it('has copied the expected files', function () {
      var filesInRoot = FileSystem.listFiles(this.collection.rootUrl).files;
      var fileNamesInRoot = filesInRoot.mapToStr((f) => f.fileName());
      var expectedFileNames = C3.Array.ofStr('PythonSDK1.md');
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
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 10 * 60);
    });
  });

  function testUnstructuredQueries() {
    it('handles unstructured queries successfully', function () {
      var pythonSDKBaseQuery = 'Why is the Python SDK useful?';
      var queries = [pythonSDKBaseQuery, pythonSDKBaseQuery + ' tags:"ManualPythonSDK1 tag1"'];
      var queryResultArr = this.results;
      queries.forEach((query) => {
        var queryResult = Genai.ChatBot.createInitialGenAiResult(query, Genai.Query.Type.QUERY);
        queryResult = Genai.ChatBot.query(queryResult);
        expect(queryResult.failed)
          .withContext(query + ' failed with log ' + queryResult.get('engineLog').engineLog)
          .toBeFalse();
        queryResultArr.push(queryResult);
      });
    });

    it('answers successfully', function () {
      var pythonSdkMdSnippets = ['c3 server', 'type system', 'machine learning', 'data', 'invoking methods'];
      this.results.forEach((res, idx) => {
        TestApi.checkStringMatches(res.answer, pythonSdkMdSnippets, false, 'query ' + idx);
      });
    });

    it('provides rationale', function () {
      this.results.forEach((res) => {
        TestApi.checkRationale(res, ['architectural principles', 'type system', 'type'], ['PythonSDK1.md']);
      });
    });

    it('does not contain code references in the rationale but contains code snippet', function () {
      this.results.forEach((res, idx) => {
        expect(res.rationale)
          .withContext('rationale ' + idx)
          .toContain('```');
        expect(res.answer.match(/\{code:[\da-f]+\}/))
          .withContext('answer ' + idx)
          .toBeNull();
        expect(res.rationale.match(/\{code:[\da-f]+\}/))
          .withContext('rationale ' + idx)
          .toBeNull();
      });
    });

    it('includes rationale sources', function () {
      this.results.forEach((res) => {
        res = res.get('{rationaleSources: [sourceFile.id, sourceFile.originalFile]}');
        expect(res.rationaleSources[0].sourceFile.originalFile.fileName()).toEqual('PythonSDK1.md');
      });
    });
  }

  describe('Genai.UnstructuredQuery.Engine', function () {
    beforeAll(function () {
      this.results = [];
      Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.UnstructuredQuery.Engine');
    });

    testUnstructuredQueries();

    it('does not know things from unseen files', function () {
      /*
       * Question would be answerable given full documentation dataset,
       * but is not in either doc included in this index
       */
      var queryResult = TestApi.makeAndLogQuery('chatQuery', 'What is a WindTurbine?');
      expect(queryResult.answer.toLowerCase()).toContain(this.utaStr.toLowerCase());
    });
  });

  describe('unprocessAndTransitionToDeleted', function () {
    beforeAll(function () {
      this.files = this.collection.get('files').files;
      Genai.SourceFile.unprocessAndTransitionToDeleted(this.files, this.retriever);
      TestApi.waitForSetup(this.ctx, ['ActionQueue', 'CalcFieldsQueue'], 1, 20 * 60);
      this.files = Genai.SourceFile.fetch({
        filter: Filter.intersects('id', this.files.pluck('id')),
        include: 'statusHistory.value',
      }).objs;
    });

    it('first transitions the files status to REMOVING', function () {
      // Indexed files go from INDEXED -> REMOVING -> NOT_INDEXED -> DELETED
      this.files.each((f) => expect(f.statusHistory[2].value).toEqual(Genai.SourceFile.StatusEnum.REMOVING));
    });

    it('then transitions the files status to DELETED', function () {
      this.files.each((f) => expect(f.statusHistory[0].value).toEqual(Genai.SourceFile.StatusEnum.DELETED));
    });
  });
});
