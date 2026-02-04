#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Role import Role
from c3.platform.App import App
from c3.platform.AppUrl import AppUrl
from c3.platform.Action import Action
from c3.platform.Expr.Compiled import Expr.Compiled
from c3.platform.ActionAuthorizationInfo import ActionAuthorizationInfo
from c3.platform.ActionAuthorizationSpec import ActionAuthorizationSpec
from c3.platform.ActionRef import ActionRef

# Python definitions for the C3 type Authorizer


class Authorizer(Value):
    """
    @remarks this represents a made instance of Authorizer
    """
    def __init__(self) -> None: ...

    @classmethod
    def authorizeAction(cls, action: Action, failIfNotAuthorized: bool=None) -> bool:
    """
    Check whether the User invoking the given action is authorized to execute it. If failIfNotAuthorized
    is true, the action will throw a NotAuthorized C3RuntimeException if user is not authorized.
    
    @param action
              action to authorize.
    @param failIfNotAuthorized
              If true, will throw exception if not authorized.
    @return true if authorized to execute action, false otherwise.
    """
        ...
    @classmethod
    def authorizePrivileged(cls, action: Action, failIfNotAuthorized: bool=None) -> bool:
    """
    Check whether the given action is authorized as a PrivilegedAction. If failIfNotAuthorized
    is true, the action will throw a NotAuthorized C3RuntimeException if user is not authorized.
    
    @param action
              action to authorize as PrivilegedAction.
    @param failIfNotAuthorized
              If true, will throw exception if not authorized.
    @return true if authorized to execute action, false otherwise.
    """
        ...
    @classmethod
    def dataPermission(cls, action: Action) -> Union[Expr.Compiled[Any, Any]]:
    """
    If there is an {@link DataPermission} for the invoking user to the given action, a c3.platform.expr.ast.ExprNode
    will be returned to be used by the expression engine to evaluate the condition.
    
    @param action
              action to get the dat condition for.
    @return the java ExprNode or null
    """
        ...
    @classmethod
    def computeAuthzByDataPermission(cls, actionKey: str) -> Union[Expr.Compiled[Any, Any]]:
        ...
    @overload
    @classmethod
    def isAuthorized(cls, typename: str, action: str, fromRootAction: bool=None) -> bool:
    """
    Is the current user authorized to execute the given action?
    By default, determines permissions from the context based on the authorization of the parent action.
    
    @param typename
              name of type where action is defined.
    @param action
              name of action to authorize.
    @param fromRootAction
              If true, determines authorization at the root action level, instead of in the current context.
    @return true if authorized to execute action, false otherwise.
    """
        ...
    @overload
    @classmethod
    def isAuthorized(cls, typename: str, action: str, thisArg: Any, *args: Array[Any], fromRootAction: bool=None) -> bool:
    """
    Checks whether the current user is authorized to execute the given action.
    By default, determines permissions from the context based on the authorization of the parent action.
    
    @param typename
              name of type where action is defined.
    @param action
              name of action to authorize.
    @param thisArg
              The object on which the action is being invoked.
    @param args
              The arguments to the action.
    @param fromRootAction
              If true, determines authorization at the root action level, instead of in the current context.
    @return true if authorized to execute action, false otherwise.
    """
        ...
    @overload
    @classmethod
    def actionGroups(cls, typename: str, action: str) -> Union[Array[str]]:
    """
    Get the list of the action groups (as defined using the @action(group annotation) defined for the given
    action.
    
    @param typename
    @param action
              name of the action
    
    @return a list of action groups
    """
        ...
    @overload
    @classmethod
    def actionGroups(cls) -> Union[Array[str]]:
    """
    Get the list of all the action groups (as defined using the @action(group annotation).
    
    @return a list of action groups
    """
        ...
    @classmethod
    def appAuthzToken(cls, app: App, url: AppUrl=None) -> str:
    """
    Generates Authorization Token for current user to connect to remote C3 Application
    If Ctx.isRoot, the roles for the App Token will default to use C3.ClusterAdmin role and IsAsRoot flag set to true.
    
    @param app
            target C3 App instance in this or remote C3 Cluster
    @param url
            optional AppUrl that will be used to connect to target C3 App
    @return valid authorization token or error if token can not be generated
    """
        ...
    @classmethod
    def actionAuthzRoles(cls, spec: ActionAuthorizationSpec) -> Union[Array[str]]:
    """
    Get the list of roles that are authorized to invoke given action.
    
    @param spec
               {@link ActionAuthorizationSpec} to specify the target action with filtering.
    
    @return a list of authorized or empty array otherwise.
    """
        ...
    @classmethod
    def clearLocalCaches(cls) -> None:
    """
    Clear all the authorization caches in this node.
    """
        ...
    @classmethod
    def dumpLocalCaches(cls) -> None:
    """
    Dump all the authorization cache contents in this node.
    """
        ...
    @overload
    @classmethod
    def actionsForActionGroup(cls, actionGroup: str) -> Union[Map[str, Array[ActionRef]]]:
        ...
    @overload
    @classmethod
    def actionsForActionGroup(cls, actionGroup: str, typename: str) -> Union[Array[ActionRef]]:
        ...
    @classmethod
    def actionInfoForActionGroup(cls, actionGroup: str) -> Union[Map[str, Array[ActionAuthorizationInfo]]]:
    """
    Get a map of all types to actions for a given action group
    
    @param actionGroup
              name of action group.
    
    @return map of all types to actions for a particular action group
    """
        ...
    @classmethod
    def typesForActionGroup(cls, actionGroup: str) -> Union[Array[str]]:
    """
    Get a list of all unique types for a given action group
    
    @param actionGroup
              name of action group.
    
    @return list of all unique types for a particular action group
    """
        ...
    @classmethod
    def securityLevel(cls, typeName: str, action: str) -> Union[int]:
    """
    Get the security level of an action. All permissions in Roles with security level (Platform Roles) are looked
    at to find out if the specific action is covered by a security level. All permissions from the role
    {@link includes} this permission or is included by this permission are taken into consideration except for
    permission that applies to all types.
    Note that mixin types will be checked too, E.g. User, UserGroup and Role mixin Member, so if Member.remove() has
    a security level, then User.remove(), UserGroup.remove() and Role.remove() will have at least the same security
    level unless explicitly overridden.
    
    @return the minimum security level that grants permission to the given action or null if not defined.
    """
        ...
    @classmethod
    def rolesPermittedToExecuteCode(cls) -> Union[Array[Role]]:
    """
    @return all {@link Role roles} that can execute source code directly
    """
        ...

