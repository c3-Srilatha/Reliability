#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Workflow.Run import Workflow.Run
from c3.platform.Workflow import Workflow

# Python definitions for the C3 type AssetOnboardingImport


class AssetOnboardingImport(Value):
    """
    Handles the import for the asset onboarding application
    
    @remarks this represents a made instance of AssetOnboardingImport
    """
    def __init__(self) -> None: ...

    @classmethod
    def getWorkflow(cls) -> Union[Workflow]:
    """
    Gets the workflow that is used to run the import. Creates it if it doesn't already exist.
    @return The workflow to be executed for the import
    """
        ...
    @classmethod
    def startImport(cls, spec: Map[str, str]=None) -> Union[Workflow.Run]:
    """
    Gets the workflow and starts it. The workflow extracts all the files from the zip file, reads them and adds necessary changes to the application.
    The workflow does not modify any existing entities, rather it just adds data.
    @param spec
        Contains two main properties - path of uploaded zip file and the path where it will be unzipped.
    @return The workflow run being executed for the import
    """
        ...

