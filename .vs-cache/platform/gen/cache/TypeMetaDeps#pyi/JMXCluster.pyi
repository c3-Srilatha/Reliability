#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MBean import MBean
from c3.platform.MBeanAttribute import MBeanAttribute

# Python definitions for the C3 type JMXCluster


class JMXCluster(Value):
    """
    This type is used to get/set MBean attributes across the C3 Cluster.
    
    @remarks this represents a made instance of JMXCluster
    """
    def __init__(self) -> None: ...

    @classmethod
    def getMBeanAttribute(cls, nameSpec: str=None, attribute: str=None) -> Union[Array[MBeanAttribute]]:
    """
    Get an MBean attribute across the C3 Cluster.
    
    @param nameSpec
             MBean name specification.
    @param attribute
             MBean attribute name.
    
    @return the Arry of MBeanAttribute objects (one per node)
    """
        ...
    @classmethod
    def setMBeanAttribute(cls, nameSpec: str=None, attribute: str=None, value: str=None) -> Union[Array[MBeanAttribute]]:
    """
    Set an MBean attribute value across the C3 Cluster.
    
    @param nameSpec
             MBean name specification.
    @param attribute
             MBean attribute name.
    @param value
             The new value for the attribute, it will be coerced from string
             the the actual primitive type
    
    @return the Arry of modified MBeanAttribute objects (one per node)
    """
        ...
    @classmethod
    def find(cls, nameSpec: str=None) -> Union[Array[MBean]]:
    """
    Find a given MBean across the C3 Cluster. This function is handy for
    finding the attribute names of a given MBean.
    
    @param nameSpec
             MBean name specification.
    
    @return An Arry of MBeans, one per node in the C3 Cluster.
    """
        ...

