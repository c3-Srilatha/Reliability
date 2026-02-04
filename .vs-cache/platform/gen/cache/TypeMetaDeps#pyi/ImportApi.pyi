#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse
from c3.platform.Pair import Pair
from c3.platform.ContentMeta import ContentMeta

# Python definitions for the C3 type ImportApi


class ImportApi(Restful, Value):
    """
    Type to dispatch import request for a canonical
    
    @remarks this represents a made instance of ImportApi
    """
    def __init__(self) -> None: ...

    @classmethod
    def handle(cls, httpPath: str, req: HttpRequest) -> Union[HttpResponse]:
    """
    Optional handler of all HTTP requests under `@restful(endpoint)` prefix from one and only sub type of Restful
    """
        ...
    @classmethod
    def targetFor(cls, httpPath: str) -> Union[Pair[Type, MethodType]]:
    """
    Find restful type and potentially method responsible for handling HTTP request with provided path or `null`
    """
        ...
    @classmethod
    def currentRequest(cls) -> Union[HttpRequest]:
    """
    While handling a RESTful request, the incoming HTTP request can be accessed. This works even for types that do not
    mixin **Restful**, but just use {@link Ann.Restful @restful} annotations.
    """
        ...
    def origin(self) -> Union[str]:
    """
    Get the origin URL for this endpoint. This only works for RESTful endpoints that mixin **Restful**.
    
    @see endpointOrigin
    """
        ...
    @classmethod
    def endpointOrigin(cls, endpoint: str) -> Union[str]:
    """
    Get the origin URL for an endpoint. This is useful for types that do not mixin **Restful**, but just use
    {@link Ann.Restful @restful} annotations.
    """
        ...
    @classmethod
    def process(cls, source: str, stream: Any=None, contentMeta: ContentMeta=None) -> None:
    """
    Wrapper to import incoming payload for a Source
    @return status of the import
    """
        ...

