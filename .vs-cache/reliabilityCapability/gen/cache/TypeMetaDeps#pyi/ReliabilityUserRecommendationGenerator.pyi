#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.reliabilityCapability.ReliabilityUserRecommendation import ReliabilityUserRecommendation

# Python definitions for the C3 type ReliabilityUserRecommendationGenerator


class ReliabilityUserRecommendationGenerator(Value):
    """
    Type which contains the recommendation generators for {@link ReliabilityUserRecommendation}s.
    
    @remarks this represents a made instance of ReliabilityUserRecommendationGenerator
    """
    def __init__(self) -> None: ...

    @classmethod
    def generateNewCaseRecommendation(cls, args: Map[str, Any]=None) -> Union[ReliabilityUserRecommendation]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetCase} is created.
    @param args
              A map containing arguments needed for recommendation generation.
    @return A {@link ReliabilityUserRecommendation} object for the new case.
    """
        ...
    @classmethod
    def generateUpdatedCaseRecommendation(cls, args: Map[str, Any]=None) -> Union[ReliabilityUserRecommendation]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetCase} is updated.
    @param args
              A map containing arguments needed for recommendation generation.
    @return A {@link ReliabilityUserRecommendation} object for the updated case.
    """
        ...
    @classmethod
    def generateNewWorkOrderRecommendation(cls, args: Map[str, Any]=None) -> Union[ReliabilityUserRecommendation]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link WorkOrder} is created.
    @param args
              A map containing arguments needed for recommendation generation.
    @return A {@link ReliabilityUserRecommendation} object for the new work order.
    """
        ...
    @classmethod
    def generateUpdatedWorkOrderRecommendation(cls, args: Map[str, Any]=None) -> Union[ReliabilityUserRecommendation]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link WorkOrder} is updated.
    @param args
              A map containing arguments needed for recommendation generation.
    @return A {@link ReliabilityUserRecommendation} object for the updated work order.
    """
        ...
    @classmethod
    def generateNewAlertRecommendation(cls, args: Map[str, Any]=None) -> Union[ReliabilityUserRecommendation]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetAlert} is created.
    @param args
              A map containing arguments needed for recommendation generation.
    @return A {@link ReliabilityUserRecommendation} object for the new alert.
    """
        ...
    @classmethod
    def generateNewSensorAlertRecommendation(cls, args: Map[str, Any]=None) -> Union[ReliabilityUserRecommendation]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link SensorHealthAlert} is created.
    @param args
              A map containing arguments needed for recommendation generation.
    @return A {@link ReliabilityUserRecommendation} object for the new sensor alert.
    """
        ...
    @classmethod
    def generateActivateModelRecommendation(cls, args: Map[str, Any]=None, daysAfterCreated: float='14', daysWithDeployedModel: float='2', renotifyAfterDays: float='7') -> Union[Array[ReliabilityUserRecommendation]]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAsset} which has an {@link AssetClass} does not have a live model for too long.
    @param args
              A map containing arguments needed for recommendation generation.
    @param daysAfterCreated
              Number of days after creation to wait before generating recommendation (default: 14).
    @param daysWithDeployedModel
              Number of days with deployed model to wait before generating recommendation (default: 2).
    @param renotifyAfterDays
              Number of days to wait before re-notifying (default: 7).
    @return An array of {@link ReliabilityUserRecommendation} objects for model activation.
    """
        ...
    @classmethod
    def generateUnresolvedAlertRecommendation(cls, args: Map[str, Any]=None, daysUnresolved: float='2', renotifyAfterDays: float='2') -> Union[Array[ReliabilityUserRecommendation]]:
    """
    Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetAlert} is open for too long.
    @param args
              A map containing arguments needed for recommendation generation.
    @param daysUnresolved
              Number of days the alert has been unresolved (default: 2).
    @param renotifyAfterDays
              Number of days to wait before re-notifying (default: 2).
    @return An array of {@link ReliabilityUserRecommendation} objects for unresolved alerts.
    """
        ...
    @classmethod
    def generateTimeBasedRecommendations(cls, args: Map[str, Any]=None) -> None:
    """
    Runs {@link UserRecommendationCategory#generateRecommendation} for categories which are based on some period of time elapsing. Used for {@link CronJob} purposes.
    @param args
              A map containing arguments needed for recommendation generation.
    """
        ...

