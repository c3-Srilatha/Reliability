// TypeScript definitions for the C3 type BaseCanonicalTester

/**
 * A Type that tests canonicals using the Jasmine framework.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCanonicalTester
 */
declare interface IBaseCanonicalTester {
}

/**
 * A Type that tests canonicals using the Jasmine framework.
 *
 * @remarks this represents a made instance of BaseCanonicalTester
 */
declare class BaseCanonicalTester {

  /**
   * A function that runs canonical tests according to the given spec.
   *
   * @param spec
   *           The spec that describes the canonical tests to run.
   */
  static runCanonicalTests(spec?: BaseCanonicalTester.Spec): void;

  /**
   * A function that builds the jasmine tree for the given spec and result obtained from running the tests.
   *
   * @param spec
   *           The spec that describes the canonical tests to run.
   * @param results
   *           The result obtained from running the canonical tests.
   */
  static buildJasmineTree(spec?: BaseCanonicalTester.Spec, results?: Array_Type<BaseCanonicalTesterResults>): void;

  /**
   * A function that returns all the canonical types in the current package.
   *
   * @param dependencyCanonicals
   *           The canonicals in the dependency package you wish to return.
   * @return
   *           All the canonical types in the current package.
   */
  static allPkgCanonicals(dependencyCanonicals?: Array_Type<Type>): Array_Type<Type> | null;

  /**
   * A function that returns all the source types in the current package.
   *
   * @param dependencySources
   *           The sources in the dependency package you wish to return.
   * @return
   *           All the source types in the current package.
   */
  static allPkgSources(dependencySources?: Array_Type<Type>): Array_Type<Type> | null;

  /**
   * A function that returns all the _immediate_ target Types for the given {@link Canonical}
   * or {@link Source}.
   *
   * **NOTE:** In a {@link Source} → {@link Canonical} → target pipeline, this function only
   *           returns the targets of the _first layer_ of {@link Transform}s for the {@link Source}
   *           or {@link Canonical}. For example:
   *
   * ```
   *                            ┌── Target1
   *           ┌── Canonical1 ──┤
   *           │                └── Target2
   * Source1 ──┤
   *           │                ┌── Target3
   *           └── Canonical2 ──┤
   *                            └── Target4
   * ```
   *
   * ```javascript
   * BaseCanonicalTester.targetTypes(Source1);
   * // Returns [Canonical1, Canonical2]
   *
   * BaseCanonicalTester.targetTypes(Canonical1);
   * // Returns [Target1, Target2]
   *
   * BaseCanonicalTester.targetTypes(Canonical2);
   * // Returns [Target3, Target4]
   * ```
   *
   * @param canonicalOrSource
   *           The {@link Canonical} or {@link Source} for which to return the target Types.
   * @return All the target Types for the given {@link Canonical} or {@link Source}.
   */
  static targetTypes(canonicalOrSource?: Type): Array_Type<Type> | null;

  /**
   * A helper function that generates jasmine it blocks for the given row results.
   *
   * @param rowResults
   *           The row results for which to generate the it blocks.
   * @param rowIndex
   *           The index of the row for which to generate the it blocks.
   */
  static generateItBlocks(rowResults?: any, rowIndex?: number): void;

  /**
   * Test all canonical types defined in package test/canonical folder.
   * Throws descriptive errors for all failed canonical tests results.
   * Upserts the results into BaseCanonicalTesterResults.
   *
   * @param spec
   *           The spec that describes the canonical tests to run.
   * @return
   *           The test results for all canonical types.
   */
  static testAllCanonicals(spec?: BaseCanonicalTester.Spec): Array_Type<BaseCanonicalTesterResults> | null;

  /**
   * Generate test results for the given canonicalType.
   *
   * @param canonicalType
   *           The canonical type for which to generate the test results.
   * @param spec
   *           The spec that describes the source type configurations for the canonical.
   * @return
   *           The test results for the given canonicalType.
   */
  static generateCanonicalTestResults(canonicalType: Type, spec?: BaseCanonicalTester.CanonicalTypeSpec): Array_Type<BaseCanonicalTesterResults> | null;

  /**
   * Test all canonical types defined in package test/source folder.
   * Throws descriptive errors for all failed source tests results.
   * Upserts the results into BaseCanonicalTesterResults.
   *
   * @param spec
   *           The spec that describes the source tests to run.
   * @return
   *           The test results for all source types.
   */
  static testAllSources(spec?: BaseCanonicalTester.Spec): Array_Type<BaseCanonicalTesterResults> | null;

