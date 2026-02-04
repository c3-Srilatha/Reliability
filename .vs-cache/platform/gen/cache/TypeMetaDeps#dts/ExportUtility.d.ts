// TypeScript definitions for the C3 type ExportUtility

/**
 * @remarks this represents a value passed to a method that expects an instance of ExportUtility
 */
declare interface IExportUtility {
}

/**
 * @remarks this represents a made instance of ExportUtility
 */
declare class ExportUtility {

  /**
   * Kicks off Export Batch job that will recursively crawl through the data model, getting all 'related data'.
   * {@link Persistable#recursiveFetch}.
   */
  static exportRelatedData(rootType: Type, spec: RecursiveFetchSpec, folderName?: string | null, s3bucket?: string | null): Export | null;

  /**
   * Kicks off multiple Import Batch jobs, 1 for relational data and 1 for EACH non relational data typ.
   */
  static importRelatedData(s3path?: string | null): C3.Array<Import | null>;
}

