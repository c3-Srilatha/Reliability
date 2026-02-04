#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MlModel.Route import MlModel.Route
from c3.platform.MlModel import MlModel

# Python definitions for the C3 type ModelOpsHelper


class ModelOpsHelper(Value):
    """
    Helper type for providing support for Model Ops Functionality
    
    @remarks this represents a made instance of ModelOpsHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def changeRouteStatus(cls, selectedRoute: MlModel.Route, newSelectedRouteStatus: str, newCurrentRouteStatus: str=None) -> MlModel.Route:
    """
    Change a selected {@link MlModel.Route} status and the current CHAMPION {@link MlModel.Route} status as needed.
    There can only be one CHAMPION model which implies that if newSelectedRouteStatus is set to 'CHAMPION',
    newCurrentRouteStatus must be a different label.
    If newSelectedRouteStatus is not set to 'CHAMPION', the current configuration belonging to the subjectFilter
    will remain as the CHAMPION route.
    """
        ...
    @classmethod
    def changeModelStatus(cls, selectedModel: MlModel, newSelectedRouteStatus: str, newCurrentRouteStatus: str=None) -> MlModel:
    """
    Change a selected {@link MlModel} status and the current CHAMPION {@link MlModel} status as needed.
    There can only be one CHAMPION model which implies that if newSelectedRouteStatus is set to 'CHAMPION',
    newCurrentRouteStatus must be a different label.
    If newSelectedRouteStatus is not set to 'CHAMPION', the current configuration belonging to the subjectFilter
    will remain as the CHAMPION route.
    """
        ...

