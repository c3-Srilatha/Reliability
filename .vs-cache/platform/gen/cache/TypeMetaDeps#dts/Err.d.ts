// TypeScript definitions for the C3 type Err

/**
 * Where all Error sub-types live. For example, {@link Err.InvalidType} is the type of errors with the code
 * "InvalidType".
 *
 * Methods corresponding to all the methods declared on the inner types are available directly on **Err** for
 * convenience in setting up errors. These methods return a native exception, suitable for immediate use:
 *
 * == JavaScript
 * ```js
 * throw Err.invalidValue("mumble");
 * ```
 * == Python
 * ```py
 * raise c3.Err.invalidValue("mumble")
 * ```
 * == ==
 *
 * Note that `Err.invalidValue` (lower-case 'i') is a method, while `Err.InvalidValue` (upper-case 'I') is a type.
 *
 * @see Error
 *
 * @remarks this represents a value passed to a method that expects an instance of Err
 */
declare interface IErr {
}

/**
 * Where all Error sub-types live. For example, {@link Err.InvalidType} is the type of errors with the code
 * "InvalidType".
 *
 * Methods corresponding to all the methods declared on the inner types are available directly on **Err** for
 * convenience in setting up errors. These methods return a native exception, suitable for immediate use:
 *
 * == JavaScript
 * ```js
 * throw Err.invalidValue("mumble");
 * ```
 * == Python
 * ```py
 * raise c3.Err.invalidValue("mumble")
 * ```
 * == ==
 *
 * Note that `Err.invalidValue` (lower-case 'i') is a method, while `Err.InvalidValue` (upper-case 'I') is a type.
 *
 * @see Error
 *
 * @remarks this represents a made instance of Err
 */
declare class Err {

  static tooManyErrors(what: string | null, count: number | null): Err.TooManyErrors;

  /**
   * @return formatted error of this Error type
   */
  static tooManyErrorsFormatted(format: string, ...args: any[]): Err;

  static validationError(message: any): Err.Validation;

  static parsingFailed(baseType: any): Err.Validation;

  static parsingFailed(inputLocation: any, jsonLocation: any): Err.Validation;

  static parsingFailed(ex: any): Err.Validation;

  /**
   * @return formatted error of this Error type
   */
  static validationFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static dbRetryableForUpsertFormatted(format: string, ...args: any[]): Err;

  static duplicateValue(value: any): Err.DuplicateValue;

  static duplicateValue(value: any, for_: string | null): Err.DuplicateValue;

  static duplicateValueDetail(value: any, for_: string | null, detail: string): Err.DuplicateValue;

  static duplicateValueCustom(detail: string): Err.DuplicateValue;

  /**
   * @return formatted error of this Error type
   */
  static duplicateValueFormatted(format: string, ...args: any[]): Err;

  static failedToReadFromVault(path: string | null, error: string | null): Err.Hashicorp;

  static failedToWriteToVault(data: string | null, path: string | null, error: string | null): Err.Hashicorp;

  static failedToDeleteFromVault(path: string | null, error: string | null): Err.Hashicorp;

  static failedToListVault(path: string | null, error: string | null): Err.Hashicorp;

  static failedToBuildVaultConfig(url: string | null, namespace: string | null, error: string | null): Err.Hashicorp;

  static failedToAuthenticateToVault(method: string | null): Err.Hashicorp;

  static missingRequiredFieldForVaultAuth(what: string | null, method: string | null): Err.Hashicorp;

  static failedToReadFileForVaultAuth(path: string | null, error: string | null): Err.Hashicorp;

  static failedToLoginToVault(method: string | null, error: string | null): Err.Hashicorp;

  /**
   * @return formatted error of this Error type
   */
  static hashicorpFormatted(format: string, ...args: any[]): Err;

  static ldapConnectionFailed(): Err.Ldap;

  static ldapTlsMissingTrustStore(): Err.Ldap;

  static ldapUnbindFailed(): Err.Ldap;

  static ldapSearchFailed(): Err.Ldap;

  /**
   * @return formatted error of this Error type
   */
  static ldapFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static deadlockFormatted(format: string, ...args: any[]): Err;

  static invalidType(typeName: string | null): Err.InvalidType;

  static invalidType(typeName: string | null, for_: string | null): Err.InvalidType;

  static invalidType(typeName: string | null, ex: any): Err.InvalidType;

