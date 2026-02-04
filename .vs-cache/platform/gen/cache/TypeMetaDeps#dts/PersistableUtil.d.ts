// TypeScript definitions for the C3 type PersistableUtil

/**
 * Type containing various util/helper function for {@link Persistable} operations.
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableUtil
 */
declare interface IPersistableUtil {
}

/**
 * Type containing various util/helper function for {@link Persistable} operations.
 *
 * @remarks this represents a made instance of PersistableUtil
 */
declare class PersistableUtil {

  /**
   * Merges the view filter, if any, to the filter specified in a {@link FetchSpec} or {@link EvaluateSpec}.
   */
  static mergeViewFilter(type: Type, inputFilter?: string | null): string | null;

  /**
   * Expands the include spec for a query with any fields that any included read calc fields depend on.
   *
   * @param query
   *        Query to expand the include spec for.
   */
  static expandIncludeSpecForReadCalcDepIncludes(query?: any): void;

  /**
   * Expands the input filter with any necessary filtering for authorization.
   *
   * @param type
   *        Type being processed.
   * @param query
   *        Query to expand the filter for.
   * @param authzAction
   *        Action that should be used for authorization.
   * @param forceAcl
   *        True if acl authorization should be forced (e.g. enforced even for sysadmin, etc.).
   *
   * @return False if it was determined up front that the user has no access to anything being requested, true
   *         otherwise.
   */
  static expandFilterForAuthz(type: Type, query?: any, authzAction: string, forceAcl?: boolean): boolean;

  /**
   * @return true if the action is always authorized for the specified type/user.
   */
  static isAlwaysAuthorizedForAction(type: Type, authzAction: string): boolean;

  /**
   * Adds the hidden filter for seed data types for users other than authorizer or provisioner
   *
   * @param type
   *        Type being processed.
   * @param query
   *        the query object to apply the filter to
   * @param fetchHiddenSeedData
   *        True if the request is fetching hidden seedData.
   */
  static expandFilterForSeedData(type: Type, query?: any, fetchHiddenSeedData?: boolean): void;

  /**
   * Constructs requested Stats obj.
   */
  static stats(createdObjCount: number, updatedObjCount: number, removedObjCount: number, failedObjCount: number, objCount: number, time: number, dbWait: number): ActionStats;

  /**
   * @return true if the current context should always skip authz (e.g. root)
   */
  static skipAuthz(): boolean;
}

