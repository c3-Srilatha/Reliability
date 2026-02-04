#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ByteStream import ByteStream
from c3.platform.Content import Content
from c3.platform.Arrow import Arrow

# Python definitions for the C3 type ArrowAware


class ArrowAware(Value):
    """
    Base type to make subtypes aware and interoperable with Apache Arrow
    
    @remarks this represents a made instance of ArrowAware
    """
    def __init__(self) -> None: ...

    def toArrow(self) -> Union[Arrow]:
    """
    Converts this value into instance of Apache Arrow value
    """
        ...
    def toArrowBinary(self) -> Union[any]:
    """
    Converts this value into instance of Apache Arrow binary
    """
        ...
    @overload
    def writeArrow(self, content: C) -> C:
    """
    Writes binary representation of this instance as Arrow into provided content such as file
    """
        ...
    @overload
    def writeArrow(self, stream: Any) -> None:
    """
    Writes binary representation of this instance as Arrow into provided byte push stream
    """
        ...
    @overload
    @classmethod
    def fromArrow(cls, arrow: Arrow, failIfInvalid: bool=None) -> Union[ArrowAware]:
    """
    Makes instance of this type from instance of Apache Arrow value
    """
        ...
    @overload
    @classmethod
    def fromArrow(cls, arrow: Content, failIfInvalid: bool=None) -> Union[ArrowAware]:
    """
    Makes instance of this type from instance of Apache Arrow content such as file
    """
        ...
    @overload
    @classmethod
    def fromArrow(cls, arrow: any, failIfInvalid: bool=None) -> Union[ArrowAware]:
    """
    Makes instance of this type from instance of Apache Arrow binary value
    """
        ...
    @overload
    @classmethod
    def fromArrow(cls, arrow: ByteStream, failIfInvalid: bool=None) -> Union[ArrowAware]:
    """
    Makes instance of this type from instance of Apache Arrow byte stream
    """
        ...
    @overload
    @classmethod
    def fromArrow(cls, arrow: Stream[int], failIfInvalid: bool=None) -> Union[ArrowAware]:
    """
    Makes instance of this type from instance of Apache Arrow binary stream
    """
        ...

