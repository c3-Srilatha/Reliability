// TypeScript definitions for the C3 type Genai.Llm.AwsBedrock

/**
 * Interface for Genai.Llm.AwsBedrock.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Llm.AwsBedrock
 */
declare namespace Genai.Llm {
  export interface IAwsBedrock {

    /**
     * The unique and required name of this instance.
     */
    name: string;

    /**
     * The unique and required id of this instance.
     */
    id: string;

    /**
     * Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
     *
     * For internal use only!
     *
     * This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
     * Value in config framework may be missing if the engine is been {@link #terminate terminated}.
     */
    _deploymentCache?: any;

    /**
     * Errors that are captured during engine start
     */
    _onStartError?: string;

    /**
     * The type of LLM being used.
     */
    llmType: string;
  }
}

/**
 * Interface for Genai.Llm.AwsBedrock.
 *
 * @remarks this represents a made instance of Genai.Llm.AwsBedrock
 */
declare namespace Genai.Llm {
  export class AwsBedrock extends Obj  {

    /**
     * The unique and required name of this instance.
     */
    readonly name: string;
    withName(name: string): Genai.Llm.AwsBedrock;

    /**
     * The unique and required name of this instance.
     */
    static readonly name: string;

    /**
     * The unique and required id of this instance.
     */
    readonly id: string;
    withId(id: string): Genai.Llm.AwsBedrock;

    /**
     * The unique and required id of this instance.
     */
    static readonly id: string;

    /**
     * Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
     *
     * For internal use only!
     *
     * This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
     * Value in config framework may be missing if the engine is been {@link #terminate terminated}.
     */
    readonly _deploymentCache?: any;
    with_deploymentCache(_deploymentCache: any | null): Genai.Llm.AwsBedrock;

    /**
     * Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
     *
     * For internal use only!
     *
     * This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
     * Value in config framework may be missing if the engine is been {@link #terminate terminated}.
     */
    static readonly _deploymentCache?: any;

    /**
     * Errors that are captured during engine start
     */
    readonly _onStartError?: string;
    with_onStartError(_onStartError: string | null): Genai.Llm.AwsBedrock;

    /**
     * Errors that are captured during engine start
     */
    static readonly _onStartError?: string;

    /**
     * The type of LLM being used.
     */
    readonly llmType: string;
    withLlmType(llmType: string): Genai.Llm.AwsBedrock;

    /**
     * The type of LLM being used.
     */
    static readonly llmType: string;

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
    static fromJson(json: any): Genai.Llm.AwsBedrock | null;

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
    static fromJsonString(json: string): Genai.Llm.AwsBedrock | null;

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
    static fromXmlString(xml: string): Genai.Llm.AwsBedrock | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Llm.AwsBedrock | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Llm.AwsBedrock;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    static replaceType(old: Type, new_: Type): Genai.Llm.AwsBedrock;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Llm.AwsBedrock>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Llm.AwsBedrock>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Llm.AwsBedrock>;

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
    static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Llm.AwsBedrock>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    static mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

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
    static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Llm.AwsBedrock;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    static validateObj(): Genai.Llm.AwsBedrock;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Llm.AwsBedrock;

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
    static withField(field: string, value: any, doNotConvert?: boolean): Genai.Llm.AwsBedrock;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Llm.AwsBedrock;

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
    static withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Llm.AwsBedrock;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Llm.AwsBedrock;

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
    static withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Llm.AwsBedrock;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Llm.AwsBedrock;

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
    static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Llm.AwsBedrock;

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
    withoutFieldAtPath(path: string): Genai.Llm.AwsBedrock;

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
    static withoutFieldAtPath(path: string): Genai.Llm.AwsBedrock;

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
    withoutField(field: string): Genai.Llm.AwsBedrock;

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
    static withoutField(field: string): Genai.Llm.AwsBedrock;

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
    withoutField(field: FieldType): Genai.Llm.AwsBedrock;

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
    static withoutField(field: FieldType): Genai.Llm.AwsBedrock;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Llm.AwsBedrock;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    static withoutFields(fields: Array_Type<string>): Genai.Llm.AwsBedrock;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Llm.AwsBedrock;

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
    static withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Llm.AwsBedrock;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Llm.AwsBedrock;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    static withoutSecretFields(): Genai.Llm.AwsBedrock;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Llm.AwsBedrock;

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
    static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Llm.AwsBedrock;

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
    defaultField(field: string): Genai.Llm.AwsBedrock;

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
    static defaultField(field: string): Genai.Llm.AwsBedrock;

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
    defaultField(field: FieldType): Genai.Llm.AwsBedrock;

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
    static defaultField(field: FieldType): Genai.Llm.AwsBedrock;

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
    unsetField(field: string): Genai.Llm.AwsBedrock;

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
    static unsetField(field: string): Genai.Llm.AwsBedrock;

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
    unsetField(field: FieldType): Genai.Llm.AwsBedrock;

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
    static unsetField(field: FieldType): Genai.Llm.AwsBedrock;

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
    removeField(field: string): Genai.Llm.AwsBedrock;

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
    static removeField(field: string): Genai.Llm.AwsBedrock;

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
    removeField(field: FieldType): Genai.Llm.AwsBedrock;

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
    static removeField(field: FieldType): Genai.Llm.AwsBedrock;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Llm.AwsBedrock;

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
    static mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Llm.AwsBedrock;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Llm.AwsBedrock;

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
    static mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Llm.AwsBedrock;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Llm.AwsBedrock;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    static mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Llm.AwsBedrock;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Llm.AwsBedrock;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    static mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Llm.AwsBedrock;

