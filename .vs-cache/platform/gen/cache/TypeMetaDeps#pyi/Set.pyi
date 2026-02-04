#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.MergeSimilarSpec import MergeSimilarSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.StreamType import StreamType
from c3.platform.CollectionResample import CollectionResample
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Set import Set
from c3.platform.Set import Set
from c3.platform.CollectionStdLib import CollectionStdLib
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Timeseries import Timeseries
from c3.platform.SampleSpec import SampleSpec
from c3.platform.AnonymizationSpec import AnonymizationSpec
from c3.platform.Set import Set
from c3.platform.ResampleSpec import ResampleSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.CollectionGroupBy import CollectionGroupBy
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Period import Period
from c3.platform.BinarySearchSpec import BinarySearchSpec
from c3.platform.DigestSpec import DigestSpec
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Iterable import Iterable
from c3.platform.Collection import Collection
from c3.platform.HistogramSpec import HistogramSpec
from c3.platform.LeastSquaresResult import LeastSquaresResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Set import Set
from c3.platform.BinarySearchResult import BinarySearchResult
from c3.platform.ValueType import ValueType
from c3.platform.TimeseriesFieldSpec import TimeseriesFieldSpec
from c3.platform.Data import Data
from c3.platform.Set import Set
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Set import Set
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.platform.OpSpec import OpSpec
from c3.platform.Set import Set
from c3.platform.CollectionRolling import CollectionRolling
from c3.platform.Boxed import Boxed
from c3.platform.Collection import Collection
from c3.platform.MapType import MapType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MergeSimilarCluster import MergeSimilarCluster
from c3.platform.DescriptiveStatisticsResult import DescriptiveStatisticsResult
from c3.platform.Set import Set
from c3.platform.Set import Set
from c3.platform.FillMissingSpec import FillMissingSpec
from c3.platform.WindowSpec import WindowSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Set import Set
from c3.platform.Collection import Collection
from c3.platform.Collection import Collection
from c3.platform.Set import Set
from c3.platform.Set import Set
from c3.platform.AggSpec import AggSpec
from c3.platform.ArrayType import ArrayType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Iterable import Iterable
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Iterator import Iterator
from c3.platform.Set import Set
from c3.platform.CountMinSketchSpec import CountMinSketchSpec
from c3.platform.Set import Set
from c3.platform.TDigestSpec import TDigestSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DataTimeseriesSpec import DataTimeseriesSpec
from c3.platform.Obj import Obj
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Set import Set
from c3.platform.Pair import Pair
from c3.platform.CollectionStdLib import CollectionStdLib
from c3.platform.Set import Set
from c3.platform.DownsampleSpec import DownsampleSpec
from c3.platform.EvalTimeseriesSpec import EvalTimeseriesSpec
from c3.platform.Set import Set
from c3.platform.Histogram import Histogram
from c3.platform.TimeseriesSpec import TimeseriesSpec
from c3.platform.CollectionType import CollectionType
from c3.platform.OutliersSpec import OutliersSpec
from c3.platform.Set import Set
from c3.platform.CollectionStdLib import CollectionStdLib
from c3.platform.Digest import Digest

# Python definitions for the C3 type Set

E = TypeVar('E')

