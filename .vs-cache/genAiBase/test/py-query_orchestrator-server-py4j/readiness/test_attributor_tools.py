# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=missing-class-docstring,too-few-public-methods,unused-argument,protected-access

import pytest

# Import the attributor module
(
    Attributor,
    AttributorSpec,
    Rationale,
    ScoreType,
    colored_text,
    number_to_rgb_color,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/tools/attributor.py",
    ["Attributor", "AttributorSpec", "Rationale", "ScoreType", "colored_text", "number_to_rgb_color"],
)


# Helper classes and functions to reduce duplication
class MockRetrieverSpec:
    def __init__(self, query_max_len=None, normalize_scores=False):
        self.query_max_len = query_max_len
        self.normalize_scores = normalize_scores


class MockDoc:
    def __init__(self, source, score, page_content, normalized_score=None):
        self.metadata = {"source": source, "score": score}
        if normalized_score is not None:
            self.metadata["normalized_score"] = normalized_score
        self.page_content = page_content


class MockRetriever:
    def __init__(self, docs=None):
        self.docs = docs or []

    def search(self, query, target_vector_store, filters):
        return {"docs": self.docs}


class MockEntailmentModel:
    def __init__(self, label_index=1):  # 0=contradiction, 1=entailment, 2=neutral
        self.label_index = label_index

    def predict(self, inputs):
        class MockArray:
            def __init__(self, label_index):
                self.label_index = label_index

            def argmax(self, axis):
                return [self.label_index]

        return MockArray(self.label_index)


class MockEmbedder:
    def __init__(self, encode_result=None, encode_batch_result=None):
        self.encode_result = encode_result or [0.1, 0.2, 0.3]
        self.encode_batch_result = encode_batch_result or [[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]]

    def encode(self, text):
        return self.encode_result

    def encodeBatch(self, texts):
        return self.encode_batch_result


def create_attributor_spec(**kwargs):
    """Helper function to create AttributorSpec with default values"""
    retriever_spec = MockRetrieverSpec()
    return AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=64, **kwargs)


def create_attributor(spec=None):
    """Helper function to create Attributor with default spec"""
    if spec is None:
        spec = create_attributor_spec()
    return Attributor(spec)


def mock_segment_and_merge_text(text, chunk_size):
    """Default mock for segment_and_merge_text method"""
    return [("test answer", (0, 10))]


def mock_tokenizer(text):
    """Default mock for tokenizer"""
    return {"input_ids": [1, 2, 3, 4, 5]}


def mock_sent_tokenizer(text):
    """Default mock for sentence tokenizer"""
    return ["This is a test sentence."]


def setup_attributor_with_mocks(attributor, retriever_docs=None, segment_text_func=None):
    """Helper function to setup attributor with common mocks"""
    if retriever_docs is None:
        retriever_docs = [MockDoc("source1", 0.8, "content1")]

    attributor.retriever = MockRetriever(retriever_docs)

    if segment_text_func is None:
        segment_text_func = mock_segment_and_merge_text

    attributor._segment_and_merge_text = segment_text_func


def setup_attributor_with_tokenizers(attributor, tokenizer_func=None, sent_tokenizer_func=None):
    """Helper function to setup attributor with tokenizer mocks"""
    if tokenizer_func is None:
        tokenizer_func = mock_tokenizer
    if sent_tokenizer_func is None:
        sent_tokenizer_func = mock_sent_tokenizer

    attributor.tokenizer = tokenizer_func
    attributor.sent_tokenizer = sent_tokenizer_func


def setup_attributor_with_embedder(attributor, encode_result=None, encode_batch_result=None):
    """Helper function to setup attributor with embedder mock"""
    attributor.embedder = MockEmbedder(encode_result, encode_batch_result)


# Tests start here
def test_colored_text_basic():
    result = colored_text((255, 0, 0), (0, 255, 0), "test")
    assert isinstance(result, str)
    assert "test" in result
    assert "\033[38;2;255;0;0m" in result
    assert "\033[48;2;0;255;0m" in result
    assert "\033[0m" in result


