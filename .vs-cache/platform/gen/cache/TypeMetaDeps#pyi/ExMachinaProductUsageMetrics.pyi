#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExMachinaProductUsageMetricsAssetCountResult import ExMachinaProductUsageMetricsAssetCountResult
from c3.platform.ExMachinaProductUsageMetricsAllAssetsCountResult import ExMachinaProductUsageMetricsAllAssetsCountResult

# Python definitions for the C3 type ExMachinaProductUsageMetrics


class ExMachinaProductUsageMetrics(Value):
    """
    Convenience type for functions that fetches count of account assets like Visual Notebooks, Datasets, ML Pipelines etc.
    
    @remarks this represents a made instance of ExMachinaProductUsageMetrics
    """
    def __init__(self) -> None: ...

    @classmethod
    def getCountForAssetType(cls, assetType: str=None, filter: str=None, isOwned: bool=None) -> Union[int]:
    """
    Generic method that uses fetch and fetchCount for different asset types
    """
        ...
    @classmethod
    def getAllCountsForAssetType(cls, assetType: str=None, baseFilter: str=None) -> Union[ExMachinaProductUsageMetricsAssetCountResult]:
    """
    Generic method for fetching All/Public/Owned/Shared counts
    """
        ...
    @classmethod
    def getProjectsCount(cls, projectKind: str=None) -> Union[ExMachinaProductUsageMetricsAssetCountResult]:
    """
    Fetch All/Public/Owned/Shared counts using {@link ExMachinaProjectRoot} c3type and of kind {@link ExMachinaProjectKind.STANDARD}
    """
        ...
    @classmethod
    def getDatasetsCount(cls) -> Union[ExMachinaProductUsageMetricsAssetCountResult]:
    """
    Fetch All/Public/Owned/Shared counts using {@link ExMachinaDatasetTopic} c3type
    """
        ...
    @classmethod
    def getStoriesCount(cls) -> Union[ExMachinaProductUsageMetricsAssetCountResult]:
    """
    Fetch All/Public/Owned/Shared counts using {@link ExMachinaStory} c3type
    """
        ...
    @classmethod
    def getConnectorsCount(cls) -> Union[ExMachinaProductUsageMetricsAssetCountResult]:
    """
    Fetch All/Public/Owned/Shared counts using {@link ExMachinaConnectorCredential} c3type
    """
        ...
    @classmethod
    def getDeploymentsCount(cls) -> Union[ExMachinaProductUsageMetricsAssetCountResult]:
    """
    Fetch All/Public/Owned/Shared counts using {@link ExMachinaExecutionSchedule} c3type
    """
        ...
    @classmethod
    def getAllCounts(cls) -> Union[ExMachinaProductUsageMetricsAllAssetsCountResult]:
    """
    Fetch All/Public/Owned/Shared counts
    """
        ...

