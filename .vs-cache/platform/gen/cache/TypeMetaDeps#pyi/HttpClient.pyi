#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Promise import Promise
from c3.platform.HttpRequest import HttpRequest

# Python definitions for the C3 type HttpClient


class HttpClient(Value):
    """
    Asynchronous HTTP client
    
    @remarks this represents a made instance of HttpClient
    """
    def __init__(self) -> None: ...

    @classmethod
    def open(cls, rootUrl: str, auth: str, defaultRequestHeaders: Map[str, str]=None) -> HttpClient:
    """
    Opens HTTP client to a given url ready to send requests
    """
        ...
    def rootUrl(self) -> str:
    """
    @return root URL of this client
    """
        ...
    def url(self, encodedPath: str) -> str:
    """
    @return URL for a given encoded path
    """
        ...
    def clearDefaultRequestHeaders(self) -> None:
    """
    Clears all default request headers including Authorization
    """
        ...
    def setDefaultRequestHeader(self, name: str, value: str) -> None:
    """
    Sets or clears provided default request header
    """
        ...
    def defaultRequestHeaders(self) -> Union[Map[str, str]]:
    """
    @return default HTTP headers that are sent with every request
    """
        ...
    @overload
    def request(self, method: str, encodedPath: str) -> HttpRequest:
    """
    @return new HttpRequest for a given encoded path
    """
        ...
    @overload
    def request(self, method: str, encodedPath: str, entity: any) -> HttpRequest:
    """
    @return new HttpRequest for a given path and json payload
    """
        ...
    def sendJson(self, method: str, encodedPath: str, entity: any=None) -> Promise[HttpResponse]:
    """
    @return promise of response for provided request
    """
        ...
    def close(self) -> None:
    """
    Closes this connection
    """
        ...

