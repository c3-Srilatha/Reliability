// TypeScript definitions for the C3 type BaseCodeAnalysis.VersionDiff.Metric.Code

/**
 * Enum Type for the list of codes of all {@link BaseCodeAnalysis.VersionDiff.Metric}s.
 *
 * @see BaseCodeAnalysis.Metric.Code
 * @see BaseCodeAnalysis.Metric.BaseCode
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.VersionDiff.Metric.Code
 */
declare namespace BaseCodeAnalysis.VersionDiff.Metric {
  export interface ICode {

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Addition}.
     */
    ADDITION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Removal}.
     */
    REMOVAL?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Rename}.
     */
    RENAME?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Deprecation}.
     */
    DEPRECATION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}.
     */
    SCHEMA_CHANGE?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}.
     */
    VALUE_TYPE_CHANGE?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}.
     */
    VALUE_MODIFIER_CHANGE?: string;
  }
}

/**
 * Enum Type for the list of codes of all {@link BaseCodeAnalysis.VersionDiff.Metric}s.
 *
 * @see BaseCodeAnalysis.Metric.Code
 * @see BaseCodeAnalysis.Metric.BaseCode
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Code
 */
declare namespace BaseCodeAnalysis.VersionDiff.Metric {
  export class Code {

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Addition}.
     */
    readonly ADDITION?: string;
    withADDITION(ADDITION: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Removal}.
     */
    readonly REMOVAL?: string;
    withREMOVAL(REMOVAL: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Rename}.
     */
    readonly RENAME?: string;
    withRENAME(RENAME: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Deprecation}.
     */
    readonly DEPRECATION?: string;
    withDEPRECATION(DEPRECATION: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}.
     */
    readonly SCHEMA_CHANGE?: string;
    withSCHEMA_CHANGE(SCHEMA_CHANGE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}.
     */
    readonly VALUE_TYPE_CHANGE?: string;
    withVALUE_TYPE_CHANGE(VALUE_TYPE_CHANGE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}.
     */
    readonly VALUE_MODIFIER_CHANGE?: string;
    withVALUE_MODIFIER_CHANGE(VALUE_MODIFIER_CHANGE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Code;

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
