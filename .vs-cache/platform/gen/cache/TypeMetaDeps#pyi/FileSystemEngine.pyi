#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FileSystem import FileSystem

# Python definitions for the C3 type FileSystemEngine


class FileSystemEngine(Value):
    """
    Represents a file system engine and configuration.
    
    @remarks this represents a made instance of FileSystemEngine
    """
    def __init__(self) -> None: ...

    @classmethod
    def defaultFs(cls) -> FileSystem:
    """
    @return default FileSystem.
    """
        ...

