#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Workflow.Run import Workflow.Run
from c3.platform.Workflow import Workflow
from c3.assetOnboarding.AssetOnboardingExportSpec import AssetOnboardingExportSpec

# Python definitions for the C3 type AssetOnboardingExport


class AssetOnboardingExport(Value):
    """
    Represents the export functionality for asset onboarding.
    
    @remarks this represents a made instance of AssetOnboardingExport
    """
    def __init__(self) -> None: ...

    @classmethod
    def getWorkflow(cls) -> Union[Workflow]:
    """
    Gets the workflow that is used to run the export. Creates it if it doesn't already exist. The workflow
    feeds options to the {@link AssetOnboardingExportJob} and waits for it to complete. Then it
    fetches the results for use as {@link Workflow.Run#executionResults} and deletes these results from the db.
    """
        ...
    @classmethod
    def getLatestResults(cls) -> Union[any]:
    """
    Gets the latest results from the workflow that was used to run the export. This function will return the
    {@link Workflow.Run#executionResults} of the latest run of the workflow. This will be a JSON object with two keys
    `successfulResults` and `failedResults`,
    which contain {@link AssetOnboardingExportJobBatchResult}s
    """
        ...
    @classmethod
    def start(cls, inputs: AssetOnboardingExportSpec=None) -> Union[Workflow.Run]:
    """
    Starts the export to store the exported files in the basePath specified in the inputs - see {@link AssetOnboardingExportSpec#basePath}.
    Utilizes {@link AssetOnboardingExportJob} to do the export, and
    stores and cleans up its results in a {@link Workflow.Run} for ease of access and to minimize db usage.
    
    
    After the run has completed, the results can be accessed using `run.executionResults()`.
    This will return a map with keys `successfulResults` and `failedResults`, which contain the
    {@link AssetOnboardingExportJobBatchResult}s from the
    {@link AssetOnboardingExportJob} that was executed.
    
    @param inputs
           The specification defining the workflow's input parameters.
    @return A workflow run that contains the results and status of parsing.
    """
        ...

