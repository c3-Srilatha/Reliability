#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.PrCompliance.Result import BaseCodeAnalyzer.PrCompliance.Result
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.Formatter.SummarySection import BaseCodeAnalyzer.Formatter.SummarySection

# Python definitions for the C3 type BaseCodeAnalyzer.Formatter.PrCompliance


class PrCompliance(Value):
    """
    Formatter to get the components of the PR compliance summary section.
    
    @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.PrCompliance
    """
    def __init__(self) -> None: ...

    @classmethod
    def getTitle(cls, prComplianceResults: Array[BaseCodeAnalyzer.PrCompliance.Result]=None) -> str:
    """
    Helper to get the title of the PR compliance check summary segment.
    
    @param prComplianceResults
              The PR compliance check results.
    @returns the title of the PR compliance check summary segment.
    """
        ...
    @classmethod
    def getContent(cls, prComplianceResults: Array[BaseCodeAnalyzer.PrCompliance.Result]=None) -> str:
    """
    Helper to get the string content of the PR compliance check summary segment.
    
    @param prComplianceResults
              The PR compliance check results.
    @returns the string content of the PR compliance check summary segment.
    """
        ...
    @classmethod
    def summarizeResults(cls, prComplianceResults: Array[BaseCodeAnalyzer.PrCompliance.Result]=None) -> BaseCodeAnalyzer.Formatter.SummarySection:
    """
    Helper to get the package results section of the summary message.
    
    @param prComplianceResults
              The PR compliance check results.
    @returns the components for the PR guideline compliance summary section.
    """
        ...

