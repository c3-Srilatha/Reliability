#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type CloudResourceRoles


class CloudResourceRoles():
    """
    Enumerates all the roles used in cloud resource
    
    @remarks this represents a made instance of CloudResourceRoles
    """
    
    jupyter: Optional[str]=None
    """
    Roles associated with jupyter notebook. e.g `local-env-ecstd-jupyter-01` represents an aws ecs task definition for
    jupyter notebook
    """

    rserver: Optional[str]=None
    """
    Roles associated with remote. e.g `local-env-ecstd-rserver-01` represents an aws ecs task definition
    for jupyter notebook
    """

    exmac: Optional[str]=None
    """
    Roles associated with Ex-machina. e.g `*-*-elb-exmac-*` represents an aws elb created that load balances
    requests to ex-machina.
    """

    gangl: Optional[str]=None

    test: Optional[str]=None
    """
    Cloud identities created for tests
    """

    app: Optional[str]=None
    """
    Roles with association with c3server  application. e.g `*-*-instance-app-*` represents an aws ec2 instance
    that will run c3server
    """

    ecsc: Optional[str]=None
    """
    Roles with association with aws ecs cluster. e.g `*-*-instance-ecsc-*` represents an ec2 instance that acts as a
    ecs container instance.
    """

    pub: Optional[str]=None
    """
    Roles that are public. e.g `*-*-dn-pub-*` - public subnet
    """

    pvt: Optional[str]=None
    """
    Roles that are private. e.g `*-*-dn-pvt-*` - private subnet only accessible within the vpc
    """

    c3: Optional[str]=None
    """
    Roles used to represent C3 cluster level resources. e.g ``*-*-sg-c3-*` - security group for the cluster
    """

    emr: Optional[str]=None
    """
    Roles associated with aws emr. e.g `*-*-sn-emr-01` - subnet created to allow access to  aws emr
    """

    elb: Optional[str]=None
    """
    Roles associated with aws elb. e.g *-*-sn-emr-01` - subnet defined for an elb
    """

    nat: Optional[str]=None
    """
    Roles associated with aws nat gateway. e.g *-*-sn-nat-01` - subnet defined for a nat gateway
    """
    def __init__(self, jupyter: Optional[str]=None, rserver: Optional[str]=None, exmac: Optional[str]=None, gangl: Optional[str]=None, test: Optional[str]=None, app: Optional[str]=None, ecsc: Optional[str]=None, pub: Optional[str]=None, pvt: Optional[str]=None, c3: Optional[str]=None, emr: Optional[str]=None, elb: Optional[str]=None, nat: Optional[str]=None) -> None: ...

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

