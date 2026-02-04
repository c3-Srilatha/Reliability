#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ExMachinaInputSanitizer


class ExMachinaInputSanitizer(Value):
    """
    Type for parsing and sanitizing input.
    
    @remarks this represents a made instance of ExMachinaInputSanitizer
    """
    def __init__(self) -> None: ...

    @classmethod
    def sanitize(cls, input: str) -> Union[str]:
    """
    Wrapper for {@link Html.sanitize} that also preserves special characters (&, <, >)
    @param input
             The input to sanitize
    @return The sanitized string
    """
        ...
    @classmethod
    def revertHTMLEncodedChars(cls, encodedString: str=None) -> Union[str]:
    """
    Reverts special characters from HTML-encoded input to the characters
    """
        ...

