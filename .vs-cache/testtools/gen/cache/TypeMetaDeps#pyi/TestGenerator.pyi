#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Timeseries import Timeseries
from c3.platform.File import File

# Python definitions for the C3 type TestGenerator


class TestGenerator(Value):
    """
    Utility type for automated generation of jasmine tests
    
    @remarks this represents a made instance of TestGenerator
    """
    def __init__(self) -> None: ...

    @classmethod
    def generateMetricExpectation(cls, title: str=None, expression: str=None, type: str=None, id: str=None, interval: str=None, start: str=None, end: str=None, result: Array[float]=None, bindings: Map[str, Any]=None) -> Union[str]:
    """
    Generate a jasmine it block with title 'title', that tests evaluating 'expression' on 'Obj'
    at interval 'interval' from 'start' to 'end' and the given 'bindings' will have result.data array = 'result'
    """
        ...
    @classmethod
    def generateDescribe(cls, title: str=None, expectations: Array[str]=None) -> Union[str]:
    """
    Generate a jasmine describe block with title 'title' and the given expectations
    """
        ...
    @classmethod
    def generateTest(cls, testScenarioIds: Array[str]) -> Union[str]:
    """
    Generate a test file containing multiple test scenarios.
    
    
    @param testScenarioIds
               The ids of the test scenarios saved in the database
    
    @return the entire test file text as a string
    """
        ...
    @classmethod
    def saveTestToMetadataFile(cls, testScenarioIds: Array[str]) -> Union[File]:
    """
    Generate a test file containing multiple test scenarios and save it to a MetadataFile
    
    
    @param testScenarioIds
               The ids of the test scenarios saved in the database
    
    @return the saved File instance
    """
        ...
    @classmethod
    def generateExpectationData(cls, sourceType: str, expression: str, start: datetime, end: datetime, interval: str, childMetricData: Array[any]) -> Union[Timeseries[float]]:
    """
    Generate expectation data for a test scenario
    
    @param sourceType
               The type to be evaluated on
    
    @param testScenarioIds
               The ids of the test scenarios saved in the database
    
    @return the entire test file text as a string
    """
        ...

