/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaVisualizationElement';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.createVizElement = function () {
      var actionResultTopic = TestApi.upsertEntity(this.ctx, 'ExMachinaActionResultTopic', {
        name: 'Topic 1',
      });

      var resultMetadata = TestApi.upsertEntity(this.ctx, 'ExMachinaActionResultMetadata', {
        parent: actionResultTopic,
        project: 'test_project',
        filename: 'test filename',
        action: ExMachinaAction.make(
          {
            id: 'test-action',
            classId: 'test-classId',
            visualizer: ExMachinaVisualizer.make({
              chartType: ExMachinaVisualizerChartType.line,
              vizSettings: {
                title: 'Test Title',
              },
            }),
          },
          true
        ),
      });

      var assetCollection = TestApi.upsertEntity(this.ctx, 'ExMachinaVisualizationAssetCollection', {
        name: 'Line Chart Visualizations',
      });

      var asset = TestApi.upsertEntity(this.ctx, 'ExMachinaVisualizationAsset', {
        name: 'Visualization 1',
        parent: assetCollection,
        topic: actionResultTopic,
      });

      var element = TestApi.upsertEntity(this.ctx, 'ExMachinaVisualizationElement', {
        asset: asset,
        parent: 'test-storyChapter',
      });

      TestApi.waitForSetup(this.ctx);

      return {
        actionResultTopic: actionResultTopic,
        resultMetadata: resultMetadata.get('action.visualizer'),
        assetCollection: assetCollection,
        asset: asset,
        element: element,
      };
    };

    ExMachinaActionResultTopic.refreshCalcFields({
      sync: true,
    });

    FileSystemConfig.make().setDefault(FileSystemScheme.c3fs, ConfigOverride.TAG);
    this.origDefaultMount = FileSystem.mounts().get('DEFAULT');

    this.testContent = '{ "sample": {}, "params": {} }';
    TestApi.spyOn(this.ctx, 'FileSystem', 'mounts').returnValue({}).register();
    TestApi.spyOn(this.ctx, 'File', 'readString').returnValue(this.testContent).register();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    FileSystemConfig.make().setDefault(FileSystemConfig.make().getConfig().default, ConfigOverride.TAG);
  });

  describe('#readString', function () {
    it('reads the latest visualization result as a string', function () {
      var createdData = this.createVizElement();
      expect(createdData.element.readString()).toEqual(this.testContent);
    });
  });

  describe('#getInfo', function () {
    describe('for a valid visualization element', function () {
      beforeEach(function () {
        var createdData = this.createVizElement();
        this.element = createdData.element;
        this.actionResultTopic = createdData.actionResultTopic;
        this.resultMetadata = createdData.resultMetadata;
      });

      it('returns the expected information about the visualization', function () {
        var result = this.element.getInfo();
        expect(result.id).toEqual(this.element.id);
        expect(result.name).toEqual(this.element.name);
        expect(result.description).toEqual(this.actionResultTopic.description);
        expect(result.projectId).toEqual('test_project');
        expect(result.vizSettings).toEqual(this.resultMetadata.action.visualizer.vizSettings);
        expect(result.chartType).toEqual(ExMachinaVisualizerChartType.line);
        expect(result.created).toBeDefined();
        expect(result.result.sample).toEqual({});
        expect(result.result.params).toEqual({});
        expect(result.missingAsset).toBe(false);
        expect(result.missingMetadataForDateRange).toBe(false);
        expect(result.missingProject).toBe(false);
      });
    });

    describe('for a visualization with a missing asset', function () {
      beforeEach(function () {
        var createdData = this.createVizElement();
        this.element = createdData.element;
        this.actionResultTopic = createdData.actionResultTopic;
        ExMachinaVisualizationElement.make({ id: this.element.id, asset: null }, true).merge({ mergeInclude: 'asset' });
      });

      it('returns the expected information about the visualization', function () {
        var result = this.element.getInfo();
        expect(result.id).toEqual(this.element.id);
        expect(result.name).toEqual(this.element.name);
        expect(result.description).toEqual(this.actionResultTopic.description);
        expect(result.projectId).toBeUndefined();
        expect(result.vizSettings).toBeUndefined();
        expect(result.chartType).toBeUndefined();
        expect(result.created).toBeUndefined();
        expect(result.result).toBeUndefined();
        expect(result.missingAsset).toBe(true);
        expect(result.missingMetadataForDateRange).toBe(true);
        expect(result.missingProject).toBe(true);
      });
    });

    describe('for a visualization with no metadata before the specified date', function () {
      beforeEach(function () {
        var createdData = this.createVizElement();
        this.element = createdData.element;
        this.actionResultTopic = createdData.actionResultTopic;
      });

      it('returns the expected information about the visualization', function () {
        var result = this.element.getInfo(DateTime.nowWithMillis().plusYears(-5));
        expect(result.id).toEqual(this.element.id);
        expect(result.name).toEqual(this.element.name);
        expect(result.description).toEqual(this.actionResultTopic.description);
        expect(result.projectId).toBeUndefined();
        expect(result.vizSettings).toBeUndefined();
        expect(result.chartType).toBeUndefined();
        expect(result.created).toBeUndefined();
        expect(result.result).toBeUndefined();
        expect(result.missingAsset).toBe(false);
        expect(result.missingMetadataForDateRange).toBe(true);
        expect(result.missingProject).toBe(true);
      });
    });

    describe('for a visualization in which the associated project was deleted', function () {
      beforeEach(function () {
        var createdData = this.createVizElement();
        this.element = createdData.element;
        this.actionResultTopic = createdData.actionResultTopic;
        this.resultMetadata = createdData.resultMetadata;
        ExMachinaActionResultMetadata.make({ id: this.resultMetadata.id, project: '' }, true).merge({
          mergeInclude: 'project',
        });
      });

      it('returns the expected information about the visualization', function () {
        var result = this.element.getInfo();
        expect(result.id).toEqual(this.element.id);
        expect(result.name).toEqual(this.element.name);
        expect(result.description).toEqual(this.actionResultTopic.description);
        expect(result.projectId).toBeUndefined();
        expect(result.vizSettings).toEqual(this.resultMetadata.action.visualizer.vizSettings);
        expect(result.chartType).toEqual(ExMachinaVisualizerChartType.line);
        expect(result.created).toBeDefined();
        expect(result.result.sample).toEqual({});
        expect(result.result.params).toEqual({});
        expect(result.missingAsset).toBe(false);
        expect(result.missingMetadataForDateRange).toBe(false);
        expect(result.missingProject).toBe(true);
      });
    });
  });
});
