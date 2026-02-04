# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import re
import pytest


c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

FieldOnType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FieldOnType"],
)
FilterHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/__init__.py",
    ["FilterHandler"],
)
EvalSpecHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/eval_spec_handler.py",
    ["EvalSpecHandler"],
)
SPECIAL_FIELDS_DOCS = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/statics.py",
    ["SPECIAL_FIELDS_DOCS"],
)


####################################################################
# Fixtures
####################################################################


@pytest.fixture(scope="module")
def field_on_types_dict(data_model_graph):
    # Field abstactions
    component_id = FieldOnType(
        target_type="Genai.AircraftComponentCode",
        field_name="id",
        graph=data_model_graph,
        source_type="Genai.AircraftComponent",
    )

    component_risk_score = FieldOnType(
        target_type="Genai.AircraftComponent",
        field_name="riskScore",
        graph=data_model_graph,
        source_type="Genai.AircraftComponent",
        applied_operations=["max"],
        ordering="ascending",
    )

    aircraft_id = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="id",
        graph=data_model_graph,
        source_type="Genai.AircraftComponent",
    )

    airport_city = FieldOnType(
        target_type="Genai.Airport",
        field_name="city",
        graph=data_model_graph,
        source_type="Genai.AircraftComponent",
    )

    count_aircraft_component = FieldOnType(
        target_type="Genai.AircraftComponent",
        field_name="count()",
        graph=data_model_graph,
        source_type="Genai.AircraftComponent",
    )

    yield {
        "component_id": component_id,
        "component_risk_score": component_risk_score,
        "aircraft_id": aircraft_id,
        "airport_city": airport_city,
        "count_aircraft_component": count_aircraft_component,
    }


@pytest.fixture(scope="module")
def filter_field_on_type(field_on_types_dict, data_model_graph):
    filter_field_on_type = FilterHandler(
        "aircraft.id=='X00'", field_on_types_dict["aircraft_id"].source_type, data_model_graph
    )
    yield filter_field_on_type


@pytest.fixture(scope="module")
def eval_spec_handler_dict(field_on_types_dict, filter_field_on_type):
    all_fields = field_on_types_dict.values()

    eval_spec_handler_dict = {}

    eval_spec_handler_dict["full"] = EvalSpecHandler(
        source_type="Genai.AircraftComponent",
        projection=all_fields,
        filter=filter_field_on_type,
        group=[i for i in all_fields if i.value_type.isString()],
        order=[field_on_types_dict["component_risk_score"]],
        limit=10,
    )

    eval_spec_handler_dict["projections_only"] = EvalSpecHandler(
        source_type="Genai.AircraftComponent",
        projection=[i for i in all_fields if (len(i.applied_operations) == 0) and (i.field_name != "count()")],
    )
    yield eval_spec_handler_dict


@pytest.fixture
def source_type_projection_strings():
    yield [
        ("Genai.AircraftComponent", "id", [None, None]),
        ("Genai.AircraftComponent", "id, max(lower(aircraft.riskScore))", [None, None]),
        ("Genai.AircraftComponent", "min(aircraft.riskScore), unique(lowerCase(code.description))", [None, None]),
        ("Genai.AircraftComponentAlert", "count()", [None]),  # Test  count()
        ("Genai.Aircraft", "descending(riskScore)", ["descending"]),  # Test ordering
        (
            "Genai.AircraftComponent",
            "ascending(max(round(aircraft.riskScore)))",
            ["ascending"],
        ),  # Test ordering with multiple functions
        ("Genai.Aircraft", "", [None]),  # Test empty projections
        (
            "Genai.AircraftComponentAlert",
            "component.aircraft.status, component.aircraft, component",
            [None],
        ),  # Test projections that finish on reference
    ]


####################################################################
# Utility functions
####################################################################
def retrieve_type_docs(graph, type_):
    return graph.nodes[type_]["doc"]


def retrieve_type_projection_docs(graph, type_, field_name):
    return graph.nodes[type_]["projections_on_type_meta"][field_name]["doc"]


