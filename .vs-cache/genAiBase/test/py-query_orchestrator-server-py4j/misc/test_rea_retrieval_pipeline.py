# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    c3 = {}  # Make pylance stop complaining about c3

PipelineOutput = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/pipelines/REA/rea_retrieval_pipeline.py",
    ["PipelineOutput"],
)


def test_asdict():
    pipeline_attributes = {
        "retrieved_docs": [
            {"page_content": "1", "score": 0.1, "rank": 1},
            {"page_content": "2", "score": 0.2, "rank": 2},
            {"page_content": "3", "score": 0.3, "rank": 3},
        ],
        "retriever_tags": ["tag1", "tag2", "tag3"],
        "context_docs": ["context1", "context2", "context3"],
        "answer": "answer",
        "question_answering_prompt_template": "template",
        "stream_object": "stream",
        "reranked_extracts": ["reranked1", "reranked2", "reranked3"],
        "filtered_extracts": {"filtered1": ["filtered1"], "filtered2": ["filtered2"], "filtered3": ["filtered3"]},
        "source_documents": ["source1", "source2", "source3"],
        "query": "query",
        "query_string_passed_to_llm": "query_string",
        "attributed_answer": "attributed_answer",
        "rationale": "rationale",
        "rewriter_results": {"rewriter1": ["rewriter1"], "rewriter2": ["rewriter2"], "rewriter3": ["rewriter3"]},
        "searchQuery": "searchQuery",
        "suppressSourceRelations": True,
    }

    initial_pipeline_output = PipelineOutput(pipeline_attributes)

    dict_pipeline_output = initial_pipeline_output.asdict()

    removed_attributes = [
        "stream_object",
        "source_documents",
        "rewriter_results",
    ]

    # These ones are removed from the dict
    for attribute in pipeline_attributes:
        if attribute not in removed_attributes:
            assert dict_pipeline_output.get(attribute) == pipeline_attributes.get(attribute)
        else:
            assert dict_pipeline_output.get(attribute) is None
