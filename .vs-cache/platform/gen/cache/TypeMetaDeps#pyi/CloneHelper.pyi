#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type CloneHelper


class CloneHelper(Value):
    """
    @remarks this represents a made instance of CloneHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def generateCloneName(cls, typeName: str, originalName: str) -> str:
    """
     Given the name of a type and the name of an object to be cloned, return a name
     for the clone of the object based off of existing records of that type in the database.
     Records must have a `name` field.
     Naming convention
     ```
     File -> File-Copy1
     File -> File-Copy2
     File -> File-Copy3
     File-Copy1 -> File-Copy1-Copy1
     File-Copy1 -> File-Copy1-Copy2
    ```
     @param typeName
               The name of the type that will make a fetch() call to get all existing records of that type in the database
     @param originalName
               The name of the object to be cloned
     @return The name to use for the clone
    """
        ...

