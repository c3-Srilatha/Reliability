#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.EventWindowBinaryScoreResult import EventWindowBinaryScoreResult
from c3.platform.EventWindow import EventWindow
from c3.platform.EventWindowBinaryClassificationSpec import EventWindowBinaryClassificationSpec

# Python definitions for the C3 type EventWindowBinaryClassification


class EventWindowBinaryClassification(Value):
    """
    Classify EventWindows with TruePositive/FalsePositive/FalseNegative.
    Used for evaluating event scoring metric.
    
    @remarks this represents a made instance of EventWindowBinaryClassification
    """
    def __init__(self) -> None: ...

    @classmethod
    def classify(cls, monitoredEventWindows: Array[EventWindow]=None, observedEventWindows: Array[EventWindow]=None, spec: EventWindowBinaryClassificationSpec=None) -> Union[Array[EventWindowBinaryScoreResult]]:
    """
    @param monitoredEventWindows
             Array of {@link EventWindow}s.
    @param observedEvents
             Array of {@link ObservedEvents}s.
    @param spec
             Placeholder for future.
    @returns {@link EventWindowBinaryScoreResult} for union of predicted and observed event windows.
    """
        ...