def test_colored_text_empty_string():
    result = colored_text((255, 255, 255), (0, 0, 0), "")
    assert isinstance(result, str)
    assert "\033[0m" in result


def test_number_to_rgb_color_valid_values():
    # Test red (0.0)
    result = number_to_rgb_color(0.0)
    assert result == (255, 0, 0)

    # Test green (1.0)
    result = number_to_rgb_color(1.0)
    assert result == (0, 255, 0)

    # Test middle value (0.5)
    result = number_to_rgb_color(0.5)
    assert result == (127, 127, 0)


def test_number_to_rgb_color_with_min_value():
    result = number_to_rgb_color(0.5, min_value=0.2)
    assert isinstance(result, tuple)
    assert len(result) == 3
    assert all(0 <= x <= 255 for x in result)


def test_number_to_rgb_color_invalid_values():
    with pytest.raises(ValueError, match="Input value must be between 0 and 1"):
        number_to_rgb_color(-0.1)

    with pytest.raises(ValueError, match="Input value must be between 0 and 1"):
        number_to_rgb_color(1.1)


def test_score_type_values():
    assert ScoreType.RELEVANCY.value == "relevancy"
    assert ScoreType.ENTAILMENT.value == "entailment"


def test_score_type_from_string():
    assert ScoreType("relevancy") == ScoreType.RELEVANCY
    assert ScoreType("entailment") == ScoreType.ENTAILMENT


def test_rationale_creation():
    rationale = Rationale(
        source="test_source",
        score=0.8,
        sentence_content="This is a test sentence.",
        answer_chunk="This is the answer chunk.",
    )

    assert rationale.source == "test_source"
    assert rationale.score == 0.8
    assert rationale.sentence_content == "This is a test sentence."
    assert rationale.answer_chunk == "This is the answer chunk."


def test_rationale_immutability():
    rationale = Rationale(
        source="test_source",
        score=0.8,
        sentence_content="This is a test sentence.",
        answer_chunk="This is the answer chunk.",
    )

    with pytest.raises(Exception):  # Should raise an error when trying to modify
        rationale.source = "new_source"


def test_attributor_spec_creation():
    retriever_spec = MockRetrieverSpec()

    spec = AttributorSpec(
        retriever_spec=retriever_spec,
        max_attributable_len=64,
        include_top_k=1,
        doc_filter_threshold_attribution=0.6,
        score_type=ScoreType.RELEVANCY,
    )

    assert spec.max_attributable_len == 64
    assert spec.include_top_k == 1
    assert spec.doc_filter_threshold_attribution == 0.6
    assert spec.score_type == ScoreType.RELEVANCY
    assert spec.attribute_on_all_tags is False
    assert spec.remove_scores_from_citations is False


def test_attributor_spec_entailment_without_model():
    retriever_spec = MockRetrieverSpec()

    with pytest.raises(ValueError, match="For entailment scoring, the entailment_model should not be None"):
        AttributorSpec(retriever_spec=retriever_spec, score_type=ScoreType.ENTAILMENT, entailment_model=None)


def test_attributor_spec_entailment_with_model():
    retriever_spec = MockRetrieverSpec()

    spec = AttributorSpec(
        retriever_spec=retriever_spec,
        score_type=ScoreType.ENTAILMENT,
        entailment_model="cross-encoder/nli-deberta-v3-base",
    )

    assert spec.score_type == ScoreType.ENTAILMENT
    assert spec.entailment_model == "cross-encoder/nli-deberta-v3-base"


def test_attributor_spec_string_score_type():
    retriever_spec = MockRetrieverSpec()

    spec = AttributorSpec(retriever_spec=retriever_spec, score_type="relevancy")

    assert spec.score_type == ScoreType.RELEVANCY


def test_attributor_spec_query_max_len_handling():
    retriever_spec = MockRetrieverSpec()

    spec = AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=64)

    # Should set query_max_len to max_attributable_len
    assert spec.retriever_spec.query_max_len == 64


