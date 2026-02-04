#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.dataValidation.DataValidationRuleResult import DataValidationRuleResult

# Python definitions for the C3 type ReliabilityRiskAlertGenerationRules


class ReliabilityRiskAlertGenerationRules(Value):
    """
    Functions used by the {@link DataValidationRule rules} for the "Reliability Risk Alert Generation" ruleset.
    
    @remarks this represents a made instance of ReliabilityRiskAlertGenerationRules
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateAlertPredictionSeries(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Checks {@link DataValidationRuleset} values of alert timeseries to ensure that alerts were supposed to be raised.
    """
        ...

