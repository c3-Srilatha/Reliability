// TypeScript definitions for the C3 type ImportProgress

/**
 * Base type used to report progress from {@link Persistable#importData}.
 *
 * Example:
 *
 * entity type
 * 	TestProgress mixin ImportProgress {
 *     objCount : int
 *
 *     @js(env="server")
 *     reportImportProgress : ~ {@testCode@}
 *  }
 *
 * testCode: {|
 *   function reportImportProgress(progressRef, stats) {
 *     obj = TestProgress.get(TestProgress.make({id:progressRef.id}));
 *     obj = obj.putField("objCount", stats.objCount);
 *     TestProgress.update(obj);
 *   }
 * |}
 *
 * Exceptions thrown by callback will be ignored and logged.
 *
 * @remarks this represents a value passed to a method that expects an instance of ImportProgress
 */
declare interface IImportProgress {
}

/**
 * Base type used to report progress from {@link Persistable#importData}.
 *
 * Example:
 *
 * entity type
 * 	TestProgress mixin ImportProgress {
 *     objCount : int
 *
 *     @js(env="server")
 *     reportImportProgress : ~ {@testCode@}
 *  }
 *
 * testCode: {|
 *   function reportImportProgress(progressRef, stats) {
 *     obj = TestProgress.get(TestProgress.make({id:progressRef.id}));
 *     obj = obj.putField("objCount", stats.objCount);
 *     TestProgress.update(obj);
 *   }
 * |}
 *
 * Exceptions thrown by callback will be ignored and logged.
 *
 * @remarks this represents a made instance of ImportProgress
 */
declare class ImportProgress {

  /**
   * Function that will be called by the platform to report progress if {@link ImportDataSpec.progressCallback} is specified.
   *
   * @param progressRef
   *           Reference of instance specified in {@link ImportDataSpec.progressCallback}.
   * @param stats
   *                  Progress stats being reported.
   */
  static reportImportProgress(progressRef?: DeepRef | null, stats?: ActionStats | null): void;
}

