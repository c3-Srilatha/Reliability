/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai_SourceFile_Metadata_Tagging';
function numTags(extractedMetadata) {
  totalTags = 0;
  extractedMetadata
    .keys()
    .collect()
    .each((file) => {
      categories = extractedMetadata.get(file).keys().collect();
      categories.each((category) => {
        totalTags += extractedMetadata.get(file).get(category).length;
      });
    });
  return totalTags;
}

function sourceFileCleaningTags(files) {
  var tagsToRemove = new Set();
  var categoriesToRemove = new Set();
  files.each((file) => {
    var tags = file.metadata.tags;
    if (tags) {
      tags.each((tag) => {
        if (tag.metadataType === Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC) {
          tagsToRemove.add(tag.id);
          categoriesToRemove.add(tag.category.id);
        }
      });
    }
  });
  Genai.SourceFile.Metadata.Tag.removeAll({ filter: Filter.intersects('id', [...tagsToRemove]) }, true);
  Genai.SourceFile.Metadata.Category.removeAll(
    {
      filter: Filter.intersects('id', [...categoriesToRemove])
        .and()
        .eq('metadataType', Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC),
    },
    true
  );
}

describe(filename, function () {
  beforeAll(function () {
    TestApi.setOpenAiApiKey();
    TestApi.setAwsBedrockKeys();
    TestApi.setGcpKey();
    this.metadataFiles = Pkg.Store.paths('**/test/resource/metadataTagging/**.{pdf,doc}');
    this.removeFilter = Filter.contains('originalFile.url', 'metadataTagging');
    this.extractionFilesFilter = Filter.contains('originalFile.url', 'metadataTaggingTest');
    this.originalConfigName = Genai.SourceFile.Metadata.Tagging.Config.configValue('name');
    this.ctx = TestApi.createContext(filename);
    this.metadataFiles.each((e) => {
      Genai.SourceFile.make({
        originalFile: C3.File.make(e.url),
        passagesFile: C3.File.make(e.url.replace(/\.[^/.]+$/, '.json')),
        metadata: { fileName: e.encodedSubPath.substr(-24), fileType: Genai.SourceFileTypes.PDF },
      }).upsert();
    });
    this.files = Genai.SourceFile.fetch({
      filter: this.extractionFilesFilter,
      include: 'originalFile.url, metadata.fileName, metadata.fileType',
    }).objs;
    this.filesForFilter = Genai.SourceFile.fetch({
      filter: Filter.contains('originalFile.url', 'metadataTagging'),
      include: 'originalFile.url, metadata.fileName, metadata.fileType',
    }).objs;
    this.malFormedFile = Genai.SourceFile.fetch({
      filter: Filter.contains('originalFile.url', 'malformedTaggingTest'),
      include: 'originalFile.url, metadata.fileName, metadata.fileType',
      limit: 1,
    }).objs;
    this.protectedFile = Genai.SourceFile.fetch({
      filter: Filter.contains('originalFile.url', 'protectedTaggingTest'),
      include: 'originalFile.url, metadata.fileName, metadata.fileType',
      limit: 1,
    }).objs;
    TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile.Metadata.Tagging.ScanResult', [
      {
        id: 'test1',
        categories: { value: 'test1' },
        active: true,
      },
    ]);

    this.manualCategory = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile.Metadata.Category', {
      label: 'manualTestCategory',
      examples: ['manualExample1', 'manualExample2'],
      metadataType: Genai.SourceFile.Metadata.TypeEnum.MANUAL,
    });

    this.manualCategory2 = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile.Metadata.Category', {
      label: 'location',
      examples: ['Mexico'],
      metadataType: Genai.SourceFile.Metadata.TypeEnum.MANUAL,
    });

    Genai.SourceFile.Metadata.Tag.fromSpec({
      label: 'manualExample1',
      category: 'manualTestCategory',
      metadataType: Genai.SourceFile.Metadata.TypeEnum.MANUAL,
    }).upsert();

    Genai.SourceFile.Metadata.Tag.fromSpec({
      label: 'manualExample3',
      category: 'manualTestCategory',
      metadataType: Genai.SourceFile.Metadata.TypeEnum.MANUAL,
    }).upsert();
  });

  afterAll(function () {
    Genai.SourceFile.Metadata.Tagging.Config.setDefault(this.originalConfigName);
    Genai.SourceFile.removeAll({ filter: this.removeFilter }, true);
    TestApi.teardown(this.ctx);
  });

  ['azureGpt4o', 'gemini_flash_2_0', 'awsBedrock_claude_v3_haiku'].forEach((testCase) => {
    describe('with ' + testCase, function () {
      beforeAll(function () {
        Genai.SourceFile.Metadata.Tagging.Config.setDefault(testCase);

        this.automaticCategory = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile.Metadata.Category', {
          label: 'automaticTestCategory',
          metadataType: Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC,
        });

        // Initialize the variable that is going to be used to store the metadata extraction
        this.extraction = null;

        /*
         * This variable is going to be used to store the categories that are going to be generated for the metadata
         * integration step to be cleaned up after the test
         */
        this.generatedCategories = new Set();

        /*
         * Filter categories identification
         * The Spacy library is used to identify the categories but has a limit of 1,000,000 characters per call before
         * throwing an error. The file metadataTaggingLongT contains approximately 990,000 characters. The idea is to
         * test the limit of the spacy library.It is necessary to change the configuration of the number of final pages
         * and the number of max tokens to read all the contentof the file and try to force the error when other files
         * are processed. However, the error is not going to be thrown because there is a fix that divides the content
         * before the limit of the spacy library is reached.
         */
        this.originalNumFinalPassages = Genai.SourceFile.Metadata.Tagging.Config.inst().configValue('numFinalPassages');
        Genai.SourceFile.Metadata.Tagging.Config.inst().setConfigValue('numFinalPassages', 2688, ConfigOverride.APP);
        this.originalNumMaxTokens = Genai.SourceFile.Metadata.Tagging.Config.inst().configValue('numMaxTokens');
        Genai.SourceFile.Metadata.Tagging.Config.inst().setConfigValue('numMaxTokens', 156000, ConfigOverride.APP);
        this.filterCategories = Genai.SourceFile.Metadata.Tagging.identifyFilterCategories(this.filesForFilter);
        Genai.SourceFile.Metadata.Tagging.Config.inst().setConfigValue(
          'numFinalPassages',
          this.originalNumFinalPassages,
          ConfigOverride.APP
        );
        Genai.SourceFile.Metadata.Tagging.Config.inst().setConfigValue(
          'numMaxTokens',
          this.originalNumMaxTokens,
          ConfigOverride.APP
        );

        // Metadata extraction
        this.extraction = Genai.SourceFile.Metadata.Tagging.metadataExtraction(this.filterCategories, this.files);
      });

      afterAll(function () {
        var files = Genai.SourceFile.fetch({
          filter: this.extractionFilesFilter,
          include: '{metadata:[this,{tags:[this,{category:[]}]}]}',
        }).objs;
        sourceFileCleaningTags(files);
        Genai.SourceFile.Metadata.Tagging.ScanResult.removeAll({ filter: 'active == true' }, true);
      });

      [true, false].forEach((setAirGapConfig) => {
        describe(`setAirGapConfig=${setAirGapConfig}, identifyFilterCategories`, function () {
          beforeAll(function () {
            this.initialAirGapConfig = Genai.App.AirGapConfig.inst().getConfig();
            if (setAirGapConfig) {
              Genai.App.AirGapConfig.inst().setConfigValue(
                'nltkSentenceTokenizerModelFilePath',
                'gcs://c3--datasets/genai/airgap/punkt/PY3/english.pickle'
              );
            }
            this.expectedFilterCategories = ['location', 'author', 'topic'];
          });

          afterAll(function () {
            if (setAirGapConfig) {
              this.initialAirGapConfig.setConfig();
            }
          });

          it('should return an active scan result with "location", "author" or "topic" in categories', function () {
            var activeScanResult = Genai.SourceFile.Metadata.Tagging.ScanResult.fetch({ filter: 'active == true' });

            expect(this.filterCategories.categories.manualTestCategory.length).toEqual(3);
            expect(this.filterCategories.categories.manualTestCategory).toContain('manualExample1');
            expect(this.filterCategories.categories.manualTestCategory).toContain('manualExample2');
            expect(this.filterCategories.categories.manualTestCategory).toContain('manualExample3');
            expect(activeScanResult.count).toEqual(1);
            expect(activeScanResult.objs[0].id).not.toEqual('test1');
            TestApi.checkStringMatches(JSON.stringify(this.filterCategories.categories), this.expectedFilterCategories);
            TestApi.checkStringMatches(JSON.stringify(activeScanResult.objs), this.expectedFilterCategories);
          });

          it('should return an active category with the manualTestCategory from a malFormed pdf', function () {
            Genai.SourceFile.Metadata.Tagging.identifyFilterCategories(this.malFormedFile);
            var activeScanResult = Genai.SourceFile.Metadata.Tagging.ScanResult.fetch({
              filter: 'active == true',
              limit: 1,
            }).first();
            expect(activeScanResult.categories.manualTestCategory.length).toEqual(3);
            expect(activeScanResult.categories.manualTestCategory).toContain('manualExample1');
            expect(activeScanResult.categories.manualTestCategory).toContain('manualExample2');
            expect(activeScanResult.categories.manualTestCategory).toContain('manualExample3');
          });
        });
      });

      describe('metadataExtraction', function () {
        beforeAll(function () {
          this.expectedCategories = ['location', 'date', 'title', 'topic'];
        });

        it('should return a json with metadata for files metadataTaggingTest1.pdf and metadataTaggingTest2.pdf', function () {
          var result = Genai.SourceFile.fetch({
            filter: this.extractionFilesFilter,
            include: 'originalFile.url',
          });

          expect(result.count).toEqual(3);
          expect(Object.keys(this.extraction).length).toEqual(3);
          expect(this.extraction[result.objs[0].id]).toBeDefined();
          expect(this.extraction[result.objs[1].id]).toBeDefined();
          expect(this.extraction[result.objs[2].id]).toBeDefined();
          expect(numTags(this.extraction)).toBeGreaterThan(0);
          TestApi.checkStringMatches(JSON.stringify(this.extraction), this.expectedCategories);
        });

        it('should return an empty map from a protected file', function () {
          var protectedFilterCategory = Genai.SourceFile.Metadata.Tagging.identifyFilterCategories(this.protectedFile);
          var protectedExtraction = Genai.SourceFile.Metadata.Tagging.metadataExtraction(
            protectedFilterCategory,
            this.protectedFile
          );
          protectedExtraction.each((file) => {
            expect(Object.keys(file).length).toEqual(0);
          });
        });
      });

      describe('metadataIntegration', function () {
        it('should return files with all the assigned tags', function () {
          var automaticCategoryExists = Genai.SourceFile.Metadata.Category.exists({
            filter: Filter.eq('id', this.automaticCategory.id),
          });
          var manualCategoryExists = Genai.SourceFile.Metadata.Category.exists({
            filter: Filter.eq('id', this.manualCategory.id),
          });
          expect(automaticCategoryExists).toBeTrue();
          expect(manualCategoryExists).toBeTrue();
          Genai.SourceFile.Metadata.Tagging.metadataIntegration(this.extraction);
          automaticCategoryExists = Genai.SourceFile.Metadata.Category.exists({
            filter: Filter.eq('id', this.automaticCategory.id),
          });
          manualCategoryExists = Genai.SourceFile.Metadata.Category.exists({
            filter: Filter.eq('id', this.manualCategory.id),
          });
          expect(automaticCategoryExists).toBeFalse();
          expect(manualCategoryExists).toBeTrue();
          var result = Genai.SourceFile.fetch({
            filter: Filter.intersects(
              'id',
              this.files.map((e) => {
                return e.id;
              })
            ),
            include: '{metadata:[this,{tags:[]}]}',
          }).objs;

          result.each((file) => {
            this.extraction.get(file.id).each((tags, category) => {
              if (tags.length > 0) {
                this.generatedCategories.add(category);
                tags.each((tag) => {
                  expect(file.metadata.tags.toString()).toContain(
                    Str.safeId(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC + '' + category + '' + tag)
                  );
                });
              }
            });
          });
          this.generatedCategories = Array.from(this.generatedCategories);
          var existingCategories = Genai.SourceFile.Metadata.Category.fetch({
            filter: Filter.intersects('label', this.generatedCategories),
            include: 'label',
          }).objs.pluck('label');
          expect(existingCategories.length).toEqual(this.generatedCategories.length);
        });
      });
    });
  });
});
