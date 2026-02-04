# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

from PIL import Image

import pandas as pd
import pytest

partition_and_chunk_html = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/unstructured/partition/multimodal.py",
    ["partition_and_chunk_html"],
)


@pytest.fixture(scope="module", autouse=True)
def initialize():
    c3.Genai.PyUtil.terminateAllEngines()


def test_partition_and_chunk_html():
    html = c3.Pkg.file("meta://genAiBase/test/resource/chunker/htmlChunker/PyTorch.html").readString()

    chunks, _ = partition_and_chunk_html(
        html,
        verbalization_spec={
            "table_verbalizer_cfg": "qa_inference_config_aws_claude_v3_5_sonnet",
            "image_verbalizer_cfg": "image_verbalization_gpt4_vision",
            "image_verbalizer_prompt": "Verbalize the given input image. Return the response as string.",
        },
    )

    assert len(chunks) > 3

    image_chunks = [chunk for chunk in chunks if chunk.category == "Image"]
    assert len(image_chunks) == 2
    assert isinstance(image_chunks[0].metadata.native, Image.Image)
    assert "logo" in image_chunks[0].metadata.verbalization.lower()
    assert isinstance(image_chunks[1].metadata.native, Image.Image)
    assert (
        "code" in image_chunks[1].metadata.verbalization.lower()
        or "programming" in image_chunks[1].metadata.verbalization.lower()
        or "graph" in image_chunks[1].metadata.verbalization.lower()
    )

    table_chunks = [chunk for chunk in chunks if chunk.category == "Table"]
    assert len(table_chunks) == 1
    assert isinstance(table_chunks[0].metadata.native, pd.DataFrame)
    assert len(table_chunks[0].metadata.serialized) > 0
    assert "column" in table_chunks[0].metadata.verbalization.lower()

    assert all(len(chunk.text) > 0 for chunk in chunks if chunk.category not in ["Image", "Table"])
