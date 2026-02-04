#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.EventAdHocListener import EventAdHocListener
from c3.platform.Type import Type

# Python definitions for the C3 type EventBus


class EventBus(Value):
    """
    Implementation of C3 Event Bus. Events are dynamic or pre-defined [ aka strongly-typed ]
    
    @see Event
    @see Logger#event
    
    @remarks this represents a made instance of EventBus
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def hasListeners(cls, event: str) -> bool:
    """
    @return true if given event type has listeners
    """
        ...
    @overload
    @classmethod
    def hasListeners(cls, event: Type) -> bool:
    """
    @return true if given event type has listeners
    """
        ...
    @overload
    @classmethod
    def listen(cls, event: T, filter: str, listener: Callable[[Map[str, Any], EventAdHocListener]]) -> EventAdHocListener:
    """
    Listen to events of the given type.
    
    @see Event#listen
    """
        ...
    @overload
    @classmethod
    def listen(cls, event: str, filter: str, listener: Callable[[Map[str, Any], EventAdHocListener]]) -> EventAdHocListener:
    """
    Listen to events of arbitrary type.
    
    IMPORTANT: this action has a potential of putting significant load on cluster so listener needs to be as fast as
    possible and filter as precise as possible. Additionally listener should be stopped as soon as possible. And
    finally Cluster Admin or Resource Governor may pause or stop the listener so this method should not be used for
    critical business logic.
    
    @see EvenListener
    """
        ...

