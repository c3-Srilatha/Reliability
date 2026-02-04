/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProject_ExpressionEngineFunction';

describe('getCollections', function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.defaultProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'temp',
      name: 'Temporary Project',
      chunkerConfig: 'default',
    });

    this.testCollection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      id: 'temp-collection',
      name: 'Temporary collection',
      projects: [this.defaultProject],
    });

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('when the project has associated source collections', function () {
    it('returns the associated collections', function () {
      var result = Genai.Project.ExpressionEngineFunction.getCollections('temp');
      expect(result.length).toEqual(1);
      expect(result[0].id).toContain('temp-collection');
      expect(result[0].name).toContain('Temporary collection');
    });
  });

  describe('when the project has no associated source collections', function () {
    it('returns an empty array', function () {
      var result = Genai.Project.ExpressionEngineFunction.getCollections('nonexistent');
      expect(result.length).toEqual(0);
    });
  });
});
