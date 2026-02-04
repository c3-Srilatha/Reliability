# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


# pylint: disable=disallowed-name, unused-variable, redefined-outer-name, unused-argument
PipelineOutput = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/pipelines/REA/rea_retrieval_pipeline.py",
    ["PipelineOutput"],
)

FILE_NAME = "test_result_processor.py"
logger = c3.Logger.for_(FILE_NAME.split(".", maxsplit=1)[0])

ResultProcessorSpec, ResultProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/pipelines/result_processor.py",
    ["ResultProcessorSpec", "ResultProcessor"],
)


@pytest.fixture(scope="module", autouse=True)
def retriever(ctx):
    retriever = c3.Genai.Retriever.Dense.make(
        {
            "id": FILE_NAME,
            "name": FILE_NAME,
        }
    )
    c3.TestApi.upsertEntity(ctx, "Genai.Retriever.Dense", retriever)
    yield retriever


@pytest.fixture(scope="module", autouse=True)
def source(ctx):
    source_id = "53044095-6f13-41a7-a36e-efafb48b46c3"
    source = c3.Genai.SourceFile.make({"id": source_id, "originalFile": {"url": "http://url1"}})
    c3.TestApi.upsertEntity(ctx, "Genai.SourceFile", source)
    yield source


@pytest.fixture(scope="module", autouse=True)
def missing_source(ctx):
    missing_source_id = "cd2debcb-22f5-4987-8e95-2799a8f2f2f6"
    missing_source = c3.Genai.SourceFile.make({"id": missing_source_id, "originalFile": {"url": "http://url2"}})
    c3.TestApi.upsertEntity(ctx, "Genai.SourceFile", missing_source)
    yield missing_source


@pytest.fixture(scope="module")
def source_documents(source):
    yield c3.Genai.Retriever.SimilaritySearchResult.array(
        [
            {
                "sourcePassage": {"source": source, "intraSourceId": "1"},
                "page_content": "Foo 1",
                "rank": 1,
                "score": 0.9,
                "metadata": {
                    "source_id": "53044095-6f13-41a7-a36e-efafb48b46c3",
                    "source": "53044095-6f13-41a7-a36e-efafb48b46c3#1",
                    "score": 0.9,
                    "normalized_score": 0.9,
                    "rank": 1,
                },
            },
            {
                "sourcePassage": {"source": source, "intraSourceId": "2"},
                "page_content": "Foo 2",
                "rank": 2,
                "score": 0.8,
                "metadata": {
                    "source_id": "53044095-6f13-41a7-a36e-efafb48b46c3",
                    "source": "53044095-6f13-41a7-a36e-efafb48b46c3#2",
                    "score": 0.8,
                    "normalized_score": 0.8,
                    "rank": 2,
                },
            },
        ]
    )


@pytest.fixture(scope="module")
def orig_answer(source, missing_source):
    yield f"ref 1 is [{source.id}#2] and ref 2 is [{source.id}#1] and ref 3 is [{missing_source.id}#45]"


@pytest.fixture(scope="function")
def result_spy(ctx, missing_source):
    spy = (
        c3.TestApi.spyOn(ctx, "Genai.Retriever.Dense.Engine", "resultsForPassageIds")
        .returnValue(
            c3.Genai.Retriever.SimilaritySearchResult.array(
                {
                    "sourcePassage": {
                        "source": missing_source,
                        "intraSourceId": "45",
                    },
                    "page_content": "Bar 45",
                    "rank": 3,
                    "score": 0.7,
                }
            )
        )
        .register()
    )
    yield spy
    spy.unregister()


@pytest.fixture(scope="function")
def empty_result_spy(ctx):
    spy = (
        c3.TestApi.spyOn(ctx, "Genai.Retriever.Dense.Engine", "resultsForPassageIds")
        .returnValue(c3.Genai.Retriever.SimilaritySearchResult.array())
        .register()
    )
    yield spy
    spy.unregister()


@pytest.fixture
def common_fields():
    search_query = c3.Genai.Query.fromString("What is an ML Pipeline?")
    genai_result = c3.Genai.Query.Result.make({"searchQuery": search_query}).upsert().get()
    common_spec = {
        "genai_result": genai_result,
        "do_extraction": False,
        "suppress_source_relations": False,
        "attribution_func": None,
        "batch_translation_func": None,
        "create_passage_relations_func": lambda x, y, z: x,
    }

    return {"genai_result": genai_result, "common_spec": common_spec}


def test_replaces_refs_except_missing_ref(common_fields, retriever, orig_answer, source_documents, empty_result_spy):
    retriever = c3.Genai.Retriever(id=retriever.id)
    pipeline_params = {
        "answer": orig_answer,
        "retrieved_docs": source_documents,
        "source_documents": [],
        "context_docs": [],
        "retriever_tags": [],
        "question_answering_prompt_template": "",
    }
    pipeline_output = PipelineOutput(pipeline_params)
    result_processor_spec = ResultProcessorSpec(**common_fields["common_spec"])
    result_processor = ResultProcessor(result_processor_spec, retriever, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)
    assert updated_pipeline_output.answer != orig_answer
    assert updated_pipeline_output.answer == "ref 1 is [#1] and ref 2 is [#2] and ref 3 is"


