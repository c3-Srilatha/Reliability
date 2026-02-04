# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import re
import pytest
import pandas as pd

FILENAME = "test_GenAiVisualizationBase"

# pylint disable=disallowed-name, unused-variable, redefined-outer-name


@pytest.fixture(scope="module")
def base_data():
    data = {
        "numLines": [100, 50, 250, 49, 500],
        "timestamp": ["2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-05"],
    }

    return pd.DataFrame(data)


def test_data_by_value(base_data):
    visualization = c3.GenAiVisualizationBase.forPandas(df=base_data)

    # Returns a line chart and the groupBy field is not set
    assert str(visualization.type()) == "GenAiVisualizationLineChart"
    assert not visualization.visualizationConfiguration.get("component").get("groupBy")


def test_data_by_value_with_categorical_column(base_data):
    categorical_column_name = "categoricalColumn"
    base_data[categorical_column_name] = ["ENG1", "ENG1", "ENG2", "ENG2", "ENG1"]

    visualization = c3.GenAiVisualizationBase.forPandas(df=base_data)

    # Returns a line chart
    assert visualization.visualizationConfiguration.get("component").get("groupBy") == categorical_column_name


def test_one_row_data():
    df = pd.DataFrame({"numLines": [100], "timestamp": ["2019-01-01"]})
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Returns a GenAiVisualizationGrid with only one row
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultGrid>"
    assert len(visualization_config.get("component").get("data")) == 1


def test_data_with_one_numerical_and_one_string_column():
    df = pd.DataFrame({"numLines": [100, 50, 250, 49, 500], "stringColumn": ["A", "B", "C", "D", "E"]})
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a bar char visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultBarChart>"
    assert len(visualization_config.get("component").get("data")) == 5
    assert visualization_config.get("component").get("xAxis") == "stringColumn"
    assert visualization_config.get("component").get("yAxes") == ["numLines"]
    assert visualization.xAxis == "stringColumn"
    assert visualization.yAxes == ["numLines"]


def test_data_with_two_numerical_columns():
    df = pd.DataFrame({"numLines": [100, 50, 250, 49, 500], "numLines2": [100, 50, 250, 49, 500]})
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a scatter plot visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultScatterPlot>"
    assert len(visualization_config.get("component").get("data")) == 5
    assert visualization_config.get("component").get("xAxis") == "numLines"
    assert visualization_config.get("component").get("yAxes") == ["numLines2"]
    assert visualization.xAxis == "numLines"
    assert visualization.yAxes == ["numLines2"]


def test_data_with_three_numerical_columns_and_a_string_column():
    df = pd.DataFrame(
        {
            "numLines": [100, 50, 250, 49, 500],
            "numLines2": [100, 50, 250, 49, 500],
            "numLines3": [100, 50, 250, 49, 500],
            "stringColumn": ["A", "B", "C", "D", "E"],
        }
    )
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a scatter plot visualization with size and groupings
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultScatterPlot>"
    assert len(visualization_config.get("component").get("data")) == 5
    assert visualization_config.get("component").get("xAxis") == "numLines"
    assert visualization_config.get("component").get("yAxes") == ["numLines2"]
    assert visualization_config.get("component").get("bubbleSizeBy") == "numLines3"
    assert visualization_config.get("component").get("groupBy") == "stringColumn"
    assert visualization.xAxis == "numLines"
    assert visualization.yAxes == ["numLines2"]
    assert visualization.bubbleSizeBy == "numLines3"
    assert visualization.groupBy == "stringColumn"


def test_data_with_datetime_column_and_numeric_column():
    df = pd.DataFrame(
        {
            "timestamp": ["2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-05"],
            "numLines": [100, 50, 250, 49, 500],
        }
    )
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a line chart visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultLineChart>"
    assert len(visualization_config.get("component").get("data")) == 5
    assert visualization_config.get("component").get("xAxis") == "timestamp"
    assert visualization_config.get("component").get("yAxes") == ["numLines"]
    assert visualization.xAxis == "timestamp"
    assert visualization.yAxes == ["numLines"]


def test_line_chart_groups_by_first_str_col():
    df = pd.DataFrame(
        {
            "timestamp": ["2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-05"],
            "numLines": [100, 50, 250, 49, 500],
            "identifier": ["A", "B", "A", "B", "A"],
            "category": ["X", "Y", "X", "Y", "X"],
        }
    )
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a line chart visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultLineChart>"
    assert len(visualization_config.get("component").get("data")) == 5
    assert visualization_config.get("component").get("xAxis") == "timestamp"
    assert visualization_config.get("component").get("yAxes") == ["numLines"]
    assert visualization.xAxis == "timestamp"
    assert visualization.yAxes == ["numLines"]
    assert visualization.groupBy == "identifier"


