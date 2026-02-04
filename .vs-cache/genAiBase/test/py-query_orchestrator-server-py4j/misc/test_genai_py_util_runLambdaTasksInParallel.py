# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


def test_runLambdaTasksInParallel():
    tasks = {}
    addition_lambda = c3.Lambda.fromPyFunc(_addition_func)
    datetime_lambda = c3.Lambda.fromPyFunc(_datetime_type_func)
    error_lambda = c3.Lambda.fromPyFunc(_error_throwing_func)

    tasks["simple_addition"] = addition_lambda, [1, 2]

    datetime_1 = c3.DateTime.fromString("2024-06-18T23:22:20")
    datetime_2 = c3.DateTime.fromString("2024-06-18T23:30:50")
    tasks["datetime_delta"] = datetime_lambda, [datetime_1, datetime_2]

    tasks["error"] = error_lambda, [False]

    tasks["load_nltk_1"] = _load_nltk_func, []
    tasks["load_nltk_2"] = _load_nltk_func, []

    results = c3.Genai.PyUtil.runLambdaTasksInParallel(tasks)

    assert results["simple_addition"] == 3
    assert results["datetime_delta"] == 510
    assert "Input argument is invalid: False" in results["error"]
    assert results["load_nltk_1"] is not None
    assert results["load_nltk_2"] is not None


def _addition_func(int_1, int_2):
    return int_1 + int_2


def _datetime_type_func(time_1, time_2):
    return c3.DateTime.deltaSeconds(time_1, time_2)


def _error_throwing_func(arg_1):
    if not arg_1:
        raise RuntimeError(f"Input argument is invalid: {arg_1}")
    return True


def _load_nltk_func():
    c3.Genai.PyUtil.loadNltkTokenizer()


# included here instead of in test_genai_py_util because runLambdaTasksInParallel will not function
# correctly from py-jep
def test_formatError():
    test_err_msg = "Test error message"

    def raise_runtime_error():
        try:
            raise RuntimeError(test_err_msg)
        except RuntimeError as e:
            return c3.Genai.PyUtil.formatError(e)

    # formatMessage returns null
    assert c3.Genai.PyUtil.formatError(c3.Error.make()) == "null"

    # format_exc when not in an error block
    assert c3.Genai.PyUtil.formatError(RuntimeError(test_err_msg)) == "NoneType: None\\n"

    error_msg = raise_runtime_error()
    assert "Traceback (most recent call last):" in error_msg
    assert test_err_msg in error_msg

    results = c3.Genai.PyUtil.runLambdaTasksInParallel(
        {"error_result": (c3.Lambda.fromPyFunc(raise_runtime_error), [])}
    )
    error_msg = results["error_result"]
    assert test_err_msg in error_msg


def test_parseEngineLogs():
    import json

    assert c3.Genai.PyUtil.parseEngineLogs(c3.Genai.Query.Result()) is None
    result = c3.Genai.PyUtil.parseEngineLogs(
        c3.Genai.Query.Result(engineLog=json.dumps([[], {"chain_result": "null"}]))
    )
    assert result is not None
