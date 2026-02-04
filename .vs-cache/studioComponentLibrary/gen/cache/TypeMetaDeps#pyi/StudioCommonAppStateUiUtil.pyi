#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.UiSdlReduxState import UiSdlReduxState

# Python definitions for the C3 type StudioCommonAppStateUiUtil


class StudioCommonAppStateUiUtil(Value):
    """
    UI Helper functions for Studio's application states.
    
    @remarks this represents a made instance of StudioCommonAppStateUiUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def clearAppState(cls, state: UiSdlReduxState, id: str=None) -> UiSdlReduxState:
    """
    Clears the app state for id.
    
    @param id
               The id of the application state to be cleared
    @param state
               The redux state
    
    @return the updated UiSdlReduxState
    """
        ...
    @classmethod
    def clearComponentState(cls, componentId: str, state: UiSdlReduxState) -> UiSdlReduxState:
    """
    Clears the component state for the corresponding component id.
    
    @param componentId
                The id of the component state to be cleared.
    @return the updated UiSdlReduxState
    """
        ...
    @classmethod
    def setOrRemoveConfigInApplicationState(cls, stateId: str, state: UiSdlReduxState, value: Any, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Sets or removes config value in application state.
    If the value is undefined, the dataPath will be removed from the application state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @param value
              The config value to set.
    @returns Redux state.
    """
        ...

