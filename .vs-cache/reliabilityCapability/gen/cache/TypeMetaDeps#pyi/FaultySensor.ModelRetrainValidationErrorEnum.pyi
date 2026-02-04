#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type FaultySensor.ModelRetrainValidationErrorEnum


class ModelRetrainValidationErrorEnum():
    """
    The different categories of failures for type {@link FaultySensor.ModelRetrainValidationError}.
    
    @remarks this represents a made instance of FaultySensor.ModelRetrainValidationErrorEnum
    """
    
    NO_FEATURES: Optional[str]=None
    """
    The model (with faulty sensors removed) would have no features and therefore cannot be retrained.
    """

    SINGLE_FEATURE: Optional[str]=None
    """
    The model (with faulty sensors removed) would be univariate and therefore cannot be retrained.
    """

    LAMBDA_MASK: Optional[str]=None
    """
    One of the {@link Feature}s or {@link Feature.Set}s in the
    {@link ReliabilityMlDatasetPreparationRunCommon#maskDatasets} uses a [lambda](Feature.Set#src). This allows for
    custom code to run in evaluating the mask which cannot guarantee that the mask does not use a
    [faulty sensor](Sensor#operationalStatus).
    """

    NON_METRIC_BACKED_MASK: Optional[str]=None
    """
    One of the {@link Feature}s in the {@link ReliabilityMlDatasetPreparationRunCommon#maskDatasets} {@link Feature.Set}s
    is not backed by a [metric](Feature#legacy).
    
    All mask {@link Feature}s must be backed by a metric in order to identify if they use a
    [faulty sensor](Sensor#operationalStatus).
    """

    NO_DATASET_PREP_RUN: Optional[str]=None
    """
    This means that there is no {@link ReliabilityRiskMlModel#datasetPreparationRun} on the model we are validating.
    """

    MASK_USES_FAULTY_SENSOR: Optional[str]=None
    """
    One of [masks](ReliabilityMlDatasetPreparationRun#maskDatasets) uses a
    [faulty sensor](Sensor#operationalStatus). This means that the model cannot be retrained because masks are a
    critical part of the model.
    """

    OTHER: Optional[str]=None
    """
    Catch all for any other validation errors.
    
    The {@link FaultySensor.ModelRetrainValidationError#details} field may contain more information.
    """
    def __init__(self, NO_FEATURES: Optional[str]=None, SINGLE_FEATURE: Optional[str]=None, LAMBDA_MASK: Optional[str]=None, NON_METRIC_BACKED_MASK: Optional[str]=None, NO_DATASET_PREP_RUN: Optional[str]=None, MASK_USES_FAULTY_SENSOR: Optional[str]=None, OTHER: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...

