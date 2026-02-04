// TypeScript definitions for the C3 type Importable

/**
 * Base type for supporting import of data.
 *
 * @see Persistable
 *
 * @remarks this represents a value passed to a method that expects an instance of Importable
 */
declare interface IImportable {
}

/**
 * Base type for supporting import of data.
 *
 * @see Persistable
 *
 * @remarks this represents a made instance of Importable
 */
declare class Importable {

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportData(spec?: StartImportDataSpec | null): PushStream<Importable | null>;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportDataWithStats(spec?: StartImportDataSpec | null): PushStreamWithStats<Importable | null>;

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

