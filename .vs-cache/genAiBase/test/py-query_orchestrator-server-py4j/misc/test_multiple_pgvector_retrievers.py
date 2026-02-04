# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

FILE_NAME = "test_multiple_pgvector_retrievers.py"

logger = c3.log()


# pylint: disable=redefined-outer-name, unused-argument, too-many-arguments
@pytest.fixture(scope="module", autouse=True)
def setup_hf_models():
    # Ensure that other py-query_orchestrator engines are not running
    c3.Genai.PyUtil.terminateAllEngines()
    hf_models = [
        "sentence-transformers/facebook-dpr-ctx_encoder-multiset-base",
        "sentence-transformers/facebook-dpr-question_encoder-multiset-base",
        "sentence-transformers/msmarco-distilbert-base-tas-b",
    ]
    c3.TestApi.installHuggingfaceModels(hf_models)


@pytest.fixture(scope="module", autouse=True)
def tasb_retriever(ctx, setup_hf_models):
    retriever = c3.Genai.Retriever.PgVector(name=FILE_NAME + "_tasb", embedderModelName="tas-b")
    retriever = c3.TestApi.upsertEntity(ctx, "Genai.Retriever.PgVector", retriever).get()
    retriever.initialize()
    yield retriever
    retriever.purgeIndex(True)


@pytest.fixture(scope="module", autouse=True)
def dpr_retriever(ctx, setup_hf_models):
    retriever = c3.Genai.Retriever.PgVector(name=FILE_NAME + "_dpr", embedderModelName="dpr")
    retriever = c3.TestApi.upsertEntity(ctx, "Genai.Retriever.PgVector", retriever)
    retriever.initialize()
    yield retriever
    retriever.purgeIndex(True)


@pytest.fixture(scope="module", autouse=True)
def tasb_retriever_2(ctx, setup_hf_models):
    retriever = c3.Genai.Retriever.PgVector(name=FILE_NAME + "_tasb_2", embedderModelName="tas-b")
    retriever = c3.TestApi.upsertEntity(ctx, "Genai.Retriever.PgVector", retriever)
    retriever.initialize()
    yield retriever
    retriever.purgeIndex(True)
    retriever.remove()


@pytest.fixture(scope="module", autouse=True)
def sources(ctx):
    sources = c3.TestApi.setupRetrieverTestSources(ctx, FILE_NAME, True)
    yield sources
    c3.TestApi.teardownRetrieverTestSources(ctx, sources)


@pytest.fixture(scope="module", autouse=True)
def num_passages_per_source(sources):
    yield [len(s.readPassages()) for s in sources.sourceFiles]


@pytest.fixture(scope="module", autouse=True)
def tag(sources):
    tag = sources.sourceFiles[0].addTag(FILE_NAME + "-tag")
    yield tag
    tag.remove()


@pytest.fixture(scope="module", autouse=True)
def test_queries(tag, sources):
    queries = []
    for source in sources.sourceFiles:
        source_passages = source.readPassages()
        passage_content = source_passages[int(len(source_passages) / 2)].contentStr
        queries.append(
            {
                "question": c3.Genai.Query.fromString(" ".join(passage_content.split()[:20])),
                "source": source,
                "passageContent": passage_content[:100],
            }
        )
    yield queries


def _check_searchability(searchability_arr, test_queries):
    for retriever, searchable_indices in searchability_arr:
        searchable_queries = [test_queries[i] for i in searchable_indices]
        unsearchable_queries = [test_queries[i] for i in range(len(test_queries)) if i not in searchable_indices]
        errors = c3.TestApi.checkSearchability(retriever, searchable_queries, unsearchable_queries, True)
        assert errors == [], f"There should be no errors in the searchability test for retriever {retriever.name}"


def test_index_into_first_retriever(
    ctx, tasb_retriever, dpr_retriever, tasb_retriever_2, sources, test_queries, num_passages_per_source
):
    obj_list = tasb_retriever.indexFiles([sources.sourceFiles[0]])

    c3.TestApi.waitForSetup(ctx, ["ActionQueue", "CalcFieldsQueue"], 1, 180)
    errors = c3.TestApi.checkIndexResult(tasb_retriever, num_passages_per_source[0], obj_list, 1, 0, 1, True)
    assert errors == [], "There should be no errors in the index result"
    errors = c3.TestApi.testSearch(tasb_retriever, [test_queries[0]], [2], True)
    assert errors == [], "There should be no errors in the search result"

    assert dpr_retriever.passageCount() == 0, "dpr_retriever should not have any passages"
    assert tasb_retriever_2.passageCount() == 0, "tasb_retriever_2 should not have any passages"
    errors = c3.TestApi.testSearch(dpr_retriever, [test_queries[0]], [0], True)
    assert errors == [], "There should be no errors in the search result for dpr_retriever"
    errors = c3.TestApi.testSearch(tasb_retriever_2, [test_queries[0]], [0], True)
    assert errors == [], "There should be no errors in the search result for tasb_retriever_2"


