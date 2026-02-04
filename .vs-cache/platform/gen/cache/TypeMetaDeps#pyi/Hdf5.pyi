#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Hdf5FileObjsOperSpec import Hdf5FileObjsOperSpec
from c3.platform.Hdf5Obj import Hdf5Obj
from c3.platform.Content import Content
from c3.platform.FileObjsOperSpec import FileObjsOperSpec

# Python definitions for the C3 type Hdf5


class Hdf5(Value):
    """
    @remarks this represents a made instance of Hdf5
    """
    def __init__(self) -> None: ...

    @classmethod
    def readJson(cls, urlOrEncodedPath: str, spec: Hdf5FileObjsOperSpec=None) -> Union[any]:
    """
    Deserializes content from various files led to by the path into a list of C3 Type instances.
    @urlOrEncodedPath
              File path to stream data from
    @see FileObjsOperSpec.targetType
    @return json object
    """
        ...
    @classmethod
    def readContentAsJson(cls, contentLocation: str, content: any, spec: Hdf5FileObjsOperSpec=None) -> Union[any]:
    """
    Deserializes HDF5 content to raw json.
    """
        ...
    @classmethod
    def readObj(cls, content: Content, spec: FileObjsOperSpec=None) -> Union[Hdf5Obj]:
    """
    Deserializes HDF5 content to a dynamic type.
    """
        ...

