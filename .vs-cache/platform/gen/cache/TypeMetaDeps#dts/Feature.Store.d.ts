// TypeScript definitions for the C3 type Feature.Store

/**
 * One of the core functionalities of the Feature Store is to evaluate features with "raw data" being present in variety of sources.
 * These features are descriptive attributes of entities called subjects, e.g., a subject can be a wind turbine while a feature can be its rotation
 * speed. **Materialization** is the process of storing/caching the feature values. Specifically, if we materialize a collection of {@link Feature}(s) known as a {@link Feature.Set}, then the materialized data will be stored within the storage of
 * the Feature Store. {@link FeatureEvaluatable#evalFeatureSetBatch}) or {@link FeatureEvaluatable#evalFeaturesBatch} should be used evaluate data from Feature.Set and Feature(s) respectively.
 *
 * @remarks this represents a value passed to a method that expects an instance of Feature.Store
 */
declare namespace Feature {
  export interface IStore {
  }
}

/**
 * One of the core functionalities of the Feature Store is to evaluate features with "raw data" being present in variety of sources.
 * These features are descriptive attributes of entities called subjects, e.g., a subject can be a wind turbine while a feature can be its rotation
 * speed. **Materialization** is the process of storing/caching the feature values. Specifically, if we materialize a collection of {@link Feature}(s) known as a {@link Feature.Set}, then the materialized data will be stored within the storage of
 * the Feature Store. {@link FeatureEvaluatable#evalFeatureSetBatch}) or {@link FeatureEvaluatable#evalFeaturesBatch} should be used evaluate data from Feature.Set and Feature(s) respectively.
 *
 * @remarks this represents a made instance of Feature.Store
 */
declare namespace Feature {
  export class Store extends Obj {

    /**
     * @return the one and only instance to be used when member functions are called on this type.
     */
    static inst(): Feature.Store;

    /**
     * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
     */
    static cachedInst(): Feature.Store | null;

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
    static fromJson(json: any | null): Feature.Store | null;

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
    static fromJsonString(json: string | null): Feature.Store | null;

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
    static fromXmlString(xml: string | null): Feature.Store | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Feature.Store | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Feature.Store;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    static replaceType(old: Type, new_: Type): Feature.Store;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Store;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Store;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Store;

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
    static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Store;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Store | null>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Store | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Store | null>;

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
    static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Store | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Feature.Store;

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
    static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Feature.Store;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Store;

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
    static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Store;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Store;

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
    static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Store;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Feature.Store;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    static validateObj(): Feature.Store;

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
    withField(field: string, value: any, doNotConvert?: boolean): Feature.Store;

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
    static withField(field: string, value: any, doNotConvert?: boolean): Feature.Store;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Feature.Store;

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
    static withField(field: FieldType, value: any, doNotConvert?: boolean): Feature.Store;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Feature.Store;

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
    static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Feature.Store;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Feature.Store;

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
    static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Feature.Store;

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
    withoutFieldAtPath(path: string): Feature.Store;

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
    static withoutFieldAtPath(path: string): Feature.Store;

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
    withoutField(field: string | null): Feature.Store;

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
    static withoutField(field: string | null): Feature.Store;

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
    withoutField(field: FieldType | null): Feature.Store;

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
    static withoutField(field: FieldType | null): Feature.Store;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Feature.Store;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    static withoutFields(fields: C3.Array<string | null> | null): Feature.Store;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Feature.Store;

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
    static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Feature.Store;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Feature.Store;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    static withoutSecretFields(): Feature.Store;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Feature.Store;

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
    static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Feature.Store;

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
    defaultField(field: string): Feature.Store;

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
    static defaultField(field: string): Feature.Store;

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
    defaultField(field: FieldType): Feature.Store;

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
    static defaultField(field: FieldType): Feature.Store;

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
    unsetField(field: string): Feature.Store;

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
    static unsetField(field: string): Feature.Store;

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
    unsetField(field: FieldType): Feature.Store;

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
    static unsetField(field: FieldType): Feature.Store;

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
    removeField(field: string): Feature.Store;

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
    static removeField(field: string): Feature.Store;

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
    removeField(field: FieldType): Feature.Store;

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
    static removeField(field: FieldType): Feature.Store;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Feature.Store;

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
    static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Feature.Store;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Feature.Store;

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
    static mergeObj(other: Obj | null, otherFieldsFilter: Type): Feature.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Feature.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Feature.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Feature.Store;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Feature.Store;

