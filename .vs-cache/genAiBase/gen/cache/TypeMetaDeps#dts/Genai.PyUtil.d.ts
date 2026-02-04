// TypeScript definitions for the C3 type Genai.PyUtil

/**
 * A python-specific util type.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.PyUtil
 */
declare namespace Genai {
  export interface IPyUtil {
  }
}

/**
 * A python-specific util type.
 *
 * @remarks this represents a made instance of Genai.PyUtil
 */
declare namespace Genai {
  export class PyUtil extends Obj  {

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
    static fromJson(json: any): Genai.PyUtil | null;

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
    static fromJsonString(json: string): Genai.PyUtil | null;

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
    static fromXmlString(xml: string): Genai.PyUtil | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.PyUtil | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.PyUtil;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.PyUtil;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.PyUtil;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.PyUtil>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.PyUtil>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.PyUtil;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.PyUtil;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.PyUtil;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.PyUtil;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.PyUtil;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.PyUtil;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.PyUtil;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.PyUtil;

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
    withoutFieldAtPath(path: string): Genai.PyUtil;

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
    withoutField(field: string): Genai.PyUtil;

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
    withoutField(field: FieldType): Genai.PyUtil;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.PyUtil;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.PyUtil;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.PyUtil;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.PyUtil;

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
    defaultField(field: string): Genai.PyUtil;

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
    defaultField(field: FieldType): Genai.PyUtil;

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
    unsetField(field: string): Genai.PyUtil;

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
    unsetField(field: FieldType): Genai.PyUtil;

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
    removeField(field: string): Genai.PyUtil;

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
    removeField(field: FieldType): Genai.PyUtil;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.PyUtil;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.PyUtil;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.PyUtil;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.PyUtil;

    mergeJson(json: any): Genai.PyUtil;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.PyUtil;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.PyUtil;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.PyUtil>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.PyUtil> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.PyUtil> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.PyUtil>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.PyUtil> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.PyUtil> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.PyUtil> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.PyUtil>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.PyUtil>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.PyUtil;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.PyUtil;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.PyUtil;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.PyUtil;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.PyUtil;

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
    static make(fields: any, withDefaults?: boolean): Genai.PyUtil;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.PyUtil;

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
    afterMake(): Genai.PyUtil;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.PyUtil;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.PyUtil> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.PyUtil;

    /**
     * Gets the formatted stack trace from the caught error if possible, else returns the error message.
     * @param error
     *   The error to format.
     * @return The formatted stack trace or error message.
     */
    static formatError(error?: any): string;

    /**
     * Function to print a prettified version of the logs from the structured tools, splitting each log entry into a different section.
     * @param logs
     *           The logs to prettify.
     * @param indent
     *           The number of spaces to use for indentation.
     */
    static prettyPrintLogs(logs: any, indent?: number = '4'): void;

    /**
     * Function to naively calculates the number of tokens in a prompt. This function estimates tokens by dividing the prompt length by the
     * assumed token length. For example, each token is assumed to be 3 characters long.
     * @param prompt
     *           (str): The text whose tokens need to be counted.
     * @param tokenLength
     *           (int, optional): The length of each token. Defaults to 3.
     * @return - (int): The approximate number of tokens in the prompt.
     */
    static countPromptTokensNaively(prompt: string, tokenLength?: number = '3'): number | null;

    /**
     * Function to convert a string with {single braces} to {{double braces}}.
     * @param prompt - (str): The string having single braces.
     * @return - (str): Converted string with double braces, which can be utilized by `c3.Genai.Prompt`.
     */
    static buildPromptTemplateString(prompt: string): string;

