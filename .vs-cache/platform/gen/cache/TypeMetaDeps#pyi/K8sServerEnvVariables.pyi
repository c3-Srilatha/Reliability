#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type K8sServerEnvVariables


class K8sServerEnvVariables(K8sPodEnvVariables):
    """
    @remarks this represents a made instance of K8sServerEnvVariables
    """
    
    CONTAINER_MEMORY: Optional[str]=None

    JVM_MIN_MEM_FRACTION: Optional[str]=None

    JVM_MAX_MEM_FRACTION: Optional[str]=None

    MY_NODE_NAME: Optional[str]=None

    K8S_CASS_HOST_PREFIX: Optional[str]=None

    K8S_CASS_KNOWN_HOSTS: Optional[str]=None

    K8S_CASS_PORT: Optional[str]=None

    K8S_CLOUD_REGION: Optional[str]=None

    K8S_CLUSTER_CLOUD_SECURITY_ID: Optional[str]=None

    K8S_CONFIG_FS_MACHINE_ROLE: Optional[str]=None

    K8S_CONFIG_FS_OWNER: Optional[str]=None

    K8S_CONFIG_FS_REGION: Optional[str]=None

    K8S_CONFIG_FS_ROOT: Optional[str]=None

    K8S_PG_DATABASE: Optional[str]=None

    K8S_PG_HOST: Optional[str]=None

    K8S_PG_PASS: Optional[str]=None

    K8S_PG_PORT: Optional[str]=None

    K8S_PG_USER: Optional[str]=None

    K8S_SEC_PG_DATABASE: Optional[str]=None

    K8S_TENANTS_PG_DATABASE: Optional[str]=None

    K8S_USE_MACHINE_CREDS: Optional[str]=None

    K8S_VAULT_FS_MACHINE_ROLE: Optional[str]=None

    K8S_VAULT_FS_REGION: Optional[str]=None

    K8S_VAULT_FS_ROOT: Optional[str]=None

    K8S_ZK_SERVERS: Optional[str]=None

    K8S_ZK_SESSION_TIMEOUT: Optional[str]=None

    K8S_CONTROL_CLUSTER: Optional[str]=None

    K8S_TENANTS_PG_USER: Optional[str]=None

    K8S_TENANTS_PG_PASS: Optional[str]=None

    K8S_SEC_PG_USER: Optional[str]=None

    K8S_SEC_PG_PASS: Optional[str]=None

    K8S_DOWNWARD_API_MOUNT_PATH: Optional[str]=None

    K8S_EXTERNAL_VAULT_KIND: Optional[str]=None

    K8S_EXTERNAL_VAULT_URL: Optional[str]=None

    K8S_EXTERNAL_VAULT_AUTH: Optional[str]=None

    K8S_EXTERNAL_VAULT_ROLE: Optional[str]=None

    K8S_EXTERNAL_VAULT_FLAT_PATH: Optional[str]=None

    K8S_EXTERNAL_VAULT_TOKEN: Optional[str]=None

    K8S_EXTERNAL_VAULT_MIGRATE_CONFIG_SOURCE: Optional[str]=None

    K8S_EXTERNAL_VAULT_MIGRATE_VAULT_SOURCE: Optional[str]=None
    def __init__(self, CONTAINER_MEMORY: Optional[str]=None, JVM_MIN_MEM_FRACTION: Optional[str]=None, JVM_MAX_MEM_FRACTION: Optional[str]=None, MY_NODE_NAME: Optional[str]=None, K8S_CASS_HOST_PREFIX: Optional[str]=None, K8S_CASS_KNOWN_HOSTS: Optional[str]=None, K8S_CASS_PORT: Optional[str]=None, K8S_CLOUD_REGION: Optional[str]=None, K8S_CLUSTER_CLOUD_SECURITY_ID: Optional[str]=None, K8S_CONFIG_FS_MACHINE_ROLE: Optional[str]=None, K8S_CONFIG_FS_OWNER: Optional[str]=None, K8S_CONFIG_FS_REGION: Optional[str]=None, K8S_CONFIG_FS_ROOT: Optional[str]=None, K8S_PG_DATABASE: Optional[str]=None, K8S_PG_HOST: Optional[str]=None, K8S_PG_PASS: Optional[str]=None, K8S_PG_PORT: Optional[str]=None, K8S_PG_USER: Optional[str]=None, K8S_SEC_PG_DATABASE: Optional[str]=None, K8S_TENANTS_PG_DATABASE: Optional[str]=None, K8S_USE_MACHINE_CREDS: Optional[str]=None, K8S_VAULT_FS_MACHINE_ROLE: Optional[str]=None, K8S_VAULT_FS_REGION: Optional[str]=None, K8S_VAULT_FS_ROOT: Optional[str]=None, K8S_ZK_SERVERS: Optional[str]=None, K8S_ZK_SESSION_TIMEOUT: Optional[str]=None, K8S_CONTROL_CLUSTER: Optional[str]=None, K8S_TENANTS_PG_USER: Optional[str]=None, K8S_TENANTS_PG_PASS: Optional[str]=None, K8S_SEC_PG_USER: Optional[str]=None, K8S_SEC_PG_PASS: Optional[str]=None, K8S_DOWNWARD_API_MOUNT_PATH: Optional[str]=None, K8S_EXTERNAL_VAULT_KIND: Optional[str]=None, K8S_EXTERNAL_VAULT_URL: Optional[str]=None, K8S_EXTERNAL_VAULT_AUTH: Optional[str]=None, K8S_EXTERNAL_VAULT_ROLE: Optional[str]=None, K8S_EXTERNAL_VAULT_FLAT_PATH: Optional[str]=None, K8S_EXTERNAL_VAULT_TOKEN: Optional[str]=None, K8S_EXTERNAL_VAULT_MIGRATE_CONFIG_SOURCE: Optional[str]=None, K8S_EXTERNAL_VAULT_MIGRATE_VAULT_SOURCE: Optional[str]=None) -> None: ...

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