  static invalidType(typeName: string | null, for_: string | null, ex: any): Err.InvalidType;

  /**
   * @return formatted error of this Error type
   */
  static invalidTypeFormatted(format: string, ...args: any[]): Err;

  static unsupportedJavaClass(class_: any, for_: string | null): Err.Unsupported;

  static unsupportedType(type: Type | null, for_: string | null): Err.Unsupported;

  static unsupportedValue(value: any, for_: string): Err.Unsupported;

  static unsupportedValueType(vt: ValueType | null, for_: string | null): Err.Unsupported;

  static unsupportedValueConversion(value: any, to: string): Err.Unsupported;

  static unsupportedOperation(op: string): Err.Unsupported;

  static unsupportedOperation(op: string | null, for_: string): Err.Unsupported;

  static unsupportedFieldValue(value: any, typeName: string | null, fieldName: string | null): Err.Unsupported;

  static unsupportedLanguage(lang: string | null, typeName: string | null, methodName: string | null): Err.Unsupported;

  static unsupportedContentType(contentType: string | null, typeName: string | null, methodName: string | null): Err.Unsupported;

  static unsupportedForActionEngine(what: string, actionEngine: string): Err.Unsupported;

  static unsupportedHeader(header: string, for_: string): Err.Unsupported;

  /**
   * @return formatted error of this Error type
   */
  static unsupportedFormatted(format: string, ...args: any[]): Err;

  static highPrivilegeUserModificationException(userName: string, targetUserId: string): Err.User;

  static highPrivilegeUserGroupAdditionException(userName: string, userGroupId: string): Err.User;

  static systemUserModificationException(userName: string, systemUserId: string): Err.User;

  static testUserNotFound(id: string | null): Err.User;

  static forbiddenAssumeUserSecurityLevel(): Err.User;

  /**
   * @return formatted error of this Error type
   */
  static userFormatted(format: string, ...args: any[]): Err;

  static connectionClosed(why: string | null, statusCode: number | null, description: string | null): Err.Connection;

  static connectionShutdown(why: string | null, statusCode: number | null, description: string | null): Err.Connection;

  static failedConnection(): Err.Connection;

  static failedConnection(connection: any): Err.Connection;

  static requestInterrupted(webSocketId: number | null): Err.Connection;

  /**
   * @return formatted error of this Error type
   */
  static connectionFormatted(format: string, ...args: any[]): Err;

  static versionConflictForRemove(typeName: string, id: string): Err.VersionConflictForRemove;

  /**
   * @return formatted error of this Error type
   */
  static versionConflictForRemoveFormatted(format: string, ...args: any[]): Err;

  static invalidGeometryType(fieldName: string, typeName: string): Err.InvalidGeometryType;

  /**
   * @return formatted error of this Error type
   */
  static invalidGeometryTypeFormatted(format: string, ...args: any[]): Err;

  static invalidCall(target: string): Err.InvalidCall;

  static invalidCall(target: string, reason: string | null): Err.InvalidCall;

  static invalidCall(target: string, ex: any): Err.InvalidCall;

  static invalidCallFromEngineToRequirement(target: string, fromEngine: string, toRequirement: string): Err.InvalidCall;

  /**
   * @return formatted error of this Error type
   */
  static invalidCallFormatted(format: string, ...args: any[]): Err;

  static kvVersionConflictForUpdate(kvstore: string | null, typeName: string | null, dbKey: string | null, cas: any): Err.VersionConflictForUpdate;

  static versionConflictForUpdate(typeName: string, id: string): Err.VersionConflictForUpdate;

  /**
   * @return formatted error of this Error type
   */
  static versionConflictForUpdateFormatted(format: string, ...args: any[]): Err;

  static fileAlreadyExists(url: string): Err.File;

  static concurrentModificationException(url: string, ex: any): Err.File;

  /**
   * @return formatted error of this Error type
   */
  static fileFormatted(format: string, ...args: any[]): Err;

  static oktaGroupConflict(groupId: string | null): Err.Okta;

  static oktaUserConflict(email: string | null): Err.Okta;

  static oktaUnconfigured(reason: string | null): Err.Okta;

  static oktaWaitForUpdateTimeout(operation: string | null): Err.Okta;

  /**
   * @return formatted error of this Error type
   */
  static oktaFormatted(format: string, ...args: any[]): Err;

