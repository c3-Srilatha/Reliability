# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

FieldSamplerSpec, FieldSampler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/dataset_generation/samplers/spec_samplers/field_sampler.py",
    ["FieldSamplerSpec", "FieldSampler"],
)

QualitySpecSampler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/dataset_generation/samplers/spec_samplers/quality_sampler.py",
    ["QualitySpecSampler"],
)

c3.Genai.TestSetupUtil.setWhitelistedDataModel("readiness")

TEST_CASES = [
    {
        "query": "What are the top 10 maintenance cases, sorted by latest to earliest case creation date, with a component risk score greater than 0.37, and what are their component risk scores and case creation dates?",
        "spec": {
            "sourceType": "Genai.AircraftComponentCase",
            "projection": "id, component.riskScore, createdTimestamp",
            "filter": "component.riskScore > 0.37",
            "order": "descending(createdTimestamp)",
            "limit": 10.0,
        },
        "spec_f_string": {
            "sourceType": "Genai.AircraftComponentCase",
            "projection": "id, component.riskScore, createdTimestamp",
            "filter": "component.riskScore > {float_sampler}",
            "order": "{ordering_sampler}(createdTimestamp)",
            "limit": "{limit_sampler}",
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "id, component.riskScore, createdTimestamp",
                    "filter": "component.riskScore > 0.771",
                    "order": "descending(createdTimestamp)",
                    "limit": "220",
                },
                "orig_query": "What are the top 10 maintenance cases, sorted by latest to earliest case creation date, with a component risk score greater than 0.37, and what are their component risk scores and case creation dates?",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "id, component.riskScore, createdTimestamp",
                    "filter": "component.riskScore > 0.37",
                    "order": "descending(createdTimestamp)",
                    "limit": 10.0,
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "id, component.riskScore, createdTimestamp",
                    "filter": "component.riskScore > 0.021",
                    "order": "ascending(createdTimestamp)",
                    "limit": "296",
                },
                "orig_query": "What are the top 10 maintenance cases, sorted by latest to earliest case creation date, with a component risk score greater than 0.37, and what are their component risk scores and case creation dates?",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "id, component.riskScore, createdTimestamp",
                    "filter": "component.riskScore > 0.37",
                    "order": "descending(createdTimestamp)",
                    "limit": 10.0,
                },
            },
        ],
    },
    {
        "query": "What are the longitude coordinates of airports located in France?",
        "spec": {
            "sourceType": "Genai.Airport",
            "projection": "longitude",
            "filter": 'contains(country, "France")',
        },
        "spec_f_string": {
            "sourceType": "Genai.Airport",
            "projection": "longitude",
            "filter": 'contains(country, "{airport_country_field_sampeler}")',
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.Airport",
                    "projection": "longitude",
                    "filter": 'contains(country, "USA")',
                },
                "orig_query": "What are the longitude coordinates of airports located in France?",
                "orig_spec": {
                    "sourceType": "Genai.Airport",
                    "projection": "longitude",
                    "filter": 'contains(country, "France")',
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.Airport",
                    "projection": "longitude",
                    "filter": 'contains(country, "Austria")',
                },
                "orig_query": "What are the longitude coordinates of airports located in France?",
                "orig_spec": {
                    "sourceType": "Genai.Airport",
                    "projection": "longitude",
                    "filter": 'contains(country, "France")',
                },
            },
        ],
    },
    {
        "query": "What is the highest risk score of an aircraft with a component maintenance case closed on June 7th, 2023?",
        "spec": {
            "sourceType": "Genai.AircraftComponentCase",
            "projection": "max(component.aircraft.riskScore)",
            "filter": "closedTimestamp == '2023-06-07 00:00:00'",
        },
        "spec_f_string": {
            "sourceType": "Genai.AircraftComponentCase",
            "projection": "max(component.aircraft.riskScore)",
            "filter": "closedTimestamp == '{date_time_sampler}'",
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp == '2022-09-12 20:41:08'",
                },
                "orig_query": "What is the highest risk score of an aircraft with a component maintenance case closed on June 7th, 2023?",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp == '2023-06-07 00:00:00'",
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp == '2022-10-02 03:35:13'",
                },
                "orig_query": "What is the highest risk score of an aircraft with a component maintenance case closed on June 7th, 2023?",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp == '2023-06-07 00:00:00'",
                },
            },
        ],
    },
    {
        "query": "Which two aircraft components have the highest risk scores, excluding the one with ID X08_AA500_1? Return the component IDs and the risk scores.",
        "spec": {
            "sourceType": "Genai.AircraftComponent",
            "projection": "riskScore, id",
            "filter": "id != 'X08_AA500_1'",
            "order": "descending(riskScore)",
            "limit": "2.0",
        },
        "spec_f_string": {
            "sourceType": "Genai.AircraftComponent",
            "projection": "riskScore, id",
            "filter": "id != '{id_sampler}'",
            "order": "descending(riskScore)",
            "limit": "2.0",
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponent",
                    "projection": "riskScore, id",
                    "filter": "id != 'AJmYZOjGup'",
                    "order": "descending(riskScore)",
                    "limit": "2.0",
                },
                "orig_query": "Which two aircraft components have the highest risk scores, excluding the one with ID X08_AA500_1? Return the component IDs and the risk scores.",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponent",
                    "projection": "riskScore, id",
                    "filter": "id != 'X08_AA500_1'",
                    "order": "descending(riskScore)",
                    "limit": "2.0",
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponent",
                    "projection": "riskScore, id",
                    "filter": "id != 'c1LxrPCQPi'",
                    "order": "descending(riskScore)",
                    "limit": "2.0",
                },
                "orig_query": "Which two aircraft components have the highest risk scores, excluding the one with ID X08_AA500_1? Return the component IDs and the risk scores.",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponent",
                    "projection": "riskScore, id",
                    "filter": "id != 'X08_AA500_1'",
                    "order": "descending(riskScore)",
                    "limit": "2.0",
                },
            },
        ],
    },
    {
        "query": "what are my max riskScores by id",
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "id, max(riskScore)",
            "group": "id",
        },
        "spec_f_string": {
            "sourceType": "Genai.Aircraft",
            "projection": "{groupby_field_sampler}, max(riskScore)",
            "group": "{groupby_field_sampler}",
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "id, max(riskScore)",
                    "group": "id",
                },
                "orig_query": "what are my max riskScores by id",
                "orig_spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "id, max(riskScore)",
                    "group": "id",
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "name, max(riskScore)",
                    "group": "name",
                },
                "orig_query": "what are my max riskScores by id",
                "orig_spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "id, max(riskScore)",
                    "group": "id",
                },
            },
        ],
    },
    {
        "query": "what are my max riskScores by id",
        "spec": {
            "sourceType": "Genai.Aircraft",
            "projection": "id, name, max(riskScore)",
            "group": "id, name",
        },
        "spec_f_string": {
            "sourceType": "Genai.Aircraft",
            "projection": "{groupby_field_sampler_multiple}, {groupby_field_sampler_multiple}, max(riskScore)",
            "group": "{groupby_field_sampler_multiple}, {groupby_field_sampler_multiple}",
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "components, model, max(riskScore)",
                    "group": "components, model",
                },
                "orig_query": "what are my max riskScores by id",
                "orig_spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "id, name, max(riskScore)",
                    "group": "id, name",
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "components, name, max(riskScore)",
                    "group": "components, name",
                },
                "orig_query": "what are my max riskScores by id",
                "orig_spec": {
                    "sourceType": "Genai.Aircraft",
                    "projection": "id, name, max(riskScore)",
                    "group": "id, name",
                },
            },
        ],
    },
    {
        "query": "What is the highest risk score of an aircraft with a component maintenance case closed on June 7th, 2023?",
        "spec": {
            "sourceType": "Genai.AircraftComponentCase",
            "projection": "max(component.aircraft.riskScore)",
            "filter": "closedTimestamp == '2023-06-07 00:00:00'",
        },
        "spec_f_string": {
            "sourceType": "Genai.AircraftComponentCase",
            "projection": "max(component.aircraft.riskScore)",
            "filter": "closedTimestamp >= '{date_time_sampler}' && closedTimestamp < '{date_time_sampler}' && id == '{id_sampler}'",
        },
        "expected_qs_generated_specs": [
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp >= '2022-09-12 20:41:08' && closedTimestamp < '2022-10-02 03:35:13' && id == 'AJmYZOjGup'",
                },
                "orig_query": "What is the highest risk score of an aircraft with a component maintenance case closed on June 7th, 2023?",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp == '2023-06-07 00:00:00'",
                },
            },
            {
                "spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp >= '2022-09-16 07:57:17' && closedTimestamp < '2023-06-10 01:59:13' && id == 'c1LxrPCQPi'",
                },
                "orig_query": "What is the highest risk score of an aircraft with a component maintenance case closed on June 7th, 2023?",
                "orig_spec": {
                    "sourceType": "Genai.AircraftComponentCase",
                    "projection": "max(component.aircraft.riskScore)",
                    "filter": "closedTimestamp == '2023-06-07 00:00:00'",
                },
            },
        ],
    },
    {
        "query": "This sourceType is an Aircaft?",
        "spec": {"sourceType": "Aircaft"},
        "spec_f_string": {"sourceType": "Aircaft"},
        "expected_qs_generated_specs": [
            {
                "spec": {"sourceType": "Aircaft"},
                "orig_query": "This sourceType is an Aircaft?",
                "orig_spec": {"sourceType": "Aircaft"},
            }
        ],
    },
]


