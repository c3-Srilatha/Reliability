// TypeScript definitions for the C3 type Observability.Trace.Ai

/**
 * Test type for custom trace
 *
 * @remarks this represents a value passed to a method that expects an instance of Observability.Trace.Ai
 */
declare namespace Observability.Trace {
  export interface IAi {

    /**
     * Name of the trace formed from concatenation of typename and methodname of root action.
     * For example, `Observability.Trace#list` and `WindTurbine#echo` could be possible values.
     */
    name?: string;

    /**
     * The start time of this {@link Observability.Trace}
     * This is the earliest {@link Observability.Span#startTime} of all spans belonging to this trace.
     */
    startTime?: DateTime | Date | string;

    /**
     * The end time of this {@link Observability.Trace}
     * This is the latest {@link Observability.Span#endTime} of all spans belonging to this trace.
     */
    endTime?: DateTime | Date | string;

    /**
     * Duration of this {@link Observability.Trace}.
     * This is the difference between {@link Observability.Trace#startTime} and
     * the {@link Observability.Trace#endTime}.
     */
    durationInMillis?: number;

    /**
     * Number of {@link Observability.Span}s in this {@link Observability.Trace}.
     */
    spanCount?: number;

    /**
     * Number of {@link Observability.Span}s in this {@link Observability.Trace} that have errors.
     */
    errorCount?: number;

    /**
     * The status code of this {@link Observability.Trace}.
     */
    status?: string;

    /**
     * True if there were errors during aggregation
     */
    hasAggregationErrors?: boolean;

    /**
     * The ID of this {@link Observability.Trace}.
     */
    id?: string;

    /**
     * Input for trace - uses "APPEND" aggregatioon
     */
    prompt?: Array_Type<string> | Array<string>;

    /**
     * Output for trace - uses "APPEND" aggregation
     */
    response?: Array_Type<string> | Array<string>;

    /**
     * Number of total tokens, uses "SUM" aggregation
     */
    tokenSum?: number;

    /**
     * Number of total tokens, uses "MAX" aggregation
     */
    maxTokens?: number;

    /**
     * Tracks best case latency, uses "MIN" aggregation
     */
    minLatency?: number;

    /**
     * True, if any of the span responses are toxic, uses "ANY" aggregation
     */
    isToxic?: boolean;

    /**
     * True, if all of the span responses are valid, uses "AND" aggregation
     */
    isValid?: boolean;

    /**
     * Counts the number of tool calls in trace, uses "COUNT" aggregation
     */
    grandChildCount?: number;

    /**
     * Minimum confidence score of plan step
     */
    confidenceScore?: number;

    /**
     * Maximum duration of plan step
     */
    maxDuration?: number;

    /**
     * Total tokens for prompt-response pair
     */
    totalTokens?: number;

    /**
     * Number of tool calls
     */
    numTools?: number;

    /**
     * Completion text of response
     */
    completion?: Array_Type<string> | Array<string>;

    /**
     * Prompt of response
     */
    input?: Array_Type<string> | Array<string>;
  }
}

/**
 * Test type for custom trace
 *
 * @remarks this represents a made instance of Observability.Trace.Ai
 */
declare namespace Observability.Trace {
  export class Ai extends Obj  {

    /**
     * Name of the trace formed from concatenation of typename and methodname of root action.
     * For example, `Observability.Trace#list` and `WindTurbine#echo` could be possible values.
     */
    readonly name?: string;
    withName(name: string | null): Observability.Trace.Ai;

    /**
     * The start time of this {@link Observability.Trace}
     * This is the earliest {@link Observability.Span#startTime} of all spans belonging to this trace.
     */
    readonly startTime?: DateTime;
    withStartTime(startTime: DateTime | Date | string | null): Observability.Trace.Ai;

    /**
     * The end time of this {@link Observability.Trace}
     * This is the latest {@link Observability.Span#endTime} of all spans belonging to this trace.
     */
    readonly endTime?: DateTime;
    withEndTime(endTime: DateTime | Date | string | null): Observability.Trace.Ai;

    /**
     * Duration of this {@link Observability.Trace}.
     * This is the difference between {@link Observability.Trace#startTime} and
     * the {@link Observability.Trace#endTime}.
     */
    readonly durationInMillis?: number;
    withDurationInMillis(durationInMillis: number | null): Observability.Trace.Ai;

