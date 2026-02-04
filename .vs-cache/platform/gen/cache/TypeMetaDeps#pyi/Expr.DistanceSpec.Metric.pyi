#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Expr.DistanceSpec.Metric


class Metric(Db.Index.Field.OpClass):
    """
    Enum for distance metrics.
    
    @remarks this represents a made instance of Expr.DistanceSpec.Metric
    """
    
    L2: Optional[str]=None
    """
    L2 represents the Euclidean distance. It measures the length of a segment that connects 2 points.
    """

    L2_SPARSE_VECTOR: Optional[str]=None
    """
    Represents the Euclidean distance between 2 sparse vectors.
    """

    INNER_PRODUCT: Optional[str]=None
    """
    Represents the Dot product between two vectors.
    """

    INNER_PRODUCT_SPARSE_VECTOR: Optional[str]=None
    """
    Represents the Dot product between two sparse vectors.
    """

    COSINE: Optional[str]=None
    """
    Cosine similarity uses the cosine of the angle between two sets of vectors to measure how similar they are.
    """

    COSINE_SPARSE_VECTOR: Optional[str]=None
    """
    Cosine similarity uses the cosine of the angle between two sets of sparse vectors to measure how similar they are.
    """

    L1: Optional[str]=None
    """
    The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
    between two vectors by adding up the absolute differences between their components.
    """

    L1_SPARSE_VECTOR: Optional[str]=None
    """
    The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
    between two sparse vectors by adding up the absolute differences between their components.
    """

    HAMMING: Optional[str]=None
    """
    The Hamming distance between two vectors is the number of positions at which the corresponding elements of the
    vectors differ.
    This is compatible with only binary quantized vectors.
    """

    JACCARD: Optional[str]=None
    """
    The Jaccard distance is a metric used to measure the dissimilarity between two sets.
    It is based on the Jaccard Index, which measures the similarity between two sets.
    The Jaccard distance is simply one minus the Jaccard index.
    """
    def __init__(self, L2: Optional[str]=None, L2_SPARSE_VECTOR: Optional[str]=None, INNER_PRODUCT: Optional[str]=None, INNER_PRODUCT_SPARSE_VECTOR: Optional[str]=None, COSINE: Optional[str]=None, COSINE_SPARSE_VECTOR: Optional[str]=None, L1: Optional[str]=None, L1_SPARSE_VECTOR: Optional[str]=None, HAMMING: Optional[str]=None, JACCARD: Optional[str]=None) -> None: ...

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

