#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type External


class External(Value):
    """
    Types that mixin the External type are assumed to not live in any c3 managed datastore.  Their schema will not be
    created during provisioning.
    
    @remarks this represents a made instance of External
    """
    def __init__(self) -> None: ...


