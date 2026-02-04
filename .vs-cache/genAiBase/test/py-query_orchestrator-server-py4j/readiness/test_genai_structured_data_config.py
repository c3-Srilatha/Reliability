# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import copy
import time
import pytest

FILE_NAME = "test_genai_structured_data_config"


def _get_config():
    return c3.Genai.StructuredData.Config.inst().getConfig()


def _get_white_listed_data_model():
    return _get_config().whiteListedDataModel


@pytest.fixture(scope="module", autouse=True)
def restore_config():
    original_config = copy.copy(_get_config())
    yield
    original_config.setConfig()


@pytest.fixture(scope="module", autouse=True)
def entity_instance():
    non_entity = c3.Genai.TestNonEntityType(numericValue=2, stringValue="test")
    entity = c3.Genai.TestEntityType(
        id="test_id",
        value=3,
        nonEntityField=non_entity,
        primitiveCollectionField=["StringInCollection"],
        fkeyCollection=[{"id": "test_id"}],
        referredBy="test_id",
    ).create(spec=c3.UpsertSpec(returnInclude="this"))
    c3.Genai.TestEntityType.refreshCalcFields()
    yield entity
    entity.remove()


def _test_white_listed_data_model(fields_or_metrics):
    key = fields_or_metrics
    if fields_or_metrics == "fields":
        white_listed_from_func = c3.Genai.StructuredData.Config.whiteListedFields()
    else:
        white_listed_from_func = c3.Genai.StructuredData.Config.whiteListedMetrics()

    white_listed_dm = _get_white_listed_data_model()
    for type_name, type_data in white_listed_dm.items():
        if key in type_data:
            assert white_listed_from_func[type_name] == type_data[key]
        else:
            assert type_name not in white_listed_from_func


def test_white_listed_fields():
    _test_white_listed_data_model("fields")


def test_white_listed_metrics():
    _test_white_listed_data_model("metrics")


# Assertions of graph contents are intentionally somewhat loose because the graph is generated and consumed internally
# by the tools, and there is some logic to omit/include fields based on what eval tool supports


def _check_graph(graph, white_listed_data_model):
    assert len(white_listed_data_model) == len(graph.nodes)
    for type_name in white_listed_data_model:
        assert type_name in graph.nodes
        graph_node = graph.nodes[type_name]
        assert "doc" in graph_node


def test_make_graph_data_model():
    start = time.perf_counter()
    graph = c3.Genai.StructuredData.Config.makeDataModelGraph()
    end = time.perf_counter()
    _check_graph(graph, _get_white_listed_data_model())
    assert end - start < 10, "Initial graph creation should take less than 10 seconds"


def test_graph_data_model_validation():
    # Genai.Aircraft.location is a reference to the Genai.Airport type, which should be included in the white list.
    white_listed_data_model = {"Genai.Aircraft": {"fields": ["id", "location", "status"]}, "Genai.AircraftStatus": {}}
    make_graph_data_model = c3.Genai.PyUtil.importResourceFile(
        "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/make_graph_data_model.py", ["make_graph_data_model"]
    )
    with pytest.raises(
        ValueError,
        match="The 'white_listed_data_model' argument should include types "
        "{'Genai.Airport'} because they are referenced by {'Genai.Aircraft.location'}.",
    ):
        make_graph_data_model(c3, white_listed_data_model=white_listed_data_model)


def test_sample_values(entity_instance):
    # 1. Create graph for small white list
    make_graph_data_model = c3.Genai.PyUtil.importResourceFile(
        "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/make_graph_data_model.py", ["make_graph_data_model"]
    )

    white_listed_data_model = {
        "Genai.TestEntityType": {
            "fields": [
                "value",
                "storedCalcField",
                "readCalcField",
                "primitiveCollectionField",
                "nonEntityField",
                "referredBy",
                "fkeyCollection",
            ]
        },
        "Genai.TestNonEntityType": {"fields": ["numericValue", "stringValue"]},
    }

    _, graph = make_graph_data_model(
        c3, white_listed_data_model=white_listed_data_model, include_collection_fields=True
    )

    # 2. Assert returned values on entity type are properly fetched:
    expected_fields = [
        "value",
        "storedCalcField",
        "readCalcField",
        "primitiveCollectionField",
        "referredBy",
        "fkeyCollection",
    ]
    expected_value = ["3", "true", "true", "StringInCollection", "test_id", "test_id"]
    example_values = graph.nodes["Genai.TestEntityType"]["example_field_values"]
    for i, f in enumerate(expected_fields):
        actual_value = example_values[f]
        assert len(actual_value) >= 1, f"Returned value for Genai.TestEntityType.{f} should not be empty."
        assert (
            actual_value[0] == expected_value[i]
        ), f"Returned value for Genai.TestEntityType.{f} should be {expected_value[i]} but is {actual_value[0]}."

    # 3. Assert returned values on non-entity type are properly fetched:
    expected_values = [entity_instance.nonEntityField.numericValue, entity_instance.nonEntityField.stringValue]
    actual_values = [
        int(graph.nodes["Genai.TestNonEntityType"]["example_field_values"]["numericValue"][0]),
        graph.nodes["Genai.TestNonEntityType"]["example_field_values"]["stringValue"][0],
    ]
    if actual_values != expected_values:
        raise ValueError(
            f"Returned values for Genai.TestNonEntityType should be {expected_values} but are {actual_values}."
        )