####################################################################
# Tests
####################################################################
def test_field_on_type_projection_string(field_on_types_dict):
    assert field_on_types_dict["component_id"].projection_string() == "code.id"
    assert field_on_types_dict["component_risk_score"].projection_string() == "ascending(max(riskScore))"
    assert field_on_types_dict["aircraft_id"].projection_string() == "aircraft.id"
    assert field_on_types_dict["airport_city"].projection_string() == "aircraft.location.city"
    assert (
        field_on_types_dict["component_risk_score"].projection_string(apply_operations=False, apply_order=False)
        == "riskScore"
    )
    assert (
        field_on_types_dict["component_risk_score"].projection_string(apply_operations=True, apply_order=False)
        == "max(riskScore)"
    )


def test_field_on_type_value_type(field_on_types_dict):
    assert field_on_types_dict["component_id"].value_type.isString()
    assert field_on_types_dict["component_risk_score"].value_type.isDouble()
    assert field_on_types_dict["aircraft_id"].value_type.isString()
    assert field_on_types_dict["airport_city"].value_type.isString()
    assert field_on_types_dict["count_aircraft_component"].value_type.isInt()


def test_terminal_value_type(graph_with_collection_fields):
    field = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="components",
        graph=graph_with_collection_fields,
        source_type="Genai.Aircraft",
    )
    assert field.value_type.isCollection(), f"Expected {field.value_type} to be CollectionType."
    assert field.terminal_value_type.isReference(), f"Expected {field.terminal_value_type=} to be ReferenceType."


def test_field_on_type_type_doc(field_on_types_dict, data_model_graph):
    for key, val in field_on_types_dict.items():
        assert val.target_type_doc == retrieve_type_docs(
            data_model_graph, val.target_type
        ), f"Target type docs failed for {key}"
        assert val.source_type_doc == retrieve_type_docs(
            data_model_graph, val.source_type
        ), f"Source type docs failed for {key}"


def test_field_on_type_field_doc(field_on_types_dict, data_model_graph):
    for val in field_on_types_dict.values():
        if val.field_name == "count()":
            assert val.field_doc == SPECIAL_FIELDS_DOCS["count()"]
        else:
            assert val.field_doc == retrieve_type_projection_docs(data_model_graph, val.target_type, val.field_name)


def test_field_on_type_equals(field_on_types_dict):
    assert field_on_types_dict["component_id"] == "Genai.AircraftComponentCode.id"
    assert field_on_types_dict["count_aircraft_component"] == "Genai.AircraftComponent.count()"
    assert field_on_types_dict["aircraft_id"] != field_on_types_dict["airport_city"]
    assert field_on_types_dict["component_risk_score"] == field_on_types_dict["component_risk_score"]
    assert field_on_types_dict["component_id"] in ["Genai.AircraftComponentCode.id"]
    assert field_on_types_dict["count_aircraft_component"] in [field_on_types_dict["count_aircraft_component"]]
    assert field_on_types_dict["count_aircraft_component"] not in ["Genai.AircraftComponentCode.id"]
    assert field_on_types_dict["airport_city"] not in [field_on_types_dict["aircraft_id"]]


def test_filter_field_on_type_equals(field_on_types_dict, filter_field_on_type):
    assert filter_field_on_type == "aircraft.id=='X00'"
    assert field_on_types_dict["aircraft_id"] in filter_field_on_type.all_items_in_filter["field"]


def test_eval_spec_handler_spec_generation(eval_spec_handler_dict):
    source_type = eval_spec_handler_dict["full"].source_type
    spec = eval_spec_handler_dict["full"].spec
    spec["projection"] = ",".join(sorted(spec["projection"].split(", ")))
    assert source_type == "Genai.AircraftComponent"
    assert spec == {
        "projection": ",".join(
            sorted(["code.id", "max(riskScore)", "aircraft.id", "aircraft.location.city", "count()"])
        ),
        "filter": "('X00' == aircraft.id)",
        "group": "code.id, aircraft.id, aircraft.location.city",
        "order": "ascending(max(riskScore))",
        "limit": 10,
    }

    source_type = eval_spec_handler_dict["projections_only"].source_type
    spec = eval_spec_handler_dict["projections_only"].spec
    spec["projection"] = ",".join(sorted(spec["projection"].split(", ")))
    assert source_type == "Genai.AircraftComponent"
    assert spec == {"projection": ",".join(sorted("code.id, aircraft.id, aircraft.location.city".split(", ")))}


