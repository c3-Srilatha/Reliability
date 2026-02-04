// TypeScript definitions for the C3 type WithLazyType

/**
 * Base type of instances (value) of a type that are "type-aware" and also with lazy metadata in the sense that produce
 * additional method declarations lazily at runtime.
 *
 * @see Annotations, Err and ObjBuilder for an example of usage
 *
 * @remarks this represents a value passed to a method that expects an instance of WithLazyType
 */
declare interface IWithLazyType {
}

/**
 * Base type of instances (value) of a type that are "type-aware" and also with lazy metadata in the sense that produce
 * additional method declarations lazily at runtime.
 *
 * @see Annotations, Err and ObjBuilder for an example of usage
 *
 * @remarks this represents a made instance of WithLazyType
 */
declare class WithLazyType {

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
  replaceType(old: Type, new_: Type): WithLazyType;

  /**
   * Dynamically constructs method for this type
   */
  static implicitMethod(method: string | null, failIfMissing?: boolean): Method | null;

  /**
   * Call implicit method on this type by name
   */
  static callImplicitMethod(method: string, thsArg?: WithLazyType | null, args?: C3.Array<any>): any;
}

