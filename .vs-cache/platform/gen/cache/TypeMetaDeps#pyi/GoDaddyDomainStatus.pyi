#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type GoDaddyDomainStatus


class GoDaddyDomainStatus():
    """
    This type represents Go daddy Domain status
    
    @remarks this represents a made instance of GoDaddyDomainStatus
    """
    
    ACTIVE: Optional[str]=None
    """
    All is well
    """

    AWAITING_TRANSFER_IN_WHOIS: Optional[str]=None
    """
    System is waiting for the end-user to complete an action
    """

    CANCELLED: Optional[str]=None
    """
    Domain has been cancelled, and may or may not be reclaimable
    """

    CONFISCATED: Optional[str]=None
    """
    Domain has been confiscated, usually for abuse, chargeback, or fraud
    """

    DISABLED: Optional[str]=None
    """
    Domain has been disabled
    """

    EXCLUDED: Optional[str]=None
    """
    Domain has been excluded from Firehose registration
    """

    EXPIRED: Optional[str]=None
    """
    Domain has expired
    """

    FAILED_REGISTRATION: Optional[str]=None
    """
    Domain has failed a required action, and the system is no longer retrying
    """

    FAILED_SETUP: Optional[str]=None
    """
    Domain has failed a required action, and the system is no longer retrying
    """

    HELD_SHOPPER: Optional[str]=None
    """
    Domain has been placed on hold, and likely requires intervention from Support
    """

    HELD_EXPIRED_REDEMPTION_MOCK: Optional[str]=None
    """
    Domain has been placed on hold, and likely requires intervention from Support
    """

    LOCKED: Optional[str]=None
    """
    Domain has been locked, and likely requires intervention from Support
    """

    PARKED: Optional[str]=None
    """
    Domain has been parked, and likely requires intervention from Support
    """

    PENDING_HOLD_REDEMPTION: Optional[str]=None
    """
    Domain is working its way through an automated workflow
    """

    PENDING_EXPIRATION_RESPONSE: Optional[str]=None
    """
    Domain is working its way through an automated workflow
    """

    RESERVED: Optional[str]=None
    """
    Domain is reserved, and likely requires intervention from Support
    """

    REVERTED: Optional[str]=None
    """
    Domain has been reverted, and likely requires intervention from Support
    """

    SUSPENDED: Optional[str]=None
    """
    Domain has been suspended, and likely requires intervention from Support
    """

    TRANSFERRED_OUT: Optional[str]=None
    """
    Domain has been transferred out
    """

    UNKNOWN: Optional[str]=None
    """
    Domain is in an unknown state
    """

    UNLOCKED: Optional[str]=None
    """
    Domain has been unlocked, and likely requires intervention from Support
    """

    UNPARKED: Optional[str]=None
    """
    Domain has been unparked, and likely requires intervention from Support
    """

    UPDATED: Optional[str]=None
    """
    Domain ownership has been transferred to another account
    """
    def __init__(self, ACTIVE: Optional[str]=None, AWAITING_TRANSFER_IN_WHOIS: Optional[str]=None, CANCELLED: Optional[str]=None, CONFISCATED: Optional[str]=None, DISABLED: Optional[str]=None, EXCLUDED: Optional[str]=None, EXPIRED: Optional[str]=None, FAILED_REGISTRATION: Optional[str]=None, FAILED_SETUP: Optional[str]=None, HELD_SHOPPER: Optional[str]=None, HELD_EXPIRED_REDEMPTION_MOCK: Optional[str]=None, LOCKED: Optional[str]=None, PARKED: Optional[str]=None, PENDING_HOLD_REDEMPTION: Optional[str]=None, PENDING_EXPIRATION_RESPONSE: Optional[str]=None, RESERVED: Optional[str]=None, REVERTED: Optional[str]=None, SUSPENDED: Optional[str]=None, TRANSFERRED_OUT: Optional[str]=None, UNKNOWN: Optional[str]=None, UNLOCKED: Optional[str]=None, UNPARKED: Optional[str]=None, UPDATED: Optional[str]=None) -> None: ...

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

