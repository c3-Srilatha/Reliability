# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import shutil
import os
import tempfile
import pytest
import nltk

FILE_NAME = "test_stream.py"
logger = c3.Logger.for_(FILE_NAME.split(".", maxsplit=1)[0])

StreamProcessorSpec, StreamProcessor = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/stream/stream.py",
    ["StreamProcessorSpec", "StreamProcessor"],
)

####################################################################
# Tests
####################################################################
# pylint: disable=line-too-long

TEST_STRING_1 = "LeBron James, born on December 30, 1984, in Akron, Ohio, is a basketball icon, widely hailed as one of the best. After dominating high school hoops, he joined the NBA in 2003 as the top draft pick for the Cleveland Cavaliers. With numerous NBA titles, MVP awards, and Olympic golds, James has cemented his legacy. Beyond basketball, he's known for his philanthropy, focusing on education and activism."
TEST_STRING_2 = "C3.ai, founded by Thomas M. Siebel in 2009, offers enterprise AI solutions. Their platform applies AI, big data, and IoT to optimize operations across industries. C3.ai's applications accelerate AI adoption and drive digital transformation. They help businesses make better decisions and innovate for growth."
TEST_STRING_3 = """
# Baking a Delicious Cake

## Ingredients
- Flour
- Sugar
- Eggs
- Butter
- Baking powder
- Vanilla extract
- Milk

## Equipment Needed
1. Mixing bowls
2. Whisk or electric mixer
3. Cake pans
4. Oven
5. Cooling racks

## Instructions

### 1. Preparing the Batter
- **Step 1:** Preheat the oven to 350°F (180°C).
- **Step 2:** Grease and flour the cake pans.
- **Step 3:** In a large mixing bowl, cream together butter and sugar until light and fluffy.
- **Step 4:** Add eggs one at a time, beating well after each addition.
- **Step 5:** Mix in vanilla extract.
- **Step 6:** In a separate bowl, sift together flour and baking powder.
- **Step 7:** Gradually add the dry ingredients to the wet mixture, alternating with milk, and beat until smooth.

### 2. Baking the Cake
- **Step 1:** Divide the batter evenly between the prepared cake pans.
- **Step 2:** Smooth the tops with a spatula.
- **Step 3:** Place the pans in the preheated oven and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.
- **Step 4:** Remove from the oven and let the cakes cool in the pans for 10 minutes.
- **Step 5:** Transfer the cakes onto cooling racks to cool completely.

### 3. Frosting and Decorating
- **Step 1:** Prepare your favorite frosting recipe.
- **Step 2:** Once the cakes are completely cooled, frost the top of one cake layer.
- **Step 3:** Place the second layer on top and frost the top and sides of the cake.
- **Step 4:** Decorate with sprinkles, fruits, or chocolate shavings as desired.

### 4. Serving
- **Step 1:** Slice and serve the delicious homemade cake!
- **Step 2:** Store any leftovers in an airtight container.

Enjoy your freshly baked cake!"""


# Chunk the string into smaller elements for testing purposes.
def _chunk_string(input_string):
    chunks = [input_string[i : i + 10] for i in range(0, len(input_string), 10)]
    yield from chunks


def _remove_nltk_data():
    for path in nltk.data.path:
        try:
            shutil.rmtree(path)
        except:
            continue


@pytest.fixture(scope="function")
def _check_nltk_data(request):
    """
    Remove all NLTK data
    """

    path_set = getattr(request, "param", False)
    _remove_nltk_data()
    assert _test_no_nltk_downloads(), "NLTK should not be downloaded"

    yield path_set

    if path_set:
        assert _test_no_nltk_downloads(), "NLTK should not be downloaded by the package"
    else:
        assert not _test_no_nltk_downloads(), "NLTK should be downloaded by the package"

    _remove_nltk_data()
    downloaded_tokenizer_file_path = os.path.join(tempfile.gettempdir(), "english.pickle")
    if path_set:
        assert os.path.isfile(downloaded_tokenizer_file_path), "NLTK should be loaded from c3 file system"
        os.remove(downloaded_tokenizer_file_path)
    else:
        assert not os.path.isfile(downloaded_tokenizer_file_path), "NLTK should not be loaded from c3 file system"


def _test_no_nltk_downloads():
    """
    Test if there's no NLTK downloads
    """
    for path in nltk.data.path:
        if os.path.exists(path):
            return False
    return True


def test_empty_spec_raises_error():
    with pytest.raises(TypeError):
        stream_processor = StreamProcessor()


@pytest.mark.parametrize("string", [TEST_STRING_1, TEST_STRING_2, TEST_STRING_3])
@pytest.mark.parametrize("_check_nltk_data", [True, False], indirect=True)
def test_generate_sentence_stream(_check_nltk_data, string):
    nltk_sentence_tokenizer_model_file_path = ""
    if _check_nltk_data:
        nltk_sentence_tokenizer_model_file_path = (
            "gcs://c3--datasets/genai/nltk_data/tokenizers/punkt/PY3/english.pickle"
        )
    stream_processor_spec = StreamProcessorSpec(
        llm_stream=_chunk_string(string),
        nltk_sentence_tokenizer_model_file_path=nltk_sentence_tokenizer_model_file_path,
    )

    stream_processor = StreamProcessor(stream_processor_spec)
    assert "".join(list(stream_processor.generate_sentence_stream())) == string
