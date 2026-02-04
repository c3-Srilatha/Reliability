// TypeScript definitions for the C3 type WithRef

/**
 * Base type for instances (value) of a type that are "pass by reference" by default. This type impacts the
 * behavior of serialization and deserialization of its instances between the C3 Server and remote clients.
 * Remote member calls to instances of such types have `this` argument serialized as result of call to `#toRef()`, and
 * deserialized as a result of calling `#fromRef`.
 *
 * @remarks this represents a value passed to a method that expects an instance of WithRef
 */
declare interface IWithRef {
}

/**
 * Base type for instances (value) of a type that are "pass by reference" by default. This type impacts the
 * behavior of serialization and deserialization of its instances between the C3 Server and remote clients.
 * Remote member calls to instances of such types have `this` argument serialized as result of call to `#toRef()`, and
 * deserialized as a result of calling `#fromRef`.
 *
 * @remarks this represents a made instance of WithRef
 */
declare class WithRef {

  /**
   * Reference value of this instance.
   */
  toRef(): Typesys.Ref;

  /**
   * Reference string serialized value of the reference to this instance.
   */
  toRefString(): string;

  /**
   * Construct instance from a reference.
   */
  static fromRef(ref: Obj, failIfMissing?: boolean): WithRef;

  /**
   * C3 type for the reference value.
   */
  static refType(): Type | null;
}

