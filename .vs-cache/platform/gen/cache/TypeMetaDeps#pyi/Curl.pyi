#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CurlApiSpec import CurlApiSpec
from c3.platform.CurlImportSpec import CurlImportSpec
from c3.platform.CurlFileSpec import CurlFileSpec

# Python definitions for the C3 type Curl


class Curl(Value):
    """
    This type helps to generate curl commands for file uploads, imports and other api commands
    
    @remarks this represents a made instance of Curl
    """
    def __init__(self) -> None: ...

    @classmethod
    def file(cls, spec: CurlFileSpec) -> str:
    """
    Generate curl command for FileSourceCollection given {@link CurlFileSpec}
    """
        ...
    @classmethod
    def import(cls, spec: CurlImportSpec) -> str:
    """
    Generate curl command for import given {@link CurlImportSpec}
    """
        ...
    @classmethod
    def api(cls, spec: CurlApiSpec) -> str:
    """
    Generate curl command for apis given {@link CurlApiSpec}
    """
        ...

