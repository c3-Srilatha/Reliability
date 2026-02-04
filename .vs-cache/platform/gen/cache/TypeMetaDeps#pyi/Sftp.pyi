#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Content import Content

# Python definitions for the C3 type Sftp


class Sftp(Value):
    """
    Type used to transfer content using SFTP.
    
    Only username/password authentication is supported.
    
    @remarks this represents a made instance of Sftp
    """
    def __init__(self) -> None: ...

    @classmethod
    def put(cls, url: str, content: Content) -> None:
    """
    Upload content to the specified sftp url.
    
    @param url
             Fully specified sftp url: sftp://username:password@hostname/file-path
    @param content
             AbstractContent to upload to the specified sftp url.
    """
        ...