    /**
     * Splits or truncates a prompt based on a maximum token limit.
     * If `truncate_prompt` is True, the prompt is truncated to
     * `max_tokens * token_length` characters and returned as a string.
     * Otherwise, the prompt is split into multiple chunks, each chunk not exceeding
     * `max_tokens` tokens. For more details on tokens and how to count them, see:
     * {@link https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them}
     *
     * @param prompt
     *           (str): The text to split or truncate.
     * @param promptTokenCount
     *           (int, optional): The number of tokens in the prompt. If provided, the function will not count the tokens in the prompt. Defaults to 0.
     * @param tokenLength
     *           (int, optional): The length of each token. Defaults to 3.
     * @param maxTokens
     *           (int, optional): The maximum number of tokens in each chunk. Defaults to 4096.
     * @param truncatePrompt
     *           (bool, optional): Whether to truncate the prompt to `max_tokens * token_length` characters if it exceeds the token limit. Defaults to False.
     * @return - (Union[List[str], str]): A list of strings if the prompt is split into multiple chunks, or a single string if the prompt is truncated.
     */
    static handleTextByMaxTokenLimit(prompt: string, promptTokenCount?: number = '0', tokenLength?: number = '3', maxTokens?: number = '4096', truncatePrompt?: boolean): Array_Type<string> | string;

    /**
     * Function to print a prettified version of the engine logs of a {@link Genai.Query.Result}
     * @param queryResult
     *           The query result to prettify the engine logs from.
     * @param indent
     *           The number of spaces to use for indentation.
     * @param chainResultKey
     *           Key of chainResult component to print.
     */
    static prettyPrintUnstructuredLogs(queryResult: Genai.Query.Result, indent?: number = '4', chainResultKey?: string): void;

    /**
     * Function to parse the engine logs of a {@link Genai.Query.Result} into a Pandas Series object
     * @param queryResult
     *           The query result to prettify the engine logs from.
     */
    static parseEngineLogs(queryResult: Genai.Query.Result): any;

    /**
     * Sets global variables that will be loaded when #importResourceFile is called.
     *
     * @param variables
     *        The variables to set based on the metadataPath value in the #importResourceFile call.
     *        E.g. if we want to load a global variable GLOBAL_VAR = 3, for metadataPath = "some/path.py", then the
     *        map should be {"/some/path.py": {"GLOBAL_VAR": 3}}.
     */
    static setGlobalVariables(variables: Map_Type<string, Map_Type<string, any>>): void;

    /**
     * Clears the global variables set by #setGlobalVariables
     */
    static clearGlobalVariables(): void;

    /**
     * Load the Python code from the specified metadata path into the current interpreter, returning all requested
     * names.
     *
     * To improve performance while experimenting in Jupyter, you can enable a local cache by setting the
     * env variable `GENAI_PYUTIL_IMPORT_ROOT` in your notebook/calling process.
     *
     * ```py
     * os.environ['GENAI_PYUTIL_IMPORT_ROOT'] = "/home/c3/jupyter_root_dir/code_cache"
     * ```
     *
     * Example usage:
     *
     * ```py
     * X, Y, Z = c3.Genai.PyUtil.importResourceFile("/genAiBase/resource/code/c3genai/alphabet.py", ["X", "Y", "Z"])
     * ```
     *
     * That call will load the `X`, `Y`, and `Z` globals from `alphabet.py` and assign them to X, Y, and Z. It is
     * logically equivalent to `from genAiBase.resource.code.c3genai.alphabet import X, Y, Z`
     *
     * If only one name is requested, its corresponding value will be returned alone (not in a tuple), so that it does not
     * need to be unpacked
     *
     * ```py
     * X = c3.Genai.PyUtil.importResourceFile("/genAiBase/resource/code/c3genai/alphabet.py", ["X"])
     * ```
     *
     * @param metadataPath
     *        The metadata path (in the current package or one it depends on) to load
     * @param namesToImport
     *        The names to import from the specified file. These must all be declared at the top/outer level of the file.
     *        That is, all names in `namesToImport` must be global within the file.
     * @param callerGlobals
     *        If you want all of the imported names to be available as globals in the calling scope/file, pass `globals()`
     *        for this parameter. Otherwise, the loaded names will be returned but not injected into the global scope.
     *
     * @return a tuple for all of the names in `namesToImport` in the same order. If only one name is requested, its
     *         corresponding value will be returned alone (not in a tuple), so that it does not need to be unpacked
     */
    static importResourceFile(metadataPath: string, namesToImport: Array_Type<string>, callerGlobals?: any): any | null;

