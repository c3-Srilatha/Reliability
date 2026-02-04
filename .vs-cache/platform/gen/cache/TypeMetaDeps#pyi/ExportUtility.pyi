#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.RecursiveFetchSpec import RecursiveFetchSpec
from c3.platform.Import import Import
from c3.platform.Export import Export

# Python definitions for the C3 type ExportUtility


class ExportUtility(Value):
    """
    @remarks this represents a made instance of ExportUtility
    """
    def __init__(self) -> None: ...

    @classmethod
    def exportRelatedData(cls, rootType: Type, spec: RecursiveFetchSpec, folderName: str=None, s3bucket: str=None) -> Union[Export]:
    """
    Kicks off Export Batch job that will recursively crawl through the data model, getting all 'related data'.
    {@link Persistable#recursiveFetch}.
    """
        ...
    @classmethod
    def importRelatedData(cls, s3path: str=None) -> Union[Array[Import]]:
    """
    Kicks off multiple Import Batch jobs, 1 for relational data and 1 for EACH non relational data typ.
    """
        ...

