#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PersistableWritable import PersistableWritable

# Python definitions for the C3 type PersistableUpsertHelper


class PersistableUpsertHelper(Value):
    """
    Helper functions for persistable types that override upsert behavior.
    
    @remarks this represents a made instance of PersistableUpsertHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def doUpsert(cls, state: Any) -> Union[Any]:
    """
    Override to perform customized upsert logic.
    
    @param state
           Current upsert state.
    
    @return The appropriate result (e.g. ObjList, Persistable<?>, etc) depending on the upsert operation.
    """
        ...
    @classmethod
    def doUnremove(cls, obj: PersistableWritable) -> Union[PersistableWritable]:
    """
    Override to perfrom the 'unremove' operation.
    
    @param obj
           Obj to unremove.
    
    @return The unremoved Obj, if any and null otherwise.
    """
        ...

