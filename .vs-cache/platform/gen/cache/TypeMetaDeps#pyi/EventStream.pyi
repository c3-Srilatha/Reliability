#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pair import Pair
from c3.platform.ValueType import ValueType
from c3.platform.PushStream import PushStream
from c3.platform.ObjStats import ObjStats
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.EventStream.PushStream import EventStream.PushStream
from c3.platform.EventStream import EventStream

# Python definitions for the C3 type EventStream

E = TypeVar('E')

class EventStream(Generic[E], Closable, Serializable, Mutable, Value):
    """
    Stream of events. It is parameterized by the event type.
    
    @remarks this represents a made instance of EventStream
    """
    
    onClose: Optional[Callable[[Union[EventStream[E]]]]]=None
    """
    Callback lambda on close of this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[EventStream[E]]]]]=None) -> None: ...

    def close(self) -> None:
    """
    Deallocates any potential resource and calls onClose if provided.
    """
        ...
    def doClose(self) -> None:
    """
    Deallocates any potential resource.
    """
        ...
    def closed(self) -> bool:
    """
    @returns true if this Closable resource has been closed
    """
        ...
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
    contain no type information.
    
    @see #toTypedJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    def toJsonString(self) -> str:
    """
    Convert the internal object representation to an _untyped_ serialized JSON string. This is the equivalent of
    `toJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toTypedJsonString(self) -> str:
    """
    Convert the internal object representation to a _typed_ serialized JSON string. This is the equivalent of
    `toTypedJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toJsString(self) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    def toXmlString(self) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[EventStream[E]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
    be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
    the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[EventStream[E]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[EventStream[E]]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[EventStream[E]]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    @classmethod
    def make(cls) -> EventStream[E]:
    """
    Construct an instance with initial state.
    """
        ...
    def id(self) -> Union[str]:
    """
    Unique id of this even stream.
    """
        ...
    def eventType(self) -> Union[ValueType]:
    """
    Type of the events in this stream.
    """
        ...
    def onNext(self, callback: Callable[[Union[E]]]) -> None:
    """
    Register a callback for the next value from this event stream.
    """
        ...
    @classmethod
    def create(cls, eventType: ValueType) -> Union[Pair[EventStream[T], EventStream.PushStream[T]]]:
    """
    Creates a new event stream also returning push stream for publishing events.
    """
        ...
    E = TypeVar('E')

    class PushStream(Generic[E], LambdaPushStream[E], Value):
        """
        Additional fields from {@link EventStream} bundled with a {@link LambdaPushStream}.
        
        @remarks this represents a made instance of EventStream.PushStream
        """
        
        onClose: Optional[Callable[[Union[EventStream.PushStream[E]]]]]=None
        """
        Callback lambda on close of this stream
        """

        onWrite: Optional[Callable[[Union[E], Union[PushStream[E]]]]]=None
        """
        callback lambda on write to this stream
        """

        clientId: Optional[str]=None

        eventStreamId: Optional[str]=None
        def __init__(self, onClose: Optional[Callable[[Union[EventStream.PushStream[E]]]]]=None, onWrite: Optional[Callable[[Union[E], Union[PushStream[E]]]]]=None, clientId: Optional[str]=None, eventStreamId: Optional[str]=None) -> None: ...

        def close(self) -> None:
        """
        Deallocates any potential resource and calls onClose if provided.
        """
            ...
        def doClose(self) -> None:
        """
        Callback on stream close.
        """
            ...
        def closed(self) -> bool:
        """
        @returns true if this Closable resource has been closed
        """
            ...
        def write(self, value: E) -> None:
        """
        Pushes the next single value into stream. Throws exception if stream is closed.
        """
            ...
        def writeBatch(self, value: Array[E]) -> None:
        """
        Pushes the next batch of values into stream. Throws exception if stream is closed.
        """
            ...
        def writeStream(self, value: Stream[E]) -> None:
        """
        Pushes the next batch of values into stream. Throws exception if stream is closed.
        """
            ...
        @classmethod
        def create(cls, onWrite: Callable[[Union[E], Union[EventStream.PushStream[E]]]], onClose: Callable[[Union[EventStream.PushStream[E]]]]=None) -> EventStream.PushStream[E]:
        """
        Creates new push stream based on logic in provided callbacks.
        """
            ...
        @classmethod
        def createBuffered(cls, onWrite: Callable[[Union[Array[E]], Union[EventStream.PushStream[E]]]], onClose: Callable[[Union[EventStream.PushStream[E]]]]=None, bufferSize: int=None) -> PushStream[E]:
        """
        Creates new buffered push stream based on logic in provided callbacks.
        """
            ...
        @classmethod
        def createBufferedWithStats(cls, onWrite: Callable[[Union[E], Union[EventStream.PushStream[E]]], Union[ObjStats]], onClose: Callable[[Union[EventStream.PushStream[E]]]]=None, bufferSize: int=None) -> PushStreamWithStats[E]:
        """
        Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
        buffer.
        """
            ...