    mergeJson(json: any | null): Feature.Store;

    static mergeJson(json: any | null): Feature.Store;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Feature.Store;

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
    static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Feature.Store;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Feature.Store;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    static sumObj(other: Obj | null, deep?: boolean): Feature.Store;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Feature.Store | null>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonArray(): C3.Array<Feature.Store | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Feature.Store | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Feature.Store | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Feature.Store | null>;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonSet(): C3.Set<Feature.Store | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Feature.Store | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Feature.Store | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Feature.Store | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Feature.Store | null>;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    static toBuilder(): ObjBuilder<Feature.Store | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Feature.Store | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Feature.Store;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Feature.Store;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Feature.Store;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Feature.Store;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Feature.Store;

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
    static make(fields: any, withDefaults?: boolean): Feature.Store;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Feature.Store;

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
    afterMake(): Feature.Store;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static afterMake(): Feature.Store;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Feature.Store;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Feature.Store>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Feature.Store;

    /**
     * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
     *
     * @param secrets
     *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
     *          fields. Otherwise configuration will not have values for secrets.
     * @return instance of configuration - never `null`.
     */
    config(secrets?: boolean): Feature.Store.Config;

    /**
     * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
     *
     * @param secrets
     *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
     *          fields. Otherwise configuration will not have values for secrets.
     * @return instance of configuration - never `null`.
     */
    static config(secrets?: boolean): Feature.Store.Config;

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
    static typeConfig(): Feature.Store.Config;

