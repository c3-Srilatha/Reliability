# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=redefined-outer-name

import pytest
import re

FILE_NAME = "test_load_metric_documentation_vectorstore.py"

logger = c3.Logger.for_(FILE_NAME.split(".")[0])

_validate_metric = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/load_metric_documentation_vectorstore.py",
    ["_validate_metric"],
)

_find_metric_expression = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/load_metric_documentation_vectorstore.py",
    ["_find_metric_expression"],
)


def test_validate_metic_with_declared_fields():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_declared")
    assert (_validate_metric(metric)) == True


def test_validate_metic_with_inherited_fields():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_inherited")
    assert (_validate_metric(metric)) == True


def test_validate_metric_with_no_type_at_tsdecl_data():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_inherited")
    # Test error raising for TSDecl.data argument
    with pytest.raises(
        ValueError,
        match='No type could be found for type: "Genai.TestTimedDataHeader" at field: "inexistentField"',
    ):
        ts_decl_test = metric.tsDecl.toJson()
        ts_decl_test["data"] = "inexistentField"
        _validate_metric(metric.withField("tsDecl", ts_decl_test))


def test_validate_metric_with_no_type_at_tsdecl_value():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_inherited")
    # Test error raising for TSDecl.value argument
    with pytest.raises(
        ValueError,
        match='Value field "randomField" for TSDecl metric "Value" is not a field of target type Genai.TestTimedDataPoint.',
    ):
        ts_decl_test = metric.tsDecl.toJson()
        ts_decl_test["value"] = "randomField"
        _validate_metric(metric.withField("tsDecl", ts_decl_test))


def test_validate_metric_with_wrong_value_at_tsdecl_value():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_inherited")
    # Test error raising for TSDecl.value argument
    with pytest.raises(
        ValueError,
        match=re.escape(
            'Type of value field "start" for TSDecl metric "Value" should be a NumberType but is "datetime".'
        ),
    ):
        ts_decl_test = metric.tsDecl.toJson()
        ts_decl_test["value"] = "start"
        _validate_metric(metric.withField("tsDecl", ts_decl_test))


def test_find_metric_expression_with_declared_fields():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_declared")
    expression = _find_metric_expression(metric)
    assert expression == "PREVIOUS(declaredData.value)"


def test_find_metric_expression_with_inherited_fields():
    metric = c3.SimpleMetric.forId("Value_Genai.TestTimedDataHeader_inherited")
    expression = _find_metric_expression(metric)
    assert expression == "PREVIOUS(data.value)"
