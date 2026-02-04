#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.Obj import Obj
from c3.platform.FeatureEvaluatable.Bin.Strategy import FeatureEvaluatable.Bin.Strategy

# Python definitions for the C3 type FeatureEvaluatable.Bin.JobBase


class JobBase(Value):
    """
    This type provides the common functions to be used in feature metastore related jobs, including {@link Feature.Store.MaterializationJob}
    and {@link Feature.Set.CreateSnapshotJob}.
    
    @remarks this represents a made instance of FeatureEvaluatable.Bin.JobBase
    """
    def __init__(self) -> None: ...

    @classmethod
    def doScanTargetType(cls, objs: Stream[Obj], subjectType: Type, strategy: FeatureEvaluatable.Bin.Strategy) -> Union[Stream[Obj]]:
    """
    This function is called to intercept the {@link MapReduce#scanTargetType} to increase the probability of subjects belonging to
    the same bin ending up in the same map task / batch.
    @param objs
           source subjects to be processed
    @param subjectType
           Persistable subjectType of the subjects
    @param strategy
           The strategy to be used for the binning of the subjects
    @return
           If feature metastore is used, return a new subjects stream that will be iterated in batches determined by the input binning strategy,
           otherwise return the original subjects stream.
    """
        ...

