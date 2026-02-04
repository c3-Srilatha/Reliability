#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ActionStats import ActionStats
from c3.platform.DeepRef import DeepRef

# Python definitions for the C3 type ImportProgress


class ImportProgress(Value):
    """
    Base type used to report progress from {@link Persistable#importData}.
    
    Example:
    
    entity type
    	TestProgress mixin ImportProgress {
        objCount : int
    
        @js(env="server")
        reportImportProgress : ~ {@testCode@}
     }
    
    testCode: {|
      function reportImportProgress(progressRef, stats) {
        obj = TestProgress.get(TestProgress.make({id:progressRef.id}));
        obj = obj.putField("objCount", stats.objCount);
        TestProgress.update(obj);
      }
    |}
    
    Exceptions thrown by callback will be ignored and logged.
    
    @remarks this represents a made instance of ImportProgress
    """
    def __init__(self) -> None: ...

    @classmethod
    def reportImportProgress(cls, progressRef: DeepRef=None, stats: ActionStats=None) -> None:
    """
    Function that will be called by the platform to report progress if {@link ImportDataSpec.progressCallback} is specified.
    
    @param progressRef
              Reference of instance specified in {@link ImportDataSpec.progressCallback}.
    @param stats
                     Progress stats being reported.
    """
        ...

