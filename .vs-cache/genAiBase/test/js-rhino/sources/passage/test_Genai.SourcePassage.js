/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Genai.SourcePassage';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.passageIds = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.ResultToPassageRelation', [
      {
        from: { id: 'fromId1' },
        passage: {
          source: {
            id: 'id1',
          },
          intraSourceId: '1',
          imageFile: { url: 'some/url1' },
        },
        sourceFile: { id: 'dummy1' },
      },
      {
        from: { id: 'fromId2' },
        passage: {
          source: {
            id: 'id2',
          },
          intraSourceId: '2',
          contentStr: 'test',
        },
        sourceFile: { id: 'dummy2' },
      },
      {
        from: { id: 'fromId3' },
        passage: {
          source: {
            id: 'id3',
          },
          intraSourceId: '3',
          dataFrameFile: { url: 'some/url2' },
        },
        sourceFile: { id: 'dummy3' },
      },
    ]);

    TestApi.waitForSetup(this.ctx);
    Genai.Query.ResultToPassageRelation.refreshCalcFields({
      ids: [this.passageIds],
      sync: true,
    });
  });

  afterAll(function () {
    Genai.Query.ResultToPassageRelation.removeAll({ filter: Filter.intersects('id', this.passageIds) }, true);
    TestApi.teardown(this.ctx);
  });

  describe('::sourceType', function () {
    it('returns the correct source types', function () {
      const passages = Genai.Query.ResultToPassageRelation.fetch({
        filter: Filter.intersects('id', this.passageIds),
        include: 'passage.sourceType, passage',
      }).objs;

      expect(passages[0]?.passage?.sourceType).toEqual(Genai.SourcePassageTypeEnum.IMAGE);
      expect(passages[1]?.passage?.sourceType).toEqual(Genai.SourcePassageTypeEnum.TEXT);
      expect(passages[2]?.passage?.sourceType).toEqual(Genai.SourcePassageTypeEnum.TABLE);
    });
  });
});