@pytest.fixture(scope="module", autouse=True)
def upsert_data_model_graph():
    # Create the graph
    data_model_graph = c3.Genai.StructuredData.DataModelGraph.forName("readiness_quality_sampler_test")
    if not data_model_graph:
        c3.Genai.StructuredData.DataModelGraph.make(
            {
                "name": "readiness_quality_sampler_test",
                "whitelistedDataModel": {
                    "Genai.Airport": {"fields": ["country"]},
                },
            }
        ).upsert()

    yield  # We don't need to yield anything since the object is upserted

    # After the tests, we remove it.
    c3.Genai.StructuredData.DataModelGraph.forName("readiness_quality_sampler_test").remove()


@pytest.fixture(scope="module")
def sampler_dict():
    ordering_sampler = FieldSamplerSpec(
        sampler_function="_sample_from_list", sampler_configs={"sample_list": ["descending", "ascending"]}
    )
    logical_operator_sampler = FieldSamplerSpec(
        sampler_function="_sample_from_list", sampler_configs={"sample_list": [">", "<", ">=", "<="]}
    )
    float_sampler = FieldSamplerSpec(sampler_function="_sample_float", sampler_configs={"lower": 0, "upper": 1})
    datetime_aggregator_sampler = FieldSamplerSpec(
        sampler_function="_sample_from_list",
        sampler_configs={"sample_list": ["hour", "month", "year", "day"]},
    )
    id_sampler = FieldSamplerSpec(sampler_function="_sample_random_id", sampler_configs={})
    boolean_sampler = FieldSamplerSpec(
        sampler_function="_sample_from_list", sampler_configs={"sample_list": ["true", "false"]}
    )
    date_time_sampler = FieldSamplerSpec(
        sampler_function="_sample_datetime",
        sampler_configs={"start_datetime": "2022-01-01 00:00:00", "end_datetime": "2023-10-12 00:00:00"},
    )
    limit_sampler = FieldSamplerSpec(sampler_function="_sample_int", sampler_configs={"lower": 1, "upper": 500})

    airport_country_field_sampeler = FieldSamplerSpec(
        sampler_function="_sample_from_field",
        sampler_configs={
            "type_name": "Genai.Airport",
            "field_name": "country",
            "data_model_name": "readiness_quality_sampler_test",
        },
    )
    groupby_field_sampler = FieldSamplerSpec(
        sampler_function="_sample_from_list", sampler_configs={"sample_list": ["id", "name"]}
    )
    groupby_field_sampler_multiple = FieldSamplerSpec(
        sampler_function="_sample_from_list", sampler_configs={"sample_list": ["id", "name", "model", "components"]}
    )

    sampler_dict = {
        "ordering_sampler": ordering_sampler,
        "logical_operator_sampler": logical_operator_sampler,
        "float_sampler": float_sampler,
        "datetime_aggregator_sampler": datetime_aggregator_sampler,
        "id_sampler": id_sampler,
        "boolean_sampler": boolean_sampler,
        "date_time_sampler": date_time_sampler,
        "limit_sampler": limit_sampler,
        "airport_country_field_sampeler": airport_country_field_sampeler,
        "groupby_field_sampler": groupby_field_sampler,
        "groupby_field_sampler_multiple": groupby_field_sampler_multiple,
    }

    yield sampler_dict


