#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Mail import Mail

# Python definitions for the C3 type MailServiceProvider


class MailServiceProvider(Value):
    """
    Base type to integrate third party email service providers. Can be configured using
    {@link MailConfig#serviceProvider}
    
    @remarks this represents a made instance of MailServiceProvider
    """
    def __init__(self) -> None: ...

    @classmethod
    def send(cls, mail: Mail=None) -> Union[Mail]:
    """
    Depending on the {@link MailConfig#serviceProvider} configured, internally calls this method
    when a call to {@link Mail#send} is made.
    @param mail
            The Main that is to be sent.
    @returns The Mail record that was sent or null if none was sent.
    """
        ...
    @classmethod
    def isValidEmail(cls, email: str=None) -> bool:
    """
    Depending on the {@link MailConfig#serviceProvider} configured, internally calls this method
    when a call to {@link Mail#isValidEmail} is made.
    """
        ...

