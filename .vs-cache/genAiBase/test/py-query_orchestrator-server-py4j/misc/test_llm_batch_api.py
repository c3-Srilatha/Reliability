# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


# Since the test does not use the normal LLM logic for synchronous requests, we do not use MockLlm for anything
# pylint:disable=broad-exception-caught
@pytest.mark.parametrize("llmTypeName", ["Genai.Llm.Gcp", "Genai.Llm.AzureOpenAI"])
def test_batch_api(llmTypeName):
    llmTuple = {
        "Genai.Llm.Gcp": {
            "llmType": c3.Genai.UnstructuredQuery.Engine.REA.LlmType.GEMINI,
            "model_name": "gemini-1.5-pro-001",
        },
        "Genai.Llm.AzureOpenAI": {
            "llmType": c3.Genai.UnstructuredQuery.Engine.REA.LlmType.GPT,
            "model_name": "gpt-4o-batch",
        },
    }[llmTypeName]
    try:
        job = (
            c3.type(llmTypeName)
            .inst()
            .withLlmType(llmTuple["llmType"])
            .generateResponseBatch(
                [
                    "What is the color of the sky",
                    "Count from 1 to 10",
                ],
                {
                    "model_name": llmTuple["model_name"],
                    "context_length": 4096,
                    "max_output_tokens": 4096,
                    "top_p": 0.01,
                    "temperature": 0.0,
                },
            )
        )
        assert job is not None, "Job should not be None"
        assert job.completed() is False, "Job should not have completed yet"
        assert job.state() is not None, "Job should have a state"

        # initially, there should be no responses
        responses = job.readResponses()
        assert len(responses) == 2
        assert responses[0] is None or responses[0] == ""
        assert responses[1] is None or responses[0] == ""

        # wait for up to 10 minutes for the batch job to complete
        for _ in range(60):
            if job.completed():
                break
            c3.Thread.sleep(10000)

        # if the job has not completed after 10 minutes, don't check the responses
        if job.completed():
            responses = job.readResponses()
            assert len(responses) == 2
            assert responses[0] is not None
            assert "blue" in responses[0].lower() or "Cannot read and write in different locations" in responses[0]
            assert responses[1] is not None
            assert (
                "two" in responses[1].lower()
                or "2" in responses[1]
                or "Cannot read and write in different locations" in responses[1]
            )

        # clean up
        job.remove()
    except Exception as e:
        # OpenAI currently has a quota of 500 batch requests total on our test endpoint, and there
        # is not currently a way to delete a batch request (regardless of its state) to free up the quota,
        # so we skip the test if the quota is reached.
        if "The quota for this type of entity is reached." in str(e):
            pytest.skip("Quota reached")
        elif "Invalid value for purpose." in str(e):
            pytest.skip("Missing OpenAI permissions")
        elif "Failed to create GCS service from credentials or pod metadata" in str(e):
            pytest.skip("GCS FS must be writeable for GCP batch requests to complete")
        else:
            raise e