    /**
     * Purges files cached by #importResourceFile from the GENAI_PYUTIL_IMPORT_ROOT directory.
     *
     * @param paths
     *        The list of metadata paths to purge
     * @param confirmPurgeAll
     *        If you want to purge the entire local cache, you should pass `confirmPurgeAll=True`
     */
    static purgeLocalResourceCache(paths?: Array_Type<string>, confirmPurgeAll?: boolean): void;

    /**
     * If the provided C3 logger is enabled for debug-level logging (i.e. `logger.isDebugEnabled()`), then `msgGenerator`
     * will be used to generate a message that will be debug logged. Useful to avoid calling potentially expensive
     * functions and/or generating very large strings for the log message when the logger is not debug enabled.
     */
    static loggerDebug(logger: any, msgGenerator: any): void;

    /**
     * Returns a json.JSONEncoder that can handle some of the non-json-serializable types that are used Genai code.
     * @param useTypedJson
     *        If true, C3 values will be encoded using toTypedJson instead of toJson. This is useful when saving/restoring
     *        C3 types/instances and not simply passing those values to a (non-type-aware) library/service.
     * @param maxRowsInDataFrame
     *        Maximum number of rows in dataframe
     */
    static jsonEncoder(useTypedJson?: boolean, maxRowsInDataFrame?: number = '10'): any;

    /**
     * Prints text in a given color & style. Default is a normal print.
     * To print a single line in multiple colors, use #prettify
     *
     * Examples:
     *
     * ```py
     * pprint = c3.Genai.PyUtil.prettyPrint
     * pprint("This text will be green and bold", color="green", style="bold")
     * pprint("This text will be red and underscore", color="red", style="underscore")
     * ```
     *
     * @param color
     *        Color of the text, one of (black, red, green, yellow, blue, magenta, cyan, white)
     * @param style
     *        Style of the text, one of (normal, bold, reversed, underscore)
     */
    static prettyPrint(text: string, color?: string, style?: string): void;

    /**
     * Generates new string coloring and styling text using ANSI codes. This can be used to print a single line in multiple colors.
     *
     * Examples:
     *
     * ```py
     * p = c3.Genai.PyUtil.prettity
     * f'{p("Hello", "black")} {p("dear", "red")} {p("friend", "green")}, {p("how", "yellow")} {p("are", "blue")} {p("you", "magenta")} {p("today", "cyan")} {p("?", "white")}'
     * >>> \x1b[30mHello\x1b[0m \x1b[31mdear\x1b[0m \x1b[32mfriend\x1b[0m, \x1b[33mhow\x1b[0m \x1b[34mare\x1b[0m \x1b[35myou\x1b[0m \x1b[36mtoday\x1b[0m \x1b[37m?\x1b[0m
     *
     * f'{p("I", "normal")} {p("am", "bold")} {p("great", "reversed")}, {p("thanks!", "underscore")}'
     * >>> I \x1b[1mam\x1b[0m \x1b[7mgreat\x1b[0m, \x1b[4mthanks!\x1b[0m
     * ```
     *
     * @param color
     *        Color of the text, one of (black, red, green, yellow, blue, magenta, cyan, white)
     * @param style
     *        Style of the text, one of (normal, bold, reversed, underscore)
     *
     * @return a string with the ANSI codes for colors and styles.
     */
    static prettify(text: string, color?: string, style?: string): string | null;

    /**
     * Replaces code references with code snippets in the content.
     *
     * @param content
     *        String from which code references needs to be replaced.
     * @param codeReferenceMap
     *        Dict contaning the mapping of code reference to code snippet
     *
     * @return a string with the code references replaced with code snippets.
     */
    static replaceCodeReference(content: string, codeReferenceMap?: any): string | null;

    /**
     * Returns the provided function in a wrapper that will write all input to and output from the wrapped function to the
     * specified file.
     *
     * @param func
     *        The function to wrap
     * @param filePath
     *        Where the input/output should be written
     *
     * @return the wrapped function
     */
    static logInputOutputWrapper(func: any, filePath: string): any;

