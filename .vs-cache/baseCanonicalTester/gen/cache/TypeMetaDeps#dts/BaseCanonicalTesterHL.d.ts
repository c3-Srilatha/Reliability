// TypeScript definitions for the C3 type BaseCanonicalTesterHL

/**
 * Generic helper functions used for {@link BaseCanonicalTester}.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCanonicalTesterHL
 */
declare interface IBaseCanonicalTesterHL {
}

/**
 * Generic helper functions used for {@link BaseCanonicalTester}.
 *
 * @remarks this represents a made instance of BaseCanonicalTesterHL
 */
declare class BaseCanonicalTesterHL {

  /**
   * Get all relevant fields from the provided objects.
   * - Objects must be all be of the same type
   * - Returned fields may be serialized as a csv header
   * - Returned fields are readable from {@link Obj#fieldValueAtPath}
   * - Only populated values from provided objects are included
   *
   * @param type
   *            The type that you will do the comparison on for relevant fields to compare.
   * @param objs
   *            The objects that you will do the comparison on for relevant fields.
   * @param ignoreFields
   *            The fields to ignore when comparing the objects.
   * @return
   *            The relevant fields to compare.
   */
  static getAllRelevantFields(type: Type, objs: Array_Type<any>, ignoreFields?: Array_Type<string>): Array_Type<string> | null;

  /**
   * Transform objects to a serialized csv string.
   */
  static objsToCsvString(type: Type, objs: Array_Type<any>): string | null;

  /**
   * Construct primary key for object based on key fields.
   *
   * @param obj
   *           The object to construct the primary key for.
   * @param keyFields
   *           The key fields to use to construct the primary key.
   */
  static constructObjPrimaryKey(obj: any, keyFields: Array_Type<string>): string | null;

  /**
   * Helper function to check if two values are equal.
   * Handles edge cases for specific type checks
   *
   * @param value1
   *            The first value to compare.
   * @param value2
   *            The second value to compare.
   * @return
   *            True if the values are equal, false otherwise.
   */
  static areValuesEqual(value1?: any, value2?: any): boolean;

  /**
   * Gets all target Types for the {@link Canonical} mixing {@link Persistable}.
   * If a {@link Canonical} transforms to another {@link Canonical} Type, we will
   * BFS the tree of target Types to find all leaf node persistable Types.
   *
   * @param canonicalType
   *           The {@link Canonical} Type to get all persistable target Types for.
   * @return All target Types for the {@link Canonical} mixing {@link Persistable}.
   */
  static getAllPersistableTargetTypesForCanonical(canonicalType: Type): Array_Type<Type> | null;

  /**
   * Returns a match score for the similarity between two types based on their fields.
   * This is a private helper function meant to support Source to Canonical mappings for transforms.
   *
   * @param objOne
   *            The first canonical or source type that you want to compare to. Order does not matter.
   * @param objTwo
   *            The second canonical or source type that you want to compare to. Order does not matter.
   * @return
   *            A double value indicating the total number of matching fields between the two types.
   */
  static calculateMatchScore(objOne: any, objTwo: any): number | null;

  /**
   * Returns a list of objects and attempts to order them based on a similar matching from {@link #calculateMatchScore}
   * The index of each array attempts to indicate the most likely match between the two arrays.
   *
   * @param arrayOne
   *            The first object array that you want to compare to. Order does not matter.
   * @param arrayTwo
   *            The second object array that you want to compare to. Order does not matter.
   * @return
   *            An ordered array of objects - the index of each array attempts to indicate the
   *            most likely match between the two arrays.
   */
  static alignArrays(arrayOne: Array_Type<any>, arrayTwo: Array_Type<any>): Array_Type<any> | null;

  /**
   * Returns a correct JS JSON object from a malformed JSON string.
   * This is a private function that seeks to correct platform divergences with JSON parsing and
   * issues with transformation inconsistency.  Reference PLAT-48275
   *
   * @param obj
   *            A JSON object that you want to correct.
   * @return
   *            A corrected JSON object suitable for use in making a c3 object.
   */
  static fixMalformedJsonString(obj?: any): any | null;
}

