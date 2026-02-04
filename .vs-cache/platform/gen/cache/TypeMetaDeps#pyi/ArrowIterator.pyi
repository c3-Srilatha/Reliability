#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TupleType import TupleType
from c3.platform.Type import Type
from c3.platform.ByteStream import ByteStream
from c3.platform.Obj import Obj
from c3.platform.Arrow import Arrow
from c3.platform.Array import Array
from c3.platform.Iterator import Iterator

# Python definitions for the C3 type ArrowIterator


class ArrowIterator(Value, Iterator[Arrow]):
    """
    @remarks this represents a made instance of ArrowIterator
    """
    def __init__(self) -> None: ...

    def hasNext(self) -> bool:
    """
    @return true if there is an element in the sequence
    """
        ...
    def next(self) -> Union[Arrow]:
    """
    @return next element in the sequence
    """
        ...
    def close(self) -> None:
    """
    "Close" iterator so any associated resources can be released. Exhausting iterator with hasNext / next should always
    close it but it should be ok to close it early.
    """
        ...
    @classmethod
    def read(cls, type: Type, stream: ByteStream) -> ArrowIterator:
    """
    Construct a new ArrowIterator by reading Arrow column batches from given channel.
    """
        ...
    @classmethod
    def makeValue(cls, connection: Any=None, response: Any=None) -> Union[ArrowIterator]:
    """
    Construct a new ArrowIterator by reading Arrow column batches from connection. This method is called is used in py-client
    run-times to de-serialize data in Arrow format.
    """
        ...
    @classmethod
    def fromObjs(cls, rows: Stream[Obj], batchSize: int, include: str=None, flatten: bool=None) -> ArrowIterator:
    """
    Construct a new ArrowIterator by turning rows given by C3 objects into columnar batches with size given by batchSize.
    """
        ...
    @classmethod
    def fromElements(cls, batches: Array[Arrow], schema: TupleType) -> ArrowIterator:
    """
    Construct a new ArrowIterator from given sequence of Arrow batches.
    """
        ...
    @classmethod
    def empty(cls, schema: TupleType) -> ArrowIterator:
    """
    Construct empty ArrowIterator with given schema.
    """
        ...
    def write(self, stream: Any) -> Union[int]:
    """
    Serialize content of this iterator into given output stream using Arrow File IPC format.
    """
        ...
    def toRows(self) -> Iterator[O]:
    """
    Convert content of this arrow iterator back to rows represented as C3 objects.
    """
        ...
    def schema(self) -> TupleType:
    """
    Return TupleType representation of schema for this iterator in C3 ValueType format. See {@link Arrow #type}
    """
        ...
    def arrowSchema(self) -> Union[Any]:
    """
    Return native Arrow schema for this iterator.
    """
        ...
    def allocator(self) -> Union[Any]:
    """
    Return native Arrow allocator used by this iterator.
    """
        ...
    def count(self) -> Union[int]:
    """
    Return number of rows.
    """
        ...

