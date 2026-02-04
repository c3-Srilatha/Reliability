// TypeScript definitions for the C3 type Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig

/**
 * Configuration to specify which {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config} should be used by the application.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig
 */
declare namespace Genai.Agent.Tool.MultiSourceSynthesizer {
  export interface IDefaultConfig {

    configOverride?: string;

    secretOverride?: string;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    issues?: Array_Type<string> | Array<string>;

    /**
     * The default id of the {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config} to use.
     */
    configId: string;
  }
}

/**
 * Configuration to specify which {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config} should be used by the application.
 *
 * @remarks this represents a made instance of Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig
 */
declare namespace Genai.Agent.Tool.MultiSourceSynthesizer {
  export class DefaultConfig extends Obj  {

    readonly configOverride?: string;
    withConfigOverride(configOverride: string | null): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    static readonly configOverride?: string;

    readonly secretOverride?: string;
    withSecretOverride(secretOverride: string | null): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    static readonly secretOverride?: string;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    readonly issues?: Array_Type<string>;
    withIssues(issues: Array_Type<string> | Array<string> | null): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    static readonly issues?: Array_Type<string>;

    /**
     * The default id of the {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config} to use.
     */
    readonly configId: string;
    withConfigId(configId: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * The default id of the {@link Genai.Agent.Tool.MultiSourceSynthesizer.Config} to use.
     */
    static readonly configId: string;

    /**
     * @return the one and only instance to be used when member functions are called on this type.
     */
    static inst(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static fromJson(json: any): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

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
    static fromJsonString(json: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

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
    static fromXmlString(xml: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    static replaceType(old: Type, new_: Type): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

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
    static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    static validateObj(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withField(field: string, value: any, doNotConvert?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withoutFieldAtPath(path: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withoutFieldAtPath(path: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withoutField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withoutField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withoutField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withoutField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    static withoutFields(fields: Array_Type<string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    static withoutSecretFields(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    defaultField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static defaultField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    defaultField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static defaultField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    unsetField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static unsetField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    unsetField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static unsetField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    removeField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static removeField(field: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    removeField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static removeField(field: FieldType): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    static mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    static mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    mergeJson(json: any): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    static mergeJson(json: any): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    static sumObj(other: Obj, deep?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonArray(): Array_Type<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonSet(): Set_Type<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    static toBuilder(): ObjBuilder<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    static make(fields: any, withDefaults?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

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
    afterMake(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static afterMake(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return whether the cache already contains this instance
     */
    isCached(): boolean;

    /**
     * @return whether the cache already contains this instance
     */
    static isCached(): boolean;

    /**
     * @return stream of all available Cached instances.
     */
    static allCached(): Stream<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
     *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     *         Otherwise no population will be performed.
     */
    static find(filter?: string): Stream<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
     *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     *         Otherwise no population will be performed.
     */
    static findBy(field: string, value: any): Stream<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * @return cached instance.
     */
    getCached(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * @return cached instance.
     */
    static getCached(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * Returns cached instance by key, with secrets removed.
     */
    static forCacheKey(key: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * @return cache key for this instance.
     */
    cacheKey(): string;

    /**
     * @return cache key for this instance.
     */
    static cacheKey(): string;

    /**
     * Should produce an entry for the cache key. This method should not be called directly.
     */
    static produce(key: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * Should produces the entire content for the cached data. Will populate the cache with the produced data.
     */
    static produceAll(): Map_Type<string, Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * Evicts this instance from cache on all nodes of this application.
     */
    evictFromCache(): void;

    /**
     * Evicts this instance from cache on all nodes of this application.
     */
    static evictFromCache(): void;

    /**
     * Evicts this instance from cache of the current node.
     */
    evictFromCacheLocalOnly(): void;

    /**
     * Evicts this instance from cache of the current node.
     */
    static evictFromCacheLocalOnly(): void;

    /**
     * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#evictFromLocalAppsCaches}
     */
    evictFromCacheLocalOnlyAllApps(): void;

    /**
     * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#evictFromLocalAppsCaches}
     */
    static evictFromCacheLocalOnlyAllApps(): void;

    /**
     * Clears the data cache for this type on all nodes of this application.
     */
    static clearCache(): void;

    /**
     * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
     */
    static clearCacheLocalOnly(): void;

    /**
     * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#clearLocalAppsCaches}
     */
    static clearCacheLocalOnlyAllApps(): void;

    /**
     * Returns count of cached instances.
     */
    static cacheSize(): number | null;

    /**
     * Returns instance of the cache for this type.
     */
    static nativeCache(): any | null;

    /**
     * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
     * configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#config instead of this method.
     */
    getConfig(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
     * configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#config instead of this method.
     */
    static getConfig(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return cached config value for the provided field path if set or `null` or error otherwise depending on
     *         `failIfMissing`; note that will not return secret value.
     */
    configValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * @return cached config value for the provided field path if set or `null` or error otherwise depending on
     *         `failIfMissing`; note that will not return secret value.
     */
    static configValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
     * is required. For Nameable configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
     */
    getSecret(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
     * is required. For Nameable configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
     */
    static getSecret(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return cached secret value for the provided field path in this Config object or `null` if not set or error
     *         depending on `failIfMissing`.
     */
    secretValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * @return cached secret value for the provided field path in this Config object or `null` if not set or error
     *         depending on `failIfMissing`.
     */
    static secretValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * Reads and url decodes the content at the path.
     * Path must represent a string value.
     */
    decodedValue(path: string, failIfMissing?: boolean): string | null;

    /**
     * Reads and url decodes the content at the path.
     * Path must represent a string value.
     */
    static decodedValue(path: string, failIfMissing?: boolean): string | null;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.USER level.
     */
    isUserOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.USER level.
     */
    static isUserOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.APP level.
     */
    isAppOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.APP level.
     */
    static isAppOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
     */
    isClusterOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
     */
    static isClusterOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
     */
    isEnvOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
     */
    static isEnvOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
     */
    isRootOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
     */
    static isRootOverride(): boolean;

    /**
     * @return `true` if this configuration has not been set and comes from seed / defaults.
     */
    isSeed(): boolean;

    /**
     * @return `true` if this configuration has not been set and comes from seed / defaults.
     */
    static isSeed(): boolean;

    /**
     * @return `true` if provided path is a secret.
     */
    static isSecret(path: string): boolean;

    /**
     *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
     *  The config key varies based on whether the config is defined with:
     *     1. {@link Ann.Config#subfolder}
     *         In this case, the name of the subfolder will be included.
     *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
     *         In this case, the ID of the {@link User} will be included.
     *     3. mixes in {@link Named} or {@link Identified}
     * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
     * the name of the config subtype will be used.
     *
     *  The config key includes the above three fields delimited by '/':
     *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
     *  ```
     *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
     *  |-------------------|---------------------|-------------------|-----------------------------|
     *  |       no          |         no          |        no         |           MyConfType        |
     *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
     *  |       no          |         yes         |        no         |             abc             |
     *  |       no          |         no          |        yes        |      folder1/MyConfType     |
     *  |       no          |         yes         |        yes        |          folder1/abc        |
     *  |       yes         |         yes         |        no         |          myUserId/abc       |
     *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
     *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
     *  ```
     *  Note that the config key is a computed value and is not set-able.
     *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
     */
    configKey(): string | null;

    /**
     *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
     *  The config key varies based on whether the config is defined with:
     *     1. {@link Ann.Config#subfolder}
     *         In this case, the name of the subfolder will be included.
     *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
     *         In this case, the ID of the {@link User} will be included.
     *     3. mixes in {@link Named} or {@link Identified}
     * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
     * the name of the config subtype will be used.
     *
     *  The config key includes the above three fields delimited by '/':
     *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
     *  ```
     *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
     *  |-------------------|---------------------|-------------------|-----------------------------|
     *  |       no          |         no          |        no         |           MyConfType        |
     *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
     *  |       no          |         yes         |        no         |             abc             |
     *  |       no          |         no          |        yes        |      folder1/MyConfType     |
     *  |       no          |         yes         |        yes        |          folder1/abc        |
     *  |       yes         |         yes         |        no         |          myUserId/abc       |
     *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
     *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
     *  ```
     *  Note that the config key is a computed value and is not set-able.
     *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
     */
    static configKey(): string | null;

    /**
     * @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
     * the computed {@link Config#configKey}.
     * Note that configs set at USER level will still have user's Id as part of the config key. Config types with
     * @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
     * ex. confType has @config(minOverride=ConfigOverride.USER)
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "myUserId/abc"
     * ex. confType has @config(subfolder="folder1")
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "folder1/abc"
     */
    withConfigKey(configKey: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
     * the computed {@link Config#configKey}.
     * Note that configs set at USER level will still have user's Id as part of the config key. Config types with
     * @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
     * ex. confType has @config(minOverride=ConfigOverride.USER)
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "myUserId/abc"
     * ex. confType has @config(subfolder="folder1")
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "folder1/abc"
     */
    static withConfigKey(configKey: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return copy without config key.
     */
    withoutConfigKey(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return copy without config key.
     */
    static withoutConfigKey(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return return cached config instance for provided config key.
     */
    static forConfigKey(configKey: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
     */
    static listConfigKeys(): Stream<string> | null;

    /**
     * @param
     *
     * @return stream of all available Config instances for this type.
     */
    static listConfigs(parallel?: boolean, filter?: λPredicate<string>): Stream<Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig> | null;

    /**
     * @return all config template values by override.
     */
    allConfigValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all config template values by override.
     */
    static allConfigValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all config template jsons by override.
     */
    allConfigOverrides(): Map_Type<string, any> | null;

    /**
     * @return all config template jsons by override.
     */
    static allConfigOverrides(): Map_Type<string, any> | null;

    /**
     * @return all secret template values by override.
     */
    allSecretValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all secret template values by override.
     */
    static allSecretValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all secret templates by override.
     */
    allSecretOverrides(): Map_Type<string, any> | null;

    /**
     * @return all secret templates by override.
     */
    static allSecretOverrides(): Map_Type<string, any> | null;

    /**
     * Sets configuration field value at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    setConfigValue(path: string, value: any, override?: string, embeddedFileName?: string): void;

    /**
     * Sets configuration field value at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    static setConfigValue(path: string, value: any, override?: string, embeddedFileName?: string): void;

    /**
     * Sets multiple field values to those specified in the map. The map keys are the paths.
     *
     * @see setConfigValue
     */
    setConfigValues(from?: Map_Type<string, any>, override?: string): void;

    /**
     * Sets multiple field values to those specified in the map. The map keys are the paths.
     *
     * @see setConfigValue
     */
    static setConfigValues(from?: Map_Type<string, any>, override?: string): void;

    /**
     * Sets multiple field values to the be the same as the passed instance.
     *
     * @see setConfigValue
     */
    setConfigValues(from: Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig, override?: string): void;

    /**
     * Sets multiple field values to the be the same as the passed instance.
     *
     * @see setConfigValue
     */
    static setConfigValues(from: Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig, override?: string): void;

    /**
     * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    setConfigValueTemplate(path: string, valueTemplate: string, override?: string): void;

    /**
     * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    static setConfigValueTemplate(path: string, valueTemplate: string, override?: string): void;

    /**
     * Adds a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Adds a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Sets a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Sets a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Adds a single value to a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    addConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Adds a single value to a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static addConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Sets a key-value pair in specified map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string): void;

    /**
     * Sets a key-value pair in specified map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string): void;

    /**
     * Removes a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    removeConfigElementAt(pathToCollectionField: string, index: number, override?: string): void;

    /**
     * Removes a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static removeConfigElementAt(pathToCollectionField: string, index: number, override?: string): void;

    /**
     * Removes a single value in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    removeConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Removes a single value in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static removeConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Removes a single key in a map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    removeConfigMapKey(pathToMapField: string, key: any, override?: string): void;

    /**
     * Removes a single key in a map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static removeConfigMapKey(pathToMapField: string, key: any, override?: string): void;

    /**
     * Url encodes the content at the path and returns new config object with the encoded value.
     * Path must represent a string value.
     */
    setEncodedValue(path: string, value: string, override: string): void;

    /**
     * Url encodes the content at the path and returns new config object with the encoded value.
     * Path must represent a string value.
     */
    static setEncodedValue(path: string, value: string, override: string): void;

    /**
     * Sets secret field value or secrets within value at provided path in this Config object.
     * @see clearSecretValue
     */
    setSecretValue(path: string, value: any, override?: string): void;

    /**
     * Sets secret field value or secrets within value at provided path in this Config object.
     * @see clearSecretValue
     */
    static setSecretValue(path: string, value: any, override?: string): void;

    /**
     * Sets secret field value template at provided path in this Config object.
     * @see clearSecretValue
     */
    setSecretValueTemplate(path: string, value: string, override?: string): void;

    /**
     * Sets secret field value template at provided path in this Config object.
     * @see clearSecretValue
     */
    static setSecretValueTemplate(path: string, value: string, override?: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at provided override level. Note will not
     * clear secret value.
     */
    clearConfigValue(path: string, override?: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at provided override level. Note will not
     * clear secret value.
     */
    static clearConfigValue(path: string, override?: string): void;

    /**
     * Clears secret field value at provided path in this Config object at provided override level.
     */
    clearSecretValue(path: string, override?: string): void;

    /**
     * Clears secret field value at provided path in this Config object at provided override level.
     */
    static clearSecretValue(path: string, override?: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at all override levels. Note will not
     * clear secret value.
     */
    clearConfigValueAllOverrides(path: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at all override levels. Note will not
     * clear secret value.
     */
    static clearConfigValueAllOverrides(path: string): void;

    /**
     * Clears secret field value at provided path in this Config object at all override levels.
     */
    clearSecretValueAllOverrides(path: string): void;

    /**
     * Clears secret field value at provided path in this Config object at all override levels.
     */
    static clearSecretValueAllOverrides(path: string): void;

    /**
     * @return cached config or secret value for the provided config key, field path and override if set or `null` or error
     *         otherwise depending on `failIfMissing`
     */
    static rawConfigOrSecretValue(configKey: string, path: string, override?: string, failIfMissing?: boolean): any | null;

    /**
     * Sets config or secret value for the provided config key, field path and override.
     */
    static setConfigOrSecretValue(configKey: string, path: string, value?: any, override?: string): void;

    /**
     * Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
     * setConfigValue and setSecretValue
     */
    static setConfigAndSecretValue(configKey: string, path: string, value?: any, override?: string): void;

    /**
     * Sets config or secret value template for the provided config key, field path and override.
     */
    static setConfigOrSecretValueTemplate(configKey: string, path: string, valueTemplate?: string, override?: string): void;

    /**
     * @return `true` if this Config type has other sub types.
     */
    static hasSubTypes(): boolean;

    /**
     * @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
     */
    static hasSecretField(): boolean;

    /**
     * @return `true` if this Config type has only one instance.
     */
    static isSingleInstance(): boolean;

    /**
     * @returns `true` if this Config is user override-able.
     */
    static isUserOverridable(): boolean;

    /**
     * @return default configuration override level
     */
    static dfltOverride(override?: string): string;

    /**
     *  Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
     * true and config does not exist.
     *  Note that this skips caching and directly fetches config from the config store, and secret from vault.
     */
    static loadConfigAndSecret(configKey: string): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * Loads config override template json if exists or `null`. Will not include secrets.
     * Note that this skips caching and directly fetches config from the config store.
     */
    loadConfigOverride(override: string): any | null;

    /**
     * Loads config override template json if exists or `null`. Will not include secrets.
     * Note that this skips caching and directly fetches config from the config store.
     */
    static loadConfigOverride(override: string): any | null;

    /**
     * Loads secret override template json if exists or `null`. Will not include non secrets.
     * Note that this skips caching and directly fetches secret from the vault.
     */
    loadSecretOverride(override: string): any | null;

    /**
     * Loads secret override template json if exists or `null`. Will not include non secrets.
     * Note that this skips caching and directly fetches secret from the vault.
     */
    static loadSecretOverride(override: string): any | null;

    /**
     * @return file for an embedded config value.
     */
    embeddedFile(embeddedFileName: string, override?: string): File;

    /**
     * @return file for an embedded config value.
     */
    static embeddedFile(embeddedFileName: string, override?: string): File;

    /**
     * @return config folder name
     */
    static configFolder(): string;

    /**
     * @return config sub folder name for this type
     */
    static configSubFolder(): string;

    /**
     * @return config file encoded path for a given key and potentially user under the config dir for this type.
     */
    static configFileEncodedPath(configKey: string, userOverride?: boolean): string;

    /**
     * @return pair of config and secret files for a given override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    configAndSecretFiles(override: string): Pair<File, File> | null;

    /**
     * @return pair of config and secret files for a given override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    static configAndSecretFiles(override: string): Pair<File, File> | null;

    /**
     * @return the config file path for a config instance at a given override;
     */
    configFilePath(override: string): string | null;

    /**
     * @return the config file path for a config instance at a given override;
     */
    static configFilePath(override: string): string | null;

    /**
     * @return the secret file path for a config instance at a given override;
     */
    secretFilePath(override: string): string | null;

    /**
     * @return the secret file path for a config instance at a given override;
     */
    static secretFilePath(override: string): string | null;

    /**
     * @return pair of config and secret files for provided override / appId; note that will always return pair
     *         of Files even if physical file doesn't exist.
     */
    configAndSecretFilePair(override: string, appId: string): Pair<File, File> | null;

    /**
     * @return pair of config and secret files for provided override / appId; note that will always return pair
     *         of Files even if physical file doesn't exist.
     */
    static configAndSecretFilePair(override: string, appId: string): Pair<File, File> | null;

    /**
     * @return map of pair of config and secret files by override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    allConfigAndSecretFiles(): Map_Type<string, Pair<File, File>> | null;

    /**
     * @return map of pair of config and secret files by override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    static allConfigAndSecretFiles(): Map_Type<string, Pair<File, File>> | null;

    /**
     * @return pair of config and secret template directories for override
     */
    static configAndSecretDirs(override?: string): Pair<File, File> | null;

    /**
     * @return map of pair of config and secret template directories by override; note that will always return instance of
     *         File even if physical folder doesn't exist.
     */
    static allConfigAndSecretDirs(): Map_Type<string, Pair<File, File>> | null;

    /**
     * @return pair of config and secret Base directories for the given override
     */
    static configAndSecretOverrideBaseDirs(override?: string): Pair<File, File> | null;

    /**
     * @return config key for a given config or secret file. If file is not a valid config or secret then will return
     *         `null` or fail based on `failIfInvalid`
     */
    static configKeyForFile(file: File, failIfInvalid?: boolean): string | null;

    /**
     * @return config key for a given config or secret file url. If file is not a valid config or secret then will return
     *         `null` or fail based on `failIfInvalid`
     */
    static configKeyForFileUrl(fileUrl: string): string | null;

    /**
     * @return Config sub-type for a config directory name.
     */
    static configTypeForDir(dir: string, failIdInvalid?: boolean): Type | null;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
     * #setSecret or #setSecretValue for that.
     */
    setConfig(override?: string): void;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
     * #setSecret or #setSecretValue for that.
     */
    static setConfig(override?: string): void;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
     * #setConfigValue or #setConfig for that.
     */
    setSecret(override?: string): void;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
     * #setConfigValue or #setConfig for that.
     */
    static setSecret(override?: string): void;

    /**
     * Executes actions on all config override levels (within a valid range) for a particular instance of config.
     */
    eachOverride(action?: λBiConsumer<Config, string>): void;

    /**
     * Executes actions on all config override levels (within a valid range) for a particular instance of config.
     */
    static eachOverride(action?: λBiConsumer<Config, string>): void;

    /**
     * Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
     */
    static eachOverrideOnType(action?: λConsumer<string>): void;

    /**
     * @return minimum override for config - default is ConfigOverride#APP.
     */
    static minOverride(): string;

    /**
     * @return maximum override for config - default is ConfigOverride#ROOT
     */
    static maxOverride(): string;

    /**
     * Clears specified configuration override including secrets for this instance.
     *
     * @param override
     *        Specifies the {@link ConfigOverride} level, of this config to clear.
     */
    clearConfigAndSecretOverride(override: string): void;

    /**
     * Clears specified configuration override including secrets for this instance.
     *
     * @param override
     *        Specifies the {@link ConfigOverride} level, of this config to clear.
     */
    static clearConfigAndSecretOverride(override: string): void;

    /**
     * Clears specified configuration including secrets for this instance on all override levels.
     */
    clearConfigAndSecretAllOverrides(): void;

    /**
     * Clears specified configuration including secrets for this instance on all override levels.
     */
    static clearConfigAndSecretAllOverrides(): void;

    /**
     * Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
     * override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
     * {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
     *
     * @param override
     *        Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
     *        will also be cleared.
     * @param confirm
     *        Confirmation from user that they understand and confirm deletion of this configuration.
     */
    static clearAllConfigAndSecretOverrides(override: string, confirm?: boolean): void;

    /**
     * @return this config without any secret values.
     */
    removeSecrets(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * @return this config without any secret values.
     */
    static removeSecrets(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * @return this config with only secret values.
     */
    removeNonSecrets(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * @return this config with only secret values.
     */
    static removeNonSecrets(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig | null;

    /**
     * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
     * validation and setup.
     */
    validate(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
     * validation and setup.
     */
    static validate(): Genai.Agent.Tool.MultiSourceSynthesizer.DefaultConfig;

    /**
     * @return merged Json of all defined configuration templates for this instance including secrets.
     */
    static rawJson(configKey: string): any | null;

    /**
     * @return sets Json template for a specified override.
     */
    static setJson(configKey: string, json: any, secret?: boolean, override?: string): File;

    /**
     * @return sets Json template field for a specified override.
     */
    static setJsonValue(configKey: string, field: string, json: any, override?: string): File;

    /**
     * @return sets Json template field for a specified override.
     */
    static setJsonField(configKey: string, field: string, json: any, secret?: boolean, override?: string): File;

    /**
     * Returns json containing configuration template bindings for a provided config key. Override this method to provide your
     * own list of template bindings
     */
    static templateBindings(configKey: string): any | null;

    /**
     * Evaluate a given template by applying the default config bindings.
     * Default config bindings are:
     * 1. owner - owner of the config
     * 2. region - abbreviated region in which the cluster is
     * 3. cluster - current cluster id
     * 4. env - current env id
     * 5. app - current app id
     * 7. user - current user
     * 8. type - type on which this api is called
     * For example, "${owner}--${cluster}-${env}-${app}"
     *
     * @param template
     *            Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
     * @param extraBindings
     *            Any additional binding params not included in the default config bindings
     * @return evaluated template
     */
    static evalTemplate(template: string, extraBindings?: Map_Type<string, string>): string;

    /**
     * Returns count of cached raw Json.
     */
    static rawJsonCacheSize(): number | null;

    /**
     * Returns instance of the cache for this type for raw Json.
     */
    static rawJsonNativeCache(): any | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
