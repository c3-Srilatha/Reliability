#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.UiSdlReduxAction import UiSdlReduxAction

# Python definitions for the C3 type ModelSetupUiUtil


class ModelSetupUiUtil(Value):
    """
    Contains Util functions for Model Setup UI.
    
    @remarks this represents a made instance of ModelSetupUiUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def changeStep(cls, action: UiSdlReduxAction[Any], state: UiSdlReduxState, progressIndicatorId: str, shouldGoNext: bool=None, idToActionFunctionMap: Map[str, Any]=None) -> Union[Any]:
    """
    Returns an rxjs observable that outputs next step or previous step actions on given progress indicator.
    The observable can also output actions that cause side effects.
    @param action
             The action that triggered the epic calling this function.
    @param state
             The redux state at the point this function was called.
    @param shouldGoNext
             If true, indicates that moving to the next step should be attempted. If false, moves to the previous step.
    @param progressIndicatorId
             The progress indicator on which to perform actions.
    @param idToActionFunctionMap
             Map of step ids to functions to call when attempting to go to next step. The function should return
             an object with two properties, `shouldGoNext` and `action`. If `shouldGoNext` is true, progress
             indicator moves to the next step. Otherwise, it does not. `action` is the side effect action
             that will be dispatched.
    @return An observable of redux actions
    """
        ...