  static missingField(field: string | null): Err.MissingField;

  static missingField(typeName: string | null, field: string | null): Err.MissingField;

  static missingMethod(method: string | null): Err.MissingField;

  static missingMethod(typeName: string | null, method: string | null): Err.MissingField;

  /**
   * @return formatted error of this Error type
   */
  static missingFieldFormatted(format: string, ...args: any[]): Err;

  static noRouteFound(component: any, target: any, traversed: any): Err.Dispatcher;

  static noModuleForClaim(method: any): Err.Dispatcher;

  static noTypeForClaim(method: any): Err.Dispatcher;

  static serverIsStopping(): Err.Dispatcher;

  static noEngineForAction(action: any): Err.Dispatcher;

  /**
   * @return formatted error of this Error type
   */
  static dispatcherFormatted(format: string, ...args: any[]): Err;

  static inactiveUserGroupException(groupId: string): Err.UserGroup;

  static missingUserGroupRoleException(userGroupId: string): Err.UserGroup;

  static cannotRemoveSecurityLeveledUserGroup(userGroupId: string): Err.UserGroup;

  static highPrivilegeUserGroupModificationException(userName: string, userGroupId: string): Err.UserGroup;

  static invalidIdpGroupMapOnAppException(userGroupId: string, appId: string): Err.UserGroup;

  static invalidIdpGroupFormatException(idpGroup: string): Err.UserGroup;

  static conflictingIdpGroupMappingException(idpGroup: string): Err.UserGroup;

  static duplicateIdpGroupMappingException(config: string, idpGroup: string, existingUserGroup: string): Err.UserGroup;

  /**
   * @return formatted error of this Error type
   */
  static userGroupFormatted(format: string, ...args: any[]): Err;

  static posixError(err: string): Err.Posix;

  static execError(cmd: string, ex?: any): Err.Posix;

  static execErrorMsg(cmd: string, err: string, ex?: any): Err.Posix;

  static execErrorCode(cmd: string, exitCode: number): Err.Posix;

  /**
   * @return formatted error of this Error type
   */
  static posixFormatted(format: string, ...args: any[]): Err;

  static invalidStartingServer(): Err.Vsce;

  static notEnabled(): Err.Vsce;

  /**
   * @return formatted error of this Error type
   */
  static vsceFormatted(format: string, ...args: any[]): Err;

  static missing(thing: string | null): Err.Missing;

  static missing(thing: string | null, name: string | null): Err.Missing;

  static missing(thing: string | null, name: string | null, for_: string | null): Err.Missing;

  /**
   * @return formatted error of this Error type
   */
  static missingFormatted(format: string, ...args: any[]): Err;

  static missingValue(for_: string | null): Err.MissingValue;

  static missingFieldValue(fieldName: string | null): Err.MissingValue;

  static missingFieldValue(typeName: string | null, fieldName: string | null): Err.MissingValue;

  static missingParamValue(typeName: string | null, fieldName: string | null, paramName: string | null): Err.MissingValue;

  static missingInputObject(): Err.MissingValue;

  /**
   * @return formatted error of this Error type
   */
  static missingValueFormatted(format: string, ...args: any[]): Err;

  static uniqueConstraint(field: any, typeName: string, index: any): Err.UniqueConstraint;

  /**
   * @return formatted error of this Error type
   */
  static uniqueConstraintFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static indexNameTooLongFormatted(format: string, ...args: any[]): Err;

  static clientExceptionForCause(ex: any): Err.ClientException;

  /**
   * @return formatted error of this Error type
   */
  static clientExceptionFormatted(format: string, ...args: any[]): Err;

  static noObjWithSuchId(id: string | null, typeName: string | null): Err.Db;

  static datastoreNotAvailable(datastore: string | null): Err.Db;

  static dataConnectionNotAvailable(action: any, datastore: string | null, message: string | null): Err.Db;

  static noSecondaryDatastore(typeName: string | null): Err.Db;

  static c3TenantAlreadyExists(): Err.Db;

  static invalidDatastore(datastore: string | null): Err.Db;

  static redshiftTenantDatastore(datastore: string | null, tenantName: string | null): Err.Db;

  static datastoreInitalizationFailed(datastore: string | null, ex: any): Err.Db;

  static datastoreStartFailed(datastore: string | null, ex: any): Err.Db;

  static noAclToRemoveObj(objName: string | null, typeName: string | null): Err.Db;

