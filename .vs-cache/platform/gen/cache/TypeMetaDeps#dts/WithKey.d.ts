// TypeScript definitions for the C3 type WithKey

/**
 * Base type for things that have a string key that can be used to identify instances in a set [ or subset ].
 *
 * Note it does not necessarily claim that sub type instances have a globally unique key - just that in a typical use
 * subset instances will have key values that are unique within this subset.
 *
 * One of the advantages of identifying such sub types is so that we can have meaningful and convenient defaults and
 * helper methods.
 *
 * @see Nameable
 * @see Named
 * @see Identifiable
 * @see Identified
 * @see Collection#toMap
 *
 * @remarks this represents a value passed to a method that expects an instance of WithKey
 */
declare interface IWithKey {
}

/**
 * Base type for things that have a string key that can be used to identify instances in a set [ or subset ].
 *
 * Note it does not necessarily claim that sub type instances have a globally unique key - just that in a typical use
 * subset instances will have key values that are unique within this subset.
 *
 * One of the advantages of identifying such sub types is so that we can have meaningful and convenient defaults and
 * helper methods.
 *
 * @see Nameable
 * @see Named
 * @see Identifiable
 * @see Identified
 * @see Collection#toMap
 *
 * @remarks this represents a made instance of WithKey
 */
declare class WithKey {

  /**
   * C3 Type of this instance.
   */
  type(): Type;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): WithKey;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;
}