    /**
     * Number of {@link Observability.Span}s in this {@link Observability.Trace}.
     */
    readonly spanCount?: number;
    withSpanCount(spanCount: number | null): Observability.Trace.Ai;

    /**
     * Number of {@link Observability.Span}s in this {@link Observability.Trace} that have errors.
     */
    readonly errorCount?: number;
    withErrorCount(errorCount: number | null): Observability.Trace.Ai;

    /**
     * The status code of this {@link Observability.Trace}.
     */
    readonly status?: string;
    withStatus(status: string | null): Observability.Trace.Ai;

    /**
     * True if there were errors during aggregation
     */
    readonly hasAggregationErrors?: boolean;
    withHasAggregationErrors(hasAggregationErrors: boolean): Observability.Trace.Ai;

    /**
     * The ID of this {@link Observability.Trace}.
     */
    readonly id?: string;
    withId(id: string | null): Observability.Trace.Ai;

    /**
     * Input for trace - uses "APPEND" aggregatioon
     */
    readonly prompt?: Array_Type<string>;
    withPrompt(prompt: Array_Type<string> | Array<string> | null): Observability.Trace.Ai;

    /**
     * Output for trace - uses "APPEND" aggregation
     */
    readonly response?: Array_Type<string>;
    withResponse(response: Array_Type<string> | Array<string> | null): Observability.Trace.Ai;

    /**
     * Number of total tokens, uses "SUM" aggregation
     */
    readonly tokenSum?: number;
    withTokenSum(tokenSum: number | null): Observability.Trace.Ai;

    /**
     * Number of total tokens, uses "MAX" aggregation
     */
    readonly maxTokens?: number;
    withMaxTokens(maxTokens: number | null): Observability.Trace.Ai;

    /**
     * Tracks best case latency, uses "MIN" aggregation
     */
    readonly minLatency?: number;
    withMinLatency(minLatency: number | null): Observability.Trace.Ai;

    /**
     * True, if any of the span responses are toxic, uses "ANY" aggregation
     */
    readonly isToxic?: boolean;
    withIsToxic(isToxic: boolean): Observability.Trace.Ai;

    /**
     * True, if all of the span responses are valid, uses "AND" aggregation
     */
    readonly isValid?: boolean;
    withIsValid(isValid: boolean): Observability.Trace.Ai;

    /**
     * Counts the number of tool calls in trace, uses "COUNT" aggregation
     */
    readonly grandChildCount?: number;
    withGrandChildCount(grandChildCount: number | null): Observability.Trace.Ai;

    /**
     * Minimum confidence score of plan step
     */
    readonly confidenceScore?: number;
    withConfidenceScore(confidenceScore: number | null): Observability.Trace.Ai;

    /**
     * Maximum duration of plan step
     */
    readonly maxDuration?: number;
    withMaxDuration(maxDuration: number | null): Observability.Trace.Ai;

    /**
     * Total tokens for prompt-response pair
     */
    readonly totalTokens?: number;
    withTotalTokens(totalTokens: number | null): Observability.Trace.Ai;

    /**
     * Number of tool calls
     */
    readonly numTools?: number;
    withNumTools(numTools: number | null): Observability.Trace.Ai;

    /**
     * Completion text of response
     */
    readonly completion?: Array_Type<string>;
    withCompletion(completion: Array_Type<string> | Array<string> | null): Observability.Trace.Ai;

    /**
     * Prompt of response
     */
    readonly input?: Array_Type<string>;
    withInput(input: Array_Type<string> | Array<string> | null): Observability.Trace.Ai;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
     * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJson
     */
    static fromJson(json: any): Observability.Trace.Ai | null;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
     * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJsonString
     */
    static fromJsonString(json: string): Observability.Trace.Ai | null;

    /**
     * Load the XML-based representation and reconstruct the corresponding object.
     *
     * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
     * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
     * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
     * will return an instance of the correct type.
     *
     * @see #toXmlString
     */
    static fromXmlString(xml: string): Observability.Trace.Ai | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Observability.Trace.Ai | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Observability.Trace.Ai;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Observability.Trace.Ai;

