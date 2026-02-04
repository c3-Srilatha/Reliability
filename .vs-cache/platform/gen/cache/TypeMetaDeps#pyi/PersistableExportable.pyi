#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExportDataResult import ExportDataResult
from c3.platform.ExportDataSpec import ExportDataSpec
from c3.platform.RedShiftExportDataSpec import RedShiftExportDataSpec

# Python definitions for the C3 type PersistableExportable


class PersistableExportable(Exportable, Value):
    """
    Type containing functions for all persistable export operations
    
    @remarks this represents a made instance of PersistableExportable
    """
    def __init__(self) -> None: ...

    @classmethod
    def exportData(cls, spec: ExportDataSpec) -> Union[ExportDataResult]:
    """
    Exports instances of a C3 type to Cassandra.
    
    @param spec
              Various parameters that control the operation of function.
    @return A reference to the Content obj created that contains the exported data and various statistics about the
            export.
    """
        ...
    @classmethod
    def exportDataForRedShift(cls, spec: RedShiftExportDataSpec) -> Union[int]:
    """
    Exports instances of a C3 type to S3 for importing into Redshift.
    
    @param spec
              Various parameters that control the operation of function.
    @return Number of objs exported.
    """
        ...

