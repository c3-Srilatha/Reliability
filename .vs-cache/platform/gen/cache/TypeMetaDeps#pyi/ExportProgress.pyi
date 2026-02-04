#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ActionStats import ActionStats
from c3.platform.DeepRef import DeepRef

# Python definitions for the C3 type ExportProgress


class ExportProgress(Value):
    """
    Base type used to report progress from {@link Persistable#exportData}.
    
    @see ImportProgress
    
    @remarks this represents a made instance of ExportProgress
    """
    def __init__(self) -> None: ...

    @classmethod
    def reportExportProgress(cls, progressRef: DeepRef=None, stats: ActionStats=None) -> None:
    """
    Function that will be called by the platform to report progress if {@link ExportDataSpec.progressCallback} is specified.
    
    @param progressRef
              Reference of instance specified in {@link ExportDataSpec.progressCallback}.
    @param stats
                     Progress stats being reported.
    """
        ...

