// TypeScript definitions for the C3 type WithType

/**
 * Base type of instances (value) of a type that are "type-aware" i.e. can fully infer or store its own type.
 *
 * @see Obj
 *
 * @remarks this represents a value passed to a method that expects an instance of WithType
 */
declare interface IWithType {
}

/**
 * Base type of instances (value) of a type that are "type-aware" i.e. can fully infer or store its own type.
 *
 * @see Obj
 *
 * @remarks this represents a made instance of WithType
 */
declare class WithType {

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
  replaceType(old: Type, new_: Type): WithType;

  /**
   *  Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
   *  useful for redispatching **member** methods reimplemented on this type to a parent implementation:
   *  ```js
   *  function toString() {
   *    return this.super().toString() + ', x=' + this.x;
   *  }
   *  ```
   *
   *  ```py
   *  def toString(this):
   *     return this.super().toString() + ', x=' + this.x
   * ```
   *
   *  To redispatch **static** methods, see {@link Type#super}.
   *
   *  Note that this not the same as the language-specific `super` keyword because it works through the type system and
   *  supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
   *  globally.
   *
   *  If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
   *  This can be used to create a local implementation "around" the server implementation for additional caching or
   *  other local state management.
   *
   *  @param mixin if specified, this mixin is used instead or an error is thrown
   *  @return "super" calling proxy for this object
   *
   *  @see Type.super
   */
  super(mixin?: Type | null): any;
}