    /**
     * Merges dictionary `dictionaryB` into dictionary `dictionaryA` recursively. If there is a conflict (i.e., the same key exists in both dictionaries
     * with different values), the values of `dictionaryA` are persisted. If the dictionaryA is empty, the dictionaryB is returned as is. If the dictionaryB is empty, the dictionaryA is returned as is.
     * If both dictionaries are empty, an empty dictionary is returned.
     *
     * @param dictionaryA
     *        The dictionary to merge into.
     * @param  dictionaryB
     *        The dictionary to merge from.
     *
     * @return The merged dictionary.
     */
    static mergeDict(dictionaryA?: Map_Type<string, any>, dictionaryB?: Map_Type<string, any>): Map_Type<string, any> | null;

    /**
     * Recursively flattens a nested dictionary and returns a dictionary where
     * keys are tuples representing the path to each original key, and values
     * are the corresponding depth of that key in the original dictionary.
     *
     * @param dictToFlatten
     *        The dictionary to flatten.
     * @param depth
     *        The current depth of the recursion to flatten the dictionary.
     *
     * @return A flattened dictionary with tuples as keys and depth as values.
     */
    static flattenDict(dictToFlatten: Map_Type<string, any>, depth?: number = '0'): Map_Type<string, any>;

    /**
     * Attempts to load tokenizer file (and optionally a model as well) from a zip on the file system.
     * Generally used in airgapped environments where we cannot reach out to Huggingface or other repositories to download over the internet.
     *
     * @param srcPath
     *        The file path to the tokenizer/model zip.
     * @param tokenizerOnly
     *        Boolean indicating whether we are only loading the tokenizer and nothing else, or loading tokenizer + model.
     *
     * @return dictionary containing the instantiated tokenizer class and model
     */
    static loadModelTokenizer(srcPath: string, tokenizerOnly?: boolean = 'true'): any;

    /**
     * Downloads from the remote location, unzips the data files
     *
     * @param zipUrl
     *           The url where the remote zip is persisted before downloading.
     * @param localRoot
     *           The local directory where the zip file will be downloaded.
     *           If not passed a tmp location will be created
     * @param dataDir
     *           The local directory into which to unzip the archive from zipUrl.
     *           If not passed a tmp location will be created
     * @param forceDownload
     *           Flag to specify whether force re-download even if data exist already.
     * @param pathPrefix
     *           If passed a tmp directory will be created with pathPrefix and used instead of localRoot
     * @param keepZip
     *           If true, the zip file will be kept after unzipping, otherwid the zip file will be deleted
     *           after unzipping.
     * @return the path of the directory if the zip was unzipped successfully.
     */
    static downloadAndUnzip(zipUrl: string, localRoot?: string, dataDir?: string, forceDownload?: boolean, pathPrefix?: string, keepZip?: boolean): string | null;

    /**
     * Read and return the source passages from the given file. Used to reduce memory load when reading large files.
     * @param srcFile
     *        The file to read the source passages from
     * @return the source passages
     */
    static readSourcePassages(srcFile: File): Array_Type<Genai.SourcePassage> | null;

    /**
     * Read and return the instances from the given file. Used to reduce memory load when reading large files.
     * @param srcFile
     *        The file to read the instances from
     * @param instanceType
     *        The type of the instances to read
     * @return the instances
     */
    static readInstancesFromFile(srcFile: File, instanceType: Type): Array_Type<Obj> | null;

    /**
     * Appends the {@link Genai.SourcePassage}s to the file provided in localFilePath
     * If no localFilePath is provided it creates a new file and returns the file path.
     *
     * @param passages
     *         {@link Genai.SourcePassage}s to append to the file
     * @param localFilePath
     *         Optional path of the file to append the passages. If none is specified, this will create a local file
     * @return the localFilePath containing the passages
     */
    static appendSourcePassagesToLocalFile(passages?: Array_Type<Genai.SourcePassage>, localFilePath?: string): string;

