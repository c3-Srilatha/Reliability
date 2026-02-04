#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type FileSystemMount


class FileSystemMount():
    """
    Enum for pre-configured file system mounts. Note that any number of other mounts can be used as well.
    
    @remarks this represents a made instance of FileSystemMount
    """
    
    ARTIFACT: Optional[str]=None
    """
    Mount that used by all pods to access C3 artifacts.
    """

    DATASETS: Optional[str]=None
    """
    Mount used to store commonly used datasets for the cluster.
    """

    ATTACHMENT: Optional[str]=None
    """
    Mount that used to store file attachments to entity types in the current tenant and tag.
    """

    DEFAULT: Optional[str]=None
    """
    Default mount for the current tenant and tag.
    """

    DATA_LOAD: Optional[str]=None
    """
    Mount where all the customer data load files are located.
    """

    DATA_LAKE: Optional[str]=None
    """
    Mount where default data lake is located.
    """

    ETL: Optional[str]=None
    """
    Mount used by ETL jobs.
    """

    KEY_VALUE: Optional[str]=None
    """
    Mount used by KvStore.FileSystem.
    """

    VAULT: Optional[str]=None
    """
    Mount that keeps secrets.
    """

    TELEMETRY: Optional[str]=None
    """
    Mount that keeps metrics collected in the cluster
    """

    SYSTEM: Optional[str]=None
    """
    Mount used by various system jobs (e.g. MapReduce).
    """

    DATA_LOAD_PREFIX: Optional[str]=None
    """
    A prefix used to ensure mounts created by {@link FileSourceSystem#register}
    are separated from mounts that are set through other methods.
    WARNING: using this prefix as part of a mount for {@link FileSystem#setMount}
    outside of {@link FileSourceSystem#register} risks the mount being overwritten
    by {@link FileSourceSystem#register}
    """
    def __init__(self, ARTIFACT: Optional[str]=None, DATASETS: Optional[str]=None, ATTACHMENT: Optional[str]=None, DEFAULT: Optional[str]=None, DATA_LOAD: Optional[str]=None, DATA_LAKE: Optional[str]=None, ETL: Optional[str]=None, KEY_VALUE: Optional[str]=None, VAULT: Optional[str]=None, TELEMETRY: Optional[str]=None, SYSTEM: Optional[str]=None, DATA_LOAD_PREFIX: Optional[str]=None) -> None: ...

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
    def toExternalMountName(cls, mount: str) -> str:
    """
    Converts mount name to external name since we follow a standard convention for mounts names
    in external URLs. Useful for FileSystem(s) which have different external scheme and needs
    to retain the mount name for final translation when using the FileSystem APIs. e.g C3FileSystem
    """
        ...
    @classmethod
    def fromExternalMountName(cls, externalName: str) -> str:
    """
    Converts the external mount name to mount by applying the reverse transformation as
    {@link toExternalMountName()}. Useful for FileSystem(s) which have different external scheme and needs
    to retain the mount name for final translation when using the FileSystem APIs. e.g C3FileSystem
    """
        ...