@pytest.mark.parametrize("query_spec", TEST_CASES)
def test_quality_sampler(sampler_dict, query_spec):
    quality_sampler = QualitySpecSampler(global_seed=10, generate_new_query=False)
    quality_sampler_outputs = quality_sampler.sample(query_dict=query_spec, sample_size=2, sampler_dict=sampler_dict)
    assert (
        quality_sampler_outputs == query_spec["expected_qs_generated_specs"]
    ), f"Expected {query_spec['expected_qs_generated_specs']=} to be {quality_sampler_outputs=} for {query_spec['query']}"


def test_field_sampler_sample_datetime():
    sampled_dates = FieldSampler._sample_datetime("2021-01-01 00:00:00", "2024-01-01 00:00:00", size=2, seed=1)
    target_dates = ["2021-03-20 06:26:20", "2021-06-05 07:36:41"]
    assert sampled_dates == target_dates, f"Expected {sampled_dates=} to be {target_dates=}/"


EXACT_DATETIME_FILTER_EXAMPLES = [
    (
        {
            "projection_string_start": "alerts.timestamp",
            "projection_string_end": None,
            "probability_none": 1,
        },
        [
            "alerts.timestamp < '2021-10-01 00:00:00'",
            "alerts.timestamp >= '2021-01-01 00:00:00'",
        ],
    ),
    (
        {
            "projection_string_start": "start",
            "projection_string_end": "end",
            "probability_none": 0,
        },
        [
            "start >= '2020-06-01 00:00:00' && end < '2021-10-01 00:00:00'",
            "start >= '2022-01-01 00:00:00' && end < '2023-01-01 00:00:00'",
        ],
    ),
]


@pytest.mark.parametrize("example, target_samples", EXACT_DATETIME_FILTER_EXAMPLES)
def test_field_sample_exact_datetime_filter(example, target_samples):
    samples = FieldSampler._sample_exact_datetime_filter(**example, size=2, seed=42)
    assert samples == target_samples, f"Expected {samples=} to be {target_samples=} for {example=}."


def test_field_sample_duration():
    samples = FieldSampler._sample_duration("end", "start", size=3, seed=42)
    target_samples = [
        "(toMillis(end) - toMillis(start) / 1000 / 60 / 60 / 24",
        "(toMillis(end) - toMillis(start) / 1000 / 60 / 60 / 24 / 365",
        "(toMillis(end) - toMillis(start) / 1000 / 60 / 60",
    ]
    assert samples == target_samples, f"Expected {samples=} to be {target_samples=}."
