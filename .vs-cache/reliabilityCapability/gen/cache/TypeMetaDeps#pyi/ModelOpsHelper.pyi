#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.reliabilityMl.ReliabilityMlModel import ReliabilityMlModel
from c3.platform.MlModel.Route import MlModel.Route
from c3.platform.FetchResult import FetchResult
from c3.platform.MlModel import MlModel
from c3.reliabilityCapability.ModelConfigRun import ModelConfigRun
from c3.platform.TimeRange import TimeRange

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
    @classmethod
    def retrainAndDeployModels(cls, models: Array[ReliabilityMlModel], start: datetime, end: datetime, timeRanges: Array[TimeRange]='[]', jobName: str=None) -> Union[ModelConfigRun]:
    """
    Retrain a list of {@link MlModel}s with a new time horizon and then deploys each new trained model
    on the same asset as its original template model.
    """
        ...
    @classmethod
    def validateSingleSubjectModels(cls, models: Array[ReliabilityMlModel]) -> bool:
    """
    Ensures that the {@link ReliabilityMlModel}s are each deployed on one {@link MlSubject}.
    """
        ...
    @classmethod
    def getLatestExperimentStatus(cls, modelId: str) -> Union[str]:
    """
    Get the status of the {@link ReliabilityMlModel#latestAdjustModelHyperparamsExperiment latest experiment workflow} if available, returns null otherwise.
    @param modelId
    Id of the model where the workflow status is obtained from
    """
        ...
    @classmethod
    def fetchHyperparametersDetails(cls, modelId: str) -> Union[FetchResult[Any]]:
    """
    Obtains the hyperparameters details of the model pipeline, and returns each of them in an object with the next information:
    { pipe, hyperparam, value }
    @param modelId
     Id of the model where the hyperparameters are obtained from
    """
        ...
    @classmethod
    def validateSingleSubjectModel(cls, model: ReliabilityMlModel) -> bool:
    """
    Ensures that the {@link ReliabilityMlModel} is deployed on one {@link MlSubject}.
    """
        ...

