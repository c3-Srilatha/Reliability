# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
from datetime import datetime

TopicSampler = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/dataset_generation/samplers/generic_samplers/topic_sampler.py",
    ["TopicSampler"],
)

(
    DateTimeSamplerMethods,
    ExactDateTimeSampler,
    KeywordDateTimeSampler,
    RelativeDateTimeSampler,
    DateTimeSampler,
) = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/dataset_generation/samplers/generic_samplers/date_time_samplers.py",
    [
        "DateTimeSamplerMethods",
        "ExactDateTimeSampler",
        "KeywordDateTimeSampler",
        "RelativeDateTimeSampler",
        "DateTimeSampler",
    ],
)

DEFAULT_DATETIME_FORMAT = c3.Genai.DateTimeGranularityFormat.seconds


def _validate_start_and_end_dates(sample, use_default_datetime_format=False):
    if use_default_datetime_format:
        granularity = DEFAULT_DATETIME_FORMAT
    else:
        granularity = getattr(c3.Genai.DateTimeGranularityFormat, sample["granularity"])
    for key in ["start", "end"]:
        date = datetime.strptime(sample[key], granularity)
        assert isinstance(date, datetime), f"Expected {type(date)=} to be {datetime}."
        sample[key] = date

    assert sample["start"] <= sample["end"], f"Expected {sample['start']=} to be <= than {sample['end']=}."


def _validate_now(sample):
    date = datetime.strptime(sample["now"], DEFAULT_DATETIME_FORMAT)
    assert isinstance(date, datetime), f"Expected {type(date)=} to be {datetime}."


def _validate_granularity_probabilities_validation(sampler):
    with pytest.raises(ValueError, match="granularity='Chihuahua' must be Genai.DateTimeGranularityFormat."):
        ExactDateTimeSampler(granularity_probabilities={"Chihuahua": 1})


def test_topic_sampler_samples_n_topics():
    for n_topics in [1, 2]:
        topic_sampler = TopicSampler(n_topics=n_topics)
        sample = topic_sampler.sample_single()
        assert len(sample) == n_topics, f"Expected {len(sample)=} to be {n_topics=}"


def test_topics_are_sampled_correctly():
    topic_probs = {"pikachu": 1, "charizard": 1, "eevee": 1}
    topic_sampler = TopicSampler(topic_probabilities=topic_probs, n_topics=len(topic_probs))
    sample = topic_sampler.sample_single()
    assert set(sample) == set(topic_probs), f"Expected {set(sample)=} to be {set(topic_probs)=}"


def test_date_time_sampler_random_date_range():
    dates = [
        (
            datetime.strptime("2020-01-01 00:00:00", DEFAULT_DATETIME_FORMAT),
            datetime.strptime("2020-01-02 00:00:00", DEFAULT_DATETIME_FORMAT),
        ),
        (
            datetime.strptime("2025-01-01 00:00:00", DEFAULT_DATETIME_FORMAT),
            datetime.strptime("2026-01-02 00:00:00", DEFAULT_DATETIME_FORMAT),
        ),
    ]
    none_probabilities = [0, 1]
    for start, end in dates:
        for probability_none in none_probabilities:
            sampled_date = DateTimeSamplerMethods.random_date(start, end, probability_none)

            if probability_none == 0:
                assert (
                    start <= sampled_date and end >= sampled_date
                ), f"Expected {sampled_date=} to be larger than {start=} and smaller than {end=}. Where {probability_none=}."
            else:
                assert sampled_date is None, f"Expected {sampled_date=} to be 'None'."


def test_datetime_sampler_granularity():
    examples = [({"seconds": 1}, "seconds"), ({"months": 1}, "months")]

    for granularity_probabilities, target_granularity in examples:
        sampled_granularity = DateTimeSamplerMethods.sample_granularity(granularity_probabilities)
        assert (
            sampled_granularity == target_granularity
        ), f"Expected {sampled_granularity=} to be {target_granularity=}."


def test_exact_datetime_sampler():
    sampler = ExactDateTimeSampler(probability_none=0)
    sample = sampler.sample_single()
    sample_keys = {"start", "end", "granularity"}
    assert set(sample) == sample_keys, f"Expected {set(sample)=} to be {sample_keys=}."

    _validate_start_and_end_dates(sample)
    _validate_granularity_probabilities_validation(ExactDateTimeSampler)

    with pytest.raises(ValueError, match="must be smaller or equal to"):
        ExactDateTimeSampler(earliest=datetime(2024, 1, 1), latest=datetime(2020, 1, 1))


