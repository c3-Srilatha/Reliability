#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type TransitionTriggerKind


class TransitionTriggerKind():
    """
    Defines how a particular {@link TransitionTrigger} is triggered.
    
    @remarks this represents a made instance of TransitionTriggerKind
    """
    
    AUTOMATIC: Optional[str]=None
    """
    Automatic transition trigger. Checks the {@link StateMachineTransition#condition} after
    every update to an entity, and if satisified transitions {@link StateMachine}s asynchronously.
    """

    AUTOMATIC_SYNC: Optional[str]=None
    """
    Automatic and synchronous transition trigger. Transitions {@link StateMachine}s synchronously.
    Since these transitions are synchronous, creating transitions with this trigger kind
    directly affect the speed of updating a {@link StateMachine}. This can make
    updating of the {@link StateMachine} at least 60 times slower, so it should not be used
    in cases where >100 {@link StateMachine}s are updated at the same time.
    Be careful when using this trigger kind, as it may cause performance issues. To avoid such issues, use the
    {@link #AUTOMATIC} trigger instead.
    
    Also, if there are entry/transition/exit actions specified that would cause a state machine to transition
    to a different state than the state it is transitioning to, this will cause your state histories to be out
    of order. The `currentState` would also be set incorrectly. So, avoid such actions that would affect the state
    machine's state.
    
    Only use this kind of trigger if the synchronous behavior is required. Use this
    if state updates have to happen immediately after UI actions.
    """

    PERIODIC: Optional[str]=None
    """
    Periodic transition trigger. Transitions {@link StateMachine}s periodically.
    """
    def __init__(self, AUTOMATIC: Optional[str]=None, AUTOMATIC_SYNC: Optional[str]=None, PERIODIC: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...

