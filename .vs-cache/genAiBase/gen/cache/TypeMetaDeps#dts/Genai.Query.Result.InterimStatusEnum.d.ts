// TypeScript definitions for the C3 type Genai.Query.Result.InterimStatusEnum

/**
 * Represents a status of the {@link Genai.Query.Result} in the
 * process to answer a query (processing query, searching documents, generating final answer...)
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Query.Result.InterimStatusEnum
 */
declare namespace Genai.Query.Result {
  export interface IInterimStatusEnum {

    /**
     * The query is being completed
     */
    COMPLETED?: string;

    /**
     * The metric is being evaluated
     */
    EVALUATE_METRIC?: string;

    /**
     * The answer is being generated
     */
    GENERATE_ANSWER?: string;

    /**
     * The visualization is being generated
     */
    GENERATE_VISUALIZATION?: string;

    /**
     * The follow-up queries are being generated
     */
    GENERATE_FOLLOW_UP_QUERIES?: string;

    /**
     * The query tool is stale
     */
    EVAL_QUERY_TOOL_STALE?: string;

    /**
     * The query tool is being initialized
     */
    INITIALIZE_EVAL_QUERY_TOOL?: string;

    /**
     * The structured query tool is being initialized
     */
    INITIALIZE_STRUCTURED_QUERY_TOOL?: string;

    /**
     * The unstructured query tool is being initialized
     */
    INITIALIZE_UNSTRUCTURED_QUERY_TOOL?: string;

    /**
     * The multi-source query tool is being initialized
     */
    INITIALIZE_MULTI_SOURCE_QUERY_TOOL?: string;

    /**
     * Generating args for C3 method
     */
    C3_METHOD_GENERATE_ARGS?: string;

    /**
     * Invoking C3 method
     */
    C3_METHOD_INVOKE_METHOD?: string;

    /**
     * Processing C3 method result
     */
    C3_METHOD_PROCESS_RESULT?: string;

    /**
     * Processing query
     */
    PROCESS_QUERY?: string;

    /**
     * Querying database
     */
    QUERY_DATABASE?: string;

    /**
     * Searching documents
     */
    SEARCH_DOCUMENTS?: string;

    /**
     * Retrieving data from all sources
     */
    RETRIEVE_DATA?: string;

    /**
     * The query tool is to be used next
     */
    USE_EVAL_QUERY_TOOL?: string;

    /**
     * The structured query tool is to be used next
     */
    USE_STRUCTURED_QUERY_TOOL?: string;

    /**
     * The unstructured query tool is to be used next
     */
    USE_UNSTRUCTURED_QUERY_TOOL?: string;

    /**
     * The multi-source query tool is to be used next
     */
    USE_MULTI_SOURCE_QUERY_TOOL?: string;

    /**
     * The web search tool is to be used next
     */
    USE_WEB_SEARCH_TOOL?: string;

    /**
     * The multi-source query tool is stale
     */
    MULTI_SOURCE_QUERY_TOOL_STALE?: string;

    /**
     * Failed
     */
    FAILED?: string;

    /**
     * Initializing planner
     */
    INITIALIZE_PLANNER?: string;

    /**
     * Generating plan
     */
    GENERATE_PLAN?: string;

    /**
     * Generating plan completed
     */
    GENERATE_PLAN_COMPLETED?: string;

    /**
     * Executing plan
     */
    EXECUTE_PLAN?: string;

    /**
     * Initializing dynamic agent
     */
    INITIALIZE_DYNAMIC_AGENT?: string;

    /**
     * The dynamic agent is to be used
     */
    USE_DYNAMIC_AGENT?: string;
  }
}

/**
 * Represents a status of the {@link Genai.Query.Result} in the
 * process to answer a query (processing query, searching documents, generating final answer...)
 *
 * @remarks this represents a made instance of Genai.Query.Result.InterimStatusEnum
 */
declare namespace Genai.Query.Result {
  export class InterimStatusEnum {

