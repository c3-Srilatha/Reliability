#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Obj import Obj
from c3.platform.FileObjsOperSpec import FileObjsOperSpec
from c3.platform.File import File

# Python definitions for the C3 type ContentRef


class ContentRef(Value):
    """
    This type represents the reference to the content
    
    @remarks this represents a made instance of ContentRef
    """
    def __init__(self) -> None: ...

    def fileUrl(self) -> str:
    """
    Url of the referenced file
    """
        ...
    def file(self) -> File:
    """
    File for the instance of ContentRef
    """
        ...
    def readObjs(self, spec: FileObjsOperSpec=None) -> Stream[Obj]:
    """
    returns a stream of objs for the referenced content
    """
        ...

