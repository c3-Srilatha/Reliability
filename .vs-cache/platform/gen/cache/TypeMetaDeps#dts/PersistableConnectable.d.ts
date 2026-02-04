// TypeScript definitions for the C3 type PersistableConnectable

/**
 * Manages connections for {@link Persistable} functions.
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableConnectable
 */
declare interface IPersistableConnectable {
}

/**
 * Manages connections for {@link Persistable} functions.
 *
 * @remarks this represents a made instance of PersistableConnectable
 */
declare class PersistableConnectable {

  /**
   * Use to generically call code that requires a db connection.  The connection will be managed by this function.
   *
   * @param type
   *           Type to get the connection for
   * @param readOnly
   *        If true, a read only connection will be returned.  This may be a shared connection if the db supports
   *        shared read only connections.
   * @param useSecondaryDs
   *        If true, and the current type specifies a secondary datastore, then this will return a connection to
   *        that datastore.  Otherwise it will return a connection to the primary datastore for the type.
   * @param stmtTimeoutMs
   *        When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements
   *        on the connection used will be set with this timeout value.  Note that this will apply to all child actions
   *        (synchronous only) that occur as part of the action this is called on.  Also note, that for query
   *        statements, this applies to execution of the query itself and does not apply to total time used to
   *        read/process the entire result set.
   * @param action
   *        Code that will be called and provided with a connection.
   *
   * @return The result of calling the action
   */
  static withConn(type: Type, readOnly?: boolean, useSecondaryDs?: boolean, stmtTimeoutMs?: number | null, action: λFunction<any, any>): any;

  /**
   * Gets a connection for a specified type.  The caller is responsible for releasing the connection.
   * If possible, {@link withConn} should be used instead.
   *
   * @param type
   *           Type to get the connection for
   * @param readOnly
   *        If true, a read only connection will be returned.  This may be a shared connection if the db supports
   *        shared read only connections.
   * @param useSecondaryDs
   *        If true, and the current type specifies a secondary datastore, then this will return a connection to
   *        that datastore.  Otherwise it will return a connection to the primary datastore for the type.
   * @param dontUseParentConn
   *        If true, no attempt will be made to use a connection registered to a parent action.  However, the connection
   *        may still be a shared connection  if `readOnly` is true and the datastore supports shared read connections.
   * @param dontValidateSchema
   *        By default, schema validation will be performed on the type's the first time it is accessed in this JVM.
   *        Set this to true to avoid that check.
   * @param stmtTimeoutMs
   *        When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements
   *        on the connection used will be set with this timeout value.  Note that this will apply to all child actions
   *        (synchronous only) that occur as part of the action this is called on.  Also note, that for query
   *        statements, this applies to execution of the query itself and does not apply to total time used to
   *        read/process the entire result set.
   *
   * @return The requested connection.
   */
  static connection(type: Type, readOnly?: boolean, useSecondaryDs?: boolean, dontUseParentConn?: boolean, dontValidateSchema?: boolean, stmtTimeoutMs?: number | null): PersistableConnection | null;
}


interface λFunction<T, R> {
  (t: T): R
}