def test_eval_spec_handler_evaluate_spec(eval_spec_handler_dict):
    assert eval_spec_handler_dict["full"].evaluate()
    assert eval_spec_handler_dict["projections_only"].evaluate()


def test_eval_spec_handler_equals(eval_spec_handler_dict):
    assert eval_spec_handler_dict["full"] == eval_spec_handler_dict["full"]
    assert eval_spec_handler_dict["full"] != eval_spec_handler_dict["projections_only"]


def test_return_sample_unique_values(field_on_types_dict):
    assert set(field_on_types_dict["airport_city"].return_sample_unique_values(-1)) == {
        "Denver",
        "Honolulu",
        "London",
        "Madrid",
        "New York",
        "Paris",
        "San Francisco",
        "Vienna",
    }
    assert field_on_types_dict["count_aircraft_component"].return_sample_unique_values(5) == list(range(5))
    # Check that we are getting all the Genai.AircraftComponentCode ids, not just the ones that are referenced on
    # Genai.AircraftComponent instances
    assert len(field_on_types_dict["component_id"].return_sample_unique_values(-1)) == 860


def test_field_on_type_from_string(source_type_projection_strings, data_model_graph):
    for source_type, projection_string, target_orderings in source_type_projection_strings:
        field_on_types = FieldOnType.from_string(projection_string, source_type, data_model_graph)
        reconstructed_projection_string = ", ".join([proj.projection_string() for proj in field_on_types])
        assert (
            reconstructed_projection_string == projection_string
        ), f"Expected {reconstructed_projection_string=} to be the same as {projection_string}."

        for field_on_type, target_ordering in zip(field_on_types, target_orderings):
            assert (
                field_on_type.ordering == target_ordering
            ), f"Expected {field_on_type.ordering=} to be {target_ordering=} for {projection_string=} and {source_type=}."


def test_field_on_type_from_string_with_computed_member_expressions(graph_with_collection_fields):
    examples = [
        ("components", "Genai.AircraftComponent", "id", "components.id", []),
        (
            "components[0]",
            "Genai.AircraftComponent",
            "id",
            "components[0].id",
            [{"suffix": "[0]", "path": "components", "target_type": "Genai.Aircraft", "field_name": "components"}],
        ),
        (
            "components[0].alerts[f1]",
            "Genai.AircraftComponentAlert",
            "id",
            "components[0].alerts[f1].id",
            [
                {"suffix": "[0]", "path": "components", "target_type": "Genai.Aircraft", "field_name": "components"},
                {
                    "suffix": "[f1]",
                    "path": "components[0].alerts",
                    "target_type": "Genai.AircraftComponent",
                    "field_name": "alerts",
                },
            ],
        ),
        (
            "components[0].alerts[f1].id",
            "Genai.AircraftComponentAlert",
            "id",
            "components[0].alerts[f1].id",
            [
                {"suffix": "[0]", "path": "components", "target_type": "Genai.Aircraft", "field_name": "components"},
                {
                    "suffix": "[f1]",
                    "path": "components[0].alerts",
                    "target_type": "Genai.AircraftComponent",
                    "field_name": "alerts",
                },
            ],
        ),
    ]

    for (
        input_projection_string,
        expected_target_type,
        expected_field_name,
        expected_projection_path,
        expected_computed_memeber_experssions,
    ) in examples:
        field = FieldOnType.from_string(
            input_projection_string, "Genai.Aircraft", graph_with_collection_fields, map_references_to_id=True
        )[0]

        assert (
            field.target_type == expected_target_type
        ), f"Expected {field.target_type=} tp be {expected_target_type=}. For {input_projection_string=}"
        assert (
            field.field_name == expected_field_name
        ), f"Expected {field.field_name=} tp be {expected_field_name=}. For {input_projection_string=}"
        assert (
            field.projection_path == expected_projection_path
        ), f"Expected {field.projection_path=} tp be {expected_projection_path=}. For {input_projection_string=}"
        assert (
            field.computed_member_expressions == expected_computed_memeber_experssions
        ), f"Expected {field.computed_member_expressions=} tp be {expected_computed_memeber_experssions=}. For {input_projection_string=}"


