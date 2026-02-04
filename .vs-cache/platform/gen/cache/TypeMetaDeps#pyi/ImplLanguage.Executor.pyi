#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ImplLanguage.Executor


class Executor():
    """
    The executor to execute source code of an {@link ImplLanguage}.
    
    @remarks this represents a made instance of ImplLanguage.Executor
    """
    
    NODE: Optional[str]=None
    """
    Execute from the Node.js (caller) address space. This is the only option for actions that need to use native
    methods of the V8 engine and/or custom Node.js modules or interact with the local environment.
    
    This is an executor for the server and the client.
    """

    RHINO: Optional[str]=None
    """
    Execute from the server address space. This may be used for actions that need to execute javascript source code
    from the Java server.
    
    This is an executor for the server.
    """

    BROWSER: Optional[str]=None
    """
    This may be used for actions that need that need to be executed using a JS browser.
    
    This is an executor for the client.
    """

    IPYTHON: Optional[str]=None
    """
    Execute from the IPython (caller) address space. This is the only option for actions that need to use native
    methods of the [IPython module](https://ipython.org/).
    This is an executor for the client.
    """

    PY4J: Optional[str]=None
    """
    Execute from the server address space. This is the only option for actions that need to dynamically access Java
    objects from the Java server while running in an external Python process.
    
    This is an executor for the server.
    """

    JEP: Optional[str]=None
    """
    Execute from the server address space. This is the only option for actions that need to execute Python source code
    in a JEP interpreter from within the Java server.
    
    This is an executor for the server. The only runtimes which JEP executor can run are py-data and its ancestors.
    """

    JAVA: Optional[str]=None
    """
    The executor for java actions.
    
    This is an executor for the server.
    """
    def __init__(self, NODE: Optional[str]=None, RHINO: Optional[str]=None, BROWSER: Optional[str]=None, IPYTHON: Optional[str]=None, PY4J: Optional[str]=None, JEP: Optional[str]=None, JAVA: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...
    @classmethod
    def canRun(cls, firstExecutor: str=None, secondExecutor: str=None) -> bool:
    """
    @return if @firstExecutor can run @secondExecutor. An executor with null value can only run an executor with null value.
    A non-null executor can run itself or an executor with null value.
    """
        ...
    @classmethod
    def locations(cls, executor: str=None) -> Union[Array[str]]:
    """
    @return All valid locations for the executor. If the executor is null we return all valid locations.
    """
        ...
    @classmethod
    def regexPattern(cls) -> str:
    """
    Regular expression that matches all supported executors.
    """
        ...
    @classmethod
    def superset(cls, executor: str=None) -> Union[Array[str]]:
    """
    @return If the executor is null return an array with empty string else return an array with empty string and the executor.
    """
        ...
    @classmethod
    def supportedRuntimes(cls, executor: str=None) -> Union[Array[str]]:
    """
    @return Array of runtime names that this executor can run.
    Returns null for executors that support all runtimes dynamically (computed at runtime).
    """
        ...

