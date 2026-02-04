# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long,redefined-outer-name,unused-argument,duplicate-code,global-statement

from datetime import datetime
import copy
import pytest

FILE_NAME = "test_data_model_graph"

c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")


@pytest.fixture
def remove_and_restore_default_graph():
    default_graph = c3.Genai.StructuredData.DataModelGraph.fetch(
        filter=f"name == 'default'", limit=1, include="this"
    ).first()
    if default_graph:
        default_graph.remove()

    yield

    from_test = c3.Genai.StructuredData.DataModelGraph.fetch(
        filter=f"name == 'default'", limit=1, include="this"
    ).first()
    if from_test:
        from_test.remove()

    if default_graph:
        default_graph.withoutField("version").merge()


@pytest.fixture(scope="module")
def whitelist():
    yield {
        "Genai.Aircraft": {
            "fields": [
                "id",
                "riskScore",
                "sensors",
                "components",
                "cases",
                "latestAlert",
            ],
        },
        "Genai.AircraftComponent": {"fields": ["id", "name", "code"]},
        "Genai.AircraftComponentCode": {"fields": ["id", "name"]},
        "Genai.AircraftComponentAlert": {"fields": ["id"]},
        "Genai.AircraftComponentCase": {"fields": ["id"]},
        "Genai.AircraftMeasurementSeries": {"fields": []},
    }


def _update_whitelist(base_whitelist, updates):
    whitelist = copy.deepcopy(base_whitelist)
    for key, changes in updates.items():
        if key not in whitelist:
            whitelist[key] = {}
        for field_type, values in changes.items():
            if field_type in whitelist[key]:
                whitelist[key][field_type].extend(values)
            else:
                whitelist[key][field_type] = values
    return whitelist


@pytest.fixture(scope="module")
def multiple_whitelist(whitelist):
    update_whitelist_model_1 = {"Genai.Aircraft": {"metrics": ["AverageSensorValue", "DaysInYear"]}}

    update_whitelist_model_2 = {
        "Genai.Aircraft": {"fields": ["newField1"]},
        "Genai.AircraftComponent": {"fields": ["newField2"]},
        "Genai.AircraftMeasurementSeries": {"fields": ["measurement"], "metrics": ["AverageSensorValue", "DaysInYear"]},
    }

    update_whitelist_model_3 = {
        "Genai.Aircraft": {"fields": ["newField3"]},
        "Genai.AircraftComponent": {"fields": ["newField4"]},
        "Genai.AircraftComponentCode": {"fields": ["description"]},
        "Genai.AircraftComponentAlert": {"fields": ["alertType", "severity"]},
        "Genai.AircraftComponentCase": {"fields": ["caseType", "status"]},
        "Genai.AircraftMeasurementSeries": {"fields": ["timestamp"]},
    }

    whitelist_model_1 = _update_whitelist(whitelist, update_whitelist_model_1)
    whitelist_model_2 = _update_whitelist(whitelist, update_whitelist_model_2)
    whitelist_model_3 = _update_whitelist(whitelist, update_whitelist_model_3)

    yield whitelist_model_1, whitelist_model_2, whitelist_model_3


@pytest.fixture(scope="function")
def multiple_data_model_graphs_list(multiple_whitelist):
    from datetime import datetime

    override_docs = [
        {
            "Genai.AircraftComponentCode": {
                "doc": """Genai.Aircraft_doc_1""",
                "fields": {
                    "id": """id_1""",
                    "name": """name_1""",
                },
            },
            "Genai.AircraftComponentCase": {
                "doc": """Genai.Aircraft_doc_2""",
                "fields": {"id": """id_2"""},
            },
        },
        {
            "Genai.AircraftComponentCode": {
                "doc": """Genai.Aircraft_doc_3""",
                "fields": {
                    "id": """id_3""",
                    "name": """name_3""",
                },
            },
            "Genai.AircraftComponentCase": {
                "doc": """Genai.Aircraft_doc_4""",
                "fields": {"id": """id_4"""},
            },
        },
        {
            "Genai.AircraftComponentCode": {
                "doc": """Genai.Aircraft_doc_5""",
                "fields": {
                    "id": """id_5""",
                    "name": """name_5""",
                },
            },
            "Genai.AircraftComponentCase": {
                "doc": """Genai.Aircraft_doc_5""",
                "fields": {"id": """id_5"""},
            },
        },
    ]

    data_model_graphs_list = []
    for whitelist_data, override_doc_data in zip(multiple_whitelist, override_docs):
        data_model_graphs_list.append(
            c3.Genai.StructuredData.DataModelGraph.make(
                {
                    "name": str(hash(datetime.now())),
                    "whitelistedDataModel": whitelist_data,
                    "includeCollectionFields": True,
                    "overrideDocumentation": override_doc_data,
                }
            )
            .upsert()
            .get()
        )

    yield data_model_graphs_list

    c3.Genai.StructuredData.DataModelGraph.removeBatch(data_model_graphs_list)