    mergeJson(json: any): Genai.Llm.AwsBedrock;

    static mergeJson(json: any): Genai.Llm.AwsBedrock;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Llm.AwsBedrock;

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
    static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Llm.AwsBedrock;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    static sumObj(other: Obj, deep?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Llm.AwsBedrock>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonArray(): Array_Type<Genai.Llm.AwsBedrock>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Llm.AwsBedrock> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Llm.AwsBedrock> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Llm.AwsBedrock>;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonSet(): Set_Type<Genai.Llm.AwsBedrock>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Llm.AwsBedrock> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Llm.AwsBedrock> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Llm.AwsBedrock> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Llm.AwsBedrock>;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    static toBuilder(): ObjBuilder<Genai.Llm.AwsBedrock>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Llm.AwsBedrock>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Llm.AwsBedrock;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Llm.AwsBedrock;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Llm.AwsBedrock;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Llm.AwsBedrock;

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
    static make(fields: any, withDefaults?: boolean): Genai.Llm.AwsBedrock;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string): Genai.Llm.AwsBedrock | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Llm.AwsBedrock;

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
    afterMake(): Genai.Llm.AwsBedrock;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static afterMake(): Genai.Llm.AwsBedrock;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Llm.AwsBedrock;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Llm.AwsBedrock> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Llm.AwsBedrock;

    /**
     * @return key field type.
     */
    static keyFieldType(): FieldType;

    /**
     * @return key field value.
     */
    keyFieldValue(): string | null;

    /**
     * @return key field value.
     */
    static keyFieldValue(): string | null;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    singletonMap(): Map_Type<string, WithKey>;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    static singletonMap(): Map_Type<string, WithKey>;

    /**
     * Build the canonical string representation of this instance. This must be implemented to provide serialization.
     *
     * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
     * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
     *
     * @see #fromString
     */
    toString(): string | null;

    /**
     * Build the canonical string representation of this instance. This must be implemented to provide serialization.
     *
     * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
     * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
     *
     * @see #fromString
     */
    static toString(): string | null;

    /**
     * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
     * provide deserialization.
     *
     * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
     * of called-on type, but perhaps not the same type.
     *
     * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
     *
     * @see #toString
     */
    static fromString(s: string): Genai.Llm.AwsBedrock | null;

    /**
     * @return single instance of this Nameable type by name. Note that if this type is also Cached then it will
     * retrieve instance from cache.
     */
    static forName(name: string, failIfMissing?: boolean): Genai.Llm.AwsBedrock | null;

    /**
     * @return single instance of this Identified type by id.
     */
    static forId(id: string, failIfMissing?: boolean): Genai.Llm.AwsBedrock | null;

    /**
     * @return lambda to calculate target {@link Server server node} for {@link Action action} called on this
     * {@link Engine}.
     *
     * Used internally for dispatching.
     * @see #targetNode
     */
    static targetNodeFunc(methodType: MethodType): λFunction<Map_Type<string, any> | null, string> | null;

    /**
     * @return lambda to calculate target {@link App.ThreadPool thread pool} for {@link Action action} called on this
     * {@link Engine}.
     *
     * Used internally for dispatching.
     * @see #targetThreadPool
     */
    static targetThreadPoolFunc(methodType: MethodType): λFunction<Map_Type<string, any> | null, string> | null;

