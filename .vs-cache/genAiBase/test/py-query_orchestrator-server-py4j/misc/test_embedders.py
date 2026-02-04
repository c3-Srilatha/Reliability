# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


# pylint: disable=redefined-outer-name
@pytest.fixture(scope="function")
def text():
    return "I am a test passage"


def test_hf_embedder(text):
    e5_embedder = c3.Genai.Embedder.getEmbedder(
        {
            "embedderModelName": "intfloat/e5-large-v2",
            "embedderType": c3.GenaiCore.Embedder.Hf,
        }
    )
    e5_embedding = e5_embedder.encode(text)
    assert e5_embedding is not None, "E5 embedding should not be None"

    mxbai_embedder = c3.Genai.Embedder.getEmbedder(
        {
            "embedderModelName": "mixedbread-ai/mxbai-embed-large-v1",
            "embedderType": c3.GenaiCore.Embedder.Hf,
            "embedderEngineDeploySpec": {"name": "mixedbread-ai/mxbai-embed-large-v1"},
        }
    )
    mxbai_embedding = mxbai_embedder.encode(text)
    assert mxbai_embedding is not None, "MXBAI embedding should not be None"

    assert mxbai_embedding != e5_embedding, "MXBAI and E5 embeddings should not be the same"


@pytest.mark.parametrize(
    "embedding_tuple",
    [
        # GenaiCore.Llm.AzureOpenAi requires using deployment name as the model name
        (
            c3.GenaiCore.Llm.AzureOpenAi,
            None,
            [
                "genai-c3-c3-eastus-text-embedding-3-small-globalstandard-1",
                "genai-c3-c3-eastus-text-embedding-3-large-globalstandard-1",
            ],
        ),
        (c3.GenaiCore.Llm.Bedrock, "Genai.Llm.AwsBedrock.Config", ["amazon.titan-embed-text-v2:0"]),
        (c3.GenaiCore.Llm.VertexAi, "Genai.Llm.Gcp.Config", ["text-embedding-004", "text-embedding-005"]),
    ],
)
def test_llm_embedder(text, embedding_tuple):
    provider_type = embedding_tuple[0]
    embedding = None
    previous_embedding = None
    previous_model_name = None
    auth_name = embedding_tuple[1]
    for model_name in embedding_tuple[2]:
        # The configuration for GenaiCore.Llm.Embedding.Client on genai.c3ci.cloud requires using one of the
        # seeded CLUSTER-level configs in order to access the Embedding API, instead of the App-specific
        # credentials used for GenaiCore.Llm.Completion.Client
        if provider_type == c3.GenaiCore.Llm.AzureOpenAi:
            auth_name = model_name

        embedder = c3.Genai.Embedder.getEmbedder(
            {
                "embedderType": c3.GenaiCore.Embedder.Llm,
                "providerType": provider_type,
                "embedderModelName": model_name,
                "authName": auth_name,
            }
        )
        embedding = embedder.encode(text)
        assert embedding is not None, f"{provider_type} embedding should not be None"
        assert len(embedding) > 0, f"{provider_type} embedding should not be empty"
        assert (
            embedding != previous_embedding
        ), f"{provider_type} embedding for {model_name} should not be the same as for {previous_model_name}"
        previous_embedding = embedding
        previous_model_name = model_name
