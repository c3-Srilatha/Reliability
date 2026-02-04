#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.dataValidation.DataValidationRuleset import DataValidationRuleset
from c3.dataValidation.DataValidationRun import DataValidationRun
from c3.reliabilityDataModel.ReliabilityAsset import ReliabilityAsset

# Python definitions for the C3 type DataValidationRunHelper


class DataValidationRunHelper(Value):
    """
    Helper type for Reliability data validation functionality.
    
    @remarks this represents a made instance of DataValidationRunHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def generateDataValidationRun(cls, rootRuleset: DataValidationRuleset, parentAsset: ReliabilityAsset=None) -> DataValidationRun:
    """
    Generate data validation run for a {@link DataValidationRuleset}.
    """
        ...