    /**
     * Deploys new {@link Engine engine} based on spec.
     *
     * If current node cannot run actions for the {@link Engine engine}, such actions will be routed to
     * {@link #targetNodes} for execution.
     *
     * You can use advanced options to control spinning up of {@link Engine engine} on {@link App.Node nodes}:
     * - Use {@link Engine.DeploySpec#autoStart} to control whether {@link Engine engine} should be started
     *   automatically on all {@link App.Node nodes} that match filter (See {@link Engine.DeploySpec#nodeRole nodeRole},
     *   {@link Engine.DeploySpec#altNodeRoles}, {@link Engine.DeploySpec#nodePools}).
     * - Use {@link Engine.DeploySpec#failActionIfEngineNotReady} to control behavior of {@link Action actions} routed to
     *   {@link #isHealthy unhealthy} {@link Engine engine}.
     * - Use {@link Engine.DeploySpec#initializingNodeAvoidanceDuration} to avoid routing of {@link Action actions} to newly added
     *   {@link App.Node nodes}. This helps to avoid routing of {@link Action actions} to {@link Engine engines} that
     *   have not yet finished initialization.
     *
     * @see activate
     * @see deactivate
     * @see Engine.Controller
     */
    static deploy(spec: Engine.DeploySpec): Genai.Llm.AwsBedrock;

    /**
     * Activate deployment of this engine
     *
     * @see Engine.DeploySpec#inactive
     */
    activate(): void;

    /**
     * Activate deployment of this engine
     *
     * @see Engine.DeploySpec#inactive
     */
    static activate(): void;

    /**
     * Deactivate deployment of this engine
     *
     * @see Engine.DeploySpec#inactive
     */
    deactivate(): void;

    /**
     * Deactivate deployment of this engine
     *
     * @see Engine.DeploySpec#inactive
     */
    static deactivate(): void;

    /**
     * Current state of this engine.
     */
    state(): string | null;

    /**
     * Current state of this engine.
     */
    static state(): string | null;

    static threadPoolsSummary(engineTypeName: string, id: string): Engine.Summary | null;

    /**
     * Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
     */
    summaryHelper(): Array_Type<Engine.Summary>;

    /**
     * Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
     */
    static summaryHelper(): Array_Type<Engine.Summary>;

    /**
     * Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
     */
    summary(): Data;

    /**
     * Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
     */
    static summary(): Data;

    /**
     * Return summary information about current state of this {@link Engine} deployment on current {@link #targetNodes node}.
     */
    summarizeInstance(): Engine.Summary;

    /**
     * Return summary information about current state of this {@link Engine} deployment on current {@link #targetNodes node}.
     */
    static summarizeInstance(): Engine.Summary;

    /**
     * Return {@link App.Node.Thread.Info} for each {@link App.Node.Thread thread} that are running on given
     * {@link App.Node node} and belong to this {@link Engine engine} deployment.
     */
    summarizeThreads(node: string): Data;

    /**
     * Return {@link App.Node.Thread.Info} for each {@link App.Node.Thread thread} that are running on given
     * {@link App.Node node} and belong to this {@link Engine engine} deployment.
     */
    static summarizeThreads(node: string): Data;

    /**
     * @return list of errors that this {@link Engine} deployment has.
     */
    errors(): Array_Type<string> | null;

    /**
     * @return list of errors that this {@link Engine} deployment has.
     */
    static errors(): Array_Type<string> | null;

    /**
     * @return true if the {@link Engine} instance is started.
     */
    isRunning(): boolean;

    /**
     * @return true if the {@link Engine} instance is started.
     */
    static isRunning(): boolean;

    /**
     * @return true if the {@link Engine} instance is ready to serve requests.
     */
    isHealthy(): boolean;

    /**
     * @return true if the {@link Engine} instance is ready to serve requests.
     */
    static isHealthy(): boolean;

    /**
     * @return true if the {@link Engine} instance specified by name is ready to serve requests.
     */
    static isHealthy(engineType: string, name: string): boolean;

    /**
     * @return true if the {@link Engine} instance is stopped.
     */
    isStopped(): boolean;

    /**
     * @return true if the {@link Engine} instance is stopped.
     */
    static isStopped(): boolean;

    /**
     * Returns {@link Engine.Deployment} configuration for current {@link Engine}.
     *
     * If {@link Engine.Deployment} was removed from the config framework will return configuration with which the
     * {@link Engine} was deployed.
     */
    deployment(): Genai.Llm.EngineDeployment;

    /**
     * Returns {@link Engine.Deployment} configuration for current {@link Engine}.
     *
     * If {@link Engine.Deployment} was removed from the config framework will return configuration with which the
     * {@link Engine} was deployed.
     */
    static deployment(): Genai.Llm.EngineDeployment;

    /**
     * Returns {@link Engine.Deployment} configuration for current {@link Engine} based on config value.
     *
     * May be `null` if {@link Engine} is stopping. Use {@link #deployment} instead.
     */
    configuredDeployment(): Genai.Llm.EngineDeployment;

