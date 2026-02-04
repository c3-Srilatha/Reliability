# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from unittest.mock import patch
import pytest

# pylint: disable=redefined-outer-name, line-too-long, unused-argument

LlmFactory = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/llm/llm_factory.py",
    ["LlmFactory"],
)

MisLlmSpec, MisLlm, MisLlmInferenceSpec = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/llm/available_llms/mis.py",
    ["MisLlmSpec", "MisLlm", "MisLlmInferenceSpec"],
)


@pytest.fixture
def disable_guardrails():
    initial_config = c3.Genai.LlmGuardrails.Manager.getConfig()
    c3.Genai.LlmGuardrails.Manager.clearConfigAndSecretOverride(c3.ConfigOverride.APP)
    yield
    initial_config.setConfig()


@pytest.fixture(scope="module")
def llama_kwargs():
    args = c3.Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey("modelInference_llama_31_8").llmKwargs
    yield args.copy()


@pytest.fixture(autouse=True, scope="module")
def llms(request, llama_kwargs):
    c3.TestApi.setMisConfig()
    llm_kwargs = getattr(request, "param", llama_kwargs)
    spec = MisLlmSpec(llm_config_name=None, **llm_kwargs)
    llm = LlmFactory.create_from_spec(spec)
    llm.build()

    airgap_config = c3.Genai.App.AirGapConfig.getConfig()
    airgap_config.setConfigValue("misTokenizerPath", "gcs://c3--datasets/genai/airgap/models/bert-base-uncased.zip")
    airgapped_llm = LlmFactory.create_from_spec(spec)
    airgapped_llm.build()
    yield {"non-airgapped": llm, "airgapped": airgapped_llm}
    airgap_config.setConfig()


@pytest.mark.parametrize("index", ["non-airgapped", "airgapped"])
def test_mis_call(llms, index, disable_guardrails):
    llm = llms[index]
    response = llm.process(["what are the colors of the rainbow?"]).responses[0]
    assert len(response) > 0
    assert "red" in response and "rainbow" in response


@pytest.mark.parametrize("index", ["non-airgapped", "airgapped"])
def test_mis_tokenizer(llms, index):
    llm = llms[index]
    input_string = "hello world!"
    expected_tokenized_output = [101, 7592, 2088, 999, 102]
    assert llm.tokenizer is not None
    assert llm.tokenizer(input_string)["input_ids"] == expected_tokenized_output
    assert llm.tokenizer.decode(expected_tokenized_output, True) == input_string


@pytest.mark.parametrize("index", ["non-airgapped", "airgapped"])
def test_mis_tokenizer_airgap(llms, index):
    llm = llms[index]
    input_string = "hello world!"
    expected_tokenized_output = [101, 7592, 2088, 999, 102]
    assert llm.tokenizer is not None
    assert llm.tokenizer(input_string)["input_ids"] == expected_tokenized_output
    assert llm.tokenizer.decode(expected_tokenized_output, True) == input_string


llm_kwargs_for_null_output = {
    "temperature": 0,
    "use_beam_search": False,
    "length_penalty": 1.0,
    "top_p": 0.01,
    "presence_penalty": 0.0,
    "frequency_penalty": 1.0,
    "early_stopping": False,
    "stop_sequences": ["Question:", "Answer:", "Passages:"],
    "max_output_tokens": 600,
    "n_beams": 1,
    "stream_response": False,
    "model_name": "llama",
    "route": "llama_mis_central",
    "context_length": 2048,
    "timeout": 300,
    "tokenizer_name": "google-bert/bert-base-uncased",
    "truncate_prompt_totally": False,
}


@pytest.mark.parametrize(
    "index, llms",
    [
        ("non-airgapped", llm_kwargs_for_null_output),
        ("airgapped", llm_kwargs_for_null_output),
    ],
    indirect=["llms"],
)
def test_mis_call_with_null_output(llms, index, disable_guardrails):
    llm = llms[index]
    response = llm.process([c3.Genai.Prompt.forId("mis_completion")]).responses[0]
    assert response == ""


