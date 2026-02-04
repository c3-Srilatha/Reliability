#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Member import Member

# Python definitions for the C3 type MemberToEntity

T = TypeVar('T')

class MemberToEntity(Generic[T], Value):
    """
    Maps a Member to an Entity.
    
    @remarks this represents a made instance of MemberToEntity
    """
    
    member: Optional[Member]
    """
    The Member
    """

    target: Optional[T]
    """
    The entity that the Member belongs to.
    """
    def __init__(self, member: Optional[Member]=None, target: Optional[T]=None) -> None: ...


