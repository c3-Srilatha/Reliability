// TypeScript definitions for the C3 type BaseCodeAnalysis.TestHelper

/**
 * **TESTING PURPOSES ONLY**
 *
 * Helper functions for running tests in the `baseCodeAnalyzer` package.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.TestHelper
 */
declare namespace BaseCodeAnalysis {
  export interface ITestHelper {
  }
}

/**
 * **TESTING PURPOSES ONLY**
 *
 * Helper functions for running tests in the `baseCodeAnalyzer` package.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.TestHelper
 */
declare namespace BaseCodeAnalysis {
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
  }
}

