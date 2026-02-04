#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TestSuiteResult import TestSuiteResult

# Python definitions for the C3 type TestRunnerPy


class TestRunnerPy(Value):
    """
    @remarks this represents a made instance of TestRunnerPy
    """
    def __init__(self) -> None: ...

    @classmethod
    def pytestTest(cls, test: str, fileName: str, runtimeName: str=None) -> Union[TestSuiteResult]:
    """
    Tests the given code using the pytest framework.
    
    @param test
              The string representation of the pytest code to run
    @param fileName
              The file name where the pytest resides
    @param runtimeName
              The runtime name where the test is running. Will be empty if this test running in
              default (pytest_1_0_0) runtime. If this argument is specified, a suffix of the form
              `[env=py-my_runtime_name_here]` will be appended to the test case name in the test results.
    """
        ...
    @classmethod
    def getRuntimeNamesFromSource(cls, source: str) -> Union[Array[str]]:
    """
    Get list runtimes from `RUNTIMES` global variable defined in script.
    
    @param source
             python source pytest file.
    @return  a list of python runtime ids.
    """
        ...

