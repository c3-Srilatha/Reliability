#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TDigestSpec import TDigestSpec
from c3.platform.Histogram import Histogram

# Python definitions for the C3 type CollectionStats


class CollectionStats(Value):
    """
    Integrates statistical APIs on {@link Collection} type.
    
    Approximate statistics are based off of O(1) space data structures. This is useful when analyzing data from streams.
    The type of statistics provided depends on the {@link Collection#elementType}. See {@link NumericDigest}, {@link
    BooleanDigest}, and {@link StringDigest} for details on approximate statistics.
    
    @remarks this represents a made instance of CollectionStats
    """
    def __init__(self) -> None: ...

    def approxUniqueCount(self) -> Union[int]:
    """
    An estimate for the number of unique elements backed by {@link HyperLogLog}
    """
        ...
    def approxMedian(self, spec: TDigestSpec=None) -> Union[float]:
    """
    An estimate for the median backed by {@link TDigest}
    """
        ...
    def approxHistogram(self, spec: TDigestSpec=None) -> Union[Histogram[Any, Any, HistogramBuilder]]:
    """
    An approximate histogram backed by {@link TDigest}
    """
        ...
    def truePercent(self) -> Union[float]:
    """
    (# of true booleans) / (size of collection)
    """
        ...
    def nullCount(self) -> Union[int]:
    """
    The number of null values
    """
        ...

