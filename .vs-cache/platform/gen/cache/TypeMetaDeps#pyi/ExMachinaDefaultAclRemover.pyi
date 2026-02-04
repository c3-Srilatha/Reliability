#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjError import ObjError

# Python definitions for the C3 type ExMachinaDefaultAclRemover

S = TypeVar('S')

class ExMachinaDefaultAclRemover(Generic[S], Value):
    """
    @remarks this represents a made instance of ExMachinaDefaultAclRemover
    """
    def __init__(self) -> None: ...

    @classmethod
    def removeCreatorAclEntry(cls, objs: Array[S], avoidRemovalIfNoCurrentMember: bool=None) -> Union[Array[ObjError]]:
    """
    Common logic to run after creation of an instance to remove the {@link AclEntry} for the creator.
    This can be called within the `afterCreate` of a Persistable type. Due to a platform limitation, this is exposed
    as a utility function rather than an `afterCreate` method on a type that can be mixed.
    
    @param objs
              List of objs that are about to be created.  The objs will be the entire input objs being created.
    @param avoidRemovalIfNoCurrentMember
              Whether to avoid removing default ACL if the user does not have a current member. Useful for creating
              records from the static console where an admin may not have an account
    """
        ...