    /**
     * Returns {@link Engine.Deployment} configuration for current {@link Engine} based on config value.
     *
     * May be `null` if {@link Engine} is stopping. Use {@link #deployment} instead.
     */
    static configuredDeployment(): Genai.Llm.EngineDeployment;

    /**
     * @return deployment type for this engine
     */
    static deploymentType(): Type<<Genai.Llm.EngineDeployment>>;

    /**
     * @return deployment spec for this engine
     */
    static deploySpecType(): Type<<Engine.DeploySpec>>;

    /**
     * Restarts this engine
     */
    restart(): Genai.Llm.AwsBedrock;

    /**
     * Restarts this engine
     */
    static restart(): Genai.Llm.AwsBedrock;

    /**
     * Starts {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
     *
     * Automatically called first time any action is called on this {@link Engine} instance or by
     * {@link Engine.Controller} if {@link Engine.Deployment#autoStart} is `true`.
     *
     * Call to method idempotent and will return immediately if engine is {@link Engine.State.RUNNING}.
     *
     * If called from many threads simultaneously, calls will be blocked until some thread does start {@link Engine}.
     *
     * If start makes calls to other engines then expectation is that potential calls back from that engine into this one
     * will succeed.
     *
     * @param waitForReady If unset or `false` will return `null` immediately, without waiting for engine to be fully
     *           started or ready.
     * @param spec
     *           Wait specification that will be used in case waitForReady is set to `true`.
     * @return `null` if not waiting for ready and ready instance of the {@link Engine} otherwise.
     */
    start(waitForReady?: boolean, spec?: WaitableSpec): Genai.Llm.AwsBedrock | null;

    /**
     * Starts {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
     *
     * Automatically called first time any action is called on this {@link Engine} instance or by
     * {@link Engine.Controller} if {@link Engine.Deployment#autoStart} is `true`.
     *
     * Call to method idempotent and will return immediately if engine is {@link Engine.State.RUNNING}.
     *
     * If called from many threads simultaneously, calls will be blocked until some thread does start {@link Engine}.
     *
     * If start makes calls to other engines then expectation is that potential calls back from that engine into this one
     * will succeed.
     *
     * @param waitForReady If unset or `false` will return `null` immediately, without waiting for engine to be fully
     *           started or ready.
     * @param spec
     *           Wait specification that will be used in case waitForReady is set to `true`.
     * @return `null` if not waiting for ready and ready instance of the {@link Engine} otherwise.
     */
    static start(waitForReady?: boolean, spec?: WaitableSpec): Genai.Llm.AwsBedrock | null;

    doStart(): Genai.Llm.AwsBedrock;

    static doStart(): Genai.Llm.AwsBedrock;

    /**
     * Stops {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
     *
     * Automatically called as part of C3 {@link App.Node} shutdown or by {@link Engine.Controller} if
     * {@link Engine.deployment deployment} {@link #terminate terminated} or {@link #deactivate deactivated}.
     *
     * This is where preparation for shutdown should happen and this is when this Engine should stop initiating any new
     * root actions to other Engines. E.g. all monitoring threads started by this Engine should be stopped here.
     *
     * Note that #stop will be called before #shutdown and expectation is that even after stop other methods of the engine
     * still continue to work. E.g. if Db.Engine is stopped it should still continue to process requests (because
     * another engine using Db.Engine may still be running).
     *
     * If stop fails, the graceful shutdown on C3 {@link App.Node} will be aborted.
     */
    stop(spec?: Engine.StopSpec): void;

    /**
     * Stops {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
     *
     * Automatically called as part of C3 {@link App.Node} shutdown or by {@link Engine.Controller} if
     * {@link Engine.deployment deployment} {@link #terminate terminated} or {@link #deactivate deactivated}.
     *
     * This is where preparation for shutdown should happen and this is when this Engine should stop initiating any new
     * root actions to other Engines. E.g. all monitoring threads started by this Engine should be stopped here.
     *
     * Note that #stop will be called before #shutdown and expectation is that even after stop other methods of the engine
     * still continue to work. E.g. if Db.Engine is stopped it should still continue to process requests (because
     * another engine using Db.Engine may still be running).
     *
     * If stop fails, the graceful shutdown on C3 {@link App.Node} will be aborted.
     */
    static stop(spec?: Engine.StopSpec): void;

    /**
     * Called as part of C3 App Node shutdown. Should free up all allocated resources. This function will not wait to
     * drain the queues and will interrupt currently running actions.
     */
    shutdown(): void;

    /**
     * Called as part of C3 App Node shutdown. Should free up all allocated resources. This function will not wait to
     * drain the queues and will interrupt currently running actions.
     */
    static shutdown(): void;

