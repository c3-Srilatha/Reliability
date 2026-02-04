#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Collection import Collection
from c3.platform.Env import Env
from c3.platform.SessionToken import SessionToken
from c3.platform.Cluster import Cluster
from c3.platform.RemoteConnectSpec import RemoteConnectSpec
from c3.platform.Type import Type
from c3.platform.Pkg import Pkg
from c3.platform.Action import Action
from c3.platform.ServerConnection import ServerConnection
from c3.platform.Logger import Logger
from c3.platform.Promise import Promise
from c3.platform.Context import Context
from c3.platform.App import App
from c3.platform.User import User
from c3.platform.Rnd import Rnd
from c3.platform.SemanticVersion.MajorMinor import SemanticVersion.MajorMinor

# Python definitions for the C3 type C3


class C3(Remote, Value):
    """
    This type defines some commonly-used methods which are made available {@link GlobalProtocol globally}.
    
    In addition to these methods, it also adds all top-level types in the current package into the global
    namespace object for easy access. (This augments the global protocol by making all types global as well.)
    
    ```js
    C3.Duration === C3.type('Duration')
    ```
    
    ```py
    c3.Duration is c3.type('Duration')
    ```
    
    @remarks this represents a made instance of C3
    """
    def __init__(self) -> None: ...

    @classmethod
    def connect(cls, url: str, authz: str=None, actionEngine: str=None, spec: RemoteConnectSpec=None) -> ServerConnection:
    """
    Establish a connection with the server synchronously. Note that this may not be implemented by client environments
    which have no support for synchronous HTTP calling (such as Node.js).
    
    @param url the base URL of the C3 server to connect
    @param authz authentication details for a valid user
    @param actionEngine specific {@link Action.Engine} required
    @param spec additional options to bootstrap the connection
    """
        ...
    @classmethod
    def connection(cls) -> ServerConnection:
    """
    This method returns a server connection to the current environment.
    
    @see #connect
    """
        ...
    @classmethod
    def connectAsync(cls, url: str, authz: str=None, actionEngine: str=None, spec: RemoteConnectSpec=None) -> Promise[ServerConnection]:
    """
    Establish a connection with the server asynchronously.
    
    @param url the base URL of the C3 server to connect
    @param authz authentication details for a valid user
    @param actionEngine specific {@link Action.Engine} required
    @param spec additional options to bootstrap the connection
    """
        ...
    @classmethod
    def connectionPromise(cls) -> Promise[ServerConnection]:
    """
    This method returns an server connection to the current environment asynchronously.
    
    @see #connectAsync
    """
        ...
    @classmethod
    def cluster(cls) -> Cluster:
    """
    Get the current Cluster.
    """
        ...
    @classmethod
    def env(cls) -> Env:
    """
    Get the current Env.
    """
        ...
    @classmethod
    def app(cls) -> App:
    """
    Get the current App.
    """
        ...
    @classmethod
    def pkg(cls) -> Pkg:
    """
    Get the current package.
    """
        ...
    @classmethod
    def user(cls) -> User:
    """
    Get the current user.
    """
        ...
    @classmethod
    def userSessionToken(cls) -> SessionToken:
    """
    Get the current user session token.
    """
        ...
    @classmethod
    def clientVersion(cls) -> str:
    """
    Get the client call version, this is derived either from a declaring C3 application package version if call is
    made from a C3 method implementation or from Api Server URL path version component, i.e. `/api/<verstion>/type/...`
    """
        ...
    @classmethod
    def clientVersionMajorMinor(cls) -> SemanticVersion.MajorMinor:
    """
    Get the client call version, this is derived either from a declaring C3 application package version if call is
    made from a C3 method implementation or from Api Server URL path version component, i.e. `/api/<verstion>/type/...`
    """
        ...
    @classmethod
    def clientAppId(cls) -> str:
    """
    Get the client app id if this is a App <-> App communication.
    """
        ...
    @classmethod
    def clientUserId(cls) -> str:
    """
    Get the client user id if this is a App <-> App communication.
    """
        ...
    @classmethod
    def action(cls) -> Action:
    """
    Get the current Action
    """
        ...
    @classmethod
    def type(cls, name: str, failIfMissing: bool=None) -> Union[Type]:
    """
    Load a type from the current package by name.
    """
        ...
    @classmethod
    def log(cls) -> Logger:
    """
    @return a {@link Logger} for the current type.
    """
        ...
    @classmethod
    def logger(cls, name: str) -> Logger:
    """
    Get logger by name.
    """
        ...
    @classmethod
    def rnd(cls) -> Rnd:
    """
    Random value generator for testing environments and for reliably reproducing synthesized data. Random seed can be
    set manually to reproduce a specific sequence.
    
    @return singleton Rnd instance.
    """
        ...
    @classmethod
    def context(cls) -> Context:
    """
    Get the current Context
    """
        ...
    @classmethod
    def call(cls, type: str, action: str, thisArg: Any, *args: Array[Any]) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For static methods #thisArg should be `null`.
    
    @see #callKwargs
    @see #callJson
    """
        ...
    @classmethod
    def callKwargs(cls, type: str, action: str, kwargs: Map[str, Any]=None) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For methods #kwargs is expected to have element with name {@link FunctionParam#This} ('this')
    unless target type is {@link DefaultInstance}.
    
    @see #call
    @see #callJson
    @see #callJsonKwargs
    """
        ...
    @classmethod
    def callJson(cls, type: str, action: str, thisArg: any, args: any=None) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For static methods #thisArg should be `null`. #args is expected to be a JSON array with method
    arguments.
    
    @see #callKwargs
    @see #callJson
    """
        ...
    @classmethod
    def callJsonKwargs(cls, type: str, action: str, kwargs: any=None) -> Union[T]:
    """
    Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
    functions. For methods #kwargs is expected to have field with name {@link FunctionParam#This} ('this')
    unless target type is {@link DefaultInstance}. #kwargs is expected to be a JSON object with fields for method
    arguments.
    
    @see #call
    @see #callKwargs
    @see #callJson
    """
        ...
    @classmethod
    def async(cls, action: Callable[[]]=None) -> None:
    """
    Runs the given lambda asynchronously.
    """
        ...
    @classmethod
    def eachParallel(cls, collection: Collection[E], action: Callable[[Union[E]]]) -> None:
    """
    Runs the given lambda in parallel for all of the elements in the given collection.
    """
        ...
    @classmethod
    def pyGlobalMethods(cls) -> Union[Set[str]]:
    """
    This method returns all the methods accessible via the c3 variable. This is used by the Python SDK
    """
        ...

