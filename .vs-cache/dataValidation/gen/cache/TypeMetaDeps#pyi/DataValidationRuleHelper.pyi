#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type DataValidationRuleHelper


class DataValidationRuleHelper(Value):
    """
    Type containing potentially useful functions to use in rule implementations.
    
    @remarks this represents a made instance of DataValidationRuleHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def getEntitiesWithMissingFields(cls, targetType: Type, fields: Array[str]=None, referenceFields: Array[str]=None, filterString: str='\'1==1\'', limit: int='20') -> Union[Map[str, Array[str]]]:
    """
    Finds entities which have unpopulated fields or fields with bad references
    
    @param targetType
        The type to check entities for.
    @param fields
        Fields which should be populated.
    @param referenceFields
        Fields which should be populated with a valid reference to an existing entity.
    @param filterString
        Additional filter to apply to the target type, limiting the scope of validation.
    @param limit
        Maximum number of entities to return per unpopulated field.
    @return map<string, [string]>
        A map from a field to a list of violating entities' IDs. For reference checks, ".meta.referenceInvalid" will be appended to the field name.
    """
        ...
    @classmethod
    def getEntitiesWithMismatchedFieldValues(cls, targetType: Type, fieldPairs: Array[Array[str]], filterString: str='\'1==1\'', limit: int='20') -> Union[Map[str, Array[str]]]:
    """
    Finds entities which have mismatched field values.
    
    @param targetType
        The type to check entities for.
    @param fieldPairs
        List of field pairs which should have matching values. Formatted like [['field1', 'field2']] such that field1 should have the same value as field2.
    @param filterString
        Additional filter to apply to the target type, limiting the scope of validation.
    @return map<string, [string]>
        A map from a field to a list of violating entities' IDs. The resultant map will be formatted like { 'field1!=field2': ['entity1'] } if the value of `field1`
        does not match the value of `field2` on `entity1`,
    """
        ...

