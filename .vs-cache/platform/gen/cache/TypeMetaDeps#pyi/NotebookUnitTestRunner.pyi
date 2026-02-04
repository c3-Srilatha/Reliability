#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TestSuiteResult import TestSuiteResult

# Python definitions for the C3 type NotebookUnitTestRunner


class NotebookUnitTestRunner(Value):
    """
    Test runner for testing jupyter notebook (`*.ipynb`) content. Test infrastructure will execute a
    "unit" test by simulating the cell execution via the `nbconvert` python package.
    For a heavier-weight "integration" test of the same content that uses the {@link Jupyter} service, see
    {@link NotebookTestRunner}.
    
    @remarks this represents a made instance of NotebookUnitTestRunner
    """
    def __init__(self) -> None: ...

    @classmethod
    def testNotebook(cls, notebookContent: str, fileName: str, pkgName: str=None) -> TestSuiteResult:
    """
    Test an ipynb notebook.
    
    @param notebookContent
             the content of the ipynb.
    @param fileName
             the name of the ipynb file.
    @param pkgName
              {@link Pkg} name of Pkg to connect to. Should exist under the zoo repository.
    @return test results.
    """
        ...
    @classmethod
    def executeNotebookTest(cls, notebookContent: str, fileName: str, serverUrl: str, runtimeName: str=None) -> TestSuiteResult:
    """
    Execute the provided notebook content, using python's `nbconvert` package, and return results.
    @param notebookContent
             the content of the ipynb.
    @param fileName
             the name of the ipynb file.
    @param serverUrl
             url to connect to the running c3 server.
    @param runtimeName
             name of the runtime to use for this test.
    @return test results.
    """
        ...

