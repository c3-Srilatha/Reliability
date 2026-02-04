// TypeScript definitions for the C3 type Genai.Query

/**
 * Type representing a user's search query. Contains information about the query string and any filters applied to the query.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Query
 */
declare namespace Genai {
  export interface IQuery {

    /**
     * The user's query, including operators (if any).
     * This would be translated to English if the user's query was in other language.
     */
    rawQuery?: string;

    /**
     * The user-inputted query, stripped of any operators.
     * This would be translated to English if the user-inputted query was in other language.
     */
    baseQuery?: string;

    /**
     * The standalone query (source of truth). It will be equal to #baseQuery if the query if the query
     * does not need rewriting, or different if it is rewritten by the LLM to take context into account (ie, chat messages).
     * This would always be in English language.
     */
    standaloneQuery?: string;

    /**
     * The un-modified user's query.
     * This would be only be populated if the user's query is not in English and {@link Genai.Translator.Config#enabled} is set to true.
     * It is used by the UI to check when to stop polling for {@link Genai.Query.Result} in the chat, if the search query is changed while the
     * chat query result has not returned.
     */
    nonTranslatedQuery?: string;

    /**
     * If {@link Genai.Translator.Config#enabled} is set to true, then detectedLanguage is the language code of
     * the user-inputted query.
     */
    detectedLanguage?: string;

    /**
     * Filters to be applied on the search query. This maps an {@link Genai.Query.Operator.Types}, representing a
     * field on {@link Genai.SourceFile.Metadata}, to an array of objects representing the operator target values and applied
     * expressions, if any.
     *
     * Each {@link Genai.Query.SourceFilter} in the array is chained to the next based on the next source filter's
     * {@link Genai.Query.SourceFilter#linkingOperator}, with additional grouping defined by
     * {@link Genai.Query.SourceFilter#openingParens} and {@link Genai.Query.SourceFilter#closingParens}.
     * More information about the currently supported operators can be found in {@link Genai.Query.Operator.Types}
     */
    filters?: Map_Type<string, Array_Type<Genai.Query.SourceFilter>> | {[key: string]: Array_Type<Genai.Query.SourceFilter> | Array<IGenai.Query.SourceFilter>};

    /**
     * If true, each follow-up chat query will use its own filter (if present, otherwise no filters will be applied),
     * instead of the parent filter if any.
     */
    overrideFilterFromParent?: boolean;

    /**
     * The type of query triggered by the user.
     * This is used to log consumption against a specific query type.
     */
    queryType: string;

    /**
     * If specified, the {@link Genai.Agent.QueryOrchestrator} should use the tool with this name to answer the question.
     *
     * NOTE: This is only supported if 'Genai.Agent.QueryOrchestrator' is set as the
     * {@link Genai.ChatBot.Config#handlerTypeName} and the specified tool is in the orchestrator's toolkit.
     */
    targetTool?: string;

    /**
     * This is used by {@link Genai.Agent.Tool.MultiSourceSynthesizer} to answer the user query using data retrieved from these tools.
     * IMPORTANT: If not specified and {@link Genai.Agent.Tool.MultiSourceSynthesizer} is used to execute a query, then all tools from {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config#toolkitName} will be executed.
     * The specified tools should be present in {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config#toolkitName}, else an error will be thrown.
     */
    toolsOverride?: Array_Type<string> | Array<string>;

    /**
     * The {@link Genai.Agent.Planner} that should be used to generate and execute the plan.
     */
    planner?: IGenai.Agent.Planner;

    /**
     * The set of parameters that should be used to answer the query.
     */
    executeSpec?: IGenai.Query.ExecuteSpec;
  }
}

/**
 * Type representing a user's search query. Contains information about the query string and any filters applied to the query.
 *
 * @remarks this represents a made instance of Genai.Query
 */
declare namespace Genai {
  export class Query extends Obj  {

    /**
     * The user's query, including operators (if any).
     * This would be translated to English if the user's query was in other language.
     */
    readonly rawQuery?: string;
    withRawQuery(rawQuery: string | null): Genai.Query;

    /**
     * The user-inputted query, stripped of any operators.
     * This would be translated to English if the user-inputted query was in other language.
     */
    readonly baseQuery?: string;
    withBaseQuery(baseQuery: string | null): Genai.Query;

    /**
     * The standalone query (source of truth). It will be equal to #baseQuery if the query if the query
     * does not need rewriting, or different if it is rewritten by the LLM to take context into account (ie, chat messages).
     * This would always be in English language.
     */
    readonly standaloneQuery?: string;
    withStandaloneQuery(standaloneQuery: string | null): Genai.Query;

    /**
     * The un-modified user's query.
     * This would be only be populated if the user's query is not in English and {@link Genai.Translator.Config#enabled} is set to true.
     * It is used by the UI to check when to stop polling for {@link Genai.Query.Result} in the chat, if the search query is changed while the
     * chat query result has not returned.
     */
    readonly nonTranslatedQuery?: string;
    withNonTranslatedQuery(nonTranslatedQuery: string | null): Genai.Query;

    /**
     * If {@link Genai.Translator.Config#enabled} is set to true, then detectedLanguage is the language code of
     * the user-inputted query.
     */
    readonly detectedLanguage?: string;
    withDetectedLanguage(detectedLanguage: string | null): Genai.Query;

