// TypeScript definitions for the C3 type TestGenHelper

/**
 * Helper type for apps test template generator (tools/testgen)
 *
 * @remarks this represents a value passed to a method that expects an instance of TestGenHelper
 */
declare interface ITestGenHelper {
}

/**
 * Helper type for apps test template generator (tools/testgen)
 *
 * @remarks this represents a made instance of TestGenHelper
 */
declare class TestGenHelper {

  /**
   * Get type names of dot-separated field names.
   * Used for getting each type name of the path field of a metric.
   *
   * @param typeName
   *    name of the parent type
   * @param fields
   *    dot-separated field names
   *
   * @return an array of type names
   */
  static getTypesForFields(typeName?: string | null, fields?: string | null): C3.Array<string | null>;

  /**
   * Get a list of annotations for a given field/function in a type.
   * Used in testgen to classify actions, reducers, epic functions
   *
   * @param typeName
   *    name of the relevant type
   * @param field
   *    the field or function whose annotations are to be return
   *
   * @return an array of type field/function annotations
   */
  static getAnnotationsForField(typeName?: string | null, field?: string | null): any | null;
}

