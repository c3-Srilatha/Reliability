// TypeScript definitions for the C3 type ExportProgress

/**
 * Base type used to report progress from {@link Persistable#exportData}.
 *
 * @see ImportProgress
 *
 * @remarks this represents a value passed to a method that expects an instance of ExportProgress
 */
declare interface IExportProgress {
}

/**
 * Base type used to report progress from {@link Persistable#exportData}.
 *
 * @see ImportProgress
 *
 * @remarks this represents a made instance of ExportProgress
 */
declare class ExportProgress {

  /**
   * Function that will be called by the platform to report progress if {@link ExportDataSpec.progressCallback} is specified.
   *
   * @param progressRef
   *           Reference of instance specified in {@link ExportDataSpec.progressCallback}.
   * @param stats
   *                  Progress stats being reported.
   */
  static reportExportProgress(progressRef?: DeepRef | null, stats?: ActionStats | null): void;
}

