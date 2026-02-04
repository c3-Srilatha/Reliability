#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ModelUserFeedbackCategory


class ModelUserFeedbackCategory():
    """
    Remix to get the translation on {@link ModelValidationStatus} enum depending on the {@link Locale#language} selected
    on the UI.
    
    @remarks this represents a made instance of ModelUserFeedbackCategory
    """
    
    HIGH_RISK_SCORE: Optional[str]=None
    """
    The model is producing an abnormally high risk score.
    """

    LOW_RISK_SCORE: Optional[str]=None
    """
    The model is producing an abnormally low risk score.
    """

    BAD_TRAINING_PERIOD: Optional[str]=None
    """
    The model has a bad training period.
    """

    INCORRECT_FEATURES: Optional[str]=None
    """
    The model has incorrect features.
    """

    IRRELEVANT_ALERT: Optional[str]=None
    """
    The alert raised by the model is irrelevant.
    """

    MISSED_EVENT: Optional[str]=None
    """
    The model missed an event.
    """

    OTHER: Optional[str]=None
    """
    Any other feedback no covered by the categories.
    """

    POOR_RECONSTRUCTION: Optional[str]=None
    """
    The model has a poor reconstruction.
    """
    def __init__(self, HIGH_RISK_SCORE: Optional[str]=None, LOW_RISK_SCORE: Optional[str]=None, BAD_TRAINING_PERIOD: Optional[str]=None, INCORRECT_FEATURES: Optional[str]=None, IRRELEVANT_ALERT: Optional[str]=None, MISSED_EVENT: Optional[str]=None, OTHER: Optional[str]=None, POOR_RECONSTRUCTION: Optional[str]=None) -> None: ...

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
    @classmethod
    def translatedValues(cls) -> Union[Array[any]]:
    """
    Helper function to get translated type values in {@link Locale#language}
    
    NOTE: This method should be used on UI only.
    
    @returns An array of objects with the enum value and its translation key.
    
    E.g if the language is 'es', the return value will be:
    ````
    [
      { value: 'Abnormally High Risk Score', translatedValue: 'Puntuación de riesgo anormalmente alta' },
      { value: 'Abnormally Low Risk Score', translatedValue: 'Puntuación de riesgo anormalmente baja' },
      { value: 'Bad Training Period', translatedValue: 'Mal período de entrenamiento' },
      { value: 'Irrelevant Features', translatedValue: 'Características irrelevantes' },
      { value: 'Missed Event', translatedValue: 'Evento Perdido' },
      { value: 'Irrelevant Alert', translatedValue: 'Alertas irrelevantes' },
      { value: 'Other', translatedValue: 'Otro' },
      { value: 'Poor Reconstruction', translatedValue: 'Mala reconstrucción' },
    ]
    ````
    """
        ...