def test_generate_text_with_overridden_kwargs(disable_guardrails):
    llm = c3.Genai.UnstructuredQuery.Engine.ModelConfig.forConfigKey("modelInference_llama_31_8")
    response1 = llm.generateText({"prompt": "Count from 1 to 10", "max_output_tokens": 1})
    assert response1 is not None

    response2 = llm.generateText({"prompt": "Count from 1 to 10", "max_output_tokens": 10})
    assert response2 is not None
    assert len(response2) != len(
        response1
    ), f"response1 should be shorter than response2 due to insufficent max_output_tokens, {response1=}, {response2=}"


def _do_call_llm_mock(model_args, stream_response=False):
    assert len(model_args) == 3
    assert isinstance(model_args[0], str), "first arg should be route"
    assert isinstance(model_args[1], list) and isinstance(model_args[1][0], str), "second arg should be prompt"
    assert isinstance(model_args[2], dict), "third arg should be model kwargs"

    return model_args[2]


def pass_through_responses(responses):
    return responses


@pytest.fixture
def default_inference_kwargs():
    yield {
        "max_output_tokens": 600,
        "temperature": 1e-06,
        "stop_sequences": [],
        "use_beam_search": False,
        "length_penalty": 1.0,
        "n_beams": 1,
        "top_p": 0.9,
        "presence_penalty": 0.0,
        "frequency_penalty": 0.0,
        "early_stopping": False,
        "stream_response": False,
        "llm_config_name": None,
    }


def _check_llm_params_passed(llm, kwargs, expected, expected_error):
    with patch.object(MisLlm, "_do_call_llm") as _do_call_llm:
        _do_call_llm.side_effect = _do_call_llm_mock
        with patch.object(MisLlm, "process_responses") as process_responses:
            process_responses.side_effect = pass_through_responses
            if expected_error:
                with pytest.raises(Exception, match=expected_error):
                    llm.process(["prompt"], MisLlmInferenceSpec(**kwargs))
            else:
                res = llm.process(["prompt"], MisLlmInferenceSpec(**kwargs))
                assert res is not None
                assert len(res) == 1
                kwargs_passed = res[0]
                for k, v in expected.items():
                    assert isinstance(kwargs_passed[k], type(v))
                    assert kwargs_passed[k] == v
                assert kwargs_passed["n"] == 1  # currently hardcoded in mis.py


@pytest.mark.parametrize(
    "inference_kwargs, expected, expected_error",
    [
        ({"n_beams": 2.0, "top_p": 42}, {"best_of": 2, "top_p": 42.0}, None),
        (
            {"n_beams": 2, "presence_penalty": "42", "top_p": 42},
            {"best_of": 2, "top_p": 42.0, "presence_penalty": 42.0},
            None,
        ),
        (
            {"n_beams": 22.2, "presence_penalty": "42", "top_p": 42.2},
            {"best_of": 22, "top_p": 42.2, "presence_penalty": 42.0},
            None,
        ),
        ({"n_beams": 2, "presence_penalty": "42"}, {"best_of": 2, "presence_penalty": 42.0}, None),
        (
            {"presence_penalty": "foo", "top_p": 42.0},
            "ignored",
            "param presence_penalty=foo of type <class 'str'> must be of type <class 'float'>",
        ),
        ({"presence_penalty": "42", "n": "1.0"}, "ignored", "unexpected keyword argument"),
    ],
)
def test_mis_spec_type_conversion(
    llms, default_inference_kwargs, disable_guardrails, inference_kwargs, expected, expected_error
):
    llm = llms["non-airgapped"]
    kwargs = default_inference_kwargs.copy()
    kwargs.update(inference_kwargs)

    _check_llm_params_passed(llm, kwargs, expected, expected_error)


def test_mis_spec_skip_type_conversion(llama_kwargs, default_inference_kwargs, disable_guardrails):
    llm_kwargs = llama_kwargs.copy()
    llm_kwargs["skip_kwarg_type_conversion"] = True
    spec = MisLlmSpec(llm_config_name=None, **llm_kwargs)
    llm = LlmFactory.create_from_spec(spec)
    llm.build()

    kwargs = default_inference_kwargs.copy()
    expected = {"temperature": "five", "presence_penalty": "42", "top_p": 42}
    kwargs.update(expected)
    _check_llm_params_passed(llm, kwargs, expected, None)
