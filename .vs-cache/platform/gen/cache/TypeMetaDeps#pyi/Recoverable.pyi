#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Recoverable

S = TypeVar('S')

class Recoverable(Generic[S], Value):
    """
    This should be used in cases where recovery needs to be performed based on certain state {@see RecoveryState}
    
    @remarks this represents a made instance of Recoverable
    """
    def __init__(self) -> None: ...

    @classmethod
    def states(cls) -> Union[Array[S]]:
    """
    Supplier function to get a list of recovery states
    """
        ...
    @classmethod
    def recover(cls, states: Array[S]) -> None:
    """
    Function to perform recovery based on the current state. It will be invoked if the {@link states} are invalid
    or if {@link needsRecovery} failed
    """
        ...