  static upsertMultipleInclude(): Err.Db;

  static internalError(err: string | null): Err.Db;

  static backUpFileWriteFailed(message: string | null): Err.Db;

  static timeSliceNotSupportedForExplain(): Err.Db;

  static hierarchyDepthNotSupportedForExplain(): Err.Db;

  static getTimelineRequiresIncludeSpec(): Err.Db;

  static timeseriesPendingUpdateConflict(proposal: any, timeSeriesInterval: any): Err.Db;

  static fkeyArrayFilterOffsetLimitInvalid(expr: string | null): Err.Db;

  static removeAllFailed(id: string | null, typeName: string | null, ex: any): Err.Db;

  static versionNotFound(version: any, typeName: string | null, id: string | null): Err.Db;

  static versionAsOfNotFound(versionAsOf: any, typeName: string | null, id: string | null): Err.Db;

  static unremoveSeedObjNotExist(id: string | null, typeName: string | null): Err.Db;

  static fetchParametricType(typeName: string | null): Err.Db;

  static projectUniqueMustOnMapTypes(expr: any): Err.Db;

  static dbLockTimeout(dbkey: string | null, reason: string | null): Err.Db;

  static makeGenericType(typeName: string | null): Err.Db;

  static objectAlreadyExists(objName: string | null): Err.Db;

  static invalidFieldTypeRecursion(typeName: string | null, fieldName: string | null): Err.Db;

  static secretTimeout(db: string | null, resourceName: string | null): Err.Db;

  static invalidIndexDef(typeName: string | null, indexDef: string | null, fieldPath: string | null): Err.Db;

  static invalidIndexDefWithReason(typeName: string | null, indexDef: string | null, fieldPath: string | null, message: string | null): Err.Db;

  static invalidUniqueConstraintDef(typeName: string | null, constraintDef: string | null, fieldPath: string | null): Err.Db;

  static persistableFieldCycle(cycleType: string | null, rootTypeName: string | null, fieldPath: string | null): Err.Db;

  static unsupportedKeyPartType(valueType: string | null, fieldName: string | null): Err.Db;

  /**
   * @return formatted error of this Error type
   */
  static dbFormatted(format: string, ...args: any[]): Err;

  static indexFilterSql(tableName: string, sql: string, message: string): Err.IndexFilter;

  static indexFilterExpr(typeName: string, filter: string, message: string): Err.IndexFilter;

  /**
   * @return formatted error of this Error type
   */
  static indexFilterFormatted(format: string, ...args: any[]): Err;

  static tooManyRequests(reqMethod: string): Err.TooManyRequests;

  /**
   * @return formatted error of this Error type
   */
  static tooManyRequestsFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static dbRetryableForMergeFormatted(format: string, ...args: any[]): Err;

  static noMatch(): Err.NoMatch;

  static noMatch(src: any, target: any): Err.NoMatch;

  static noMatch(srcName: string, src: any, targetName: string, target: any): Err.NoMatch;

  /**
   * @return formatted error of this Error type
   */
  static noMatchFormatted(format: string, ...args: any[]): Err;

  static indexCreation(typeName: string, message?: string | null): Err.IndexCreation;

  /**
   * @return formatted error of this Error type
   */
  static indexCreationFormatted(format: string, ...args: any[]): Err;

  static appNotInTestDevMode(): Err.App;

  static invalidApp(appName: string | null): Err.App;

  static userNotAuthorizedToModifyApp(user: string, appName: string): Err.App;

  /**
   * @return formatted error of this Error type
   */
  static appFormatted(format: string, ...args: any[]): Err;

  static duplicateIdForCreate(id: string, typeName: string): Err.DuplicateIdForCreate;

  /**
   * @return formatted error of this Error type
   */
  static duplicateIdForCreateFormatted(format: string, ...args: any[]): Err;

  static exceeded(limit: string): Err.Limit;

  /**
   * @return formatted error of this Error type
   */
  static limitFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static txnAbortedFormatted(format: string, ...args: any[]): Err;

  static interrupted(): Err.Interrupted;

  /**
   * @return formatted error of this Error type
   */
  static interruptedFormatted(format: string, ...args: any[]): Err;

  static connectionError(cause?: string | null): Err.Infra;

  static podEvicted(cause?: string | null): Err.Infra;

  static failure(cause?: string | null): Err.Infra;

