// TypeScript definitions for the C3 type Genai.Project.Type

/**
 * Enum type for a {@link Genai.Project#projectType}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Project.Type
 */
declare namespace Genai.Project {
  export interface IType {

    /**
     * Tutorial projects are readonly and meant to onboard the user.
     */
    TUTORIAL?: string;

    /**
     * Production projects are writeable,
     * and they are the ones that will contain the user's documents.
     */
    PRODUCTION?: string;
  }
}

/**
 * Enum type for a {@link Genai.Project#projectType}.
 *
 * @remarks this represents a made instance of Genai.Project.Type
 */
declare namespace Genai.Project {
  export class Type {

    /**
     * Tutorial projects are readonly and meant to onboard the user.
     */
    readonly TUTORIAL?: string;
    withTUTORIAL(TUTORIAL: string | null): Genai.Project.Type;

    /**
     * Production projects are writeable,
     * and they are the ones that will contain the user's documents.
     */
    readonly PRODUCTION?: string;
    withPRODUCTION(PRODUCTION: string | null): Genai.Project.Type;

    /**
     * Translate the enum label (field name) to the value.
     * For simple enums (that don't define explicit values), the value is a string
     * that matches the label.
     * @param label the enum label
     * @return the associated value
     */
    static toValue(label: string, failIfInvalid?: boolean): string | null;

    /**
     * Translate the enum value to the label (field name).
     * @param value the enum value
     * @return the enum label
     */
    static toLabel(value: string, failIfInvalid?: boolean): string | null;

    /**
     * Get the index of the label in the enum.
     * @param label the enum label (field name)
     * @return index or -1 if not found
     */
    static labelIndex(label: string, failIfInvalid?: boolean): number;

    /**
     * Get the index of the value in the enum.
     * @param value the enum value
     * @return index or -1 if not found
     */
    static valueIndex(value: string, failIfInvalid?: boolean): number;

    /**
     * @return value type of values in this enum
     */
    static valueType(): ValueType;

    /**
     * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
     * the field name (same as the labels).
     */
    static values(): Array_Type<string> | null;

    /**
     * Return an array of all enumeration labels. These are the same as the field names of the enum type.
     */
    static labels(): Array_Type<string> | null;

    /**
     * Return a map of all enumeration values to their labels.
     */
    static valueToLabels(): Map_Type<string, string> | null;

    /**
     * Return a map of all enumeration labels to their values.
     */
    static labelToValues(): Map_Type<string, string> | null;

    /**
     * Is value a valid value for this enum type?
     * @param value the enum value
     */
    static containsValue(value: string): boolean;

    /**
     * Calls provided action for each enum label.
     */
    static eachLabel(action?: λConsumer<string>): void;

    /**
     * Calls provided action for each enum value.
     */
    static eachValue(action?: λConsumer<string>): void;
  }
}


interface λConsumer<T> {
  (t: T): void
}
