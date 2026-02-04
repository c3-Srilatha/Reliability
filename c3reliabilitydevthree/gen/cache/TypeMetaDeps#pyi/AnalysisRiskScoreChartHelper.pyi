#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.FetchResult import FetchResult
from c3.reliabilityMl.ReliabilityMl.Project import ReliabilityMl.Project

# Python definitions for the C3 type AnalysisRiskScoreChartHelper


class AnalysisRiskScoreChartHelper(Value):
    """
    Helper type with helper functions for the Analysis Chart.
    
    @remarks this represents a made instance of AnalysisRiskScoreChartHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def getFeatureOptionsForAssets(cls, spec: FetchSpec=None, project: ReliabilityMl.Project=None) -> Union[FetchResult[any]]:
    """
    Fetches the feature options for the given assets with the asset name prepended.
    The spec should just contain the filter for the assets to fetch
    the feature options for.
    
    @param spec
              The fetch specification containing filters for assets
    @param project
              The reliability ML project
    @return A fetch result containing feature options with asset names prepended
    """
        ...
    @classmethod
    def getSensorOptionsForAssetSensorRelations(cls, spec: FetchSpec=None) -> Union[FetchResult[any]]:
    """
    Fetches the sensor options for the given {@link ReliabilityAssetSensorRelation}s with the asset name prepended.
    The spec should just contain the filter for the
    {@link ReliabilityAssetSensorRelation}s to fetch the sensor options for.
    
    @param spec
              The fetch specification containing filters for asset sensor relations
    @return A fetch result containing sensor options with asset names prepended
    """
        ...

