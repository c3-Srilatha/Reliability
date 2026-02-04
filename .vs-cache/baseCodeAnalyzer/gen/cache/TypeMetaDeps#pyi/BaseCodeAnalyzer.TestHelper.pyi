#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Result.Processed import BaseCodeAnalysis.Result.Processed
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Result import BaseCodeAnalysis.Result
from c3.baseCodeAnalyzer.BaseCodeAnalysis.FileSpec import BaseCodeAnalysis.FileSpec
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.SourceControlGadget.FileDiff import BaseCodeAnalyzer.SourceControlGadget.FileDiff
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Metric.Message.Processed import BaseCodeAnalysis.Metric.Message.Processed

# Python definitions for the C3 type BaseCodeAnalyzer.TestHelper


class TestHelper(Value):
    """
    Type to store helper functions to test functionality for {@link BaseCodeAnalyzer}.
    
    @remarks this represents a made instance of BaseCodeAnalyzer.TestHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def getExpectedFileSpecs(cls, uninstrumented: bool='false') -> Union[Array[BaseCodeAnalysis.FileSpec]]:
    """
    Function to return a mock compare result for testing {@link BaseCodeAnalyzer#getFileSpecsForPackage}.
    
    @param instrumented
              Prefix all files with `UNINSTRUMENTED` on the first line to mock an uninstrumented ZIP
              file passed to {@link BaseCodeAnalyzer.AnalyzeCodeChangesSpec#uninstrumentedArtifactZip}.
    @returns the file specs of the mock files created in the 'baseCodeAnalyzerIntegTest' package.
    """
        ...
    @classmethod
    def getProcessResultsTestMockResults(cls) -> Union[Array[BaseCodeAnalysis.Result]]:
    """
    Function to return a mock code analysis result for testing {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
    
    @returns mock code analysis metric results.
    """
        ...
    @classmethod
    def getProcessResultsTestBaseBranchMockResults(cls) -> Union[Array[BaseCodeAnalysis.Result.Processed]]:
    """
    Function to return a mock base branch code analysis results for testing
    {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
    
    @returns mock base branch code analysis results.
    """
        ...
    @classmethod
    def getProcessResultsTestMockFileDiffs(cls) -> Union[Map[str, BaseCodeAnalyzer.SourceControlGadget.FileDiff]]:
    """
    Function to return a mock compare result for testing {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
    
    @returns mock file diffs for files.
    """
        ...
    @classmethod
    def getProcessResultsTestExpectedResults(cls) -> Union[Array[BaseCodeAnalysis.Result.Processed]]:
    """
    Function to return a mock compare result for testing {@link BaseCodeAnalyzer#processResultsForCodeChanges}.
    
    @returns expected filtered {@link BaseCodeAnalysis.Metric.Message}s when the mock code analysis
             metric results and mock file diffs from #getProcessResultsTestMockResults and #getProcessResultsTestMockFileDiffs
             are passed into the {@link BaseCodeAnalyzer#processResultsForCodeChanges} function.
    """
        ...
    @classmethod
    def getNotifyPullRequestMockResults(cls, withError: bool=None) -> Union[Array[BaseCodeAnalysis.Result]]:
    """
    Function to return a mock compare result for testing {@link BaseCodeAnalyzer#notifyPullRequest}.
    
    @param withError
              Boolean to indicate whether the results should include an message with 'ERROR' severity.
    @returns mock code analysis metric results for file in the 'baseCodeAnalyzerIntegTest' package.
    """
        ...
    @classmethod
    def getNotifyPullRequestMockBaseBranchResults(cls) -> Union[Array[BaseCodeAnalysis.Result.Processed]]:
    """
    Function to get mock base branch results to be passed into {@link BaseCodeAnalyzer#notifyPullRequest}.
    
    @returns the mock processed results from the base branch.
    """
        ...
    @classmethod
    def getNotifyPullRequestMockFileDiffs(cls) -> Union[Map[str, BaseCodeAnalyzer.SourceControlGadget.FileDiff]]:
    """
    Function to return a mock compare result for testing {@link BaseCodeAnalyzer#notifyPullRequest}.
    
    @returns mock file diffs for files changed in the 'baseCodeAnalyzerIntegTest' package.
    """
        ...
    @classmethod
    def getNotifyPullRequestExpectedComments(cls, withError: bool=None) -> Union[Array[BaseCodeAnalysis.Metric.Message.Processed]]:
    """
    Function to return a mock compare result for testing {@link BaseCodeAnalyzer#notifyPullRequest}.
    
    @param withError
              Boolean to indicate whether the results should include an message with 'ERROR' severity.
    @returns expected filtered {@link BaseCodeAnalysis.Metric.Message.Processed}s when the mock code analysis metric
             results and mock file diffs from {@link #getNotifyPullRequestMockResults} and
             {@link getNotifyPullRequestMockFileDiffs} are passed into
             the {@link BaseCodeAnalyzer#notifyPullRequest} function.
    """
        ...
    @classmethod
    def getNotifyPullRequestExpectedResults(cls, withError: bool=None) -> Union[Array[BaseCodeAnalysis.Result.Processed]]:
    """
    Function to get the expected processed results returned by {@link BaseCodeAnalyzer#notifyPullRequest}.
    
    @param withError
              Boolean to indicate whether the results should include an message with 'ERROR' severity.
    @returns expected processed results.
    """
        ...