    /**
     * Loads the nltk sentence tokenizer if srcPath is provided. The downloaded file is stored in local file system and for subsequent
     * calls the data is returned from local file system.
     * Otherwise downloads the tokenizer from the public repository.
     *
     * @param srcPath
     *           Path to load the tokenizer from the srcPath. If not provided it will download from public repository i.e. `nltk.download()`
     * @param tokenizerMethod
     *           The name of the tokenizer function
     * @param forceDownload
     *           Flag to specify whether force re-download even if the file exists in local file system.
     * @param loadPerceptron
     *           If true, and the srcPath is not provided, this will also download perceptron from the public repo.
     * @return the dictionary containing nltk.data and tokenizer
     */
    static loadNltkTokenizer(srcPath?: string, tokenizerMethod?: string = '"sent_tokenize"', forceDownload?: boolean, loadPerceptron?: boolean): any;

    /**
     * Sanitizes the file name.
     *
     * @param fileName
     *            the source file name string.
     * @return string
     *            the santized file name after removing special chars.
     */
    static sanitizeFileName(fileName: string): string;

    /**
     * Get the destination url to upload the chunked image or table contents.
     *
     * @param srcFile
     *            the source file with the image or table contents.
     * @param srcUrl
     *            the source url of the chunked image or table contents.
     * @return string
     *            the destination url where the contents should be uploaded.
     */
    static getDestinationUrl(srcFile: Genai.SourceFile, srcUrl?: string): string;

    /**
     * Get the target url from {@link Genai.SourceFile#collection} if the collection exists otherwise create a file with name
     * 'sourceFilesWithoutCollection' and return its url.
     *
     * @param srcFile
     *            the source file from which the target url should be extracted.
     * @return string
     *            the target url
     */
    static getTargetUrlFromSourceFile(srcFile: Genai.SourceFile): string;

    /**
     * Upload the chunked data to the destination url and return the destination url.
     *
     * @param srcFile
     *            the source file with the image or table contents.
     * @param srcUrl
     *            the source url of the chunked image or table contents.
     * @param isImageData
     *            a boolean flag to indicate if the data is an image or table.
     * @return string
     *            the destination url where the contents should be uploaded.
     */
    static uploadChunkedData(srcFile: Genai.SourceFile, srcUrl: string, isImageData?: boolean): string;

    /**
     * Loads the spacy model from the zip file and returns the local path.
     * @param srcPath
     *           The url where the remote zip is persisted before downloading.
     * @param pathPrefix
     *           Creates a tmp directory with pathPrefix for the local path
     * @return the local path of the extracted zip
     */
    static loadSpacyModel(srcPath: string, pathPrefix: string): string;

    /**
     * Loads the Nougat model if {@link Genai.App.AirGapConfig#nougatZipPath} is set.
     * Otherwise it loads the pretrained model
     * @param modelName
     *           Name of the pretrained model to load
     * @return the dictionary containing the `NougatProcessor` and `VisionEncoderDecoderModel`
     */
    static loadNougatModel(modelName: string): any;

    /**
     * Loads tiktoken from file if {@link Genai.App.AirGapConfig#tableTextSplitterEncoderPath} is set,
     * Otherwise it loads the pretrained model
     * @param modelName
     *           Name of the model for which to generate the tokens
     * @param encodingName
     *           Alternatively, directly specify the tokenizer
     * @param modelPath
     *           The path to the model zip file if loading from file system
     * @return the native tiktoken encoder
     */
    static loadTiktokenTextSplitterWithAirgap(modelName?: string, encodingName?: string, modelPath?: string): any;

    /**
     * Download and unzip TATR from file if {@link Genai.App.AirGapConfig#tatrZipPath} is set,
     * Otherwise returns None indicating that the model is not available locally
     * @return the the local path of the TATR model if available, otherwise None
     */
    static getTatrAirgapDownloadPath(): string | null;

    /**
     * Runs a series of tasks in parallel, using python multithreading library.
     * @param tasks
     *    dictionary of task id to a tuple of c3.Lambda function and list of its arguments. For example, {"task_01": (lmbda_func, [arg1 ,arg2, ...])}
     * @param maxWorkers
     *    int to pass into max_workers parameter of multithreading executor declaration
     * @return a map of the task ID's to the task lambda's return result
     */
    static runLambdaTasksInParallel(tasks: any, maxWorkers?: number = '10'): any | null;

