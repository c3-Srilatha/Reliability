/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_fuzzyMatcher_acls';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    [this.userA, this.userB] = TestIdp.createTestUsersForGroup('C3.AppAdmin', 2);
    this.userB = this.userB.addToGroup('Genai.AdminUser');
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    TestIdp.removeUser(this.userA);
    TestIdp.removeUser(this.userB);
  });

  describe('StringFuzzyMatcher with two users with different groups', function () {
    beforeAll(function () {
      this.graph = TestApi.upsertReadinessDataModelGraph();
      this.fuzzyMatcher = Genai.Agent.Tool.Util.StringFuzzyMatcher.initialize({ dataModelGraph: this.graph });

      [this.userA, this.userB].forEach((user) => {
        TestRunner.asUser(
          user,
          Lambda.fromJsFunc(function (fuzzyMatcher) {
            fuzzyMatcher.retrieveMostSimilarValues(Genai.Aircraft, 'id', 'xxx', 5);
          }).partiallyApply({ fuzzyMatcher: this.fuzzyMatcher })
        );
      });
    });

    afterAll(function () {
      this.fuzzyMatcher?.terminate();
      this.graph?.remove();
    });

    it('creates multiple keys in the field vector DB', function () {
      expect(this.fuzzyMatcher.getNumKeysFieldVectorDb())
        .withContext('Expect 2 separate keys because userA and userB belong to different groups')
        .toEqual(2);
    });
  });
});