def test_index_into_all_retrievers(
    ctx, tasb_retriever, dpr_retriever, tasb_retriever_2, sources, test_queries, num_passages_per_source
):
    for i, retriever in enumerate([dpr_retriever, tasb_retriever_2]):
        idx = i + 1  # skip the file already indexed into tasb_retriever
        obj_list = retriever.indexFiles([sources.sourceFiles[idx]])

        c3.TestApi.waitForSetup(ctx, ["ActionQueue", "CalcFieldsQueue"], 1, 180)
        errors = c3.TestApi.checkIndexResult(retriever, num_passages_per_source[idx], obj_list, 1, 0, 1, True)
        assert errors == [], f"There should be no errors in the index result for retriever {retriever.name}"

    # index another passage into the first retriever
    obj_list = tasb_retriever.indexFiles([sources.sourceFiles[3]])
    c3.TestApi.waitForSetup(ctx, ["ActionQueue", "CalcFieldsQueue"], 1, 180)
    errors = c3.TestApi.checkIndexResult(
        tasb_retriever, num_passages_per_source[0] + num_passages_per_source[3], obj_list, 1, 0, 2, True
    )
    assert errors == [], "There should be no errors in the index result for tasb_retriever"

    searchability_arr = [
        (tasb_retriever, [0, 3]),
        (dpr_retriever, [1]),
        (tasb_retriever_2, [2]),
    ]
    _check_searchability(searchability_arr, test_queries)


def test_index_first_file_into_second_retriever(
    ctx, tasb_retriever, dpr_retriever, tasb_retriever_2, sources, test_queries, num_passages_per_source
):
    assert (
        tasb_retriever_2.passageCount() == num_passages_per_source[2]
    ), "tasb_retriever should have already indexed file 2"
    obj_list = tasb_retriever_2.indexFiles([sources.sourceFiles[0]])

    c3.TestApi.waitForSetup(ctx, ["ActionQueue", "CalcFieldsQueue"], 1, 180)
    errors = c3.TestApi.checkIndexResult(
        tasb_retriever_2,
        num_passages_per_source[0] + num_passages_per_source[2],
        obj_list,
        1,
        0,
        2,
        True,
    )
    assert errors == [], "There should be no errors in the index result for tasb_retriever_2"

    searchability_arr = [
        (tasb_retriever, [0, 3]),
        (dpr_retriever, [1]),
        (tasb_retriever_2, [0, 2]),
    ]
    _check_searchability(searchability_arr, test_queries)


def test_reasonable_latency_switching_retrievers(tasb_retriever, dpr_retriever, tasb_retriever_2, test_queries):
    import time

    # most failures seem to be due to intermittent/one off 'slow' queries (1.5-2.5s).
    # Since these seem to be somewhat random and likely due to pg load, we give a few chances to pass
    avg_time_limit = 1
    max_time_limit = 2
    for n in range(3):
        times = []
        queries = []
        for test_query in test_queries:
            for retriever in [tasb_retriever, dpr_retriever, tasb_retriever_2]:
                start = time.time()
                retriever.similaritySearch(
                    c3.Genai.Retriever.SearchSpec.make(
                        {
                            "searchQuery": test_query["question"],
                            "k": 2,
                        }
                    )
                )
                queries.append(f"{retriever.name} - '{test_query['question'].standaloneQuery[:20]}...'")
                times.append(time.time() - start)
        max_time = max(times)
        avg_time = sum(times) / len(times)
        if max_time < max_time_limit and avg_time < avg_time_limit:
            # passed
            break
        else:
            msg = f"""Attempt {n + 1} failed.
                Max time < {max_time_limit}s {max_time}.
                Avg time < {avg_time_limit}s: {avg_time}.
                All times: {dict(zip(times, queries))}
                """
            if n == 2:
                pytest.fail(msg)
            else:
                logger.warn(msg)


def test_purge_index(tasb_retriever, dpr_retriever, tasb_retriever_2):
    retrievers = [tasb_retriever, dpr_retriever, tasb_retriever_2]
    initial_passage_counts = [r.passageCount() for r in retrievers]
    for p in initial_passage_counts:
        assert p > 0, "Retrievers should have been indexed into before this test"
    for idx, retriever in enumerate(retrievers):
        retriever.purgeIndex(True)
        assert retriever.passageCount() == 0, "Purged retriever should have no passages"
        for i in range(idx + 1, len(retrievers)):
            assert initial_passage_counts[i] == retrievers[i].passageCount(), "Other retrievers should not be affected"
