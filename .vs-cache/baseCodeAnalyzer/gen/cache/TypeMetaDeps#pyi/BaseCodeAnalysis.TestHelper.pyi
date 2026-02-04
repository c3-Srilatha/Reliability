#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Metric.Directive import BaseCodeAnalysis.Metric.Directive
from c3.baseCodeAnalyzer.BaseCodeAnalysis.FileSpec import BaseCodeAnalysis.FileSpec

# Python definitions for the C3 type BaseCodeAnalysis.TestHelper


class TestHelper(Value):
    """
    **TESTING PURPOSES ONLY**
    
    Helper functions for running tests in the `baseCodeAnalyzer` package.
    
    @remarks this represents a made instance of BaseCodeAnalysis.TestHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateProperties(cls, actual: Any=None, expected: Any=None, context: str='\'results\'') -> None:
    """
    Helper function to mimic the behavior of `jasmine.objectContaining` and `jasmine.arrayWithExactContents`
    since these functions provide difficult-to-read error messages.
    
    @param actual
              The actual object to compare against the expected object.
    @param expected
              The expected object to compare against the actual object.
    @param context
              The label to use in the error message when the actual and expected objects don't match.
    """
        ...
    @classmethod
    def validateNoInternalErrors(cls, results: Any=None) -> None:
    """
    Helper function to validate that all {@link BaseCodeAnalysis.Metric.Result}s
    contain no [internal error messages](BaseCodeAnalysis.Metric.Result#internalErrorMessage).
    
    @param results
              The array of {@link BaseCodeAnalysis.Metric.Result}s to validate.
    """
        ...
    @classmethod
    def getTestFileSpecsForParseDirectives(cls) -> Union[Array[BaseCodeAnalysis.FileSpec]]:
    """
    Helper function to get a list of {@link BaseCodeAnalysis.FileSpec}s for testing.
    
    @returns An array of {@link BaseCodeAnalysis.FileSpec}s.
    """
        ...
    @classmethod
    def getExpectedResultForParseDirectives(cls) -> Union[Map[str, Array[BaseCodeAnalysis.Metric.Directive]]]:
    """
    Helper function to get the map of file paths to the array of parsed {@link BaseCodeAnalysis.Metric.Directive}s.
    This function is useful for testing the functionality of parsing directives from an array of {@link BaseCodeAnalysis.FileSpec}s.
    
    @returns A map of file paths to the array of parsed {@link BaseCodeAnalysis.Metric.Directive}s.
    """
        ...

