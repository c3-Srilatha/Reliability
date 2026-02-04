// TypeScript definitions for the C3 type Genai.StructuredData.Spec.OperationEnum

/**
 * Enum type for supported regular operations methods, used in {@link EvalSpec#projection}, {@link EvalSpec#filter},
 * {@link EvalSpec#order}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.StructuredData.Spec.OperationEnum
 */
declare namespace Genai.StructuredData.Spec {
  export interface IOperationEnum {

    /**
     * Time operation: get second
     */
    SECOND?: string;

    /**
     * Time operation: get minute
     */
    MINUTE?: string;

    /**
     * Time operation: get hour
     */
    HOUR?: string;

    /**
     * Time operation: get day
     */
    DAY?: string;

    /**
     * Time operation: get month
     */
    MONTH?: string;

    /**
     * Time operation: get year
     */
    YEAR?: string;

    /**
     * Time operation: get day of week
     */
    DAY_OF_WEEK?: string;

    /**
     * Time operation: get day of month
     */
    DAYS_IN_YEAR?: string;

    /**
     * Math operation: absolute value
     */
    ABS?: string;

    /**
     * Math operation: square root
     */
    SQRT?: string;

    /**
     * Math operation: exponentiation
     */
    EXP?: string;

    /**
     * Math operation: ceiling
     */
    CEIL?: string;

    /**
     * Math operation: floor
     */
    FLOOR?: string;

    /**
     * Math operation: natural logarithm
     */
    LOG?: string;

    /**
     * String operation: to lower case
     */
    LOWER_CASE?: string;

    /**
     * String operation: to upper case
     */
    UPPER_CASE?: string;
  }
}

/**
 * Enum type for supported regular operations methods, used in {@link EvalSpec#projection}, {@link EvalSpec#filter},
 * {@link EvalSpec#order}.
 *
 * @remarks this represents a made instance of Genai.StructuredData.Spec.OperationEnum
 */
declare namespace Genai.StructuredData.Spec {
  export class OperationEnum {

    /**
     * Time operation: get second
     */
    readonly SECOND?: string;
    withSECOND(SECOND: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get minute
     */
    readonly MINUTE?: string;
    withMINUTE(MINUTE: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get hour
     */
    readonly HOUR?: string;
    withHOUR(HOUR: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get day
     */
    readonly DAY?: string;
    withDAY(DAY: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get month
     */
    readonly MONTH?: string;
    withMONTH(MONTH: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get year
     */
    readonly YEAR?: string;
    withYEAR(YEAR: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get day of week
     */
    readonly DAY_OF_WEEK?: string;
    withDAY_OF_WEEK(DAY_OF_WEEK: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Time operation: get day of month
     */
    readonly DAYS_IN_YEAR?: string;
    withDAYS_IN_YEAR(DAYS_IN_YEAR: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Math operation: absolute value
     */
    readonly ABS?: string;
    withABS(ABS: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Math operation: square root
     */
    readonly SQRT?: string;
    withSQRT(SQRT: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Math operation: exponentiation
     */
    readonly EXP?: string;
    withEXP(EXP: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Math operation: ceiling
     */
    readonly CEIL?: string;
    withCEIL(CEIL: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Math operation: floor
     */
    readonly FLOOR?: string;
    withFLOOR(FLOOR: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * Math operation: natural logarithm
     */
    readonly LOG?: string;
    withLOG(LOG: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * String operation: to lower case
     */
    readonly LOWER_CASE?: string;
    withLOWER_CASE(LOWER_CASE: string | null): Genai.StructuredData.Spec.OperationEnum;

    /**
     * String operation: to upper case
     */
    readonly UPPER_CASE?: string;
    withUPPER_CASE(UPPER_CASE: string | null): Genai.StructuredData.Spec.OperationEnum;

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
