#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type ExecutionEnvironment


class ExecutionEnvironment(WithType, Value):
    """
    Instances of this type can apply lambda or execute the job in the corresponding context that instance of this type
    represents. Execution context can be a Cluster, Server Node, Tenant and Tag.
    
    @see TagAware
    @see TenantAware
    @see TenantTagAware
    @see ServerNodeAware
    @see ClusterAware
    @see Cluster
    
    @remarks this represents a made instance of ExecutionEnvironment
    """
    def __init__(self) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> ExecutionEnvironment:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    def apply(self, action: Callable[[], Union[Any]], authToken: str=None) -> Union[Any]:
    """
    Apply provided lambda in the context of this instance.
    """
        ...
    def targetCluster(self) -> Union[str]:
    """
    @return execution target cluster root URL; i.e. `ClusterAware#cluster` if provided or `null` otherwise.
    """
        ...
    def targetServerNodeId(self) -> Union[str]:
    """
    @return execution target server node id; i.e. `ServerNodeAware#serverNodeId` if provided or `null` otherwise.
    """
        ...
    def targetServerIpAddress(self) -> Union[str]:
    """
    @return execution target server node ip address; i.e. `ServerNodeAware#serverIpAddress` if provided or `null`
            otherwise.
    """
        ...
    def targetServerHttpPort(self) -> Union[int]:
    """
    @return execution target server node http port; i.e. `ServerNodeAware#httpPort` if provided or `null` otherwise.
    """
        ...
    def targetTenant(self) -> Union[str]:
    """
    @return execution target tenant id; i.e. `TenantAware#tenant` if provided otherwise if `ClusterAware#cluster` is
            not set then current tenant. However if `ClusterAware#cluster` is set and `TenantAware#tenant` is not then
            target cluster assumed to be single tenant and this method will return `null`.
    """
        ...
    def targetTag(self) -> Union[str]:
    """
    @return execution target tag id; i.e. `TagAware#tag` if provided otherwise `c3` if sub type is also `TenantAware`
            and it's `TenantAware#tenant` is set. In all other cases will return `null`.
    """
        ...
    def isClusterAware(self) -> bool:
    """
    @return `true` if target as cluster i.e. any node in that cluster.
    """
        ...
    def isServerNodeAware(self) -> bool:
    """
    @return `true` if target as a specific server node.
    """
        ...
    def isTenantAware(self) -> bool:
    """
    @return `true` if this execution environment has a specific target tenant.
    """
        ...
    def isTagAware(self) -> bool:
    """
    @return `true` if this execution environment has a specific target tag.
    """
        ...
    def endpoint(self, kind: str=None) -> str:
    """
    @return end-point URL for this execution environment for given kind. Defaults to API.
    """
        ...