    static stopEngineOnNode(engineName: string, spec?: Engine.StopSpec): boolean;

    /**
     * Optional callback that will be invoked after {@link #terminate}. Allows to do any additional cleanup that is
     * required for the engine.
     *
     * @param spec - spec that was passed to {@link #deploy}
     * @return spec that will be used for {@link #deploy}
     */
    afterTerminate(spec?: Engine.StopSpec): void;

    /**
     * Optional callback that will be invoked after {@link #terminate}. Allows to do any additional cleanup that is
     * required for the engine.
     *
     * @param spec - spec that was passed to {@link #deploy}
     * @return spec that will be used for {@link #deploy}
     */
    static afterTerminate(spec?: Engine.StopSpec): void;

    /**
     * Terminates the engine. This will remove the {@link Engine.Deployment} and stop all running instances of the
     * {@link Engine}.
     *
     * @see #stop
     */
    terminate(spec?: Engine.StopSpec): void;

    /**
     * Terminates the engine. This will remove the {@link Engine.Deployment} and stop all running instances of the
     * {@link Engine}.
     *
     * @see #stop
     */
    static terminate(spec?: Engine.StopSpec): void;

    /**
     * Update {@link Engine} instance to match {@link #deployment}.
     *
     * Will take no effect if {@link #deployment} stays the same. Usually be called from {@link Engine.Controller}.
     *
     * @see Engine.Controller
     */
    update(): void;

    /**
     * Update {@link Engine} instance to match {@link #deployment}.
     *
     * Will take no effect if {@link #deployment} stays the same. Usually be called from {@link Engine.Controller}.
     *
     * @see Engine.Controller
     */
    static update(): void;

    /**
     * call `action` on a specific engine
     */
    call(action: Lambda<function(engine: Genai.Llm.AwsBedrock): T | null>): T | null;

    /**
     * call `action` on a specific engine
     */
    static call(action: Lambda<function(engine: Genai.Llm.AwsBedrock): T | null>): T | null;

    /**
     * Optional callback that will be invoked every time engine is started on an {@link App.Node}.
     * This callback is called outside of engine's dedicated ThreadPool, once per {@link App.Node}.
     *
     * @return engine with initialized field, or unmodified object.
     *
     * @see #start
     * @see #onEngineThreadStart
     */
    onStart(): Genai.Llm.AwsBedrock;

    /**
     * Optional callback that will be invoked every time engine is started on an {@link App.Node}.
     * This callback is called outside of engine's dedicated ThreadPool, once per {@link App.Node}.
     *
     * @return engine with initialized field, or unmodified object.
     *
     * @see #start
     * @see #onEngineThreadStart
     */
    static onStart(): Genai.Llm.AwsBedrock;

    /**
     * Optional callback that will be invoked every time engine is stopped on an {@link App.Node}.
     *
     * Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
     * {@link #deployment} may be already removed from the config framework
     *
     * @see #stop
     * @see #terminate
     * @see #onEngineThreadStop
     */
    onStop(): void;

    /**
     * Optional callback that will be invoked every time engine is stopped on an {@link App.Node}.
     *
     * Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
     * {@link #deployment} may be already removed from the config framework
     *
     * @see #stop
     * @see #terminate
     * @see #onEngineThreadStop
     */
    static onStop(): void;

    /**
     * Optional callback that will be invoked from any new thread this Engine is used from.
     *
     * Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
     *
     * @see #start
     * @see #onStart
     */
    onEngineThreadStart(): void;

    /**
     * Optional callback that will be invoked from any new thread this Engine is used from.
     *
     * Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
     *
     * @see #start
     * @see #onStart
     */
    static onEngineThreadStart(): void;

    /**
     * Optional callback that will be invoked from thread in which this engine was used when thread terminates.
     *
     * Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
     *
     * Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
     * {@link #deployment} may be already removed from the config framework
     *
     * @see #stop
     * @see #terminate
     * @see #onStop
     */
    onEngineThreadStop(): void;

    /**
     * Optional callback that will be invoked from thread in which this engine was used when thread terminates.
     *
     * Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
     *
     * Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
     * {@link #deployment} may be already removed from the config framework
     *
     * @see #stop
     * @see #terminate
     * @see #onStop
     */
    static onEngineThreadStop(): void;

    /**
     * Optional callback that will be invoked from {@link #update} if config changed.
     *
     * Called once per {@link App.Node}.
     *
     * @see #update
     */
    onUpdate(oldDeployment: Genai.Llm.EngineDeployment): void;

