#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.File import File

# Python definitions for the C3 type DocExport.FileManager


class FileManager(Value):
    """
    Enum to represent documentation Types.
    
    @remarks this represents a made instance of DocExport.FileManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def getErrorExportFile(cls, tmpDirectoryUrl: str) -> Union[File]:
    """
    Function to get the file to which the {@link DocExport.Error} instances are written provided the temporary
    directory url.
    
    @param tmpDirectoryUrl
             The temporary directory url in which the error file exists.
    @returns the file where the {@link DocExport.Error} instances are written in the provided directory url.
    """
        ...

