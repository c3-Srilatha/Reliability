// TypeScript definitions for the C3 type Genai.StructuredData.Spec.FilterOperationEnum

/**
 * Enum type for supported filtering methods, i.e. methods when {@link EvalSpec#filter} is specified.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.StructuredData.Spec.FilterOperationEnum
 */
declare namespace Genai.StructuredData.Spec {
  export interface IFilterOperationEnum {

    /**
     * Not equal
     */
    NE?: string;

    /**
     * Equal
     */
    EQ?: string;

    /**
     * Less than
     */
    LT?: string;

    /**
     * Greater than
     */
    GT?: string;

    /**
     * Greater than or equal
     */
    GE?: string;

    /**
     * Contains string
     */
    CONTAINS?: string;

    /**
     * Starts with string
     */
    STARTS_WITH?: string;

    /**
     * Ends with string
     */
    ENDS_WITH?: string;

    /**
     * Some field exists
     */
    EXISTS?: string;
  }
}

/**
 * Enum type for supported filtering methods, i.e. methods when {@link EvalSpec#filter} is specified.
 *
 * @remarks this represents a made instance of Genai.StructuredData.Spec.FilterOperationEnum
 */
declare namespace Genai.StructuredData.Spec {
  export class FilterOperationEnum {

    /**
     * Not equal
     */
    readonly NE?: string;
    withNE(NE: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Equal
     */
    readonly EQ?: string;
    withEQ(EQ: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Less than
     */
    readonly LT?: string;
    withLT(LT: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Greater than
     */
    readonly GT?: string;
    withGT(GT: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Greater than or equal
     */
    readonly GE?: string;
    withGE(GE: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Contains string
     */
    readonly CONTAINS?: string;
    withCONTAINS(CONTAINS: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Starts with string
     */
    readonly STARTS_WITH?: string;
    withSTARTS_WITH(STARTS_WITH: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Ends with string
     */
    readonly ENDS_WITH?: string;
    withENDS_WITH(ENDS_WITH: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

    /**
     * Some field exists
     */
    readonly EXISTS?: string;
    withEXISTS(EXISTS: string | null): Genai.StructuredData.Spec.FilterOperationEnum;

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
