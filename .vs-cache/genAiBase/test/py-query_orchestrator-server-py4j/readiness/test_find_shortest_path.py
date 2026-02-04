# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest
import networkx as nx

find_shortest_path = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/c3_eval_agent/tools/find_shortest_path.py",
    ["find_shortest_path"],
)

FILE_NAME = "test_find_shortest_path.py"
logger = c3.Logger.for_(FILE_NAME.split(".")[0])


@pytest.fixture(scope="module")
def graph_with_two_shortest_paths():
    """
    A test graph with two shortest paths from A to D:
    A <= B <= D
    A <= C <= D
    """
    graph = nx.Graph()
    for u, v in zip(["A", "A", "C", "B"], ["B", "C", "D", "D"]):
        graph.add_edge(u, v)
    all_references_on_type = {"A": {"B": "A", "C": "A"}, "B": {"D": "B"}, "C": {"D": "C"}}
    nx.set_node_attributes(graph, all_references_on_type, "references_on_type")
    yield graph


def test_consistent_shortest_path(graph_with_two_shortest_paths):
    target_type = "A"
    source_type = "D"
    shortest_path = find_shortest_path(graph_with_two_shortest_paths, target_type, source_type)
    for _ in range(10):
        assert (
            find_shortest_path(graph_with_two_shortest_paths, target_type, source_type) == shortest_path,
            "Expected consistent shortest path.",
        )
