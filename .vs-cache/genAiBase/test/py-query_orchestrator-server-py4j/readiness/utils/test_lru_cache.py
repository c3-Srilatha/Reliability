# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest

LRUCache = c3.Genai.PyUtil.importResourceFile("/genAiBase/resource/code/c3genai/utils/lru_cache.py", ["LRUCache"])


def test_maxsize():
    cache = LRUCache(maxsize=2)
    cache["a"] = 1
    cache["b"] = 2
    cache["c"] = 3

    assert len(cache) == 2
    assert "a" not in cache
    assert cache["b"] == 2
    assert cache["c"] == 3


def test_get_set():
    cache = LRUCache(maxsize=3)
    cache["a"] = 1
    cache["b"] = 2
    cache["c"] = 3

    # Access 'a' so it becomes the most recently used
    _ = cache["a"]

    # Add new item, 'b' should be removed because it is the least recently used
    cache["d"] = 4

    assert len(cache) == 3
    assert "b" not in cache

    for k, v in [("a", 1), ("c", 3), ("d", 4)]:
        assert k in cache
        assert cache[k] == v


def test_reassign_key():
    cache = LRUCache(maxsize=3)
    cache["a"] = 1
    cache["b"] = 2
    cache["c"] = 3

    # Reassign 'b'
    cache["b"] = 20

    assert cache["b"] == 20

    cache["e"] = 4
    cache["f"] = 3

    assert cache["b"] == 20  # b should still be there because it was moved to the end by reassignment
    assert "c" not in cache


def test_remove_by_filter():
    cache = LRUCache(maxsize=3)
    cache["a"] = 1
    cache["b"] = 2
    cache["c"] = 3

    # Remove entries where the value is less than 3
    cache.remove_by_filter(lambda k, v: v < 3)

    assert "a" not in cache
    assert "b" not in cache
    assert "c" in cache
    assert cache["c"] == 3