def test_merge_multiple_data_model_graphs(multiple_data_model_graphs_list):
    combined_data_model_graph = c3.Genai.StructuredData.DataModelGraph.combineDataModelGraphs(
        dataModelGraphs=multiple_data_model_graphs_list, mergedDataModelName="merged_data_model"
    )
    assert combined_data_model_graph.name == "merged_data_model"
    merged_white_listed_data_model = combined_data_model_graph.whitelistedDataModel
    merged_override_documentation = combined_data_model_graph.overrideDocumentation

    def assert_dicts_equal_ignore_order(merged_data_model, expected_data_model):
        assert (
            merged_data_model.keys() == expected_data_model.keys()
        ), f"Keys mismatch: {merged_data_model.keys()} != {expected_data_model.keys()}"
        for key in merged_data_model:
            if isinstance(merged_data_model[key], list) and isinstance(expected_data_model[key], list):
                assert sorted(merged_data_model[key]) == sorted(
                    expected_data_model[key]
                ), f"Values mismatch for key '{key}': {merged_data_model[key]} != {expected_data_model[key]}"
            elif isinstance(merged_data_model[key], dict) and isinstance(expected_data_model[key], dict):
                assert_dicts_equal_ignore_order(merged_data_model[key], expected_data_model[key])
            else:
                assert (
                    merged_data_model[key] == expected_data_model[key]
                ), f"Values mismatch for key '{key}': {merged_data_model[key]} != {expected_data_model[key]}"

    expected_white_listed_data_model = {
        "Genai.Aircraft": {
            "fields": ["id", "riskScore", "sensors", "components", "cases", "latestAlert", "newField1", "newField3"],
            "metrics": ["AverageSensorValue", "DaysInYear"],
        },
        "Genai.AircraftComponent": {"fields": ["id", "name", "code", "newField4", "newField2"]},
        "Genai.AircraftComponentCode": {"fields": ["id", "name", "description"]},
        "Genai.AircraftComponentAlert": {"fields": ["id", "alertType", "severity"]},
        "Genai.AircraftComponentCase": {"fields": ["id", "caseType", "status"]},
        "Genai.AircraftMeasurementSeries": {
            "fields": ["measurement", "timestamp"],
            "metrics": ["AverageSensorValue", "DaysInYear"],
        },
    }

    expected_override_documentation = {
        "Genai.AircraftComponentCode": {
            "doc": """Genai.Aircraft_doc_5""",
            "fields": {
                "id": """id_5""",
                "name": """name_5""",
            },
        },
        "Genai.AircraftComponentCase": {
            "doc": """Genai.Aircraft_doc_5""",
            "fields": {"id": """id_5"""},
        },
    }

    assert_dicts_equal_ignore_order(merged_white_listed_data_model, expected_white_listed_data_model)
    assert_dicts_equal_ignore_order(merged_override_documentation, expected_override_documentation)


@pytest.fixture(scope="function")
def data_model_graphs(whitelist):
    override_doc = {
        "Genai.AircraftComponentCode": {
            "doc": """Test doc for Genai.AircraftComponentCode.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted.""",
                "name": """Test doc for Genai.AircraftComponentCode.name.""",
            },
        },
        "Genai.AircraftComponentCase": {
            "doc": """Test doc for Genai.AircraftComponentCase.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted."""
            },
        },
        "Genai.AircraftComponent": {
            "doc": """Test doc for Genai.AircraftComponent.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted.""",
                "name": """Test doc for Genai.AircraftComponent.name.""",
                "code": """Test doc for Genai.AircraftComponent.code.""",
            },
        },
        "Genai.AircraftComponentAlert": {
            "doc": """Test doc for Genai.AircraftComponentAlert.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted."""
            },
        },
        "Genai.Aircraft": {
            "doc": """Test doc for Genai.Aircraft.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted.""",
                "riskScore": """Test doc for Genai.Aircraft.riskScore.""",
                "sensors": """Test doc for Genai.Aircraft.sensors.""",
                "components": """Test doc for Genai.Aircraft.components.""",
                "cases": """Test doc for Genai.Aircraft.cases.""",
                "latestAlert": """Test doc for Genai.Aircraft.latestAlert.""",
            },
        },
        "Genai.AircraftMeasurementSeries": {"doc": """Test doc for Genai.AircraftMeasurementSeries.""", "fields": {}},
    }
    data_model_graph_with_collections = (
        c3.Genai.StructuredData.DataModelGraph.make(
            {
                "name": str(hash(datetime.now())),
                "whitelistedDataModel": whitelist,
                "includeCollectionFields": True,
                "overrideDocumentation": override_doc,
            }
        )
        .upsert()
        .get()
    )
    data_model_graph_without_collections = (
        c3.Genai.StructuredData.DataModelGraph.make(
            {
                "name": str(hash(datetime.now())),
                "whitelistedDataModel": whitelist,
                "includeCollectionFields": False,
                "overrideDocumentation": override_doc,
            }
        )
        .upsert()
        .get()
    )
    yield data_model_graph_with_collections, data_model_graph_without_collections

    c3.Genai.StructuredData.DataModelGraph.removeBatch(
        [data_model_graph_with_collections, data_model_graph_without_collections]
    )