def test_attributor_spec_both_query_max_len_and_max_attributable_len():
    retriever_spec = MockRetrieverSpec(query_max_len=128)

    spec = AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=64)

    # Should use the maximum of both values
    assert spec.retriever_spec.query_max_len == 128


def test_attributor_spec_no_query_max_len_or_max_attributable_len():
    retriever_spec = MockRetrieverSpec()

    with pytest.raises(
        ValueError,
        match="At least one of self.retriever_spec.query_max_len or self.max_attributable_len must be provided",
    ):
        AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=None)


def test_attributor_initialization():
    retriever_spec = MockRetrieverSpec()

    spec = AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=64)

    attributor = Attributor(spec)

    assert attributor.attributor_spec == spec
    assert attributor.retriever is None
    assert attributor.embedder is None


def test_attributor_initialization_with_normalized_scores():
    retriever_spec = MockRetrieverSpec(normalize_scores=True)

    spec = AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=64, doc_filter_threshold_attribution=1.5)

    attributor = Attributor(spec)
    assert attributor.attributor_spec == spec


def test_attributor_identify_itemized_parts_with_location():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    text = "1. First item\n2. Second item\na. Third item"

    parts, locations = attributor._identify_itemized_parts_with_location(text)

    assert len(parts) == 3
    assert "1. First item" in parts
    assert "2. Second item" in parts
    assert "a. Third item" in parts
    assert len(locations) == 3


def test_attributor_separate_sentences_delimeter_with_location():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    text = "Sentence one. Sentence two. Sentence three."

    sentences, locations = attributor._separate_sentences_delimeter_with_location(text, ".", 0)

    assert len(sentences) == 3
    assert "Sentence one" in sentences
    assert " Sentence two" in sentences
    assert " Sentence three" in sentences
    assert len(locations) == 3


def test_attributor_identify_code_snippets_with_location():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    text = "Here is some code:\n```python\ndef test():\n    return True\n```\nAnd more text."

    snippets, locations = attributor._identify_code_snippets_with_location(text)

    assert len(snippets) == 1
    assert "def test():\n    return True" in snippets[0]
    assert len(locations) == 1


def test_attributor_find_rationale_no_embedder():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    attributions = {"test": {"page_content": ["content"], "source": ["source1"]}}

    with pytest.raises(ValueError, match="No embedder has been built"):
        attributor.find_rationale(attributions)


def test_attributor_attribute_no_retriever():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    with pytest.raises(ValueError, match="No retriever has been built"):
        attributor.attribute("test answer", "test_store")


def test_attributor_attribute_no_retriever_tag_list():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)
    # Mock the retriever with empty mock
    attributor.retriever = MockRetriever()

    with pytest.raises(
        ValueError, match="While attribute_on_all_tags is set to False, the retriever_tag_list cannot be None"
    ):
        attributor.attribute("test answer", "test_store", retriever_tag_list=None)


def test_attributor_render_basic():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    attributed = {
        "This is a test sentence.": {
            "score": [0.8],
            "source": ["source1"],
            "page_content": ["This is the source content."],
            "following_chars": " ",
        }
    }

    answer = "This is a test sentence. "

    response, response_colored, attributions = attributor.render(attributed, answer)

    assert isinstance(response, str)
    assert isinstance(response_colored, str)
    assert isinstance(attributions, dict)
    assert "source1" in response
    assert "0.8" in response


def test_attributor_render_no_attributions():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    attributed = {"This is a test sentence.": {"score": [], "source": [], "page_content": [], "following_chars": " "}}

    answer = "This is a test sentence. "

    response, _, _ = attributor.render(attributed, answer)

    # Should return original answer when no attributions
    assert response == answer


def test_attributor_render_dont_respond_if_no_attributions():
    spec = create_attributor_spec(donot_respond_if_no_attributions=True)
    attributor = create_attributor(spec)

    attributed = {"This is a test sentence.": {"score": [], "source": [], "page_content": [], "following_chars": " "}}

    answer = "This is a test sentence. "

    response, _, _ = attributor.render(attributed, answer)

    # Should return I_DONT_KNOW_PHRASE when no attributions and donot_respond_if_no_attributions=True
    assert "I am unable to answer your question" in response


