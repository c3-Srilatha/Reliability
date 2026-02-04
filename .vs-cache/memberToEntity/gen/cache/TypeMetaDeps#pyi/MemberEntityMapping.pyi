#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type MemberEntityMapping

T = TypeVar('T')

class MemberEntityMapping(Generic[T], Value):
    """
    Holds references to MemberToEntity mappings
    
    @remarks this represents a made instance of MemberEntityMapping
    """
    
    memberIntersections: Optional[Array[T]]=None
    """
    References to MemberToEntity that map to this instance.
    """
    def __init__(self, memberIntersections: Optional[Array[T]]=None) -> None: ...


