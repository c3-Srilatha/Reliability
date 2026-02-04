// TypeScript definitions for the C3 type Genai.Query.Type

/**
 * Queries that can be executed from the GenAI application.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Query.Type
 */
declare namespace Genai.Query {
  export interface IType {

    /**
     * Standalone query
     */
    QUERY?: string;

    /**
     * Chat history
     */
    CHAT?: string;

    /**
     * Queries from a chat message
     */
    QUERY_FROM_CHAT?: string;

    /**
     * Used internally in the application to track the child instances of {@link Genai.Query.Result} created during execution of a {@link Genai.Agent.Tool.MultiSourceSynthesizer}
     * This is not for a user facing api, but only used for internal tracking of {@link Genai.Query.Result}
     * Queries triggered using this type are not tracked for consumption in {@link Genai.Query.ResultCount}
     */
    QUERY_FROM_CHILD_RESULT?: string;

    /**
     * Queries from a suggested follow-up
     */
    QUERY_FROM_SUGGESTION?: string;

    /**
     * Queries from agent configuration test feed
     */
    QUERY_FROM_TEST_CASE?: string;

    /**
     * Queries from Few Shot Examples
     */
    FEW_SHOT_EXAMPLE_QUERY?: string;
  }
}

/**
 * Queries that can be executed from the GenAI application.
 *
 * @remarks this represents a made instance of Genai.Query.Type
 */
declare namespace Genai.Query {
  export class Type {

    /**
     * Standalone query
     */
    readonly QUERY?: string;
    withQUERY(QUERY: string | null): Genai.Query.Type;

    /**
     * Chat history
     */
    readonly CHAT?: string;
    withCHAT(CHAT: string | null): Genai.Query.Type;

    /**
     * Queries from a chat message
     */
    readonly QUERY_FROM_CHAT?: string;
    withQUERY_FROM_CHAT(QUERY_FROM_CHAT: string | null): Genai.Query.Type;

    /**
     * Used internally in the application to track the child instances of {@link Genai.Query.Result} created during execution of a {@link Genai.Agent.Tool.MultiSourceSynthesizer}
     * This is not for a user facing api, but only used for internal tracking of {@link Genai.Query.Result}
     * Queries triggered using this type are not tracked for consumption in {@link Genai.Query.ResultCount}
     */
    readonly QUERY_FROM_CHILD_RESULT?: string;
    withQUERY_FROM_CHILD_RESULT(QUERY_FROM_CHILD_RESULT: string | null): Genai.Query.Type;

    /**
     * Queries from a suggested follow-up
     */
    readonly QUERY_FROM_SUGGESTION?: string;
    withQUERY_FROM_SUGGESTION(QUERY_FROM_SUGGESTION: string | null): Genai.Query.Type;

    /**
     * Queries from agent configuration test feed
     */
    readonly QUERY_FROM_TEST_CASE?: string;
    withQUERY_FROM_TEST_CASE(QUERY_FROM_TEST_CASE: string | null): Genai.Query.Type;

    /**
     * Queries from Few Shot Examples
     */
    readonly FEW_SHOT_EXAMPLE_QUERY?: string;
    withFEW_SHOT_EXAMPLE_QUERY(FEW_SHOT_EXAMPLE_QUERY: string | null): Genai.Query.Type;

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
