#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.ByteStream import ByteStream
from c3.platform.BytePushStream import BytePushStream

# Python definitions for the C3 type Gzip


class Gzip(Codec, Value):
    """
    Gzip codec.
    
    @remarks this represents a made instance of Gzip
    """
    def __init__(self) -> None: ...

    @classmethod
    def typeFromContentEncoding(cls, contentEncoding: str) -> Type:
    """
    Lookup Codec type from Content Encoding name.
    """
        ...
    @classmethod
    def contentEncoding(cls) -> str:
    """
    Name of this Content Encoding. E.g. "gzip"
    """
        ...
    @classmethod
    def encode(cls, content: BytePushStream) -> BytePushStream:
    """
    Encodes stream.
    """
        ...
    @classmethod
    def encodeBytes(cls, content: any) -> any:
    """
    Encodes bytes.
    """
        ...
    @classmethod
    def encodeString(cls, content: str) -> any:
    """
    Encodes bytes.
    """
        ...
    @classmethod
    def decode(cls, content: ByteStream) -> ByteStream:
    """
    Decodes stream.
    """
        ...
    @classmethod
    def decodeBytes(cls, content: any) -> any:
    """
    Decodes bytes.
    """
        ...
    @classmethod
    def decodeString(cls, content: any) -> str:
    """
    Decodes bytes.
    """
        ...