def test_keyword_datetime_sampler():
    keyword_datetime_sampler = KeywordDateTimeSampler()
    sample = keyword_datetime_sampler.sample_single()
    sample_keys = {"end", "granularity", "keyword", "now", "offset", "start"}
    assert set(sample) == sample_keys, f"Expected {set(sample)=} to be {sample_keys=}."

    _validate_start_and_end_dates(sample)
    _validate_now(sample)

    with pytest.raises(ValueError, match="must be smaller or equal to"):
        KeywordDateTimeSampler(
            earliest_reference_datetime=datetime(2024, 1, 1), latest_reference_datetime=datetime(2020, 1, 1)
        )
    with pytest.raises(
        AssertionError,
        match="Expected {'upcoming week'} to be in key_word_to_granularity_map={'next_week': {}}.",
    ):
        KeywordDateTimeSampler(
            keyword_probabilities={"upcoming week": 1}, key_word_to_granularity_map={"next_week": {}}
        )


def test_relative_datetime_sampler():
    relative_datetime_sampler = RelativeDateTimeSampler()
    sample = relative_datetime_sampler.sample_single()
    sample_keys = {"end", "granularity", "now", "offset", "start"}
    assert set(sample) == sample_keys, f"Expected {set(sample)=} to be {sample_keys=}."

    _validate_start_and_end_dates(sample, True)
    _validate_now(sample)

    _validate_granularity_probabilities_validation(RelativeDateTimeSampler)
    with pytest.raises(ValueError, match="must be smaller or equal to"):
        RelativeDateTimeSampler(
            earliest_reference_datetime=datetime(2024, 1, 1), latest_reference_datetime=datetime(2020, 1, 1)
        )

    with pytest.raises(ValueError, match="must be smaller or equal to"):
        RelativeDateTimeSampler(earliest_offset=10, latest_offset=-10)

    relative_datetime_sampler = RelativeDateTimeSampler(earliest_offset=-10, latest_offset=-1)
    sample = relative_datetime_sampler.sample_single()
    assert sample["start"] < sample["now"], f"Expected {sample['start']=} < {sample['now']=} for negative offset."
    assert sample["end"] == sample["now"], f"Expected {sample['end']=} == {sample['now']=} for negative offset."

    relative_datetime_sampler = RelativeDateTimeSampler(earliest_offset=1, latest_offset=10)
    sample = relative_datetime_sampler.sample_single()
    assert sample["start"] == sample["now"], f"Expected {sample['start']=} < {sample['now']=} for positive offset."
    assert sample["end"] > sample["now"], f"Expected {sample['end']=} == {sample['now']=} for positive offset."


def test_datetime_sampler():
    datetime_sampler = DateTimeSampler()
    sample = datetime_sampler.sample_single()
    sample_keys = {"date_time_category", "datetime"}
    assert set(sample) == sample_keys, f"Expected {set(sample)=} to be {sample_keys=}."

    with pytest.raises(
        ValueError,
        match="Expected key='pop corn' in datetime_category_probabilities to be Genai.StructuredData.DataGeneration.DateTimeCategory",
    ):
        datetime_sampler = DateTimeSampler({"pop corn": 1})

    # Test that the correct samplers are called
    sample = DateTimeSampler({"keyword_datetime": 1}).sample_single()
    assert (
        sample["date_time_category"] == "keyword_datetime"
    ), f'Expected {sample["date_time_category"]=} to be "keyword_datetime".'
    assert "keyword" in sample["datetime"], f'Expected "datetime" to be output of KeywordDateTimeSampler.'

    sample = DateTimeSampler({"exact_datetime": 1}).sample_single()
    assert (
        sample["date_time_category"] == "exact_datetime"
    ), f'Expected {sample["date_time_category"]=} to be "exact_datetime".'
    assert "offset" not in sample["datetime"], f'Expected "datetime" to be output of ExactDateTimeSampler.'

    sample = DateTimeSampler({"relative_datetime": 1}).sample_single()
    assert (
        sample["date_time_category"] == "relative_datetime"
    ), f'Expected {sample["date_time_category"]=} to be "relative_datetime".'
    assert (
        "offset" in sample["datetime"] and "keyword" not in sample["datetime"]
    ), f'Expected "datetime" to be output of RelativeDateTimeSampler.'


test_datetime_sampler()
