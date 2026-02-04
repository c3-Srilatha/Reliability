#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.jarvis.Jarvis.Step import Jarvis.Step
from c3.jarvis.Jarvis.Step.Result import Jarvis.Step.Result

# Python definitions for the C3 type JarvisBaseToolkit.Step


class Step(Value):
    """
    The abstract Type for all Jarvis steps in the package. All steps will mix in this Type.
    
    @remarks this represents a made instance of JarvisBaseToolkit.Step
    """
    def __init__(self) -> None: ...

    @classmethod
    def runStep(cls, step: Jarvis.Step) -> Union[Jarvis.Step.Result]:
    """
    The function to run the step in the Jarvis build.
    
    @param step
              The Jarvis step that is being run
    @return The result of the step
    """
        ...

