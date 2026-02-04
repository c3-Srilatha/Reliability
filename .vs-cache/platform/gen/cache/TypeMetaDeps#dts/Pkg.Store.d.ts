// TypeScript definitions for the C3 type Pkg.Store

/**
 * All the metadata (Types and source code, Seed Config, Metadata, SeedData …) for an application is available through
 * {@link Pkg} instance. To access all available {@link Pkg} instances, we are defining a store called 'Pkg.Store`.
 *
 * The purpose of Pkg.Store is to allow editing of root package in a Single Node Environment or serving production app
 * deployment.
 *
 * When the store is configured with more than one nested store, Pkg.Store will process each store in the listed order
 * of {@link Pkg.Store.Config.stores}. If a pkg appears in more than one store, the first one will win.
 *
 * @remarks this represents a value passed to a method that expects an instance of Pkg.Store
 */
declare namespace Pkg {
  export interface IStore {

    /**
     * The unique and required name of this instance.
     */
    name: string;

    DEFAULT?: string | null;
  }
}

/**
 * All the metadata (Types and source code, Seed Config, Metadata, SeedData …) for an application is available through
 * {@link Pkg} instance. To access all available {@link Pkg} instances, we are defining a store called 'Pkg.Store`.
 *
 * The purpose of Pkg.Store is to allow editing of root package in a Single Node Environment or serving production app
 * deployment.
 *
 * When the store is configured with more than one nested store, Pkg.Store will process each store in the listed order
 * of {@link Pkg.Store.Config.stores}. If a pkg appears in more than one store, the first one will win.
 *
 * @remarks this represents a made instance of Pkg.Store
 */
declare namespace Pkg {
  export class Store extends Obj {

    /**
     * The unique and required name of this instance.
     */
    readonly name: string;
    withName(name: string): Pkg.Store;

    /**
     * The unique and required name of this instance.
     */
    static readonly name: string;

    readonly DEFAULT?: string | null;
    withDEFAULT(DEFAULT: string | null): Pkg.Store;

    static readonly DEFAULT?: string | null;

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
    static fromJson(json: any | null): Pkg.Store | null;

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
    static fromJsonString(json: string | null): Pkg.Store | null;

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
    static fromXmlString(xml: string | null): Pkg.Store | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Pkg.Store | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Pkg.Store;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    static replaceType(old: Type, new_: Type): Pkg.Store;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Pkg.Store;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Pkg.Store;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Pkg.Store;

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
    static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Pkg.Store;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Pkg.Store | null>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Pkg.Store | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Pkg.Store | null>;

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
    static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Pkg.Store | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Pkg.Store;

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
    static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Pkg.Store;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Pkg.Store;

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
    static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Pkg.Store;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Pkg.Store;

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
    static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Pkg.Store;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Pkg.Store;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    static validateObj(): Pkg.Store;

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
    withField(field: string, value: any, doNotConvert?: boolean): Pkg.Store;

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
    static withField(field: string, value: any, doNotConvert?: boolean): Pkg.Store;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Pkg.Store;

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
    static withField(field: FieldType, value: any, doNotConvert?: boolean): Pkg.Store;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Pkg.Store;

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
    static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Pkg.Store;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Pkg.Store;

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
    static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Pkg.Store;

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
    withoutFieldAtPath(path: string): Pkg.Store;

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
    static withoutFieldAtPath(path: string): Pkg.Store;

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
    withoutField(field: string | null): Pkg.Store;

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
    static withoutField(field: string | null): Pkg.Store;

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
    withoutField(field: FieldType | null): Pkg.Store;

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
    static withoutField(field: FieldType | null): Pkg.Store;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Pkg.Store;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    static withoutFields(fields: C3.Array<string | null> | null): Pkg.Store;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Pkg.Store;

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
    static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Pkg.Store;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Pkg.Store;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    static withoutSecretFields(): Pkg.Store;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Pkg.Store;

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
    static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Pkg.Store;

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
    defaultField(field: string): Pkg.Store;

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
    static defaultField(field: string): Pkg.Store;

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
    defaultField(field: FieldType): Pkg.Store;

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
    static defaultField(field: FieldType): Pkg.Store;

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
    unsetField(field: string): Pkg.Store;

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
    static unsetField(field: string): Pkg.Store;

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
    unsetField(field: FieldType): Pkg.Store;

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
    static unsetField(field: FieldType): Pkg.Store;

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
    removeField(field: string): Pkg.Store;

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
    static removeField(field: string): Pkg.Store;

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
    removeField(field: FieldType): Pkg.Store;

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
    static removeField(field: FieldType): Pkg.Store;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Pkg.Store;

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
    static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Pkg.Store;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Pkg.Store;

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
    static mergeObj(other: Obj | null, otherFieldsFilter: Type): Pkg.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Pkg.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Pkg.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Pkg.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Pkg.Store;

    mergeJson(json: any | null): Pkg.Store;

