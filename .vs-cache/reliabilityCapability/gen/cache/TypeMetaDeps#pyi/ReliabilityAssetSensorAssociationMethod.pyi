#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ReliabilityAssetSensorAssociationMethod


class ReliabilityAssetSensorAssociationMethod():
    """
    Enum type that represents the possible methods for sensor correlations.
    
    @remarks this represents a made instance of ReliabilityAssetSensorAssociationMethod
    """
    
    PEARSON: Optional[str]=None
    """
    A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly related.
    The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply “correlation”.
    If the coefficient value is in the negative range, then that means the relationship between the variables is negatively
    correlated, or as one value increases, the other decreases.
    If the value is in the positive range, then that means the relationship between the variables is positively correlated,
    or both values increase or decrease together.
    
    USE WHEN: You want to measure the strength and direction of a linear relationship between two continuous variables.
    
    NOTE: The data should be normally distributed, and the relationship between the variables should be linear.
    It is sensitive to outliers.
    """

    MUTUAL_INFO: Optional[str]=None
    """
    Mutual Information (MI) is a measure of the mutual dependence between two variables. It quantifies the amount of
    information obtained about one variable through the other variable. Unlike correlation coefficients, Mutual
    Information can capture non-linear relationships between variables. The value of Mutual Information is always
    non-negative, with higher values indicating a greater degree of dependency. If the Mutual Information is zero,
    it means that the variables are independent.
    
    USE WHEN: You want to capture non-linear relationships and dependencies between variables. It's useful in feature
    selection and unsupervised learning applications.
    
    NOTE: It does not assume any specific type of relationship (linear or monotonic) and can handle complex dependencies.
    """

    KENDALL: Optional[str]=None
    """
    Kendall's Tau is a measure of the ordinal association between two variables. It evaluates the strength and direction
    of the relationship between the rankings of the variables. Kendall's Tau ranges from -1 to 1, where -1 indicates a
    perfect negative association, 0 indicates no association, and 1 indicates a perfect positive association. Unlike Pearson
    correlation, Kendall's Tau does not assume a linear relationship between the variables. Instead, it focuses on the order
    of the data points. The calculation involves counting the number of concordant and discordant pairs. Concordant pairs
    are those where the ranks of both variables increase or decrease together, while discordant pairs are those where one
    rank increases as the other decreases.
    
    USE WHEN: You need a non-parametric test to measure the ordinal association between two variables. It's particularly
    useful for small sample sizes or when there are many tied ranks.
    
    NOTE: It does not assume a linear relationship and is based on the ranks of the data. It is robust to outliers and
    works well with small datasets.
    """

    SPEARMAN: Optional[str]=None
    """
    Spearman's rank correlation coefficient, often denoted as Spearman's rho, is a measure of the strength and direction
    of association between two ranked variables. It assesses how well the relationship between two variables can be described
    using a monotonic function. Spearman's rho ranges from -1 to 1, where -1 indicates a perfect negative correlation, 0
    indicates no correlation, and 1 indicates a perfect positive correlation. Unlike Pearson correlation, Spearman's rho
    does not assume a linear relationship and is based on the ranks of the data rather than the raw data values.
    The calculation involves converting the data to ranks and then applying the Pearson correlation formula to these ranks.
    
    USE WHEN: You have ordinal data or your data does not meet the assumptions of normality required by Pearson correlation.
    It's also useful when dealing with non-linear but monotonic relationships.
    
    NOTE: The relationship between the variables should be monotonic (i.e., as one variable increases, the other either
    consistently increases or decreases). It is less sensitive to outliers.
    """
    def __init__(self, PEARSON: Optional[str]=None, MUTUAL_INFO: Optional[str]=None, KENDALL: Optional[str]=None, SPEARMAN: Optional[str]=None) -> None: ...

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

