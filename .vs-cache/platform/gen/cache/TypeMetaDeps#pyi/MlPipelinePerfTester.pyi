#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PerfTime import PerfTime
from c3.platform.Pair import Pair

# Python definitions for the C3 type MlPipelinePerfTester


class MlPipelinePerfTester(Value):
    """
    This type is intended to measure the performance of training machine learning models in Python versus the
    performance of training the same models using C3.ai MlPipelines.
    
    @remarks this represents a made instance of MlPipelinePerfTester
    """
    def __init__(self) -> None: ...

    @classmethod
    def timeRfTraining(cls, timestampFrequency: str, nJobs: int) -> Union[PerfTime]:
    """
    Method used to train a Sklearn model in Python and the same model using C3 SklearnPipe.
    Performance is measured by Python's `time` module.
    @param timestampFrequency
              timestampFrequency used for creating a training set in Pandas. Valid Pandas frequencies are accepted
              e.g. '1h', '1min', '15s'.
    @param nJobs
              number of threads used for training. This is passed to the Sklearn RandomForestRegressor object.
    @return PerfTime. The "c3Time" field is the amount of time taken (in nanoseconds) to train the model using C3;
             the "pyTime" field is the amount of time taken (in nanoseconds) to train in pure Python.
    """
        ...
    @classmethod
    def timeRfTreeInterpreterFeatureContribution(cls, nFeatures: int, nRows: int) -> Union[PerfTime]:
    """
    Method used to compare the performance of treeinterpreter feature interpretation technique on the same model using C3 and Eli5 package.
    Performance is measured by time in Python.
    @param nFeatures
              number of features in the test set which we want to performance the interpretation techniques on. e.g. '10', '100'.
    @param nRows
              number of rows in the test set which we want to performance the interpretation techniques on. e.g. '10', '100'.
    @return PerfTime. The "c3Time" field is the amount of time taken (in nanoseconds) to interpret the model using C3;
             the "pyTime" field is the amount of time taken (in nanoseconds) to interpret in pure Python.
    """
        ...
    @classmethod
    def timeRfEli5FeatureContribution(cls, nFeatures: int, nRows: int) -> Union[PerfTime]:
    """
    Method used to compare the performance of Eli5 feature interpretation technique on the same model using C3 and Eli5 package.
    Performance is measured by time in Python.
    @param nFeatures
              number of features in the test set which we want to performance the interpretation techniques on. e.g. '10', '100'.
    @param nRows
              number of rows in the test set which we want to performance the interpretation techniques on. e.g. '10', '100'.
    @return PerfTime. The "c3Time" field is the amount of time taken (in nanoseconds) to interpret the model using C3;
             the "pyTime" field is the amount of time taken (in nanoseconds) to interpret in pure Python.
    """
        ...
    @classmethod
    def timeEventBasedScoring(cls, timestampFrequency: str) -> Union[PerfTime]:
    """
    Method used to apply event-based scoring with the C3 implementation and the Python native implementation.
    Performance is measured by Python's `time` module.
    @param timestampFrequency
              timestampFrequency used for creating a dataframe in Pandas. Valid Pandas frequencies are accepted
              e.g. '1h', '1min', '15s'.
    @return PerfTime. The "c3Time" field is the event-based scoring time (in nanoseconds) using C3;
             the "pyTime" field is the event-based scoring time (in nanoseconds) in pure Python.
    """
        ...
    @classmethod
    def timeKerasTraining(cls, nFeatures: int, nRows: int) -> Union[PerfTime]:
    """
    Method used to compare the performance of Eli5 feature interpretation technique on the same model using C3 and Eli5 package.
    Performance is measured by time in Python.
    @param nFeatures
              number of features in the training set. e.g. '10', '100'.
    @param nRows
              number of rows in the training set which we want to performance the interpretation techniques on. e.g. '10', '100'.
    @return PerfTime. The "c3Time" field is the amount of time taken (in nanoseconds) to train the Keras model using C3;
             the "pyTime" field is the amount of time taken (in nanoseconds) to train the Keras model in pure Python.
    """
        ...
    @classmethod
    def timeRfInference(cls, timestampFrequency: str, nJobs: int) -> Union[PerfTime]:
    """
    Method used to compare the performance of C3 and the base `sklearn` package for inference on `sklearn` Random Forest models.
    Performance is measured by Python's `time` module.
    @param timestampFrequency
              timestampFrequency used for creating a training set in Pandas. Valid Pandas frequencies are accepted
              e.g. '1h', '1min', '15s'.
    @param nJobs
              number of threads used for inference. This is passed to the `sklearn` RandomForestRegressor object.
    @return PerfTime. The "c3Time" field is the inference time (in nanoseconds) using C3;
             the "pyTime" field is the inference time (in nanoseconds) in pure Python .
    """
        ...
    @classmethod
    def timeRfHpo(cls, nJobs: int) -> Pair[float, float]:
    """
    Method used to apply hyperparameter optimization using C3 MLAutoTuner and Python sklearn.
    Performance is measured by time in Python.
    @param nJobs
              number of threads used for hyperparameter optimization.
    @return A pair of doubles. Each one is the time taken (in nanoseconds) to apply hyperparameter optimization.
              The first value comes from C3 MLAutoTuner and the second value comes from Python sklearn.
    """
        ...