    /**
     * Optional callback that will be invoked from {@link #update} if config changed.
     *
     * Called once per {@link App.Node}.
     *
     * @see #update
     */
    static onUpdate(oldDeployment: Genai.Llm.EngineDeployment): void;

    /**
     * Returns `true` if engine can be started on provided `nodeId`.
     *
     * @see #targetNodes.
     */
    canRunOnNode(nodeId: string): boolean;

    /**
     * Returns `true` if engine can be started on provided `nodeId`.
     *
     * @see #targetNodes.
     */
    static canRunOnNode(nodeId: string): boolean;

    /**
     * Optional callback that will be invoked at the beginning of {@link #deploy}. Allows to modify spec before it's used
     * for deployment.
     *
     * @param spec - spec that was passed to {@link #deploy}
     * @return spec that will be used for {@link #deploy}
     */
    static beforeDeploy(spec: Engine.DeploySpec): Engine.DeploySpec;

    /**
     * Converts given spec to the configs that will be seeded during engine's deployment.
     *
     * @param spec - spec that was passed to {@link #deploy}
     * @return List of configs that needs to be seeded.
     */
    static specToConfigs(spec: Engine.DeploySpec): Array_Type<Config>;

    /**
     * Internal method that is used to identify target node for calling this {@link Engine}.
     *
     * THis implementation will try to use current node if it's in list of {@link targetNodes} or will use
     * {@link App#availableNode some available} {@link App.Node} from {@link #targetNodes}.
     *
     * Sub-types can override this logic if customization is needed.
     * Method return `null` if no dispatching is needed.
     */
    targetNode(): App.Node | null;

    /**
     * Internal method that is used to identify target node for calling this {@link Engine}.
     *
     * THis implementation will try to use current node if it's in list of {@link targetNodes} or will use
     * {@link App#availableNode some available} {@link App.Node} from {@link #targetNodes}.
     *
     * Sub-types can override this logic if customization is needed.
     * Method return `null` if no dispatching is needed.
     */
    static targetNode(): App.Node | null;

    /**
     * Internal method that is used to query all target node for this Engine; effectively all nodes in #targetNodePools.
     *
     * @param excludeMe
     *           If set to `true` list will not include current app node where this action is called from.
     * @param alwaysConstruct
     *           If set to `true` method returns all {@link App.Node nodes} where this {@link Engine} can be executed
     *           even if it can be executed on all {@link App.Node nodes} within the {@link App}.
     * @return list of {@link App.Node nodes} in which this {@link Engine} can run. If `alwaysConstruct=false` and engine
     *         can be executed on all {@link App.Node nodes} within the {@link App}.
     */
    targetNodes(excludeMe?: boolean, alwaysConstruct?: boolean): Array_Type<App.Node> | null;

    /**
     * Internal method that is used to query all target node for this Engine; effectively all nodes in #targetNodePools.
     *
     * @param excludeMe
     *           If set to `true` list will not include current app node where this action is called from.
     * @param alwaysConstruct
     *           If set to `true` method returns all {@link App.Node nodes} where this {@link Engine} can be executed
     *           even if it can be executed on all {@link App.Node nodes} within the {@link App}.
     * @return list of {@link App.Node nodes} in which this {@link Engine} can run. If `alwaysConstruct=false` and engine
     *         can be executed on all {@link App.Node nodes} within the {@link App}.
     */
    static targetNodes(excludeMe?: boolean, alwaysConstruct?: boolean): Array_Type<App.Node> | null;

    /**
     * Internal method that is used to identify target node-pools for this Engine; by default it'll use
     * Engine.Deployment#nodeRole or Engine.Deployment#nodePools but sub-types can override this logic
     *
     * Method returns null or empty array if {@link Engine} can run on any {@link App.Node}.
     */
    targetNodePools(): Array_Type<App.NodePool> | null;

    /**
     * Internal method that is used to identify target node-pools for this Engine; by default it'll use
     * Engine.Deployment#nodeRole or Engine.Deployment#nodePools but sub-types can override this logic
     *
     * Method returns null or empty array if {@link Engine} can run on any {@link App.Node}.
     */
    static targetNodePools(): Array_Type<App.NodePool> | null;

    /**
     * Returns {@link App.Node.ThreadPool} responsible for running actions for this {@link Engine},
     * `null` if {@link Engine.Deployment#dedicatedThreadPool} is `false`.
     *
     * @see Engine.Deployment#dedicatedThreadPool
     */
    targetThreadPool(): App.Node.ThreadPool | null;

    /**
     * Returns {@link App.Node.ThreadPool} responsible for running actions for this {@link Engine},
     * `null` if {@link Engine.Deployment#dedicatedThreadPool} is `false`.
     *
     * @see Engine.Deployment#dedicatedThreadPool
     */
    static targetThreadPool(): App.Node.ThreadPool | null;