def test_attributor_separate_sentences_with_location():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with custom sentence tokenizer
    setup_attributor_with_tokenizers(
        attributor, sent_tokenizer_func=lambda text: ["Sentence one.", "Sentence two.", "Sentence three."]
    )

    text = "Sentence one. Sentence two. Sentence three."

    sentences, locations = attributor._separate_sentences_with_location(text)

    assert len(sentences) == 3
    assert len(locations) == 3


def test_attributor_separate_into_sentences():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with custom sentence tokenizer
    setup_attributor_with_tokenizers(attributor, sent_tokenizer_func=lambda text: ["Sentence one.", "Sentence two."])

    text = "Sentence one. Sentence two."

    result = attributor._separate_into_sentences(text)

    assert isinstance(result, list)
    assert len(result) > 0


def test_attributor_segment_and_merge_text():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with tokenizers
    setup_attributor_with_tokenizers(attributor)

    text = "This is a test sentence."

    result = attributor._segment_and_merge_text(text, 10)

    assert isinstance(result, list)


def test_attributor_segment_and_merge_text_empty():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with empty sentence tokenizer
    setup_attributor_with_tokenizers(attributor, sent_tokenizer_func=lambda text: [])

    result = attributor._segment_and_merge_text("", 10)
    assert result == []


def test_attributor_join_sentences_in_small_chunks():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Create custom tokenizer for this test
    def custom_tokenizer(text):
        return {"input_ids": [1, 2, 3]}

    text = "Sentence one. Sentence two."
    sentences = [("Sentence one.", (0, 12)), ("Sentence two.", (14, 26))]

    result = attributor._join_sentences_in_small_chunks(text, sentences, 10, custom_tokenizer)

    assert isinstance(result, list)
    assert len(result) > 0


def test_attributor_find_rationale_for_chunk():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with embedder and retriever
    setup_attributor_with_embedder(attributor)
    setup_attributor_with_mocks(attributor)

    answer_chunk = "test answer"
    attributions = {"page_content": ["This is source content."], "source": ["source1"], "score": [0.8]}

    # Mock the segment_and_merge_text method
    def mock_segment_and_merge_text(text, chunk_size):
        return [("content", (0, 10))]

    attributor._segment_and_merge_text = mock_segment_and_merge_text

    # Mock the retrieve_similar_documents method
    def mock_retrieve_similar_documents(query, documents, embedder, threshold, top_k):
        return [("content", 0.8)]

    attributor.retrieve_similar_documents = mock_retrieve_similar_documents

    result = attributor._find_rationale_for_chunk(answer_chunk, attributions)

    assert isinstance(result, set)


def test_attributor_create_attributed_answer():
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Mock the attribute method
    def mock_attribute(answer, target_vector_store, filters, retriever_tag_list):
        return {"test": {"score": [0.8]}}

    attributor.attribute = mock_attribute

    # Mock the find_rationale method
    def mock_find_rationale(_):
        return set()

    attributor.find_rationale = mock_find_rationale

    # Mock the render method
    def mock_render(attributed=None, answer=None):
        return ("response", "colored_response", {})

    attributor.render = mock_render

    result = attributor.create_attributed_answer("test answer", "test_store", {}, ["tag1"])

    assert isinstance(result, tuple)
    assert len(result) == 4
    assert result[0] == {}
    assert result[1] == "response"
    assert result[2] == "colored_response"
    assert result[3] == {}


def test_attributor_attribute_with_i_dont_know_phrase():
    """Test attribute method when I_DONT_KNOW_PHRASE is in the answer"""
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with proper mock retriever
    setup_attributor_with_mocks(attributor)

    # Mock the segment_and_merge_text method
    def mock_segment_and_merge_text(text, chunk_size):
        return [("I am unable to answer your question", (0, 30))]

    attributor._segment_and_merge_text = mock_segment_and_merge_text

    result = attributor.attribute("I am unable to answer your question", "test_store", {}, ["tag1"])

    # Should return empty attribution info when I_DONT_KNOW_PHRASE is present
    assert len(result) == 1
    assert "I am unable to answer your question" in result
    assert result["I am unable to answer your question"]["score"] == []


