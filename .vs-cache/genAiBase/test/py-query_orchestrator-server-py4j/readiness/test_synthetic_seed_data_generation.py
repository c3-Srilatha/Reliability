# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = redefined-outer-name, line-too-long
import json
import pytest
from c3agents.plan_and_execute.formatting_and_parsing.formatting_utils import parse_json_from_llm_output

SeedDataModelGenerator = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/synthetic_data_generation/automatic_data_model_generation/synthetic_seed_data_generator.py",
    ["SeedDataModelGenerator"],
)


def generate_text(query) -> str:
    llm = c3.GenaiCore.Llm.Completion.Client.forConfigKey("gpt_4o").completion
    result = llm([{"content": query, "role": "user"}])
    return result.choices[0].message.content


@pytest.fixture(scope="function")
def upsert_data_model_graph():
    use_case_name = "hospital"
    whitelisted_data_model = {
        "Genai.HospitalStatistics": {"fields": ["id", "statistics"]},
        "Genai.HospitalStatistic": {"fields": ["data", "hospitalStatistics", "id"]},
        "Genai.HospitalStatisticMeasurement": {
            "fields": [
                "busiestDay",
                "id",
                "mostCommonCondition",
                "mostPerformedTest",
                "mostPrescribedMedication",
                "parent",
                "start",
                "totalAppointments",
                "totalDoctors",
                "totalLabTests",
                "totalPatients",
                "totalPrescriptions",
            ]
        },
    }
    data_model_graph = c3.Genai.StructuredData.DataModelGraph.forName(use_case_name)

    if data_model_graph:
        data_model_graph.remove()

    data_model_graph = (
        c3.Genai.StructuredData.DataModelGraph(
            **{
                "type": "Genai.StructuredData.DataModelGraph",
                "name": use_case_name,
                "id": use_case_name,
                "includeCollectionFields": True,
                "whitelistedDataModel": whitelisted_data_model,
            }
        )
        .upsert()
        .get()
    )
    yield data_model_graph
    data_model_graph.remove()


def mask_id_in_dictionary(dict_to_mask):
    dict_to_mask = dict_to_mask.copy()
    for key, val in dict_to_mask.items():
        if key == "id":
            dict_to_mask[key] = len(val)
        if isinstance(val, dict):
            dict_to_mask[key] = mask_id_in_dictionary(val)
    return dict_to_mask


@pytest.fixture(scope="module")
def graph():
    yield c3.TestApi.upsertReadinessDataModelGraph().toNative()


@pytest.fixture(scope="module")
def seed_data_generator():
    yield SeedDataModelGenerator(
        generate_text_smart_llm=None,
        data_model_graph=c3.Genai.StructuredData.DataModelGraph(id="readiness_test_data_model_graph").get(),
        data_model_doc="",
    )


EXAMPLES_PRODUCE_JSON_TEMPLATE = [
    (
        "Genai.Aircraft",
        1,
        {
            "type": "Genai.Aircraft",
            "id": "!string",
            "riskScore": "double",
            "isAssignedToPilot": "boolean",
        },
    ),
    (
        "Genai.AircraftMeasurementSeries",
        2,
        {
            "type": "Genai.AircraftMeasurementSeries",
            "aircraft": {
                "type": "Genai.Aircraft",
                "id": "!string",
                "riskScore": "double",
                "isAssignedToPilot": "boolean",
            },
            "id": "!string",
        },
    ),
]


@pytest.mark.parametrize("type_name, max_depth, target", EXAMPLES_PRODUCE_JSON_TEMPLATE)
def test_produce_json_template(type_name, max_depth, target, graph):
    output = SeedDataModelGenerator.produce_json_template(type_name=type_name, graph=graph, max_depth=max_depth)
    assert output == target, f"Expected {output=} to be {target=}."


