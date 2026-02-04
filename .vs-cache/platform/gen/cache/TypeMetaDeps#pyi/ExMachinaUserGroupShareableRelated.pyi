#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjError import ObjError
from c3.platform.ObjList import ObjList

# Python definitions for the C3 type ExMachinaUserGroupShareableRelated

S = TypeVar('S')

class ExMachinaUserGroupShareableRelated(Generic[S], ExMachinaDefaultAclRemover[S], Value):
    """
    Common helper functions for types related to types that mix {@link ExMachinaUserGroupShareable}.
    
    @remarks this represents a made instance of ExMachinaUserGroupShareableRelated
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
    @classmethod
    def validateCanCreateUnderParent(cls, objs: Array[S], parentFieldName: str=None) -> Union[ObjList[S]]:
    """
    Common logic to run before creation of a record related to a {@link ExMachinaUserGroupShareable}. This checks to make sure
    the current user has access to the parent object before creating the record. This should be called within the
    `beforeCreate` of a Persistable type that mixes `ExMachinaUserGroupShareableRelated`.
    
    @param objs
             The objects to check permissions for. These should come directly from the `beforeCreate` call.
    @param parentFieldName
             The field name on the current object that represents the parent. In most cases, this may be the field
             name that represents the {@link ExMachinaUserGroupShareable}, but may also be a field name that
             references another type mixing {@link ExMachinaUserGroupShareableRelated}.
    """
        ...

