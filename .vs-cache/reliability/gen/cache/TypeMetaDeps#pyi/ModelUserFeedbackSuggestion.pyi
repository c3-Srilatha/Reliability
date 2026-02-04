#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ModelUserFeedbackSuggestion


class ModelUserFeedbackSuggestion():
    """
    Remix to get the translation on {@link ModelUserFeedbackSuggestion} enum depending on the {@link Locale#language}
    selected on the UI.
    
    @remarks this represents a made instance of ModelUserFeedbackSuggestion
    """
    
    NEW_CONFIG: Optional[str]=None
    """
    The model needs a new configuration.
    """

    NO_ACTION: Optional[str]=None
    """
    The model does not need any action.
    """

    RETIRE_MODEL: Optional[str]=None
    """
    The model needs to be retired.
    """

    RETRAIN: Optional[str]=None
    """
    The model needs to be retrained.
    """

    SWITCH_MODEL: Optional[str]=None
    """
    The model needs to be changed.
    """
    def __init__(self, NEW_CONFIG: Optional[str]=None, NO_ACTION: Optional[str]=None, RETIRE_MODEL: Optional[str]=None, RETRAIN: Optional[str]=None, SWITCH_MODEL: Optional[str]=None) -> None: ...

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
      { value: 'New Configuration', translatedValue: 'Nueva Configuración' },
      { value: 'No Action', translatedValue: 'Ninguna acción' },
      { value: 'Retire Model', translatedValue: 'Retirar el modelo' }
      { value: 'Retrain', translatedValue: 'Volver a entrenar' }
      { value: 'Switch Model', translatedValue: 'Cambiar el modelo' }
    ]
    ````
    """
        ...

