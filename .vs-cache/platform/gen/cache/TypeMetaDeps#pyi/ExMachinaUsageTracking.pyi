#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ExMachinaUsageTracking


class ExMachinaUsageTracking(Value):
    """
    APIs revolving around usage tracking settings
    
    @remarks this represents a made instance of ExMachinaUsageTracking
    """
    def __init__(self) -> None: ...

    @classmethod
    def isTrackingConfigured(cls) -> bool:
    """
    Whether usage tracking is enabled in the environment
    """
        ...
    @classmethod
    def isTrackingEnabled(cls, userId: str) -> bool:
    """
    Whether the user has enabled usage tracking
    """
        ...
    @classmethod
    def setUserTrackingEnabled(cls, userId: str, isEnabled: bool=None) -> None:
    """
    Sets the usage tracking preference for the user
    """
        ...
    @classmethod
    def getTrackingData(cls) -> Union[any]:
    """
    Based on the usage tracking preference, creates a tracking data object to send to Pendo
    """
        ...
    @classmethod
    def getMemberTrackingObject(cls) -> Union[any]:
    """
    Returns the tracking object for the current member.
    """
        ...

