#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AwsRds import AwsRds

# Python definitions for the C3 type PostgreSQL


class PostgreSQL(Value):
    """
    This type provide interface to postgreSQL of a cluster.
    
    @remarks this represents a made instance of PostgreSQL
    """
    def __init__(self) -> None: ...

    @classmethod
    def status(cls, clusterId: str=None) -> Union[Array[AwsRds]]:
    """
    check the postgreSQL status of the cluster
    @param clusterId
           the cluster where to check postgreSQL status. If it is not provided, will use the current clusterId
    @return postgreSQL status of given cluster
            return true if there is at least one available postgreSQL instance that is available
            return false if there is no available postgreSQL instance
    """
        ...
    @classmethod
    def start(cls, clusterId: str=None, count: int='1') -> None:
    """
    start postgreSQL for the cluster if not already exists
    @param clusterId
           the cluster where to bring up postgreSQL. If it is not provided, will use the current clusterId
    @param count
           the number of postgreSQL to bring up. If it is not provided, will use default 1
    """
        ...

