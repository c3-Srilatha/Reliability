// TypeScript definitions for the C3 type LocalJvm

/**
 * @remarks this represents a value passed to a method that expects an instance of LocalJvm
 */
declare interface ILocalJvm {
}

/**
 * @remarks this represents a made instance of LocalJvm
 */
declare class LocalJvm extends Obj {

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): LocalJvm;

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
  static fromJson(json: any | null): LocalJvm | null;

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
  static fromJsonString(json: string | null): LocalJvm | null;

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
  static fromXmlString(xml: string | null): LocalJvm | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LocalJvm | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LocalJvm;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): LocalJvm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LocalJvm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LocalJvm;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LocalJvm;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LocalJvm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LocalJvm | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LocalJvm | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LocalJvm | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LocalJvm | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LocalJvm;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LocalJvm;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LocalJvm;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LocalJvm;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LocalJvm;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LocalJvm;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LocalJvm;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): LocalJvm;

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
  withField(field: string, value: any, doNotConvert?: boolean): LocalJvm;

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
  static withField(field: string, value: any, doNotConvert?: boolean): LocalJvm;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LocalJvm;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): LocalJvm;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LocalJvm;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LocalJvm;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LocalJvm;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LocalJvm;

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
  withoutFieldAtPath(path: string): LocalJvm;

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
  static withoutFieldAtPath(path: string): LocalJvm;

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
  withoutField(field: string | null): LocalJvm;

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
  static withoutField(field: string | null): LocalJvm;

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
  withoutField(field: FieldType | null): LocalJvm;

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
  static withoutField(field: FieldType | null): LocalJvm;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LocalJvm;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): LocalJvm;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LocalJvm;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LocalJvm;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LocalJvm;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): LocalJvm;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LocalJvm;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LocalJvm;

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
  defaultField(field: string): LocalJvm;

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
  static defaultField(field: string): LocalJvm;

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
  defaultField(field: FieldType): LocalJvm;

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
  static defaultField(field: FieldType): LocalJvm;

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
  unsetField(field: string): LocalJvm;

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
  static unsetField(field: string): LocalJvm;

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
  unsetField(field: FieldType): LocalJvm;

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
  static unsetField(field: FieldType): LocalJvm;

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
  removeField(field: string): LocalJvm;

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
  static removeField(field: string): LocalJvm;

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
  removeField(field: FieldType): LocalJvm;

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
  static removeField(field: FieldType): LocalJvm;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LocalJvm;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LocalJvm;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LocalJvm;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): LocalJvm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LocalJvm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LocalJvm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LocalJvm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LocalJvm;

  mergeJson(json: any | null): LocalJvm;

  static mergeJson(json: any | null): LocalJvm;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LocalJvm;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LocalJvm;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LocalJvm;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): LocalJvm;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LocalJvm | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<LocalJvm | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LocalJvm | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LocalJvm | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LocalJvm | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<LocalJvm | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LocalJvm | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LocalJvm | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LocalJvm | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LocalJvm | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<LocalJvm | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LocalJvm | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LocalJvm;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LocalJvm;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LocalJvm;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LocalJvm;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LocalJvm;

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
  static make(fields: any, withDefaults?: boolean): LocalJvm;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LocalJvm;

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
  afterMake(): LocalJvm;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): LocalJvm;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LocalJvm;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LocalJvm>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LocalJvm;

  /**
   * Retrieves JVM CPU utilization statistics.
   */
  cpu(): JvmUsage;

  /**
   * Retrieves JVM CPU utilization statistics.
   */
  static cpu(): JvmUsage;

  /**
   * @return number of CPUs.
   */
  cpuThreads(): number;

  /**
   * @return number of CPUs.
   */
  static cpuThreads(): number;

  /**
   * Hint JVM to run garbage collection.
   *
   * @param force
   *    if `true` will attempt to allocate large enough memory in hopes that JVM will be forced to run full garbage
   *    collection. WARNING! may cause JVM or Thread death!
   */
  gc(force?: boolean): JvmUsage;

  /**
   * Hint JVM to run garbage collection.
   *
   * @param force
   *    if `true` will attempt to allocate large enough memory in hopes that JVM will be forced to run full garbage
   *    collection. WARNING! may cause JVM or Thread death!
   */
  static gc(force?: boolean): JvmUsage;

  /**
   * Retrieves JVM memory consumption statistics.
   *
   * @param gc
   *    if `true` will hint JVM to run garbage collection.
   * @param force
   *    if `true` will attempt to allocate large enough memory in hopes that JVM will be forced to run full garbage
   *    collection. WARNING! may cause JVM or Thread death!
   * @return memory consumption statistics.
   */
  memory(gc?: boolean, force?: boolean, unit?: string | null): JvmMemUsage;

  /**
   * Retrieves JVM memory consumption statistics.
   *
   * @param gc
   *    if `true` will hint JVM to run garbage collection.
   * @param force
   *    if `true` will attempt to allocate large enough memory in hopes that JVM will be forced to run full garbage
   *    collection. WARNING! may cause JVM or Thread death!
   * @return memory consumption statistics.
   */
  static memory(gc?: boolean, force?: boolean, unit?: string | null): JvmMemUsage;

  /**
   * Retrieves key usage statistics, such as #cpu and #memory.
   */
  usage(): [cpu: JvmUsage, memory: JvmMemUsage];

  /**
   * Retrieves key usage statistics, such as #cpu and #memory.
   */
  static usage(): [cpu: JvmUsage, memory: JvmMemUsage];

  /**
   * Retrieves JVM memory profile. I.e. statistics about current memory usage by java objects and/or C3 type instances.
   *
   * This operation is potentially very slow and may time out when requested through the client. If that happens,
   * examine the server log for the results.
   *
   * This is an internal debugging function for the server.
   */
  profileMemory(spec?: JvmProfileMemorySpec | null): JvmMemProfile;

  /**
   * Retrieves JVM memory profile. I.e. statistics about current memory usage by java objects and/or C3 type instances.
   *
   * This operation is potentially very slow and may time out when requested through the client. If that happens,
   * examine the server log for the results.
   *
   * This is an internal debugging function for the server.
   */
  static profileMemory(spec?: JvmProfileMemorySpec | null): JvmMemProfile;

  /**
   * Checkpoints memory allocated by caches and static fields.
   *
   * @see #clearMemoryCheckoint
   * @see #diffMemory
   */
  checkpointMemory(spec?: JvmProfileMemorySpec | null): JvmUsage;

  /**
   * Checkpoints memory allocated by caches and static fields.
   *
   * @see #clearMemoryCheckoint
   * @see #diffMemory
   */
  static checkpointMemory(spec?: JvmProfileMemorySpec | null): JvmUsage;

  /**
   * Clears memory checkout.
   *
   * @see #checkpointMemory
   */
  clearMemoryCheckpoint(): boolean;

  /**
   * Clears memory checkout.
   *
   * @see #checkpointMemory
   */
  static clearMemoryCheckpoint(): boolean;

  /**
   * Diffs memory allocated by caches and static fields against previous checkpoint.
   *
   * @see #checkpointMemory
   * @see #clearMemoryCheckoint
   */
  diffMemory(depth?: number | null, limit?: number | null): JvmMemProfile;

  /**
   * Diffs memory allocated by caches and static fields against previous checkpoint.
   *
   * @see #checkpointMemory
   * @see #clearMemoryCheckoint
   */
  static diffMemory(depth?: number | null, limit?: number | null): JvmMemProfile;

  /**
   * Retrieves Java Threads (with call-stacks) in the current node's JVM.
   *
   * @param all
   *        if true then all not just active threads will be retrieved.
   * @param thread
   *        if provided that will only include threads that contain this value in the name.
   * @return information about threads in the current Jvm.
   *
   * @see #deadlocks
   * @see #stuckThreads
   */
  threads(all?: boolean, thread?: string | null): C3.Array<ThreadInfo | null>;

  /**
   * Retrieves Java Threads (with call-stacks) in the current node's JVM.
   *
   * @param all
   *        if true then all not just active threads will be retrieved.
   * @param thread
   *        if provided that will only include threads that contain this value in the name.
   * @return information about threads in the current Jvm.
   *
   * @see #deadlocks
   * @see #stuckThreads
   */
  static threads(all?: boolean, thread?: string | null): C3.Array<ThreadInfo | null>;

  /**
   * Retrieves "dead-locked" Threads in the current node's JVM.
   *
   * @return information about "dead-locked" threads in the current Jvm.
   *
   * @see #threads
   * @see #stuckThreads
   */
  deadlocks(): C3.Array<ThreadInfo | null>;

  /**
   * Retrieves "dead-locked" Threads in the current node's JVM.
   *
   * @return information about "dead-locked" threads in the current Jvm.
   *
   * @see #threads
   * @see #stuckThreads
   */
  static deadlocks(): C3.Array<ThreadInfo | null>;

  /**
   * Retrieves possibly stuck threads in the current node's JVM, i.e. threads that have not changed a call-stack
   * in a while.
   *
   * @param age
   *        minimum duration to filter stuck threads by.
   * @return information about possibly stuck or "dead-locked" threads in the current Jvm.
   *
   * @see #threads
   * @see #deadlocks
   */
  stuckThreads(age?: string | null): C3.Array<ThreadInfo | null>;

  /**
   * Retrieves possibly stuck threads in the current node's JVM, i.e. threads that have not changed a call-stack
   * in a while.
   *
   * @param age
   *        minimum duration to filter stuck threads by.
   * @return information about possibly stuck or "dead-locked" threads in the current Jvm.
   *
   * @see #threads
   * @see #deadlocks
   */
  static stuckThreads(age?: string | null): C3.Array<ThreadInfo | null>;

  /**
   * Retrieves Java Threads (with call-stacks) in the current node's JVM.
   *
   * @param all
   *        if true then all not just active threads will be retrieved.
   * @param thread
   *        if provided that will only include threads that contain this value in the name.
   * @return information about threads in the current Jvm.
   */
  dumpThreads(all?: boolean, thread?: string | null): string | null;

  /**
   * Retrieves Java Threads (with call-stacks) in the current node's JVM.
   *
   * @param all
   *        if true then all not just active threads will be retrieved.
   * @param thread
   *        if provided that will only include threads that contain this value in the name.
   * @return information about threads in the current Jvm.
   */
  static dumpThreads(all?: boolean, thread?: string | null): string | null;

  /**
   * Retrieves "dead-locked" Threads in the current node's JVM.
   *
   * @return information about "dead-locked" threads in the current Jvm.
   */
  dumpDeadlocks(): string | null;

  /**
   * Retrieves "dead-locked" Threads in the current node's JVM.
   *
   * @return information about "dead-locked" threads in the current Jvm.
   */
  static dumpDeadlocks(): string | null;

  /**
   * Retrieves possibly stuck threads in the current node's JVM, i.e. threads that have not changed a call-stack
   * in a while.
   *
   * @param age
   *        minimum duration to filter stuck threads by.
   * @return information about possibly stuck or "dead-locked" threads in the current Jvm.
   */
  dumpStuckThreads(age?: string | null): string | null;

  /**
   * Retrieves possibly stuck threads in the current node's JVM, i.e. threads that have not changed a call-stack
   * in a while.
   *
   * @param age
   *        minimum duration to filter stuck threads by.
   * @return information about possibly stuck or "dead-locked" threads in the current Jvm.
   */
  static dumpStuckThreads(age?: string | null): string | null;

  /**
   * Retrieves Java Threads stacks for the current JVM using jstack utility.
   *
   * @return information about threads in the current Jvm.
   */
  dumpJstack(): string | null;

  /**
   * Retrieves Java Threads stacks for the current JVM using jstack utility.
   *
   * @return information about threads in the current Jvm.
   */
  static dumpJstack(): string | null;

  /**
   * @return JVM args
   */
  args(configured?: boolean): C3.Array<string | null>;

  /**
   * @return JVM args
   */
  static args(configured?: boolean): C3.Array<string | null>;

  /**
   * Adds one or more JVM args; note you will have to {@link Jvm#restart} for args to take effect
   * @param args
   *    An array of strings that will appended as jvm args when the server is restarted
   */
  addArgs(...args: string | null[]): void;

  /**
   * Adds one or more JVM args; note you will have to {@link Jvm#restart} for args to take effect
   * @param args
   *    An array of strings that will appended as jvm args when the server is restarted
   */
  static addArgs(...args: string | null[]): void;

  /**
   * Removes one or more JVM args; note you will have to {@link Jvm#restart} for args to take effect
   * @param args
   *    An array of args that will be removed from the jvm args set via {@link Jvm#addArgs}
   */
  removeArgs(...args: string | null[]): void;

  /**
   * Removes one or more JVM args; note you will have to {@link Jvm#restart} for args to take effect
   * @param args
   *    An array of args that will be removed from the jvm args set via {@link Jvm#addArgs}
   */
  static removeArgs(...args: string | null[]): void;

  /**
   * Returns GC statistics for the specified time window.
   *
   * @param window
   *        lookback window, e.g. '1m', '2m', '5m'. Max is 5 minutes. Default is '5m'.
   * @return GC statistics for the window
   */
  gcStats(window?: string | null): Jvm.GcStats;

  /**
   * Returns GC statistics for the specified time window.
   *
   * @param window
   *        lookback window, e.g. '1m', '2m', '5m'. Max is 5 minutes. Default is '5m'.
   * @return GC statistics for the window
   */
  static gcStats(window?: string | null): Jvm.GcStats;

  /**
   * @return https://github.com/jvm-profiling-tools/async-profiler
   *
   * @see #Jvm.AsyncProfiler#start
   */
  asyncProfiler(): Jvm.AsyncProfiler;

  /**
   * @return https://github.com/jvm-profiling-tools/async-profiler
   *
   * @see #Jvm.AsyncProfiler#start
   */
  static asyncProfiler(): Jvm.AsyncProfiler;

  /**
   * Enables CPU and Memory profiling for this JVM (via Glowroot); note you will have to {@link Jvm#restart} for it to take effect
   * @return URL using which the profiler can be accessed after the server has been restarted via {@link Server#restart}.
   */
  enableProfiler(): string | null;

  /**
   * Enables CPU and Memory profiling for this JVM (via Glowroot); note you will have to {@link Jvm#restart} for it to take effect
   * @return URL using which the profiler can be accessed after the server has been restarted via {@link Server#restart}.
   */
  static enableProfiler(): string | null;

  /**
   * Disables CPU and Memory profiling for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  disableProfiler(): void;

  /**
   * Disables CPU and Memory profiling for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  static disableProfiler(): void;

  /**
   * Enables validation of assertion statement in the Java code at runtime; note you will have to {@link Jvm#restart} for it to take effect
   */
  enableAssertions(): void;

  /**
   * Enables validation of assertion statement in the Java code at runtime; note you will have to {@link Jvm#restart} for it to take effect
   */
  static enableAssertions(): void;

  /**
   * Disables validation of assertion statement in the Java code at runtime; note you will have to {@link Jvm#restart} for it to take effect
   */
  disableAssertions(): void;

  /**
   * Disables validation of assertion statement in the Java code at runtime; note you will have to {@link Jvm#restart} for it to take effect
   */
  static disableAssertions(): void;

  /**
   * Enables java debugging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   * @param suspend
   *    if `true`, enables suspend mode for the debugging session
   */
  enableDebug(suspend?: boolean): void;

  /**
   * Enables java debugging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   * @param suspend
   *    if `true`, enables suspend mode for the debugging session
   */
  static enableDebug(suspend?: boolean): void;

  /**
   * Disables Java debugging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  disableDebug(): void;

  /**
   * Disables Java debugging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  static disableDebug(): void;

  /**
   * Fires off a Java System.exit() command with the given status code.
   * @param exitCode
   *    the exitCode used as an argument for the System.exit() command
   */
  exit(exitCode?: number | null, shutdownTimeout?: Duration | null): void;

  /**
   * Fires off a Java System.exit() command with the given status code.
   * @param exitCode
   *    the exitCode used as an argument for the System.exit() command
   */
  static exit(exitCode?: number | null, shutdownTimeout?: Duration | null): void;

  /**
   * Restarts this node. Issues Jvm process graceful shutdown request (SIGTERM) and waits up to shutdownTimeout
   * (defaults to 120 seconds) for all pending tasks to complete, then issues SIGKILL.
   * @param shutdownTimeout
   *    specifies the duration for which an initial SIGTERM will wait for the jvm to quit, otherwise will initiate a SIGKILL.
   *    if set to 0, initiates a SIGKILL immediately.
   */
  restart(shutdownTimeout?: Duration | null): void;

  /**
   * Restarts this node. Issues Jvm process graceful shutdown request (SIGTERM) and waits up to shutdownTimeout
   * (defaults to 120 seconds) for all pending tasks to complete, then issues SIGKILL.
   * @param shutdownTimeout
   *    specifies the duration for which an initial SIGTERM will wait for the jvm to quit, otherwise will initiate a SIGKILL.
   *    if set to 0, initiates a SIGKILL immediately.
   */
  static restart(shutdownTimeout?: Duration | null): void;

  /**
   * Returns a heap histogram showing memory usage by class.
   *
   * Uses JMX DiagnosticCommandMBean which is faster and always available compared to external jmap.
   *
   * @param limit
   *        maximum number of entries to return. Use -1 for all entries. Default is 25.
   * @param order
   *        sort order for entries (e.g., "descending(bytes)", "descending(instances)"). Default is by bytes descending.
   * @param filter
   *        expression to filter entries by className (e.g., "startsWith(className, 'c3.')").
   * @param all
   *        if true, includes all objects (including unreachable). Default is false (live objects only).
   * @return heap histogram with entries
   *
   * @see Jvm.HeapHisto
   * @see Jvm.HeapHisto.Entry
   */
  heapHisto(limit?: number | null, order?: string | null, filter?: string | null, all?: boolean): Jvm.HeapHisto;

  /**
   * Returns a heap histogram showing memory usage by class.
   *
   * Uses JMX DiagnosticCommandMBean which is faster and always available compared to external jmap.
   *
   * @param limit
   *        maximum number of entries to return. Use -1 for all entries. Default is 25.
   * @param order
   *        sort order for entries (e.g., "descending(bytes)", "descending(instances)"). Default is by bytes descending.
   * @param filter
   *        expression to filter entries by className (e.g., "startsWith(className, 'c3.')").
   * @param all
   *        if true, includes all objects (including unreachable). Default is false (live objects only).
   * @return heap histogram with entries
   *
   * @see Jvm.HeapHisto
   * @see Jvm.HeapHisto.Entry
   */
  static heapHisto(limit?: number | null, order?: string | null, filter?: string | null, all?: boolean): Jvm.HeapHisto;

  /**
   * Generates a heap histogram using jmap for the current JVM and returns the output.
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   * @return
   *         string containing the contents of the heap histogram
   */
  heapHistogram(include?: string): string | null;

  /**
   * Generates a heap histogram using jmap for the current JVM and returns the output.
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   * @return
   *         string containing the contents of the heap histogram
   */
  static heapHistogram(include?: string): string | null;

  /**
   * Dumps a heap histogram using jmap and uploads it to the telemetry FS mount.
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   * @return
   *         string containing the path to the uploaded histogram file
   */
  dumpHeapHistogram(include?: string): string | null;

  /**
   * Dumps a heap histogram using jmap and uploads it to the telemetry FS mount.
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   * @return
   *         string containing the path to the uploaded histogram file
   */
  static dumpHeapHistogram(include?: string): string | null;

  /**
   * Generates a heap dump using jmap for the current JVM, and uploads it to the telemetry FS mount.
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   * @return
   *         string containing the path to the uploaded dump file
   */
  dumpHeap(include?: string): string | null;

  /**
   * Generates a heap dump using jmap for the current JVM, and uploads it to the telemetry FS mount.
   * @param include
   *         {@link Java.JmapObjs} supplied as flag to jmap operation
   * @return
   *         string containing the path to the uploaded dump file
   */
  static dumpHeap(include?: string): string | null;

  /**
   * Enables GC logging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  enableGcLogging(): void;

  /**
   * Enables GC logging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  static enableGcLogging(): void;

  /**
   * Disables GC logging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  disableGcLogging(): void;

  /**
   * Disables GC logging for this JVM; note you will have to {@link Jvm#restart} for it to take effect
   */
  static disableGcLogging(): void;

  /**
   * @return server version for this JVM
   */
  serverVersion(): string | null;

  /**
   * @return server version for this JVM
   */
  static serverVersion(): string | null;

  /**
   * Retrieves key usage statistics, such as #cpu and #memory, for the current JVM instance.
   *
   * @see #usage
   */
  static currentUsage(): [cpu: JvmUsage, memory: JvmMemUsage];

  /**
   * List loggers in this JVM
   * @return a map of logger name to log level
   */
  listLoggers(): C3.Map<string | null, string>;

  /**
   * List loggers in this JVM
   * @return a map of logger name to log level
   */
  static listLoggers(): C3.Map<string | null, string>;

  /**
   * Set logLevel for the given logger for this Server
   * @param logger
   *        logger name. If not specified the log level for all the registered loggers will be changed
   * @param level
   *        Logger.Level to set
   * @param timeout
   *        the amount of time to wait before reverting back to the original log level
   */
  setLogLevel(logger?: string | null, logLevel: string, timeout?: string | null): void;

  /**
   * Set logLevel for the given logger for this Server
   * @param logger
   *        logger name. If not specified the log level for all the registered loggers will be changed
   * @param level
   *        Logger.Level to set
   * @param timeout
   *        the amount of time to wait before reverting back to the original log level
   */
  static setLogLevel(logger?: string | null, logLevel: string, timeout?: string | null): void;

  /**
   * Get log level for the given logger in this JVM
   */
  logLevel(logger: string): string;

  /**
   * Get log level for the given logger in this JVM
   */
  static logLevel(logger: string): string;

  /**
   * User can only check the dirs which the java process has access to.
   * localDir can be a local OS path, either absolute or relative.
   * If relative, it is interpreted relative to the current working directory, which is typically /home/c3.
   * @param localDirs
   *          Directories for which usage need to be computed.
   * @param timeoutSecs
   *          After timeoutSecs, if the computation of directory usages is not completed, the du operation for that specific directory will timeout.
   *          This timeout is applied on a per-directory basis, meaning each directory has its own independent timeoutSecs limit for the computation.
   *          The default value is 10 seconds.
   * @return the map between the dir path and the dir size in bytes.
   */
  computeDirUsages(localDirs: C3.Array<string | null>, timeoutSecs?: number | null): C3.Map<string | null, number | null>;

  /**
   * User can only check the dirs which the java process has access to.
   * localDir can be a local OS path, either absolute or relative.
   * If relative, it is interpreted relative to the current working directory, which is typically /home/c3.
   * @param localDirs
   *          Directories for which usage need to be computed.
   * @param timeoutSecs
   *          After timeoutSecs, if the computation of directory usages is not completed, the du operation for that specific directory will timeout.
   *          This timeout is applied on a per-directory basis, meaning each directory has its own independent timeoutSecs limit for the computation.
   *          The default value is 10 seconds.
   * @return the map between the dir path and the dir size in bytes.
   */
  static computeDirUsages(localDirs: C3.Array<string | null>, timeoutSecs?: number | null): C3.Map<string | null, number | null>;

  /**
   * Retrieves the used size and available size for the mounted storage device which is backing the dir in bytes, and stores those in {@link StorageStats}.
   * User can only check the dir which `c3` user have access to.
   * @param path
   *           a dir path on which a volume is mounted.
   * @param timeoutSecs
   *        after timeoutSecs, if dir usages computation is not finished yet, the underlying `df` operation will timeout.
   * @param failIfMissing
   *           defines whether the function will throw out an error if path does not exist.
   * @return the used size and available size for the mounted storage device which is backing the dir in bytes, and stores those in {@link StorageStats}.
   */
  calculateStorageStatsForMountForDir(path: string, timeoutSecs?: number | null, failIfMissing?: boolean): StorageStats | null;

  /**
   * Retrieves the used size and available size for the mounted storage device which is backing the dir in bytes, and stores those in {@link StorageStats}.
   * User can only check the dir which `c3` user have access to.
   * @param path
   *           a dir path on which a volume is mounted.
   * @param timeoutSecs
   *        after timeoutSecs, if dir usages computation is not finished yet, the underlying `df` operation will timeout.
   * @param failIfMissing
   *           defines whether the function will throw out an error if path does not exist.
   * @return the used size and available size for the mounted storage device which is backing the dir in bytes, and stores those in {@link StorageStats}.
   */
  static calculateStorageStatsForMountForDir(path: string, timeoutSecs?: number | null, failIfMissing?: boolean): StorageStats | null;

  /**
   * @returns the readiness of the server as a key-value pair.
   * The key indicates whether jvm is ready to serve network requests and the value provides additional details.
   */
  readiness(): Pair<boolean, string | null> | null;

  /**
   * @returns the readiness of the server as a key-value pair.
   * The key indicates whether jvm is ready to serve network requests and the value provides additional details.
   */
  static readiness(): Pair<boolean, string | null> | null;

  /**
   * Overrides the readiness probe for the JVM.
   * By default the value is true
   *
   * @param value
   *        the value to be set for the Jvm's readiness override flag.
   */
  overrideReadiness(value?: boolean): void;

  /**
   * Overrides the readiness probe for the JVM.
   * By default the value is true
   *
   * @param value
   *        the value to be set for the Jvm's readiness override flag.
   */
  static overrideReadiness(value?: boolean): void;

  /**
   * Gets the action logging threshold in seconds. Actions faster than this threshold will not be logged.
   * Default is 0.025 (25ms).
   */
  actionLogThresholdSeconds(): number;

  /**
   * Gets the action logging threshold in seconds. Actions faster than this threshold will not be logged.
   * Default is 0.025 (25ms).
   */
  static actionLogThresholdSeconds(): number;

  /**
   * Sets the action logging threshold in seconds. Actions faster than this threshold will not be logged.
   * Default is 0.025 (25ms).
   * @param threshold
   *        the threshold in seconds
   */
  setActionLogThresholdSeconds(threshold: number): void;

  /**
   * Sets the action logging threshold in seconds. Actions faster than this threshold will not be logged.
   * Default is 0.025 (25ms).
   * @param threshold
   *        the threshold in seconds
   */
  static setActionLogThresholdSeconds(threshold: number): void;
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
