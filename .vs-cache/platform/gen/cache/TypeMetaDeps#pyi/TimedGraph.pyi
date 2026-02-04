#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TimedGraph import TimedGraph
from c3.platform.Graph import Graph
from c3.platform.InMemoryTimedGraph import InMemoryTimedGraph

# Python definitions for the C3 type TimedGraph

E = TypeVar('E')
V = TypeVar('V')

class TimedGraph(Generic[E, V], Value):
    """
    @remarks this represents a made instance of TimedGraph
    """
    def __init__(self) -> None: ...

    @classmethod
    def at(cls, this_: TimedGraph[V, E], timestamp: datetime) -> Union[Graph[V, E]]:
    """
    API to return instance of graph at timestamp 'timestamp'
    @param this_
             Current instance of Timed Graph
    @param ts
             Graph representation at time instant ts
    @return The graph at instant timestamp
    """
        ...
    @classmethod
    def atBatch(cls, this_: TimedGraph[V, E], timestamps: Array[datetime]) -> Union[Map[datetime, Graph[V, E]]]:
    """
    API to return Graph states at various instants in time
    @param this_
               Instance of TimedGraph
    @param timestamps
               Various instants of time
    @return Graph states at various instants in time
    """
        ...
    @classmethod
    def makeGraph(cls, source: Graph[V, E]=None, vertexTraversabilityChanges: Map[str, Array[datetime]]=None) -> Union[InMemoryTimedGraph[V, E]]:
    """
    Create an instance of in memory timed graph
    @param source
                 The source graph from which the timed graph should be created
    @param vertexTraversabilityChanges
                 The traversability changes for the source graph and their toggle times
    @return An instance of in memory timed graph
    """
        ...

