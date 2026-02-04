#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type LdapIdp.QueryKind


class QueryKind():
    """
    Enum type that indicates the type for a specific LdapQuery.
    
    @remarks this represents a made instance of LdapIdp.QueryKind
    """
    
    UID: Optional[str]=None
    """
    The 'uid' ('userid') is the system login name associated with the object
    """

    SN: Optional[str]=None
    """
    The 'sn' ('surname') is the family names of a person.
    """

    CN: Optional[str]=None
    """
    The 'cn' ('commonName') is the name of an object. Ex: A person's full name
    """

    DN: Optional[str]=None
    """
    The 'distinguishedName'  is not used as the name of the object itself, but is a base type for inheritance
    """

    MAIL: Optional[str]=None
    """
    The 'email' of a user
    """

    OBJECT_CLASS: Optional[str]=None
    """
    An object class is "an identified family of objects that share certain characteristics"
    """

    GROUP_NAMES: Optional[str]=None
    """
    The 'groupOfNames' object class is the basis of an entry that represents a set of named objects
    """

    GROUP_U_NAMES: Optional[str]=None
    """
    Similar to GROUP_NAMES, except that the object names are not repeated or reassigned within a set scope
    """

    UNIQUE_MEMBER: Optional[str]=None
    """
    The 'uniqueMember' attribute type contains the distinguished names of an object that is on a list or in a group
    """

    MEMBER: Optional[str]=None
    """
    The 'uniqueMember' attribute type contains the distinguished names of an object that is on a list or in a group
    """

    S_AMA_ACCOUNT_NAME: Optional[str]=None
    """
    Possible uid for user prefix
    """

    USER_PRINCIPAL_NAME: Optional[str]=None
    """
    Possible uid for user prefix
    """

    GROUP: Optional[str]=None
    """
    Possible group object class
    """

    USER: Optional[str]=None
    """
    Possible user object class
    """

    PERSON: Optional[str]=None
    """
    Possible user object class
    """

    AND: Optional[str]=None

    OR: Optional[str]=None
    def __init__(self, UID: Optional[str]=None, SN: Optional[str]=None, CN: Optional[str]=None, DN: Optional[str]=None, MAIL: Optional[str]=None, OBJECT_CLASS: Optional[str]=None, GROUP_NAMES: Optional[str]=None, GROUP_U_NAMES: Optional[str]=None, UNIQUE_MEMBER: Optional[str]=None, MEMBER: Optional[str]=None, S_AMA_ACCOUNT_NAME: Optional[str]=None, USER_PRINCIPAL_NAME: Optional[str]=None, GROUP: Optional[str]=None, USER: Optional[str]=None, PERSON: Optional[str]=None, AND: Optional[str]=None, OR: Optional[str]=None) -> None: ...

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

