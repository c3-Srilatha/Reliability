#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TimeInfo import TimeInfo
from c3.platform.EnvBillEvalOptions import EnvBillEvalOptions
from c3.platform.Timeseries import Timeseries

# Python definitions for the C3 type EnvBillable


class EnvBillable(Value):
    """
    This type provides an interface return cost dimensions from all-env
    to the Tenant, Tag and Cluster
    
    @remarks this represents a made instance of EnvBillable
    """
    def __init__(self) -> None: ...

    @classmethod
    def cost(cls, spec: TimeInfo=None) -> Union[Timeseries[Any]]:
    """
    return cost timeseries from AwsCost
    @param spec
              TSEvalOptions containing interval,start & end
    """
        ...
    @classmethod
    def amortizedCost(cls, spec: TimeInfo=None) -> Union[Timeseries[Any]]:
    """
    return amortizedCost timeseries from AwsCost
    @param spec
              TSEvalOptions containing interval,start & end
    """
        ...
    @classmethod
    def gbs(cls, spec: TimeInfo=None) -> Union[Timeseries[Any]]:
    """
    return gbs timeseries from AwsCost
    @param spec
              TSEvalOptions containing interval,start & end
    """
        ...
    @classmethod
    def hours(cls, spec: TimeInfo=None) -> Union[Timeseries[Any]]:
    """
    return hours timeseries from AwsCost
    @param spec
              TSEvalOptions containing interval,start & end
    """
        ...
    @classmethod
    def buildEnvBillEvalSpec(cls, spec: TimeInfo=None) -> Union[EnvBillEvalOptions]:
    """
    return EnvBillEvalOptions from AwsCost
    @param spec
              TSEvalOptions containing interval,start & end
    """
        ...