def test_field_on_type_from_string_with_filters_in_projection_path(graph_with_collection_fields):
    examples = [
        # Single filter in projection
        (
            "sensors.(id == 'X00_pressure').id",
            "Genai.AircraftMeasurementSeries.id",
            [
                {
                    "path": "sensors",
                    "target_type": "Genai.Aircraft",
                    "field_name": "sensors",
                    "filter": "('X00_pressure' == id)",
                }
            ],
        ),
        # Nested filter in projection
        (
            "sensors.(contains(id, 'X00') && 'X00_pressure' == id ).id",
            "Genai.AircraftMeasurementSeries.id",
            [
                {
                    "path": "sensors",
                    "target_type": "Genai.Aircraft",
                    "field_name": "sensors",
                    "filter": "(contains(id, 'X00') && ('X00_pressure' == id))",
                }
            ],
        ),
        # Two filters in projection
        (
            "components.(id == 'X00_pressure').alerts.(id == 'X00_pressure').id",
            "Genai.AircraftComponentAlert.id",
            [
                {
                    "path": "components",
                    "target_type": "Genai.Aircraft",
                    "field_name": "components",
                    "filter": "('X00_pressure' == id)",
                },
                {
                    "path": "components.(('X00_pressure' == id)).alerts",
                    "target_type": "Genai.AircraftComponent",
                    "field_name": "alerts",
                    "filter": "('X00_pressure' == id)",
                },
            ],
        ),
        # Combined with computed member expressions
        (
            "components[0].alerts.(id == 'X00_pressure').id[1]",
            "Genai.AircraftComponentAlert.id",
            [
                {
                    "path": "components[0].alerts",
                    "target_type": "Genai.AircraftComponent",
                    "field_name": "alerts",
                    "filter": "('X00_pressure' == id)",
                }
            ],
        ),
        # Nested filter in projection with parenthesis in the projection filter
        (
            "sensors.( 'X00_pressure' == id  && (aircraft == 'X00')).id",
            "Genai.AircraftMeasurementSeries.id",
            [
                {
                    "path": "sensors",
                    "target_type": "Genai.Aircraft",
                    "field_name": "sensors",
                    "filter": "(('X00_pressure' == id) && ('X00' == aircraft.id))",
                }
            ],
        ),
    ]

    for (
        input_projection_string,
        target_type_field_pair,
        target_projection_filters,
    ) in examples:
        field = FieldOnType.from_string(
            projection_string=input_projection_string,
            source_type="Genai.Aircraft",
            graph=graph_with_collection_fields,
            map_references_to_id=True,
        )[0]

        assert (
            field == target_type_field_pair
        ), f"Expected {field=} to be {target_type_field_pair=} for {input_projection_string=}."

        assert (
            field.projection_filters == target_projection_filters
        ), f"Expected {field.projection_filters=} to be {target_projection_filters=} for {input_projection_string=}."


def test_eval_spec_handler_validate(filter_field_on_type, field_on_types_dict):
    all_fields = field_on_types_dict.values()

    with pytest.raises(
        AssertionError,
        match=re.escape(
            "group fields `[Genai.AircraftComponentCode.id, Genai.Aircraft.id, Genai.Airport.city, 'inexistentField']` are not a subset"
            + " of projections fields"
        ),
    ):
        EvalSpecHandler(
            source_type="Genai.AircraftComponent",
            projection=all_fields,
            filter=filter_field_on_type,
            group=[i for i in all_fields if i.value_type.isString()] + ["inexistentField"],
            order=[field_on_types_dict["component_risk_score"]],
            limit=10,
        ).validate()

    with pytest.raises(
        AssertionError,
        match=re.escape(
            "order fields `[Genai.AircraftComponent.riskScore, 'inexistentField']` are not a subset of projections fields"
        ),
    ):
        EvalSpecHandler(
            source_type="Genai.AircraftComponent",
            projection=all_fields,
            filter=filter_field_on_type,
            group=[i for i in all_fields if i.value_type.isString()],
            order=[field_on_types_dict["component_risk_score"]] + ["inexistentField"],
            limit=10,
        ).validate()

    with pytest.raises(
        AssertionError,
        match=re.escape("limit of -5 should be >= -1"),
    ):
        EvalSpecHandler(
            source_type="Genai.AircraftComponent",
            projection=all_fields,
            filter=filter_field_on_type,
            group=[i for i in all_fields if i.value_type.isString()],
            order=[field_on_types_dict["component_risk_score"]],
            limit=-5,
        ).validate()
