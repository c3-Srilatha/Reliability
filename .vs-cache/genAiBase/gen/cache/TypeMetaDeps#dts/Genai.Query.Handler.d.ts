// TypeScript definitions for the C3 type Genai.Query.Handler

/**
 * Will be mixed in by types that will be used to handle queries. Genai.ChatBot uses this interface to
 * be able to dispatch requests to any type that mixes this in.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Query.Handler
 */
declare namespace Genai.Query {
  export interface IHandler {
  }
}

/**
 * Will be mixed in by types that will be used to handle queries. Genai.ChatBot uses this interface to
 * be able to dispatch requests to any type that mixes this in.
 *
 * @remarks this represents a made instance of Genai.Query.Handler
 */
declare namespace Genai.Query {
  export class Handler extends Obj  {

    /**
     * @return the default instance to be used when member functions are called on this type. E.g.
     *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
     *         instance is a singleton or not.
     */
    static inst(): Genai.Query.Handler;

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
    static fromJson(json: any): Genai.Query.Handler | null;

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
    static fromJsonString(json: string): Genai.Query.Handler | null;

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
    static fromXmlString(xml: string): Genai.Query.Handler | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Query.Handler | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Query.Handler;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    static replaceType(old: Type, new_: Type): Genai.Query.Handler;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query.Handler;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query.Handler;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query.Handler;

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
    static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query.Handler;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query.Handler>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query.Handler>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query.Handler>;

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
    static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query.Handler>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Query.Handler;

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
    static mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Query.Handler;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query.Handler;

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
    static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query.Handler;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query.Handler;

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
    static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query.Handler;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Query.Handler;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    static validateObj(): Genai.Query.Handler;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Query.Handler;

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
    static withField(field: string, value: any, doNotConvert?: boolean): Genai.Query.Handler;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Query.Handler;

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
    static withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Query.Handler;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Query.Handler;

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
    static withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Query.Handler;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Query.Handler;

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
    static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Query.Handler;

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
    withoutFieldAtPath(path: string): Genai.Query.Handler;

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
    static withoutFieldAtPath(path: string): Genai.Query.Handler;

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
    withoutField(field: string): Genai.Query.Handler;

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
    static withoutField(field: string): Genai.Query.Handler;

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
    withoutField(field: FieldType): Genai.Query.Handler;

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
    static withoutField(field: FieldType): Genai.Query.Handler;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Query.Handler;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    static withoutFields(fields: Array_Type<string>): Genai.Query.Handler;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Query.Handler;

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
    static withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Query.Handler;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Query.Handler;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    static withoutSecretFields(): Genai.Query.Handler;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Query.Handler;

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
    static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Query.Handler;

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
    defaultField(field: string): Genai.Query.Handler;

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
    static defaultField(field: string): Genai.Query.Handler;

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
    defaultField(field: FieldType): Genai.Query.Handler;

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
    static defaultField(field: FieldType): Genai.Query.Handler;

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
    unsetField(field: string): Genai.Query.Handler;

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
    static unsetField(field: string): Genai.Query.Handler;

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
    unsetField(field: FieldType): Genai.Query.Handler;

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
    static unsetField(field: FieldType): Genai.Query.Handler;

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
    removeField(field: string): Genai.Query.Handler;

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
    static removeField(field: string): Genai.Query.Handler;

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
    removeField(field: FieldType): Genai.Query.Handler;

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
    static removeField(field: FieldType): Genai.Query.Handler;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Query.Handler;

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
    static mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Query.Handler;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Query.Handler;

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
    static mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Query.Handler;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Query.Handler;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    static mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Query.Handler;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Query.Handler;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    static mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Query.Handler;

    mergeJson(json: any): Genai.Query.Handler;

