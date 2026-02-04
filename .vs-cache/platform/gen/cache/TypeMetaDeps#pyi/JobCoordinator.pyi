#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type JobCoordinator


class JobCoordinator(Value):
    """
    This type is created to help co-ordinate sequential execution of jobs
    The 'run' function executes jobs defined in 'JobInformation'
    It handles failures and retries
    
    @remarks this represents a made instance of JobCoordinator
    """
    def __init__(self) -> None: ...

    @classmethod
    def run(cls) -> None:
    """
    There exists seed data that will cause a cron job to be setup for this function.
    
    cron expression : 0 0 0 ? * *
    
    The expression means that this function will get fired every midnight (12 AM)
    """
        ...

