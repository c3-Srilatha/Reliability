#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.dataValidation.DataValidationRuleResult import DataValidationRuleResult

# Python definitions for the C3 type TestDataValidationRules


class TestDataValidationRules(Value):
    """
    Test type for data validation rules.
    
    @remarks this represents a made instance of TestDataValidationRules
    """
    def __init__(self) -> None: ...

    @classmethod
    def idMatchesName(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Checks if id and name fields match.
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...
    @classmethod
    def matchPassFilter(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Checks if the {@link TestDataValidationSubject#passFilter} is true.
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...
    @classmethod
    def dummyRuleWithResult(cls, args: Map[str, Any]=None) -> Union[Array[DataValidationRuleResult]]:
    """
    Waits for a couple seconds and returns a dummy result.
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...
    @classmethod
    def dummyRuleWithoutResult(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Immediately returns nothing.
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...
    @classmethod
    def dummyRuleWithSubjectResult(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Returns a dummy result with the subject as a related entity
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...
    @classmethod
    def throwError(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Immediately throws an error.
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...
    @classmethod
    def notMatchingPossibleOutputs(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    It is used for testing case when {@DataValidationRuleResult#output} does not match with {@DataValidationRule#possibleOutputs}.
    @param args
        map that contains any value that the function could needs to run the logic, like subjectId.
    """
        ...

