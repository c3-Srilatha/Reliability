#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExponentialBackoff import ExponentialBackoff
from c3.platform.Logger import Logger

# Python definitions for the C3 type Assert


class Assert(Value):
    """
    This type contains helper methods for doing assertions.
    
    @remarks this represents a made instance of Assert
    """
    def __init__(self) -> None: ...

    @classmethod
    def assertEventualTrue(cls, message: str, lambda_: Callable[[], bool], retrySchedule: ExponentialBackoff=None, log: Logger=None, throwOnError: bool=None) -> None:
    """
    Assert that a condition is eventually true.
    
    @param message
              Error message if condition is eventually false.
    @param lambda
              Condition to assert on.
    @param retrySchedule
              Optional {@link ExponentialBackoff}, defining number of attempts and wait time.
              If not specified, an base-2 exponential schedule with 5 minutes total wait time will be used.
    @param log
              Logger to be used
    @param throwOnError
              if true, throws Exception on error.
    """
        ...
    @classmethod
    def assertEventualEquals(cls, message: str, lambda_: Callable[[], Union[Any]], expected: Any=None, retrySchedule: ExponentialBackoff=None, log: Logger=None, throwOnError: bool=None) -> None:
    """
    Assert that a condition is eventually true.
    
    @param message
              Error message if condition is eventually false.
    @param lambda
              Condition to assert on.
    @param retrySchedule
              Optional {@link ExponentialBackoff}, defining number of attempts and wait time.
              If not specified, an base-2 exponential schedule with 5 minutes total wait time will be used.
    @param log
              Logger to be used
    @param throwOnError
              if true, throws Exception on error.
    """
        ...