    static mergeJson(json: any | null): Pkg.Store;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Pkg.Store;

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
    static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Pkg.Store;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Pkg.Store;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    static sumObj(other: Obj | null, deep?: boolean): Pkg.Store;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Pkg.Store | null>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonArray(): C3.Array<Pkg.Store | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Pkg.Store | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Pkg.Store | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Pkg.Store | null>;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonSet(): C3.Set<Pkg.Store | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Pkg.Store | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Pkg.Store | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Pkg.Store | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Pkg.Store | null>;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    static toBuilder(): ObjBuilder<Pkg.Store | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Pkg.Store | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Pkg.Store;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Pkg.Store;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Pkg.Store;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Pkg.Store;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Pkg.Store;

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
    static make(fields: any, withDefaults?: boolean): Pkg.Store;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): Pkg.Store | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Pkg.Store;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): Pkg.Store;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static afterMake(): Pkg.Store;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Pkg.Store;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Pkg.Store>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Pkg.Store;

    /**
     * @return all root pkg names in store.
     */
    pkgs(): C3.Array<string | null>;

    /**
     * @return all root pkg names in store.
     */
    static pkgs(): C3.Array<string | null>;

    /**
     * @return all available root pkg names and versions
     */
    pkgVersions(): C3.Map<string | null, string | null>;

    /**
     * @return all available root pkg names and versions
     */
    static pkgVersions(): C3.Map<string | null, string | null>;

    /**
     * @return true if given package is available in this store.
     */
    pkgExists(name: string): boolean;

    /**
     * @return true if given package is available in this store.
     */
    static pkgExists(name: string): boolean;

    /**
     * @return  file.paths available in this store filtered by pathPrefixOrGlob. If includeDeps is true, then dependency
     *          package paths will included with Pkg.Path.Overlay.Dep.
     */
    paths(pathPrefixOrGlob?: string | null, includeDeps?: boolean): C3.Set<Pkg.Path | null>;

    /**
     * @return  file.paths available in this store filtered by pathPrefixOrGlob. If includeDeps is true, then dependency
     *          package paths will included with Pkg.Path.Overlay.Dep.
     */
    static paths(pathPrefixOrGlob?: string | null, includeDeps?: boolean): C3.Set<Pkg.Path | null>;

    /**
     * checks if the given path exists.
     */
    pathExists(path: string): boolean;

    /**
     * checks if the given path exists.
     */
    static pathExists(path: string): boolean;

    /**
     * @return fingerprint of provided content
     * @see Pkg#fileFingerprint
     */
    static fingerprintEncodedContent(content?: any | null): string;

    /**
     * @return fingerprint of the requested path
     * @see Pkg#fileFingerprint
     */
    readFingerprint(pkgPath: string): string | null;

    /**
     * @return fingerprint of the requested path
     * @see Pkg#fileFingerprint
     */
    static readFingerprint(pkgPath: string): string | null;

    /**
     * @return fingerprints of paths requested.
     * @see Pkg#fileFingerprint
     */
    readFingerprints(pkgPaths: C3.Array<string | null>): C3.Map<string, string | null>;

    /**
     * @return fingerprints of paths requested.
     * @see Pkg#fileFingerprint
     */
    static readFingerprints(pkgPaths: C3.Array<string | null>): C3.Map<string, string | null>;

    /**
     * @return fingerprints of paths requested.
     * @see Pkg#fileFingerprint
     */
    readFingerprints(pkgPaths: Collection<Pkg.Path | null>): C3.Map<string, string | null>;

    /**
     * @return fingerprints of paths requested.
     * @see Pkg#fileFingerprint
     */
    static readFingerprints(pkgPaths: Collection<Pkg.Path | null>): C3.Map<string, string | null>;

    /**
     * Remove cached entries of fingerprints for given paths.
     */
    evictFingerprints(paths: C3.Array<string | null>): void;

    /**
     * Remove cached entries of fingerprints for given paths.
     */
    static evictFingerprints(paths: C3.Array<string | null>): void;

    /**
     * Read content for a given path from this Pkg.Store.
     * @see readEncodedContent and readContentString
     */
    content(path: string, failIfMissing?: boolean): Content | null;

    /**
     * Read content for a given path from this Pkg.Store.
     * @see readEncodedContent and readContentString
     */
    static content(path: string, failIfMissing?: boolean): Content | null;

    /**
     * Read the bytes for a given path from this Pkg.Store.
     * @see content and readContentString
     */
    readEncodedContent(pkgPath: string, failIfMissing?: boolean): any | null;

    /**
     * Read the bytes for a given path from this Pkg.Store.
     * @see content and readContentString
     */
    static readEncodedContent(pkgPath: string, failIfMissing?: boolean): any | null;

    /**
     * read content as a string from this store for a path.
     * @see content and readEncodedContent
     */
    readContentString(pkgPath: string, failIfMissing?: boolean): string | null;

    /**
     * read content as a string from this store for a path.
     * @see content and readEncodedContent
     */
    static readContentString(pkgPath: string, failIfMissing?: boolean): string | null;

    /**
     * Reads contents for given paths from this Pkg.Store.
     */
    contents(paths: C3.Array<string | null>, failIfMissing?: boolean): C3.Map<string | null, Content | null>;

    /**
     * Reads contents for given paths from this Pkg.Store.
     */
    static contents(paths: C3.Array<string | null>, failIfMissing?: boolean): C3.Map<string | null, Content | null>;

    /**
     * Reads contents for given paths from this Pkg.Store out as binary.
     */
    readEncodedContents(pkgPaths: C3.Array<string | null>, failIfMissing?: boolean): C3.Map<string | null, any | null>;

    /**
     * Reads contents for given paths from this Pkg.Store out as binary.
     */
    static readEncodedContents(pkgPaths: C3.Array<string | null>, failIfMissing?: boolean): C3.Map<string | null, any | null>;

    /**
     * Read contents for pathPrefix Or Glob from this Pkg.Store.
     */
    readEncodedContents(pathPrefixOrGlob: string, includeDeps?: boolean): C3.Map<string | null, any | null>;

    /**
     * Read contents for pathPrefix Or Glob from this Pkg.Store.
     */
    static readEncodedContents(pathPrefixOrGlob: string, includeDeps?: boolean): C3.Map<string | null, any | null>;

    /**
     * Write the given content to this Pkg.Store at provided Pkg.Path. Will fail if this Pkg.Store is {@link #isReadOnly}.
     * Users may call `pkg().writeContent(content) or pkg().file().writeContent(content)`, which will
     * call this api to persist, if pkg() is backed by updatable store e.g Pkg.Store.Db, Pkg.Store.Local, Pkg.Store.Vcs.
     */
    writeEncodedContent(pkgPath: string, content?: any | null, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * Write the given content to this Pkg.Store at provided Pkg.Path. Will fail if this Pkg.Store is {@link #isReadOnly}.
     * Users may call `pkg().writeContent(content) or pkg().file().writeContent(content)`, which will
     * call this api to persist, if pkg() is backed by updatable store e.g Pkg.Store.Db, Pkg.Store.Local, Pkg.Store.Vcs.
     */
    static writeEncodedContent(pkgPath: string, content?: any | null, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * write content to this store as string.
     * @see writeEncodedContent
     */
    writeContentString(pkgPath: string, content: string): void;

    /**
     * write content to this store as string.
     * @see writeEncodedContent
     */
    static writeContentString(pkgPath: string, content: string): void;

    /**
     * write content to this store.
     */
    writeContent(content: Content | null): void;

    /**
     * write content to this store.
     */
    static writeContent(content: Content | null): void;

    /**
     * Write the given contents to this Pkg.Store at provided Pkg.Path. Will fail if this Pkg.Store is {@link #isReadOnly}.
     * Do any cache invalidations.
     */
    writeEncodedContents(pathToContent?: C3.Map<string | null, any | null>, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * Write the given contents to this Pkg.Store at provided Pkg.Path. Will fail if this Pkg.Store is {@link #isReadOnly}.
     * Do any cache invalidations.
     */
    static writeEncodedContents(pathToContent?: C3.Map<string | null, any | null>, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * Delete given pkg path and content from store.
     */
    deleteContent(pkgPath: string, confirm?: boolean): void;

    /**
     * Delete given pkg path and content from store.
     */
    static deleteContent(pkgPath: string, confirm?: boolean): void;

    /**
     * Delete given pkg paths and contents from store.
     */
    deleteContents(pkgPaths: C3.Array<string | null>, confirm?: boolean): void;

    /**
     * Delete given pkg paths and contents from store.
     */
    static deleteContents(pkgPaths: C3.Array<string | null>, confirm?: boolean): void;

    /**
     * Returns true if the store is not writable. e.g. Pkg.Store.Java, Pkg.Store.Zip.
     */
    isReadOnly(): boolean;

    /**
     * Returns true if the store is not writable. e.g. Pkg.Store.Java, Pkg.Store.Zip.
     */
    static isReadOnly(): boolean;

    /**
     * return Pkg.Decl for the given pkgName from this store. Null if Pkg.Decl is missing or contains critical issues.
     */
    pkgDecl(pkgName: string, failIfMissing?: boolean): Pkg.Decl | null;

    /**
     * return Pkg.Decl for the given pkgName from this store. Null if Pkg.Decl is missing or contains critical issues.
     */
    static pkgDecl(pkgName: string, failIfMissing?: boolean): Pkg.Decl | null;

    /**
     * return Pkg.Decl for the given pkgName from this store as well as any errors in the Pkg.Decl.
     */
    pkgDeclAndIssues(pkgName: string, failIfMissing?: boolean): Pair<Pkg.Decl | null, Pkg.Issue | null> | null;

    /**
     * return Pkg.Decl for the given pkgName from this store as well as any errors in the Pkg.Decl.
     */
    static pkgDeclAndIssues(pkgName: string, failIfMissing?: boolean): Pair<Pkg.Decl | null, Pkg.Issue | null> | null;

    /**
     * return a best attempt of the parsed Pkg.Decl, suppressing any non-critical issues like incorrect fields.
     * If the issue is critical, such as being unparsable, Pkg.Decl will be null and Pkg.Issue will be set.
     * If the issue is non-critical, Pkg.Decl and Pkg.Issue will both be set.
     */
    static parsePkgDecl(pkgDecl: string, url?: Pkg.Path | null): Pair<Pkg.Decl | null, Pkg.Issue | null> | null;

    /**
     * @return all {@link Pkg.Path}s that point to a serialized {@link Pkg.Decl} (aka .c3pkg.json).
     */
    pkgDeclPaths(): C3.Set<Pkg.Path | null>;

    /**
     * @return all {@link Pkg.Path}s that point to a serialized {@link Pkg.Decl} (aka .c3pkg.json).
     */
    static pkgDeclPaths(): C3.Set<Pkg.Path | null>;

    /**
     * Write Pkg.Decl with given name and dependencies to store.
     */
    writePkgDecl(name: string, dependencies?: C3.Map<string | null, string | null>, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * Write Pkg.Decl with given name and dependencies to store.
     */
    static writePkgDecl(name: string, dependencies?: C3.Map<string | null, string | null>, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
     *
     * @param secrets
     *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
     *          fields. Otherwise configuration will not have values for secrets.
     * @return instance of configuration - never `null`.
     */
    config(secrets?: boolean): Pkg.Store.Config;

    /**
     * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
     *
     * @param secrets
     *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
     *          fields. Otherwise configuration will not have values for secrets.
     * @return instance of configuration - never `null`.
     */
    static config(secrets?: boolean): Pkg.Store.Config;

    /**
     * @return configuration key for this instance.
     */
    configKey(): string | null;

    /**
     * @return configuration key for this instance.
     */
    static configKey(): string | null;

    /**
     * @return configuration key for this type assuming it is singleton.
     */
    configSingletonKey(): string | null;

    /**
     * @return configuration key for this type assuming it is singleton.
     */
    static configSingletonKey(): string | null;

    /**
     * @return type configuration for the given {@link Configurable} type.
     * E.g. {@see REST} & {@see RestConfig}
     */
    static typeConfig(): Pkg.Store.Config;

    /**
     * @return the default instance to be used when member functions are called on this type. E.g.
     *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
     *         instance is a singleton or not.
     */
    static inst(): Pkg.Store;

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
    singletonMap(): C3.Map<string | null, WithKey | null>;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    static singletonMap(): C3.Map<string | null, WithKey | null>;

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
    static fromString(s: string | null): Pkg.Store | null;

    /**
     * Get the single instance of this Named Type by name.
     * @param name
     *         The unique name of the instance to retrieve.
     * @param failIfMissing
     *         If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
     *         returned.
     * @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
     *         retrieve instance from cache.
     */
    static forName(name: string | null, failIfMissing?: boolean): Pkg.Store | null;

    /**
     * @return root pkg instance for given name.
     */
    pkg(name: string, appMode?: string | null, failIfMissing?: boolean): Pkg | null;

    /**
     * @return root pkg instance for given name.
     */
    static pkg(name: string, appMode?: string | null, failIfMissing?: boolean): Pkg | null;

    /**
     * @return an instance of pkg which is declared as dependency for another pkg. For an updatable pkg in store,
     *         the instance returned will be different from root pkg instance returned by {@link pkg} call.
     */
    depPkg(name: string, appMode?: string | null, version?: string | null, failIfMissing?: boolean): Pkg | null;

    /**
     * @return an instance of pkg which is declared as dependency for another pkg. For an updatable pkg in store,
     *         the instance returned will be different from root pkg instance returned by {@link pkg} call.
     */
    static depPkg(name: string, appMode?: string | null, version?: string | null, failIfMissing?: boolean): Pkg | null;

    /**
     *  If this store is configured with a Pkg.Store.Nested that is writable (i.e Pkg.Store.Db, Pkg.Store.Local),
     * Pkg.Files in that store are editable.
     *
     * @return pkg names that are updatable.
     */
    updatablePkgNames(): C3.Array<string | null>;

    /**
     *  If this store is configured with a Pkg.Store.Nested that is writable (i.e Pkg.Store.Db, Pkg.Store.Local),
     * Pkg.Files in that store are editable.
     *
     * @return pkg names that are updatable.
     */
    static updatablePkgNames(): C3.Array<string | null>;

    /**
     * Returns true, if the given pkg exists and is updatable in Pkg.Store.
     */
    isPkgUpdatable(pkgName: string): boolean;

    /**
     * Returns true, if the given pkg exists and is updatable in Pkg.Store.
     */
    static isPkgUpdatable(pkgName: string): boolean;

    /**
     * Returns all deep dependency packages for given package, ordered from deep to shallow
     */
    dependencyPkgDecls(pkgName: string): C3.Map<string | null, Pkg.Decl | null>;

    /**
     * Returns all deep dependency packages for given package, ordered from deep to shallow
     */
    static dependencyPkgDecls(pkgName: string): C3.Map<string | null, Pkg.Decl | null>;

    /**
     * returns list of all packages that depend on the given package that are available in this Pkg.Store.
     */
    dependentPkgNames(pkgName: string): C3.Array<string | null>;

    /**
     * returns list of all packages that depend on the given package that are available in this Pkg.Store.
     */
    static dependentPkgNames(pkgName: string): C3.Array<string | null>;

    /**
     * return nested store serving the given pkg.
     */
    nestedForPkg(name: string, failIfMissing?: boolean): Pkg.Store.Nested | null;

    /**
     * return nested store serving the given pkg.
     */
    static nestedForPkg(name: string, failIfMissing?: boolean): Pkg.Store.Nested | null;

    /**
     * return nested store serving the given pkgPath.
     */
    nestedForPath(pkgPath: string, failIfMissing?: boolean): Pkg.Store.Nested | null;

    /**
     * return nested store serving the given pkgPath.
     */
    static nestedForPath(pkgPath: string, failIfMissing?: boolean): Pkg.Store.Nested | null;

    /**
     * call provided action for each configured Pkg.Store.Nested. see @Pkg.Store.Config.
     */
    eachNested(action?: λConsumer<Pkg.Store.Nested | null> | null): void;

    /**
     * call provided action for each configured Pkg.Store.Nested. see @Pkg.Store.Config.
     */
    static eachNested(action?: λConsumer<Pkg.Store.Nested | null> | null): void;

    /**
     * returns writable store from configured stores, null if none exist.
     */
    writable(): Pkg.Store.Nested | null;

    /**
     * returns writable store from configured stores, null if none exist.
     */
    static writable(): Pkg.Store.Nested | null;

    /**
     * returns existing instances of nested stores from configured stores.
     * This prevents creating new instances each time stores are accessed, avoiding cache misses and duplicated operations.
     */
    get storeInsts(): C3.Array<Pkg.Store.Nested | null>;

    /**
     * returns existing instances of nested stores from configured stores.
     * This prevents creating new instances each time stores are accessed, avoiding cache misses and duplicated operations.
     */
    static get storeInsts(): C3.Array<Pkg.Store.Nested | null>;

    /**
     * returns the event notifier that keeps track push streams and notifies those an on new event.
     */
    eventNotifier(): Pkg.Store.EventNotifier | null;

    /**
     * returns the event notifier that keeps track push streams and notifies those an on new event.
     */
    static eventNotifier(): Pkg.Store.EventNotifier | null;

    /**
     * Listen to {@link Pkg.File.Event} produced by this Pkg Store changes.
     * @return a handle to EventStream and current {@link Pkg.Store.State} for the Pkg Store.
     */
    listen(): Pkg.Store.ListenResult | null;

    /**
     * Listen to {@link Pkg.File.Event} produced by this Pkg Store changes.
     * @return a handle to EventStream and current {@link Pkg.Store.State} for the Pkg Store.
     */
    static listen(): Pkg.Store.ListenResult | null;

    /**
     * To listen to current app's env default Pkg.Store
     */
    static listenInEnv(): Pkg.Store.ListenResult | null;

    /**
     * @return the current state of the Pkg.Store, including list of all existing {@link Pkg.Issue} in this store,
     * and the next expected sequence number for {@link Pkg.File.Event#sequenceNum}.
     */
    state(): Pkg.Store.State | null;

    /**
     * @return the current state of the Pkg.Store, including list of all existing {@link Pkg.Issue} in this store,
     * and the next expected sequence number for {@link Pkg.File.Event#sequenceNum}.
     */
    static state(): Pkg.Store.State | null;

    /**
     * Fire the given event. This api is for testing purpose only.
     */
    fireFileEvent(e: Pkg.File.Event): void;

    /**
     * Fire the given event. This api is for testing purpose only.
     */
    static fireFileEvent(e: Pkg.File.Event): void;

    /**
     * run validation of provided paths. Any issues will be written to store and events will be generated.
     */
    validatePaths(pkgPaths: C3.Array<string | null>, synchronous?: boolean): void;

    /**
     * run validation of provided paths. Any issues will be written to store and events will be generated.
     */
    static validatePaths(pkgPaths: C3.Array<string | null>, synchronous?: boolean): void;

    /**
     * Run validation of the provided pkg synchronously.
     */
    validatePkg(pkgName: string): void;

    /**
     * Run validation of the provided pkg synchronously.
     */
    static validatePkg(pkgName: string): void;

    /**
     * run validation of provided updatable pkgs.  Any issues will be written to store and events will be generated.
     */
    validatePkgs(pkgNames: C3.Array<string | null>, synchronous?: boolean): void;

    /**
     * run validation of provided updatable pkgs.  Any issues will be written to store and events will be generated.
     */
    static validatePkgs(pkgNames: C3.Array<string | null>, synchronous?: boolean): void;

    /**
     * run validation of all updatablePkgs. Any issues will be written to store and events will be generated.
     */
    validateAll(): void;

    /**
     * run validation of all updatablePkgs. Any issues will be written to store and events will be generated.
     */
    static validateAll(): void;

    /**
     * Run ui bundler for given pkg. Pkg is expected to be updatable.
     * @param pkgName - name of the package to bundle ui
     * @param spec - spec to control ui bundling behavior
     * @param isCliTester - true if running in a standalone cli tester mode, false otherwise
     */
    bundleUiFor(pkgName: string, spec?: Pkg.Store.BundleUiSpec | null, isCliTester?: boolean): void;

    /**
     * Run ui bundler for given pkg. Pkg is expected to be updatable.
     * @param pkgName - name of the package to bundle ui
     * @param spec - spec to control ui bundling behavior
     * @param isCliTester - true if running in a standalone cli tester mode, false otherwise
     */
    static bundleUiFor(pkgName: string, spec?: Pkg.Store.BundleUiSpec | null, isCliTester?: boolean): void;

    /**
     * Runs migrations for a given package from all the depending packages that have not been run yet. Expectation is that
     * given package is writable and that user has permission to start a new single node app.
     *
     * @return number of migrations migrations run successfully; 0 if there was no migration to run; throws error and
     *         aborts the run if there was a migration to run but it failed.
     *
     * @see {@link Pkg.Category#MIGRATION}
     * @see {@link Pkg.Store#appyPkgMigration}
     */
    migratePkg(targetPkg: string): number;

    /**
     * Runs migrations for a given package from all the depending packages that have not been run yet. Expectation is that
     * given package is writable and that user has permission to start a new single node app.
     *
     * @return number of migrations migrations run successfully; 0 if there was no migration to run; throws error and
     *         aborts the run if there was a migration to run but it failed.
     *
     * @see {@link Pkg.Category#MIGRATION}
     * @see {@link Pkg.Store#appyPkgMigration}
     */
    static migratePkg(targetPkg: string): number;

    /**
     * Runs a specific migration from one of the depending packages in the provided package if have not been run yet.
     * Expectation is that root package of the app where this action is running contains given migration and that target
     * package is writable and has a dependency to migration source package.
     *
     * @return true if provided migration was not run before and run successfully; false if there was no migration to run;
     *         and throws error and aborts the run on failure.
     *
     * @see {@link Pkg.Category#MIGRATION}
     * @see {@link Pkg.Store#migratePkg}
     */
    applyPkgMigration(targetPkg: string, migration: string): boolean;

    /**
     * Runs a specific migration from one of the depending packages in the provided package if have not been run yet.
     * Expectation is that root package of the app where this action is running contains given migration and that target
     * package is writable and has a dependency to migration source package.
     *
     * @return true if provided migration was not run before and run successfully; false if there was no migration to run;
     *         and throws error and aborts the run on failure.
     *
     * @see {@link Pkg.Category#MIGRATION}
     * @see {@link Pkg.Store#migratePkg}
     */
    static applyPkgMigration(targetPkg: string, migration: string): boolean;

    /**
     * synchronously validates the given Pkg. If pkg is updatable.
     */
    doValidatePkg(pkgName: string): void;

    /**
     * synchronously validates the given Pkg. If pkg is updatable.
     */
    static doValidatePkg(pkgName: string): void;

    /**
     * synchronously validates the given Pkg.Paths.
     */
    doValidatePaths(pkgPaths: C3.Array<string | null>): void;

    /**
     * synchronously validates the given Pkg.Paths.
     */
    static doValidatePaths(pkgPaths: C3.Array<string | null>): void;

    /**
     * Return true if there are no validation actions running.
     */
    isValidationComplete(): boolean;

    /**
     * Return true if there are no validation actions running.
     */
    static isValidationComplete(): boolean;

    /**
     * Return pending validation requests currently queued inside this store.
     * keys: 'pkgs' and 'paths'
     */
    pendingValidations(): C3.Map<string | null, C3.Array<string | null>>;

    /**
     * Return pending validation requests currently queued inside this store.
     * keys: 'pkgs' and 'paths'
     */
    static pendingValidations(): C3.Map<string | null, C3.Array<string | null>>;

    /**
     * return all issues for all available files in store.
     */
    issues(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

    /**
     * return all issues for all available files in store.
     */
    static issues(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

    /**
     * return all issues for the given file
     */
    issuesForFile(file: string): C3.Array<Pkg.Issue | null>;

    /**
     * return all issues for the given file
     */
    static issuesForFile(file: string): C3.Array<Pkg.Issue | null>;

    /**
     * return all issues for the given pkgName
     */
    issuesForPkg(pkgName: string): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

    /**
     * return all issues for the given pkgName
     */
    static issuesForPkg(pkgName: string): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

    /**
     * return  pkg path of any issues to be written for a given pkg.path.
     *        e.g for `meta://pkgA/seed/Feature/testR%23id.json` this returns
     *                `meta://pkgA/gen/cache/Pkg.Issue/pkgA%2Fseed%2FFeature%2FtestR%2523id.json`
     */
    static issuePathForFile(pkgPath?: string | null): string;

    /**
     * Utility function to help gauge what files are present in Pkg.Store but not the `reportOn` Pkg.
     * Ignores generated files.
     * A Pkg can be correct even if there's a path in the store. For example, meta://zoo/garbage/pkgfile.abc won't be
     * recognized by the Pkg API, but Pkg.Store will still have the path.
     *
     * @param reportOn
     *        The Pkg object to report on. Useful Pkgs to check can be from Pkg.Store#pkg or C3#pkg.
     * @param pathPrefixOrGlob
     *        If empty Pkg.Store will check all files it has associated for a Pkg against the `reportOn` Pkg.
     * @return Map: Pkg#name -> [{@link Pkg.Path}s present in Pkg.Store but not Pkg#paths].
     *        If there are no missing paths then there will not be an entry in the Map.
     */
    pathsNotPresentInPkg(reportOn: Pkg, pathPrefixOrGlob?: string | null): C3.Map<string | null, C3.Array<Pkg.Path | null>> | null;

    /**
     * Utility function to help gauge what files are present in Pkg.Store but not the `reportOn` Pkg.
     * Ignores generated files.
     * A Pkg can be correct even if there's a path in the store. For example, meta://zoo/garbage/pkgfile.abc won't be
     * recognized by the Pkg API, but Pkg.Store will still have the path.
     *
     * @param reportOn
     *        The Pkg object to report on. Useful Pkgs to check can be from Pkg.Store#pkg or C3#pkg.
     * @param pathPrefixOrGlob
     *        If empty Pkg.Store will check all files it has associated for a Pkg against the `reportOn` Pkg.
     * @return Map: Pkg#name -> [{@link Pkg.Path}s present in Pkg.Store but not Pkg#paths].
     *        If there are no missing paths then there will not be an entry in the Map.
     */
    static pathsNotPresentInPkg(reportOn: Pkg, pathPrefixOrGlob?: string | null): C3.Map<string | null, C3.Array<Pkg.Path | null>> | null;

    /**
     * return path of .c3pkg.json file for given package. eg. "meta://foundation/foundation.c3pkg.json".
     */
    static pkgDeclPath(name: string): string;

    /**
     * clear existing config and setup config for this store with given stores
     * and include Pkg.Store.Java, if not present.
     *
     * @see Pkg.Store.Config
     */
    configureWithNested(...stores: Pkg.Store.Nested | null[]): void;

    /**
     * clear existing config and setup config for this store with given stores
     * and include Pkg.Store.Java, if not present.
     *
     * @see Pkg.Store.Config
     */
    static configureWithNested(...stores: Pkg.Store.Nested | null[]): void;

    /**
     * Will append given nested stores to existing config, will include Pkg.Store.Java, if not present.
     */
    addNestedToConfig(...store: Pkg.Store.Nested | null[]): void;

    /**
     * Will append given nested stores to existing config, will include Pkg.Store.Java, if not present.
     */
    static addNestedToConfig(...store: Pkg.Store.Nested | null[]): void;

    /**
     * removes the given nested stores from this store's config.
     */
    removeNestedFromConfig(...stores: Pkg.Store.Nested | null[]): void;

    /**
     * removes the given nested stores from this store's config.
     */
    static removeNestedFromConfig(...stores: Pkg.Store.Nested | null[]): void;

    /**
     * Remove unused versions of nested zip stores stating with given pkgName.
     * Store name starting with rootPkg +"." + rootPkgVersion of current env's apps will not be removed.
     */
    removeUnusedZipStoresForPkg(pkgName: string): void;

    /**
     * Remove unused versions of nested zip stores stating with given pkgName.
     * Store name starting with rootPkg +"." + rootPkgVersion of current env's apps will not be removed.
     */
    static removeUnusedZipStoresForPkg(pkgName: string): void;

    /**
     * Write given Pkg.Decl as an updatable pkg. If there is no writable store, Pkg.Store will be configured
     * to have Pkg.Store.Db as writable.
     *
     * Will throw error, if the pkg already exists
     */
    createPkg(pkgDecl: Pkg.Decl, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * Write given Pkg.Decl as an updatable pkg. If there is no writable store, Pkg.Store will be configured
     * to have Pkg.Store.Db as writable.
     *
     * Will throw error, if the pkg already exists
     */
    static createPkg(pkgDecl: Pkg.Decl, spec?: Pkg.Store.WriteSpec | null): void;

    /**
     * get the Git workspace configured for this Pkg.Store.
     * @see configureWithGit.
     */
    git(failIfNotConfigured?: boolean): Pkg.Store.Git | null;

    /**
     * get the Git workspace configured for this Pkg.Store.
     * @see configureWithGit.
     */
    static git(failIfNotConfigured?: boolean): Pkg.Store.Git | null;

    /**
     * Return true if this store is configured to sync with Git branch.
     */
    isGitConfigured(): boolean;

    /**
     * Return true if this store is configured to sync with Git branch.
     */
    static isGitConfigured(): boolean;

    /**
     * Will configure given Git branch with Pkg.Store to sync changes.
     *
     *  If provided branch does not exist, create using base branch in repoUrl, if base branch is not available, throws error.
     */
    configureGit(gitBranch: Pkg.Store.Git.Branch, spec?: Pkg.Store.Git.ConfigureSpec | null): Pkg.Store.Git | null;

    /**
     * Will configure given Git branch with Pkg.Store to sync changes.
     *
     *  If provided branch does not exist, create using base branch in repoUrl, if base branch is not available, throws error.
     */
    static configureGit(gitBranch: Pkg.Store.Git.Branch, spec?: Pkg.Store.Git.ConfigureSpec | null): Pkg.Store.Git | null;

    /**
     * Configures a {@link Pkg.Store.Nested} (nested {@link Pkg.Store}) with the provided root pkg so that it can be used to create
     * {@link Pkg} instance. The specific subtype of the **nested Pkg.Store** may vary and is left to the {@link Pkg.Store}
     * to decide.
     * Please note that this configuration is different from the connect spec which may be needed to interact securely
     * with {@Artifact.Hub} and is specific to configs which will be needed that Pkg.Store is only concerned about the
     * the root pkgs and its dependencies when interacting with **Artifact.Hub**.
     * If cleanupUnused is true, will remove any pkg versions of this pkg that are not used by any app as rootPkg.
     */
    configureNestedFromArtifactHub(pkgName: string, version: string, cleanupUnused?: boolean): void;

    /**
     * Configures a {@link Pkg.Store.Nested} (nested {@link Pkg.Store}) with the provided root pkg so that it can be used to create
     * {@link Pkg} instance. The specific subtype of the **nested Pkg.Store** may vary and is left to the {@link Pkg.Store}
     * to decide.
     * Please note that this configuration is different from the connect spec which may be needed to interact securely
     * with {@Artifact.Hub} and is specific to configs which will be needed that Pkg.Store is only concerned about the
     * the root pkgs and its dependencies when interacting with **Artifact.Hub**.
     * If cleanupUnused is true, will remove any pkg versions of this pkg that are not used by any app as rootPkg.
     */
    static configureNestedFromArtifactHub(pkgName: string, version: string, cleanupUnused?: boolean): void;

    /**
     * Configures a {@link Pkg.Store.Nested} for all of the dependencies needed by all writable {@link Pkg.Store.Nested}.
     * It performs the following operations:
     * - Creates a flattened list of all dependencies needed by all writable {@link Pkg}
     * - Resolves the best version of each dependency using {@link ArtifactHub#resolveDependencies}
     * - Configures the appropriate {@link Pkg.Store.Nested} for each dependency using root pkg artifacts in
     * {@link ArtifactHub}
     *
     * @param force
     *           If true, re-resolve all dependencies from {@link ArtifactHub} even if they have already been resolved.
     * @param ignoreLocks
     *           If true, locks will be ignored during resolution and regenerated once complete.
     */
    configureNestedFromArtifactHub(force?: boolean, ignoreLocks?: boolean): void;

    /**
     * Configures a {@link Pkg.Store.Nested} for all of the dependencies needed by all writable {@link Pkg.Store.Nested}.
     * It performs the following operations:
     * - Creates a flattened list of all dependencies needed by all writable {@link Pkg}
     * - Resolves the best version of each dependency using {@link ArtifactHub#resolveDependencies}
     * - Configures the appropriate {@link Pkg.Store.Nested} for each dependency using root pkg artifacts in
     * {@link ArtifactHub}
     *
     * @param force
     *           If true, re-resolve all dependencies from {@link ArtifactHub} even if they have already been resolved.
     * @param ignoreLocks
     *           If true, locks will be ignored during resolution and regenerated once complete.
     */
    static configureNestedFromArtifactHub(force?: boolean, ignoreLocks?: boolean): void;

    /**
     * Validates that all configured Pkg.Store.Zip artifacts still exist in Artifact Hub.
     * This is useful for detecting when artifacts have been deleted from Artifact Hub between syncs.
     * Writes Pkg.Issues for any missing artifacts to all writable packages.
     * If failIfMissing is true, will throw error if any configured artifacts are missing.
     */
    validateConfiguredArtifactsExist(failIfMissing?: boolean): void;

    /**
     * Validates that all configured Pkg.Store.Zip artifacts still exist in Artifact Hub.
     * This is useful for detecting when artifacts have been deleted from Artifact Hub between syncs.
     * Writes Pkg.Issues for any missing artifacts to all writable packages.
     * If failIfMissing is true, will throw error if any configured artifacts are missing.
     */
    static validateConfiguredArtifactsExist(failIfMissing?: boolean): void;

    /**
     * Setup PkgStore with given zip artifact file. If pkgNameWithVersion is not provided, will use zip fileName.
     */
    configureWithZip(zipUrl: string, pkgNameWithVersion?: string | null): void;

    /**
     * Setup PkgStore with given zip artifact file. If pkgNameWithVersion is not provided, will use zip fileName.
     */
    static configureWithZip(zipUrl: string, pkgNameWithVersion?: string | null): void;

    /**
     * setup config for default store with nested stores Pkg.Store.Db and Pkg.Store.Java and return the store.
     * If `doNotClearExisting` is true, existing nested stores will not be removed from config.
     */
    static configureDevStore(doNotClearExisting?: boolean): Pkg.Store | null;

    /**
     * clear all caches on Pkg.Store.
     */
    clearCaches(): void;

    /**
     * clear all caches on Pkg.Store.
     */
    static clearCaches(): void;

    /**
     * Replace cached Pkg instance for given pkgName.
     */
    replaceCachedPkg(pkgName: string): void;

    /**
     * Replace cached Pkg instance for given pkgName.
     */
    static replaceCachedPkg(pkgName: string): void;

    /**
     * Remove the pkg instance from Pkg.Store.
     */
    evictPkg(pkgName: string, mode: string): void;

    /**
     * Remove the pkg instance from Pkg.Store.
     */
    static evictPkg(pkgName: string, mode: string): void;

    /**
     * Copy a readonly pkg to writable store.
     */
    copyPkgToWritable(pkgName: string): void;

    /**
     * Copy a readonly pkg to writable store.
     */
    static copyPkgToWritable(pkgName: string): void;

    /**
     * Copies a set of readonly Pkgs to writable store.
     */
    copyPkgsToWritable(...pkgNames: string | null[]): void;

    /**
     * Copies a set of readonly Pkgs to writable store.
     */
    static copyPkgsToWritable(...pkgNames: string | null[]): void;

    /**
     * Copies a set of packages to writable store from zip file.
     *
     * @param url
     *          url for accessing zip content
     * @param skipValidation
     *          if true, validation of pkgs will not done.
     * return list of pkg names that are copied.
     */
    copyPkgsToWritableFromZip(url: string, skipValidation?: boolean): C3.Array<string | null>;

    /**
     * Copies a set of packages to writable store from zip file.
     *
     * @param url
     *          url for accessing zip content
     * @param skipValidation
     *          if true, validation of pkgs will not done.
     * return list of pkg names that are copied.
     */
    static copyPkgsToWritableFromZip(url: string, skipValidation?: boolean): C3.Array<string | null>;

    /**
     * Copies updatable packages from writable store to local directory.
     *
     * @param localPkgsRoot
     *          local directory path. ( ex: /tmp/repo/)
     * @param pathSelector
     *          test function to select the files of the package to copy.
     */
    copyUpdatablePkgsToLocal(localPkgsRoot: string, pathFilter?: λPredicate<Pkg.Path | null> | null): void;

    /**
     * Copies updatable packages from writable store to local directory.
     *
     * @param localPkgsRoot
     *          local directory path. ( ex: /tmp/repo/)
     * @param pathSelector
     *          test function to select the files of the package to copy.
     */
    static copyUpdatablePkgsToLocal(localPkgsRoot: string, pathFilter?: λPredicate<Pkg.Path | null> | null): void;

    /**
     * Copies updatable packages from writable store to local directory.
     *
     * @param localPkgsRoot
     *           local directory path. ( ex: /tmp/repo/)
     * @param skipGenerated
     *          if true, generated files will not be copied.
     */
    copyUpdatablePkgsToLocal(localPkgsRoot: string, skipGenerated?: boolean): void;

    /**
     * Copies updatable packages from writable store to local directory.
     *
     * @param localPkgsRoot
     *           local directory path. ( ex: /tmp/repo/)
     * @param skipGenerated
     *          if true, generated files will not be copied.
     */
    static copyUpdatablePkgsToLocal(localPkgsRoot: string, skipGenerated?: boolean): void;

    /**
     * Copies a set of packages to writable store from local filesystem.
     *
     * @param localRoot
     *          local filessystem path to pkgs
     * @param skipValidation
     *          if true, validation of pkgs will not done.
     * return list of pkg names that are copied.
     */
    copyPkgsToWritableFromLocal(url: string, skipValidation?: boolean): C3.Array<string | null>;

    /**
     * Copies a set of packages to writable store from local filesystem.
     *
     * @param localRoot
     *          local filessystem path to pkgs
     * @param skipValidation
     *          if true, validation of pkgs will not done.
     * return list of pkg names that are copied.
     */
    static copyPkgsToWritableFromLocal(url: string, skipValidation?: boolean): C3.Array<string | null>;

    /**
     * Copies a set of packages to writable store from {@link ArtifactHub.Artifact}s determined by the given package versions.
     *
     * @param pkgVersions
     *           map of pkg to semanticVersion, to fetch from {@link ArtifactHub}
     * @param writeBatchSize
     *           The number of files each parallel chunk being uploaded to the {@link Pkg.Store} should contain.
     *           Each set of artifacts will have a different optimal value.
     */
    copyPkgsToWritableFromArtifactHub(pkgVersions?: C3.Map<string | null, string | null>, writeBatchSize?: number | null): void;

    /**
     * Copies a set of packages to writable store from {@link ArtifactHub.Artifact}s determined by the given package versions.
     *
     * @param pkgVersions
     *           map of pkg to semanticVersion, to fetch from {@link ArtifactHub}
     * @param writeBatchSize
     *           The number of files each parallel chunk being uploaded to the {@link Pkg.Store} should contain.
     *           Each set of artifacts will have a different optimal value.
     */
    static copyPkgsToWritableFromArtifactHub(pkgVersions?: C3.Map<string | null, string | null>, writeBatchSize?: number | null): void;

    /**
     * Writes {@link ArtifactHub.Artifact}s to writable store.
     *
     * @param artifacts
     *          {@link ArtifactHub.Artifact}s to write to writable.
     * @param writeBatchSize
     *           The number of files each parallel chunk being uploaded to the {@link Pkg.Store} should contain.
     *           Each set of artifacts will have a different optimal value.
     */
    writeArtifactsToWritable(artifacts: C3.Array<ArtifactHub.Artifact | null>, writeBatchSize?: number | null): void;

    /**
     * Writes {@link ArtifactHub.Artifact}s to writable store.
     *
     * @param artifacts
     *          {@link ArtifactHub.Artifact}s to write to writable.
     * @param writeBatchSize
     *           The number of files each parallel chunk being uploaded to the {@link Pkg.Store} should contain.
     *           Each set of artifacts will have a different optimal value.
     */
    static writeArtifactsToWritable(artifacts: C3.Array<ArtifactHub.Artifact | null>, writeBatchSize?: number | null): void;

    /**
     * If true, Pkg.Store can be used to instantiate Pkg. use configureWithNested to configure store and enable.
     * @see Pkg.Store.Config
     */
    static enabled(): boolean;

    /**
     * If multi-node Pkg.Store is enabled to be updatable {@link Pkg.Stor.Config.multiNodeUpdateEnabled},
     * each node will call this action to process the cache message.
     *
     * @param msg
     *           CacheMessage to be broadcasted to Env/App nodes.
     * @param force
     *           If true, eviction message will be processed, irrespective of Env being SingleNode or Pkg.Store.Config.multiNodeUpdateDisabled.
     */
    static evictLocalOnly(msg: CacheMessage, force?: boolean): void;

    /**
     * If multi-node Pkg.Store is enabled to be updatable {@link Pkg.Stor.Config.multiNodeUpdateEnabled},
     * returns the sequence number of last received event.
     */
    lastReceivedEventNum(): number | null;

    /**
     * If multi-node Pkg.Store is enabled to be updatable {@link Pkg.Stor.Config.multiNodeUpdateEnabled},
     * returns the sequence number of last received event.
     */
    static lastReceivedEventNum(): number | null;

    /**
     * Retrieves the last received event of an env with Pkg.Store enabled
     */
    static lastReceivedEventNumInEnv(): number | null;

    /**
     * return all pkgs and depPkgs in store.
     */
    static cachedPkgs(): C3.Set<Pkg | null>;

    /**
     * Upload a {@link Pkg} to {@link ArtifactHub}
     *
     * @return the uploaded {@link ArtifactHub.Artifact}
     */
    uploadPkgToArtifactHub(pkgName: string, spec?: Pkg.Store.ArtifactHubRegisterSpec | null): ArtifactHub.Artifact;

    /**
     * Upload a {@link Pkg} to {@link ArtifactHub}
     *
     * @return the uploaded {@link ArtifactHub.Artifact}
     */
    static uploadPkgToArtifactHub(pkgName: string, spec?: Pkg.Store.ArtifactHubRegisterSpec | null): ArtifactHub.Artifact;

    /**
     * Return a list of generated {@link Pkg.File.Event.Verbose} from oldest to latest. These events are kept in-memory
     * and will only be recorded up to a certain capacity. If at capacity, events are removed FIFO, where the oldest
     * events are removed to make way for the newest events coming in.
     * @param forFiles
     *        If empty, include all events. Otherwise filter on events whose #targetFiles contain any file present.
     * @param limit
     *        If positive, limit the length of the returned array. It includes the latest events and limits any earlier
     *        events that fall outside.
     * @returns Return a list of generated {@link Pkg.File.Event.Verbose} ordered from oldest to latest.
     */
    previousEvents(forFiles?: C3.Array<string | null>, limit?: number | null): C3.Array<Pkg.File.Event.Verbose | null>;

    /**
     * Return a list of generated {@link Pkg.File.Event.Verbose} from oldest to latest. These events are kept in-memory
     * and will only be recorded up to a certain capacity. If at capacity, events are removed FIFO, where the oldest
     * events are removed to make way for the newest events coming in.
     * @param forFiles
     *        If empty, include all events. Otherwise filter on events whose #targetFiles contain any file present.
     * @param limit
     *        If positive, limit the length of the returned array. It includes the latest events and limits any earlier
     *        events that fall outside.
     * @returns Return a list of generated {@link Pkg.File.Event.Verbose} ordered from oldest to latest.
     */
    static previousEvents(forFiles?: C3.Array<string | null>, limit?: number | null): C3.Array<Pkg.File.Event.Verbose | null>;
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

interface λPredicate<T> {
  (t: T): boolean
}