def test_line_chart_viz_spec_adds_order_if_empty():
    df = pd.DataFrame(
        {
            "timestamp": ["2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-05"],
            "numLines": [100, 50, 250, 49, 500],
        }
    )

    spec = c3.EvalSpec.make()
    structuredQuerySpec = c3.Genai.StructuredQuery.Spec.make({"sourceType": c3.EvalSpec, "spec": spec})
    visualization = c3.GenAiVisualizationBase.forPandas(df=df, structuredQuerySpec=structuredQuerySpec)
    visualization_config = visualization.visualizationConfiguration

    # Generates a line chart visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultLineChart>"
    assert visualization_config.get("component").get("xAxis") == "timestamp"
    assert visualization.xAxis == "timestamp"
    assert visualization_config.get("component").get("evalSpec").get("order") == "ascending(timestamp)"


def test_line_chart_viz_spec_does_not_modify_order_if_nonempty():
    df = pd.DataFrame(
        {
            "timestamp": ["2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-05"],
            "numLines": [100, 50, 250, 49, 500],
        }
    )

    spec = c3.EvalSpec.make({"order": "descending(timestamp)"})
    structuredQuerySpec = c3.Genai.StructuredQuery.Spec.make({"sourceType": c3.EvalSpec, "spec": spec})
    visualization = c3.GenAiVisualizationBase.forPandas(df=df, structuredQuerySpec=structuredQuerySpec)
    visualization_config = visualization.visualizationConfiguration

    # Generates a line chart visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultLineChart>"
    assert visualization_config.get("component").get("xAxis") == "timestamp"
    assert visualization.xAxis == "timestamp"
    assert visualization_config.get("component").get("evalSpec").get("order") == "descending(timestamp)"


def test_data_with_one_longitude_and_one_latitude_column():
    data = {
        "country": ["France", "USA"],
        "city": ["Paris", "Denver"],
        "state": ["Ile-de-France", "Colorado"],
        "latitude": [48.8566, 39.7392],
        "longitude": [2.3522, -104.9903],
    }
    df = pd.DataFrame(data)
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a map visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultMap>"
    assert len(visualization_config.get("component").get("data")) == 2
    assert visualization_config.get("component").get("longitude") == "longitude"
    assert visualization_config.get("component").get("latitude") == "latitude"
    assert visualization_config.get("component").get("tooltipConfig").get("tooltipHeaderField") == "country"
    assert visualization_config.get("component").get("tooltipConfig").get("tooltipAdditionalFields") == [
        "city",
        "state",
    ]
    assert visualization.longitude == "longitude"
    assert visualization.latitude == "latitude"


def test_data_with_one_longitude_and_one_latitude_column_one_row():
    data = {
        "country": ["France"],
        "city": ["Paris"],
        "state": ["Ile-de-France"],
        "latitude": [48.8566],
        "longitude": [2.3522],
    }
    df = pd.DataFrame(data)
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a map visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultMap>"
    assert len(visualization_config.get("component").get("data")) == 1
    assert visualization_config.get("component").get("longitude") == "longitude"
    assert visualization_config.get("component").get("latitude") == "latitude"
    assert visualization_config.get("component").get("tooltipConfig").get("tooltipHeaderField") == "country"
    assert visualization_config.get("component").get("tooltipConfig").get("tooltipAdditionalFields") == [
        "city",
        "state",
    ]
    assert visualization.longitude == "longitude"
    assert visualization.latitude == "latitude"


def test_data_with_lots_of_string_and_numerical_columns():
    df = pd.DataFrame(
        {
            "stringColumn1": ["A", "B", "C", "D", "E"],
            "stringColumn2": ["F", "G", "H", "I", "J"],
            "stringColumn3": ["K", "L", "M", "N", "O"],
            "stringColumn4": ["P", "Q", "R", "S", "T"],
            "stringColumn5": ["U", "V", "W", "X", "Y"],
            "numLines": [100, 50, 250, 49, 500],
        }
    )
    visualization = c3.GenAiVisualizationBase.forPandas(df=df)
    visualization_config = visualization.visualizationConfiguration

    # Generates a grid visualization
    assert visualization_config.get("type") == "UiSdlConnected<GenAiUiSearchResultGrid>"
    assert len(visualization_config.get("component").get("data")) == 5
