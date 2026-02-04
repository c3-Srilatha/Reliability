#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.Metric import Metric
from c3.platform.CompoundMetric import CompoundMetric
from c3.platform.Obj import Obj

# Python definitions for the C3 type MetricUtils


class MetricUtils(Value):
    """
    @remarks this represents a made instance of MetricUtils
    """
    def __init__(self) -> None: ...

    @classmethod
    def identifyVariables(cls, expression: str) -> Union[Array[str]]:
    """
    Given a string expression, identify variables in it.
    Variable names are returned in alphabetically sorted order.
    eg: pow(a,2) - 2 * a * b + 3 * pow(b,2) ==> [a,b]
    @param expression
    """
        ...
    @classmethod
    def findDirectUsages(cls, metric: Metric=None) -> Union[Array[CompoundMetric]]:
    """
    API to return the list of compound metric objects where the given metric is directly used
    @param metric
               The metric for which usages need to be found
    @return the list of compound metrics where the metric is used directly.
    """
        ...
    @classmethod
    def findUsages(cls, metric: Metric=None) -> Union[Array[CompoundMetric]]:
    """
    API to return the list of compound metric objects where the given metric is used, directly or indirectly
    @param metric
               The metric for which usages need to be found
    @return the list of compound metrics where the metric is used. This includes all metrics till the root of the tree
    """
        ...
    @classmethod
    def findUsagesForMultipleMetrics(cls, metrics: Array[Metric]=None) -> Union[Map[str, Array[CompoundMetric]]]:
    """
    API to return the list of compound metric objects for all the given metrics
    @param metrics
               List of metrics for which usages need to be found
    @return the list of compound metrics per metric. This includes all metrics till the root of the tree
    """
        ...
    @classmethod
    def findCompoundMetrics(cls, metrics: Array[Metric]=None) -> Union[Array[CompoundMetric]]:
    """
    API to return the list of compound metric objects for all the given metrics
    @param metrics
               List of metrics for which usages need to be found
    @return the list of compound metrics where the metrics is used. This includes all metrics till the root of the tree
    """
        ...
    @classmethod
    def listTSDeclMetrics(cls, filter: str=None) -> Union[Array[Obj]]:
    """
    API to return list of all compound and simple metric objects that use TSDecl and satisfies the provided filter
    @param filter
               Additional filter to be applied on the SimpleMetric type
    @return the list of simple and compound metric objects that contain tsDecl based metrics and satisfies the filter
    """
        ...
    @classmethod
    def listActionDeclMetrics(cls, filter: str=None) -> Union[Array[Obj]]:
    """
    API to return list of all compound and simple metric objects that use ActionDecl and satisfies the provided filter
    @param filter
               Additional filter to be applied on the SimpleMetric type
    @return the list of simple and compound metric objects that contain actionDecl based metrics and satisfies the filter
    """
        ...
    @classmethod
    def listMetricsForField(cls, typeRef: Type=None, field: str=None) -> Union[Array[Obj]]:
    """
    Gets a list of all metrics affected by a field. A metric is affected by a field if it is referenced anywhere in
    the metric path or expression.
    Note that only metrics that participate in automatic invalidation will be returned. This means that only metrics
    such as the following:
    1. Metrics whose path leads to a timeseries header type and expression is the expression on that header type that
    gets the data point values.
    2. AsTimeseries metrics.
    Also note that metrics such as the following will not be returned:
    1. Metrics that don't participate in any analytics (as determined by ACE).
    2. Metrics that specify an action
    @param typeRef
               Type of which the field lives
    @param field
               Name of the field
    @return list of simple and compound metrics that uses the field on the type
    """
        ...
    @classmethod
    def listMetricsForType(cls, typeRef: Type=None) -> Union[Array[Obj]]:
    """
    Gets a list of all metrics affected by a type. A metric is affected by a type if it appears as either the source
    type, or is referenced anywhere in the metric path or expression.
    Note that only metrics that participate in automatic invalidation will be returned. This means that only metrics
    such as the following:
    1. Metrics whose path leads to a timeseries header type and expression is the expression on that header type that
    gets the data point values.
    2. AsTimeseries metrics.
    Also note that metrics such as the following will not be returned:
    1. Metrics that don't participate in any analytics (as determined by ACE).
    2. Metrics that specify an action
    @param typeRef
               Type which is used in the path
    @return list of simple and compound metrics that uses the type
    """
        ...
    @classmethod
    def isExpressionValid(cls, expression: str, sourceType: Type=None) -> bool:
    """
    Check if the expression is a valid metric expression
    @param expression
                   Expression that needs to be validated
    @param sourceType (Optional)
                   Source type for which this expression needs to check validity for
    @return a boolean true if the expression is valid else throws an error
    """
        ...
    @classmethod
    def deepmergeObjs(cls, objs: Array[Obj]=None) -> Union[Array[Obj]]:
    """
    Deep merge Objs Arry
    @param objs
               An array of objs to merge
    @return Deep merged objs
    """
        ...