    /**
     * List {@link Engine engines} {@lik #deploy deployed} in an {@link App}.
     *
     * @see: #deploy
     * @see: #terminate
     */
    static list(): Array_Type<Genai.Llm.AwsBedrock> | null;

    /**
     * Returns {@link AppId id} of an {@link App} in which this {@link Engine.Deployment} is running.
     */
    appId(): string;

    /**
     * Returns {@link AppId id} of an {@link App} in which this {@link Engine.Deployment} is running.
     */
    static appId(): string;

    /**
     * Waits for the deployment to become ready across all nodes. Uses {@link #isReadyOnAllNodes} to make the check.
     *
     * This wait will complete only if there at least one node assigned to the engine.
     */
    waitForDeployment(waitSpec?: WaitSpec): boolean;

    /**
     * Waits for the deployment to become ready across all nodes. Uses {@link #isReadyOnAllNodes} to make the check.
     *
     * This wait will complete only if there at least one node assigned to the engine.
     */
    static waitForDeployment(waitSpec?: WaitSpec): boolean;

    /**
     * Returns true if all running nodes for the engine are healthy.
     *
     * If no nodes assigned to the engine returns `false`.
     */
    isReadyOnAllNodes(): boolean;

    /**
     * Returns true if all running nodes for the engine are healthy.
     *
     * If no nodes assigned to the engine returns `false`.
     */
    static isReadyOnAllNodes(): boolean;

    /**
     * Validates that all resources required by the engine are available.
     * If the node that runs the engine does not have the required resources, eg: GPUs specified in the HardwareProfile
     * of NodePool, the engine will not start and the error will be added to the engine's error list and are available
     * via {@link #summary}.
     */
    validateOnStart(): void;

    /**
     * Validates that all resources required by the engine are available.
     * If the node that runs the engine does not have the required resources, eg: GPUs specified in the HardwareProfile
     * of NodePool, the engine will not start and the error will be added to the engine's error list and are available
     * via {@link #summary}.
     */
    static validateOnStart(): void;

    /**
     * @return the default instance to be used when member functions are called on this type. E.g.
     *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
     *         instance is a singleton or not.
     */
    static inst(): Genai.Llm.AwsBedrock;

    /**
     * Returns all handlers that can be used for requests
     */
    static allHandlers(): Array_Type<Genai.Llm.AwsBedrock> | null;

    /**
     * Stops all running handlers
     */
    static stopAllHandlers(): Array_Type<Genai.Llm.AwsBedrock> | null;

    /**
     * Generates the response from the LLM.
     * @param prompt
     *           If prompt {@link Genai.Prompt}, it is assumed to be a user query to be sent to the LLM.
     *           If prompt is a json, it is expected to be an array of "messages" which can include message history in addition to the latest query.
     *           Messages should be in the format described on {@link https://docs.litellm.ai/docs/completion/input#properties-of-messages}. For example:
     *           [
     *             {
     *              "role": "user",
     *              "content": "provide and execute code to print \"Hello world!\", and describe the output"
     *             },
     *             {
     *              "role": "assistant",
     *              "content": "print(\"Hello world!\")"
     *             },
     *             {
     *               "role": "assistant",
     *               "content": "Hello world!"
     *             }
     *           ]
     * @param llmKwargs
     *           Keyword arguments to pass to the model's interface.
     * @return a string
     */
    generateResponse(prompt?: Genai.Prompt | Array_Type<any>, llmKwargs: any): string;

    /**
     * Generates the response from the LLM.
     * @param prompt
     *           If prompt {@link Genai.Prompt}, it is assumed to be a user query to be sent to the LLM.
     *           If prompt is a json, it is expected to be an array of "messages" which can include message history in addition to the latest query.
     *           Messages should be in the format described on {@link https://docs.litellm.ai/docs/completion/input#properties-of-messages}. For example:
     *           [
     *             {
     *              "role": "user",
     *              "content": "provide and execute code to print \"Hello world!\", and describe the output"
     *             },
     *             {
     *              "role": "assistant",
     *              "content": "print(\"Hello world!\")"
     *             },
     *             {
     *               "role": "assistant",
     *               "content": "Hello world!"
     *             }
     *           ]
     * @param llmKwargs
     *           Keyword arguments to pass to the model's interface.
     * @return a string
     */
    static generateResponse(prompt?: Genai.Prompt | Array_Type<any>, llmKwargs: any): string;

