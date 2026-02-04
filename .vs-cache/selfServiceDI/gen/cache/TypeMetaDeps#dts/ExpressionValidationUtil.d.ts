// TypeScript definitions for the C3 type ExpressionValidationUtil

/**
 * Utility functions for parsing and validating expressions
 *
 * @remarks this represents a value passed to a method that expects an instance of ExpressionValidationUtil
 */
declare interface IExpressionValidationUtil {
}

/**
 * Utility functions for parsing and validating expressions
 *
 * @remarks this represents a made instance of ExpressionValidationUtil
 */
declare class ExpressionValidationUtil {

  /**
   * Validates an expression for syntactic and semantic validity
   * using expressionFunctions and sourceFields
   * as the source of truth for function and field existence.
   * @param expression
   *          The expression string to validate
   * @param expressionFunctions
   *          Expression functions for semantic validity
   * @param sourceFields
   *          Source fields for semantic validity
   * @returns true if the expression is valid, false otherwise
   */
  static validateExpression(expression?: string | null, expressionFunctions?: C3.Array<ExpressionFunctionInfo | null>, sourceFields?: C3.Array<FieldType | null>): boolean;

  /**
   * Attempts to parse an expression as an Abstract Syntax Tree and returns
   * a node with a start of the index
   * @param expression
   *          The expression to parse
   * @param index
   *          The index of the start location of the node to find
   * @returns a node with the start location of index
   */
  static getNodeWithStartLocationFromExpression(expression?: string | null, index?: number | null): any;
}