@pytest.mark.parametrize("pass_retriever_base_type", [True, False])
def test_replaces_refs(pass_retriever_base_type, common_fields, retriever, orig_answer, source_documents, result_spy):
    if pass_retriever_base_type:
        # test that ResultProcessor properly gets the subtype instance instead of trying to use the base type directly
        retriever = c3.Genai.Retriever(id=retriever.id)
    # Test with only `source_documents` or both `retrieved_docs` and `source_documents` populated
    for docs_field in ["source_documents", "retrieved_docs"]:
        pipeline_params = {
            "answer": orig_answer,
            "retrieved_docs": source_documents,
            "source_documents": [],
            "context_docs": [],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
        pipeline_params[docs_field] = source_documents
        pipeline_output = PipelineOutput(pipeline_params)
        result_processor_spec = ResultProcessorSpec(**common_fields["common_spec"])
        result_processor = ResultProcessor(result_processor_spec, retriever, [])
        updated_pipeline_output = result_processor.process_results(pipeline_output)
        assert updated_pipeline_output.answer != orig_answer
        assert updated_pipeline_output.answer == "ref 1 is [#1] and ref 2 is [#2] and ref 3 is [#3]"


def test_leave_compound_refs(common_fields):
    pipeline_output = PipelineOutput(
        {
            "answer": "First and second reference [#1, #2]. Third reference [#3].",
            "retrieved_docs": [],
            "context_docs": [],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
    )

    result_processor_spec = ResultProcessorSpec(**common_fields["common_spec"])
    result_processor = ResultProcessor(result_processor_spec, None, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)
    assert updated_pipeline_output.answer == pipeline_output.answer


def test_remove_unreplaced_refs(common_fields, source_documents):
    pipeline_output = PipelineOutput(
        {
            "answer": "First and second reference [#1, #2]. Unreplaced [53044095-6f13-41a7-a36e-efafb48b46c3#556]",
            "retrieved_docs": source_documents,
            "context_docs": [],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
    )

    result_processor_spec = ResultProcessorSpec(**common_fields["common_spec"])
    result_processor = ResultProcessor(result_processor_spec, None, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)
    assert updated_pipeline_output.answer == "First and second reference [#1, #2]. Unreplaced"


def test_add_extracts_and_sources(common_fields, source_documents):
    pipeline_output = PipelineOutput(
        {
            "answer": "This is a test answer.",
            "retrieved_docs": [],
            "source_documents": source_documents,
            "filtered_extracts": {"source 1": "extract 1", "source 2": "extract 2"},
            "context_docs": ["source 1", "source 3"],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
    )

    result_processor_spec = ResultProcessorSpec(
        **{**common_fields["common_spec"], "do_extraction": True},
    )
    result_processor = ResultProcessor(result_processor_spec, None, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)
    assert updated_pipeline_output.filtered_extracts == {"source 1": "extract 1"}


def test_no_extracts_or_sources(common_fields, source_documents):
    pipeline_output = PipelineOutput(
        {
            "answer": "This is a test answer.",
            "retrieved_docs": [],
            "source_documents": source_documents,
            "filtered_extracts": {},
            "context_docs": [],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
    )

    result_processor_spec = ResultProcessorSpec(
        **{**common_fields["common_spec"], "do_extraction": True},
    )
    result_processor = ResultProcessor(result_processor_spec, None, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)
    assert updated_pipeline_output.filtered_extracts == {}


def test_run_batch_translation(common_fields):
    TRANSLATED_ANSWER = "Translated answer."
    TRANSLATED_RATIONALE = "Translated rationale."

    def dummy_translate(content, lang):
        return (TRANSLATED_ANSWER, TRANSLATED_RATIONALE, "")

    pipeline_output = PipelineOutput(
        {
            "answer": "Untranslated answer.",
            "rationale": "Untranslated rationale.",
            "retrieved_docs": [],
            "context_docs": [],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
    )

    result_processor_spec = ResultProcessorSpec(
        **{**common_fields["common_spec"], "batch_translation_func": dummy_translate},
    )
    result_processor = ResultProcessor(result_processor_spec, None, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)

    assert updated_pipeline_output.answer == TRANSLATED_ANSWER
    assert updated_pipeline_output.rationale == TRANSLATED_RATIONALE


def test_rea_source_relations(common_fields, source_documents):
    pipeline_output = PipelineOutput(
        {
            "answer": "Unreplaced [53044095-6f13-41a7-a36e-efafb48b46c3#1]",
            "source_documents": source_documents,
            "filtered_extracts": {
                "53044095-6f13-41a7-a36e-efafb48b46c3#1": {"text": "extract 1"},
                "53044095-6f13-41a7-a36e-efafb48b46c3#2": {
                    "text": "extract 2",
                },
            },
            "retrieved_docs": source_documents,
            "context_docs": ["53044095-6f13-41a7-a36e-efafb48b46c3#1", "53044095-6f13-41a7-a36e-efafb48b46c3#2"],
            "retriever_tags": [],
            "question_answering_prompt_template": "",
        }
    )

    result_processor_spec = ResultProcessorSpec(**common_fields["common_spec"])
    result_processor_spec.do_extraction = True
    result_processor = ResultProcessor(result_processor_spec, None, [])
    updated_pipeline_output = result_processor.process_results(pipeline_output)
    assert len(updated_pipeline_output.source_relations) == 1
