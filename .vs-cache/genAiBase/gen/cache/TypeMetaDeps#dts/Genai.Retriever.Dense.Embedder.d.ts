// TypeScript definitions for the C3 type Genai.Retriever.Dense.Embedder

/**
 * Enum for dense embedding models. All supported embedders are specified here.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Retriever.Dense.Embedder
 */
declare namespace Genai.Retriever.Dense {
  export interface IEmbedder {

    /**
     * See {@link https://github.com/microsoft/unilm/tree/master/e5}
     */
    E5?: string;

    /**
     * Dense Passage Retrieval; see https://huggingface.co/docs/transformers/en/model_doc/dpr
     */
    DPR?: string;

    /**
     * See {@link https://github.com/sebastian-hofstaetter/tas-balanced-dense-retrieval}
     */
    TASB?: string;

    /**
     * See {@link https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1}
     */
    MXBAI?: string;
  }
}

/**
 * Enum for dense embedding models. All supported embedders are specified here.
 *
 * @remarks this represents a made instance of Genai.Retriever.Dense.Embedder
 */
declare namespace Genai.Retriever.Dense {
  export class Embedder {

    /**
     * See {@link https://github.com/microsoft/unilm/tree/master/e5}
     */
    readonly E5?: string;
    withE5(E5: string | null): Genai.Retriever.Dense.Embedder;

    /**
     * Dense Passage Retrieval; see https://huggingface.co/docs/transformers/en/model_doc/dpr
     */
    readonly DPR?: string;
    withDPR(DPR: string | null): Genai.Retriever.Dense.Embedder;

    /**
     * See {@link https://github.com/sebastian-hofstaetter/tas-balanced-dense-retrieval}
     */
    readonly TASB?: string;
    withTASB(TASB: string | null): Genai.Retriever.Dense.Embedder;

    /**
     * See {@link https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1}
     */
    readonly MXBAI?: string;
    withMXBAI(MXBAI: string | null): Genai.Retriever.Dense.Embedder;

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