    /**
     * The query is being completed
     */
    readonly COMPLETED?: string;
    withCOMPLETED(COMPLETED: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The metric is being evaluated
     */
    readonly EVALUATE_METRIC?: string;
    withEVALUATE_METRIC(EVALUATE_METRIC: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The answer is being generated
     */
    readonly GENERATE_ANSWER?: string;
    withGENERATE_ANSWER(GENERATE_ANSWER: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The visualization is being generated
     */
    readonly GENERATE_VISUALIZATION?: string;
    withGENERATE_VISUALIZATION(GENERATE_VISUALIZATION: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The follow-up queries are being generated
     */
    readonly GENERATE_FOLLOW_UP_QUERIES?: string;
    withGENERATE_FOLLOW_UP_QUERIES(GENERATE_FOLLOW_UP_QUERIES: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The query tool is stale
     */
    readonly EVAL_QUERY_TOOL_STALE?: string;
    withEVAL_QUERY_TOOL_STALE(EVAL_QUERY_TOOL_STALE: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The query tool is being initialized
     */
    readonly INITIALIZE_EVAL_QUERY_TOOL?: string;
    withINITIALIZE_EVAL_QUERY_TOOL(INITIALIZE_EVAL_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The structured query tool is being initialized
     */
    readonly INITIALIZE_STRUCTURED_QUERY_TOOL?: string;
    withINITIALIZE_STRUCTURED_QUERY_TOOL(INITIALIZE_STRUCTURED_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The unstructured query tool is being initialized
     */
    readonly INITIALIZE_UNSTRUCTURED_QUERY_TOOL?: string;
    withINITIALIZE_UNSTRUCTURED_QUERY_TOOL(INITIALIZE_UNSTRUCTURED_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The multi-source query tool is being initialized
     */
    readonly INITIALIZE_MULTI_SOURCE_QUERY_TOOL?: string;
    withINITIALIZE_MULTI_SOURCE_QUERY_TOOL(INITIALIZE_MULTI_SOURCE_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Generating args for C3 method
     */
    readonly C3_METHOD_GENERATE_ARGS?: string;
    withC3_METHOD_GENERATE_ARGS(C3_METHOD_GENERATE_ARGS: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Invoking C3 method
     */
    readonly C3_METHOD_INVOKE_METHOD?: string;
    withC3_METHOD_INVOKE_METHOD(C3_METHOD_INVOKE_METHOD: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Processing C3 method result
     */
    readonly C3_METHOD_PROCESS_RESULT?: string;
    withC3_METHOD_PROCESS_RESULT(C3_METHOD_PROCESS_RESULT: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Processing query
     */
    readonly PROCESS_QUERY?: string;
    withPROCESS_QUERY(PROCESS_QUERY: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Querying database
     */
    readonly QUERY_DATABASE?: string;
    withQUERY_DATABASE(QUERY_DATABASE: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Searching documents
     */
    readonly SEARCH_DOCUMENTS?: string;
    withSEARCH_DOCUMENTS(SEARCH_DOCUMENTS: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Retrieving data from all sources
     */
    readonly RETRIEVE_DATA?: string;
    withRETRIEVE_DATA(RETRIEVE_DATA: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The query tool is to be used next
     */
    readonly USE_EVAL_QUERY_TOOL?: string;
    withUSE_EVAL_QUERY_TOOL(USE_EVAL_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The structured query tool is to be used next
     */
    readonly USE_STRUCTURED_QUERY_TOOL?: string;
    withUSE_STRUCTURED_QUERY_TOOL(USE_STRUCTURED_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The unstructured query tool is to be used next
     */
    readonly USE_UNSTRUCTURED_QUERY_TOOL?: string;
    withUSE_UNSTRUCTURED_QUERY_TOOL(USE_UNSTRUCTURED_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The multi-source query tool is to be used next
     */
    readonly USE_MULTI_SOURCE_QUERY_TOOL?: string;
    withUSE_MULTI_SOURCE_QUERY_TOOL(USE_MULTI_SOURCE_QUERY_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The web search tool is to be used next
     */
    readonly USE_WEB_SEARCH_TOOL?: string;
    withUSE_WEB_SEARCH_TOOL(USE_WEB_SEARCH_TOOL: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The multi-source query tool is stale
     */
    readonly MULTI_SOURCE_QUERY_TOOL_STALE?: string;
    withMULTI_SOURCE_QUERY_TOOL_STALE(MULTI_SOURCE_QUERY_TOOL_STALE: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Failed
     */
    readonly FAILED?: string;
    withFAILED(FAILED: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Initializing planner
     */
    readonly INITIALIZE_PLANNER?: string;
    withINITIALIZE_PLANNER(INITIALIZE_PLANNER: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Generating plan
     */
    readonly GENERATE_PLAN?: string;
    withGENERATE_PLAN(GENERATE_PLAN: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Generating plan completed
     */
    readonly GENERATE_PLAN_COMPLETED?: string;
    withGENERATE_PLAN_COMPLETED(GENERATE_PLAN_COMPLETED: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Executing plan
     */
    readonly EXECUTE_PLAN?: string;
    withEXECUTE_PLAN(EXECUTE_PLAN: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * Initializing dynamic agent
     */
    readonly INITIALIZE_DYNAMIC_AGENT?: string;
    withINITIALIZE_DYNAMIC_AGENT(INITIALIZE_DYNAMIC_AGENT: string | null): Genai.Query.Result.InterimStatusEnum;

    /**
     * The dynamic agent is to be used
     */
    readonly USE_DYNAMIC_AGENT?: string;
    withUSE_DYNAMIC_AGENT(USE_DYNAMIC_AGENT: string | null): Genai.Query.Result.InterimStatusEnum;

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
