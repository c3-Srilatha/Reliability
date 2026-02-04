/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Chunker_engine';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.sourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/txtChunker/piracy.txt'),
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  afterEach(function () {
    Genai.SourceFile.Chunker.Engine.terminate();
  });

  function chunkTwice(sourceFile, spec) {
    var results = [];
    var times = [];

    for (var i = 0; i < 2; i += 1) {
      var start = DateTime.now();
      var res = Genai.SourceFile.Chunker.Engine.chunkFilesBatch(
        [sourceFile],
        spec || Genai.SourceFile.Chunker.UniversalChunker.Spec.make()
      );
      var elapsed = DateTime.deltaSeconds(start, DateTime.now());
      results.push(res);
      times.push(elapsed);
    }

    return { results, times };
  }

  describe('text file', function () {
    beforeAll(function () {
      this.results = chunkTwice(this.sourceFile).results;
    });

    it('chunks successfully', function () {
      this.results.forEach((r) => {
        expect(r.passages.length).toBeGreaterThan(0);
      });
    });
  });

  describe('multi-modal PDF (Mew3)', function () {
    beforeAll(function () {
      var chunkerSpec = Genai.SourceFile.Chunker.UniversalChunker.Spec.make({
        chunker: Genai.SourceFile.Chunker.Mew3,
      });

      var cfg = Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default');
      var updatedMap = C3.Map.fromJson(cfg.fileExtToChunkerSpecMap).with('.pdf', chunkerSpec);
      cfg.setConfigValue('fileExtToChunkerSpecMap', updatedMap);
      TestApi.setOpenAiApiKey();

      this.sourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/sales_tax_table.pdf'),
      });

      var out = chunkTwice(this.sourceFile, chunkerSpec);
      this.results = out.results;
      this.times = out.times;
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.UniversalChunker.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
      Genai.SourceFile.Chunker.Mew3.Config.clearConfigAndSecretOverride(ConfigOverride.APP);
    });

    it('chunks successfully', function () {
      this.results.forEach((r) => {
        expect(r.passages.length).toBeGreaterThan(0);
        if (r.objList.errors.length > 0) {
          fail(r.objList.errors[0].message);
        }
      });
    });

    it('does not re-initialise Mew3 parser on second call', function () {
      expect(this.times[0] - this.times[1]).toBeGreaterThan(10);
    });

    describe('parsing invalid file followed by valid file', function () {
      beforeAll(function () {
        this.invalidFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
          originalFile: Pkg.file('meta://genAiBase/test/resource/chunker/pdfChunker/malformed.pdf'),
        });

        this.invalidFileResult = Genai.SourceFile.Chunker.Engine.chunkFilesBatch(
          [this.invalidFile],
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make()
        );

        this.validFileResult = Genai.SourceFile.Chunker.Engine.chunkFilesBatch(
          [this.sourceFile],
          Genai.SourceFile.Chunker.UniversalChunker.Spec.make()
        );
      });

      it('fails to parse invalid file', function () {
        expect(this.invalidFileResult.objList.errors.length).toBeGreaterThan(0);
      });

      it('prevents cascading errors and parses valid file successfully', function () {
        expect(this.validFileResult.passages.length).toBeGreaterThan(0);
        if (this.validFileResult.objList.errors.length > 0) {
          fail(this.validFileResult.objList.errors[0].message);
        }
      });
    });
  });

  describe('custom deployment spec', function () {
    beforeAll(function () {
      var cfg = Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default');
      cfg.setConfigValue('deploySpec', {
        threadPool: {
          minThreads: 2,
          initialThreads: 2,
          maxThreads: 2,
        },
      });
    });

    afterAll(function () {
      Genai.SourceFile.Chunker.UniversalChunker.Config.forConfigKey('default').clearConfigAndSecretOverride(
        ConfigOverride.APP
      );
    });

    it('deploys successfully', function () {
      // Spin up engine with new spec
      Genai.SourceFile.Chunker.Engine.waitForDeployment();
      var engine = Genai.SourceFile.Chunker.Engine.inst();
      expect(engine).toBeDefined();
      expect(engine.state).withContext('state').toEqual(Engine.State.RUNNING);
    });

    it('re-deploys successfully', function () {
      var engine = Genai.SourceFile.Chunker.Engine.inst();

      // Force re-deploy attempt
      engine.stop();
      Genai.SourceFile.Chunker.Engine.waitForDeployment();
      engine = Genai.SourceFile.Chunker.Engine.inst();
      expect(engine.state).withContext('state after restarting').toEqual(Engine.State.RUNNING);
    });

    it('spins up multiple threads', function () {
      var nodeId = C3.app().nodes().at(0).id;
      Genai.SourceFile.Chunker.Engine.waitForDeployment();
      var summary = Genai.SourceFile.Chunker.Engine.inst().summarizeThreads(nodeId).collect();
      expect(summary.size).toEqual(2);
    });
  });
});
