#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse

# Python definitions for the C3 type Streamable


class Streamable(Streamable.Arg, Streamable.Result, Value):
    """
    A base trait for all streamable types. Types that mix in this trait can be streamed to and from nodes in a
    distributed system. E.g. a streamable type can be sent over a network connection or stored in a database without
    materializing it's instance value(s) in memory.
    
    @see Stream
    @see Content
    
    @remarks this represents a made instance of Streamable
    """
    def __init__(self) -> None: ...

    @classmethod
    def fromHttpRequest(cls, req: HttpRequest) -> Streamable:
    """
    Constructs instance from given HTTP request. Expectation is that the request in not immediately consumed, and
    content will eventually be read in a streaming manner by the instance.
    """
        ...
    def toHttpResponse(self, req: HttpRequest) -> HttpResponse:
    """
    Constructs instance of HTTP response from this instances. Expectation is that the response in not immediately
    produced in memory, and HTTP response body will eventually be written in a streaming manner by the instance.
    """
        ...
    
    class Arg(Value):
        """
        A base trait for all streamable types. Types that mix in this trait can be streamed to and from nodes in a
        distributed system. E.g. a streamable type can be sent over a network connection or stored in a database without
        materializing it's instance value(s) in memory.
        
        @see Stream
        @see Content
        
        @remarks this represents a made instance of Streamable.Arg
        """
        def __init__(self) -> None: ...

        @classmethod
        def fromHttpRequest(cls, req: HttpRequest) -> Streamable.Arg:
        """
        Constructs instance from given HTTP request. Expectation is that the request in not immediately consumed, and
        content will eventually be read in a streaming manner by the instance.
        """
            ...
    
    class Result(Value):
        """
        A base trait for all streamable types. Types that mix in this trait can be streamed to and from nodes in a
        distributed system. E.g. a streamable type can be sent over a network connection or stored in a database without
        materializing it's instance value(s) in memory.
        
        @see Stream
        @see Content
        @see FetchResult
        
        @remarks this represents a made instance of Streamable.Result
        """
        def __init__(self) -> None: ...

        def toHttpResponse(self, req: HttpRequest) -> HttpResponse:
        """
        Constructs instance of HTTP response from this instances. Expectation is that the response in not immediately
        produced in memory, and HTTP response body will eventually be written in a streaming manner by the instance.
        """
            ...

