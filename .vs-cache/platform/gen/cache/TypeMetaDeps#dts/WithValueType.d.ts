// TypeScript definitions for the C3 type WithValueType

/**
 * Base type of instances (value) of a type that are "value-type-aware" i.e. can fully infer or store its own value
 * type.
 *
 * @see Collection
 * @see DateTime
 *
 * @remarks this represents a value passed to a method that expects an instance of WithValueType
 */
declare interface IWithValueType {
}

/**
 * Base type of instances (value) of a type that are "value-type-aware" i.e. can fully infer or store its own value
 * type.
 *
 * @see Collection
 * @see DateTime
 *
 * @remarks this represents a made instance of WithValueType
 */
declare class WithValueType {

  /**
   * C3 ValueType of this instance.
   */
  valueType(): ValueType;

  /**
   * Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
   * considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
   *
   * @see ValueType#instanceType
   */
  static valueTypeOf(type: Type, failIfNot?: boolean): ValueType | null;
}

