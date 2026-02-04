/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiParentConfig';

/**
 * Basic outline of the type hierarchy
 * A: { str, bConfigName, cConfigId }
 * B: { str, dConfigName }
 * C: { str, num }
 * D: { str }
 */

const INITIAL_CONFIG = {
  configOverride: 'USER',
  name: 'A',
  str: 'a',
  bConfigName: {
    configOverride: 'USER',
    name: 'B',
    str: 'b',
    dConfigName: {
      configOverride: 'USER',
      name: 'D',
      str: 'd',
    },
  },
  cConfigId: {
    configOverride: 'USER',
    id: 'C',
    str: 'c',
    num: 1,
  },
};

describe(filename, function () {
  function setConfigs() {
    this.dConfig = Genai.ParentConfigTest.D.make({ name: 'D', str: 'd' });
    this.cConfig = Genai.ParentConfigTest.C.make({ id: 'C', num: 1, str: 'c' });
    this.bConfig = Genai.ParentConfigTest.B.make({ name: 'B', dConfigName: 'D', str: 'b' });
    this.aConfig = Genai.ParentConfigTest.A.make({
      name: 'A',
      bConfigName: 'B',
      cConfigId: 'C',
      str: 'a',
    });
    [this.dConfig, this.cConfig, this.bConfig, this.aConfig].forEach(function (config) {
      config.clearConfigAndSecretOverride('USER');
      config.clearConfigAndSecretOverride('APP');
      config.setConfig();
    });
  }
  beforeEach(function () {
    setConfigs();
  });

  it('getRecursive', function () {
    var aConfig = Genai.ParentConfigTest.A.forConfigKey('A').getRecursive();
    expect(JSON.stringify(aConfig)).toEqual(JSON.stringify(INITIAL_CONFIG));
  });

  describe('setRecursive', function () {
    beforeEach(function () {
      setConfigs();
    });

    it('works with setConfig', function () {
      var aConfig = Js.toNativeObject(Genai.ParentConfigTest.A.forConfigKey('A').getRecursive());
      aConfig.bConfigName.dConfigName.str = 'd2';
      aConfig.cConfigId.num = 42;
      delete aConfig.cConfigId.str;
      Genai.ParentConfigTest.A.setRecursive(aConfig);

      var dConfig = Genai.ParentConfigTest.D.forConfigKey('D').getConfig();
      expect(dConfig.str).toEqual('d2');
      var cConfig = Genai.ParentConfigTest.C.forConfigKey('C').getConfig();
      expect(cConfig.num).toEqual(42);
      expect(Str.isEmpty(cConfig.str)).withContext('setConfig should wipe unset values').toBe(true);

      aConfig = Js.toNativeObject(Genai.ParentConfigTest.A.forConfigKey('A').getRecursive());
      expect(JSON.stringify(aConfig)).toEqual(
        JSON.stringify({
          configOverride: 'USER',
          name: 'A',
          str: 'a',
          bConfigName: {
            configOverride: 'USER',
            name: 'B',
            str: 'b',
            dConfigName: {
              // Str changed to d2
              configOverride: 'USER',
              name: 'D',
              str: 'd2',
            },
          },
          cConfigId: {
            // No str, num changed to 42
            configOverride: 'USER',
            id: 'C',
            num: 42,
          },
        })
      );

      delete aConfig.bConfigName;
      Genai.ParentConfigTest.A.setRecursive(aConfig);
      expect(JSON.stringify(Genai.ParentConfigTest.B.forConfigKey('B').getRecursive()))
        .withContext('B config should be unchanged')
        .toEqual(
          JSON.stringify({
            configOverride: 'USER',
            name: 'B',
            str: 'b',
            dConfigName: {
              configOverride: 'USER',
              name: 'D',
              str: 'd2',
            },
          })
        );

      aConfig = Genai.ParentConfigTest.A.forConfigKey('A').getRecursive();
      expect(JSON.stringify(aConfig))
        .withContext('b child config should be removed from A')
        .toEqual(
          JSON.stringify({
            configOverride: 'USER',
            name: 'A',
            str: 'a',
            cConfigId: {
              configOverride: 'USER',
              id: 'C',
              num: 42,
            },
          })
        );
    });

    it('works with setConfigValues', function () {
      var aConfig = Js.toNativeObject(Genai.ParentConfigTest.A.forConfigKey('A').getRecursive());
      delete aConfig.cConfigId;
      aConfig.bConfigName = { dConfigName: { str: 'd3' } };
      Genai.ParentConfigTest.A.setRecursive(aConfig, true);
      expect(JSON.stringify(Genai.ParentConfigTest.A.forConfigKey('A').getRecursive()))
        .withContext('only the single nested value for D.str should change')
        .toEqual(
          JSON.stringify({
            configOverride: 'USER',
            name: 'A',
            str: 'a',
            bConfigName: {
              configOverride: 'USER',
              name: 'B',
              str: 'b',
              dConfigName: {
                configOverride: 'USER',
                name: 'D',
                str: 'd3',
              },
            },
            cConfigId: {
              configOverride: 'USER',
              id: 'C',
              str: 'c',
              num: 1,
            },
          })
        );
    });

    it('works with setConfigValues and override', function () {
      var aConfig = Js.toNativeObject(Genai.ParentConfigTest.A.forConfigKey('A').getRecursive());
      delete aConfig.bConfigName;
      aConfig.str = 'a2';
      aConfig.cConfigId.str = 'c2';
      Genai.ParentConfigTest.A.setRecursive(aConfig, true, 'APP');
      expect(JSON.stringify(Genai.ParentConfigTest.A.forConfigKey('A').getRecursive()))
        .withContext('No values should change at USER (default) override')
        .toEqual(JSON.stringify(INITIAL_CONFIG));

      var allConfigsAndOverrides = Genai.ParentConfigTest.A.forConfigKey('A').allConfigValueOverrides('str');
      expect(JSON.stringify(allConfigsAndOverrides)).toEqual(
        JSON.stringify({
          APP: 'a2',
          USER: 'a',
        })
      );
      allConfigsAndOverrides = Genai.ParentConfigTest.C.forConfigKey('C').allConfigValueOverrides('str');
      expect(JSON.stringify(allConfigsAndOverrides)).toEqual(
        JSON.stringify({
          APP: 'c2',
          USER: 'c',
        })
      );
    });
  });
});
