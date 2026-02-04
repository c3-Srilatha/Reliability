#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse

# Python definitions for the C3 type Streamable.Result


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

