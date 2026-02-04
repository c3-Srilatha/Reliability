#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Code.Writer import Code.Writer

# Python definitions for the C3 type Code.Lang


class Lang(Value):
    """
    The "lang" types collect the language-specific node types capable of writing the syntax.
    
    For each "leaf node", such as {@link Code.Method}, languages that support that node must implement a type that
    mixes it. All languages support methods (functions), so we have {@link Code.Java.Method}, {@link Code.Js.Method}
    and {@link Code.Py.Method}.
    
    If a leaf type is annotated such that it is not supported in one or more languages, then those language-specific
    types should not be defined. (The annotations can be used to fail without requiring custom code for unsupported
    nodes.) For example {@link Code.Spread} is not supported in Java, so there is no ~Code.Java.Spread~, although
    there are ones for {@link Code.Js.Spread JavaScript} and {@link Code.Py.Spread Python}.
    
    @remarks this represents a made instance of Code.Lang
    """
    def __init__(self) -> None: ...

    @classmethod
    def makeWriter(cls, version: str=None) -> Code.Writer:
    """
    Create a default writer for this language.
    """
        ...

