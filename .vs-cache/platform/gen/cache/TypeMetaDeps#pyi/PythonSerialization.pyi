#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type PythonSerialization


class PythonSerialization(Value):
    """
    @remarks this represents a made instance of PythonSerialization
    """
    def __init__(self) -> None: ...

    @classmethod
    def serialize(cls, obj: Any=None) -> Union[str]:
    """
    Serialize (with dill) and compress (with zlib) a python object.
    """
        ...
    @classmethod
    def deserialize(cls, serialized: str=None) -> Union[Any]:
    """
    Decompress (with zlib) and deserialize (with dill) input into a python object.
    This function works when `serialized` is a string or a python bytes object (C3's Binary)
    NOTE: if `serialized` is a string, it must be base64 encoded.
    """
        ...
    @classmethod
    def serializable(cls, obj: Any=None, doNotCleanUp: bool=None) -> Union[Any]:
    """
    This method is used for making imported methods and classes serializable.
    If the class / method to be serialized is imported (e.g. in another file), dill will not include its definition
    during serialization since it only serializes classes / methods defined in __main__.
    This function works around the issue by re-compiling the class / method in the scope of __main__ to "trick"
    pickle / dill to believe that the class / method came from __main__.
    
    @param obj
              The class or function to make serializable
    @param doNotCleanUp
              If true, the class / method will not be cleaned up from __main__.
    @return
              The native class
    """
        ...

