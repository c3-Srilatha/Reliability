/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_GenAiVisualizationBase_forData';

describe(filename, function () {
  describe('when the data is passed by value', function () {
    describe('when it contains one datetime column and some numerical columns', function () {
      beforeAll(function () {
        this.baseData = {
          numLines: [100, 50, 250, 49, 500],
          timestamp: ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05'],
        };
      });

      it('returns a line chart', function () {
        var visualization = GenAiVisualizationBase.forData(Data.dataFrame(this.baseData));
        expect(visualization.visualizationConfiguration.type).toContain('GenAiUiSearchResultLineChart');
      });

      describe('when there is no categorical column', function () {
        it('the groupBy field is not populated', function () {
          var visualization = GenAiVisualizationBase.forData(Data.dataFrame(this.baseData));
          expect(visualization.visualizationConfiguration.component.groupBy).toBeFalsy();
        });
      });

      describe('when there is a categorical column', function () {
        beforeAll(function () {
          this.dataWithCategoricalColumn = {
            categoricalColumn: ['ENG1', 'ENG1', 'ENG2', 'ENG2', 'ENG1'],
          };
          this.dataWithCategoricalColumn = Object.assign(this.dataWithCategoricalColumn, this.baseData);
        });

        it('the categorical columns is sent as the "groupBy" field in the visualization', function () {
          var visualization = GenAiVisualizationBase.forData(Data.dataFrame(this.dataWithCategoricalColumn));
          expect(visualization.visualizationConfiguration.component.groupBy).toEqual('categoricalColumn');
        });
      });
    });
  });

  it('returns the most relevant visualization', function () {
    var visualization = GenAiVisualizationBase.forData(Genai.Aircraft.eval({ projection: 'alerts, riskScore' }));
    expect(visualization.visualizationConfiguration.type).toContain('GenAiUiSearchResult');
  });

  it('returns a visualization by spec/reference for eval', function () {
    var structuredQuerySpec = Genai.StructuredQuery.Spec.make({
      sourceType: Genai.Aircraft,
      spec: EvalSpec.make({ projection: 'alerts, riskScore' }),
    });
    var visualization = GenAiVisualizationBase.forData(
      structuredQuerySpec.sourceType.eval(structuredQuerySpec.spec),
      structuredQuerySpec
    );
    expect(visualization.data).toBeUndefined();
    expect(visualization.evalMetricsSpec).toBeUndefined();
    expect(visualization.sourceType).toEqual(structuredQuerySpec.sourceType.name());
    expect(visualization.evalSpec.projection).toEqual('alerts, riskScore');
  });

  it('returns a visualization by spec/reference for evalMetrics', function () {
    var structuredQuerySpec = Genai.StructuredQuery.Spec.make({
      sourceType: Genai.Aircraft,
      spec: EvalMetricsSpec.make({
        ids: ['X00'],
        expressions: ['HourOfDay'],
        start: '2022-01-01',
        end: '2022-01-03',
        interval: 'HOUR',
      }),
    });
    var visualization = GenAiVisualizationBase.forData(
      structuredQuerySpec.sourceType.evalMetrics(structuredQuerySpec.spec).toData(),
      structuredQuerySpec
    );
    expect(visualization.data).toBeUndefined();
    expect(visualization.evalSpec).toBeUndefined();
    expect(visualization.sourceType).toEqual(structuredQuerySpec.sourceType.name());
    expect(visualization.evalMetricsSpec).toEqual(structuredQuerySpec.spec);
  });

  describe('Data with one row of data', function () {
    beforeAll(function () {
      this.dataObjs = {
        col1: [1],
        col2: ['name1'],
      };

      this.data = Data.dataFrame(this.dataObjs);
      this.visualization = GenAiVisualizationBase.forData(this.data);
    });

    it('generates a grid visualization', function () {
      var config = this.visualization.visualizationConfiguration;
      expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultGrid>');
      expect(config.component.data.length).toEqual(1);
    });
  });

  describe('Data with one numerical and one string column', function () {
    beforeAll(function () {
      this.dataObjs = {
        col1: [1, 2, 3, 4, 5, 6, 7],
        col2: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7'],
      };

      this.data = Data.dataFrame(this.dataObjs);
      this.visualization = GenAiVisualizationBase.forData(this.data);
    });

    it('generates a bar chart visualization', function () {
      var config = this.visualization.visualizationConfiguration;
      expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultBarChart>');
      expect(config.component.data.length).toEqual(7);
      expect(config.component.xAxis).toEqual('col2');
      expect(config.component.yAxes).toEqual(['col1']);
      expect(this.visualization.xAxis).toEqual('col2');
      expect(this.visualization.yAxes).toEqual(['col1']);
    });
  });

  describe('Data with two numerical columns', function () {
    beforeAll(function () {
      this.dataObjs = {
        col1: [1, 2, 3, 4, 5, 6, 7],
        col2: [8, 9, 10, 11, 12, 13, 14],
      };

      this.data = Data.dataFrame(this.dataObjs);
      this.visualization = GenAiVisualizationBase.forData(this.data);
    });

    it('generates a scatter plot visualization', function () {
      var config = this.visualization.visualizationConfiguration;
      expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultScatterPlot>');
      expect(config.component.data.length).toEqual(7);
      expect(config.component.xAxis).toEqual('col1');
      expect(config.component.yAxes).toEqual(['col2']);
      expect(this.visualization.xAxis).toEqual('col1');
      expect(this.visualization.yAxes).toEqual(['col2']);
    });
  });

  describe('Data with three numerical columns and a string column', function () {
    beforeAll(function () {
      this.dataObjs = {
        col1: [1, 2, 3, 4, 5, 6, 7],
        col2: [8, 9, 10, 11, 12, 13, 14],
        col3: [15, 16, 17, 18, 19, 20, 21],
        col4: ['name1', 'name1', 'name1', 'name2', 'name2', 'name2', 'name2'],
      };

      this.data = Data.dataFrame(this.dataObjs);
      this.visualization = GenAiVisualizationBase.forData(this.data);
    });

    it('generates a scatter plot visualization with size and groupings', function () {
      var config = this.visualization.visualizationConfiguration;
      expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultScatterPlot>');
      expect(config.component.data.length).toEqual(7);
      expect(config.component.xAxis).toEqual('col1');
      expect(config.component.yAxes).toEqual(['col2']);
      expect(this.visualization.xAxis).toEqual('col1');
      expect(this.visualization.yAxes).toEqual(['col2']);
      expect(this.visualization.groupBy).toEqual('col4');
      expect(this.visualization.bubbleSizeBy).toEqual('col3');
    });
  });

  describe('Data with datetime column and numeric column', function () {
    beforeAll(function () {
      this.dataObjs = {
        col1: [1, 2, 3, 4, 5, 6, 7],
        col2: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07'],
        col3: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7'],
      };

      this.data = Data.dataFrame(this.dataObjs);
      this.visualization = GenAiVisualizationBase.forData(this.data);
    });

    it('generates a line chart visualization', function () {
      var config = this.visualization.visualizationConfiguration;
      expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultLineChart>');
      expect(config.component.data.length).toEqual(7);
      expect(config.component.xAxis).toEqual('col2');
      expect(config.component.yAxes).toEqual(['col1']);
      expect(this.visualization.xAxis).toEqual('col2');
      expect(this.visualization.yAxes).toEqual(['col1']);
    });
  });

  describe('Data with one longitude and one latitude column', function () {
    beforeAll(function () {
      this.dataObjs = [
        {
          country: 'France',
          city: 'Paris',
          state: null,
          latitude: 49.0096906,
          longitude: 2.5479245,
        },
        {
          country: 'USA',
          city: 'Denver',
          state: 'CO',
          latitude: 39.856096,
          longitude: -104.673738,
        },
      ];

      this.data = Data.dataFrame(this.dataObjs);

      this.assertMapVisualization = function (visualization) {
        var config = visualization.visualizationConfiguration;
        var tooltipConfig = visualization.tooltipConfig;
        expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultMap>');
        expect(config.component.data.length).toEqual(2);
        expect(config.component.latitude).toEqual('latitude');
        expect(config.component.longitude).toEqual('longitude');
        expect(tooltipConfig.tooltipHeaderField).toEqual('country');
        expect(tooltipConfig.tooltipAdditionalFields).toEqual(['city', 'state']);
        expect(visualization.latitude).toEqual('latitude');
        expect(visualization.longitude).toEqual('longitude');
      };
    });

    describe('when the latitude and longitude are recognized as numerical', function () {
      beforeAll(function () {
        this.visualization = GenAiVisualizationBase.forData(this.data);
      });

      it('generates a map visualization', function () {
        this.assertMapVisualization(this.visualization);
      });
    });

    describe('when the latitude and longitude datatypes are recognized as "object"', function () {
      beforeAll(function () {
        this.visualization = GenAiVisualizationBase.forData(this.data.astype('object'));
      });

      it('generates a map visualization', function () {
        this.assertMapVisualization(this.visualization);
      });
    });
  });

  describe('Data with lots of columns but not longitude and latitude and no datetime', function () {
    beforeAll(function () {
      this.dataObjs = {
        col0: [1, 2, 3, 4, 5, 6, 7],
        col1: ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        col2: ['blah', 'blah', 'blah', 'blah', 'blah', 'blah', 'blah'],
        col3: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7'],
      };

      this.data = Data.dataFrame(this.dataObjs);
      this.visualization = GenAiVisualizationBase.forData(this.data);
    });

    it('generates a grid visualization', function () {
      var config = this.visualization.visualizationConfiguration;
      expect(config.type).toEqual('UiSdlConnected<GenAiUiSearchResultGrid>');
      expect(config.component.data.length).toEqual(7);
    });
  });
});
