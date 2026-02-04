#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ReactFunction import ReactFunction
from c3.platform.UiSdlReduxState import UiSdlReduxState

# Python definitions for the C3 type GenAiUiTesting


class GenAiUiTesting(Value):
    """
    This type provides a set of functions to help with testing UI components.
    
    @remarks this represents a made instance of GenAiUiTesting
    """
    def __init__(self) -> None: ...

    @classmethod
    def renderComponent(cls, component: ReactFunction=None, props: any=None, state: UiSdlReduxState=None, translations: Map[str, str]=None) -> Union[Any]:
    """
    Renders a React component with the given props, state, and translations.
    """
        ...
    @classmethod
    def assertElement(cls, renderedResult: ReactFunction=None, selector: str=None, visible: bool=None) -> None:
    """
    Asserts that the rendered result contains an element with the given selector and visibility.
    @param renderedResult
              The rendered result to assert against.
    @param selector
              The selector to search for.
    @param visible
              Whether the element should be visible or not. Defaults to true.
    """
        ...
    @classmethod
    def assertText(cls, text: str=None, extraParams: any=None) -> None:
    """
    Asserts the provided text is present in the rendered result.
    @param text
              The text to assert is present.
    @param extraParams
              Additional parameters to pass to the assertion. Will be passed as the second argument to the assertion function.
    """
        ...
    @classmethod
    def clickElement(cls, renderedResult: ReactFunction, selector: str) -> None:
    """
    Clicks element that matches selector in rendered result container.
    @param renderedResult
              The rendered result to search in.
    @param selector
              The selector to search for.
    """
        ...
    @classmethod
    def clickElementByText(cls, text: str) -> None:
    """
    Clicks element by text
    @param text
              Search for any element that exactly matches text.
    """
        ...
    @classmethod
    def assertCount(cls, renderedResult: ReactFunction=None, selector: str=None, count: int=None) -> None:
    """
    Asserts the count of elements that should match the provided selector.
    @param renderedResult
              The rendered result to assert against.
    @param selector
              The selector to search for.
    @param count
              The count of elements that it is supposed to match with provided selector, within renderedResult.
    """
        ...