@pytest.fixture(scope="function")
def data_model_graph_with_examples(whitelist):
    graph = (
        c3.Genai.StructuredData.DataModelGraph.make(
            {
                "name": str(hash(datetime.now())),
                "whitelistedDataModel": whitelist,
                "includeCollectionFields": True,
                "numExampleValues": 2,
            }
        )
        .upsert()
        .get()
    )
    yield graph
    graph.remove()


@pytest.fixture(scope="function")
def data_model_graphs_with_override_documentation(data_model_graphs):
    data_model_graph_with_collections, data_model_graph_without_collections = data_model_graphs
    override_doc_on_data_model_graph = {
        "Genai.AircraftComponentCode": {
            "doc": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponentCode.""",
            "fields": {
                "id": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponentCode.id.""",
                "name": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponentCode.name.""",
            },
        },
        "Genai.AircraftComponent": {
            "doc": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.""",
            "fields": {
                "id": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.id.""",
                "name": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.name.""",
                "code": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.code.""",
            },
        },
        "Genai.Aircraft": {
            "doc": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.""",
            "fields": {
                "id": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.id.""",
                "riskScore": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.riskScore.""",
                "sensors": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.sensors.""",
                "cases": """Test doc for Genai.Aircraft.cases.""",
                "components": """Test doc for Genai.Aircraft.components.""",
                "latestAlert": """Test doc for Genai.Aircraft.latestAlert.""",
            },
            "metrics": {
                "AverageSensorValue": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for metric AverageSensorValue in type Genai.Aircraft.""",
                "DaysInYear": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for metric DaysInYear in type Genai.Aircraft.""",
            },
        },
        "Genai.AircraftMeasurementSeries": {
            "doc": """Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftMeasurementSeries.""",
            "fields": {},
        },
        "Genai.AircraftComponentAlert": {
            "doc": """Test doc for Genai.AircraftComponentAlert.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted."""
            },
        },
        "Genai.AircraftComponentCase": {
            "doc": """Test doc for Genai.AircraftComponentCase.""",
            "fields": {
                "id": """Unique id that can either be manually specified or automatically generated during object creation.  Can't be
changed once instance is persisted."""
            },
        },
    }
    data_model_graph_with_collections = (
        data_model_graph_with_collections.withOverrideDocumentation(override_doc_on_data_model_graph).upsert().get()
    )
    data_model_graph_without_collections = (
        data_model_graph_without_collections.withOverrideDocumentation(override_doc_on_data_model_graph).upsert().get()
    )

    yield data_model_graph_with_collections, data_model_graph_without_collections

    data_model_graph_with_collections = data_model_graph_with_collections.withOverrideDocumentation(None).upsert()
    data_model_graph_without_collections = data_model_graph_without_collections.withOverrideDocumentation(None).upsert()


def test_hashes(data_model_graphs):
    data_model_graph_with_collections, data_model_graph_without_collections = data_model_graphs
    hash_with_collections = data_model_graph_with_collections.get().graphHash
    hash_without_collections = data_model_graph_without_collections.get().graphHash
    assert len(hash_with_collections) > 0
    assert len(hash_without_collections) > 0
    assert hash_with_collections != hash_without_collections

    data_model_graph_with_collections = data_model_graph_with_collections.upsert().get()
    assert (
        data_model_graph_with_collections.graphHash == hash_with_collections
    ), "Upserting without change should not change the hash"

    data_model_graph_with_collections = data_model_graph_with_collections.withFieldsToIgnore(["sensors"]).upsert().get()
    assert (
        data_model_graph_with_collections.graphHash != hash_with_collections
    ), "Upserting with change should change the hash"


def test_before_remove(data_model_graphs):
    file1 = data_model_graphs[0].get().graphFile
    file2 = data_model_graphs[1].get().graphFile
    c3.Genai.StructuredData.DataModelGraph.removeBatch(data_model_graphs)
    assert not file1.exists()
    assert not file2.exists()


def test_fields_in_type(data_model_graphs):
    (
        data_model_graph_with_collections,
        data_model_graph_without_collections,
    ) = (
        data_model_graphs[0].toNative(),
        data_model_graphs[1].toNative(),
    )

    target_fields_with_collections = {
        "latestAlert",
        "cases",
        "components",
        "id",
        "riskScore",
        "sensors",
    }
    fields_in_collections_graph = set(
        data_model_graph_with_collections.nodes["Genai.Aircraft"]["projections_on_type_meta"].keys()
    )

    assert (
        fields_in_collections_graph == target_fields_with_collections
    ), f"Expected {fields_in_collections_graph=} to be {target_fields_with_collections=}."

    target_fields_without_collections = {"id", "riskScore", "latestAlert"}
    fields_in_non_collections_graph = set(
        data_model_graph_without_collections.nodes["Genai.Aircraft"]["projections_on_type_meta"].keys()
    )

    assert (
        fields_in_non_collections_graph == target_fields_without_collections
    ), f"Expected {fields_in_non_collections_graph=} to be {target_fields_without_collections=}."


def test_reachable_fields(data_model_graphs):
    data_model_graph_with_collections, data_model_graph_without_collections = data_model_graphs

    # Test with collections enabled.
    types_reached, projections_reached = data_model_graph_with_collections.findReachableFields("Genai.Aircraft", 3)
    types_reached = set(types_reached)
    projections_reached = set(projections_reached)
    target_reachable_types_including_collections = {
        "Genai.Aircraft",
        "Genai.AircraftComponent",
        "Genai.AircraftComponentAlert",
        "Genai.AircraftComponentCase",
        "Genai.AircraftComponentCode",
        "Genai.AircraftMeasurementSeries",
    }
    target_reachable_projections = {
        "Genai.Aircraft:components",
        "Genai.Aircraft:cases",
        "Genai.Aircraft:latestAlert",
        "Genai.Aircraft:id",
        "Genai.Aircraft:riskScore",
        "Genai.Aircraft:sensors",
        "Genai.AircraftComponent:code",
        "Genai.AircraftComponent:name",
        "Genai.AircraftComponentCode:name",
    }

    assert (
        types_reached == target_reachable_types_including_collections
    ), f"Expected {types_reached=} to be {target_reachable_types_including_collections}, where collections are enabled."
    assert (
        projections_reached == target_reachable_projections
    ), f"Expected {projections_reached=} to be {target_reachable_types_including_collections}, where collections are enabled."

    # Test with collections disabled.
    types_reached, projections_reached = data_model_graph_without_collections.findReachableFields("Genai.Aircraft", 3)

    target_reachable_types_no_collections = {"Genai.Aircraft", "Genai.AircraftComponentAlert"}
    target_reachable_projections_no_collections = {
        "Genai.Aircraft:riskScore",
        "Genai.Aircraft:id",
        "Genai.Aircraft:latestAlert",
    }

    assert (
        types_reached == target_reachable_types_no_collections
    ), f"Expected {types_reached=} to be {target_reachable_types_no_collections}, where collections are not enabled."
    assert (
        projections_reached == target_reachable_projections_no_collections
    ), f"Expected {projections_reached=} to be {target_reachable_projections_no_collections}, where collections are not enabled."


def test_references_on_type(data_model_graphs):
    data_model_graph_with_collections = data_model_graphs[0].toNative()
    data_model_graph_without_collections = data_model_graphs[1].toNative()

    # Test when collections are enabled
    target_references_with_collections = {
        "Genai.AircraftMeasurementSeries": "sensors",
        "Genai.AircraftComponent": "components",
        "Genai.AircraftComponentAlert": "latestAlert",
        "Genai.AircraftComponentCase": "cases",
    }
    references_with_collections = data_model_graph_with_collections.nodes["Genai.Aircraft"]["references_on_type"]
    assert (
        references_with_collections == target_references_with_collections
    ), f"Expected {target_references_with_collections=} to be {references_with_collections=}."

    # Test when collections are not enabled
    target_references_without_collections = {"Genai.AircraftComponentAlert": "latestAlert"}
    references_without_collections = data_model_graph_without_collections.nodes["Genai.Aircraft"]["references_on_type"]
    assert (
        target_references_without_collections == references_without_collections
    ), f"Expected {target_references_without_collections=} to be {references_without_collections=}."


EXAMPLES_TEST_BUILD_DOCUMENTATION = [
    (
        False,
        0,
        "# Test doc for Genai.Aircraft.\ntype Genai.Aircraft {\n\t# Test doc for Genai.Aircraft.cases.\n\tcases: [Genai.AircraftComponentCase]\n\t# Test doc for Genai.Aircraft.components.\n\tcomponents: [Genai.AircraftComponent]\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n\t# Test doc for Genai.Aircraft.latestAlert.\n\tlatestAlert: Genai.AircraftComponentAlert\n\t# Test doc for Genai.Aircraft.riskScore.\n\triskScore: double\n\t# Test doc for Genai.Aircraft.sensors.\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\n# Test doc for Genai.AircraftComponent.\ntype Genai.AircraftComponent {\n\t# Test doc for Genai.AircraftComponent.code.\n\tcode: Genai.AircraftComponentCode\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n\t# Test doc for Genai.AircraftComponent.name.\n\tname: string\n}\n# Test doc for Genai.AircraftComponentAlert.\ntype Genai.AircraftComponentAlert {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n}\n# Test doc for Genai.AircraftComponentCase.\ntype Genai.AircraftComponentCase {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n}\n# Test doc for Genai.AircraftComponentCode.\ntype Genai.AircraftComponentCode {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n\t# Test doc for Genai.AircraftComponentCode.name.\n\tname: string\n}\n# Test doc for Genai.AircraftMeasurementSeries.\ntype Genai.AircraftMeasurementSeries {\n\n}",
    ),
    (
        True,
        0,
        "type Genai.Aircraft {\n\tcases: [Genai.AircraftComponentCase]\n\tcomponents: [Genai.AircraftComponent]\n\tid: !string\n\tlatestAlert: Genai.AircraftComponentAlert\n\triskScore: double\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\ntype Genai.AircraftComponent {\n\tcode: Genai.AircraftComponentCode\n\tid: !string\n\tname: string\n}\ntype Genai.AircraftComponentAlert {\n\tid: !string\n}\ntype Genai.AircraftComponentCase {\n\tid: !string\n}\ntype Genai.AircraftComponentCode {\n\tid: !string\n\tname: string\n}\ntype Genai.AircraftMeasurementSeries {\n\n}",
    ),
    (
        False,
        3,
        "# Test doc for Genai.Aircraft.\ntype Genai.Aircraft {\n\t# Test doc for Genai.Aircraft.cases.\n\tcases: [Genai.AircraftComponentCase]\n\t# Test doc for Genai.Aircraft.components.\n\tcomponents: [Genai.AircraftComponent]\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string # Examples: 'X00','X01','X02'\n\t# Test doc for Genai.Aircraft.latestAlert.\n\tlatestAlert: Genai.AircraftComponentAlert\n\t# Test doc for Genai.Aircraft.riskScore.\n\triskScore: double\n\t# Test doc for Genai.Aircraft.sensors.\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\n# Test doc for Genai.AircraftComponent.\ntype Genai.AircraftComponent {\n\t# Test doc for Genai.AircraftComponent.code.\n\tcode: Genai.AircraftComponentCode\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string # Examples: 'X00_BB764','X01_AA500_1','X01_AA500_2'\n\t# Test doc for Genai.AircraftComponent.name.\n\tname: string # Examples: 'AA500','AA540','AA856'\n}\n# Test doc for Genai.AircraftComponentAlert.\ntype Genai.AircraftComponentAlert {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string # Examples: 'readinessAssetAlert001','readinessAssetAlert002','readinessAssetAlert003'\n}\n# Test doc for Genai.AircraftComponentCase.\ntype Genai.AircraftComponentCase {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string # Examples: 'Case-0006','Case-0009','Case-0013'\n}\n# Test doc for Genai.AircraftComponentCode.\ntype Genai.AircraftComponentCode {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string # Examples: 'AA000','AA100','AA140'\n\t# Test doc for Genai.AircraftComponentCode.name.\n\tname: string # Examples: 'AA000','AA100','AA140'\n}\n# Test doc for Genai.AircraftMeasurementSeries.\ntype Genai.AircraftMeasurementSeries {\n\n}",
    ),
    (
        True,
        3,
        "type Genai.Aircraft {\n\tcases: [Genai.AircraftComponentCase]\n\tcomponents: [Genai.AircraftComponent]\n\tid: !string # Examples: 'X00','X01','X02'\n\tlatestAlert: Genai.AircraftComponentAlert\n\triskScore: double\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\ntype Genai.AircraftComponent {\n\tcode: Genai.AircraftComponentCode\n\tid: !string # Examples: 'X00_BB764','X01_AA500_1','X01_AA500_2'\n\tname: string # Examples: 'AA500','AA540','AA856'\n}\ntype Genai.AircraftComponentAlert {\n\tid: !string # Examples: 'readinessAssetAlert001','readinessAssetAlert002','readinessAssetAlert003'\n}\ntype Genai.AircraftComponentCase {\n\tid: !string # Examples: 'Case-0006','Case-0009','Case-0013'\n}\ntype Genai.AircraftComponentCode {\n\tid: !string # Examples: 'AA000','AA100','AA140'\n\tname: string # Examples: 'AA000','AA100','AA140'\n}\ntype Genai.AircraftMeasurementSeries {\n\n}",
    ),
]


@pytest.mark.parametrize("example", EXAMPLES_TEST_BUILD_DOCUMENTATION)
def test_build_documentation(data_model_graphs, example):
    exclude_documentation = example[0]
    n_example_string_values = example[1]
    target_doc = example[2]
    data_model_graph, _ = data_model_graphs
    documentation_built = data_model_graph.buildDataModelDocumentation(
        excludeDocumentation=exclude_documentation, nExampleStringValues=n_example_string_values
    )

    assert (
        documentation_built == target_doc
    ), f"Expected {documentation_built=} to be {target_doc=} for {exclude_documentation=} and {n_example_string_values=}."


EXAMPLES_TEST_BUILD_DOCUMENTATION_OVERRIDE_DOCS = [
    (
        False,
        "# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.\ntype Genai.Aircraft {\n\t# Test doc for Genai.Aircraft.cases.\n\tcases: [Genai.AircraftComponentCase]\n\t# Test doc for Genai.Aircraft.components.\n\tcomponents: [Genai.AircraftComponent]\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.id.\n\tid: !string\n\t# Test doc for Genai.Aircraft.latestAlert.\n\tlatestAlert: Genai.AircraftComponentAlert\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.riskScore.\n\triskScore: double\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.sensors.\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\n# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.\ntype Genai.AircraftComponent {\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.code.\n\tcode: Genai.AircraftComponentCode\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.id.\n\tid: !string\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponent.name.\n\tname: string\n}\n# Test doc for Genai.AircraftComponentAlert.\ntype Genai.AircraftComponentAlert {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n}\n# Test doc for Genai.AircraftComponentCase.\ntype Genai.AircraftComponentCase {\n\t# Unique id that can either be manually specified or automatically generated during object creation.  Can't be changed once instance is persisted.\n\tid: !string\n}\n# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponentCode.\ntype Genai.AircraftComponentCode {\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponentCode.id.\n\tid: !string\n\t# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftComponentCode.name.\n\tname: string\n}\n# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.AircraftMeasurementSeries.\ntype Genai.AircraftMeasurementSeries {\n\n}",
    ),
    (
        True,
        "type Genai.Aircraft {\n\tcases: [Genai.AircraftComponentCase]\n\tcomponents: [Genai.AircraftComponent]\n\tid: !string\n\tlatestAlert: Genai.AircraftComponentAlert\n\triskScore: double\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\ntype Genai.AircraftComponent {\n\tcode: Genai.AircraftComponentCode\n\tid: !string\n\tname: string\n}\ntype Genai.AircraftComponentAlert {\n\tid: !string\n}\ntype Genai.AircraftComponentCase {\n\tid: !string\n}\ntype Genai.AircraftComponentCode {\n\tid: !string\n\tname: string\n}\ntype Genai.AircraftMeasurementSeries {\n\n}",
    ),
]


@pytest.mark.parametrize("example", EXAMPLES_TEST_BUILD_DOCUMENTATION_OVERRIDE_DOCS)
def test_build_documentation_with_override_documentation(data_model_graphs_with_override_documentation, example):
    exclude_documentation = example[0]
    target_doc_override_on_data_model_graph_type = example[1]
    data_model_graph, _ = data_model_graphs_with_override_documentation

    documentation_built = data_model_graph.buildDataModelDocumentation(excludeDocumentation=exclude_documentation)
    assert (
        documentation_built == target_doc_override_on_data_model_graph_type
    ), f"Expected {documentation_built=} to be target_doc{target_doc_override_on_data_model_graph_type} for {exclude_documentation=}."


def test_for_name(data_model_graphs):
    name1 = data_model_graphs[0].get().name
    name2 = data_model_graphs[1].get().name

    assert c3.Genai.StructuredData.DataModelGraph.forName(name1).name == name1
    assert c3.Genai.StructuredData.DataModelGraph.forName(name2).name == name2


EXAMPLES_BUILD_DOC_WITH_METRICS = [
    (
        True,
        'type Genai.Aircraft {\n{"name": "AveragePressurePreviousMonth", "expression": "eval(\'AVG\', \'MONTH\', window(\'AVG\', PressureValue, -1, 1))"}\n{"name": "AverageSensorValue", "expression": "avg(avg(normalized.data.value))"}\n{"name": "DaysInYear", "expression": "timeComponent(\'YEAR\', start()) % 4 != 0 || (timeComponent(\'YEAR\', start()) % 100 == 0 && timeComponent(\'YEAR\', start()) % 400 != 0) ? 365 : 366"}\n}\n',
        'type Genai.Aircraft {\n{"name": "AveragePressurePreviousMonth", "expression": "eval(\'AVG\', \'MONTH\', window(\'AVG\', PressureValue, -1, 1))"}\n{"name": "AverageSensorValue", "expression": "avg(avg(normalized.data.value))"}\n{"name": "DaysInYear", "expression": "timeComponent(\'YEAR\', start()) % 4 != 0 || (timeComponent(\'YEAR\', start()) % 100 == 0 && timeComponent(\'YEAR\', start()) % 400 != 0) ? 365 : 366"}\n}\n',
    ),
    (
        False,
        '# An aircraft entity. Can be used to answer questions related to aircraft.\ntype Genai.Aircraft {\n{"name": "AveragePressurePreviousMonth", "expression": "eval(\'AVG\', \'MONTH\', window(\'AVG\', PressureValue, -1, 1))", "description": "Average pressure value on the aircraft in the past 1 month."}\n{"name": "AverageSensorValue", "expression": "avg(avg(normalized.data.value))", "description": "Average sensor value on the aircraft"}\n{"name": "DaysInYear", "expression": "timeComponent(\'YEAR\', start()) % 4 != 0 || (timeComponent(\'YEAR\', start()) % 100 == 0 && timeComponent(\'YEAR\', start()) % 400 != 0) ? 365 : 366"}\n}\n',
        '# Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for Genai.Aircraft.\ntype Genai.Aircraft {\n{"name": "AveragePressurePreviousMonth", "expression": "eval(\'AVG\', \'MONTH\', window(\'AVG\', PressureValue, -1, 1))", "description": "Average pressure value on the aircraft in the past 1 month."}\n{"name": "AverageSensorValue", "expression": "avg(avg(normalized.data.value))", "description": "Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for metric AverageSensorValue in type Genai.Aircraft."}\n{"name": "DaysInYear", "expression": "timeComponent(\'YEAR\', start()) % 4 != 0 || (timeComponent(\'YEAR\', start()) % 100 == 0 && timeComponent(\'YEAR\', start()) % 400 != 0) ? 365 : 366", "description": "Testing overrideDocumentation on Genai.StructuredData.DataModelGraph for metric DaysInYear in type Genai.Aircraft."}\n}\n',
    ),
]


@pytest.mark.parametrize("example", EXAMPLES_BUILD_DOC_WITH_METRICS)
def test_build_data_model_with_metrics_documentation(data_model_graphs, example):
    exclude_documentation = example[0]
    target_doc = example[1]
    metrics_by_type = {
        "Genai.Aircraft": [
            "DaysInYear",  # Compound metric without description
            "AveragePressurePreviousMonth",  # Compound metric with description
            "AverageSensorValue",  # Simple metric with description
        ]
    }

    _, data_model_graph_with_collections = data_model_graphs
    output_doc = data_model_graph_with_collections.buildDataModelWithMetricsDocFromJson(
        metricsByType=metrics_by_type, excludeDocumentation=exclude_documentation
    )
    assert output_doc == target_doc, f"Expected {output_doc=} to be {target_doc=} for {exclude_documentation=}."


@pytest.mark.parametrize("example", EXAMPLES_BUILD_DOC_WITH_METRICS)
def test_build_data_model_with_metrics_documentation_and_override_documentation(
    data_model_graphs_with_override_documentation, example
):
    exclude_documentation = example[0]
    target_doc_override_on_data_model_graph_type = example[2]
    metrics_by_type = {
        "Genai.Aircraft": [
            "DaysInYear",  # Compound metric without description
            "AveragePressurePreviousMonth",  # Compound metric wiht description
            "AverageSensorValue",  # Simple metric with description
        ]
    }

    _, data_model_graph_with_collections = data_model_graphs_with_override_documentation
    output_doc = data_model_graph_with_collections.buildDataModelWithMetricsDocFromJson(
        metricsByType=metrics_by_type,
        excludeDocumentation=exclude_documentation,
        overrideDocs=data_model_graph_with_collections.overrideDocumentation,
    )
    assert (
        output_doc == target_doc_override_on_data_model_graph_type
    ), f"Expected {output_doc=} to be target_doc={target_doc_override_on_data_model_graph_type} for {exclude_documentation=}."


def test_for_name_normal_names(data_model_graphs):
    for data_model_graph in data_model_graphs:
        # graphs that exist
        name = data_model_graph.name
        assert (
            c3.Genai.StructuredData.DataModelGraph.forName(name).id == data_model_graph.id
        ), f"Persisted graph with name {name} should have been retrieved"

    assert (
        c3.Genai.StructuredData.DataModelGraph.forName(FILE_NAME + "_fake_name") is None
    ), "Non-existent graph should not be retrieved"


def test_for_name_default(remove_and_restore_default_graph):
    default_graph = None

    default_graph = c3.Genai.StructuredData.DataModelGraph.forName("default")
    assert default_graph is not None
    assert default_graph.name == default_graph.id == "default"
    assert default_graph.get().id == "default"
    assert default_graph.numExampleValues == 0, "default value for type"

    default_graph = default_graph.get().withNumExampleValues(42).merge()
    assert (
        c3.Genai.StructuredData.DataModelGraph.forName("default").numExampleValues == 42
    ), f"forName with `default` should not always return new instance"


PREVIOUS_AIRCRAFT = None


@pytest.fixture(scope="function")
def remove_and_restore_aircraft():
    global PREVIOUS_AIRCRAFT
    assert PREVIOUS_AIRCRAFT is None, "Expected PREVIOUS_AIRCRAFT to be unset"
    new_aircraft_ids = [f"TEST_AIRCRAFT_{i}" for i in range(1, 10)]

    def update_aircraft():
        global PREVIOUS_AIRCRAFT
        PREVIOUS_AIRCRAFT = c3.Genai.Aircraft.fetch({"include": "this", "limit": -1}).objs
        c3.Genai.Aircraft.removeBatch(PREVIOUS_AIRCRAFT)
        c3.Genai.Aircraft.upsertBatch([{"id": id} for id in new_aircraft_ids])

    yield update_aircraft, new_aircraft_ids

    assert PREVIOUS_AIRCRAFT is not None, "Expected PREVIOUS_AIRCRAFT to be set"

    c3.Genai.Aircraft.upsertBatch(PREVIOUS_AIRCRAFT)
    c3.Genai.Aircraft.removeAll({"filter": c3.Filter.intersects("id", new_aircraft_ids)}, True)
    PREVIOUS_AIRCRAFT = None


@pytest.fixture(scope="function")
def eval_spy(ctx):
    spy = c3.TestApi.spyOn(ctx, "Genai.Aircraft", "eval").callThrough().register()
    call_count = spy.getActionMock().callCount()
    c3.Genai.Aircraft.eval({"projection": "id", "limit": 1})
    # sanity check
    assert spy.getActionMock().callCount() == call_count + 1, "Expected eval to be called once"
    yield spy
    spy.unregister()


def test_default_to_no_cached_example_values(data_model_graphs):
    for graph in data_model_graphs:
        assert graph.get().numExampleValues == 0, "Expected graph entity to be configured for 0 sample values"
        native_graph = graph.toNative()
        assert native_graph.graph["n_example_values"] == 0, "Expected native graph to be configured for 2 sample values"
        for type_name in native_graph.nodes:
            assert not native_graph.nodes[type_name].get(
                "example_field_values", {}
            ), f"Expected no sample values for {type_name}"


def _do_check_graph(graph, message_prefix, only_check_ids=True):
    assert graph.numExampleValues == 2, f"{message_prefix} Expected graph entity to be configured for 2 sample values"
    native_graph = graph.toNative()
    assert (
        native_graph.graph["n_example_values"] == 2
    ), f"{message_prefix} Expected native graph to be configured for 2 sample values"
    for type_name in native_graph.nodes:
        for field_name, values in native_graph.nodes[type_name]["example_field_values"].items():
            if only_check_ids and type_name == "Genai.Aircraft":
                if field_name == "id":
                    assert len(values) == 2, f"{message_prefix} Expected 2 sample values for {type_name}.{field_name}"
                else:
                    continue
            assert len(values) == 2, f"{message_prefix} Expected 2 sample values for {type_name}.{field_name}"

    cached_aircraft_ids = native_graph.nodes["Genai.Aircraft"]["example_field_values"]["id"]
    assert len(cached_aircraft_ids) == 2, f"{message_prefix} Expected 2 cached aircraft ids"
    return native_graph, cached_aircraft_ids


def test_cached_example_values(data_model_graph_with_examples, eval_spy, remove_and_restore_aircraft):
    graph = data_model_graph_with_examples

    native_graph, cached_aircraft_ids = _do_check_graph(graph, "1")

    call_count = eval_spy.getActionMock().callCount()

    docs = graph.buildDataModelDocumentation(excludeDocumentation=True, nExampleStringValues=2)
    assert [f"'{id}'" in docs for id in cached_aircraft_ids], "Expected cached aircraft ids to be in documentation"
    assert eval_spy.getActionMock().callCount() == call_count, "Expected eval not to be called nExampleStringValues=2"

    docs = graph.buildDataModelDocumentation(excludeDocumentation=True, nExampleStringValues=1)
    assert (
        sum(f"'{id}'" in docs for id in cached_aircraft_ids) == 1
    ), "Expected exactly one of cached aircraft ids to be in documentation"
    assert eval_spy.getActionMock().callCount() == call_count, "Expected eval not to be called nExampleStringValues=1"

    remove_and_restore_aircraft_func, new_aircraft_ids = remove_and_restore_aircraft
    remove_and_restore_aircraft_func()

    _, new_cached_aircraft_ids = _do_check_graph(graph, "2")
    assert new_cached_aircraft_ids == cached_aircraft_ids, "Entity and in memory graph should not be updated"

    # asking for more than cached number of values -> requires eval call
    call_count = eval_spy.getActionMock().callCount()
    docs = graph.buildDataModelDocumentation(excludeDocumentation=True, nExampleStringValues=5)
    assert eval_spy.getActionMock().callCount() > call_count, "Expected eval to be called nExampleStringValues=5"
    assert (
        sum(f"'{id}'" in docs for id in new_aircraft_ids) == 5
    ), "Expected 5 of new aircraft ids to be in documentation"

    assert (
        sum(f"'{id}'" in docs for id in cached_aircraft_ids) == 0
    ), "Expected none of the cached aircraft ids to be in documentation"

    _, new_cached_ids = _do_check_graph(graph, "3")
    assert new_cached_ids == cached_aircraft_ids, "Entity and in memory graph should not be updated"
    assert (
        native_graph.nodes["Genai.Aircraft"]["example_field_values"]["id"] == cached_aircraft_ids
    ), "In-memory graph should not be updated"


def test_update_values(data_model_graph_with_examples, remove_and_restore_aircraft):
    graph = data_model_graph_with_examples
    _, cached_aircraft_ids = _do_check_graph(graph, "1")

    remove_and_restore_aircraft_func, new_aircraft_ids = remove_and_restore_aircraft
    remove_and_restore_aircraft_func()

    _, new_cached_ids = _do_check_graph(graph, "2")
    assert new_cached_ids == cached_aircraft_ids, "Entity and in memory graph should not be updated"

    version = graph.version
    graph = graph.updateCachedValues()
    assert graph.version > version, "Expected version to be updated"
    _, new_cached_ids = _do_check_graph(graph, "2")
    assert new_cached_ids != cached_aircraft_ids, "Expected cached ids to be updated"
    assert all(id in new_aircraft_ids for id in new_cached_ids), "Expected new cached ids to be from new values"


@pytest.fixture(scope="function")
def graph_after_seed_upsert_with_user_modifications(whitelist):
    graph = c3.Genai.StructuredData.DataModelGraph.forName("default").get()
    graph = graph.withWhitelistedDataModel(whitelist).merge()

    # Simulate call to upsert seed data during app upgrade
    c3.Pkg.upsertAllSeed()

    yield graph.get()

    graph.get().withWhitelistedDataModel({}).merge()


def test_user_modifications_survive_app_upgrade(graph_after_seed_upsert_with_user_modifications):
    graph = graph_after_seed_upsert_with_user_modifications

    assert graph.whitelistedDataModel, "Whitelisted data model should not be empty"

    documentation = graph.buildDataModelDocumentation()
    assert documentation, "Data model documentation should be generated"
