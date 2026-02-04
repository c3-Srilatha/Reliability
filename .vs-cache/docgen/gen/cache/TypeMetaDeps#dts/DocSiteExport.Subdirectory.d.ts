// TypeScript definitions for the C3 type DocSiteExport.Subdirectory

/**
 * Enum Type to represent the sub-directories in which various documentation artifacts are stored.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Subdirectory
 */
declare namespace DocSiteExport {
  export interface ISubdirectory {

    /**
     * Sub-directory to include files to be exported for the community bot. Includes all `.c3doc.md` and
     * `.ipynb` files declared in all packages for which documentation artifacts were generated.
     */
    COMMUNITY_BOT_FILES?: string;

    /**
     * Sub-directory to store a file with a map from the files added to the Community Bot to their respective
     * url alias in the developer portal.
     *
     * For instance, `data-diagnostics-usage.c3doc.md` will be mapped to `/docs/8.7/topic/data-diagnostics-usage.md`
     * which translates to `https://developer.c3.ai/docs/8.7/topic/data-diagnostics-usage.md`.
     */
    URL_ALIASES?: string;

    /**
     * Sub-directory to store the documentation artifacts generated to be uploaded onto the developer portal.
     */
    DOCUMENTATION_ARTIFACTS?: string;
  }
}

/**
 * Enum Type to represent the sub-directories in which various documentation artifacts are stored.
 *
 * @remarks this represents a made instance of DocSiteExport.Subdirectory
 */
declare namespace DocSiteExport {
  export class Subdirectory {

    /**
     * Sub-directory to include files to be exported for the community bot. Includes all `.c3doc.md` and
     * `.ipynb` files declared in all packages for which documentation artifacts were generated.
     */
    readonly COMMUNITY_BOT_FILES?: string;
    withCOMMUNITY_BOT_FILES(COMMUNITY_BOT_FILES: string | null): DocSiteExport.Subdirectory;

    /**
     * Sub-directory to store a file with a map from the files added to the Community Bot to their respective
     * url alias in the developer portal.
     *
     * For instance, `data-diagnostics-usage.c3doc.md` will be mapped to `/docs/8.7/topic/data-diagnostics-usage.md`
     * which translates to `https://developer.c3.ai/docs/8.7/topic/data-diagnostics-usage.md`.
     */
    readonly URL_ALIASES?: string;
    withURL_ALIASES(URL_ALIASES: string | null): DocSiteExport.Subdirectory;

    /**
     * Sub-directory to store the documentation artifacts generated to be uploaded onto the developer portal.
     */
    readonly DOCUMENTATION_ARTIFACTS?: string;
    withDOCUMENTATION_ARTIFACTS(DOCUMENTATION_ARTIFACTS: string | null): DocSiteExport.Subdirectory;

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
