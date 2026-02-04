#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.testtools.DataReplicatorSpec import DataReplicatorSpec

# Python definitions for the C3 type DataReplicator


class DataReplicator(Value):
    """
    Data replication API that can be used to setup data before a PSR test for any base application
    
    @remarks this represents a made instance of DataReplicator
    """
    def __init__(self) -> None: ...

    @classmethod
    def setupData(cls, spec: DataReplicatorSpec) -> bool:
    """
    Main API for setting up data for PSR tests
    @param spec
      {@link DataReplicatorSpec} instance that configures the replication, post-replication and sanity check processes during setup
    @return Whether the sanity check passes successfully if provided in {@link DataReplicatorSpec}, true otherwise
    """
        ...