  /**
   * A helper method that returns whether the given type is a source or canonical type. Returns null if neither.
   *
   * @param type
   *           The type for which to check whether it is a source or canonical type.
   * @return
   *           Whether the given type is a source or canonical type. Returns null if neither.
   */
  static isTypeSourceOrCanonical(type: Type): string | null;

  /**
   * Generate test results for the given sourceType.
   *
   * @param sourceType
   *           The source type for which to generate the test results.
   * @param spec
   *           The spec that describes the source type configurations for the source.
   * @return
   *           The test results for the given sourceType.
   */
  static generateSourceTestResults(sourceType: Type, spec?: BaseCanonicalTester.SourceTypeSpec): Array_Type<BaseCanonicalTesterResults> | null;

  /**
   * Loads canonical test data for given canonicalType.
   * @param canonicalType
   *
   *           The canonical type for which to load the test data.
   * @return
   *           The return result for the canonical.
   */
  static processAndLoadCanonical(canonicalType: Type): SourceImportDataResult | null;

  /**
   * Fetches loaded canonical target type data, returning `map<string: Type.name(), [Type]>`.
   *
   * *Will return all data for transformed types persisted with meta.timestamp >= timestamp*
   * *For target types mixing {@link Partitionable}, will fetch based on the parent field if the parent is part of the transform.*
   * *This mainly applies to cassandra types such as {@link TimedDataPoint} which fetches off of {@link TimedDataHeader}*
   *
   * @param timestamp
   *           The timestamp to fetch the loaded canonical data.
   * @param canonicalType
   *           The canonical type for which to fetch the loaded data.
   * @param spec
   *          The spec that describes the source type configurations for the canonical.
   * @return
   *           The loaded canonical data.
   */
  static fetchLoadedCanonicalData(timestamp: DateTime, canonicalType: Type, spec?: BaseCanonicalTester.CanonicalTypeSpec): Array_Type<BaseCanonicalTesterResults.FetchResults> | null;

  /**
   * Removes loaded canonical data which was persisted.
   * Takes an input from {@link #fetchLoadedCanonicalData} to target the specific ids loaded.
   *
   * @param loadedData
   *           The loaded data to remove.
   * @return
   *           The number objects removed.
   */
  static removeLoadedCanonicalData(loadedData: Array_Type<BaseCanonicalTesterResults.FetchResults>): Map_Type<string, number> | null;

  /**
   * Helper function to return all canonical types currently in canonical test dir.
   *
   * @param configValue
   *           The config value to use for the type test directory.
   * @return
   *           All the canonical types in the current package.
   */
  static getAllTestTypes(configValue?: string, typeKind?: string): Array_Type<Type> | null;

  /**
   * Helper function to return the directory for a canonical type.
   *
   * @param canonicalOrSourceType
   *           The canonical or source type for which to return the directory.
   * @return
   *           The directory for the given canonical type.
   */
  static getTestDirPath(canonicalOrSourceType: Type): string | null;

  /**
   * Helper function to to safely load, fetch, and remove test data
   *
   * @param canonicalType
   *           The canonical type for which to load, fetch, and remove data.
   * @param spec
   *           The spec that describes the source type configurations for the canonical.
   * @return
   *           The details for the loaded, fetched, and removed results.
   */
  static safeLoadAndRemoveTestData(canonicalType: Type, spec?: BaseCanonicalTester.CanonicalTypeSpec): Map_Type<string, any> | null;

  /**
   * Helper function to validate the canonical directory path.
   *
   * @param testPath
   *           the folder path used for verification.
   * @param isSubPath
   *           whether the path is a subpath of the canonical test dir.
   * @return
   *           A correctly structured folder path.
   */
  static validPath(testPath: string, isSubPath?: boolean): string | null;

  /**
   * Helper function for loading test files into objs.
   *
   * @param canonicalType
   *           The canonical or source type for which to load the files.
   * @return
   *           The loaded files for the given canonical our type.
   */
  static loadFilesForCanonicalOrSource(canonicalOrSourceType: Type): Map_Type<string, Array_Type<any> | Map_Type<string, Array_Type<any>>> | null;
}

