#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AwsCloudWatchMetricStatistics import AwsCloudWatchMetricStatistics
from c3.platform.AwsCredentials import AwsCredentials
from c3.platform.AwsCloudWatchMetricStatisticsSpec import AwsCloudWatchMetricStatisticsSpec

# Python definitions for the C3 type AwsCloudWatch


class AwsCloudWatch(Value):
    """
    AwsCloudWatch is a service that monitors AWS resources and the applications running in real-time. Use AwsCloudWatch
    to collect and track metrics that you want to measure for resources and applications.
    
    @remarks this represents a made instance of AwsCloudWatch
    """
    def __init__(self) -> None: ...

    @classmethod
    def listMetrics(cls, credentials: AwsCredentials, namespace: str) -> Union[Array[str]]:
    """
    @return the list of CloudWatch metric names associated to the CloudResource or AwsService
    """
        ...
    @classmethod
    def metricStatistics(cls, credentials: AwsCredentials, namespace: str, spec: AwsCloudWatchMetricStatisticsSpec=None) -> AwsCloudWatchMetricStatistics:
    """
    Gets statistics for the specified metric.
    @return the output statistics of the given metric
    """
        ...

