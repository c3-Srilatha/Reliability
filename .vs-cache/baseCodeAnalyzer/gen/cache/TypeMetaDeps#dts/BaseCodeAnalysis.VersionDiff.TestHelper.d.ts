// TypeScript definitions for the C3 type BaseCodeAnalysis.VersionDiff.TestHelper

/**
 * **TESTING PURPOSES ONLY**
 *
 * This Type contains functions to organize the {@link TypeMeta} generated from any test Types
 * stored in `test/src/helpers/versionDiff/testTypes` into {@link BaseCodeAnalysis.AppInfo}
 * for testing purposes.
 *
 * Most test Types belong to the `baseCodeAnalyzer` package, however some test Types can
 * belong to `baseCodeAnalyzerTest` or `baseCodeAnalyzerIntegTest` to test things like
 * remixes and changes across packages.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.VersionDiff.TestHelper
 */
declare namespace BaseCodeAnalysis.VersionDiff {
  export interface ITestHelper {
  }
}

/**
 * **TESTING PURPOSES ONLY**
 *
 * This Type contains functions to organize the {@link TypeMeta} generated from any test Types
 * stored in `test/src/helpers/versionDiff/testTypes` into {@link BaseCodeAnalysis.AppInfo}
 * for testing purposes.
 *
 * Most test Types belong to the `baseCodeAnalyzer` package, however some test Types can
 * belong to `baseCodeAnalyzerTest` or `baseCodeAnalyzerIntegTest` to test things like
 * remixes and changes across packages.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.TestHelper
 */
declare namespace BaseCodeAnalysis.VersionDiff {
  export class TestHelper {

    /**
     * Helper function to mimic the behavior of `jasmine.objectContaining` and `jasmine.arrayWithExactContents`
     * since these functions provide difficult-to-read error messages.
     *
     * @param actual
     *           The actual object to compare against the expected object.
     * @param expected
     *           The expected object to compare against the actual object.
     * @param context
     *           The label to use in the error message when the actual and expected objects don't match.
     */
    static validateProperties(actual?: any, expected?: any, context?: string = '\'results\''): void;

    /**
     * Helper function to validate that all {@link BaseCodeAnalysis.Metric.Result}s
     * contain no [internal error messages](BaseCodeAnalysis.Metric.Result#internalErrorMessage).
     *
     * @param results
     *           The array of {@link BaseCodeAnalysis.Metric.Result}s to validate.
     */
    static validateNoInternalErrors(results?: any): void;

    /**
     * Helper function to get a list of {@link BaseCodeAnalysis.FileSpec}s for testing.
     *
     * @returns An array of {@link BaseCodeAnalysis.FileSpec}s.
     */
    static getTestFileSpecsForParseDirectives(): Array_Type<BaseCodeAnalysis.FileSpec> | null;

    /**
     * Helper function to get the map of file paths to the array of parsed {@link BaseCodeAnalysis.Metric.Directive}s.
     * This function is useful for testing the functionality of parsing directives from an array of {@link BaseCodeAnalysis.FileSpec}s.
     *
     * @returns A map of file paths to the array of parsed {@link BaseCodeAnalysis.Metric.Directive}s.
     */
    static getExpectedResultForParseDirectives(): Map_Type<string, Array_Type<BaseCodeAnalysis.Metric.Directive>> | null;

    /**
     * Helper function to "rename" a Type or field by appending "_R" to the name.
     *
     * @param name
     *           The original Type, field, method, or method parameter to rename.
     * @return The new Type, field, method, or method parameter name, which is `name` with "_R"
     *         appended to the end.
     */
    static rename(name: string): string;

    /**
     * Helper function to generate a deterministic schema name for a test Type or field.
     *
     * @param name
     *           The Type or field name the schema name should be based on.
     * @return The schema name, which is `name` with all lowercase letters removed.
     */
    static schemaName(name: string): string;

    /**
     * Helper function to generate fake results of {@link BaseCodeAnalyzer#collectAppInfo}
     * and (potentially) {@link BaseCodeAnalysis.VersionDiff#detectStructuralChanges}.
     *
     * @param spec
     *           Configurations for how to generate the test Types and their corresponding
     *           changes for a given test case.
     * @return An object containing the generated `prevAppInfo` and `curAppInfo` along with
     *         any `typeMetaChanges` between the two mocked versions.
     */
    static constructResultsSpec(spec: BaseCodeAnalysis.VersionDiff.TestHelper.TestCaseSpec): BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec;
  }
}

