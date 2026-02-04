#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CollectionWithIndex import CollectionWithIndex
from c3.platform.CollectionWithIndex import CollectionWithIndex
from c3.platform.BinarySearchResult import BinarySearchResult
from c3.platform.ValueType import ValueType
from c3.platform.BinarySearchSpec import BinarySearchSpec
from c3.platform.CollectionWithIndex import CollectionWithIndex
from c3.platform.CollectionWithIndex import CollectionWithIndex

# Python definitions for the C3 type CollectionWithIndex

E = TypeVar('E')

class CollectionWithIndex(Generic[E], Value):
    """
    Base type for collections that have a 0 based index for elements but no keys.
    
    @remarks this represents a made instance of CollectionWithIndex
    """
    def __init__(self) -> None: ...

    def minBy(self, value: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[E]:
    """
    @return element of the collection with minimum value based on provided value supplier.
    """
        ...
    def maxBy(self, value: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[E]:
    """
    @return element of the collection with maximum value based on provided value supplier.
    """
        ...
    def uniqueBy(self, key: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[CollectionWithIndex[E]]:
    """
    @return new collection with duplicate elements removed based on provided key supplier.
    """
        ...
    def reject(self, predicate: Callable[[Union[E], Union[int]], bool]) -> Union[CollectionWithIndex[E]]:
    """
    Rejects elements from this collection based on evaluation result of the provided filter expression.
    """
        ...
    def sortedIndex(self, element: E, value: Callable[[Union[E], Union[int]], Union[Any]]) -> int:
    """
    Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
    order to maintain collections sorted order.
    """
        ...
    def replace(self, index: int, e: E) -> Union[CollectionWithIndex[E]]:
    """
    @return copy of this collection with new element at provided index.
    """
        ...
    def each(self, action: Callable[[Union[E], Union[int]]]) -> None:
    """
    Execute the specified lambda against each value of the collection. The first argument is the value and the second
    is the collection index.
    """
        ...
    def mapToSame(self, mapper: Callable[[Union[E], Union[int]], Union[E]]) -> Union[CollectionWithIndex[E]]:
    """
    @return new collection for all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def map(self, expr: str) -> Union[CollectionWithIndex[T]]:
    """
    @return new collection by evaluating provided expression over this collection elements; element type of the new
            collection is determined by return type of the expression
    """
        ...
    @overload
    def map(self, mapper: Callable[[Union[E], int], Union[T]]) -> Union[CollectionWithIndex[T]]:
    """
    @return new collection of any with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    def mapToStr(self, mapper: Callable[[Union[E], int], Union[str]]) -> Union[CollectionWithIndex[str]]:
    """
    @return new collection of string with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    def mapTo(self, elementType: ValueType, mapper: Callable[[Union[E], int], Union[T]]) -> Union[CollectionWithIndex[T]]:
    """
    @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
    It is the responsibility of the mapper to convert values to the elementType if needed. The method mapTo will not do any
    such conversion.
    """
        ...
    def flatMapToSame(self, mapper: Callable[[Union[E], Union[int]], Union[CollectionWithIndex[E]]]) -> Union[CollectionWithIndex[E]]:
    """
    @return returns a collection of same type consisting of the results of replacing each element of this collection
            with mapped array elements.
    """
        ...
    def flatMap(self, mapper: Callable[[Union[E], int], Union[CollectionWithIndex[T]]]) -> Union[CollectionWithIndex[T]]:
    """
    @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
    """
        ...
    def flatMapTo(self, elementType: ValueType, mapper: Callable[[Union[E], int], Union[CollectionWithIndex[T]]]) -> Union[CollectionWithIndex[T]]:
    """
    @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
    """
        ...
    def fold(self, initial: T, folder: Callable[[Union[E], Union[int], Union[T]], Union[T]]) -> Union[T]:
    """
    @return single value that is a result of aggregation of all elements by provided lambda and initial value.
    """
        ...
    def filter(self, predicate: Callable[[Union[E], Union[int]], bool]) -> Union[CollectionWithIndex[E]]:
    """
    Filters elements from this collection based on evaluation result of the provided filter predicate.
    """
        ...
    @overload
    def sortedBy(self, key: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[CollectionWithIndex[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
    provided lambda.
    """
        ...
    @overload
    def sortedBy(self, descending: bool, key: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[CollectionWithIndex[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
    provided lambda.
    """
        ...
    def countBy(self, keyType: ValueType, key: Callable[[Union[E], Union[int]], Union[T]]) -> Union[Map[T, int]]:
    """
    Counts values of the output of the provided key function
    """
        ...
    def every(self, predicate: Callable[[Union[E], Union[int]], bool]) -> bool:
    """
    Checks if predicate returns true for all elements of collection
    """
        ...
    def initial(self, exceptLastN: int='1') -> CollectionWithIndex[E]:
    """
    Returns everything but the last N entries of the collection
    """
        ...
    def containsAll(self, predicate: Callable[[Union[E], Union[int]], bool]) -> bool:
    """
    @return `true` if every element in this collection satisfies provided predicate.
    """
        ...
    def containsAny(self, predicate: Callable[[Union[E], Union[int]], bool]) -> bool:
    """
    @return true if this collection contains any elements satisfying provided condition.
    """
        ...
    def findAny(self, predicate: Callable[[Union[E], Union[int]], bool]) -> Union[E]:
    """
    Finds some element in this collection satisfying provided condition.
    """
        ...
    def pairs(self) -> Union[CollectionWithIndex[Pair[E, E]]]:
    """
    Converts this collection into collection of pairs of neighboring elements.
    """
        ...
    def binarySearch(self, search: E, spec: BinarySearchSpec=None) -> BinarySearchResult[E]:
    """
    Search for an element within this array. If the element is not found then closest lowest element is returned
    @param search
               Element to search for
    @param spec
               Determines properties for binary search
    @return result of the binary search determining the index & whether the actual element was found
    """
        ...

