#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SetBuilder import SetBuilder
from c3.platform.HashFingerprint import HashFingerprint

# Python definitions for the C3 type HashCodeFingerprint


class HashCodeFingerprint(Fingerprint[@js(bigInt=true) !int], Value):
    """
    A hash code fingerprint is a integer value, computed much like a Java hashCode, except using 64 bits.
    
    @see https://en.wikipedia.org/wiki/Hash_function
    @see HashFingerprint
    
    @remarks this represents a made instance of HashCodeFingerprint
    """
    
    value: Optional[int]
    """
    The computed fingerprint value.
    """
    def __init__(self, value: Optional[int]=None) -> None: ...

    @classmethod
    def make(cls) -> HashCodeFingerprint:
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
    def add(self, value: int) -> HashCodeFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided value.
    """
        ...
    @overload
    def add(self, value: float) -> HashCodeFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided value.
    """
        ...
    @overload
    def add(self, value: Any) -> HashCodeFingerprint:
    """
    Updates (mutates) instance of this fingerprint by adding the provided value.
    """
        ...
    def addAll(self, values: Array[Any]) -> HashCodeFingerprint:
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
    def fingerprint(cls, v: Any, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
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
    def fingerprint(cls, v: any) -> int:
    """
    Compute the fingerprint of a binary data value.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: bool) -> int:
    """
    Compute the fingerprint of a boolean value.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: datetime) -> int:
    """
    Compute the fingerprint of a date/time value.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: any) -> int:
    """
    Compute the fingerprint of a JSON structure.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: float) -> int:
    """
    Compute the fingerprint of a numeric value. For small integer values, this will be that value, but for larger
    or inexact values, it will be just a bit pattern.
    """
        ...
    @overload
    @classmethod
    def fingerprint(cls, v: str) -> int:
    """
    Compute the fingerprint of a string value. For short strings, this will match the Java's `hashCode()`.
    """
        ...
    @classmethod
    def compute(cls, prefix: str, separator: int, suffix: str) -> int:
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
    def nullFingerprint(cls) -> int:
    """
    Get the fingerprint of any null value.
    """
        ...
    @overload
    @classmethod
    def accumulate(cls, prior: int, add: int) -> int:
    """
    Accumulate two fingerprint values, "adding" the latter to the former. Note that this may not actually be addition.
    """
        ...
    @overload
    @classmethod
    def accumulate(cls, prior: int, add1: int, add2: int) -> int:
    """
    Accumulate three fingerprint values, "adding" them together. Note that this may not actually be addition.
    """
        ...

