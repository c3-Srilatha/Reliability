/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ImageChunker';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestApi.setOpenAiApiKey();
    TestApi.setGcpKey();
    this.filePath = 'meta://genAiBase/test/resource/images/dogs.jpeg';
    this.sourceFile = TestApi.upsertEntity(
      this.ctx,
      'Genai.SourceFile',
      Genai.SourceFile.make({ originalFile: Pkg.file(this.filePath) })
    );
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.SourceFile.Chunker.Image.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  [
    { llmConfigName: 'image_verbalization_gpt4_vision', description: 'with gpt' },
    { llmConfigName: 'image_verbalization_gemini_vision', description: 'with gemini' },
  ].forEach(({ llmConfigName, description }) => {
    describe(description, function () {
      beforeAll(function () {
        Genai.SourceFile.Chunker.Image.Config.setConfigValue('llmConfigName', llmConfigName);
      });

      afterAll(function () {
        Genai.SourceFile.Chunker.Image.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      });

      describe('in default configuration', function () {
        beforeAll(function () {
          this.result = Genai.SourceFile.Chunker.Image.chunkFile(
            this.sourceFile,
            Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Image }),
            true
          );
        });

        it('does not fail', function () {
          expect(this.result.objList.errors.length).withContext(this.result.objList.errors[0]?.message).toBe(0);
        });

        it('verbalization is correct', function () {
          TestApi.checkStringMatches(
            this.result.passages[0].imageVerbalization,
            ['puppies', 'tongue', 'background', 'out', 'green', 'adorable', 'fluffy'],
            false
          );
        });

        it('image files are linked', function () {
          expect(this.result.passages[0].imageFile.url).toEqual(this.filePath);
        });
      });

      describe('with maxLength', function () {
        beforeAll(function () {
          Genai.SourceFile.Chunker.Image.Config.setConfigValue('maxLength', 10);
          this.result = Genai.SourceFile.Chunker.Image.chunkFile(
            this.sourceFile,
            Genai.SourceFile.Chunker.UniversalChunker.Spec.make({ chunker: Genai.SourceFile.Chunker.Image }),
            true
          );
        });

        it('verbalization is truncated', function () {
          expect(this.result.passages[0].imageVerbalization.length).toBeLessThanOrEqual(10);
        });
      });
    });
  });
});