class Set(Generic[E], Collection[E], CollectionWithIndex[E], CollectionConstructors[E], CollectionBuilderConstructors[SetBuilder[E]], CollectionInMemory[E], Value):
    """
    A set is a 1-dimensional, unordered set of elements that does _not_ allow duplicates. All values are kept in memory.
    Attempts to add duplicate elements to sets are silently ignored.
    
    @remarks this represents a made instance of Set
    """
    def __init__(self) -> None: ...

    def approxUniqueCount(self) -> Union[int]:
    """
    An estimate for the number of unique elements backed by {@link HyperLogLog}
    """
        ...
    def approxMedian(self, spec: TDigestSpec=None) -> Union[float]:
    """
    An estimate for the median backed by {@link TDigest}
    """
        ...
    def approxHistogram(self, spec: TDigestSpec=None) -> Union[Histogram[Any, Any, HistogramBuilder]]:
    """
    An approximate histogram backed by {@link TDigest}
    """
        ...
    def truePercent(self) -> Union[float]:
    """
    (# of true booleans) / (size of collection)
    """
        ...
    def nullCount(self) -> Union[int]:
    """
    The number of null values
    """
        ...
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
    contain no type information.
    
    @see #toTypedJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    def toJsonString(self) -> str:
    """
    Convert the internal object representation to an _untyped_ serialized JSON string. This is the equivalent of
    `toJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toTypedJsonString(self) -> str:
    """
    Convert the internal object representation to a _typed_ serialized JSON string. This is the equivalent of
    `toTypedJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toJsString(self) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    def toXmlString(self) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[Set[E]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
    be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
    the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[Set[E]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[Set[E]]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Set[E]]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    @overload
    def toString(self) -> str:
    """
    Serializes contents of this collection as elements separated by `", "` and surrounded by brackets or braces
    (JSON array style for simple collections and object style for maps).
    
    Note that if collection is empty, it returns "[]" or "{}".
    """
        ...
    @overload
    def toString(self, prefix: str, separator: str, suffix: str=None, emptyString: bool=None) -> Union[str]:
    """
    Serializes contents of this collection as "`prefix` + elements separated by `separator` + `suffix`".
    
    Note that if collection is empty then if `emptyString` is true returns "" otherwise returns "`prefix` + `suffix`"
    """
        ...
    @overload
    def toString(self, separator: str) -> Union[str]:
    """
    Serializes contents of this collection as elements separated by `separator`, with no prefix or suffix.
    
    Note that if collection is empty returns ""
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def iter(self) -> Union[Iterator[E]]:
    """
    Use this method if you want to use a C3 iterator.
    @return a C3 iterator of the elements of the collection
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...
    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    def size(self) -> int:
    """
    Number of elements in this instance.
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return true if this instance is empty.
    """
        ...
    def collect(self, limit: int=None) -> Union[Array[E]]:
    """
    Converts this collection to an array.
    
    @param limit
             the maximum number of elements in the resulting array; if null or negative, the whole collection is
             converted.
    """
        ...
    def collectArrays(self, limit: int=None) -> Union[Array[Array[T]]]:
    """
    Converts this collection to an array of arrays. If element type is not a collection then returns an array of
    singleton arrays.
    """
        ...
    def abs(self) -> Union[Set[E]]:
        ...
    @overload
    def aggImplementation(self, spec: AggSpec, op: str) -> Union[R]:
        ...
    @overload
    def aggImplementation(self, spec: AggSpec, aggregator: Callable[[Union[R], Union[E]], Union[R]]) -> Union[R]:
        ...
    @overload
    def aggImplementation(self, spec: AggSpec, folder: Callable[[Union[T], Union[E]], Union[T]], aggregator: Callable[[Union[R], Union[T]], Union[R]]) -> Union[R]:
        ...
    def sumDbl(self) -> float:
    """
    Sum up all the values in the collection
    E.g.
    ```js
       [1,2,3] => 6
    ```
    """
        ...
    def sumDiff(self, absoluteValues: bool=None) -> float:
        ...
    def cusum(self, threshold: float='1', drift: float='0') -> Union[Array[int]]:
    """
    Analyze the finite numeric values to detect positive and negative changes using CUSUM (Cumulative Sum). This
    method uses a single value for ω, providing a way to dampen changes. Non-numeric values are ignored.
    
    Sn+1 = max(0, Sn + xn - drift)
    
    Here _xn_ is the difference between two successive array values and drift is an argument (default 0).
    
    @param threshold CUSUM _threshold_ parameter (must be positive)
    @param drift CUSUM _ω_ value, subtracted from each delta
    @return indexes in array identified as changes
    @see https://en.wikipedia.org/wiki/CUSUM
    """
        ...
    def normalize(self) -> Union[Set[E]]:
        ...
    def at(self, index: int) -> Union[E]:
        ...
    def pluck(self, fieldPath: str, vtOverride: ValueType=None) -> Union[Set[T]]:
        ...
    @overload
    def first(self) -> Union[E]:
    """
    @return first element in this collection.
    """
        ...
    @overload
    def first(self, n: int) -> Union[Set[E]]:
    """
    @return first element in this collection.
    """
        ...
    @overload
    def first(self, test: Callable[[Union[E]], bool]) -> Union[E]:
    """
    @return first element in this collection.
    """
        ...
    @overload
    def firstNotNull(self) -> Union[E]:
    """
    Find first non null element in this collection. Note that element can still be #isEmpty()
    """
        ...
    @overload
    def firstNotNull(self, mapper: Callable[[Union[E]], Union[T]]) -> Union[T]:
    """
    Find first non null element in this collection. Note that element can still be #isEmpty()
    """
        ...
    @overload
    def firstNotEmpty(self) -> E:
    """
    Finds first non empty element.
    """
        ...
    @overload
    def firstNotEmpty(self, mapper: Callable[[Union[E]], Union[T]]) -> T:
    """
    Finds first non empty element.
    """
        ...
    @overload
    def last(self) -> Union[E]:
    """
    @return last element of this collection.
    """
        ...
    @overload
    def last(self, n: int) -> Union[Set[E]]:
    """
    @return last element of this collection.
    """
        ...
    @overload
    def last(self, test: Callable[[Union[E]], bool]) -> Union[E]:
    """
    @return last element of this collection.
    """
        ...
    @overload
    def lastNotNull(self) -> Union[E]:
    """
    Find last non null element in this collection. Note that element can still be #isEmpty()
    """
        ...
    @overload
    def lastNotNull(self, mapper: Callable[[Union[E]], Union[T]]) -> Union[T]:
    """
    Find last non null element in this collection. Note that element can still be #isEmpty()
    """
        ...
    @overload
    def lastNotEmpty(self) -> E:
    """
    Finds last non empty element.
    """
        ...
    @overload
    def lastNotEmpty(self, mapper: Callable[[Union[E]], Union[T]]) -> T:
    """
    Finds last non empty element.
    """
        ...
    @overload
    def minImplementation(self, spec: AggSpec=None) -> Union[E]:
        ...
    @overload
    def minImplementation(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> Union[E]:
        ...
    @overload
    def minBy(self, value: Callable[[Union[E]], Union[Any]]) -> Union[E]:
    """
    @return element of the collection with minimum value based on provided value supplier.
    """
        ...
    @overload
    def minBy(self, value: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[E]:
    """
    @return element of the collection with minimum value based on provided value supplier.
    """
        ...
    @overload
    def maxImplementation(self, spec: AggSpec=None) -> Union[E]:
        ...
    @overload
    def maxImplementation(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> Union[E]:
        ...
    @overload
    def maxBy(self, value: Callable[[Union[E]], Union[Any]]) -> Union[E]:
    """
    @return element of the collection with maximum value based on provided value supplier.
    """
        ...
    @overload
    def maxBy(self, value: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[E]:
    """
    @return element of the collection with maximum value based on provided value supplier.
    """
        ...
    def count(self, spec: AggSpec=None) -> Union[R]:
        ...
    def sumImplementation(self, spec: AggSpec=None) -> Union[R]:
        ...
    def allImplementation(self, spec: AggSpec=None) -> Union[R]:
        ...
    def prod(self, spec: AggSpec=None) -> Union[R]:
        ...
    def avg(self) -> Union[R]:
    """
    Compute the mean of all the values in the collection
    E.g.
    ```js
       [1,2,3] => 2
    ```
    """
        ...
    def avgDbl(self) -> float:
    """
    Compute the mean of all the values in the collection
    E.g.
    ```js
       [1,2,3] => 2.0
    ```
    """
        ...
    def median(self) -> Union[R]:
    """
    Compute median of all the values in the collection
    E.g.
    ```js
       [0,1,2,3] => 1.5
    ```
    """
        ...
    def medianDbl(self) -> float:
    """
    Compute median of all the values in the collection
    E.g.
    ```js
       [0,1,2,3] => 1.5
    ```
    """
        ...
    def percentile(self, percentile: float) -> Union[R]:
    """
    Compute percentile of all the values in the collection
    E.g.
    ```js
       percentile([0,1,2,3], 0.50) => 1.5
    ```
    """
        ...
    def percentileDbl(self, percentile: float) -> float:
    """
    Compute percentile of all the values in the collection
    E.g.
    ```js
       percentile([0,1,2,3], 0.50) => 1.5
    ```
    """
        ...
    def stddev(self) -> Union[R]:
    """
    Compute standard deviation of all the values in the collection
    E.g.
    ```js
       [1,2,3,4] => 1.2909944487358
    ```
    """
        ...
    def stddevDbl(self) -> float:
    """
    Compute standard deviation of all the values in the collection
    E.g.
    ```js
       [1,2,3,4] => 1.2909944487358
    ```
    """
        ...
    def variance(self) -> Union[R]:
    """
    Compute variance of all the values in the collection
    E.g.
    ```js
       [1,2,3,4] => 1
    ```
    """
        ...
    def varianceDbl(self) -> float:
    """
    Compute variance of all the values in the collection
    E.g.
    ```js
       [1,2,3,4] => 1
    ```
    """
        ...
    def aggDbl(self, aggFunc: str, percentile: float=None) -> float:
    """
    Aggregate values in the current collection using the given aggregation function
    @param aggFunc
               Aggregation function to aggregate by
    @param percentile
               If the aggregation function is {@link AggOp.PERCENTILE}
    @return the aggregated value
    """
        ...
    def round(self, decimals: int=None) -> Union[Set[E]]:
        ...
    def invert(self) -> Union[Set[E]]:
        ...
    def only(self, failIfNotSingleton: bool=None) -> Union[E]:
    """
    @return one and only element of the collection or null if collection is empty or is not a singleton i.e. has more
            then one elements.
    """
        ...
    def contains(self, element: Any) -> bool:
    """
    @return `true` if this collection contains provided element.
    """
        ...
    @overload
    def containsAll(self, *elements: Array[E]) -> bool:
    """
    @return `true` if this collection contains all elements of provided collection.
    """
        ...
    @overload
    def containsAll(self, c: Collection[E]) -> bool:
    """
    @return `true` if this collection contains all elements of provided collection.
    """
        ...
    @overload
    def containsAll(self, predicate: Callable[[Union[E]], bool]) -> bool:
    """
    @return `true` if this collection contains all elements of provided collection.
    """
        ...
    @overload
    def containsAll(self, predicate: Callable[[Union[E], Union[int]], bool]) -> bool:
    """
    @return `true` if every element in this collection satisfies provided predicate.
    """
        ...
    @overload
    def containsAny(self, predicate: Callable[[Union[E]], bool]) -> bool:
    """
    @return true if this collection contains any elements satisfying provided condition.
    """
        ...
    @overload
    def containsAny(self, predicate: Callable[[Union[E], Union[int]], bool]) -> bool:
    """
    @return true if this collection contains any elements satisfying provided condition.
    """
        ...
    @overload
    def findAny(self, predicate: Callable[[Union[E]], bool]) -> Union[E]:
    """
    Finds some element in this collection satisfying provided condition.
    """
        ...
    @overload
    def findAny(self, fields: Map[str, Any]) -> Union[E]:
    """
    Finds some element in this collection satisfying provided condition.
    """
        ...
    @overload
    def findAny(self, predicate: Callable[[Union[E], Union[int]], bool]) -> Union[E]:
    """
    Finds some element in this collection satisfying provided condition.
    """
        ...
    @overload
    def anyNotNull(self) -> Union[E]:
    """
    Find any non null element in this collection. Note that element can still be #isEmpty()
    """
        ...
    @overload
    def anyNotNull(self, mapper: Callable[[Union[E]], Union[T]]) -> Union[T]:
    """
    Find any non null element in this collection. Note that element can still be #isEmpty()
    """
        ...
    @overload
    def anyNotEmpty(self) -> E:
    """
    Finds any non empty element.
    """
        ...
    @overload
    def anyNotEmpty(self, mapper: Callable[[Union[E]], Union[T]]) -> T:
    """
    Finds any non empty element.
    """
        ...
    @overload
    def each(self, action: Callable[[Union[E]]]) -> None:
    """
    Invokes action for each element.
    """
        ...
    @overload
    def each(self, action: Callable[[Union[E], Union[int]]]) -> None:
    """
    Execute the specified lambda against each value of the collection. The first argument is the value and the second
    is the collection index.
    """
        ...
    def eachWhile(self, action: Callable[[Union[E]], bool]) -> bool:
    """
    Invokes action for each element while given action returns `true`. Returns `true` if provided action did not
    interrupt iteration.
    """
        ...
    @overload
    def mapToSame(self, mapper: Callable[[Union[E]], Union[E]]) -> Union[Set[E]]:
    """
    @return new collection for all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def mapToSame(self, mapper: Callable[[Union[E], Union[int]], Union[E]]) -> Union[Set[E]]:
    """
    @return new collection for all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def map(self, mapper: Callable[[Union[E]], Union[T]]) -> Union[Set[T]]:
    """
    @return new collection of any with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def map(self, spec: FetchStreamSpec) -> Union[Set[E]]:
    """
    @return new collection based on all elements of this collection by applying provided mapping specification.
    """
        ...
    @overload
    def map(self, expr: str) -> Union[Set[T]]:
    """
    @return new set by evaluating provided expression over each element.
    """
        ...
    @overload
    def map(self, mapper: Callable[[Union[E], int], Union[T]]) -> Union[Set[T]]:
    """
    @return new collection of any with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def mapToStr(self, mapper: Callable[[Union[E]], Union[str]]) -> Union[Set[str]]:
    """
    @return new collection of string with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def mapToStr(self, mapper: Callable[[Union[E], int], Union[str]]) -> Union[Set[str]]:
    """
    @return new collection of string with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def mapTo(self, elementType: ValueType, mapper: Callable[[Union[E]], Union[T]]) -> Union[Set[T]]:
    """
    @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
    """
        ...
    @overload
    def mapTo(self, elementType: ValueType, mapper: Callable[[Union[E], int], Union[T]]) -> Union[Set[T]]:
    """
    @return new collection of provided type with all elements of this collection transformed by applying provided lambda function.
    It is the responsibility of the mapper to convert values to the elementType if needed. The method mapTo will not do any
    such conversion.
    """
        ...
    @overload
    def flatMapToSame(self, mapper: Callable[[Union[E]], Union[CollectionStdLib[E]]]) -> Union[Set[E]]:
    """
    @return a collection of same type consisting of the results of replacing each element of this collection with
            mapped array elements.
    """
        ...
    @overload
    def flatMapToSame(self, mapper: Callable[[Union[E], Union[int]], Union[Set[E]]]) -> Union[Set[E]]:
    """
    @return returns a collection of same type consisting of the results of replacing each element of this collection
            with mapped array elements.
    """
        ...
    @overload
    def flatMap(self, mapper: Callable[[Union[E]], Union[CollectionStdLib[T]]]) -> Union[Set[T]]:
    """
    @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
    """
        ...
    @overload
    def flatMap(self, mapper: Callable[[Union[E], int], Union[Set[T]]]) -> Union[Set[T]]:
    """
    @return returns a collection of any consisting of the results of replacing each element of this collection with mapped array elements.
    """
        ...
    @overload
    def flatMapTo(self, elementType: ValueType, mapper: Callable[[Union[E]], Union[CollectionStdLib[T]]]) -> Union[Set[T]]:
    """
    @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
    """
        ...
    @overload
    def flatMapTo(self, elementType: ValueType, mapper: Callable[[Union[E], int], Union[Set[T]]]) -> Union[Set[T]]:
    """
    @return returns a collection of provided element type consisting of the results of replacing each element of this collection with mapped array elements.
    """
        ...
    def flatMapRecursive(self, toInters: Callable[[Union[E]], Union[CollectionStdLib[I]]], fromInter: Callable[[Union[I]], Union[E]]) -> Union[Set[E]]:
    """
    @return new collection of this type produces by recursively applying `toInter` + `fromInter` lambdas for every
            unique element of this collection and elements returned by `fromInter`.
    """
        ...
    @overload
    def fold(self, folder: Callable[[Union[E], Union[T]], Union[T]]) -> Union[T]:
    """
    @return single value that is a result of aggregation of all elements by provided lambda.
    """
        ...
    @overload
    def fold(self, initial: T, folder: Callable[[Union[E], Union[T]], Union[T]]) -> Union[T]:
    """
    @return single value that is a result of aggregation of all elements by provided lambda.
    """
        ...
    @overload
    def fold(self, initial: T, folder: Callable[[Union[E], Union[int], Union[T]], Union[T]]) -> Union[T]:
    """
    @return single value that is a result of aggregation of all elements by provided lambda and initial value.
    """
        ...
    def compact(self) -> Union[Set[E]]:
    """
    @return new collection with empty elements removed.
    """
        ...
    def unique(self) -> Union[Set[E]]:
    """
    @return new collection with duplicate elements removed.
    """
        ...
    @overload
    def uniqueBy(self, key: Callable[[Union[E]], Union[Any]]=None) -> Union[Set[E]]:
    """
    @return new collection with duplicate elements removed based on provided key supplier.
    """
        ...
    @overload
    def uniqueBy(self, key: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[Set[E]]:
    """
    @return new collection with duplicate elements removed based on provided key supplier.
    """
        ...
    @overload
    def filter(self, predicate: Callable[[Union[E]], bool]) -> Union[Set[E]]:
    """
    Filters elements from this collection based on evaluation result of the provided filter predicate.
    """
        ...
    @overload
    def filter(self, filter: str) -> Union[Set[E]]:
    """
    Filters elements from this collection based on evaluation result of the provided filter predicate.
    """
        ...
    @overload
    def filter(self, fields: Map[str, Any]) -> Union[Set[E]]:
    """
    Filters elements from this collection based on evaluation result of the provided filter predicate.
    """
        ...
    @overload
    def filter(self, predicate: Callable[[Union[E], Union[int]], bool]) -> Union[Set[E]]:
    """
    Filters elements from this collection based on evaluation result of the provided filter predicate.
    """
        ...
    def fillMissingBy(self, method: str='PREVIOUS', spec: FillMissingSpec=None) -> Union[Set[E]]:
        ...
    def fillMissing(self, value: Any, spec: FillMissingSpec=None) -> Union[Set[E]]:
        ...
    def fieldNames(self) -> Union[Array[str]]:
        ...
    def fieldValueType(self, field: str) -> Union[ValueType]:
        ...
    @overload
    def reject(self, predicate: Callable[[Union[E]], bool]) -> Union[Set[E]]:
    """
    Rejects elements from this collection based on evaluation result of the provided filter expression.
    """
        ...
    @overload
    def reject(self, predicate: Callable[[Union[E], Union[int]], bool]) -> Union[Set[E]]:
    """
    Rejects elements from this collection based on evaluation result of the provided filter expression.
    """
        ...
    @overload
    def include(self, include: str) -> Union[Set[E]]:
    """
    Maps this collection to another by removing fields from every element that are not part of the provided include
    spec. If include spec is not provided then does nothing.
    """
        ...
    @overload
    def include(self, positions: Collection[int]) -> Union[Set[E]]:
    """
    Maps this collection to another by removing fields from every element that are not part of the provided include
    spec. If include spec is not provided then does nothing.
    """
        ...
    def exclude(self, exclude: str) -> Union[Set[E]]:
    """
    Maps this collection to another by removing fields from every element that are part of provided exclude spec.
    If include spec is not provided then does nothing.
    """
        ...
    def replaceByPredicate(self, e: E, predicate: Callable[[Union[E]], bool]) -> Union[Set[E]]:
        ...
    @overload
    def sorted(self, descending: bool=None) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order.
    
    If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
    stream, while in descending order, null elements were at the beginning of the returned stream.
    """
        ...
    @overload
    def sorted(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order.
    
    If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
    stream, while in descending order, null elements were at the beginning of the returned stream.
    """
        ...
    @overload
    def sorted(self, descending: bool, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order.
    
    If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
    stream, while in descending order, null elements were at the beginning of the returned stream.
    """
        ...
    @overload
    def sorted(self, order: str) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order.
    
    If stream contains null elements, in ascending order null elements were arranged in the last part of the returned
    stream, while in descending order, null elements were at the beginning of the returned stream.
    """
        ...
    @overload
    def sortedBy(self, key: Callable[[Union[E]], Union[Any]]) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
    provided lambda.
    """
        ...
    @overload
    def sortedBy(self, descending: bool, key: Callable[[Union[E]], Union[Any]]) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
    provided lambda.
    """
        ...
    @overload
    def sortedBy(self, key: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
    provided lambda.
    """
        ...
    @overload
    def sortedBy(self, descending: bool, key: Callable[[Union[E], Union[int]], Union[Any]]) -> Union[Set[E]]:
    """
    Maps this collection to another by re-ordering elements based on natural sorting order of a key computed using
    provided lambda.
    """
        ...
    @overload
    def sortedIndex(self, element: E, value: Callable[[Union[E]], Union[Any]]) -> int:
    """
    Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
    order to maintain collections sorted order.
    """
        ...
    @overload
    def sortedIndex(self, element: E, fieldName: str) -> int:
    """
    Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
    order to maintain collections sorted order.
    """
        ...
    @overload
    def sortedIndex(self, element: E, value: Callable[[Union[E], Union[int]], Union[Any]]) -> int:
    """
    Uses a binary search to determine the index at which the value should be inserted into this sorted collection in
    order to maintain collections sorted order.
    """
        ...
    def batch(self, batchSize: int=None) -> Union[Stream[Set[E]]]:
    """
    Maps this collection to a new stream of arrays of the original element type.  The size of each batch is determined
    by the {@link batchSize} parameter.
    """
        ...
    def partition(self, partitioner: Callable[[Union[E]], bool]) -> Union[Map[bool, Array[E]]]:
    """
    Partitions the stream into two arrays based on the truth value of the provided lambda function
    """
        ...
    @overload
    def countBy(self, key: Callable[[Union[E]], Union[str]]) -> Union[Map[str, int]]:
    """
    Counts values returned by the output of the provided string key function
    """
        ...
    @overload
    def countBy(self, keyType: ValueType, key: Callable[[Union[E]], Union[T]]) -> Union[Map[T, int]]:
    """
    Counts values returned by the output of the provided string key function
    """
        ...
    @overload
    def countBy(self, keyType: ValueType, key: Callable[[Union[E], Union[int]], Union[T]]) -> Union[Map[T, int]]:
    """
    Counts values of the output of the provided key function
    """
        ...
    @overload
    def every(self, predicate: Callable[[Union[E]], bool]) -> bool:
    """
    Checks if predicate returns true for all elements of collection
    """
        ...
    @overload
    def every(self, predicate: Callable[[Union[E], Union[int]], bool]) -> bool:
    """
    Checks if predicate returns true for all elements of collection
    """
        ...
    def elementCartesianProduct(self) -> Union[Array[Array[T]]]:
        ...
    @overload
    def flatten(self, shallow: bool=None) -> Union[Set[T]]:
    """
    @return new collection with all nested arrays flattened. The nesting can be to any depth unless `shallow`
            parameter is `true` in which case this collection will only be flattened a single level.
    """
        ...
    @overload
    def flatten(self, depth: int, include: str=None) -> Union[Set[T]]:
    """
    @return new collection with all nested arrays flattened. The nesting can be to any depth unless `shallow`
            parameter is `true` in which case this collection will only be flattened a single level.
    """
        ...
    def sample(self, spec: SampleSpec=None) -> Union[Set[E]]:
    """
    Produce a random sample from this collection with `count` number of elements.
    """
        ...
    @overload
    def slice(self, fromPos: int, toPos: int=None, stride: int=None) -> Union[Set[E]]:
    """
    Creates a new collection from elements starting at #fromIndex. Positive value of index is relative to the first
    position in the collection. Negative value of the index is relative to last position in the collection.
    If #fromIndex is 0, returns same collection.
    """
        ...
    @overload
    def slice(self, positions: Collection[int]) -> Union[Set[E]]:
    """
    Creates a new collection from elements starting at #fromIndex. Positive value of index is relative to the first
    position in the collection. Negative value of the index is relative to last position in the collection.
    If #fromIndex is 0, returns same collection.
    """
        ...
    @overload
    def sliceByKey(self, keys: Collection[Any]) -> Union[Set[E]]:
        ...
    @overload
    def sliceByKey(self, secondaryIndex: str, keys: Collection[Any]) -> Union[Set[E]]:
        ...
    def summarize(self, spec: DigestSpec=None) -> Digest[Any, Digest, DigestBuilder]:
    """
    Create a summary from elements in this Collection.
    """
        ...
    def downsample(self, spec: DownsampleSpec) -> Union[Set[E]]:
    """
    Downsample points to a coarser frequency a.k.a aggregate values at a coarser frequency
    e.g. a 10 element collection needs to be downsampled to a 5 element collection by taking a "SUM" aggregation
    ```js
       [1,2,3,4,5,6,7,8,9,10] => [3,7,11,15,19]
    ```
    """
        ...
    def leastSquares(self) -> LeastSquaresResult:
    """
    Generate a linear regression of the finite numeric values using Ordinary Least Squares. If there are too few
    values, the return value is null; otherwise it is an object with the intercept (α) and slope (β) as well as other
    meta-information. Note that the _x_ observations are the indexes into the array. Non-numeric values are ignored.
    
    @see https://en.wikipedia.org/wiki/Ordinary_least_squares
    """
        ...
    def rollingDiff(self, stride: int='1') -> Union[Set[E]]:
        ...
    def pctChange(self, stride: int='1') -> Union[Set[E]]:
        ...
    def unaryOp(self, op: str) -> Union[Set[E]]:
        ...
    def shape(self) -> Union[Array[int]]:
        ...
    def toObj(self) -> Union[Obj]:
        ...
    def fetch(self, spec: FetchSpec=None) -> Union[Set[E]]:
        ...
    def largest(self, n: int, comparator: Callable[[Union[E], Union[E]], Union[int]]=None, keep: str=None) -> Union[Array[E]]:
        ...
    def histogram(self, spec: HistogramSpec=None) -> Histogram[Any, Any, HistogramBuilder]:
        ...
    def neg(self) -> Union[Set[E]]:
        ...
    def approxMostFrequent(self, spec: CountMinSketchSpec=None) -> Union[Map[str, int]]:
        ...
    @overload
    def timeseries(self, spec: DataTimeseriesSpec=None) -> Union[Set[R]]:
        ...
    @overload
    def timeseries(self, tsFieldSpec: Map[str, TimeseriesFieldSpec], spec: TimeseriesSpec=None) -> Union[Set[R]]:
        ...
    def elementType(self) -> ValueType:
    """
    @return value type of elements in this collection
    """
        ...
    def stream(self) -> Union[Stream[E]]:
    """
    Converts this collection to a stream.
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> Set[E]:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def zip(self, spec: OpSpec, other: Iterable[T], merge: Callable[[Union[E], Union[int], Union[Any], Union[int]], Union[R]], elementType: ValueType=None) -> Iterable[R]:
    """
    Generates a Iterable from the result of applying a binary operator against elements of Iterable.
    The return type of the binary operator must match rt.
    @elementType
           The return value type of the operator/ the element type of the returned Iterable
    @spec
           Configures behavior of this method based on {@link OpSpec#repeatLast}
    @other
           Other Iterable to apply operator on
    @merge
           Binary operator to apply to elements of this and other Iterable at matching positions
    @return the generated Iterable with return type rt.
    """
        ...
    @overload
    @classmethod
    def zip(cls, *collections: Array[Collection[Any]]) -> Union[Array[Array[Any]]]:
    """
    Merges together the values of each of the collection with the values at the corresponding position.
    """
        ...
    def valueType(self) -> ValueType:
    """
    C3 ValueType of this instance.
    """
        ...
    @classmethod
    def valueTypeOf(cls, type: Type, failIfNot: bool=None) -> Union[ValueType]:
    """
    Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
    considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
    
    @see ValueType#instanceType
    """
        ...
    def toNative(self, doNotCopy: bool=None) -> Union[Any]:
    """
    For collections, the natural language collection will be returned. Normally, `toNative` will be called on each
    element in the returned collection (and it will be a copy). If `doNotCopy` is true, the native collection _may_
    be the same one used internally and will not have called `toNative` on the elements.
    
    ## Array
    - Python: `list`
    - JavaScript: `Array`
    - Java: `java.util.List`
    
    ## Set
    - Python: `set`
    - JavaScript: `Set`
    - Java: `java.util.Set`
    
    ## Map
    - Python: `dict`
    - JavaScript: `Map`
    - Java: `java.util.Map`
    
    ## Stream
    - Python: generator
    - JavaScript: generator
    - Java: `java.util.stream.Stream`
    """
        ...
    def validated(self) -> bool:
    """
    @returns true if the collection has been validated
    """
        ...
    def collectionType(self) -> SetType:
    """
    @return value type of this collection
    """
        ...
    def inferType(self) -> Union[Set[E]]:
    """
    @return a collection with potentially more specialized element type by inferring element value types
    """
        ...
    def hasNullElements(self) -> bool:
    """
    @return true if this collection can have null elements
    """
        ...
    def isSame(self, other: Any) -> bool:
    """
    @return true if this instance has same size and type as other collection and contains same elements. Return false
            otherwise including when other is not a collection
    """
        ...
    def hasSameElements(self, other: Collection[Any], ignoreElementOrder: bool=None) -> bool:
    """
    @return true if this instance has same size and elements as other collection but is potentially of different type
    """
        ...
    def isUnique(self) -> bool:
    """
    @return true if this collection discards duplicate elements
    """
        ...
    def isSorted(self) -> bool:
    """
    @return true if this collection is sorted
    """
        ...
    def isIndexed(self) -> bool:
    """
    @return true if this collection is indexed, i.e. has a meaningful order of elements and has #at(int) method
            enabled
    """
        ...
    def indices(self) -> Union[Stream[int]]:
    """
    @return a stream of index values for all elements in this collection
    """
        ...
    def indexOf(self, element: E) -> int:
    """
    @return index of first occurrence of provided element or -1 if element is not in this collection
    """
        ...
    def indexOfAny(self, test: Callable[[Union[E]], bool]) -> int:
    """
    Finds first index of element in this collection satisfying provided condition.
    """
        ...
    def lastIndexOf(self, element: E) -> int:
    """
    @return index of last occurrence of provided element or -1 if element is not in this collection
    """
        ...
    def lastIndexOfAny(self, test: Callable[[Union[E]], bool]) -> int:
    """
    Finds last index of element in this collection satisfying provided condition.
    """
        ...
    @overload
    def min(self, spec: AggSpec=None) -> Union[E]:
    """
    @return
    1. element with minimum value of the primitive collection.
    2. new element with minimum value for each field for the obj collection.
    3. new collection with minimum value for each index for collection of collections.
    
    e.g:
    ```
    d = [{a:1,b:2,c:3}, {a:3,b:0,c:2}]
    d.min() === {a:1,b:0,c:2}
    
    d = [1,2,3]
    d.min() === 1
    
    d = [[1,2,3], [1,1,4,7]]
    d.min() === [1,1,3,7]
    ```
    """
        ...
    @overload
    def min(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> Union[E]:
    """
    @return element of the collection with minimum value based on provided comparator.
    """
        ...
    @overload
    def max(self, spec: AggSpec=None) -> Union[E]:
    """
    @return
    1. element with maximum value of the primitive collection.
    2. new element with maximum value for each field for the obj collection.
    3. new collection with maximum value for each index for collection of collections.
    
    e.g:
    ```js
    d = [{a:1,b:2,c:3}, {a:3,b:0,c:2}]
    d.max() === {a:3,b:2,c:3}
    
    d = [1,2,3]
    d.max() === 3
    
    d = [[1,2,3], [1,1,4]]
    d.max() == [1,2,4]
    ```
    """
        ...
    @overload
    def max(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> Union[E]:
    """
    @return element of the collection with maximum value based on provided comparator.
    """
        ...
    @overload
    def sum(self, spec: AggSpec=None) -> Union[R]:
    """
    @return
    1. sum of all elements of the primitive collection.
    2. new element with summed value for each field for the obj collection.
    3. new collection with summed value for each index for collection of collections.
    Please note that for **Boolean** fields, values will be converted to **Integer** fields before summing.
    
    e.g:
    ```js
    d = [{a:1,b:2,c:3,d:True,e:False}, {a:3,b:0,c:2,d:False,e:False}]
    d.sum() === {a:4,b:2,c:5,d:1,e:0}
    
    d = [1,2,3]
    d.sum() === 6
    
    d = [[1,2,3], [1,1,4]]
    d.sum() == [2,3,7]
    
    d = [False, True, False]
    d.sum() === d.or()
    d.sum() === True
    ```
    @see #agg
    @see #add
    @see #min
    @see #or
    """
        ...
    @overload
    def sum(self, projection: str, spec: AggSpec=None) -> Union[R]:
    """
    Sums up evaluation result of a provided expression for each element in this collection.
    """
        ...
    def all(self, spec: AggSpec=None) -> Union[R]:
    """
    @return
    1. AND (`&&`) of all elements of the primitive collection.
    2. new element with AND (`&&`) value for each field for the obj collection.
    3. new collection with AND (`&&`) value for each index for collection of collections.
    e.g:
    ```js
    d = [{a:False,b:True,c:True}, {a:True,b:True,c:True}]
    d.all() === {a:False,b:True,c:True}
    
    d = [True,True,False]
    d.all() === False
    
    d = [[True,True,False], [True,False,False]]
    d.all() == [True, False, False]
    ```
    """
        ...
    @overload
    def agg(self, spec: AggSpec, op: str) -> Union[R]:
    """
    Aggregates the Collection into a single element based on the aggregator provided.
    Used in operators like min, max to get min and max value of the Collection respectively.
    
    @see #agg
    @see #min
    @see #max
    """
        ...
    @overload
    def agg(self, spec: AggSpec, aggregator: Callable[[Union[R], Union[E]], Union[R]]) -> Union[R]:
    """
    Aggregates the Collection into a single value based on the aggregator provided.
    Used in operators like min, max to get min and max value of the Collection respectively.
    @param aggregator
           Defines the aggregation operation over the collection
    @param spec
           Specialize/influence the Aggregation operation.
    
    @see AggSpec
    @see #min
    @see #max
    @see #agg
    """
        ...
    @overload
    def agg(self, spec: AggSpec, folder: Callable[[Union[T], Union[E]], Union[T]], aggregator: Callable[[Union[R], Union[T]], Union[R]]) -> Union[R]:
    """
    @return an aggregated value by applying a folder lambda over a chunk/partition of data and aggregator over
    the stream of intermediate results. Unlike {@link #agg} which has the same folder lambda aggregating data
    **within and across chunk/partition**, this method allows for different lambdas to be applied in each case.
    {@link #avg} and {@link #variance} uses this internally in the implementation, whereas {@link #sum} uses
    {@link #agg} underneath.
    
    @see #agg
    """
        ...
    @overload
    def agg(self, aggFunc: str, percentile: float=None) -> Union[E]:
    """
    Aggregate values in the current collection using the given aggregation function
    @param aggFunc
               Aggregation function to aggregate by
    @param percentile
               If the aggregation function is {@link AggOp.PERCENTILE}
    @return the aggregated value
    """
        ...
    def toArray(self, arrayType: ArrayType, failIfElementIsInvalid: bool=None) -> Union[Array[T]]:
    """
    Converts this collection to an array of provided type
    """
        ...
    @overload
    def toSet(self) -> Union[Set[E]]:
    """
    Converts this collection to a set of its elements without annotations. The set does not preserve order of the elements.
    """
        ...
    @overload
    def toSet(self, setType: SetType, failIfElementIsInvalid: bool=None) -> Union[Set[T]]:
    """
    Converts this collection to a set of its elements with provided setType (including annotations e.g. indexed, sorted, unique)
    """
        ...
    def toStream(self, streamType: StreamType, failIfElementIsInvalid: bool=None) -> Union[Stream[T]]:
    """
    Converts this collection to an stream of provided type
    """
        ...
    @overload
    def toMap(self) -> Union[Map[str, E]]:
    """
    Converts this collection of instances of WithKey type to a map using natural key of it's elements. If collection
    contains duplicate elements for the same key then only last element will be preserved if collection is with index
    or arbitrary one will survive otherwise. In such cases it's better to use group
    
    @see group
    @see WithKey
    """
        ...
    @overload
    def toMap(self, key: Callable[[Union[E]], Union[str]]) -> Union[Map[str, E]]:
    """
    Converts this collection to a map using provided key lambda function. If collection contains duplicate elements for
    the same key then only last element will be preserved if collection is with index or arbitrary one will survive
    otherwise. In such cases it's better to use group.
    
    @see group
    """
        ...
    def toMapOf(self, keyType: ValueType, key: Callable[[Union[E]], Union[T]]) -> Union[Map[T, E]]:
    """
    Converts this collection to a map using provided key lambda function. If collection contains duplicate elements for
    the same key then only last element will be preserved if collection is with index or arbitrary one will survive
    otherwise. In such cases it's better to use group.
    
    @see group
    """
        ...
    def toMapOfAny(self, entry: Callable[[Union[E]], Union[Pair[T1, T2]]]) -> Union[Map[T1, T2]]:
    """
    Converts this collection to a map of any to any using provided lambda function producing map entry
    """
        ...
    def toMapOfType(self, mapType: MapType, failIfElementIsInvalid: bool=None) -> Union[Map[T1, T2]]:
    """
    Converts this collection to a map of provided type
    """
        ...
    def toCollection(self, collectionType: CollectionType) -> Union[Collection[E]]:
    """
    Converts this collection to a collection of provided collection type but same element type
    """
        ...
    def toMixingCollection(self, collectionType: CollectionType, failIfInvalid: bool=None) -> Union[Set[T]]:
    """
    Converts this collection to a collection of same kind but potentially different element type. If provided
    collection type is same as type of this collection does nothing. If provided collection type is assignable from
    this collection type then simply changes collection type but keeps elements as is. Otherwise also converts
    elements.
    """
        ...
    def toCollectionOfType(self, collectionType: CollectionType, failIfElementIsInvalid: bool=None) -> Union[Collection[T]]:
    """
    Converts this collection to a collection of provided collection type
    """
        ...
    def toInMemory(self) -> Union[Set[E]]:
        ...
    def box(self) -> Union[Boxed[Collection[E]]]:
    """
    @return Boxed instance of this collection.
    """
        ...
    def boxElements(self) -> Union[Set[Boxed[E]]]:
    """
    @return copy of this collection with all elements Boxed.
    """
        ...
    def anonymize(self, spec: AnonymizationSpec=None) -> Union[Set[E]]:
    """
    Maps this collection to another by obfuscating fields.
    @param spec
               A spec use for additional fields that you want to anonymize in addition to already defined pii fields
               in c3 type and quasi identifier fields that you want to anonymize using data anonymization algorithm,
               which ensure k-anonymity in the collection
    @return A Collection that has requested pii fields obfuscated and/or requested quasi identifier fields anonymized
    @see Anonymizer.anonymize, Anonymizer.anonymizeBatch
    """
        ...
    def descriptiveStatistics(self) -> DescriptiveStatisticsResult:
    """
    Descriptive statistics based on a normal distribution. Values which cannot be calculated are null.
    Empty populations will have only sum and count. Non-numeric values are ignored.
    """
        ...
    def withoutOutliers(self, spec: OutliersSpec='{ stddev: 2 }') -> Set[E]:
    """
    Examine all the numeric values in an array and produce a new array with the numbers that fall within the specified
    bounds. If there are not enough points for determining one of the bounds, that bound does not apply. Non-numeric
    and non-finite values are removed as well.
    
    By default, this removes points beyond 2σ from the mean, but many other options are possible by specifying
    different combinations of options in the {@link OutliersSpec spec}.
    
    @param spec configuration of the high and low filter criteria
    """
        ...
    def extractOutliers(self, spec: OutliersSpec='{ stddev: 2 }') -> Set[E]:
    """
    Examine all the numeric values in an array and produce a new array with the numbers that fall outside the specified
    bounds. If there are not enough points for determining one of the bounds, that bound does not apply. Non-numeric
    and non-finite values are not included.
    
    By default, this extracts points beyond 2σ from the mean, but many other options are possible by specifying
    different combinations of options in the {@link OutliersSpec spec}.
    
    @param spec configuration of the high and low filter criteria
    """
        ...
    def isOutlier(self, value: E, spec: OutliersSpec='{ stddev: 2 }') -> bool:
    """
    Examine all the numeric values in an array and determine whether the specified value falls outside the specified
    bounds. If there are not enough points for determining one of the bounds, that bound does not apply. Non-numeric
    and non-finite values are not considered (and never outliers).
    
    By default, this identifies values beyond 2σ from the mean, but many other options are possible by specifying
    different combinations of options in the {@link OutliersSpec spec}.
    
    @param value sample value to check as outlier
    @param spec configuration of the high and low filter criteria
    """
        ...
    def with(self, e: E) -> Set[E]:
    """
    @return new collection with a new element added to it.
    """
        ...
    def withSome(self, e: E, *more: Array[E]) -> Set[E]:
    """
    @return new collection with a new elements added to it.
    """
        ...
    def withAll(self, elements: Collection[E]) -> Union[Set[E]]:
    """
    @return new collection with the provided elements added to it.
    """
        ...
    def without(self, e: E) -> Union[Set[E]]:
    """
    @return new collection without the provided element.
    """
        ...
    def withoutSome(self, e: E, *more: Array[E]) -> Union[Set[E]]:
    """
    @return new collection without the provided elements.
    """
        ...
    def withoutAny(self, predicate: Callable[[Union[E]], bool]) -> Union[Set[E]]:
    """
    @return new collection without elements satisfying provided predicate.
    """
        ...
    def withoutAll(self, elements: Array[E]) -> Union[Set[E]]:
    """
    @return new collection with the provided elements removed.
    """
        ...
    def difference(self, other: Collection[E]) -> Union[Set[E]]:
    """
    @return new collection with elements that are not present in provided collection.
    """
        ...
    @classmethod
    def intersection(cls, *collections: Array[Collection[E]]) -> Union[Set[E]]:
    """
    @return new collection of unique items, in order, that are present in all of the input collections.
    """
        ...
    def unzip(self) -> Union[Array[Array[Any]]]:
    """
    The opposite of zip. Converts a collection of collections into a series of arrays with each source
    element placed in the returning nested array of the same index.
    """
        ...
    def mergeSimilar(self, spec: MergeSimilarSpec=None) -> Union[Stream[MergeSimilarCluster]]:
    """
    Merge multiple strings into a smaller number using JaroWrinkler text similarity to match up strings. The complexity
    is O(n * m) where n is the size of the collection and m is the number of merged clusters.
    @return list of pairs where fst() is the merged result and snd() is the size of merged cluster
    """
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Set[E]:
    """
    Merge the obj references that are same within the current collection. Element order may not be preserved after merge
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    @overload
    def visit(self, visitor: Any) -> Union[T]:
    """
    Calls specific method on collection visitor based on type of this collection. Skips empty collections.
    """
        ...
    @overload
    def visit(self, includeEmpty: bool, visitor: Any) -> Union[T]:
    """
    Calls specific method on collection visitor based on type of this collection. If includeEmpty is true will call
    visitor even if collection is empty.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Union[Set[E]]:
    """
    Maps this collection to new one by invoking Obj#withDefaults on every element
    """
        ...
    def evalTimeseries(self, spec: EvalTimeseriesSpec) -> Union[Timeseries[Any]]:
    """
    Generate a Timeseries from the fields in the given reference collection. If you have [number] {@see Timeseries.fromValues}
    @tsSpec
           Spec indicating fields to use to generate a Timeseries
    @timeInfo
           TimeInfo specifying the range/interval of the result Timeseries
    @return resultant Timeseries as per the given spec
    """
        ...
    @overload
    def groupBy(self, keyType: ValueType, key: Callable[[Union[E]], Union[T]]) -> Union[CollectionGroupBy[E]]:
    """
    Groups the collection by the output of the provided key function, resulting in an intermediate structure
    that can perform an operation on each group.
    
    @param data
              the collection to perform the groupby operation on.
    @param keyType
              Type of the key by which to group by.
    @param key
              function to compute the key from the element in the collection.
    @return an intermediate structure that records the groupby operation, for performing subsequent actions.
    """
        ...
    @overload
    def groupBy(self, key: Callable[[Union[E]], Union[str]]) -> Union[CollectionGroupBy[E]]:
    """
    Groups the collection by the output of the provided key function, resulting in an intermediate structure
    that can perform an operation on each group.
    
    @param data
              the collection to perform the groupby operation on.
    @param key
              function to compute the key from the element in the collection.
    @return an intermediate structure that records the groupby operation, for performing subsequent actions.
    """
        ...
    @overload
    def groupBy(self, fields: str) -> Union[CollectionGroupBy[E]]:
    """
    Groups the collection by the element field or element fields, resulting in an intermediate structure
    that can perform an operation on each group.
    
    @param data
              the collection to perform the groupby operation on.
    @param fields
              Represents a single element field (or integer position) or a list of element fields (or integer
              positions), which allows us to group by the fields of the elements (equivalent to grouping by columns in
              a 2D table).
    @return an intermediate structure that records the groupby operation, for performing subsequent actions.
    """
        ...
    def resample(self, spec: ResampleSpec=None) -> CollectionResample[E]:
    """
    Resamples (normalizes the timeseries) on the Collection. If element type is a reference then resampling happens on
    only the numeric fields. Rules of normalization can be reviewed {@link normalization}
    
    Note: if element type is {@link Partitionable}, this will create a Timeseries per partition key -> see {@link Partitionable} & {@link Collection#groupBy}
    unless TimeseriesSpec.doNotPartition is set
    
    E.g.
    ```js
    col = [{ "a" : 0.9, "b" : 1, "c": "foo", "d": "2010-01-01", "e": true  },
           { "a" : 1.1, "b" : 2, "c": "bar", "d": "2010-01-02", "e": false  },
           { "a" : 2.1, "b" : 3, "c": "foo", "d": "2010-01-03", "e": false  }]
    
    // resample by 1 month frequency on field "d"
    r = col.resample(ResampleSpec.forFields('d', '1m')).sum()
    [{ "d": "2010-01-01", "a" : 4.1, "b" : 6, "e": true  }]
    
    // resample by 8h frequency on field "d"
    r = col.resample(ResampleSpec.forFields('d', '8h')).sum()
    [{ "d": "2010-01-01T00:00:00", "a" : 0.9, "b" : 1, "e": true  },
    [{ "d": "2010-01-01T08:00:00", "a" : 0.0, "b" : 0, "e": false  },
    [{ "d": "2010-01-01T16:00:00", "a" : 0.0, "b" : 0, "e": false  },
    [{ "d": "2010-01-02T00:00:00", "a" : 1.1, "b" : 2, "e": false  },
    [{ "d": "2010-01-02T08:00:00", "a" : 0.0, "b" : 0, "e": false  },
    [{ "d": "2010-01-02T16:00:00", "a" : 0.0, "b" : 0, "e": false  },
    [{ "d": "2010-01-03T00:00:00", "a" : 2.1, "b" : 3, "e": false  },
    ```
    @param spec
              Fields indicating how the Collection should be resampled. {@link ResampleSpec#forFields}
    @return an intermediate structure that records the resample operation, for performing subsequent actions
    """
        ...
    @overload
    def rolling(self, window: Union[int,Period,WindowSpec], minValues: int=None, spec: DataTimeseriesSpec=None) -> Union[CollectionRolling[E]]:
    """
    Records the first step of selecting the window of a rolling (a.k.a. moving) window operation in an intermediate
    structure that can perform further operations on the values in the window.  Each element field is operated on
    independently of the other fields, rather than operating on each element as a whole (equivalent to calculating
    on each column in a 2D table independently when there are multiple columns).
    
    For a general description and examples of what are rolling window operations, see
    [pandas.DataFrame.rolling](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.rolling.html)
    which is very similar to this method.
    
    @param data
              Input data.
    @param window
              Size of the moving window.  An integer represents a fixed number of non-missing values in the window,
              while a {@link Period} represents the time period of each window, and is only valid for datetime-like
              indices.
    @param minValues
              Minimum number of non-missing values in a window required for the final result of an
              operation on the returned {@link CollectionRolling} to have a value for the window.
              Otherwise, the final result for the window is null or NaN.  "Non-missing value" here refer to an
              individual element field, not the entire element.
              When `window` is a {@link Period}, the default value of this parameter is 1.  Otherwise, this parameter
              defaults to the size of the window.
    @param on
              The name of a datetime-like element field (equivalent to datetime-like column on a 2D table) on which to
              calculate the rolling window, rather than the index.  If this is not the name of a datetime-like element
              field (e.g. an integer element field), this method argument will be ignored.
    @return an intermediate structure that records the rolling operation, for performing subsequent actions.
    """
        ...
    @overload
    def rolling(self, agg: str, offset: int, span: int, step: int=None) -> Union[Set[E]]:
    """
    Returns a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
    point in the window starting at "offset" and spanning "span" data points.
    
    Example: `rolling(AVG, sum(normalized.data.quantity), -20, 21, 3)`
    
    @param agg
              Name of the aggregation function.
    @param data
              Input data.
    @param offset
              Start point in the window.
    @param span
              Number of points to span from the offset.
    @param step
              Step of the window.
    @return a timeseries/collection where the value of every data point is computed by aggregating every "step'th"
            point in the window starting at "offset" and spanning "span" data points.
    """
        ...
    @classmethod
    def mergedElementType(cls, *collections: Array[Collection[Any]]) -> ValueType:
    """
    Find the union element value type for some number of collections. This will fall back to `any` if no collections
    are passed.
    """
        ...
    def _item_(self, key: Any) -> Union[Any]:
        ...
    def toData(self, include: str=None) -> Union[Data]:
    """
    Convert the given Collection into {@link Data}. If Type & include are not specified, all fields will be converted
    to Data
    """
        ...
    def replace(self, index: int, e: E) -> Union[Set[E]]:
    """
    @return copy of this collection with new element at provided index.
    """
        ...
    def initial(self, exceptLastN: int='1') -> Set[E]:
    """
    Returns everything but the last N entries of the collection
    """
        ...
    def pairs(self) -> Union[Set[Pair[E, E]]]:
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
    @classmethod
    def of(cls, elementType: ValueType, *elements: Array[T]) -> Union[Set[T]]:
    """
    @return collection of provided element type and values.
    """
        ...
    @classmethod
    def ofAny(cls, *elements: Array[T]) -> Union[Set[T]]:
    """
    @return collection of any with provided elements.
    """
        ...
    @classmethod
    def ofBool(cls, *elements: Array[bool]) -> Union[Set[bool]]:
    """
    @return collection of provided booleans.
    """
        ...
    @classmethod
    def ofInt(cls, *elements: Array[int]) -> Union[Set[int]]:
    """
    @return collection of provided 64 bit integers.
    """
        ...
    @classmethod
    def ofInt32(cls, *elements: Array[int]) -> Union[Set[int]]:
    """
    @return collection of provided 32 bit integers.
    """
        ...
    @classmethod
    def ofInt16(cls, *elements: Array[int]) -> Union[Set[int]]:
    """
    @return collection of provided 16 bit integers.
    """
        ...
    @classmethod
    def ofFloat(cls, *elements: Array[float]) -> Union[Set[float]]:
    """
    @return collection of provided floats.
    """
        ...
    @classmethod
    def ofDbl(cls, *elements: Array[float]) -> Union[Set[float]]:
    """
    @return collection of provided doubles.
    """
        ...
    @classmethod
    def ofByte(cls, *elements: Array[int]) -> Union[Set[int]]:
    """
    @return collection of provided doubles.
    """
        ...
    @classmethod
    def ofDateTime(cls, *elements: Array[datetime]) -> Union[Set[datetime]]:
    """
    @return collection of provided datetime.
    """
        ...
    @classmethod
    def ofStr(cls, *strs: Array[str]) -> Union[Set[str]]:
    """
    @return collection of provided string.
    """
        ...
    @overload
    @classmethod
    def ofObj(cls, *objs: Array[Obj]) -> Union[Set[Obj]]:
    """
    @return collection of generic obj and provided instances.
    """
        ...
    @overload
    @classmethod
    def ofObj(cls, type: Type, *objs: Array[Obj]) -> Union[Set[O]]:
    """
    @return collection of provided C3 type and provided instances.
    """
        ...
    @classmethod
    def ofIntInRange(cls, min: int, max: int, step: int=None) -> Union[Set[int]]:
    """
    @return collection of provided integers in a range.
    """
        ...
    @classmethod
    def ofInt32InRange(cls, min: int, max: int, step: int=None) -> Union[Set[int]]:
    """
    @return collection of provided integers in a range.
    """
        ...
    @classmethod
    def builderOf(cls, elementType: ValueType, *elements: Array[T]) -> SetBuilder[T]:
    """
    @return collection of provided element type and values.
    """
        ...
    @classmethod
    def builderOfAny(cls, *elements: Array[T]) -> SetBuilder[T]:
    """
    @return collection of any with provided elements.
    """
        ...
    @classmethod
    def builderOfInt(cls, *elements: Array[int]) -> SetBuilder[int]:
    """
    @return collection of provided 64 bit integers.
    """
        ...
    @classmethod
    def builderOfInt32(cls, *elements: Array[int]) -> SetBuilder[int]:
    """
    @return collection of provided 32 bit integers.
    """
        ...
    @classmethod
    def builderOfInt16(cls, *elements: Array[int]) -> SetBuilder[int]:
    """
    @return collection of provided 16 bit integers.
    """
        ...
    @classmethod
    def builderOfFloat(cls, *elements: Array[float]) -> SetBuilder[float]:
    """
    @return collection of provided floats.
    """
        ...
    @classmethod
    def builderOfDbl(cls, *elements: Array[float]) -> SetBuilder[float]:
    """
    @return collection of provided doubles.
    """
        ...
    @classmethod
    def builderOfStr(cls, *strs: Array[str]) -> SetBuilder[str]:
    """
    @return collection of provided string.
    """
        ...
    @classmethod
    def builderOfByte(cls, *bytes: Array[int]) -> SetBuilder[int]:
    """
    @return collection of provided byte.
    """
        ...
    @classmethod
    def builderOfBool(cls, *bools: Array[bool]) -> SetBuilder[bool]:
    """
    @return collection of provided booleans.
    """
        ...
    @classmethod
    def builderOfDateTime(cls, *datetimes: Array[datetime]) -> SetBuilder[datetime]:
    """
    @return collection of provided byte.
    """
        ...
    @overload
    @classmethod
    def builderOfObj(cls, *objs: Array[Obj]) -> SetBuilder[Obj]:
    """
    @return collection of generic obj and provided instances.
    """
        ...
    @overload
    @classmethod
    def builderOfObj(cls, type: Type, *objs: Array[Obj]) -> SetBuilder[O]:
    """
    @return collection of provided C3 type and provided instances.
    """
        ...
    def isCompressed(self) -> bool:
    """
    Whether or not this object is compressed to optimize memory usage at the expense of access time.
    
    @see #compress
    @see #uncompress
    """
        ...
    def compress(self) -> Set[E]:
    """
    Return an immutable compact copy of the object or itself if already compressd.
    """
        ...
    def uncompress(self) -> Set[E]:
    """
    Return an immutable compress copy of the object or itself if is not compressed.
    """
        ...
    def isPacked(self) -> bool:
    """
    Whether or not this object is packed to optimize memory usage at the expense of access time.
    
    @see #pack
    @see #unpack
    """
        ...
    def pack(self) -> Set[E]:
    """
    Return an immutable compact copy of the object or itself if already packed.
    
    @see #isPacked
    """
        ...
    def unpack(self) -> Set[E]:
    """
    Return an immutable unpacked copy of the object or itself if already unpacked.
    
    @see #isPacked
    """
        ...
    def reversed(self) -> Union[Set[E]]:
    """
    @return collection with elements reversed. The first element becomes the last, and the last element becomes the
            first.
    """
        ...
    @overload
    def withIfMissing(self, e: E) -> Set[E]:
    """
    @return new collection with new element added to it if it is not already present.
    """
        ...
    @overload
    def withIfMissing(self, e: E, predicate: Callable[[Union[E]], bool]) -> Set[E]:
    """
    @return new collection with new element added to it if it is not already present based on provided predicate.
    """
        ...
    def get(self, index: int) -> Union[E]:
    """
    Get an element of the set by index (like an array). Not all sets are indexed, so this method may not be supported.
    It also may not be efficient, so iteration should be used instead of a loop to process all elements.
    (Indexing makes the set have a stable order, but does not mean index-based access is as fast as an array.)
    
    @return element of this set at provided 0 based index. If index is out of bounds returns `null`.
    
    @see CollectionType#isIndexed
    """
        ...
    @classmethod
    def union(cls, *collections: Array[Collection[T]]) -> Union[Set[T]]:
    """
    @return new set of unique items, in order, that are present in one or more of the input collections.
    """
        ...
    @classmethod
    def build(cls, elementType: ValueType, builder: Callable[[SetBuilder[T]]]) -> Union[Set[T]]:
    """
    @return new instance of set of provided element type by applying builder lambda.
    """
        ...
    @classmethod
    def buildAny(cls, builder: Callable[[SetBuilder[T]]]) -> Union[Set[T]]:
    """
    @return new instance of set of any by applying builder lambda.
    """
        ...
    @classmethod
    def buildInts(cls, builder: Callable[[SetBuilder[int]]]) -> Union[Set[int]]:
    """
    @return new instance of set of ints by applying builder lambda.
    """
        ...
    @classmethod
    def buildInt16s(cls, builder: Callable[[SetBuilder[int]]]) -> Union[Set[int]]:
    """
    @return new instance of set of int16s by applying builder lambda.
    """
        ...
    @classmethod
    def buildInt32s(cls, builder: Callable[[SetBuilder[int]]]) -> Union[Set[int]]:
    """
    @return new instance of set of int32s by applying builder lambda.
    """
        ...
    @classmethod
    def buildFloats(cls, builder: Callable[[SetBuilder[float]]]) -> Union[Set[float]]:
    """
    @return new instance of set of floats by applying builder lambda.
    """
        ...
    @classmethod
    def buildDbls(cls, builder: Callable[[SetBuilder[float]]]) -> Union[Set[float]]:
    """
    @return new instance of set of doubles by applying builder lambda.
    """
        ...
    @classmethod
    def buildStrs(cls, builder: Callable[[SetBuilder[str]]]) -> Union[Set[str]]:
    """
    @return new instance of set of string by applying builder lambda.
    """
        ...
    @classmethod
    def buildObjs(cls, type: Type, builder: Callable[[SetBuilder[O]]]) -> Union[Set[O]]:
    """
    @return new instance of set of provided C3 type by applying builder lambda.
    """
        ...
    def toBuilder(self) -> Union[SetBuilder[E]]:
    """
    @return new instance of SetBuilder with current set's content as initial content.
    """
        ...