    static mergeJson(json: any): Genai.Query.Handler;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Query.Handler;

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
    static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Query.Handler;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Query.Handler;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    static sumObj(other: Obj, deep?: boolean): Genai.Query.Handler;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Query.Handler>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonArray(): Array_Type<Genai.Query.Handler>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Query.Handler> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Query.Handler> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Query.Handler>;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonSet(): Set_Type<Genai.Query.Handler>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Query.Handler> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Query.Handler> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Query.Handler> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Query.Handler>;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    static toBuilder(): ObjBuilder<Genai.Query.Handler>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Query.Handler>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Query.Handler;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Query.Handler;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Query.Handler;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Query.Handler;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Query.Handler;

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
    static make(fields: any, withDefaults?: boolean): Genai.Query.Handler;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Query.Handler;

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
    afterMake(): Genai.Query.Handler;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static afterMake(): Genai.Query.Handler;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Query.Handler;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Query.Handler> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Query.Handler;

    /**
     * Respond to a user's `query` by generating a relevant `Genai.Query.Result` from the files loaded in the
     * model.
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param querySimilaritySearchResults
     *           The already computed {@link Genai.Retriever.SimilaritySearchResult}s. If none are passed, then {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} would be
     *           used to generate similarity search results.
     * @param doNotCreateRelations
     *           If true, creation of passage relations will be skipped
     */
    query(genAiResultToProcess: Genai.Query.Result, querySimilaritySearchResults?: Array_Type<Genai.Retriever.SimilaritySearchResult>, doNotCreateRelations?: boolean, streamResponse?: boolean): Genai.Query.Result;

    /**
     * Respond to a user's `query` by generating a relevant `Genai.Query.Result` from the files loaded in the
     * model.
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param querySimilaritySearchResults
     *           The already computed {@link Genai.Retriever.SimilaritySearchResult}s. If none are passed, then {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} would be
     *           used to generate similarity search results.
     * @param doNotCreateRelations
     *           If true, creation of passage relations will be skipped
     */
    static query(genAiResultToProcess: Genai.Query.Result, querySimilaritySearchResults?: Array_Type<Genai.Retriever.SimilaritySearchResult>, doNotCreateRelations?: boolean, streamResponse?: boolean): Genai.Query.Result;

    /**
     * Respond to a user's `query` by generating a native stream object from the files loaded in the
     * model.
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     */
    streamQuery(genAiResultToProcess: Genai.Query.Result): Stream<string>;

    /**
     * Respond to a user's `query` by generating a native stream object from the files loaded in the
     * model.
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     */
    static streamQuery(genAiResultToProcess: Genai.Query.Result): Stream<string>;

    /**
     * Respond to a chat `query` by generating a relevant `Genai.Query.Result` given the passages loaded
     * and informed by the chat history
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     * @param doNotCreateRelations
     *           If true, creation of passage relations will be skipped
     * @return The {@link Genai.Query.Result}
     */
    chatQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, doNotCreateRelations?: boolean, streamResponse?: boolean): Genai.Query.Result | string | null;

