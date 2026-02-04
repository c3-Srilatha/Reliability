#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ReactComponent import ReactComponent

# Python definitions for the C3 type GenAiUiBasicTextComponentTesting


class GenAiUiBasicTextComponentTesting(Value):
    """
    This type provides a common set of functions to help with testing basicTextComponents
    
    @remarks this represents a made instance of GenAiUiBasicTextComponentTesting
    """
    def __init__(self) -> None: ...

    @classmethod
    def runSharedTextComponentTests(cls, component: ReactComponent=None, props: Any=None, state: Any=None) -> Union[Any]:
    """
    Run all the common tests for a basicTextComponent.
    @param component
            The React component to test.
    @param props
            The props to pass to the component.
    @param state
            The state to pass to the component.
    """
        ...

