// TypeScript definitions for the C3 type Genai.Llm.Deployment

/**
 * All llm deployments (with and without langchain) supported by Genai
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Llm.Deployment
 */
declare namespace Genai.Llm {
  export interface IDeployment {

    /**
     * Azure OpenAI via Langchain
     */
    LangchainWrappedAzureOpenAI?: string;

    /**
     * Google Cloud Platform
     */
    Gcp?: string;

    /**
     * Azure OpenAI
     */
    AzureOpenAI?: string;

    /**
     * AWS Bedrock
     */
    AwsBedrock?: string;

    /**
     * VLLM
     */
    VLLM?: string;

    /**
     * MIS
     */
    C3ModelInference?: string;
  }
}

/**
 * All llm deployments (with and without langchain) supported by Genai
 *
 * @remarks this represents a made instance of Genai.Llm.Deployment
 */
declare namespace Genai.Llm {
  export class Deployment {

    /**
     * Azure OpenAI via Langchain
     */
    readonly LangchainWrappedAzureOpenAI?: string;
    withLangchainWrappedAzureOpenAI(LangchainWrappedAzureOpenAI: string | null): Genai.Llm.Deployment;

    /**
     * Google Cloud Platform
     */
    readonly Gcp?: string;
    withGcp(Gcp: string | null): Genai.Llm.Deployment;

    /**
     * Azure OpenAI
     */
    readonly AzureOpenAI?: string;
    withAzureOpenAI(AzureOpenAI: string | null): Genai.Llm.Deployment;

    /**
     * AWS Bedrock
     */
    readonly AwsBedrock?: string;
    withAwsBedrock(AwsBedrock: string | null): Genai.Llm.Deployment;

    /**
     * VLLM
     */
    readonly VLLM?: string;
    withVLLM(VLLM: string | null): Genai.Llm.Deployment;

    /**
     * MIS
     */
    readonly C3ModelInference?: string;
    withC3ModelInference(C3ModelInference: string | null): Genai.Llm.Deployment;

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
