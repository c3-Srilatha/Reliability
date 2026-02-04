# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import json
from datetime import datetime
import pytest

FILE_NAME = "test_eval_spec_template_prompt_builder.py"
logger = c3.Logger.for_(FILE_NAME.split(".")[0])


####################################################################
# Fixtures
####################################################################


@pytest.fixture(scope="module")
def expected_template_string():
    yield "Given the data model and the query, write the corresponding json spec.\n\nData model:\n\n# An aircraft entity. Can be used to answer questions related to aircraft.\ntype Genai.Aircraft {\n\t# All the maintenance cases associated with this aircraft.\n\tcases: [Genai.AircraftComponentCase]\n\t# The inner components belonging to this aircraft.\n\tcomponents: [Genai.AircraftComponent]\n\t# A unique identifier that can be manually assigned or generated automatically during object creation. This identifier cannot be altered after the object has been persisted.\n\tid: !string\n\t# The single most recent alert for this aircraft. Can be used to access the latest alert on an aircraft, but cannot be used to provide further information about the alert itself. #latestAlert.triggeredTimestamp is the date when the alert was triggered.\n\tlatestAlert: Genai.AircraftComponentAlert\n\t# The current risk score of this aircraft. This should be used to answer questions relating to aircraft risk scores e.g. questions relating to highest aircraft risk score, lowest aircraft risk score, average aircraft risk score etc.\n\triskScore: double\n\t# Sensors on the aircraft\n\tsensors: [Genai.AircraftMeasurementSeries]\n}\n# An aircraft component.  Could be an engine, turbine, generator, etc. Should be used to answer questions relating to aircraft components, such as component risk scores and component codes.\ntype Genai.AircraftComponent {\n\t# Lookup for the component description.\n\tcode: Genai.AircraftComponentCode\n\t# A unique identifier that can be manually assigned or generated automatically during object creation. This identifier cannot be altered after the object has been persisted.\n\tid: !string\n\t# Name of the Obj instance\n\tname: string\n}\n# An alert for a component. Use this to answer questions about aircraft component alerts, including questions about triggered timestamps and alert details.\ntype Genai.AircraftComponentAlert {\n\t# A unique identifier that can be manually assigned or generated automatically during object creation. This identifier cannot be altered after the object has been persisted.\n\tid: !string\n}\n# A maintenance case for a component. Use this to answer questions about aircraft component cases, which often relate to case details, case creation timestamps, case closing timestamps, statuses and case ages.\ntype Genai.AircraftComponentCase {\n\t# A unique identifier that can be manually assigned or generated automatically during object creation. This identifier cannot be altered after the object has been persisted.\n\tid: !string\n}\n# Lookup for the aircraft component descriptions.\ntype Genai.AircraftComponentCode {\n\t# A unique identifier that can be manually assigned or generated automatically during object creation. This identifier cannot be altered after the object has been persisted.\n\tid: !string\n\t# Name of the Obj instance\n\tname: string\n}\n# An aircraft sensor measurement series.\ntype Genai.AircraftMeasurementSeries {\n\t# A unique identifier that can be manually assigned or generated automatically during object creation. This identifier cannot be altered after the object has been persisted.\n\tid: !string\n}\n\n{{few_shot_examples}}\n\n{{rules}}\n\nQuery: {{query}}\njson spec:"


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
        "Genai.AircraftMeasurementSeries": {"fields": ["id"]},
    }


@pytest.fixture(scope="function")
def data_model_graph(whitelist):
    data_model_graph = (
        c3.Genai.StructuredData.DataModelGraph.make(
            {"name": str(hash(datetime.now())), "whitelistedDataModel": whitelist, "includeCollectionFields": True}
        )
        .upsert()
        .get()
    )
    yield data_model_graph.toNative()
    c3.Genai.StructuredData.DataModelGraph.remove(data_model_graph)


@pytest.fixture(scope="module")
def template_prompt():
    prompt_seed = json.loads(
        c3.Pkg.file("/genAiBase/data/Genai.Prompt/eval_spec_generation_default_prompt.json").read()
    )  # This does not appear as sed data since it exists in a different package
    prompt_seed["id"] = "test_eval_spec_template_prompt_builder"
    prompt = c3.Genai.Prompt(**prompt_seed).upsert().get()

    yield prompt

    prompt.remove()


@pytest.fixture(scope="module")
def eval_spec_template_prompt_builder():
    yield c3.Genai.Agent.Tool.Util.TemplatePromptBuilder.make(
        {"id": "EvalSpecGeneration_default", "builderType": "EvalQuery"}
    )


@pytest.fixture(scope="module")
def eval_spec_generation_spec():
    yield c3.Genai.Agent.Tool.Util.EvalQuery.SpecGenerationModel.Spec.make()


####################################################################
# Tests
####################################################################


def test_eval_spec_template_prompt_builder(
    template_prompt,
    eval_spec_template_prompt_builder,
    data_model_graph,
    eval_spec_generation_spec,
    expected_template_string,
):
    updated_template_prompt = eval_spec_template_prompt_builder.buildPrompt(
        templatePrompt=template_prompt, graph=data_model_graph, generationSpec=eval_spec_generation_spec
    ).toString()
    # return updated_template_prompt
    assert (
        updated_template_prompt == expected_template_string
    ), f"The updated template prompt does not match expected output.\nGot: {updated_template_prompt}\n\nExpected:{expected_template_string}"
