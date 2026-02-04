#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LoadAnalyzerConfig import LoadAnalyzerConfig
from c3.platform.LoadAnalyzerClusterConfig import LoadAnalyzerClusterConfig

# Python definitions for the C3 type LoadAnalyzer

M = TypeVar('M')

class LoadAnalyzer(Generic[M], Value):
    """
    @remarks this represents a made instance of LoadAnalyzer
    """
    def __init__(self) -> None: ...

    @classmethod
    def profile(cls, object: M=None, consumptionKPI: str=None, weatherKPI: str=None, config: LoadAnalyzerConfig=None) -> None:
    """
    Generate Load Profile for input objects based on config and write results to usageSummaryType
    """
        ...
    @classmethod
    def cluster(cls, config: LoadAnalyzerClusterConfig=None) -> None:
    """
    1. Cluster all objects obtained from usageSummaryType
    2. Create cluster entries in clusterStatsType
    3. Update objects being clustered with references to their respective clusters.
    """
        ...
    @classmethod
    def generateClusterStats(cls, clusterIds: Array[str]=None, config: LoadAnalyzerConfig=None) -> None:
    """
    Generate stats for the cluster (mean, oneSigma and twoSigma) and persist those in the cluster object
    @param: clusterIds for which cluster stats need to be calculated
    """
        ...
    @classmethod
    def generateClusterStatsAll(cls, config: LoadAnalyzerConfig=None) -> None:
    """
    Generate stats for all clusters
    """
        ...
    @classmethod
    def purgeClusterStats(cls, clusterIds: Array[str]=None, config: LoadAnalyzerConfig=None) -> None:
    """
    For each clusterId cleanup:
    1. Null references to clusterId in Objects referencing it
    2. ClusterStats row representing the cluster
    """
        ...
    @classmethod
    def purgeAll(cls, config: LoadAnalyzerConfig=None) -> None:
    """
    For all clusterIds cleans up:
    1. Null references to clusterId in Objects referencing it
    2. ClusterStats row representing the cluster
    3. Timeseries data for ClusterMean, ClusterOneSigma and ClusterTwoSigma
    """
        ...