    /**
     * Result of this function call is a copy of current instance with all fields replaced based on results of the
     * `mapper` invocation.
     *
     * @param spec
     *           which fields to include
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Observability.Trace.Ai;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Observability.Trace.Ai>;

    /**
     * Result of this function call is a copy of current instance with all fields replaced based on results of the
     * asynchronous `mapper` invocation.
     *
     * @param spec
     *           which fields to include
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Observability.Trace.Ai>;

    /**
     * Result of this function call is a copy of current instance with specified field value replaced based on result of
     * the `mapper` invocation.
     * @param field
     *           field being mapped
     * @param includeEmpty
     *           if set, invokes mapper for fields with empty value
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Observability.Trace.Ai;

    /**
     * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
     * lambda application.
     *
     * Result of this function call is a copy of current instance with all references replaced based on results of the
     * `mapper` invocation.
     *
     * @param action
     *           function to be executed for each pair of field type and Obj instance
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Observability.Trace.Ai;

    /**
     * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
     * lambda application.
     *
     * Result of this function call is a copy of current instance with all references replaced based on results of the
     * `mapper` invocation.
     *
     * @param includeEmpty
     *           if `true` will also process references with `null` / "Empty" references
     * @param mapper
     *           function to be executed for each pair of field type and Obj instance for producing new reference value
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Observability.Trace.Ai;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Observability.Trace.Ai;

    /**
     * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
     * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           name of the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, do not attempt to convert the value to match the field's type
     * @return new Obj
     *
     * @see #withoutField
     * @see #defaultField
     */
    withField(field: string, value: any, doNotConvert?: boolean): Observability.Trace.Ai;

    /**
     * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
     * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, do not attempt to convert the value to match the field's type
     * @return new Obj
     *
     * @see #withoutField
     * @see #defaultField
     */
    withField(field: FieldType, value: any, doNotConvert?: boolean): Observability.Trace.Ai;

    /**
     * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
     * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
     *
     * @param fields
     *           map of field names/values
     * @param doNotConvert
     *           if true, attempt to convert the values to match the fields' type
     * @return new Obj
     */
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Observability.Trace.Ai;

    /**
     * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
     * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
     *
     * Immutable objects may return the same instance if the field being set does not actually represent a
     * change to the existing object.
     *
     * @param path
     *           path to set value at
     * @param value
     *           value to set
     * @param doNotConvert
     *           if true, attempt to convert the values to match the fields' type
     * @param doNotCreateIfMissing
     *           true indicates that any empty reference along the path will not set the value
     * @return new Obj
     */
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Observability.Trace.Ai;

    /**
     * Builds a new Obj without the specified path field.
     *
     * Immutable objects may return the same instance if the field being removed does not actually represent a
     * change to the existing object.
     *
     * @param path
     *           path for field to remove
     * @return new Obj
     *
     * @see #withFieldAtPath
     * @see #withoutField
     */
    withoutFieldAtPath(path: string): Observability.Trace.Ai;

    /**
     * Builds a new Obj, removing the field with the provided name.
     *
     * Immutable objects may return the same instance if the field being removed is not present in the existing object.
     *
     * @param field
     *           name of the field to remove
     * @return new Obj with removed field
     *
     * @see #unsetField
     * @see #removeField
     */
    withoutField(field: string): Observability.Trace.Ai;

    /**
     * Builds a new Obj, removing the field with the provided field type.
     *
     * Immutable objects may return the same instance if the field being removed is not present in the existing object.
     *
     * @param field
     *           name of the field to remove
     * @return new Obj with removed field
     *
     * @see #unsetField
     * @see #removeField
     */
    withoutField(field: FieldType): Observability.Trace.Ai;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Observability.Trace.Ai;

    /**
     * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
     * exact same type as the type of the obj to respect the "ordinal" of the field type
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           field types to remove
     * @return new Obj with removed fields
     */
    withoutFieldsByType(fields: Array_Type<FieldType>): Observability.Trace.Ai;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Observability.Trace.Ai;

    /**
     * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
     * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
     * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
     * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
     * fields that have already been set.
     *
     * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
     * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
     *
     * @param includeEmptyRefsWithDefaults
     *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
     * @param defaultFields
     *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
     *           array will be ignored.
     * @return new Obj
     *
     * @see #defaultField
     * @see FieldType#defaultValueConst
     * @see FieldType#defaultValue
     */
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Observability.Trace.Ai;

