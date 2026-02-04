/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UnstructuredQueryEngine_imageVerbalization';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.start = DateTime.now();
    TestApi.setOpenAiApiKey();
    Genai.Setup.setUnstructuredConfig('azureGpt4o');
    var mmPdfCfg = Genai.SourceFile.Chunker.MultimodalPdf.Config.inst().getConfig();
    mmPdfCfg.setConfigValue('layoutParserSpec.device', 'cpu');
    var imageParserSpec = mmPdfCfg.imageParserSpec;
    mmPdfCfg.setConfigValue(
      'imageParserSpec',
      imageParserSpec.withImageVerbalizerSpec(
        imageParserSpec.imageVerbalizerSpec.withModelParams({
          model: 'gpt-4o',
          temperature: 0.0,
          max_tokens: 200,
        })
      )
    );

    this.retriever = TestApi.upsertEntity(this.ctx, 'Genai.Retriever.PgVector');
    this.collection = Genai.SourceCollection.forId('default-app-collection');
    C3.File.make('meta://genAiBase/resource/code/parsing/data/Docs/dogs.pdf').copy(
      this.collection.rootUrl + '/dogs.pdf'
    );

    Genai.ChatBot.Config.make().getConfig().setConfigValue('handlerTypeName', 'Genai.UnstructuredQuery.Engine');
    var sourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: C3.File.make(this.collection.rootUrl + '/dogs.pdf'),
      collection: this.collection,
    });
    Genai.UnstructuredQuery.Engine.Config.inst().setConfigValue('vectorStore', this.retriever);

    this.chunkerConfig = Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default');
    this.fileExtToChunkerSpecMap = C3.Map.fromJson(this.chunkerConfig.fileExtToChunkerSpecMap);

    this.fileExtToChunkerSpecMap = this.fileExtToChunkerSpecMap.with(
      '.pdf',
      Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.MultimodalPdf })
    );
    this.chunkerConfig.setConfigValue('fileExtToChunkerSpecMap', this.fileExtToChunkerSpecMap);
    Py.closeAllPy4jInterpreters();
    Genai.SourceFile.process([sourceFile]);

    /*
     * Def createLlmMessagesLambda(imageSpecs, prompt):
     * import itertools
     * def _encode_image(image):
     *     import io
     *     import base64
     *     buffer = io.BytesIO()
     *     image.save(buffer, format="PNG")
     *     image_bytes = buffer.getvalue()
     *     image_base64 = base64.b64encode(image_bytes).decode("utf-8")
     *     return image_base64
     * initial_content = [
     *     {
     *         "type": "text",
     *         "text": """
     *                 You are an expert in answering a question from the provided extracts and images.
     *                 I will be giving you images below with their corresponding descriptions and I want you to use
     *                 them
     *                 to find an answer to the query.
     *                 I will be giving you the image then a description of image 1,
     *                 image 2 then description of image 2,...
     *                 """,
     *     }
     * ]
     *
     *
     *
     * images_content = [
     *     (
     *         {
     *             "type": "text",
     *             "text": f"source for citation [{image_spec.citationId}]:",
     *         },
     *         {
     *             "type": "image_url",
     *             "image_url": {"url": f"data:image/jpeg;base64,{_encode_image(image_spec.nativeImage)}"}
     *         },
     *         {
     *             "type": "text",
     *             "text": f"Image {i} description: " + image_spec.contentStr,
     *         },
     *     )
     *     for i, image_spec in enumerate(
     *         list(imageSpecs[::-1])
     *     )
     * ]
     * images_content = initial_content + list(itertools.chain(*images_content))
     * content = images_content + [{"type": "text", "text": prompt}]
     * return [{ "role": "user", "content": content}]
     */

    Genai.UnstructuredQuery.Engine.REA.ContextualQaConfig.make({
      name: 'qa_config',
      modelInferenceConfigName: 'qa_inference_config_gpt4o',
      useImagesForQa: true,
      createLlmMessagesLambda: {
        language: 'Python',
        /* eslint-disable max-len */
        implementation:
          "def createLlmMessagesLambda(imageSpecs, prompt):\n    import itertools\n\n    def _encode_image(image):\n        import io\n        import base64\n        buffer = io.BytesIO()\n        image.save(buffer, format='PNG')\n        image_bytes = buffer.getvalue()\n        image_base64 = base64.b64encode(image_bytes).decode('utf-8')\n        return image_base64\n    initial_content = [{'type': 'text', 'text': '\\n                    You are an expert in answering a question from the provided extracts and images.\\n                    I will be giving you images below with their corresponding descriptions and I want you to use them to find an answer to the query.\\n                    I will be giving you the image then a description of image 1, image 2 then description of image 2,...\\n                    '}]\n    images_content = [({'type': 'text', 'text': f'source for citation [{image_spec.citationId}]:'}, {'type': 'image_url', 'image_url': {'url': f'data:image/jpeg;base64,{_encode_image(image_spec.nativeImage)}'}}, {'type': 'text', 'text': f'Image {i} description: ' + image_spec.contentStr}) for (i, image_spec) in enumerate(list(imageSpecs[::-1]))]\n    images_content = initial_content + list(itertools.chain(*images_content))\n    content = images_content + [{'type': 'text', 'text': prompt}]\n    return [{'role': 'user', 'content': content}]",
        actionRequirement: 'py-query_orchestrator',
      },
    }).setConfig();
    TestApi.waitForSetup(this.ctx, ['ActionQueue', 'BatchQueue', 'MapReduceQueue'], 1, 1800);

    Genai.UnstructuredQuery.Engine.stopAllHandlers();
    Genai.UnstructuredQuery.Engine.terminate();
  });

  afterAll(function () {
    try {
      this.fileExtToChunkerSpecMap = this.fileExtToChunkerSpecMap.with(
        '.pdf',
        Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.PyPdf })
      );
      this.chunkerConfig.setConfigValue('fileExtToChunkerSpecMap', this.fileExtToChunkerSpecMap);
      Genai.ChatBot.Config.make().getConfig().clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.SourceFile.Chunker.MultimodalPdf.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.Query.Result.removeAll({ filter: Filter.ge('meta.created', this.start) }, true);
      TestApi.cleanUpCollection(this.collection, false, true);
      this.retriever.purgeIndex(true);
      Py.closeAllPy4jInterpreters();
    } finally {
      Genai.UnstructuredQuery.Engine.stopAllHandlers();
      Genai.UnstructuredQuery.Engine.terminate();
      Genai.SourceFile.Chunker.Engine.terminate();
      TestApi.teardown(this.ctx);
    }
  });

  it('handles unstructured queries successfully', function () {
    var queryResult = TestApi.makeAndLogQuery(
      'query',
      `Answer the following 2 questions
      1. How many dogs are there in the image (only return the number)?
      2. What is its color?`
    );

    if (queryResult.failed) {
      fail(queryResult.engineLog);
    }
    TestApi.checkStringMatches(queryResult.answer, ['1', 'one']);
    TestApi.checkStringMatches(queryResult.answer, ['black', 'white']);
  });
});
