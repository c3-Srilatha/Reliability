/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourcePassageTable';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];

    this.getDataAsUser = function (user, table) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function (table) {
          return table.getData();
        }).partiallyCall([table])
      );
    };
  });

  afterAll(function () {
    TestIdp.removeUser(this.basicUser);
    TestApi.teardown(this.ctx);
  });

  describe('getData', function () {
    it('returns the data from the file if the file exists', function () {
      var worldPeaksTable = Genai.SourcePassage.Table.make({
        title: 'World Peaks',
        dataFrameFile: GcsFile.make('gcs://c3--datasets/genai/mockdata/tables/worldPeaks.csv'),
      });

      // The file contains 35 rows of data
      var data = this.getDataAsUser(this.basicUser, worldPeaksTable);
      expect(data.length).toEqual(20);
      expect(data[0].name).toEqual('Mount Everest');
    });

    it('does not fail when the file contains empty cells', function () {
      var badHeaderTable = Genai.SourcePassage.Table.make({
        title: 'Bad Header',
        dataFrameFile: GcsFile.make('gcs://c3--datasets/genai/mockdata/tables/bad-header.csv'),
      });

      var data = this.getDataAsUser(this.basicUser, badHeaderTable);
      expect(data.length).toEqual(16);
      expect(data[0]).toEqual({
        0: 'Model',
        1: 'NQ',
        2: null,
        3: 'TriviaQA',
        4: null,
        5: 'SQuAD Open',
      });
    });
  });
});
