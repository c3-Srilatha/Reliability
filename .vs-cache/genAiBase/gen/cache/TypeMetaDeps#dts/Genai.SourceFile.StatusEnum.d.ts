// TypeScript definitions for the C3 type Genai.SourceFile.StatusEnum

/**
 * Represents the current state of the source file with respect to
 * ingestion (indexed, unindexed, re-indexing required,...)
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.SourceFile.StatusEnum
 */
declare namespace Genai.SourceFile {
  export interface IStatusEnum {

    /**
     * The {@link Genai.SourceFile} was successfully indexed
     */
    INDEXED?: string;

    /**
     * The {@link Genai.SourceFile} was successfully chunked
     */
    CHUNKED?: string;

    /**
     * When a {@link Genai.SourceFile} was either first created from syncing and has not been indexed yet
     * or is manually removed from the index by a user
     */
    NOT_INDEXED?: string;

    /**
     * Either chunking or indexing failed for the {@link Genai.SourceFile}
     */
    FAILED?: string;

    /**
     * The {@link Genai.SourceFile} is currently indexed but its {@link Genai.SourceFile#originalFile}
     * has since been updated
     */
    NEEDS_REINDEXING?: string;

    /**
     * The {@link Genai.SourceFile} is being removed from the index
     */
    REMOVING?: string;

    /**
     * The {@link Genai.SourceFile} is being synced. Depending on the configuration and results, it will
     * then transition to #NOT_INDEXED or #NEEDS_REINDEXING
     */
    SYNCING?: string;

    /**
     * The {@link Genai.SourceFile} has started to be indexed. Depending on the result, it will
     * transition to #INDEXED or #FAILED
     */
    INDEXING?: string;

    /**
     * The {@link Genai.SourceFile} has started to be chunked. Depending on the result, it will
     * transition to #CHUNKED or #FAILED
     */
    CHUNKING?: string;

    /**
     * The {@link Genai.SourceFile#originalFile} no longer exists, and the file is not currently indexed
     * into {@link Genai.Retriever}
     */
    ARCHIVED?: string;

    /**
     * The {@link Genai.SourceFile#originalFile} no longer exists, but the file is currently indexed into
     * the {@link Genai.Retriever}
     */
    NEEDS_REMOVAL?: string;

    /**
     * User has deleted the {@link Genai.SourceFile}. Deleted files cannot be indexed.
     */
    DELETED?: string;
  }
}

/**
 * Represents the current state of the source file with respect to
 * ingestion (indexed, unindexed, re-indexing required,...)
 *
 * @remarks this represents a made instance of Genai.SourceFile.StatusEnum
 */
declare namespace Genai.SourceFile {
  export class StatusEnum {

    /**
     * The {@link Genai.SourceFile} was successfully indexed
     */
    readonly INDEXED?: string;
    withINDEXED(INDEXED: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile} was successfully chunked
     */
    readonly CHUNKED?: string;
    withCHUNKED(CHUNKED: string | null): Genai.SourceFile.StatusEnum;

    /**
     * When a {@link Genai.SourceFile} was either first created from syncing and has not been indexed yet
     * or is manually removed from the index by a user
     */
    readonly NOT_INDEXED?: string;
    withNOT_INDEXED(NOT_INDEXED: string | null): Genai.SourceFile.StatusEnum;

    /**
     * Either chunking or indexing failed for the {@link Genai.SourceFile}
     */
    readonly FAILED?: string;
    withFAILED(FAILED: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile} is currently indexed but its {@link Genai.SourceFile#originalFile}
     * has since been updated
     */
    readonly NEEDS_REINDEXING?: string;
    withNEEDS_REINDEXING(NEEDS_REINDEXING: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile} is being removed from the index
     */
    readonly REMOVING?: string;
    withREMOVING(REMOVING: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile} is being synced. Depending on the configuration and results, it will
     * then transition to #NOT_INDEXED or #NEEDS_REINDEXING
     */
    readonly SYNCING?: string;
    withSYNCING(SYNCING: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile} has started to be indexed. Depending on the result, it will
     * transition to #INDEXED or #FAILED
     */
    readonly INDEXING?: string;
    withINDEXING(INDEXING: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile} has started to be chunked. Depending on the result, it will
     * transition to #CHUNKED or #FAILED
     */
    readonly CHUNKING?: string;
    withCHUNKING(CHUNKING: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile#originalFile} no longer exists, and the file is not currently indexed
     * into {@link Genai.Retriever}
     */
    readonly ARCHIVED?: string;
    withARCHIVED(ARCHIVED: string | null): Genai.SourceFile.StatusEnum;

    /**
     * The {@link Genai.SourceFile#originalFile} no longer exists, but the file is currently indexed into
     * the {@link Genai.Retriever}
     */
    readonly NEEDS_REMOVAL?: string;
    withNEEDS_REMOVAL(NEEDS_REMOVAL: string | null): Genai.SourceFile.StatusEnum;

    /**
     * User has deleted the {@link Genai.SourceFile}. Deleted files cannot be indexed.
     */
    readonly DELETED?: string;
    withDELETED(DELETED: string | null): Genai.SourceFile.StatusEnum;

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
