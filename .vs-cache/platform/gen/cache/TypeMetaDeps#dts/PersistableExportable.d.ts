// TypeScript definitions for the C3 type PersistableExportable

/**
 * Type containing functions for all persistable export operations
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableExportable
 */
declare interface IPersistableExportable {
}

/**
 * Type containing functions for all persistable export operations
 *
 * @remarks this represents a made instance of PersistableExportable
 */
declare class PersistableExportable {

  /**
   * Exports instances of a C3 type to Cassandra.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return A reference to the Content obj created that contains the exported data and various statistics about the
   *         export.
   */
  static exportData(spec: ExportDataSpec): ExportDataResult | null;

  /**
   * Exports instances of a C3 type to S3 for importing into Redshift.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return Number of objs exported.
   */
  static exportDataForRedShift(spec: RedShiftExportDataSpec): number | null;
}