    /**
     * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
     * method will behave the same as {@link #unsetField}.
     *
     * @param field
     *         name of the field to default
     * @return new `Obj` with the specified field set to its default value
     *
     * @see #withField
     * @see #unsetField
     */
    defaultField(field: string): Observability.Trace.Ai;

    /**
     * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
     * method will behave the same as {@link #unsetField}.
     *
     * @param field
     *         field type to default
     * @return new `Obj` with the specified field set to its default value
     *
     * @see #withField
     * @see #unsetField
     */
    defaultField(field: FieldType): Observability.Trace.Ai;

    /**
     * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
     * is different from {@link removeField}
     *
     * @param field
     *         name of the field to unset
     * @return new `Obj` with the specified field unset
     *
     * @see #withoutField
     * @see #removeField
     */
    unsetField(field: string): Observability.Trace.Ai;

    /**
     * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
     * is different from {@link removeField}
     *
     * @param field
     *         field type to unset
     * @return new `Obj` with the specified field unset
     *
     * @see #withoutField
     * @see #removeField
     */
    unsetField(field: FieldType): Observability.Trace.Ai;

    /**
     * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
     * is different from {@link #unsetField}
     *
     * @param field
     *         name of the field to remove
     * @return new `Obj` with the specified field removed
     *
     * @see #withoutField
     * @see #unsetField
     */
    removeField(field: string): Observability.Trace.Ai;

    /**
     * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
     * is different from {@link #unsetField}
     *
     * @param field
     *         field type to remove
     * @return new `Obj` with the specified field removed
     *
     * @see #withoutField
     * @see #unsetField
     */
    removeField(field: FieldType): Observability.Trace.Ai;

    /**
     * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
     * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
     *
     * @param other
     *           object
     * @param fieldPathMergeSpec
     *           mapping of fields of the object to the respective merge annotations
     * @return the new merged Obj
     */
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Observability.Trace.Ai;

    /**
     * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
     * In case of conflicts, fields of other instance take precedence.
     *
     * @param other
     *           object
     * @param otherFieldsFilter
     *           only fields of otherFieldsFilter type from other are merged into this obj.
     * @return the new merged Obj
     */
    mergeObj(other: Obj, otherFieldsFilter: Type): Observability.Trace.Ai;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Observability.Trace.Ai;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Observability.Trace.Ai;

    mergeJson(json: any): Observability.Trace.Ai;

    /**
     * Merge the obj references within the current obj
     * @param deep
     *        If set, traverses the reference fields within the obj as well for a deep merge
     * @param objKey
     *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
     * @param filter
     *        Field paths that need to be filtered from this merge
     * @return Obj with child references merged
     */
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Observability.Trace.Ai;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Observability.Trace.Ai;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Observability.Trace.Ai>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Observability.Trace.Ai> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Observability.Trace.Ai> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Observability.Trace.Ai>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Observability.Trace.Ai> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Observability.Trace.Ai> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Observability.Trace.Ai> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Observability.Trace.Ai>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Observability.Trace.Ai>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Observability.Trace.Ai;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Observability.Trace.Ai;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Observability.Trace.Ai;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Observability.Trace.Ai;

    /**
     * Construct an instance from provided fields
     * @param fields
     *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
     *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
     *            to Panda.make()
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
     *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
     *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
     *
     *
     * @see fromFields
     * @see beforeMake
     * @see afterMake
     * @see withDefaults
     */
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Observability.Trace.Ai;

    /**
     * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
     *
     * ```js
     * User.make({
     *   email: 'joe@smith.com',
     *   realName: 'Joe Smith'
     * })
     *
     * Obj.make({
     *   type: 'User',
     *   email: 'joe@smith.com',
     *   realName: 'Joe Smith'
     * })
     * ```
     *
     * ```py
     * c3.User.make({
     *   "email": 'joe@smith.com',
     *   "realName": 'Joe Smith'
     * })
     *
     * c3.Obj.make({
     *   "type": 'User',
     *   "email": 'joe@smith.com',
     *   "realName": 'Joe Smith'
     * })
     *
     * c3.User(email='joe@smith.com', realName='Joe Smith')
     *
     * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
     * ```
     *
     * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
     * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
     * such as {@link Ann.Ser} do not apply.
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see fromFields
     * @see beforeMake
     * @see afterMake
     * @see withDefaults
     */
    static make(fields: any, withDefaults?: boolean): Observability.Trace.Ai;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Observability.Trace.Ai;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): Observability.Trace.Ai;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Observability.Trace.Ai;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Observability.Trace.Ai> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Observability.Trace.Ai;

