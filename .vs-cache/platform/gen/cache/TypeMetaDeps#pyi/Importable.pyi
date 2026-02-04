#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ImportDataSpec import ImportDataSpec
from c3.platform.PushStream import PushStream
from c3.platform.ImportDataResult import ImportDataResult
from c3.platform.StartImportDataSpec import StartImportDataSpec
from c3.platform.PushStreamWithStats import PushStreamWithStats

# Python definitions for the C3 type Importable


class Importable(Value):
    """
    Base type for supporting import of data.
    
    @see Persistable
    
    @remarks this represents a made instance of Importable
    """
    def __init__(self) -> None: ...

    @classmethod
    def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[Importable]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[Importable]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def importData(cls, spec: ImportDataSpec, async_: bool=None) -> Union[ImportDataResult]:
    """
    Imports instances into a C3 type from a file stored in Cassandra.
    
    @param spec
           Various parameters that control the operation of function.
    @param async
           Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
           synchronous)
    @return various statistics and errors for the import operation.
    """
        ...

