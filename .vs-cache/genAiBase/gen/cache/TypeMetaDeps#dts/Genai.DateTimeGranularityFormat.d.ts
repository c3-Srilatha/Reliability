// TypeScript definitions for the C3 type Genai.DateTimeGranularityFormat

/**
 * Enum type mapping date time granularities to corresponding string format.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.DateTimeGranularityFormat
 */
declare namespace Genai {
  export interface IDateTimeGranularityFormat {

    /**
     * Format including year, month, day, hour, minute, and second
     */
    seconds?: string;

    /**
     * Format including year, month, day, hour, and minute (seconds set to 00)
     */
    minutes?: string;

    /**
     * Format including year, month, day, and hour (minutes and seconds set to 00:00)
     */
    hours?: string;

    /**
     * Format including year, month, and day (time set to 00:00:00)
     */
    days?: string;

    /**
     * Format including year, month, and day (time set to 00:00:00, representing the start of the week)
     */
    weeks?: string;

    /**
     * Format including year and month (day set to 01 and time set to 00:00:00, representing the start of the month)
     */
    months?: string;

    /**
     * Format including year (month and day set to 01-01 and time set to 00:00:00, representing the start of the year)
     */
    years?: string;
  }
}

/**
 * Enum type mapping date time granularities to corresponding string format.
 *
 * @remarks this represents a made instance of Genai.DateTimeGranularityFormat
 */
declare namespace Genai {
  export class DateTimeGranularityFormat {

    /**
     * Format including year, month, day, hour, minute, and second
     */
    readonly seconds?: string;
    withSeconds(seconds: string | null): Genai.DateTimeGranularityFormat;

    /**
     * Format including year, month, day, hour, and minute (seconds set to 00)
     */
    readonly minutes?: string;
    withMinutes(minutes: string | null): Genai.DateTimeGranularityFormat;

    /**
     * Format including year, month, day, and hour (minutes and seconds set to 00:00)
     */
    readonly hours?: string;
    withHours(hours: string | null): Genai.DateTimeGranularityFormat;

    /**
     * Format including year, month, and day (time set to 00:00:00)
     */
    readonly days?: string;
    withDays(days: string | null): Genai.DateTimeGranularityFormat;

    /**
     * Format including year, month, and day (time set to 00:00:00, representing the start of the week)
     */
    readonly weeks?: string;
    withWeeks(weeks: string | null): Genai.DateTimeGranularityFormat;

    /**
     * Format including year and month (day set to 01 and time set to 00:00:00, representing the start of the month)
     */
    readonly months?: string;
    withMonths(months: string | null): Genai.DateTimeGranularityFormat;

    /**
     * Format including year (month and day set to 01-01 and time set to 00:00:00, representing the start of the year)
     */
    readonly years?: string;
    withYears(years: string | null): Genai.DateTimeGranularityFormat;

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
