// TypeScript definitions for the C3 type TestDataValidationRules

/**
 * Test type for data validation rules.
 *
 * @remarks this represents a value passed to a method that expects an instance of TestDataValidationRules
 */
declare interface ITestDataValidationRules {
}

/**
 * Test type for data validation rules.
 *
 * @remarks this represents a made instance of TestDataValidationRules
 */
declare class TestDataValidationRules {

  /**
   * Checks if id and name fields match.
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static idMatchesName(args?: Map_Type<string, any>): DataValidationRuleResult | null;

  /**
   * Checks if the {@link TestDataValidationSubject#passFilter} is true.
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static matchPassFilter(args?: Map_Type<string, any>): DataValidationRuleResult | null;

  /**
   * Waits for a couple seconds and returns a dummy result.
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static dummyRuleWithResult(args?: Map_Type<string, any>): Array_Type<DataValidationRuleResult> | null;

  /**
   * Immediately returns nothing.
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static dummyRuleWithoutResult(args?: Map_Type<string, any>): DataValidationRuleResult | null;

  /**
   * Returns a dummy result with the subject as a related entity
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static dummyRuleWithSubjectResult(args?: Map_Type<string, any>): DataValidationRuleResult | null;

  /**
   * Immediately throws an error.
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static throwError(args?: Map_Type<string, any>): DataValidationRuleResult | null;

  /**
   * It is used for testing case when {@DataValidationRuleResult#output} does not match with {@DataValidationRule#possibleOutputs}.
   * @param args
   *     map that contains any value that the function could needs to run the logic, like subjectId.
   */
  static notMatchingPossibleOutputs(args?: Map_Type<string, any>): DataValidationRuleResult | null;
}

