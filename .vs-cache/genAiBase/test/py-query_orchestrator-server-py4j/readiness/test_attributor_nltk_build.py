# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import nltk
import shutil
import os

FILE_NAME = "test_attributor_nltk_build.py"
logger = c3.Logger.for_(FILE_NAME.split(".")[0])

####################################################################
# Tests
####################################################################


@pytest.fixture(scope="module", autouse=True)
def hf_model():
    c3.TestApi.installHuggingfaceModels(["google-bert/bert-base-uncased"])


def test_attributor_nltk_build():
    """
    Test whether the attributor NLTK build process has the expected behavior
    1. If no nltk_sentence_tokenizer_model_file_path specified, try to download from public URL
        using "nltk.download('punkt_tab')"
    2. If specified, try to load the model from this file path
    3. If unable to load from file or download from public URL, raise an error
    """

    def _remove_nltk_data():
        """
        Remove all NLTK data
        """
        for path in nltk.data.path:  # Remove all nltk data
            try:
                shutil.rmtree(path)
            except:
                continue

    def _test_no_nltk_downloads():
        """
        Test if there's no NLTK downloads
        """
        for path in nltk.data.path:
            if os.path.exists(path):
                return False
        return True

    READenseRetrieverSpec = c3.Genai.PyUtil.importResourceFile(
        "/genAiBase/resource/code/c3genai/pipelines/retrieval/rea_dense_retriever.py",
        ["READenseRetrieverSpec"],
    )
    AttributorSpec, Attributor = c3.Genai.PyUtil.importResourceFile(
        "/genAiBase/resource/code/c3genai/tools/attributor.py",
        ["AttributorSpec", "Attributor"],
    )

    retriever_spec = READenseRetrieverSpec(
        num_retrieved_passages=1,
        embedder_spec=None,
        dense_retriever_name=None,
        docstores={},
    )
    retriever_spec.data_dirs = {}
    attributor_spec = AttributorSpec(retriever_spec=retriever_spec)

    _remove_nltk_data()

    # Test if the download works as expected without file path specified
    attributor_spec.nltk_sentence_tokenizer_model_file_path = None
    attributor = Attributor(attributor_spec=attributor_spec)
    try:
        attributor.build()
    except Exception as e:
        raise Exception(f"Building attributor with public URL for NLTK failed: {e}")

    tokenized_result = attributor.sent_tokenizer("Test the sentence tokenizer. Test. Test, Test.")
    assert tokenized_result == [
        "Test the sentence tokenizer.",
        "Test.",
        "Test, Test.",
    ], "NLTK not loaded properly with public URL load"

    assert not _test_no_nltk_downloads(), "NLTK files not properly downloaded from public URL."

    # Test if a bad URL raises an exception
    _remove_nltk_data()

    attributor_spec.nltk_sentence_tokenizer_model_file_path = "a/path/that/does/not/exists.pickle"
    attributor = Attributor(attributor_spec=attributor_spec)
    try:
        attributor.build()
        raise Exception("Building attributor with an invalid URL is successful, but it should fail.")
    except:
        pass

    assert (
        _test_no_nltk_downloads()
    ), "NLTK should be loaded from file system, but a download from public URL is detected"

    # Test if a good URL loads the file successfully
    _remove_nltk_data()
    attributor_spec.nltk_sentence_tokenizer_model_file_path = (
        "gcs://c3--datasets/genai/nltk_data/tokenizers/punkt/PY3/english.pickle"
    )
    attributor = Attributor(attributor_spec=attributor_spec)
    try:
        attributor.build()
    except:
        raise Exception(
            f"Building attributor with a valid URL for NLTK failed. The valid URL in test: {attributor_spec.nltk_sentence_tokenizer_model_file_path}"
        )

    assert _test_no_nltk_downloads(), "NLTK should be loaded from c3 file system and not downloaded by the package"

    tokenized_result = attributor.sent_tokenizer("Test the sentence tokenizer. Test. Test, Test.")
    assert tokenized_result == [
        "Test the sentence tokenizer.",
        "Test.",
        "Test, Test.",
    ], "NLTK not loaded properly with local URL load"

    # Test if Genai.App.AirGapConfig is used correctly
    _remove_nltk_data()
    c3.Genai.App.AirGapConfig.inst().setConfigValues(
        {
            "attributorTokenizerPath": "gcs://c3--datasets/genai/airgap/models/bert-base-uncased.zip",
            "nltkSentenceTokenizerModelFilePath": "gcs://c3--datasets/genai/airgap/punkt/PY3/english.pickle",
            "msmarcoDistilbertBaseTasBFilePath": "gcs://c3--datasets/genai/airgap/models/msmarco-distilbert-base-tas-b.zip",
        }
    )
    # TODO GEN-9674 Refactor this test so as to read directly from config
    attributor_spec.nltk_sentence_tokenizer_model_file_path = "gcs://c3--datasets/genai/airgap/punkt/PY3/english.pickle"
    attributor_spec.attributor_tokenizer_file_path = "gcs://c3--datasets/genai/airgap/models/bert-base-uncased.zip"
    attributor = Attributor(attributor_spec=attributor_spec)
    try:
        attributor.build()
    except:
        raise Exception(f"Building attributor with Genai.App.AirGapConfig")

    assert _test_no_nltk_downloads(), "NLTK should be loaded from c3 file system and not downloaded by the package"

    tokenized_result = attributor.sent_tokenizer("Test the sentence tokenizer. Test. Test, Test.")
    assert tokenized_result == [
        "Test the sentence tokenizer.",
        "Test.",
        "Test, Test.",
    ], "NLTK not loaded properly with local URL load"

    separated_sentences, sentences_locations = attributor._separate_sentences_with_location(
        "Test the sentence tokenizer. Test. Test, Test."
    )
    assert separated_sentences == [
        "Test the sentence tokenizer.",
        "Test.",
        "Test, Test.",
    ], "NLTK not loaded properly with local URL load during _separate_sentences_with_location. Incorrect separated_sentences."

    assert sentences_locations == [
        (0, 28),
        (29, 34),
        (35, 46),
    ], "NLTK not loaded properly with local URL load during _separate_sentences_with_location. Incorrect sentences_locations."

    assert (
        _test_no_nltk_downloads()
    ), "NLTK should be loaded from c3 file system and not downloaded by the package during _separate_sentences_with_location."
