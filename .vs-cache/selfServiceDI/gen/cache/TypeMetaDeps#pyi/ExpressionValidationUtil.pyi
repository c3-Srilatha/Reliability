#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExpressionFunctionInfo import ExpressionFunctionInfo
from c3.platform.FieldType import FieldType

# Python definitions for the C3 type ExpressionValidationUtil


class ExpressionValidationUtil(Value):
    """
    Utility functions for parsing and validating expressions
    
    @remarks this represents a made instance of ExpressionValidationUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateExpression(cls, expression: str=None, expressionFunctions: Array[ExpressionFunctionInfo]=None, sourceFields: Array[FieldType]=None) -> bool:
    """
    Validates an expression for syntactic and semantic validity
    using expressionFunctions and sourceFields
    as the source of truth for function and field existence.
    @param expression
             The expression string to validate
    @param expressionFunctions
             Expression functions for semantic validity
    @param sourceFields
             Source fields for semantic validity
    @returns true if the expression is valid, false otherwise
    """
        ...
    @classmethod
    def getNodeWithStartLocationFromExpression(cls, expression: str=None, index: int=None) -> Union[Any]:
    """
    Attempts to parse an expression as an Abstract Syntax Tree and returns
    a node with a start of the index
    @param expression
             The expression to parse
    @param index
             The index of the start location of the node to find
    @returns a node with the start location of index
    """
        ...

