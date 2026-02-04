// TypeScript definitions for the C3 type BitSet

/**
 * An indexable collection of bits. Insignificant (high false) bits will be automatically dropped.
 *
 * These are most commonly created using the builder pattern:
 * ```js
 * let b = BitSet.builder();
 * type.meta().fieldTypes.each(ft => {
 *   if (ft.name.includes("duck")) {
 *     b.setAt(ft.ordinal(), true);
 *   }
 * });
 * let ducks = b.build();
 * ```
 *
 * @see BitSet.Builder
 *
 * @remarks this represents a value passed to a method that expects an instance of BitSet
 */
declare interface IBitSet {
}

/**
 * An indexable collection of bits. Insignificant (high false) bits will be automatically dropped.
 *
 * These are most commonly created using the builder pattern:
 * ```js
 * let b = BitSet.builder();
 * type.meta().fieldTypes.each(ft => {
 *   if (ft.name.includes("duck")) {
 *     b.setAt(ft.ordinal(), true);
 *   }
 * });
 * let ducks = b.build();
 * ```
 *
 * @see BitSet.Builder
 *
 * @remarks this represents a made instance of BitSet
 */
declare class BitSet {

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
  replaceType(old: Type, new_: Type): BitSet;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): BitSet | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): BitSet | null;

  /**
   * The closest native representation of the value.
   *
   * In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
   * access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
   * exposed, copying if necessary.
   *
   * @param doNotCopy return internal state without copying (unsafe access)
   */
  toNative(doNotCopy?: boolean): any;

  /**
   * Create a builder for efficient instantiation of the corresponding type.
   */
  static builder(): BitSet.Builder;

  /**
   * Create a builder with this initial state for efficient updating.
   */
  toBuilder(): BitSet.Builder;

  /**
   * @return the bit at the given index. Return false if out of range
   */
  bitAt(idx: number): boolean;

  /**
   * @return a new BitSet with the bit at the given index set to the value. Resize the bitset if the index is out of
   * range.
   */
  withBitAt(idx: number, value: boolean): BitSet;

  /**
   * @return a new BitSet from the bits in the provided binary, with the insignificant bits removed.
   */
  static fromBinary(bin: any | null): BitSet;

  /**
   * @return an array of booleans representing the BitSet value
   */
  toBools(): C3.Array<boolean>;

  /**
   * @return the index of the last bit set to 1. Return -1 if there are none.
   */
  lastBitIndex(): number;

  /**
   * @return if the BitSet has no bit set to 1
   */
  isEmpty(): boolean;

  /**
   * @return a logical OR of this with the {@link BitSet} argument
   */
  or(bitset: BitSet): BitSet;
}

