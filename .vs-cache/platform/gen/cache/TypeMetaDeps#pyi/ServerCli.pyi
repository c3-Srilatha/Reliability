#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CharStream import CharStream

# Python definitions for the C3 type ServerCli


class ServerCli(Value):
    """
    CLI tool that executes in a server node's OS.
    
    @remarks this represents a made instance of ServerCli
    """
    def __init__(self) -> None: ...

    @classmethod
    def exec(cls, in_: str=None, args: Array[str]=None) -> Union[str]:
    """
    Executes this OS command by passing text input and args and expecting text output.
    """
        ...
    @classmethod
    def stream(cls, in_: CharStream=None, args: Array[str]=None) -> CharStream:
    """
    Starts execution of this OS command passing text stream as input and args and expecting text stream as output.
    """
        ...
    @classmethod
    def usage(cls) -> str:
    """
    @return short usage description of the CLI command.
    """
        ...
    @classmethod
    def cmd(cls) -> str:
    """
    @return OS command name.
    """
        ...

