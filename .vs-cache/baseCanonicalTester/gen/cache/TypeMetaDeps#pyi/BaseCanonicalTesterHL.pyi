#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type BaseCanonicalTesterHL


class BaseCanonicalTesterHL(Value):
    """
    Generic helper functions used for {@link BaseCanonicalTester}.
    
    @remarks this represents a made instance of BaseCanonicalTesterHL
    """
    def __init__(self) -> None: ...

    @classmethod
    def getAllRelevantFields(cls, type: Type, objs: Array[Any], ignoreFields: Array[str]=None) -> Union[Array[str]]:
    """
    Get all relevant fields from the provided objects.
    - Objects must be all be of the same type
    - Returned fields may be serialized as a csv header
    - Returned fields are readable from {@link Obj#fieldValueAtPath}
    - Only populated values from provided objects are included
    
    @param type
               The type that you will do the comparison on for relevant fields to compare.
    @param objs
               The objects that you will do the comparison on for relevant fields.
    @param ignoreFields
               The fields to ignore when comparing the objects.
    @return
               The relevant fields to compare.
    """
        ...
    @classmethod
    def objsToCsvString(cls, type: Type, objs: Array[Any]) -> Union[str]:
    """
    Transform objects to a serialized csv string.
    """
        ...
    @classmethod
    def constructObjPrimaryKey(cls, obj: Any, keyFields: Array[str]) -> Union[str]:
    """
    Construct primary key for object based on key fields.
    
    @param obj
              The object to construct the primary key for.
    @param keyFields
              The key fields to use to construct the primary key.
    """
        ...
    @classmethod
    def areValuesEqual(cls, value1: Any=None, value2: Any=None) -> bool:
    """
    Helper function to check if two values are equal.
    Handles edge cases for specific type checks
    
    @param value1
               The first value to compare.
    @param value2
               The second value to compare.
    @return
               True if the values are equal, false otherwise.
    """
        ...
    @classmethod
    def getAllPersistableTargetTypesForCanonical(cls, canonicalType: Type) -> Union[Array[Type]]:
    """
    Gets all target Types for the {@link Canonical} mixing {@link Persistable}.
    If a {@link Canonical} transforms to another {@link Canonical} Type, we will
    BFS the tree of target Types to find all leaf node persistable Types.
    
    @param canonicalType
              The {@link Canonical} Type to get all persistable target Types for.
    @return All target Types for the {@link Canonical} mixing {@link Persistable}.
    """
        ...
    @classmethod
    def calculateMatchScore(cls, objOne: Any, objTwo: Any) -> Union[float]:
    """
    Returns a match score for the similarity between two types based on their fields.
    This is a private helper function meant to support Source to Canonical mappings for transforms.
    
    @param objOne
               The first canonical or source type that you want to compare to. Order does not matter.
    @param objTwo
               The second canonical or source type that you want to compare to. Order does not matter.
    @return
               A double value indicating the total number of matching fields between the two types.
    """
        ...
    @classmethod
    def alignArrays(cls, arrayOne: Array[Any], arrayTwo: Array[Any]) -> Union[Array[Any]]:
    """
    Returns a list of objects and attempts to order them based on a similar matching from {@link #calculateMatchScore}
    The index of each array attempts to indicate the most likely match between the two arrays.
    
    @param arrayOne
               The first object array that you want to compare to. Order does not matter.
    @param arrayTwo
               The second object array that you want to compare to. Order does not matter.
    @return
               An ordered array of objects - the index of each array attempts to indicate the
               most likely match between the two arrays.
    """
        ...
    @classmethod
    def fixMalformedJsonString(cls, obj: any=None) -> Union[any]:
    """
    Returns a correct JS JSON object from a malformed JSON string.
    This is a private function that seeks to correct platform divergences with JSON parsing and
    issues with transformation inconsistency.  Reference PLAT-48275
    
    @param obj
               A JSON object that you want to correct.
    @return
               A corrected JSON object suitable for use in making a c3 object.
    """
        ...

