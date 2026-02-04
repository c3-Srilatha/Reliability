#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type EnvInvalidationQueueUtil


class EnvInvalidationQueueUtil(Value):
    """
    Util for recording InvalidationQueue status.
    
    @remarks this represents a made instance of EnvInvalidationQueueUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def recordStats(cls) -> None:
    """
    Read the status of each invalidation queue and record them as envLogs then send to all-env.
    This function is called by a cron job every 15 minutes to keep tracking the status of invalidation queues.
    """
        ...

