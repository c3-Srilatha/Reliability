#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsCloudWatchNamespace


class AwsCloudWatchNamespace():
    """
    Enum type to store namespaces for Amazon CloudWatch metrics
    NameSpaces are containers for metrics. Metrics in different nameSpaces are isolated from each other, so that
    metrics from different applications are not mistakenly aggregated into the same statistics. All AWS services that
    provide Amazon CloudWatch data use a nameSpace string, beginning with "AWS/", such as AWS/ELB, AWS/DynamoDB
    
    @remarks this represents a made instance of AwsCloudWatchNamespace
    """
    
    DYNAMO_DB: Optional[str]=None

    EC2: Optional[str]=None

    EBS: Optional[str]=None

    ELB: Optional[str]=None

    EMR: Optional[str]=None

    IOT: Optional[str]=None

    KINESIS: Optional[str]=None

    LAMBDA: Optional[str]=None

    OPS_WORKS: Optional[str]=None

    REDSHIFT: Optional[str]=None

    RDS: Optional[str]=None

    HOSTED_ZONE: Optional[str]=None

    SES: Optional[str]=None

    SQS: Optional[str]=None

    S3: Optional[str]=None
    def __init__(self, DYNAMO_DB: Optional[str]=None, EC2: Optional[str]=None, EBS: Optional[str]=None, ELB: Optional[str]=None, EMR: Optional[str]=None, IOT: Optional[str]=None, KINESIS: Optional[str]=None, LAMBDA: Optional[str]=None, OPS_WORKS: Optional[str]=None, REDSHIFT: Optional[str]=None, RDS: Optional[str]=None, HOSTED_ZONE: Optional[str]=None, SES: Optional[str]=None, SQS: Optional[str]=None, S3: Optional[str]=None) -> None: ...

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
    @classmethod
    def forResourceType(cls, resourceType: Type) -> Union[str]:
    """
    @return CloudWatch namespace for a given CloudResource type.
    """
        ...

