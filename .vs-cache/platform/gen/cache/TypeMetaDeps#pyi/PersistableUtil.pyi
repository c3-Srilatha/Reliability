#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ActionStats import ActionStats
from c3.platform.Type import Type

# Python definitions for the C3 type PersistableUtil


class PersistableUtil(Value):
    """
    Type containing various util/helper function for {@link Persistable} operations.
    
    @remarks this represents a made instance of PersistableUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def mergeViewFilter(cls, type: Type, inputFilter: str=None) -> Union[str]:
    """
    Merges the view filter, if any, to the filter specified in a {@link FetchSpec} or {@link EvaluateSpec}.
    """
        ...
    @classmethod
    def expandIncludeSpecForReadCalcDepIncludes(cls, query: Any=None) -> None:
    """
    Expands the include spec for a query with any fields that any included read calc fields depend on.
    
    @param query
           Query to expand the include spec for.
    """
        ...
    @classmethod
    def expandFilterForAuthz(cls, type: Type, authzAction: str, query: Any=None, forceAcl: bool=None) -> bool:
    """
    Expands the input filter with any necessary filtering for authorization.
    
    @param type
           Type being processed.
    @param query
           Query to expand the filter for.
    @param authzAction
           Action that should be used for authorization.
    @param forceAcl
           True if acl authorization should be forced (e.g. enforced even for sysadmin, etc.).
    
    @return False if it was determined up front that the user has no access to anything being requested, true
            otherwise.
    """
        ...
    @classmethod
    def isAlwaysAuthorizedForAction(cls, type: Type, authzAction: str) -> bool:
    """
    @return true if the action is always authorized for the specified type/user.
    """
        ...
    @classmethod
    def expandFilterForSeedData(cls, type: Type, query: Any=None, fetchHiddenSeedData: bool=None) -> None:
    """
    Adds the hidden filter for seed data types for users other than authorizer or provisioner
    
    @param type
           Type being processed.
    @param query
           the query object to apply the filter to
    @param fetchHiddenSeedData
           True if the request is fetching hidden seedData.
    """
        ...
    @classmethod
    def stats(cls, createdObjCount: int, updatedObjCount: int, removedObjCount: int, failedObjCount: int, objCount: int, time: float, dbWait: float) -> ActionStats:
    """
    Constructs requested Stats obj.
    """
        ...
    @classmethod
    def skipAuthz(cls) -> bool:
    """
    @return true if the current context should always skip authz (e.g. root)
    """
        ...