    /**
     * Creates a lazy Data for a given feature and subject from a materialized store
     */
    lazyEvalFeature(subject: FeatureEvaluatable, feature: Feature, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Creates a lazy Data for a given feature and subject from a materialized store
     */
    static lazyEvalFeature(subject: FeatureEvaluatable, feature: Feature, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Creates a lazy Data for features and subject from a materialized store
     */
    lazyEvalFeatures(subject: FeatureEvaluatable, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Creates a lazy Data for features and subject from a materialized store
     */
    static lazyEvalFeatures(subject: FeatureEvaluatable, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Creates a lazy Data for features and subjects from a materialized store
     */
    lazyEvalFeatures(subjects: C3.Array<FeatureEvaluatable | null>, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Creates a lazy Data for features and subjects from a materialized store
     */
    static lazyEvalFeatures(subjects: C3.Array<FeatureEvaluatable | null>, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Creates a lazy Data for given features and subject filter from a materialized store
     */
    lazyEvalFeatures(subjectFilter: string, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Creates a lazy Data for given features and subject filter from a materialized store
     */
    static lazyEvalFeatures(subjectFilter: string, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Creates a lazy Data for a feature set and subjects from a materialized store
     */
    lazyEvalFeatureSet(subjects: C3.Array<FeatureEvaluatable | null>, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Creates a lazy Data for a feature set and subjects from a materialized store
     */
    static lazyEvalFeatureSet(subjects: C3.Array<FeatureEvaluatable | null>, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Creates a lazy Data for a feature set with a filter on associated subjects from a materialized store
     */
    lazyEvalFeatureSet(subjectFilter: string, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Creates a lazy Data for a feature set with a filter on associated subjects from a materialized store
     */
    static lazyEvalFeatureSet(subjectFilter: string, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads data for a given feature and subject from a materialized store or computes it in runtime
     */
    readFeature(subject: FeatureEvaluatable, feature: Feature, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads data for a given feature and subject from a materialized store or computes it in runtime
     */
    static readFeature(subject: FeatureEvaluatable, feature: Feature, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads data for given features and subject from a materialized store or computes it in runtime
     */
    readFeatures(subject: FeatureEvaluatable, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Reads data for given features and subject from a materialized store or computes it in runtime
     */
    static readFeatures(subject: FeatureEvaluatable, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Reads data for given features and subjects from a materialized store or computes it in runtime
     */
    readFeatures(subjects: C3.Array<FeatureEvaluatable | null>, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Reads data for given features and subjects from a materialized store or computes it in runtime
     */
    static readFeatures(subjects: C3.Array<FeatureEvaluatable | null>, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Reads data for given features and a subjectFilter from a materialized store or computes it in runtime. Note that if the subjectFilter doesn't point
     * to any subject in the Db, the returned Data will be empty.
     */
    readFeatures(subjectFilter: string, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Reads data for given features and a subjectFilter from a materialized store or computes it in runtime. Note that if the subjectFilter doesn't point
     * to any subject in the Db, the returned Data will be empty.
     */
    static readFeatures(subjectFilter: string, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): Data | null;

    /**
     * Reads data for given a feature set and subjects from a materialized store or computes it in runtime
     */
    readFeatureSet(subjects: C3.Array<FeatureEvaluatable | null>, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads data for given a feature set and subjects from a materialized store or computes it in runtime
     */
    static readFeatureSet(subjects: C3.Array<FeatureEvaluatable | null>, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads data for given a feature set and a subjectFilter from a materialized store or computes it in runtime. Note that if the subjectFilter doesn't
     * point to any subject in the Db, the returned Data will be empty.
     */
    readFeatureSet(subjectFilter: string, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads data for given a feature set and a subjectFilter from a materialized store or computes it in runtime. Note that if the subjectFilter doesn't
     * point to any subject in the Db, the returned Data will be empty.
     */
    static readFeatureSet(subjectFilter: string, features: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

    /**
     * Reads individual columns for the given subject / Feature and slices data by time-range in the provided spec
     */
    readFeatureColumns(subject: FeatureEvaluatable, feature: Feature, spec?: EvalFeatureSpec | null): C3.Array<Data.Column | null>;

    /**
     * Reads individual columns for the given subject / Feature and slices data by time-range in the provided spec
     */
    static readFeatureColumns(subject: FeatureEvaluatable, feature: Feature, spec?: EvalFeatureSpec | null): C3.Array<Data.Column | null>;

    /**
     * Reads individual columns for the given subject / Features and slices data for each feature by time-range in the
     * provided spec at the same index
     */
    readFeaturesColumns(subject: FeatureEvaluatable, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): C3.Array<Data.Column | null>;

    /**
     * Reads individual columns for the given subject / Features and slices data for each feature by time-range in the
     * provided spec at the same index
     */
    static readFeaturesColumns(subject: FeatureEvaluatable, features: C3.Array<Feature | null>, spec?: EvalFeaturesSpec | null): C3.Array<Data.Column | null>;

    /**
     * Reads all columns for the given subjects / Feature.Set and slices data by time-range in the provided spec
     */
    readFeatureSetColumns(subjects: C3.Array<FeatureEvaluatable | null>, featureSet: Feature.Set, spec?: EvalFeatureSpec | null): C3.Map<string | null, C3.Array<Data.Column | null>>;

    /**
     * Reads all columns for the given subjects / Feature.Set and slices data by time-range in the provided spec
     */
    static readFeatureSetColumns(subjects: C3.Array<FeatureEvaluatable | null>, featureSet: Feature.Set, spec?: EvalFeatureSpec | null): C3.Map<string | null, C3.Array<Data.Column | null>>;

    /**
     * Reads all columns for the subjects specified by partition spec and returns result as stream of Arrow batches
     */
    readFeatureSetArrow(spec?: Data.Spark.ReadFeatureSetPartition | null): Stream<Arrow | null> | null;

    /**
     * Reads all columns for the subjects specified by partition spec and returns result as stream of Arrow batches
     */
    static readFeatureSetArrow(spec?: Data.Spark.ReadFeatureSetPartition | null): Stream<Arrow | null> | null;

    /**
     * @return statistics for a given feature and subjects described by filter
     */
    featureStats(feature: Feature, subjectFilter?: string | null): Data | null;

    /**
     * @return statistics for a given feature and subjects described by filter
     */
    static featureStats(feature: Feature, subjectFilter?: string | null): Data | null;

    /**
     * @return table name of the feature in the materialized store
     */
    materializedTableName(feature: FeatureBase, snapshotId?: string | null): string;

    /**
     * @return table name of the feature in the materialized store
     */
    static materializedTableName(feature: FeatureBase, snapshotId?: string | null): string;

    /**
     * @return table name of the featureSet in the materialized store for a provided snapshotId
     */
    materializedSnapshotTableName(featureSet: Feature.Set, snapshotId: string): string;

    /**
     * @return table name of the featureSet in the materialized store for a provided snapshotId
     */
    static materializedSnapshotTableName(featureSet: Feature.Set, snapshotId: string): string;

    /**
     * Align the input timeRange from user with the maximum materialization timeRange based on the given interval.
     * @param inputTimeRange
     *        the timeRange passed by the user, which means user wants to materialize or evaluate the features or featureSet between this timeRange.
     * @param interval
     *        the interval that the final timeRange will be aligned by.
     * @param maxTimeRange
     *        the maximum timeRange of the entire data set.
     * @param doNotFailIfInvalid
     *        If set, the inputTimeRange can be out of bound from the maxTimeRange and only the overlapping timeRange is returned.
     *        If not set, it fails if the inputTimeRange is out bound of the maxTimeRange.
     * @return
     *        the correct timeRange to get the evalMetrics result
     */
    static alignTimeRange(inputTimeRange: TimeRange, interval: string, maxTimeRange?: TimeRange | null, doNotFailIfInvalid?: boolean): TimeRange;

    /**
     * Writes all data for given [Feature] and subjects to the materialized store.
     * Alternatively write aggregate Feature.Set directly in a KvRow for optimized io
     * @param features
     *          Features that need to be materialized
     * @param subjects
     *          Subjects for which features need to be materialized
     * @param timeRange
     *          TimeRange which will be used to determine what range of data should be materialized
     */
    materializeFeatures(features: C3.Array<Feature | null>, subjects: Collection<FeatureEvaluatable | null>, timeRange?: TimeRange | null): void;

    /**
     * Writes all data for given [Feature] and subjects to the materialized store.
     * Alternatively write aggregate Feature.Set directly in a KvRow for optimized io
     * @param features
     *          Features that need to be materialized
     * @param subjects
     *          Subjects for which features need to be materialized
     * @param timeRange
     *          TimeRange which will be used to determine what range of data should be materialized
     */
    static materializeFeatures(features: C3.Array<Feature | null>, subjects: Collection<FeatureEvaluatable | null>, timeRange?: TimeRange | null): void;

    materializeFeatureSet(featureSet: Feature.Set, subjects: Collection<FeatureEvaluatable | null>, timeRange?: TimeRange | null): void;

    static materializeFeatureSet(featureSet: Feature.Set, subjects: Collection<FeatureEvaluatable | null>, timeRange?: TimeRange | null): void;

    materializeFeatureSet(featureSet: Feature.Set, subjectFilter?: string | null, timeRange?: TimeRange | null): void;

    static materializeFeatureSet(featureSet: Feature.Set, subjectFilter?: string | null, timeRange?: TimeRange | null): void;

    materializeLegacyFeatureSet(featureSet: Feature.Set, subjects: Collection<FeatureEvaluatable | null>, timeRange?: TimeRange | null): void;

    static materializeLegacyFeatureSet(featureSet: Feature.Set, subjects: Collection<FeatureEvaluatable | null>, timeRange?: TimeRange | null): void;

    /**
     * Writes all data for given feature and subjects to materialized store
     */
    materializeFeature(feature: Feature, subjects: Collection<FeatureEvaluatable | null>): void;

    /**
     * Writes all data for given feature and subjects to materialized store
     */
    static materializeFeature(feature: Feature, subjects: Collection<FeatureEvaluatable | null>): void;

    /**
     * Writes all data for given feature and subjects described by filter to materialized store. Note that, subjectFilter
     * has to correspond to at least one subject in Db, otherwise the call will fail.
     */
    materializeFeature(feature: Feature, subjectFilter?: string | null): void;

    /**
     * Writes all data for given feature and subjects described by filter to materialized store. Note that, subjectFilter
     * has to correspond to at least one subject in Db, otherwise the call will fail.
     */
    static materializeFeature(feature: Feature, subjectFilter?: string | null): void;

    /**
     * @return instance of KvStore holding materialized features
     */
    store(): KvStore<KvStoreConfig | null>;

    /**
     * @return instance of KvStore holding materialized features
     */
    static store(): KvStore<KvStoreConfig | null>;

    /**
     * @return Whether this particular feature row represents timeseries data
     */
    isTimeseriesFeature(row: KvRow): boolean;

    /**
     * @return Whether this particular feature row represents timeseries data
     */
    static isTimeseriesFeature(row: KvRow): boolean;

    /**
     * Helper method to write {@link Data} to a {@link KvStore}.
     *
     * @param tableName
     *           name of the table for which the data should be stored at.
     * @param id
     *           id in the table for which the data should be stored at.
     * @param data
     *           data to store.
     * @param spec
     *           spec controlling write behavior.
     * @return {@link Data.Persisted}
     */
    writeData(tableName: string, id: string, data: Data, spec?: Feature.Store.WriteSpec | null): Data;

    /**
     * Helper method to write {@link Data} to a {@link KvStore}.
     *
     * @param tableName
     *           name of the table for which the data should be stored at.
     * @param id
     *           id in the table for which the data should be stored at.
     * @param data
     *           data to store.
     * @param spec
     *           spec controlling write behavior.
     * @return {@link Data.Persisted}
     */
    static writeData(tableName: string, id: string, data: Data, spec?: Feature.Store.WriteSpec | null): Data;

    /**
     * Helper for {@link #writeData} - same API, except implementation is in python to serialize through Data.Pandas.
     */
    writeDataToStore(tableName: string, id: string, data: Data, spec?: Feature.Store.WriteSpec | null): Data;

    /**
     * Helper for {@link #writeData} - same API, except implementation is in python to serialize through Data.Pandas.
     */
    static writeDataToStore(tableName: string, id: string, data: Data, spec?: Feature.Store.WriteSpec | null): Data;

    /**
     * Helper method to read {@link Data} from a {@link KvStore}.
     *
     * @param tableName
     *          name of the table for which the data is stored at.
     * @param id
     *          id in the table for which the data is stored at.
     * @return the {@link Data} at the given tableName and id. If nothing is found at the specified location, then
     *          an error will be thrown.
     */
    readData(tableName: string, id: string): Data;

    /**
     * Helper method to read {@link Data} from a {@link KvStore}.
     *
     * @param tableName
     *          name of the table for which the data is stored at.
     * @param id
     *          id in the table for which the data is stored at.
     * @return the {@link Data} at the given tableName and id. If nothing is found at the specified location, then
     *          an error will be thrown.
     */
    static readData(tableName: string, id: string): Data;

    /**
     * Helper method to read {@link Data} from a {@link KvStore}.
     *
     * @param tableName
     *          name of the table for which the data is stored at.
     * @param id
     *          id in the table for which the data is stored at.
     * @return the {@link Data} at the given tableName and id. If nothing is found at the specified location, then
     *          an error will be thrown.
     */
    readDataFromArrow(tableName: string, id: string): Data;

    /**
     * Helper method to read {@link Data} from a {@link KvStore}.
     *
     * @param tableName
     *          name of the table for which the data is stored at.
     * @param id
     *          id in the table for which the data is stored at.
     * @return the {@link Data} at the given tableName and id. If nothing is found at the specified location, then
     *          an error will be thrown.
     */
    static readDataFromArrow(tableName: string, id: string): Data;

    /**
     * Helper method to remove {@link Data} from a {@link KvStore}.
     *
     * @param tableName
     *          name of the table for which the data is stored at.
     * @param id
     *          id in the table for which the data is stored at.
     */
    removeData(tableName: string, id: string): void;

    /**
     * Helper method to remove {@link Data} from a {@link KvStore}.
     *
     * @param tableName
     *          name of the table for which the data is stored at.
     * @param id
     *          id in the table for which the data is stored at.
     */
    static removeData(tableName: string, id: string): void;

    /**
     * Duplicate the block from a single materialized subject to multiple blocks for all the subjects. This function only
     * works after the the source subject is materialized. Note that this function uses a MapReduce job to do the duplication
     * and this job is synchronous.
     * ```python
     * feature_set.materialize(filter=f"id == 'TURBINE-1'", start="2020-01-01", end="2021-01-01", sync=True)
     * c3.Feature.Store.duplicateForAllSubjects(fs=feature_set, src_id='TURBINE-1')
     * ```
     * ONLY FOR TESTING - DO NOT USE
     */
    duplicateForAllSubjects(fs: Feature.Set, srcId: string, spec?: BatchFetchSpec | null): void;

    /**
     * Duplicate the block from a single materialized subject to multiple blocks for all the subjects. This function only
     * works after the the source subject is materialized. Note that this function uses a MapReduce job to do the duplication
     * and this job is synchronous.
     * ```python
     * feature_set.materialize(filter=f"id == 'TURBINE-1'", start="2020-01-01", end="2021-01-01", sync=True)
     * c3.Feature.Store.duplicateForAllSubjects(fs=feature_set, src_id='TURBINE-1')
     * ```
     * ONLY FOR TESTING - DO NOT USE
     */
    static duplicateForAllSubjects(fs: Feature.Set, srcId: string, spec?: BatchFetchSpec | null): void;

    /**
     * Rollback the schema migration changes made by {@link FeatureEvaluatable.Bin.Strategy.SchemaUpgrade}.
     */
    static rollbackSchemaMigration(): void;
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