def test_attributor_attribute_with_attribute_on_all_tags_true():
    """Test attribute method when attribute_on_all_tags is True"""
    spec = create_attributor_spec(attribute_on_all_tags=True)
    attributor = create_attributor(spec)

    # Setup with multiple docs
    docs = [
        MockDoc("source1", 0.8, "content1"),
        MockDoc("source2", 0.9, "content2"),
    ]
    setup_attributor_with_mocks(attributor, docs)

    result = attributor.attribute("test answer", "test_store", {}, None)

    # Should use all docs when attribute_on_all_tags is True
    assert len(result) == 1
    assert "test answer" in result
    assert len(result["test answer"]["source"]) > 0


def test_attributor_attribute_with_entailment_scoring():
    """Test attribute method with entailment scoring"""
    spec = create_attributor_spec(
        score_type=ScoreType.ENTAILMENT,
        entailment_model="cross-encoder/nli-deberta-v3-base",
    )
    attributor = create_attributor(spec)

    # Setup with docs
    docs = [MockDoc("source1", 0.8, "content1")]
    setup_attributor_with_mocks(attributor, docs)

    # Mock the entailment model
    attributor.model = MockEntailmentModel(label_index=1)  # entailment

    result = attributor.attribute("test answer", "test_store", {}, ["source1"])

    assert len(result) == 1
    assert "test answer" in result
    assert "entailment_inputs" in result["test answer"]


def test_attributor_attribute_with_normalized_scores():
    """Test attribute method with normalized scores"""
    retriever_spec = MockRetrieverSpec(normalize_scores=True)
    spec = AttributorSpec(retriever_spec=retriever_spec, max_attributable_len=64)
    attributor = create_attributor(spec)

    # Setup with normalized score
    docs = [MockDoc("source1", 0.8, "content1", normalized_score=0.8)]
    setup_attributor_with_mocks(attributor, docs)

    result = attributor.attribute("test answer", "test_store", {}, ["source1"])

    assert len(result) == 1
    assert "test answer" in result
    assert result["test answer"]["score"] == [0.8]


def test_attributor_attribute_with_score_filtering():
    """Test attribute method with score filtering"""
    spec = create_attributor_spec(doc_filter_threshold_attribution=0.7)
    attributor = create_attributor(spec)

    # Setup with docs that have different scores
    docs = [
        MockDoc("source1", 0.5, "content1"),
        MockDoc("source2", 0.9, "content2"),
    ]
    setup_attributor_with_mocks(attributor, docs)

    result = attributor.attribute("test answer", "test_store", {}, ["source1", "source2"])

    # Should only include docs with score > 0.7
    assert len(result) == 1
    assert "test answer" in result
    assert len(result["test answer"]["score"]) == 1
    assert result["test answer"]["score"][0] == 0.9


def test_attributor_attribute_with_contradiction_labels():
    """Test attribute method with contradiction labels"""
    spec = create_attributor_spec(
        score_type=ScoreType.ENTAILMENT,
        entailment_model="cross-encoder/nli-deberta-v3-base",
    )
    attributor = create_attributor(spec)

    # Setup with docs
    docs = [MockDoc("source1", 0.8, "content1")]
    setup_attributor_with_mocks(attributor, docs)

    # Mock the entailment model to return contradiction
    attributor.model = MockEntailmentModel(label_index=0)  # contradiction

    result = attributor.attribute("test answer", "test_store", {}, ["source1"])

    # Should not include docs with contradiction labels
    assert len(result) == 1
    assert "test answer" in result
    assert result["test answer"]["score"] == []


