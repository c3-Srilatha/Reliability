// TypeScript definitions for the C3 type Argon2.Variant

/**
 * Argon2 variant types.
 * {@link Argon2}
 *
 * @remarks this represents a value passed to a method that expects an instance of Argon2.Variant
 */
declare namespace Argon2 {
  export interface IVariant {

    /**
     * Argon2d is faster and uses data-depending memory access,
     *    which makes it highly resistant against GPU cracking attacks
     *    and suitable for applications with no threats from side-channel timing attacks.
     *    Resistant to TMTO attacks.
     */
    readonly Argon2d: "Argon2d";

    /**
     * Argon2i is slower and uses data-independent memory access,
     *    which is preferred for password hashing and password-based key derivation.
     *    Resistant to side-channel cache timing attacks.
     */
    readonly Argon2i: "Argon2i";

    /**
     * Argon2id is a hybrid version of Argon2 combining Argon2i and Argon2d,
     *    using a combination of data-depending and data-independent memory accesses,
     *    which gives some of Argon2i's resistance to side-channel cache timing attacks
     *    and much of Argon2d's resistance to GPU cracking attacks.
     */
    readonly Argon2id: "Argon2id";
  }
}

/**
 * Argon2 variant types.
 * {@link Argon2}
 *
 * @remarks this represents a made instance of Argon2.Variant
 */
declare namespace Argon2 {
  export class Variant {

    /**
     * Argon2d is faster and uses data-depending memory access,
     *    which makes it highly resistant against GPU cracking attacks
     *    and suitable for applications with no threats from side-channel timing attacks.
     *    Resistant to TMTO attacks.
     */
    static readonly Argon2d: "Argon2d";

    /**
     * Argon2i is slower and uses data-independent memory access,
     *    which is preferred for password hashing and password-based key derivation.
     *    Resistant to side-channel cache timing attacks.
     */
    static readonly Argon2i: "Argon2i";

    /**
     * Argon2id is a hybrid version of Argon2 combining Argon2i and Argon2d,
     *    using a combination of data-depending and data-independent memory accesses,
     *    which gives some of Argon2i's resistance to side-channel cache timing attacks
     *    and much of Argon2d's resistance to GPU cracking attacks.
     */
    static readonly Argon2id: "Argon2id";

    /**
     * Translate the enum label (field name) to the value.
     * For simple enums (that don't define explicit values), the value is a string
     * that matches the label.
     * @param label the enum label
     * @return the associated value
     */
    static toValue(label: string | null, failIfInvalid?: boolean): string | null;

    /**
     * Translate the enum value to the label (field name).
     * @param value the enum value
     * @return the enum label
     */
    static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

    /**
     * Get the index of the label in the enum.
     * @param label the enum label (field name)
     * @return index or -1 if not found
     */
    static labelIndex(label: string | null, failIfInvalid?: boolean): number;

    /**
     * Get the index of the value in the enum.
     * @param value the enum value
     * @return index or -1 if not found
     */
    static valueIndex(value: string | null, failIfInvalid?: boolean): number;

    /**
     * @return value type of values in this enum
     */
    static valueType(): ValueType;

    /**
     * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
     * the field name (same as the labels).
     */
    static values(): C3.Array<string | null>;

    /**
     * Return an array of all enumeration labels. These are the same as the field names of the enum type.
     */
    static labels(): C3.Array<string | null>;

    /**
     * Return a map of all enumeration values to their labels.
     */
    static valueToLabels(): C3.Map<string | null, string | null>;

    /**
     * Return a map of all enumeration labels to their values.
     */
    static labelToValues(): C3.Map<string | null, string | null>;

    /**
     * Is value a valid value for this enum type?
     * @param value the enum value
     */
    static containsValue(value: string): boolean;

    /**
     * Calls provided action for each enum label.
     */
    static eachLabel(action?: λConsumer<string> | null): void;

    /**
     * Calls provided action for each enum value.
     */
    static eachValue(action?: λConsumer<string> | null): void;
  }
}


interface λConsumer<T> {
  (t: T): void
}
