// TypeScript definitions for the C3 type PersistableImportable

/**
 * Type for persistable import actions
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableImportable
 */
declare interface IPersistableImportable {
}

/**
 * Type for persistable import actions
 *
 * @remarks this represents a made instance of PersistableImportable
 */
declare class PersistableImportable {

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportData(spec?: StartImportDataSpec | null): PushStream<PersistableImportable | null>;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportDataWithStats(spec?: StartImportDataSpec | null): PushStreamWithStats<PersistableImportable | null>;

  /**
   * Imports instances into a C3 type from a file stored in Cassandra.
   *
   * @param spec
   *        Various parameters that control the operation of function.
   * @param async
   *        Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
   *        synchronous)
   * @return various statistics and errors for the import operation.
   */
  static importData(spec: ImportDataSpec, async?: boolean): ImportDataResult | null;
}

