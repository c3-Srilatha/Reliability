// TypeScript definitions for the C3 type DocSiteExport.FileContent.Kind

/**
 * Enum for the different kinds of file content that are exported under the
 * {@link DocSiteExport.Subdirectory#DOCUMENTATION_ARTIFACTS} subdirectory.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.FileContent.Kind
 */
declare namespace DocSiteExport.FileContent {
  export interface IKind {

    /**
     * The file content is for a {@link Type}.
     */
    TYPE?: string;

    /**
     * The file content is for a [topic](documentation-features#topics-documentation).
     */
    TOPIC?: string;

    /**
     * The file content is for a Type guide.
     */
    TYPE_GUIDE?: string;

    /**
     * The file content is for a topic guide.
     */
    TOPIC_GUIDE?: string;

    /**
     * The file content is for a {@link JupyterNotebook#externalFile}.
     */
    JUPYTER_NOTEBOOK?: string;

    /**
     * The file content is for an image.
     */
    IMAGE?: string;
  }
}

/**
 * Enum for the different kinds of file content that are exported under the
 * {@link DocSiteExport.Subdirectory#DOCUMENTATION_ARTIFACTS} subdirectory.
 *
 * @remarks this represents a made instance of DocSiteExport.FileContent.Kind
 */
declare namespace DocSiteExport.FileContent {
  export class Kind {

    /**
     * The file content is for a {@link Type}.
     */
    readonly TYPE?: string;
    withTYPE(TYPE: string | null): DocSiteExport.FileContent.Kind;

    /**
     * The file content is for a [topic](documentation-features#topics-documentation).
     */
    readonly TOPIC?: string;
    withTOPIC(TOPIC: string | null): DocSiteExport.FileContent.Kind;

    /**
     * The file content is for a Type guide.
     */
    readonly TYPE_GUIDE?: string;
    withTYPE_GUIDE(TYPE_GUIDE: string | null): DocSiteExport.FileContent.Kind;

    /**
     * The file content is for a topic guide.
     */
    readonly TOPIC_GUIDE?: string;
    withTOPIC_GUIDE(TOPIC_GUIDE: string | null): DocSiteExport.FileContent.Kind;

    /**
     * The file content is for a {@link JupyterNotebook#externalFile}.
     */
    readonly JUPYTER_NOTEBOOK?: string;
    withJUPYTER_NOTEBOOK(JUPYTER_NOTEBOOK: string | null): DocSiteExport.FileContent.Kind;

    /**
     * The file content is for an image.
     */
    readonly IMAGE?: string;
    withIMAGE(IMAGE: string | null): DocSiteExport.FileContent.Kind;

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
