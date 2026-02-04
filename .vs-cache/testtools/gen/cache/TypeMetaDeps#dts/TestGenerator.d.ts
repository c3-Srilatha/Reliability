// TypeScript definitions for the C3 type TestGenerator

/**
 * Utility type for automated generation of jasmine tests
 *
 * @remarks this represents a value passed to a method that expects an instance of TestGenerator
 */
declare interface ITestGenerator {
}

/**
 * Utility type for automated generation of jasmine tests
 *
 * @remarks this represents a made instance of TestGenerator
 */
declare class TestGenerator {

  /**
   * Generate a jasmine it block with title 'title', that tests evaluating 'expression' on 'Obj'
   * at interval 'interval' from 'start' to 'end' and the given 'bindings' will have result.data array = 'result'
   */
  static generateMetricExpectation(title?: string | null, expression?: string | null, type?: string | null, id?: string | null, interval?: string | null, start?: string | null, end?: string | null, result?: C3.Array<number | null>, bindings?: C3.Map<string | null, any>): string | null;

  /**
   * Generate a jasmine describe block with title 'title' and the given expectations
   */
  static generateDescribe(title?: string | null, expectations?: C3.Array<string | null>): string | null;

  /**
   * Generate a test file containing multiple test scenarios.
   *
   *
   * @param testScenarioIds
   *            The ids of the test scenarios saved in the database
   *
   * @return the entire test file text as a string
   */
  static generateTest(testScenarioIds: C3.Array<string | null> | null): string | null;

  /**
   * Generate a test file containing multiple test scenarios and save it to a MetadataFile
   *
   *
   * @param testScenarioIds
   *            The ids of the test scenarios saved in the database
   *
   * @return the saved File instance
   */
  static saveTestToMetadataFile(testScenarioIds: C3.Array<string | null> | null): File | null;

  /**
   * Generate expectation data for a test scenario
   *
   * @param sourceType
   *            The type to be evaluated on
   *
   * @param testScenarioIds
   *            The ids of the test scenarios saved in the database
   *
   * @return the entire test file text as a string
   */
  static generateExpectationData(sourceType: string, expression: string, start: DateTime, end: DateTime, interval: string, childMetricData: C3.Array<any | null> | null): Timeseries<number | null> | null;
}

