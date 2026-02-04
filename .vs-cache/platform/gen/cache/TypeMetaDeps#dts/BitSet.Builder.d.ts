// TypeScript definitions for the C3 type BitSet.Builder

/**
 * A way to quickly construct a {@link BitSet}. It can also function as a mutable BitSet if desired, although it may
 * be less efficient than a normal, immutable instance.
 *
 * @remarks this represents a value passed to a method that expects an instance of BitSet.Builder
 */
declare namespace BitSet {
  export interface IBuilder {
  }
}

/**
 * A way to quickly construct a {@link BitSet}. It can also function as a mutable BitSet if desired, although it may
 * be less efficient than a normal, immutable instance.
 *
 * @remarks this represents a made instance of BitSet.Builder
 */
declare namespace BitSet {
  export class Builder {

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
    replaceType(old: Type, new_: Type): BitSet.Builder;

    /**
     * Construct an instance with initial state.
     */
    static make(): BitSet.Builder;

    /**
     * Clear all bits to false (empty the builder).
     */
    clear(): BitSet.Builder;

    /**
     * Produce an instance of {@link BitSet} with the bits set in the builder so far.
     */
    build(): BitSet;

    /**
     * Get the bit at the specified index.
     */
    bitAt(idx: number): boolean;

    /**
     * @return if the builder has no bit set to 1
     */
    isEmpty(): boolean;

    /**
     * Set the bit at the specified index to the specified value.
     */
    setAt(idx: number, value: boolean): BitSet.Builder;

    /**
     * Change the bit at the specified index to the negation of its current value.
     */
    toggleAt(idx: number): BitSet.Builder;
  }
}

