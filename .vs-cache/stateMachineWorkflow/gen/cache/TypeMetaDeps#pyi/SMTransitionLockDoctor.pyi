#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.stateMachineWorkflow.StateMachineTransitionLock import StateMachineTransitionLock

# Python definitions for the C3 type SMTransitionLockDoctor


class SMTransitionLockDoctor(Recoverable[StateMachineTransitionLock], Value):
    """
    Type to debug and recover state machine transition locks.
    
    @remarks this represents a made instance of SMTransitionLockDoctor
    """
    def __init__(self) -> None: ...

    @classmethod
    def states(cls) -> Union[Array[StateMachineTransitionLock]]:
    """
    Supplier function to get a list of recovery states
    """
        ...
    @classmethod
    def recover(cls, states: Array[StateMachineTransitionLock]) -> None:
    """
    Function to perform recovery based on the current state. It will be invoked if the {@link states} are invalid
    or if {@link needsRecovery} failed
    """
        ...

