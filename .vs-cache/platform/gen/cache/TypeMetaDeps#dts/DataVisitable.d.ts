// TypeScript definitions for the C3 type DataVisitable

/**
 * Interface for implementing visitor pattern across {@link Data} related types.
 *
 * @see DataVisitor
 *
 * @remarks this represents a value passed to a method that expects an instance of DataVisitable
 */
declare interface IDataVisitable {
}

/**
 * Interface for implementing visitor pattern across {@link Data} related types.
 *
 * @see DataVisitor
 *
 * @remarks this represents a made instance of DataVisitable
 */
declare class DataVisitable {

  /**
   * Visits this {@link DataVisitable} instance using provided {@link DataVisitor}
   *
   * @param visitor
   *        DataVisitor that implements visitation of this DataVisitable instance
   * @param name
   *        parameter or field name of currently visited {@link DataVisitable} instance
   * @param ctx
   *        state that is passed along with visitor
   */
  visit(visitor: Data.Visitor<C> | null, ctx: C | null): C | null;
}

