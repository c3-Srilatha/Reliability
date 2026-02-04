#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.dataValidation.DataValidationRuleResult import DataValidationRuleResult

# Python definitions for the C3 type RiskScoreAndContributionRules


class RiskScoreAndContributionRules(Value):
    """
    Functions used by the {@link DataValidationRule rules} for the "Risk Score and Contribution" ruleset.
    
    @remarks this represents a made instance of RiskScoreAndContributionRules
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateReliabilityRiskScoreMlHeaders(cls, args: Map[str, Any]=None) -> Union[Array[DataValidationRuleResult]]:
    """
    Checks that {@link ReliabilityAssetToRiskModelRelation}s exist for the reliability risk {@link MlProject} and have
    {@link ReliabilityRiskScoreMlPredictionHeader} and {@link ReliabilityRiskScoreMlContributionHeader}.
    """
        ...
    @classmethod
    def validateContributionHeaderNames(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Checks {@link ReliabilityRiskScoreMlContributionHeader#name} values to ensure that they match the expectations of {@link MlProject.ReliabilityRisk#getContributionHeaderName}.
    """
        ...

