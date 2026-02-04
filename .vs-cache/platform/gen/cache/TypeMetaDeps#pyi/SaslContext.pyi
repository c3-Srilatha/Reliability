#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.KerberosSpec import KerberosSpec

# Python definitions for the C3 type SaslContext


class SaslContext(Value):
    """
    SaslContext implementation.
    
    @remarks this represents a made instance of SaslContext
    """
    def __init__(self) -> None: ...

    @classmethod
    def doAs(cls, kerberos: KerberosSpec=None, lambda_: Any=None) -> Union[Any]:
    """
    Run a Java Supplier function under the security context generated from the KerberosSpec.
    
    @param kerberos
             KerberosSpec that contains user credentials
    @param lambda
             Java Supplier function to run under the user
    """
        ...

