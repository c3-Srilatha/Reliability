# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.


(build_projection_documentation, produce_type_projection_documentation) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/prompt_building_utils/produce_type_projection_documentation.py",
    ["build_projection_documentation", "produce_type_projection_documentation"],
)
FieldOnTargetType = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/prompt_building_utils/field_on_target_type.py",
    ["FieldOnTargetType"],
)
_parse_types_and_metrics_input = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/load_metric_documentation_vectorstore.py",
    ["_parse_types_and_metrics_input"],
)

FILE_NAME = "test_produce_documentation.py"
logger = c3.Logger.for_(FILE_NAME.split(".")[0])


# previously, usage of sets resulted in inconsistent ordering of the output/prompt to llm
def test_consistent_field_documentation_string(graph_with_collection_fields):
    white_listed_data_model = c3.Genai.StructuredData.Config.inst().getConfig().whiteListedDataModel
    type_to_fields_map = {key: val["fields"] for key, val in white_listed_data_model.items()}
    doc_str = build_projection_documentation(type_to_fields_map, graph_with_collection_fields)
    assert len(doc_str) > 1000, f"Expected {len(doc_str)=} to be greater than 1000."

    for _ in range(10):
        assert (
            build_projection_documentation(type_to_fields_map, graph_with_collection_fields) == doc_str
        ), "Expected consistent field documentation."


def test_consistent_type_documentation_string():
    bank_as_projection = {
        FieldOnTargetType("Bank", "id", None, is_template=True),
        FieldOnTargetType("Branch", "location", None, is_template=True),
        FieldOnTargetType("Branch", "numberOfEmployees", None, is_template=True),
    }
    branch_as_projection = {
        FieldOnTargetType("Branch", "id", None, is_template=True),
        FieldOnTargetType("Branch", "location", None, is_template=True),
        FieldOnTargetType("Branch", "numberOfEmployees", None, is_template=True),
    }
    account_as_projection = {
        FieldOnTargetType("Account", "id", None, is_template=True),
        FieldOnTargetType("Account", "type", None, is_template=True),
    }
    all_relevant_bank_example_fields = bank_as_projection | branch_as_projection | account_as_projection
    doc_str = produce_type_projection_documentation(all_relevant_bank_example_fields)

    for _ in range(10):
        doc_str_later = produce_type_projection_documentation(all_relevant_bank_example_fields)
        assert doc_str_later == doc_str, f"Expected {doc_str_later} to be consistent as {doc_str}."


def test_consistent_metric_documentation_list():
    structured_data_config = c3.Genai.StructuredData.Config.inst().getConfig()
    type_metrics = structured_data_config.whiteListedMetrics()
    metric_docs = _parse_types_and_metrics_input(type_metrics)
    for _ in range(10):
        type_metrics = structured_data_config.whiteListedMetrics()
        metric_docs_later = _parse_types_and_metrics_input(type_metrics)
        assert metric_docs_later == metric_docs, f"Expected {metric_docs_later} to be consistent as {metric_docs}."


def test_metrics_descriptions_and_is_compound_metric():
    type_metrics = c3.Genai.StructuredData.Config.inst().getConfig().whiteListedMetrics()
    metric_docs = _parse_types_and_metrics_input(type_metrics)
    metric_names = []
    for metrics in type_metrics.values():
        metric_names.extend(metrics)
    simple_metrics = c3.SimpleMetric.fetch({"filter": c3.Filter.intersects("name", metric_names)}).objs
    compound_metrics = c3.CompoundMetric.fetch({"filter": c3.Filter.intersects("name", metric_names)}).objs
    all_metrics = simple_metrics.withAll(compound_metrics)
    all_metrics_dict = {m.name: m for m in all_metrics}
    for metric_doc in metric_docs:
        fetched_metric = all_metrics_dict[metric_doc.metadata["metric_name"]]
        assert (
            isinstance(fetched_metric, c3.CompoundMetric) == metric_doc.metadata["is_compound_metric"]
        ), f"Expected {fetched_metric=} to be a compound metric if and only if {metric_doc.metadata['is_compound_metric']=}"
        should_have_non_inferred_description = (
            fetched_metric.description is not None and len(fetched_metric.description) > 0
        )
        description_line = metric_doc.page_content.split("Description:")[1].split("\n")[0].strip()
        metric_doc = metric_doc.metadata["metric_doc"]
        assert description_line is not None and len(description_line) > 0
        assert metric_doc == description_line, f"Expected {metric_doc=} to be the same as {description_line=}"

        if should_have_non_inferred_description:
            assert "(Inferred)" not in metric_doc, f"Expected {metric_doc=} to not have an inferred description."
        else:
            assert "(Inferred)" in metric_doc, f"Expected {metric_doc=} to have an inferred description."
