/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlTranslationLoader', function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext('test_UiSdlTranslationLoader');

    // Test locales
    this.en = Locale.make('en'); // Fallback locale
    this.en_001 = Locale.make('en-001');
    this.en_150 = Locale.make('en-150');
    this.en_AT = Locale.make('en-AT');
    this.en_CH = Locale.make('en-CH');
    this.en_GB = Locale.make('en-GB');
    this.en_US = Locale.make('en-US');
    this.en_XA = Locale.make('en-XA'); // Pseudolocale
    this.ar_XB = Locale.make('ar-XB'); // Pseudolocale
    this.es = Locale.make('es'); // No translations

    // Registered spies

    this.translationFetchSpy = TestApi.spyOn(this.ctx, 'Translation', 'fetchObjStream')
      .callFake(
        Lambda.fromJsFunc(function (_action, inputs) {
          var filter = inputs.spec && inputs.spec.filter ? inputs.spec.filter.toString() : '';

          function produceTranslation(localeId, key, value) {
            return Translation.make(localeId + '.' + key)
              .withField('locale', Locale.make(localeId))
              .withField('key', key)
              .withField('value', value);
          }

          if (filter.indexOf('locale.id == "en_AT"') !== -1) {
            return Stream.of('Translation', produceTranslation('en-AT', 'Hello.World', 'Hello, Austria!'));
          } else if (filter.indexOf('locale.id == "en_150"') !== -1) {
            return Stream.of('Translation', produceTranslation('en_150', 'Hello.World', 'Hello, Europe!'));
          } else if (filter.indexOf('locale.id == "en_001"') !== -1) {
            return Stream.of('Translation', produceTranslation('en_001', 'Hello.World', 'Hello, world!'));
          } else if (filter.indexOf('locale.id == "en"') !== -1) {
            return Stream.of('Translation', produceTranslation('en', 'Hello.World', 'Hello!'));
          } else {
            return Stream.of('Translation');
          }
        }),
      )
      .register();

    this.localeGetSpy = TestApi.spyOn(this.ctx, 'Locale', 'get').callFake(
      Lambda.fromJsFunc(function (_action, args) {
        // Handle each locale differently to test different code branches:
        if (args.this.id === 'en_CH') {
          // Populated in DB, but does not have `languageTag` field yet.
          return Locale.make('en_CH')
            .withField('language', 'en')
            .withField('region', 'CH')
            .withField('name', 'English (Switzerland)');
        } else if (args.this.id === 'en_GB') {
          // Populated in DB and has `languageTag` field.
          return Locale.make('en_GB')
            .withField('language', 'en')
            .withField('region', 'GB')
            .withField('name', 'English (United Kingdom)');
        } else {
          // Locale not populated in DB.
          return undefined;
        }
      }),
    );

    this.localeUpdateSeedDataSpy = TestApi.spyOn(this.ctx, 'Locale', 'updateSeedData');

    // Helper methods

    this.setLocales = function (locales) {
      UiSdlConfig.setConfigValue('i18n.locales', locales);
    };

    this.readResultContents = function (result) {
      return result.files.mapTo('string', function (metadataFile) {
        return metadataFile.file.readString();
      });
    };

    // Get existing config to reset during teardown
    this.existingConfigMap = UiSdlConfig.allConfigOverrides();

    UiSdlConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  afterEach(function () {
    // Clear after each test to ensure that tests don't affect each other.
    UiSdlConfig.clearConfigAndSecretOverride(ConfigOverride.APP);
  });

  afterAll(function () {
    try {
      if (this.existingConfigMap) {
        this.existingConfigMap.each(function (configValue, override) {
          /*
           * FIXME: PLAT-42729 java.lang.NullPointerException: Cannot invoke "c3.platform.typesys.type.ReferenceType.dereference()" because the return value of "c3.platform.typesys.type.ValueType.asReferenceType()" is null
           * UiSdlConfig.make(configValue).setConfig(override);
           */
        });
      }
    } finally {
      TestApi.teardown(this.ctx);
    }
  });

  describe('::produceAll', function () {
    describe('when there are no locales configured', function () {
      beforeEach(function () {
        this.setLocales(Locale.array());
        this.result = this.readResultContents(UiSdlTranslationLoader.produceAll());
      });

      it('returns the default language (en) translations', function () {
        expect(this.result).toEqual({ 'translations/en.json': '{\n  "Hello.World": "Hello!"\n}' });
      });
    });

    describe('when there are several locales configured', function () {
      beforeEach(function () {
        this.setLocales(Locale.array(this.en_AT, this.en_CH, this.en_GB, this.en_US));
        this.result = this.readResultContents(UiSdlTranslationLoader.produceAll());
      });

      it('returns the translation files for all configured locale', function () {
        var result = this.result
          .fold(C3.Array.ofStr(), function (_value, key, acc) {
            acc = acc.with(key);
            return acc;
          })
          .sorted(false);

        expect(result).toEqual(
          C3.Array.fromJson([
            'translations/en-AT.json',
            'translations/en-CH.json',
            'translations/en-GB.json',
            'translations/en-US.json',
            'translations/en.json',
          ]),
        );

        // Then check that the file contents look like JSON.
        var contentRegex = /\{\n {2}"Hello.World": ".*"\n\}/;
        expect(this.result.get('translations/en-AT.json')).toEqual(jasmine.stringMatching(contentRegex));
        expect(this.result.get('translations/en-CH.json')).toEqual(jasmine.stringMatching(contentRegex));
        expect(this.result.get('translations/en-GB.json')).toEqual(jasmine.stringMatching(contentRegex));
        expect(this.result.get('translations/en-US.json')).toEqual(jasmine.stringMatching(contentRegex));
        expect(this.result.get('translations/en.json')).toEqual(jasmine.stringMatching(contentRegex)); // Fallback locale
      });
    });

    describe('when there are pseudolocales configured', function () {
      beforeEach(function () {
        this.setLocales(Locale.array(this.en, this.en_XA, this.ar_XB));
        this.result = this.readResultContents(UiSdlTranslationLoader.produceAll());
      });

      it('does not return translation files for the pseudolocales', function () {
        expect(Object.keys(this.result)).not.toEqual(
          jasmine.arrayContaining(['translations/en-XA.json', 'translations/ar-XB.json']),
        );
      });

      it('returns the default language (en) translations', function () {
        expect(this.result).toEqual(
          jasmine.objectContaining(
            C3.Map.fromJson({
              'translations/en.json': '{\n  "Hello.World": "Hello!"\n}',
            }),
          ),
        );
      });
    });
  });

  describe('::produce', function () {
    describe('when the country-specific locale (en-AT) has its own Translation', function () {
      beforeEach(function () {
        this.result = UiSdlTranslationLoader.produce(this.en_AT);
      });

      it('produces a translation bundle with the region-specific translation (en_AT)', function () {
        expect(this.result).toBe('{\n  "Hello.World": "Hello, Austria!"\n}');
      });
    });

    describe('when the country-specific locale (en-CH) does not have its own Translation', function () {
      beforeEach(function () {
        this.result = UiSdlTranslationLoader.produce(this.en_CH);
      });

      it('produces a translation bundle that inherits the continent-specific translation (en-150)', function () {
        expect(this.result).toBe('{\n  "Hello.World": "Hello, Europe!"\n}');
      });
    });

    describe('when the country-specific locale (en-GB) does not have its own Translation', function () {
      beforeEach(function () {
        this.result = UiSdlTranslationLoader.produce(this.en_GB);
      });

      it('produces a translation bundle that inherits the world-specific translation (en-001)', function () {
        expect(this.result).toBe('{\n  "Hello.World": "Hello, world!"\n}');
      });
    });
  });

  describe('when the country-specific locale (en-US) does not have its own Translation', function () {
    beforeEach(function () {
      this.result = UiSdlTranslationLoader.produce(this.en_US);
    });

    it('produces a translation bundle that inherits the base language translation (en)', function () {
      expect(this.result).toBe('{\n  "Hello.World": "Hello!"\n}');
    });
  });

  describe('when the locale does not have any Translations', function () {
    beforeEach(function () {
      this.result = UiSdlTranslationLoader.produce(this.es);
    });

    it('produces a translation bundle with no translations', function () {
      expect(this.result).toBe('{}');
    });
  });

  describe('::produceBatch', function () {
    beforeAll(function () {
      this.batch = ['en'];
      this.result = UiSdlTranslationLoader.produceBatch(this.batch).fileDetails;
      this.en = this.result['en.json'];
    });

    it('should generate source code', function () {
      expect(this.en.fileContent).not.toBe(null);
    });

    it('should generate correct working dir path', function () {
      expect(this.en.filePathInWorkingDir).toBe('node_modules/@c3/ui/translations/en.json');
    });
  });
});
