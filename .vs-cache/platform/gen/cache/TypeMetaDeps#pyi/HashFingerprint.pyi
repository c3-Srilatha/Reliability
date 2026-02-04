#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SetBuilder import SetBuilder
from c3.platform.HashCodeFingerprint import HashCodeFingerprint

# Python definitions for the C3 type HashFingerprint


class HashFingerprint(Fingerprint[!string], Value):
    """
    A hash fingerprint is a string value, computed using a message digest function.
    
    @see MD5
    @see HashCodeFingerprint
    
    @remarks this represents a made instance of HashFingerprint
    """
    
    value: Optional[str]
    def __init__(self, value: Optional[str]=None) -> None: ...

    @classmethod
    def make(cls) -> HashFingerprint:
    """
    Construct an instance with initial state.
    """
        ...
    @overload
    @classmethod
    def longHashCode(cls, value: Any, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Returns `int` hash code of the the provided value.
    
    @param allIdentifiedRefFields
           whether to include reference field values present in memory
    @param trackRecursiveRefs
           whether to track references to avoid infinite recursion on cyclic structures
    @param traversedRefs
           previously traversed references as natural mutable collection
    @return cumulative fingerprint
    
    @see HashCodeFingerprint
    """
        ...
    @overload
    @classmethod
    def longHashCode(cls) -> HashCodeFingerprint:
    """
    Creates a new `int` fingerprint based on typical algorithm used for Java `hashCode()`.
    """
        ...
    @overload
    @classmethod
    def md5(cls) -> HashFingerprint:
    """
    Creates a new {@link MD5} based `string` fingerprint.
    """
        ...
    @overload
    @classmethod
    def md5(cls, value: Any, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> str:
    """
    Returns `string` hash of the the provided value.
    
    @param allIdentifiedRefFields
           whether to include reference field values present in memory
    @param trackRecursiveRefs
           whether to track references to avoid infinite recursion on cyclic structures
    @param traversedRefs
           previously traversed references as natural mutable collection
    @return cumulative fingerprint
    
    @see HashFingerprint
    """
        ...
    @overload
    def add(self, value: int) -> HashFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided value.
    """
        ...
    @overload
    def add(self, value: float) -> HashFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided value.
    """
        ...
    @overload
    def add(self, value: Any) -> HashFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided value.
    """
        ...
    def addAll(self, values: Array[Any]) -> HashFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided values.
    """
        ...
    def toInt(self) -> int:
    """
    @returns `int` representation of this fingerprint; may be "weaker" then string representation.
    """
        ...
    def toString(self) -> Union[str]:
    """
    @returns `string` representation of this fingerprint.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: Any, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> str:
    """
    Calculate a fingerprint of any single value.
    
    @param allIdentifiedRefFields
           whether to include reference field values present in memory
    @param trackRecursiveRefs
           whether to track references to avoid infinite recursion on cyclic structures
    @param traversedRefs
           previously traversed references as natural mutable collection
    @return cumulative fingerprint
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: any) -> str:
    """
    Compute the fingerprint of a binary data value.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: bool) -> str:
    """
    Compute the fingerprint of a boolean value.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: datetime) -> str:
    """
    Compute the fingerprint of a date/time value.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: any) -> str:
    """
    Compute the fingerprint of a JSON structure.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: float) -> str:
    """
    Compute the fingerprint of a numeric value. For small integer values, this will be that value, but for larger
    or inexact values, it will be just a bit pattern.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: str) -> str:
    """
    Compute the fingerprint of a string value. For short strings, this will match the Java's `hashCode()`.
    """
        ...
    @classmethod
    def compute(cls, prefix: str, separator: int, suffix: str) -> str:
    """
    Compute the fingerprint of two strings concatenated with a separator, without allocating an intermediate string.
    Equivalent to `fingerprint(prefix + separator + suffix)` but avoids memory allocation.
    Useful for computing fingerprints of composite keys like "pkgName/filePath".
    
    @param prefix
             the first string (e.g., package name)
    @param separator
             the separator character (e.g., '/')
    @param suffix
             the second string (e.g., file path)
    @return the fingerprint of the concatenated string
    """
        ...
    @classmethod
    def nullFingerprint(cls) -> str:
    """
    Get the fingerprint of any null value.
    """
        ...
    @overload
    @classmethod
    def accumulate(cls, prior: str, add: str) -> str:
    """
    Accumulate two fingerprint values, "adding" the latter to the former. Note that this may not actually be addition.
    """
        ...
    @overload
    @classmethod
    def accumulate(cls, prior: str, add1: str, add2: str) -> str:
    """
    Accumulate three fingerprint values, "adding" them together. Note that this may not actually be addition.
    """
        ...