    /**
     * Respond to a chat `query` by generating a relevant `Genai.Query.Result` given the passages loaded
     * and informed by the chat history
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     * @param doNotCreateRelations
     *           If true, creation of passage relations will be skipped
     * @return The {@link Genai.Query.Result}
     */
    static chatQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, doNotCreateRelations?: boolean, streamResponse?: boolean): Genai.Query.Result | string | null;

    /**
     * Respond to a chat `query` by generating a relevant `Genai.Query.Result` given the passages loaded
     * and informed by the chat history. This function returns a stream of the answer of the chat query.
     * The final {@link Genai.Query.Result} is generated internally after the last chunk of the stream is
     * received, but it is not returned to the caller.
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     * @param doNotCreateRelations
     *           If true, creation of passage relations will be skipped
     * @return The stream containing the answer to the user query.
     */
    streamChatQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, doNotCreateRelations?: boolean): Stream<string> | null;

    /**
     * Respond to a chat `query` by generating a relevant `Genai.Query.Result` given the passages loaded
     * and informed by the chat history. This function returns a stream of the answer of the chat query.
     * The final {@link Genai.Query.Result} is generated internally after the last chunk of the stream is
     * received, but it is not returned to the caller.
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     * @param doNotCreateRelations
     *           If true, creation of passage relations will be skipped
     * @return The stream containing the answer to the user query.
     */
    static streamChatQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, doNotCreateRelations?: boolean): Stream<string> | null;

    /**
     * doChatQuery contains the implementation of #chatQuery which must be redeclared/claimed by each subtype
     * to ensure that the calls are made in the correct runtime.
     */
    doChatQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, doNotCreateRelations?: boolean, streamResponse?: string): Genai.Query.Result | Stream<string> | null;

    /**
     * doChatQuery contains the implementation of #chatQuery which must be redeclared/claimed by each subtype
     * to ensure that the calls are made in the correct runtime.
     */
    static doChatQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, doNotCreateRelations?: boolean, streamResponse?: string): Genai.Query.Result | Stream<string> | null;

    /**
     * Take the new `genAiResultToProcess` and, if there is a chat history, rewrite the `baseQuery` of the current
     * result's `#searchQuery` to fill in `#standaloneQuery` with a single query that includes the chat context.
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     *
     * @return The {@link Genai.Query.Result} with the rewritten query.
     */
    rewriteQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>): Genai.Query.Result;

    /**
     * Take the new `genAiResultToProcess` and, if there is a chat history, rewrite the `baseQuery` of the current
     * result's `#searchQuery` to fill in `#standaloneQuery` with a single query that includes the chat context.
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     *
     * @return The {@link Genai.Query.Result} with the rewritten query.
     */
    static rewriteQuery(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>): Genai.Query.Result;

    /**
     * Generate the chat memory for the given `genAiResultToProcess` based on the `chatHistory`.
     * This function will update the `genAiResultToProcess` with the relevant `Genai.Query.ResultToPassageRelation`s
     * for the chat history.
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     * @param chatMemoryConfigName
     *           The name of the config to be used for the chat memory
     *
     * @return The {@link Genai.Query.Result} with the updated chat memory.
     */
    generateChatMemory(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, chatMemoryConfigName: string): Genai.Query.Result;

    /**
     * Generate the chat memory for the given `genAiResultToProcess` based on the `chatHistory`.
     * This function will update the `genAiResultToProcess` with the relevant `Genai.Query.ResultToPassageRelation`s
     * for the chat history.
     *
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param originalAiResult
     *           The original ai result from the search result
     * @param chatHistory
     *           The history of the chat so far
     * @param chatMemoryConfigName
     *           The name of the config to be used for the chat memory
     *
     * @return The {@link Genai.Query.Result} with the updated chat memory.
     */
    static generateChatMemory(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, chatMemoryConfigName: string): Genai.Query.Result;

    /**
     * Performs similarity search on the vector store and updates the genAiResultToProcess with the
     * {@link Genai.Query.ResultToPassageRelation}s relevant for the query.
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param vectorStore
     *           The {@link Genai.Retriever} instance to be used for the similarity search to find the
     *           relevant passages for the query. If none is passed, the vector store used will be generated through
     *           the `prepareVectorStore` method.
     * @param querySimilaritySearchResults
     *           The already computed {@link Genai.Retriever.SimilaritySearchResult}s. If none are passed, then {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} would be
     *           used to generate similarity search results.
     * @param allowMultipleRelationsWithSameFile
     *           If set to true, creates relations with different source passages belonging to same file
     */
    createPassageRelations(genAiResultToProcess: Genai.Query.Result, vectorStore?: Genai.Retriever, querySimilaritySearchResults?: Array_Type<Genai.Retriever.SimilaritySearchResult>, allowMultipleRelationsWithSameFile?: boolean): Genai.Query.Result;

    /**
     * Performs similarity search on the vector store and updates the genAiResultToProcess with the
     * {@link Genai.Query.ResultToPassageRelation}s relevant for the query.
     * @param genAiResultToProcess
     *           The {@link Genai.Query.Result} which would be returned for the given search query.
     *           This result is persisted when the search is triggered and updated as the query is processed.
     * @param vectorStore
     *           The {@link Genai.Retriever} instance to be used for the similarity search to find the
     *           relevant passages for the query. If none is passed, the vector store used will be generated through
     *           the `prepareVectorStore` method.
     * @param querySimilaritySearchResults
     *           The already computed {@link Genai.Retriever.SimilaritySearchResult}s. If none are passed, then {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} would be
     *           used to generate similarity search results.
     * @param allowMultipleRelationsWithSameFile
     *           If set to true, creates relations with different source passages belonging to same file
     */
    static createPassageRelations(genAiResultToProcess: Genai.Query.Result, vectorStore?: Genai.Retriever, querySimilaritySearchResults?: Array_Type<Genai.Retriever.SimilaritySearchResult>, allowMultipleRelationsWithSameFile?: boolean): Genai.Query.Result;

    /**
     * Retrieve necessary fields and persist the genAiResultToProcess if needed. If the originalAiResult is
     * provided it will populate the filters for the `genAiResultToProcess` so that chat has the same explicit
     * filters as the original search query.
     */
    static prepareGenAiResult(genAiResultToProcess: Genai.Query.Result, originalAiResult?: Genai.Query.Result): Genai.Query.Result;

    /**
     * Validate the population of the {@link Genai.UnstructuredQuery.Engine.Config} as well as the the {@link Genai.UnstructuredQuery.Engine.ModelConfig} possibly
     * passed into `configType` and stored at `configField` on the `engineConfig`.
     */
    validateConfig(engineConfig: Genai.UnstructuredQueryHandler.BaseParams, configType: Type, configField?: string): Config;

    /**
     * Validate the population of the {@link Genai.UnstructuredQuery.Engine.Config} as well as the the {@link Genai.UnstructuredQuery.Engine.ModelConfig} possibly
     * passed into `configType` and stored at `configField` on the `engineConfig`.
     */
    static validateConfig(engineConfig: Genai.UnstructuredQueryHandler.BaseParams, configType: Type, configField?: string): Config;

    /**
     * Prepares (i.e. initializes) a vector store for this query handler using the following priority:
     * 1. The vectorStore passed to the function
     * 2. Fall back to using a config: If one is passed, that is used, otherwise {@link Genai.UnstructuredQuery.Engine.Config#inst}
     *    The {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} for the config, if it is defined
     *
     * If all three of the above are undefined, a ValueError exception is raised.
     *
     * @param vectorStore
     *           If specified, this is the vector store that will be prepared
     */
    prepareVectorStore(vectorStore?: Genai.Retriever, config?: Genai.UnstructuredQueryHandler.BaseParams): Genai.Retriever;

    /**
     * Prepares (i.e. initializes) a vector store for this query handler using the following priority:
     * 1. The vectorStore passed to the function
     * 2. Fall back to using a config: If one is passed, that is used, otherwise {@link Genai.UnstructuredQuery.Engine.Config#inst}
     *    The {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} for the config, if it is defined
     *
     * If all three of the above are undefined, a ValueError exception is raised.
     *
     * @param vectorStore
     *           If specified, this is the vector store that will be prepared
     */
    static prepareVectorStore(vectorStore?: Genai.Retriever, config?: Genai.UnstructuredQueryHandler.BaseParams): Genai.Retriever;

    /**
     * Constructs a relation between a {@link Genai.Query.Result} and the {@link Genai.SourcePassage} and
     * its {@link Genai.SourceFile} from a {@link Genai.Retriever.SimilaritySearchResult}
     * @param infix
     *           The infix to use for the relation type when generating the id for the relation
     * @param genAiResultToProcessId
     *           The id of the {@link Genai.Query.Result} to use to construct the relation
     * @param searchResult
     *           The {@link Genai.Retriever.SimilaritySearchResult} to use to construct the relation
     * @return A tuple containing the relation as a dict (not c3 obj) and the {@link Genai.SourceFile}
     */
    static constructRelation(infix: string, genAiResultToProcessId: string, searchResult: Genai.Retriever.SimilaritySearchResult): any | null;

    /**
     * Constructs a relation between a {@link Genai.Query.Result} and the {@link Genai.SourcePassage}s and
     * its {@link Genai.SourceFile}s from {@link Genai.Retriever.SimilaritySearchResult}s
     * @param infix
     *           The infix to use for the relation type when generating the id for the relation
     * @param genAiResultToProcessId
     *           The id of the {@link Genai.Query.Result} to use to construct the relation
     * @param searchResults
     *           The {@link Genai.Retriever.SimilaritySearchResult}s to use to construct the relations
     * @return A list of tuples containing the relations as dicts (not c3 objs) and the {@link Genai.SourceFile}s
     */
    static constructRelations(infix: string, genAiResultToProcessId: string, searchResults: Array_Type<Genai.Retriever.SimilaritySearchResult>): any | null;

    /**
     * Generates {@link Genai.Retriever.SimilaritySearchResult}s for the query {@link Genai.Query.Result#searchQuery}.
     * If numPassages is not provided, the number of {@link Genai.Retriever.SimilaritySearchResult}s generated is the max
     * of {@link Genai.UnstructuredQuery.Engine.Config#numPassages} and numSources in {@link Genai.UnstructuredQuery.Engine.Config#executorParams}
     */
    generateSimilaritySearchResults(generativeAiResult: Genai.Query.Result, vectorStore?: Genai.Retriever, numPassages?: number): Array_Type<Genai.Retriever.SimilaritySearchResult>;

    /**
     * Generates {@link Genai.Retriever.SimilaritySearchResult}s for the query {@link Genai.Query.Result#searchQuery}.
     * If numPassages is not provided, the number of {@link Genai.Retriever.SimilaritySearchResult}s generated is the max
     * of {@link Genai.UnstructuredQuery.Engine.Config#numPassages} and numSources in {@link Genai.UnstructuredQuery.Engine.Config#executorParams}
     */
    static generateSimilaritySearchResults(generativeAiResult: Genai.Query.Result, vectorStore?: Genai.Retriever, numPassages?: number): Array_Type<Genai.Retriever.SimilaritySearchResult>;

    /**
     * Internal function to log the error and return the `genAiResultToProcess` with correct engineLog and answer.
     */
    static handleError(query: string, genAiResultToProcess: Genai.Query.Result, llmName?: string, brokenTools?: string): Genai.Query.Result;

    /**
     * Returns a return a list of (question, answer) tuples from the conversation so far
     */
    static qATuplesFromChat(originalAiResult: Genai.Query.Result, chatHistory?: Array_Type<Genai.Query.ChatMessage>, searchQueryField?: string = '"standaloneQuery"'): Array_Type<>;

    /**
     * A helper function to get the visualization data from a
     * {@link Genai.Query.Result.Source.StructuredData.PythonAgent}, utilizing the engine to reduce function call time.
     * @param source
     *           The {@link Genai.Query.Result.Source.StructuredData.PythonAgent} to get the visualization data from
     * @return The {@link GenAiVisualizationDataFrameProps} for the visualization data
     */
    getVisualizationDataFromDataFrame(source?: Genai.Query.Result.Source.StructuredData.PythonAgent | Genai.Agent.DynamicData): GenAiVisualizationDataFrameProps;

    /**
     * A helper function to get the visualization data from a
     * {@link Genai.Query.Result.Source.StructuredData.PythonAgent}, utilizing the engine to reduce function call time.
     * @param source
     *           The {@link Genai.Query.Result.Source.StructuredData.PythonAgent} to get the visualization data from
     * @return The {@link GenAiVisualizationDataFrameProps} for the visualization data
     */
    static getVisualizationDataFromDataFrame(source?: Genai.Query.Result.Source.StructuredData.PythonAgent | Genai.Agent.DynamicData): GenAiVisualizationDataFrameProps;
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
