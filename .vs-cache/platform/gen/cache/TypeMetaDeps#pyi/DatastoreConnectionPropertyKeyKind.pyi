#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DatastoreConnectionPropertyKeyKind


class DatastoreConnectionPropertyKeyKind():
    """
    Enum for different "kinds" of datastore connection keys that are used for properties  (e.g. currently "c3.db" or "c3.datastore.kind")
    
    @remarks this represents a made instance of DatastoreConnectionPropertyKeyKind
    """
    
    C3_DATABASE: Optional[str]=None
    """
    C3 Database
    """

    C3_DATASTORE: Optional[str]=None
    """
    C3 Datastore Kind
    """

    C3_DATASTORE_CONFIG_NAME: Optional[str]=None
    """
    C3 Datastore Config Name
    """

    TLS_JAVA_KEYSTORE: Optional[str]=None
    """
    TLS JAVA KEYSTORE
    """

    TLS_JAVA_KEYSTORE_PASSWORD: Optional[str]=None
    """
    TLS JAVA KEYSTORE.PASSWORD
    """

    TLS_JAVA_TRUSTSTORE: Optional[str]=None
    """
    TLS JAVA TRUSTSTORE
    """

    TLS_JAVA_TRUSTSTORE_PASSWORD: Optional[str]=None
    """
    TLS JAVA TRUSTSTORE.PASSWORD
    """

    CERT_HASH: Optional[str]=None
    """
    TLS cert hash string, used for verifying if the cert has changed. See {@link TlsCertificate}
    """
    def __init__(self, C3_DATABASE: Optional[str]=None, C3_DATASTORE: Optional[str]=None, C3_DATASTORE_CONFIG_NAME: Optional[str]=None, TLS_JAVA_KEYSTORE: Optional[str]=None, TLS_JAVA_KEYSTORE_PASSWORD: Optional[str]=None, TLS_JAVA_TRUSTSTORE: Optional[str]=None, TLS_JAVA_TRUSTSTORE_PASSWORD: Optional[str]=None, CERT_HASH: Optional[str]=None) -> None: ...

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