  /**
   * @return formatted error of this Error type
   */
  static infraFormatted(format: string, ...args: any[]): Err;

  static notAuthorizedException(user: string, app: string, action: Action): Err.Authz;

  static notAuthorizedException(user: string, app: string, action: string): Err.Authz;

  static dataPermissionException(user: any, action: any, expr: any, roles: any): Err.Authz;

  static cannotAssumeHigherRole(roles?: C3.Array<string | null> | null): Err.Authz;

  static userLockedOut(user: any): Err.Authz;

  static basicAuthNotSetException(user: any): Err.Authz;

  static securityLevelViolation(user: any): Err.Authz;

  static notImpersonating(user: any, env: any): Err.Authz;

  static alreadyImpersonating(impersonator: any, impersonatee: any, env: any): Err.Authz;

  static oauthBadRequest(): Err.Authz;

  static oauthUnauthorizedClient(): Err.Authz;

  static oauthInvalidGrant(): Err.Authz;

  static oauthInvalidScope(): Err.Authz;

  static oauthInvalidRequest(message: string): Err.Authz;

  static oauthInvalidToken(message: string): Err.Authz;

  /**
   * @return formatted error of this Error type
   */
  static authzFormatted(format: string, ...args: any[]): Err;

  static timeout(): Err.Timeout;

  static timeout(time: any): Err.Timeout;

  static socketTimeout(webSocketId: number | null): Err.Timeout;

  /**
   * @return formatted error of this Error type
   */
  static timeoutFormatted(format: string, ...args: any[]): Err;

  static notImplemented(): Err.NotImplemented;

  static notImplemented(typeName: string, method: string): Err.NotImplemented;

  /**
   * @return formatted error of this Error type
   */
  static notImplementedFormatted(format: string, ...args: any[]): Err;

  static overflow(message: string): Err.Overflow;

  static indexNameTooLong(indexName: string, tableName: string, typeName: string, maxIndexNameLen: number): Err.Overflow;

  static mapIndexNameTooLong(indexName: string, tableName: string, typeName: string, maxIndexNameLen: number): Err.Overflow;

  /**
   * @return formatted error of this Error type
   */
  static overflowFormatted(format: string, ...args: any[]): Err;

  static zException(message: any): Err.Zookeeper;

  static zookeeperSessionExpired(): Err.Zookeeper;

  /**
   * @return formatted error of this Error type
   */
  static zookeeperFormatted(format: string, ...args: any[]): Err;

  static isNot(name: string, what: string): Err.IsNot;

  static isNot(what: string, expected: any, actual: any): Err.IsNot;

  /**
   * @return formatted error of this Error type
   */
  static isNotFormatted(format: string, ...args: any[]): Err;

  static invalidPasswordFormat(): Err.Authn;

  static groupNotFound(groupId: string | null): Err.Authn;

  static unauthenticated(): Err.Authn;

  static invalidEnvApp(requestUrl: string | null): Err.Authn;

  static invalidSamlPayload(): Err.Authn;

  static userNotFound(): Err.Authn;

  static userNotFound(id: string | null): Err.Authn;

  static invalidLoginRequest(message: string | null): Err.Authn;

  static expired(for_: string | null): Err.Authn;

  static notJwtToken(): Err.Authn;

  static invalidSessionSequence(): Err.Authn;

  /**
   * @return formatted error of this Error type
   */
  static authnFormatted(format: string, ...args: any[]): Err;

  static httpStatus(statusCode: number, reasonPhrase?: string | null): Err.Http;

  static httpStatusMsg(statusCode: number, reasonPhrase: string | null, msg: string): Err.Http;

  static multipleHeaders(header: string): Err.Http;

  static accountDoesNotExist(): Err.Http;

  static envAppMismatch(): Err.Http;

  static httpInternalServerError(): Err.Http;

  static httpNotImplemented(): Err.Http;

  static httpBadGateway(): Err.Http;

  static httpServiceUnavailable(): Err.Http;

  static httpGatewayTimeout(): Err.Http;

  static httpInsufficientStorage(): Err.Http;

  static objectNotFound(): Err.Http;

  static invalidInputParam(): Err.Http;

  static invalidInputValue(): Err.Http;

  static noSuchAnnotation(): Err.Http;

  static invalidReference(): Err.Http;

  static invalidReturn(): Err.Http;

  static invalidTextFormat(): Err.Http;

