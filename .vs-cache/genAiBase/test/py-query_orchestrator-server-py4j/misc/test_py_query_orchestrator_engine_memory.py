# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=unused-argument,redefine-outer-name
import pytest


def _memory_lambda(engine):
    import tracemalloc
    import resource

    def _initialize():
        tracemalloc.start()
        execute_spec = c3.Genai.Query.ExecuteSpec(agent="default")
        query_result = (
            c3.Genai.Query.Result(
                id="test_py_query_orchestrator_engine_memory",
                searchQuery=c3.Genai.Query.fromString(
                    "Hello",
                ).withExecuteSpec(execute_spec),
            )
            .upsert()
            .get()
        )
        engine.query(query_result)
        rss_memory = round(resource.getrusage(resource.RUSAGE_SELF).ru_maxrss / 1024)
        query_result.remove()
        tracemalloc.stop()
        return rss_memory

    return _initialize()


def test_memory_consumption():
    c3.Genai.PyUtil.terminateAllEngines()
    engine = c3.Genai.Agent.QueryOrchestrator.inst()
    lambda_ = c3.Lambda.fromPyFunc(_memory_lambda, actionRequirement="py-query_orchestrator-server-py4j")
    rss_memory = engine.call(lambda_)
    assert rss_memory < 1000, f"Memory consumption is too high: {rss_memory} MB"
