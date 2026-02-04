#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CloudMessage import CloudMessage
from c3.platform.Type import Type
from c3.platform.CloudMessageBroker import CloudMessageBroker

# Python definitions for the C3 type CloudMessageDispatcher


class CloudMessageDispatcher(Value):
    """
    @remarks this represents a made instance of CloudMessageDispatcher
    """
    def __init__(self) -> None: ...

    @classmethod
    def registration(cls, id: str, brokerType: Type, brokerName: str, cloudConsumer: str=None, register: bool=None) -> None:
    """
    Processes registration/un-registration of a specific cloud message to a {@link CloudMessageBroker}.
    
    @param id
               The registration id of this cloud message.
    @param brokerType
               The specific {@link CloudMessageBroker} type for which to create or remove entries.
    @param brokerName
               The name of the {@link CloudMessageBroker} for which {@link CloudMessage} will be registered to.
    @param cloudConsumer
               Name of the cloud consumer or group to be registered/unregistered from.
    @param register
               Indicates whether the cloud message should be registered/unregistered from the {@link CloudMessageBroker}.
    """
        ...
    @classmethod
    def evalFilter(cls, message: CloudMessage, filter: str=None) -> bool:
    """
    Evaluate if a {@link CloudMessage} can pass a filter
    """
        ...
    @classmethod
    def dispatchToAll(cls, broker: CloudMessageBroker[CloudMessage, CloudReceiveMessagesSpec], messages: Array[CloudMessage], cloudConsumer: str=None) -> None:
    """
    Dispatch an array of messages to all CloudMessageDispatcher
    @param broker
               The {@link CloudMessageBroker} the messages come from.
    @param messages
               Array of {@link CloudMessage} to be dispatched to all CloudMessageDispatcher.
    @param cloudConsumer
               The name of the consumer group with which these messages are associated.
    """
        ...
    @classmethod
    def dispatchMessage(cls, broker: CloudMessageBroker[CloudMessage, CloudReceiveMessagesSpec], message: CloudMessage, cloudConsumer: str=None) -> None:
    """
    Dispatch a {@link CloudMessage} to this {@link CloudMessageDispatcher} type
    @param broker
               The {@link CloudMessageBroker} the message comes from
    @param message
               {@link CloudMessage} to be dispatched to this {@link CloudMessageDispatcher} type
    """
        ...
    @classmethod
    def dispatchMessages(cls, broker: CloudMessageBroker[CloudMessage, CloudReceiveMessagesSpec], messages: Array[CloudMessage], cloudConsumer: str=None) -> None:
    """
    Dispatch a collection of {@link CloudMessage} to this {@link CloudMessageDispatcher} type
    @param broker
               The {@link CloudMessageBroker} the message comes from
    @param messages
               {@link CloudMessage} to be dispatched to this {@link CloudMessageDispatcher} type
    """
        ...
    @classmethod
    def safeSubBatchSize(cls, broker: CloudMessageBroker[CloudMessage, CloudReceiveMessagesSpec], cloudConsumer: str=None, messagesCount: int=None) -> Union[int]:
    """
    safe subBatchsize, determined from  min of all registered CloudMessageDispatcher for given broker and cloud consumer.
    @param broker
               The {@link CloudMessageBroker} the messages come from.
    @param cloudConsumer
               The name of the consumer group with which these messages are associated.
    @param messagesCount
               Count of total messages to be dispatched to all CloudMessageDispatcher. Only used in computing,
    if no subBatchSize is set.
    """
        ...