  static badRequest(): Err.Http;

  static preconditionFailed(): Err.Http;

  static unsupportedMediaType(): Err.Http;

  static badField(): Err.Http;

  static invalidCanonicalData(): Err.Http;

  static badActionForTarget(): Err.Http;

  static badTypeForTarget(): Err.Http;

  static badEnvAppForTarget(env: string, app: string): Err.Http;

  static invalidContentType(): Err.Http;

  static provisionInProgress(): Err.Http;

  static invalidTunnelTimeout(): Err.Http;

  static missingHttpHeader(name: string | null): Err.Http;

  static multipleHttpHeader(name: string | null): Err.Http;

  /**
   * @return formatted error of this Error type
   */
  static httpFormatted(format: string, ...args: any[]): Err;

  static jobRecoverFailing(jobType: string, jobId: string): Err.JobRecoverFailing;

  /**
   * @return formatted error of this Error type
   */
  static jobRecoverFailingFormatted(format: string, ...args: any[]): Err;

  static httpStorage(): Err.Insufficient;

  static reservedInstanceCapacity(): Err.Insufficient;

  static instanceCapacity(): Err.Insufficient;

  /**
   * @return formatted error of this Error type
   */
  static insufficientFormatted(format: string, ...args: any[]): Err;

  static wrap(ex: any): Err.JavaException;

  static wrap(message: string | null, ex: any): Err.JavaException;

  static wrap(...ex: any[]): Err.JavaException;

  static wrapFormatted(message: string, ex: any): Err.JavaException;

  /**
   * @return formatted error of this Error type
   */
  static javaExceptionFormatted(format: string, ...args: any[]): Err;

  static invalidSerString(str: string | null, what: string | null): Err.InvalidSer;

  static invalidSerJson(json: string | null, what: string | null): Err.InvalidSer;

  static invalidSerXml(xml: string | null, what: string | null): Err.InvalidSer;

  /**
   * @return formatted error of this Error type
   */
  static invalidSerFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static versionConflictFormatted(format: string, ...args: any[]): Err;

  static threadInThreadPool(threadPoolName: string, actionName: string): Err.Unavailable;

  static threadInThreadPoolAfterTimeout(threadPoolName: string, actionType: string, actionName: string, timeout: string): Err.Unavailable;

  /**
   * @return formatted error of this Error type
   */
  static unavailableFormatted(format: string, ...args: any[]): Err;

  static sqlRecoverable(message: string): Err.DbRetryable;

  static resultSetDoesntExist(message: string): Err.DbRetryable;

  static connectionReset(): Err.DbRetryable;

  /**
   * @return formatted error of this Error type
   */
  static dbRetryableFormatted(format: string, ...args: any[]): Err;

  static script(message: string): Err.Script;

  static script(ex: any): Err.Script;

  static script(message: string, ex: any): Err.Script;

  /**
   * @return formatted error of this Error type
   */
  static scriptFormatted(format: string, ...args: any[]): Err;

  static missingK8s(thing: string | null): Err.MissingK8s;

  static missingK8s(thing: string | null, name: string | null): Err.MissingK8s;

  static missingK8s(thing: string | null, name: string | null, for_: string | null): Err.MissingK8s;

  /**
   * @return formatted error of this Error type
   */
  static missingK8sFormatted(format: string, ...args: any[]): Err;

  static invalidObj(errs: C3.Map<string | null, C3.Error | null>): Err.InvalidValue;

  static invalidValue(value: any): Err.InvalidValue;

  static invalidValue(value: any, for_: string | null): Err.InvalidValue;

  static invalidValue(value: any, for_: string | null, ex: any): Err.InvalidValue;

  static invalidValueDetail(value: any, for_: string | null, detail: string): Err.InvalidValue;

  static invalidFieldValue(value: any, typeName: string | null, fieldName: string | null): Err.InvalidValue;

  static invalidFieldValue(value: any, typeName: string | null, fieldName: string | null, detail: string): Err.InvalidValue;

  static invalidValueCustom(detail: string): Err.InvalidValue;

  static invalidContent(detail: string): Err.InvalidValue;

  /**
   * @return formatted error of this Error type
   */
  static invalidValueFormatted(format: string, ...args: any[]): Err;

  /**
   * @return formatted error of this Error type
   */
  static formatted(format: string, ...args: any[]): Err;
}

