# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

# pylint: disable = redefined-outer-name


EvalSpecSampler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/dataset_generation/samplers/spec_samplers/eval_spec_sampler.py",
    ["EvalSpecSampler"],
)
EvalSpecHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/eval_spec_handler.py",
    ["EvalSpecHandler"],
)
FilterHandler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/handlers/filter_handler.py",
    ["FilterHandler"],
)
FieldOnType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/type_system_utils/field_on_type.py",
    ["FieldOnType"],
)


@pytest.fixture(scope="module")
def spec_sampler(data_model_graph):
    spec_sampler = EvalSpecSampler(graph=data_model_graph)
    yield spec_sampler


@pytest.fixture(scope="module")
def irrelevant_spec_group_by_id_name(data_model_graph):
    aircraft_id = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="id",
        graph=data_model_graph,
        source_type="Genai.Aircraft",
    )
    aircraft_name = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="name",
        graph=data_model_graph,
        source_type="Genai.Aircraft",
    )
    spec_handler_group_by_id = EvalSpecHandler(
        source_type="Genai.Aircraft", projection=[aircraft_name], group=[aircraft_id]
    )
    spec_handler_group_by_name = EvalSpecHandler(
        source_type="Genai.Aircraft", projection=[aircraft_id], group=[aircraft_name]
    )
    yield spec_handler_group_by_id, spec_handler_group_by_name


@pytest.fixture(scope="module")
def irrelevant_spec_group_equal_projection(data_model_graph):
    aircraft_model = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="model",
        graph=data_model_graph,
        source_type="Genai.Aircraft",
    )
    spec_handler = EvalSpecHandler(source_type="Genai.Aircraft", projection=[aircraft_model], group=[aircraft_model])
    yield spec_handler


@pytest.fixture(scope="module")
def irrelevant_spec_no_projection(data_model_graph):
    spec_handler = EvalSpecHandler(
        source_type="Genai.AircraftComponentCase",
        projection=[],
    )
    yield spec_handler


@pytest.fixture(scope="module")
def irrelevant_spec_filter_id_name_and_others(data_model_graph):
    filter_handler = FilterHandler(
        "id== 'X00' && model == 'X-1B'",
        "Genai.Aircraft",
        data_model_graph,
    )
    aircraft_id = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="id",
        graph=data_model_graph,
        source_type="Genai.Aircraft",
    )
    spec_handler = EvalSpecHandler(
        projection=[aircraft_id],
        source_type="Genai.Aircraft",
        filter=filter_handler,
    )
    yield spec_handler


@pytest.fixture(scope="module")
def irrelevant_spec_no_results(data_model_graph):
    filter_handler = FilterHandler(
        "id== 'X00' && model != 'X-1B'",
        "Genai.Aircraft",
        data_model_graph,
    )
    aircraft_id = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="id",
        graph=data_model_graph,
        source_type="Genai.Aircraft",
    )
    spec_handler = EvalSpecHandler(
        projection=[aircraft_id],
        source_type="Genai.Aircraft",
        filter=filter_handler,
    )
    yield spec_handler


@pytest.fixture(scope="module")
def irrelevant_spec_fail_eval(data_model_graph):
    component = FieldOnType(
        target_type="Genai.AircraftComponentCase",
        field_name="component",
        graph=data_model_graph,
        source_type="Genai.AircraftComponentCase",
    )
    component_aircraft_risk_score = FieldOnType(
        target_type="Genai.Aircraft",
        field_name="riskScore",
        graph=data_model_graph,
        source_type="Genai.AircraftComponentCase",
        ordering="descending",
    )
    spec_handler = EvalSpecHandler(
        source_type="Genai.AircraftComponentCase",
        projection=[component, component_aircraft_risk_score],
        order=[component_aircraft_risk_score],
    )
    yield spec_handler


def test_irrelevant_spec_group_by_id_name(spec_sampler, irrelevant_spec_group_by_id_name):
    spec_handler_group_by_id, spec_handler_group_by_name = irrelevant_spec_group_by_id_name
    relevant = spec_sampler.spec_is_relevant(spec_handler_group_by_id)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec that groups by id"
    relevant = spec_sampler.spec_is_relevant(spec_handler_group_by_name)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec that groups by name"


def test_irrelevant_spec_group_equal_projection(spec_sampler, irrelevant_spec_group_equal_projection):
    relevant = spec_sampler.spec_is_relevant(irrelevant_spec_group_equal_projection)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec that group is equal to projection"


def test_irrelevant_spec_no_projection(spec_sampler, irrelevant_spec_no_projection):
    relevant = spec_sampler.spec_is_relevant(irrelevant_spec_no_projection)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec with no projection"


def test_irrelevant_spec_filter_id_name_and_others(spec_sampler, irrelevant_spec_filter_id_name_and_others):
    relevant = spec_sampler.spec_is_relevant(irrelevant_spec_filter_id_name_and_others)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec with filter that has id/name and others"


def test_irrelevant_spec_no_results(spec_sampler, irrelevant_spec_no_results):
    relevant = spec_sampler.spec_is_relevant(irrelevant_spec_no_results)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec that has no results"


def test_irrelevant_spec_fail_eval(spec_sampler, irrelevant_spec_fail_eval):
    relevant = spec_sampler.spec_is_relevant(irrelevant_spec_fail_eval)
    assert relevant is False, f"Expected {relevant=} to be {False} for spec that fails to evaluate"


def test_sample_single(spec_sampler):
    spec_handler = spec_sampler.sample_single()
    assert isinstance(spec_handler, EvalSpecHandler), f"Expected {type(spec_handler)=} to be {EvalSpecHandler}"
    assert "Genai.Air" in spec_handler.source_type
    assert len(spec_handler.projection) > 0, "Expected projection to have at least one field"


def test_sample_multiple(spec_sampler):
    spec_handlers = spec_sampler.sample_multiple(2)
    assert isinstance(spec_handlers, list), f"Expected {type(spec_handlers)=} to be {list}"
    assert len(spec_handlers) == 2, f"Expected {len(spec_handlers)=} to be 2"
    for spec_handler in spec_handlers:
        assert isinstance(spec_handler, EvalSpecHandler), f"Expected {type(spec_handler)=} to be {EvalSpecHandler}"
        assert "Genai.Air" in spec_handler.source_type
        assert len(spec_handler.projection) > 0, "Expected projection to have at least one field"


def test_value_type_mapping(data_model_graph, spec_sampler):
    component_risk_score = FieldOnType(
        target_type="Genai.AircraftComponent",
        field_name="riskScore",
        graph=data_model_graph,
        source_type="Genai.AircraftComponent",
        applied_operations=[],
    )

    for operation in ["max", "avg", "sum", "temporalDistance"]:
        component_risk_score["applied_operations"] = [operation]
        value_type = spec_sampler.value_type_mapping(component_risk_score)
        assert (
            value_type.name == "double"
        ), f"Expected {value_type.name} to be 'double' for riskScore field with {operation} operation"
