#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.dataValidation.DataValidationRuleResult import DataValidationRuleResult

# Python definitions for the C3 type ModelTrainingAndInferenceRules


class ModelTrainingAndInferenceRules(Value):
    """
    Functions used by the {@link DataValidationRule rules} for the "Model Training and Inference" ruleset.
    
    @remarks this represents a made instance of ModelTrainingAndInferenceRules
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateTrainingIntervalMap(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Checks that {@link ReliabilityMLConfig#mlProjectTrainingIntervalMap} contains an entry for all {@link MlProject}s.
    """
        ...

