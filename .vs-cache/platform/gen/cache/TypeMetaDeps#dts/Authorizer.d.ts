// TypeScript definitions for the C3 type Authorizer

/**
 * @remarks this represents a value passed to a method that expects an instance of Authorizer
 */
declare interface IAuthorizer {
}

/**
 * @remarks this represents a made instance of Authorizer
 */
declare class Authorizer {

  /**
   * Check whether the User invoking the given action is authorized to execute it. If failIfNotAuthorized
   * is true, the action will throw a NotAuthorized C3RuntimeException if user is not authorized.
   *
   * @param action
   *           action to authorize.
   * @param failIfNotAuthorized
   *           If true, will throw exception if not authorized.
   * @return true if authorized to execute action, false otherwise.
   */
  static authorizeAction(action: Action, failIfNotAuthorized?: boolean): boolean;

  /**
   * Check whether the given action is authorized as a PrivilegedAction. If failIfNotAuthorized
   * is true, the action will throw a NotAuthorized C3RuntimeException if user is not authorized.
   *
   * @param action
   *           action to authorize as PrivilegedAction.
   * @param failIfNotAuthorized
   *           If true, will throw exception if not authorized.
   * @return true if authorized to execute action, false otherwise.
   */
  static authorizePrivileged(action: Action, failIfNotAuthorized?: boolean): boolean;

  /**
   * If there is an {@link DataPermission} for the invoking user to the given action, a c3.platform.expr.ast.ExprNode
   * will be returned to be used by the expression engine to evaluate the condition.
   *
   * @param action
   *           action to get the dat condition for.
   * @return the java ExprNode or null
   */
  static dataPermission(action: Action): Expr.Compiled<any, any> | null;

  static computeAuthzByDataPermission(actionKey: string): Expr.Compiled<any, any> | null;

  /**
   * Is the current user authorized to execute the given action?
   * By default, determines permissions from the context based on the authorization of the parent action.
   *
   * @param typename
   *           name of type where action is defined.
   * @param action
   *           name of action to authorize.
   * @param fromRootAction
   *           If true, determines authorization at the root action level, instead of in the current context.
   * @return true if authorized to execute action, false otherwise.
   */
  static isAuthorized(typename: string, action: string, fromRootAction?: boolean): boolean;

  /**
   * Checks whether the current user is authorized to execute the given action.
   * By default, determines permissions from the context based on the authorization of the parent action.
   *
   * @param typename
   *           name of type where action is defined.
   * @param action
   *           name of action to authorize.
   * @param thisArg
   *           The object on which the action is being invoked.
   * @param args
   *           The arguments to the action.
   * @param fromRootAction
   *           If true, determines authorization at the root action level, instead of in the current context.
   * @return true if authorized to execute action, false otherwise.
   */
  static isAuthorized(typename: string, action: string, thisArg: any, fromRootAction?: boolean, ...args: any[]): boolean;

  /**
   * Get the list of the action groups (as defined using the @action(group annotation) defined for the given
   * action.
   *
   * @param typename
   * @param action
   *           name of the action
   *
   * @return a list of action groups
   */
  static actionGroups(typename: string, action: string): C3.Array<string | null>;

  /**
   * Get the list of all the action groups (as defined using the @action(group annotation).
   *
   * @return a list of action groups
   */
  static actionGroups(): C3.Array<string | null>;

  /**
   * Generates Authorization Token for current user to connect to remote C3 Application
   * If Ctx.isRoot, the roles for the App Token will default to use C3.ClusterAdmin role and IsAsRoot flag set to true.
   *
   * @param app
   *         target C3 App instance in this or remote C3 Cluster
   * @param url
   *         optional AppUrl that will be used to connect to target C3 App
   * @return valid authorization token or error if token can not be generated
   */
  static appAuthzToken(app: App, url?: AppUrl | null): string;

  /**
   * Get the list of roles that are authorized to invoke given action.
   *
   * @param spec
   *            {@link ActionAuthorizationSpec} to specify the target action with filtering.
   *
   * @return a list of authorized or empty array otherwise.
   */
  static actionAuthzRoles(spec: ActionAuthorizationSpec): C3.Array<string | null>;

  /**
   * Clear all the authorization caches in this node.
   */
  static clearLocalCaches(): void;

  /**
   * Dump all the authorization cache contents in this node.
   */
  static dumpLocalCaches(): void;

  static actionsForActionGroup(actionGroup: string): C3.Map<string | null, C3.Array<ActionRef | null>>;

  static actionsForActionGroup(actionGroup: string, typename: string): C3.Array<ActionRef | null>;

  /**
   * Get a map of all types to actions for a given action group
   *
   * @param actionGroup
   *           name of action group.
   *
   * @return map of all types to actions for a particular action group
   */
  static actionInfoForActionGroup(actionGroup: string): C3.Map<string | null, C3.Array<ActionAuthorizationInfo | null>>;

  /**
   * Get a list of all unique types for a given action group
   *
   * @param actionGroup
   *           name of action group.
   *
   * @return list of all unique types for a particular action group
   */
  static typesForActionGroup(actionGroup: string): C3.Array<string | null>;

  /**
   * Get the security level of an action. All permissions in Roles with security level (Platform Roles) are looked
   * at to find out if the specific action is covered by a security level. All permissions from the role
   * {@link includes} this permission or is included by this permission are taken into consideration except for
   * permission that applies to all types.
   * Note that mixin types will be checked too, E.g. User, UserGroup and Role mixin Member, so if Member.remove() has
   * a security level, then User.remove(), UserGroup.remove() and Role.remove() will have at least the same security
   * level unless explicitly overridden.
   *
   * @return the minimum security level that grants permission to the given action or null if not defined.
   */
  static securityLevel(typeName: string, action: string): number | null;

  /**
   * @return all {@link Role roles} that can execute source code directly
   */
  static rolesPermittedToExecuteCode(): C3.Array<Role | null>;
}