    /**
     * Convert the nested c3 type obj into corresponding nested python class instance,
     * also convert the c3 camel case fields into py snake cases.
     *
     * @param obj
     *           The nested c3 type obj to convert
     * @param classMapping
     *           The c3 type name to corresponding py class names.
     * @return the nested python class instance converted from c3 type obj.
     */
    static nestedC3TypeToPyObj(obj: Type, classMapping: any): any;

    /**
     * Convert the nested py obj into corresponding nested c3 type instance,
     * also convert the py snake cases fields into c3 camel case.
     *
     * @param obj
     *           The nested native py obj to convert
     * @param typeMapping
     *           The py class names to corresponding c3 types.
     * @return the nested c3 type instance converted from py obj.
     */
    static nestedPyObjToC3Type(obj: any, typeMapping: any): Type | null;

    /**
     * Cleanses a string by removing unwanted or problematic characters, including null bytes and unwanted keywords in translation configuration.
     *
     * @param content
     *           The input string from which to remove bad characters.
     * @param chunkerSpec
     *            A {@link Genai.SourceFile.ChunkerSpec} used to specify which chunker is used
     */
    static replaceBadChars(content: string, chunkerSpec?: Genai.SourceFile.ChunkerSpec): string;

    /**
     * From a seeded read-only retriever, fabricate the SourceCollection and SourceFiles
     * for the passage metadata.
     *
     * @param name
     *   The name of the retriever to fabricate the SourceCollection and SourceFiles for.
     * @param metadatas
     *   The metadata of the passages.
     */
    static populateSourceFilesForName(name: string, metadatas: Array_Type<any>): void;

    /**
     * Downloads the files from the remote location and returns the local path of the downloaded file.
     *
     * @param files
     *           The list of {@link Genai.SourceFile}s to download.
     * @param dir
     *           The local directory where the files should be downloaded.
     * @return a list of local paths of the downloaded files.
     */
    static downloadFilesBatch(files: Array_Type<Genai.SourceFile>, dir: string): Array_Type<string>;

    /**
     * Downloads the file from the remote location and returns the local path of the downloaded file.
     *
     * @param file
     *           The {@link Genai.SourceFile} to download.
     * @param dir
     *           The local directory where the file should be downloaded.
     * @return a local path of the downloaded file.
     */
    static downloadFile(file: Genai.SourceFile, dir: string): string;

    /**
     * List all {@link Engine}s on the current node.
     * @param allNodes
     *     If true, list engines on all nodes in the {@link App}.
     */
    static listAllEngines(allNodes?: boolean): Array_Type<Engine<Engine.Deployment, Engine.DeploySpec>> | null;

    /**
     * Call {@link Engine#restart} on all running {@link Engine}s on the current node.
     * @param allNodes
     *     If true, restart engines on all nodes in the {@link App}.
     */
    static restartAllEngines(allNodes?: boolean): Array_Type<Engine<Engine.Deployment, Engine.DeploySpec>> | null;

    /**
     * Call {@link Engine#terminate} on all running {@link Engine}s on the current node.
     * @param allNodes
     *     If true, only terminate engines on all nodes in the {@link App}.
     */
    static terminateAllEngines(allNodes?: boolean): Array_Type<Engine<Engine.Deployment, Engine.DeploySpec>> | null;

    /**
     * Download a huggingface model, zip it, and upload it to the specified mount
     * in <mountName>/huggingface/models.
     *
     * @param modelName
     *     The Huggingface model to persist
     * @param revision
     *     The revision of the model to persist
     * @param endpoint
     *     The endpoint to use for the Huggingface API, if using a mirror
     * @param mountName
     *     The mount in which to upload the model
     * @param transformersModuleNames
     *     The list of transformers class names to initialize for the model before creating the archive.
     *     This ensures that for cases where we need to call `TableTransformerForObjectDetection.from_pretrained`
     *     or similar, the files needed for model the model, while `snapshot_download` only downloads the files
     *     needed for AutoModel.from_pretrained.
     * @return where the file was uploaded
     */
    static archiveHuggingfaceModel(modelName: string, revision?: string, endpoint?: string, mountName?: string = '"datasets"', transformersModuleNames?: Array_Type<string>): string | null;

    /**
     * Adds c3 to the builtin.
     */
    static setC3(): void;
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
