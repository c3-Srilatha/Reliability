#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.jarvis.Jarvis.Step import Jarvis.Step
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget.Spec import BaseCodeAnalyzer.SourceControlGadget.Spec
from c3.jarvis.Jarvis.Step.Result import Jarvis.Step.Result

# Python definitions for the C3 type JarvisBaseToolkit.CodeAnalysisInit


class CodeAnalysisInit(JarvisBaseToolkit.Step, Value):
    """
    The Type that contains utility functions for running code analysis initialization Jarvis step.
    
    @remarks this represents a made instance of JarvisBaseToolkit.CodeAnalysisInit
    """
    def __init__(self) -> None: ...

    @classmethod
    def runStep(cls, step: Jarvis.Step) -> Union[Jarvis.Step.Result]:
    """
    The function to initialize code analysis for the Jarvis build.
    The step will retrieve and store metadata needed for running code analysis.
    """
        ...
    @classmethod
    def c3standardsrcForRepository(cls, step: Jarvis.Step=None) -> Union[any]:
    """
    Function to get the contents of the `.c3standardsrc` file for the repository.
    
    @param step
              The Jarvis step that is being run
    @return The `.c3standardsrc` file contents.
    """
        ...
    @classmethod
    def getSourceControlSpec(cls, step: Jarvis.Step=None) -> Union[BaseCodeAnalyzer.SourceControlGadget.Spec]:
    """
    The helper function to get the source control spec for initializing code analysis for the Jarvis build.
    
    @param step
              The Jarvis step that is being run
    @return The source control spec
    """
        ...
    @classmethod
    def queueDocGenAndCodeAnalysisSteps(cls, step: Jarvis.Step=None) -> None:
    """
    The helper function to queue the document generation and code analysis steps for the Jarvis build.
    """
        ...

