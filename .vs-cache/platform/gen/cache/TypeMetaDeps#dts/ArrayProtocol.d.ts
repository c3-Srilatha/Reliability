// TypeScript definitions for the C3 type ArrayProtocol

/**
 * Marker type indicating support for implementation language native array semantics e.g. indexed access via []
 *
 * @remarks this represents a value passed to a method that expects an instance of ArrayProtocol
 */
declare interface IArrayProtocol {
}

/**
 * Marker type indicating support for implementation language native array semantics e.g. indexed access via []
 *
 * @remarks this represents a made instance of ArrayProtocol
 */
declare class ArrayProtocol {

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
  replaceType(old: Type, new_: Type): ArrayProtocol;

  /**
   * @return element at index
   */
  _at(index?: number | null): any;

  /**
   * @return count of elements
   */
  _size(index?: number | null): number;
}

