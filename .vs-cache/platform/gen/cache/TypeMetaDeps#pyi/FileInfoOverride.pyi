#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.File import File
from c3.platform.SourceFileInfo import SourceFileInfo

# Python definitions for the C3 type FileInfoOverride


class FileInfoOverride(Value):
    """
    @remarks this represents a made instance of FileInfoOverride
    """
    
    fileInfoOverride: Optional[Callable[[Union[File]], Union[SourceFileInfo]]]=None
    """
    Update the fileInfoOverride for a file
    A user provided lambda function for determining Source File Info.
    This field is optional and overrides default Source File Info inference from TenantConfig
    if your filename parsed returns you SourceFileInfo like this
    ```
     { src: 'MyTypeName', timestamp: '2017-01-01', customer: 'me'}
    ```
    But your type name is 'CanonicalMyTypeName'
    you can create a lambda like this to override as below
    ```
    function f (file){
     var info = Canonical.parseFileName(file.safeUrl());
     return info.putFields('src', 'Canonical'+info.src);
    }
    var overrideLambda = Lambda.fromJavascript(f.toString());
    ```
    """
    def __init__(self, fileInfoOverride: Optional[Callable[[Union[File]], Union[SourceFileInfo]]]=None) -> None: ...


