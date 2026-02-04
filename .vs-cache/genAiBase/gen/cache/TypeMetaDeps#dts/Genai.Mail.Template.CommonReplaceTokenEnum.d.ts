// TypeScript definitions for the C3 type Genai.Mail.Template.CommonReplaceTokenEnum

/**
 * Common tokens to replace in email templates. Expressions to evaluate should be added to
 * {@link Genai.Mail#replaceCommonToken}. To use one of these tokens in a template, add the enum value, with the
 * `{{double curly braces}}`, to the {@link Genai.Mail.Template#commonReplaceTokens} array.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Mail.Template.CommonReplaceTokenEnum
 */
declare namespace Genai.Mail.Template {
  export interface ICommonReplaceTokenEnum {

    /**
     * If used in a {@link Genai.Mail.Template} and added to the {@link Genai.Mail.Template#commonReplaceTokens} array,
     * this token will be replaced with the URL of the application.
     */
    APPLICATION_URL?: string;
  }
}

/**
 * Common tokens to replace in email templates. Expressions to evaluate should be added to
 * {@link Genai.Mail#replaceCommonToken}. To use one of these tokens in a template, add the enum value, with the
 * `{{double curly braces}}`, to the {@link Genai.Mail.Template#commonReplaceTokens} array.
 *
 * @remarks this represents a made instance of Genai.Mail.Template.CommonReplaceTokenEnum
 */
declare namespace Genai.Mail.Template {
  export class CommonReplaceTokenEnum {

    /**
     * If used in a {@link Genai.Mail.Template} and added to the {@link Genai.Mail.Template#commonReplaceTokens} array,
     * this token will be replaced with the URL of the application.
     */
    readonly APPLICATION_URL?: string;
    withAPPLICATION_URL(APPLICATION_URL: string | null): Genai.Mail.Template.CommonReplaceTokenEnum;

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
