/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaVisualizationAsset';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    var story = TestApi.createTestStory(this.ctx);

    var chapter = story.chapters[0];
    var element = chapter.chapterElements[0];
    this.vizAsset = element.get('asset').at('asset');
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#updateVizPreviewInfo', function () {
    it('adds the preview image to the visualization asset', function () {
      var svgImage = '<svg>SVG Content</svg>';
      this.vizAsset.updateVizPreviewInfo(svgImage);
      expect(this.vizAsset.get('previewImage').at('previewImage')).toEqual(svgImage);
    });
  });
});
