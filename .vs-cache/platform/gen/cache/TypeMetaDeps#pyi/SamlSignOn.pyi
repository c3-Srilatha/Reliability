#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SamlAssertionAttribute import SamlAssertionAttribute

# Python definitions for the C3 type SamlSignOn


class SamlSignOn(Value):
    """
    This type is used during the SAML login flow to both pass back to C3 AI Platform, the access control information and allow customized operations through SAML Assertion Attributes
    
    @remarks this represents a made instance of SamlSignOn
    """
    def __init__(self) -> None: ...

    @classmethod
    def userGroupIds(cls, assertion: Map[str, Array[SamlAssertionAttribute]]) -> Union[Array[str]]:
    """
    If the Identity Provider (IdP), sends in the SSO SAML assertion with access control information embedded in to SAML attributes, the C3 platform will invoke this function passing a map of the SAML Attributes so that the customer code can map their access control to an array of C3 UserGroup Ids.
    The C3 platform will use these UserGroup Ids to synchronize the user's (NameID) UserGroup membership (will be added to groups the user belongs to and removed from groups the user no longer belongs to).
    This action is invoked during the SAML login flow.
    
    @param assertion
           This is a map of SAML Assertion Attributes (Maps attribute name to a list of SamlAssertionAttribute)
    
    @return  A list of groups the user belongs to
    """
        ...
    @classmethod
    def onLogin(cls, assertion: Map[str, Array[SamlAssertionAttribute]]) -> None:
    """
    This action can be implemented by customers to process Saml Assertion Attributes during the login flow. Note that the performance of this function will directly affect the login experience of their users.
    
    @param assertion
           This is a map of SAML Assertion Attributes (Maps attribute name to a list of SamlAssertionAttribute)
    """
        ...