    /**
     * Returns all the {@link Observability.Trace}s that match the given spec.
     * @param spec
     *    {@link FetchSpec} for the traces.
     */
    static list(spec?: Spec): Array_Type<Observability.Trace> | null;

    /**
     * @return the most recent {@link Observability.Trace}.
     */
    static mostRecentTrace(): Observability.Trace | null;

    /**
     * @param spec
     *          {@link Spec} for the spans associated with this trace.
     * @return a list of spans associated with this trace.
     */
    spans(spec?: Spec): Array_Type<Observability.Span>;

    /**
     * Returns summary of the spans in this {@link Observability.Trace}.
     * @param spec
     *    {@link Observability.Trace.SummarySpec} for choosing fields to show.
     */
    summary(spec?: Observability.Trace.SummarySpec): Data.Persisted | null;

    /**
     * @return map of <span name>-<row id> to the stack trace for each exception in this {@link Observability.Trace}.
     *    For example, it looks like {"mySpan-0": "Traceback (most recent call last):\n  File \"<stdin>\", ....}
     */
    exceptions(): Map_Type<string, string> | null;

    /**
     * This is an endpoint used for the UI.
     * Return nested span structure along with the trace information for this {@link Observability.Trace}.
     * @return map of string to json with the following structure:
     * {
     *   id: id_of_the_trace,
     *   other_field_of_the_trace: value,
     *   spans:[
     *     {
     *       id: id_of_the_span,
     *       other_field_of_the_span: value,
     *       children:[
     *          spans that are children of this span]
     *     }
     *   ]
     *  }
     *  Note that there may be multiple root spans in the trace.
     */
    spansAsTree(): Observability.SpansAsTree | null;

    /**
     * This is an endpoint used for the UI.
     * Returns the exception for the given span.
     * @param spanId
     *    The ID of the span from spansAsTree
     *
     * @return The exception for the given span.
     */
    static exceptionForSpan(spanId: string): string | null;

    /**
     * Returns the static system attribute fields that are automatically added to every span.
     *
     * @return A static set of system attribute fields in spans.
     */
    static systemAttributeKeys(): Array_Type<string> | null;

    /**
     * Remove all instances of {@link Observability.Trace.Record} older than {@link Observability.Tracer.Config#traceRecordTtl}.
     * Called by {@link Observability#cleanUp}
     * Look at the {@link Observability.Tracer.Config} for configuration.
     */
    static cleanUp(): void;

    /**
     * This is an endpoint used for the UI.
     * Returns all the {@link Observability.Span}s for this trace that match the given spec.
     * @param spec
     *    {@link FetchSpec} for the spans associated with this trace.
     *
     * @returns a {@link FetchResult} consisting of {@link Observability.Span}s.
     */
    spanSummary(spec?: Spec): FetchResult<Observability.Span.Result>;

    /**
     * This is an endpoint used for the UI.
     * Returns the count of {@link Observability.Span}s for this that match the given spec.
     * @param spec
     *    {@link FetchFilterSpec} for the spans associated with this trace.
     *
     * @returns a count of spans matching the provided spec.
     */
    spanSummaryCount(spec?: Spec): number;

    /**
     * Returns the type associated with this trace for persisting traces.
     *
     * @returns the type used for persisting traces.
     */
    static recordType(): Type<<Persistable>>;

    /**
     * Helper function for returning filter for fetching spans associated with this trace.
     *
     * @returns {@link Filter} for fetching spans associated with this trace
     */
    spanFilter(): Filter;

    /**
     * Callback for providing information on how to aggregate span attribute values to trace fields.
     * Aggregations are calulated incrementally as new span(s) are added.
     * Aggregating span attribute values to trace will degrade the overall performance of an application when tracing is enabled.
     * It is recommended to aggregate minimal set of span attribute values to trace.
     *
     * @returns a map, whose keys are field names in this trace.
     * Value is a named tuple. `attributeName` is one of keys in {@link Observability.Span#attributes} whose value is aggregated to trace.
     * `aggregation` indicates the name of aggregation, i.e how to perform aggregation.
     */
    static aggregationMapper(): Map_Type<string, > | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
