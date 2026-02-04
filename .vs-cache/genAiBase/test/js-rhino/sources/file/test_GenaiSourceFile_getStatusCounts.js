/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_getStatusCounts';

describe(filename, function () {
  beforeAll(function () {
    Genai.SourceFile.removeAll({ filter: Filter.exists('id') }, true);
    this.ctx = TestApi.createContext(filename);

    [this.tutorialProject, this.defaultProject] = TestApi.upsertDefaultAndTutorialProjects(this.ctx);

    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];

    var defaultSourceCollection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      rootUrl: 'some/fake/url',
      targetUrl: 'some/fake/url',
      projects: [this.defaultProject],
    }).get('this');

    var tutorialSourceCollection = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      rootUrl: 'some/fake/url',
      targetUrl: 'some/fake/url',
      projects: [this.tutorialProject],
    }).get('this');

    var testFile = File.fromString('some/fake/url.pdf');
    this.sourceFiles = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.SourceFile',
      C3.Array.ofInt(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(function (idx) {
        return {
          id: 'SourceFile' + idx.toString(),
          originalFile: testFile,
          collection: idx < 5 ? defaultSourceCollection : tutorialSourceCollection,
        };
      })
    );

    var statuses = [
      Genai.SourceFile.StatusEnum.INDEXED,
      Genai.SourceFile.StatusEnum.NEEDS_REINDEXING,
      Genai.SourceFile.StatusEnum.FAILED,
      Genai.SourceFile.StatusEnum.ARCHIVED,
      Genai.SourceFile.StatusEnum.NEEDS_REMOVAL,
    ];
    var now = DateTime.nowWithMillis();

    var sourceFileHistories = this.sourceFiles.map(function (parentId, idx) {
      return Genai.SourceFile.StatusHistory.make({
        id: Str.safeId(parentId + now.millis),
        parent: parentId,
        timestamp: now.plusDays(-1 * (idx % 2)),
        value: statuses[idx % 5],
      });
    });

    TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile.StatusHistory', sourceFileHistories);
    TestApi.waitForSetup(this.ctx);

    this.createExpectedResult = function (numIndexed, numModified, numFailed, numDeleted, numNew) {
      return Genai.SourceFile.StatusCounts.make({
        numIndexed: numIndexed,
        numModified: numModified,
        numFailed: numFailed,
        numDeleted: numDeleted,
        numNew: numNew,
      });
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('when the active project for the user is the default one', function () {
    beforeAll(function () {
      this.userSettingsSpy = TestApi.spyOn(this.ctx, 'Genai.App.UserSettings', 'forUser')
        .returnValue({ activeProject: { id: this.defaultProject.id } })
        .register();

      this.result = Genai.SourceFile.getStatusCounts();
      this.expectedResult = this.createExpectedResult(1, 0, 1, 0, 4);
    });

    it('returns correct value for `numIndexed`', function () {
      expect(this.result.numIndexed).toEqual(this.expectedResult.numIndexed);
    });

    it('returns correct value for `numModified`', function () {
      expect(this.result.numModified).toEqual(this.expectedResult.numModified);
    });

    it('returns correct value for `numFailed`', function () {
      expect(this.result.numFailed).toEqual(this.expectedResult.numFailed);
    });

    it('returns correct value for `numNew`', function () {
      expect(this.result.numNew).toEqual(this.expectedResult.numNew);
    });

    it('returns the correct value for `numDeleted`', function () {
      expect(this.result.numDeleted).toEqual(this.expectedResult.numDeleted);
    });
  });

  describe('when the active project for the user is the tutorial', function () {
    beforeAll(function () {
      this.userSettingsSpy = TestApi.spyOn(this.ctx, 'Genai.App.UserSettings', 'forUser')
        .returnValue({ activeProject: { id: this.tutorialProject.id } })
        .register();

      this.result = Genai.SourceFile.getStatusCounts();
      this.expectedResult = this.createExpectedResult(0, 1, 0, 2, 6);
    });

    it('returns correct value for `numIndexed`', function () {
      expect(this.result.numIndexed).toEqual(this.expectedResult.numIndexed);
    });

    it('returns correct value for `numModified`', function () {
      expect(this.result.numModified).toEqual(this.expectedResult.numModified);
    });

    it('returns correct value for `numFailed`', function () {
      expect(this.result.numFailed).toEqual(this.expectedResult.numFailed);
    });

    it('returns correct value for `numNew`', function () {
      expect(this.result.numNew).toEqual(this.expectedResult.numNew);
    });

    it('returns the correct value for `numDeleted`', function () {
      expect(this.result.numDeleted).toEqual(this.expectedResult.numDeleted);
    });
  });

  describe('when the user has no active project', function () {
    beforeAll(function () {
      this.userSettingsSpy = TestApi.spyOn(this.ctx, 'Genai.App.UserSettings', 'forUser')
        .returnValue({ activeProject: null })
        .register();

      this.result = Genai.SourceFile.getStatusCounts();
      this.expectedResult = this.createExpectedResult(1, 1, 1, 2, 10);
    });

    describe('returns the count for all the source files', function () {
      it('returns correct value for `numIndexed`', function () {
        expect(this.result.numIndexed).toEqual(this.expectedResult.numIndexed);
      });

      it('returns correct value for `numModified`', function () {
        expect(this.result.numModified).toEqual(this.expectedResult.numModified);
      });

      it('returns correct value for `numFailed`', function () {
        expect(this.result.numFailed).toEqual(this.expectedResult.numFailed);
      });

      it('returns correct value for `numNew`', function () {
        expect(this.result.numNew).toEqual(this.expectedResult.numNew);
      });

      it('returns the correct value for `numDeleted`', function () {
        expect(this.result.numDeleted).toEqual(this.expectedResult.numDeleted);
      });
    });
  });

  describe('when there are no settings set for the user', function () {
    beforeAll(function () {
      this.userSettingsSpy = TestApi.spyOn(this.ctx, 'Genai.App.UserSettings', 'forUser')
        .callFake(
          Lambda.fromJsFunc(function (_action, _input) {
            throw Error();
          })
        )
        .register();

      this.result = Genai.SourceFile.getStatusCounts();
      this.expectedResult = this.createExpectedResult(1, 1, 1, 2, 10);
    });

    it('returns correct value for `numIndexed`', function () {
      expect(this.result.numIndexed).toEqual(this.expectedResult.numIndexed);
    });

    it('returns correct value for `numModified`', function () {
      expect(this.result.numModified).toEqual(this.expectedResult.numModified);
    });

    it('returns correct value for `numFailed`', function () {
      expect(this.result.numFailed).toEqual(this.expectedResult.numFailed);
    });

    it('returns correct value for `numNew`', function () {
      expect(this.result.numNew).toEqual(this.expectedResult.numNew);
    });

    it('returns the correct value for `numDeleted`', function () {
      expect(this.result.numDeleted).toEqual(this.expectedResult.numDeleted);
    });
  });
});
