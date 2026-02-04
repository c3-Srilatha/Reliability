// TypeScript definitions for the C3 type Genai.Query.Result.Feedback.Enum

/**
 * Enum type for additional feedback options for a {@link Genai.Query.Result}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Query.Result.Feedback.Enum
 */
declare namespace Genai.Query.Result.Feedback {
  export interface IEnum {

    /**
     * Helpful status
     */
    HELPFUL?: string;

    /**
     * Accurate status
     */
    ACCURATE?: string;

    /**
     * Not helpful status
     */
    NOT_HELPFUL?: string;

    /**
     * Inacurate status
     */
    INACCURATE?: string;

    /**
     * Outdated status
     */
    OUTDATED?: string;

    /**
     * Harmful status
     */
    HARMFUL?: string;

    /**
     * With just a text summary
     */
    TEXT_SUMMARY?: string;

    /**
     * With an image
     */
    IMAGE?: string;

    /**
     * With a table
     */
    TABLE?: string;

    /**
     * From database
     */
    DATABASE_QUERY?: string;

    /**
     * With a visualization
     */
    VISUALIZATION?: string;

    /**
     * From an edited structured query spec
     */
    EDITED_STRUCTURED_QUERY_SPEC?: string;
  }
}

/**
 * Enum type for additional feedback options for a {@link Genai.Query.Result}.
 *
 * @remarks this represents a made instance of Genai.Query.Result.Feedback.Enum
 */
declare namespace Genai.Query.Result.Feedback {
  export class Enum {

    /**
     * Helpful status
     */
    readonly HELPFUL?: string;
    withHELPFUL(HELPFUL: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * Accurate status
     */
    readonly ACCURATE?: string;
    withACCURATE(ACCURATE: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * Not helpful status
     */
    readonly NOT_HELPFUL?: string;
    withNOT_HELPFUL(NOT_HELPFUL: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * Inacurate status
     */
    readonly INACCURATE?: string;
    withINACCURATE(INACCURATE: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * Outdated status
     */
    readonly OUTDATED?: string;
    withOUTDATED(OUTDATED: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * Harmful status
     */
    readonly HARMFUL?: string;
    withHARMFUL(HARMFUL: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * With just a text summary
     */
    readonly TEXT_SUMMARY?: string;
    withTEXT_SUMMARY(TEXT_SUMMARY: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * With an image
     */
    readonly IMAGE?: string;
    withIMAGE(IMAGE: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * With a table
     */
    readonly TABLE?: string;
    withTABLE(TABLE: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * From database
     */
    readonly DATABASE_QUERY?: string;
    withDATABASE_QUERY(DATABASE_QUERY: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * With a visualization
     */
    readonly VISUALIZATION?: string;
    withVISUALIZATION(VISUALIZATION: string | null): Genai.Query.Result.Feedback.Enum;

    /**
     * From an edited structured query spec
     */
    readonly EDITED_STRUCTURED_QUERY_SPEC?: string;
    withEDITED_STRUCTURED_QUERY_SPEC(EDITED_STRUCTURED_QUERY_SPEC: string | null): Genai.Query.Result.Feedback.Enum;

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