def test_parse_raw_data(seed_data_generator):
    raw_data = {
        "Genai.Aircraft": json.dumps([{"id": "1", "riskScore": 3, "fakeField": 2, "location": {"city": "SF"}}]),
    }
    output = seed_data_generator.parse_raw_data(raw_data)
    target = {
        "Genai.Airport": [{"city": "SF", "id": "444a08ce-a57d-4de8-ae79-15e530445435"}],
        "Genai.Aircraft": [
            {"id": "1-33e20", "riskScore": 3, "location": {"city": "SF", "id": "444a08ce-a57d-4de8-ae79-15e530445435"}}
        ],
    }
    assert set(output) == set(target), f"Expected {set(output)=} to be {set(target)=}."


def test_upsample_seed_data_references(seed_data_generator):
    parsed_data = {
        "Genai.Aircraft": [{"id": "X00"}],
        "Genai.AircraftComponent": [{"id": "X00", "riskScore": 0.3}],
        "Genai.AircraftComponentCode": [{"id": "Actuator", "description": "Actuator"}],
        "Genai.AircraftModel": [{"id": "Boeing", "name": "Boeing"}],
        "Genai.Airport": [{"id": "SFO", "city": "SFO"}],
    }

    target = {
        "Genai.Aircraft": [
            {"id": "X00", "model": "Boeing", "location": "SFO"},
        ],
        "Genai.AircraftComponent": [{"id": "X00", "riskScore": 0.3, "code": "Actuator", "aircraft": "X00"}],
        "Genai.AircraftComponentCode": [{"id": "Actuator", "description": "Actuator"}],
        "Genai.AircraftModel": [{"id": "Boeing", "name": "Boeing"}],
        "Genai.Airport": [{"id": "SFO", "city": "SFO"}],
    }

    upsampled = seed_data_generator.upsample_references(parsed_data)
    assert upsampled == target, f"Expected {upsampled=} to be {target=}."


parse_dict = """ Some free text here

```json

{
    "A key": [{"1": ["2"]}]
}

```
"""
parse_list = """ Some free text here

```json
[
    {
        "A key": [{"1": ["2"]}]
    }
]
```
"""

parse_with_newlines = """{
    "key": "val
here",
"some": 1,
"other": "keys\nhere"
}"""


TEST_CASES_PARSE_LLM_SYNTHETIC_DATA = [
    (parse_dict, {"A key": [{"1": ["2"]}]}),
    (parse_list, [{"A key": [{"1": ["2"]}]}]),
    (parse_with_newlines, {"key": "val\nhere", "some": 1, "other": "keys\nhere"}),
]


@pytest.mark.parametrize("test_case, target", TEST_CASES_PARSE_LLM_SYNTHETIC_DATA)
def test_parse_json_from_llm_output(test_case, target):
    output = parse_json_from_llm_output(test_case)
    assert output == target, f"Expected {output=} to be {target=}."


def test_generate_seed_data(upsert_data_model_graph):
    clean_demo_data_model = "entity type Genai.HospitalStatistics {\n\n  statistics: [HospitalStatistic](hospitalStatistics)\n}\n\nentity type Genai.HospitalStatistic mixes TimedDataHeader<HospitalStatisticMeasurement> {\n\n  hospitalStatistics: HospitalStatistics\n}\n\nentity type Genai.HospitalStatisticMeasurement mixes TimedDataPoint<HospitalStatistic> {\n\n  timestamp:                datetime\n  totalPatients:            int\n  totalDoctors:             int\n  totalAppointments:        int\n  totalPrescriptions:       int\n  totalLabTests:            int\n  busiestDay:               string\n  mostCommonCondition:      string\n  mostPrescribedMedication: string\n  mostPerformedTest:        string\n}\n"
    data_model_graph = upsert_data_model_graph
    seed_data_model_generator = SeedDataModelGenerator(
        generate_text_smart_llm=generate_text,
        data_model_graph=data_model_graph,
        data_model_doc=clean_demo_data_model,
        verbose=True,
    )
    generated_seed_data = seed_data_model_generator.generate_seed_data()
    assert generated_seed_data is not None
    assert isinstance(generated_seed_data, dict)
    assert generated_seed_data.get("Genai.HospitalStatistic") is not None
    assert generated_seed_data.get("Genai.HospitalStatistics") is not None
    assert generated_seed_data.get("Genai.HospitalStatisticMeasurement") is not None