    /**
     * Generates the streamed response from the LLM.
     * @param prompt
     *           If prompt is a {@link Genai.Prompt}, it is assumed to be a user query to be sent to the LLM.
     *           If prompt is a json, it is expected to be an array of "messages" which can include message history in addition to the latest query.
     *           Messages should be in the format described on {@link https://docs.litellm.ai/docs/completion/input#properties-of-messages}. For example:
     *           [
     *             {
     *              "role": "user",
     *              "content": "provide and execute code to print \"Hello world!\", and describe the output"
     *             },
     *             {
     *              "role": "assistant",
     *              "content": "print(\"Hello world!\")"
     *             },
     *             {
     *               "role": "assistant",
     *               "content": "Hello world!"
     *             }
     *           ]
     * @param llmKwargs
     *           Keyword arguments to pass to the model's interface.
     * @return a stream of strings
     */
    generateResponseStream(prompt?: Genai.Prompt | Array_Type<any>, llmKwargs: any): Stream<string>;

    /**
     * Generates the streamed response from the LLM.
     * @param prompt
     *           If prompt is a {@link Genai.Prompt}, it is assumed to be a user query to be sent to the LLM.
     *           If prompt is a json, it is expected to be an array of "messages" which can include message history in addition to the latest query.
     *           Messages should be in the format described on {@link https://docs.litellm.ai/docs/completion/input#properties-of-messages}. For example:
     *           [
     *             {
     *              "role": "user",
     *              "content": "provide and execute code to print \"Hello world!\", and describe the output"
     *             },
     *             {
     *              "role": "assistant",
     *              "content": "print(\"Hello world!\")"
     *             },
     *             {
     *               "role": "assistant",
     *               "content": "Hello world!"
     *             }
     *           ]
     * @param llmKwargs
     *           Keyword arguments to pass to the model's interface.
     * @return a stream of strings
     */
    static generateResponseStream(prompt?: Genai.Prompt | Array_Type<any>, llmKwargs: any): Stream<string>;

    /**
     * Generates a batch of responses from the LLM.
     * @param prompts
     *    List of prompts to be sent to the LLM.
     * @return the batch job to monitor and get the responses.
     */
    generateResponseBatch(prompts: Array_Type<string>, llmKwargs: any): Genai.Llm.BatchRequestJob;

    /**
     * Generates a batch of responses from the LLM.
     * @param prompts
     *    List of prompts to be sent to the LLM.
     * @return the batch job to monitor and get the responses.
     */
    static generateResponseBatch(prompts: Array_Type<string>, llmKwargs: any): Genai.Llm.BatchRequestJob;

    /**
     * Get the fields that are required for model inference creation.
     * @param credential
     *    The credential provider of the model.
     * @param requiredOnly
     *    If true, only return the fields that are required for model inference creation.
     *
     * @return the fields that are required for model inference creation.
     */
    getParameterFields(credential: any, requiredOnly?: boolean): Map_Type<string, Map_Type<string, any>>;

    /**
     * Get the fields that are required for model inference creation.
     * @param credential
     *    The credential provider of the model.
     * @param requiredOnly
     *    If true, only return the fields that are required for model inference creation.
     *
     * @return the fields that are required for model inference creation.
     */
    static getParameterFields(credential: any, requiredOnly?: boolean): Map_Type<string, Map_Type<string, any>>;

    /**
     * Get the fields and values of model inference.
     * @param name
     *   The name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig}.
     * @param credential
     *   The credential provider of the model.
     * @param requiredOnly
     *   If true, only return the required fields and values of model inference.
     *
     * @return
     *   A JSON object with the fields and values of model inference.
     */
    getParameterFieldsInfo(name: string, credential: any, requiredOnly?: boolean): Map_Type<string, Map_Type<string, any>>;

    /**
     * Get the fields and values of model inference.
     * @param name
     *   The name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig}.
     * @param credential
     *   The credential provider of the model.
     * @param requiredOnly
     *   If true, only return the required fields and values of model inference.
     *
     * @return
     *   A JSON object with the fields and values of model inference.
     */
    static getParameterFieldsInfo(name: string, credential: any, requiredOnly?: boolean): Map_Type<string, Map_Type<string, any>>;

    /**
     * Verify the credential for the model.
     * @param spec
     *    The credential specification to verify.
     *
     * @return true if the credential is valid, raise an exception otherwise.
     */
    static verifyCredential(spec: Genai.Llm.CredentialSpec): boolean;

    /**
     * Verify the LLM model configuration.
     * @param spec
     *    The model configuration specification to verify.
     *
     * @return true if the credential is valid, false otherwise.
     */
    static verifyLlm(spec: Genai.ModelConfigSpec): boolean;
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
