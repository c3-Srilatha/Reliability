/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai_SourceFile_Metadata_Category';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Users
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    this.categoryFunctionAsUser = function (user, actionName, args) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (actionName, args) {
          return Genai.SourceFile.Metadata.Category[actionName](args);
        }).partiallyCall([actionName, args])
      );
    };

    this.categoryTest = this.categoryFunctionAsUser(this.adminUser, 'fromSpec', {
      label: 'categoryTest1',
      metadataType: Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC,
    });
    this.tag = Genai.SourceFile.Metadata.Tag.fromSpec({ label: 'tag1', category: 'categoryTest1' }).upsert();
    this.previousCategory = Genai.SourceFile.Metadata.Category.fetch({
      filter: Filter.eq('label', 'categoryTest1'),
      include: 'metadataType, tags.label, label',
      limit: 1,
    }).first();
    expect(this.previousCategory.label).toEqual('categoryTest1');
    expect(this.previousCategory.tags.length).toEqual(1);
    expect(this.previousCategory.tags[0].label).toEqual('tag1');
    expect(this.previousCategory.metadataType).toEqual(Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC);
  });

  afterAll(function () {
    TestIdp.removeUser(this.adminUser);
    TestApi.teardown(this.ctx);
    Genai.SourceFile.Metadata.Category.removeAll({ filter: Filter.contains('label', 'categoryTest') }, true);
  });

  describe('::fromSpec', function () {
    it('modify an existing category based on the spec', function () {
      this.categoryFunctionAsUser(this.adminUser, 'fromSpec', {
        label: 'categoryTest1',
        examples: ['exampleTest'],
      });
      var currentCategory = Genai.SourceFile.Metadata.Category.fetch({
        filter: Filter.eq('label', 'categoryTest1'),
        include: 'examples',
        limit: 1,
      }).first();
      expect(currentCategory.examples).toEqual(['exampleTest']);
    });
  });

  describe('::removeAll', function () {
    it('remove a category and the tag related', function () {
      var spec = { filter: Filter.eq('id', this.previousCategory.id) };
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (spec) {
          return Genai.SourceFile.Metadata.Category.removeAll(spec, true);
        }).partiallyCall([spec])
      );
      expect(Genai.SourceFile.Metadata.Tag.fetchCount({ filter: Filter.eq('label', 'tag1') })).toEqual(0);
      expect(Genai.SourceFile.Metadata.Category.fetchCount({ filter: Filter.eq('label', 'categoryTest') })).toEqual(0);
    });
  });
});
