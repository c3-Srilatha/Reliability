// TypeScript definitions for the C3 type BaseCodeAnalysis.VersionDiff.ChangeKind

/**
 * Enum Type for the different kinds of changes that can be reported in a changelog
 * for a C3 application.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.VersionDiff.ChangeKind
 */
declare namespace BaseCodeAnalysis.VersionDiff {
  export interface IChangeKind {

    /**
     * A Type, field, method, method parameter, {@link Role}, UI component, or other metadata
     * element was added.
     */
    ADDED?: string;

    /**
     * A Type, field, method, method parameter, {@link Role}, UI component, or other metadata
     * element was removed.
     */
    REMOVED?: string;

    /**
     * The metadata element exists in both versions, but has been changed in some way. For example,
     *
     *   - A field or method parameter's {@link ValueType} was changed.
     *   - A field or method parameter's default value was changed.
     *   - The {@link ValueModifier} of a field or method parameter was changed.
     *   - The order of method parameters was changed.
     *   - A Type or field's schema name was changed.
     *
     * Depending on the nature of the change, this should result in a [deprecation](DEPRECATED)
     * or should be marked as a breaking change.
     */
    CHANGED?: string;

    /**
     * The metadata element was marked as [@deprecated](Ann.Deprecated) in the new version due
     * to a backwards-incompatible change or because it's no longer recommended for use.
     */
    DEPRECATED?: string;
  }
}

/**
 * Enum Type for the different kinds of changes that can be reported in a changelog
 * for a C3 application.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.ChangeKind
 */
declare namespace BaseCodeAnalysis.VersionDiff {
  export class ChangeKind {

    /**
     * A Type, field, method, method parameter, {@link Role}, UI component, or other metadata
     * element was added.
     */
    readonly ADDED?: string;
    withADDED(ADDED: string | null): BaseCodeAnalysis.VersionDiff.ChangeKind;

    /**
     * A Type, field, method, method parameter, {@link Role}, UI component, or other metadata
     * element was removed.
     */
    readonly REMOVED?: string;
    withREMOVED(REMOVED: string | null): BaseCodeAnalysis.VersionDiff.ChangeKind;

    /**
     * The metadata element exists in both versions, but has been changed in some way. For example,
     *
     *   - A field or method parameter's {@link ValueType} was changed.
     *   - A field or method parameter's default value was changed.
     *   - The {@link ValueModifier} of a field or method parameter was changed.
     *   - The order of method parameters was changed.
     *   - A Type or field's schema name was changed.
     *
     * Depending on the nature of the change, this should result in a [deprecation](DEPRECATED)
     * or should be marked as a breaking change.
     */
    readonly CHANGED?: string;
    withCHANGED(CHANGED: string | null): BaseCodeAnalysis.VersionDiff.ChangeKind;

    /**
     * The metadata element was marked as [@deprecated](Ann.Deprecated) in the new version due
     * to a backwards-incompatible change or because it's no longer recommended for use.
     */
    readonly DEPRECATED?: string;
    withDEPRECATED(DEPRECATED: string | null): BaseCodeAnalysis.VersionDiff.ChangeKind;

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