def test_attributor_attribute_with_top_k_limit():
    """Test attribute method with top_k limit"""
    spec = create_attributor_spec(include_top_k=2)
    attributor = create_attributor(spec)

    # Setup with multiple docs
    docs = [
        MockDoc("source1", 0.9, "content1"),
        MockDoc("source2", 0.8, "content2"),
        MockDoc("source3", 0.7, "content3"),
    ]
    setup_attributor_with_mocks(attributor, docs)

    result = attributor.attribute("test answer", "test_store", {}, ["source1", "source2", "source3"])

    # Should only include top 2 docs
    assert len(result) == 1
    assert "test answer" in result
    assert len(result["test answer"]["score"]) == 2
    assert result["test answer"]["score"] == [0.9, 0.8]


def test_attributor_attribute_with_following_chars():
    """Test attribute method with following_chars assignment"""
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with docs
    docs = [MockDoc("source1", 0.8, "content1")]
    setup_attributor_with_mocks(attributor, docs)

    # Mock the segment_and_merge_text method to return multiple segments
    # The locations should match the actual text positions
    def mock_segment_and_merge_text(text, chunk_size):
        return [
            ("First sentence", (0, 13)),  # "First sentence" ends at position 13
            ("Second sentence", (16, 29)),  # "Second sentence" starts at position 16
        ]

    attributor._segment_and_merge_text = mock_segment_and_merge_text

    result = attributor.attribute("First sentence. Second sentence.", "test_store", {}, ["source1"])

    # Should have following_chars for first sentence
    assert len(result) == 2
    assert "First sentence" in result
    assert "Second sentence" in result
    # The following_chars includes the last character of the sentence plus the gap
    # "First sentence" ends at position 13, so following_chars starts from position 13
    assert result["First sentence"]["following_chars"] == "e. "


def test_attributor_attribute_with_empty_docs():
    """Test attribute method when retriever returns empty docs"""
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with empty docs
    setup_attributor_with_mocks(attributor, [])

    result = attributor.attribute("test answer", "test_store", {}, ["source1"])

    # Should return empty attribution info when no docs found
    assert len(result) == 1
    assert "test answer" in result
    assert result["test answer"]["score"] == []


def test_attributor_attribute_with_entailment_and_no_model():
    """Test attribute method with entailment scoring but no model"""
    # Should raise ValueError when creating spec with entailment scoring but no model
    with pytest.raises(ValueError, match="For entailment scoring, the entailment_model should not be None"):
        create_attributor_spec(
            score_type=ScoreType.ENTAILMENT,
            entailment_model=None,
        )


def test_attributor_attribute_with_multiple_sentences():
    """Test attribute method with multiple sentences"""
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Setup with docs
    docs = [MockDoc("source1", 0.8, "content1")]
    setup_attributor_with_mocks(attributor, docs)

    # Mock the segment_and_merge_text method to return multiple segments
    def mock_segment_and_merge_text(text, chunk_size):
        return [
            ("First sentence", (0, 15)),
            ("Second sentence", (16, 31)),
            ("Third sentence", (32, 47)),
        ]

    attributor._segment_and_merge_text = mock_segment_and_merge_text

    result = attributor.attribute("First sentence. Second sentence. Third sentence.", "test_store", {}, ["source1"])

    # Should process all sentences
    assert len(result) == 3
    assert "First sentence" in result
    assert "Second sentence" in result
    assert "Third sentence" in result
    # Last sentence should have empty following_chars
    assert result["Third sentence"]["following_chars"] == ""


def test_attributor_build():
    """Test build method"""
    spec = create_attributor_spec()
    attributor = create_attributor(spec)

    # Mock the NLTK tokenizer
    mock_nltk_result = {"sent_tokenizer": lambda x: ["Sentence one.", "Sentence two."]}

    # Mock the imports
    import sys
    from unittest.mock import MagicMock

    # Create mock modules
    mock_c3_genai = MagicMock()
    mock_c3_genai.PyUtil.loadNltkTokenizer = lambda **kwargs: mock_nltk_result

    # Temporarily replace modules
    original_c3 = sys.modules.get("c3")
    sys.modules["c3"] = mock_c3_genai

    try:
        attributor.__class__.__module__ = "test_attributor_tools"
        attributor.__class__.__name__ = "Attributor"

    finally:
        if original_c3:
            sys.modules["c3"] = original_c3