    /**
     * Filters to be applied on the search query. This maps an {@link Genai.Query.Operator.Types}, representing a
     * field on {@link Genai.SourceFile.Metadata}, to an array of objects representing the operator target values and applied
     * expressions, if any.
     *
     * Each {@link Genai.Query.SourceFilter} in the array is chained to the next based on the next source filter's
     * {@link Genai.Query.SourceFilter#linkingOperator}, with additional grouping defined by
     * {@link Genai.Query.SourceFilter#openingParens} and {@link Genai.Query.SourceFilter#closingParens}.
     * More information about the currently supported operators can be found in {@link Genai.Query.Operator.Types}
     */
    readonly filters?: Map_Type<string, Array_Type<Genai.Query.SourceFilter>>;
    withFilters(filters: Map_Type<string, Array_Type<Genai.Query.SourceFilter>> | {[key: string]: Array_Type<Genai.Query.SourceFilter> | Array<IGenai.Query.SourceFilter>} | null): Genai.Query;

    /**
     * If true, each follow-up chat query will use its own filter (if present, otherwise no filters will be applied),
     * instead of the parent filter if any.
     */
    readonly overrideFilterFromParent?: boolean;
    withOverrideFilterFromParent(overrideFilterFromParent: boolean): Genai.Query;

    /**
     * The type of query triggered by the user.
     * This is used to log consumption against a specific query type.
     */
    readonly queryType: string;
    withQueryType(queryType: string): Genai.Query;

    /**
     * If specified, the {@link Genai.Agent.QueryOrchestrator} should use the tool with this name to answer the question.
     *
     * NOTE: This is only supported if 'Genai.Agent.QueryOrchestrator' is set as the
     * {@link Genai.ChatBot.Config#handlerTypeName} and the specified tool is in the orchestrator's toolkit.
     */
    readonly targetTool?: string;
    withTargetTool(targetTool: string | null): Genai.Query;

    /**
     * This is used by {@link Genai.Agent.Tool.MultiSourceSynthesizer} to answer the user query using data retrieved from these tools.
     * IMPORTANT: If not specified and {@link Genai.Agent.Tool.MultiSourceSynthesizer} is used to execute a query, then all tools from {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config#toolkitName} will be executed.
     * The specified tools should be present in {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config#toolkitName}, else an error will be thrown.
     */
    readonly toolsOverride?: Array_Type<string>;
    withToolsOverride(toolsOverride: Array_Type<string> | Array<string> | null): Genai.Query;

    /**
     * The {@link Genai.Agent.Planner} that should be used to generate and execute the plan.
     */
    readonly planner?: Genai.Agent.Planner;
    withPlanner(planner: IGenai.Agent.Planner | null): Genai.Query;

    /**
     * The set of parameters that should be used to answer the query.
     */
    readonly executeSpec?: Genai.Query.ExecuteSpec;
    withExecuteSpec(executeSpec: IGenai.Query.ExecuteSpec | null): Genai.Query;

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
    static fromJson(json: any): Genai.Query | null;

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
    static fromJsonString(json: string): Genai.Query | null;

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
    static fromXmlString(xml: string): Genai.Query | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Query | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Query;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Query;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Query;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Query;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Query;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Query;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Query;

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
    withoutFieldAtPath(path: string): Genai.Query;

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
    withoutField(field: string): Genai.Query;

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
    withoutField(field: FieldType): Genai.Query;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Query;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Query;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Query;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Query;

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
    defaultField(field: string): Genai.Query;

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
    defaultField(field: FieldType): Genai.Query;

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
    unsetField(field: string): Genai.Query;

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
    unsetField(field: FieldType): Genai.Query;

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
    removeField(field: string): Genai.Query;

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
    removeField(field: FieldType): Genai.Query;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Query;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Query;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Query;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Query;

    mergeJson(json: any): Genai.Query;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Query;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Query;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Query>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Query> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Query> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Query>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Query> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Query> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Query> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Query>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Query>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Query;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Query;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Query;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Query;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Query;

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
    static make(fields: any, withDefaults?: boolean): Genai.Query;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Query;

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
    afterMake(): Genai.Query;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Query;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Query> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Query;

    /**
     * Adds filters to a Genai.Query instance.
     *
     * @param filters
     *          The filters to be added. This should follow the same shape as #filters.
     * @param operator
     *          The operator to be used to join the filters. Defaults to 'OR'. If 'OR', the filters for each field are
     *          linked as `ORIGINAL_FILTERS || ADDED_FILTERS`. If 'AND', the filters are linked as
     *          `(ORIGINAL_FILTERS) && (ADDED_FILTERS)`.
     * @return A new Genai.Query object.
     */
    addFilters(filters: Map_Type<string, Array_Type<Genai.Query.SourceFilter>>, operator?: string = '\'OR\''): Genai.Query;

    /**
     * Function to transform a query's operators and its targets into a C3 Filter format.
     *
     * @param pathToSourceFile
     *        The path from the type on which the fetch or eval is being performed to {@link Genai.SourceFile}
     */
    toC3Filter(pathToSourceFile?: string): Filter;

    /**
     * Creates a {@link Genai.Query} from a string.
     * The string passed becomes the rawQuery field of the query
     *
     * @param s
     *         Raw query string entered by the user
     * @param queryType
     *         The type of query triggered by the user
     * @return for the given user string and query type
     */
    static fromString(s: string, queryType?: string = 'QUERY'): Genai.Query;

    /**
     * Serializes a query returning the #standaloneQuery field as a string
     */
    toString(): string;

    /**
     * Ensures that the query is valid and can be used to search (i.e. that no necessary fields are missing)
     */
    ensureValid(): Genai.Query;
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
