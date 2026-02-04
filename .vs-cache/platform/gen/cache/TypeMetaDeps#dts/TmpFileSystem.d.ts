// TypeScript definitions for the C3 type TmpFileSystem

/**
 * Manages creation of files which will get cleaned up automatically
 *
 * @remarks this represents a value passed to a method that expects an instance of TmpFileSystem
 */
declare interface ITmpFileSystem {

  /**
   * Optional root OS folder to limit access to files.
   */
  root?: string | null;
}

/**
 * Manages creation of files which will get cleaned up automatically
 *
 * @remarks this represents a made instance of TmpFileSystem
 */
declare class TmpFileSystem extends Obj {

  /**
   * Optional root OS folder to limit access to files.
   */
  readonly root?: string | null;
  withRoot(root: string | null): TmpFileSystem;

  /**
   * Optional root OS folder to limit access to files.
   */
  static readonly root?: string | null;

  /**
   * If called directly on FileSystem then returns default FileSystem. If called directly on a sub-type then returns
   * instance of that FileSystem. Given C3 server may have access to multiple different FileSystems so it's important to
   * correctly use #fromScheme and #fromUrlOrEncodedPath in most of the cases and only in special cases #inst.
   */
  static inst(): TmpFileSystem;

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
  static fromJson(json: any | null): TmpFileSystem | null;

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
  static fromJsonString(json: string | null): TmpFileSystem | null;

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
  static fromXmlString(xml: string | null): TmpFileSystem | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TmpFileSystem | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TmpFileSystem;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): TmpFileSystem;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TmpFileSystem;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TmpFileSystem;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TmpFileSystem;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TmpFileSystem;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TmpFileSystem | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TmpFileSystem | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TmpFileSystem | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TmpFileSystem | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TmpFileSystem;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TmpFileSystem;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TmpFileSystem;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TmpFileSystem;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TmpFileSystem;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TmpFileSystem;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TmpFileSystem;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): TmpFileSystem;

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
  withField(field: string, value: any, doNotConvert?: boolean): TmpFileSystem;

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
  static withField(field: string, value: any, doNotConvert?: boolean): TmpFileSystem;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): TmpFileSystem;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): TmpFileSystem;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TmpFileSystem;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TmpFileSystem;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TmpFileSystem;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TmpFileSystem;

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
  withoutFieldAtPath(path: string): TmpFileSystem;

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
  static withoutFieldAtPath(path: string): TmpFileSystem;

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
  withoutField(field: string | null): TmpFileSystem;

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
  static withoutField(field: string | null): TmpFileSystem;

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
  withoutField(field: FieldType | null): TmpFileSystem;

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
  static withoutField(field: FieldType | null): TmpFileSystem;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TmpFileSystem;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): TmpFileSystem;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TmpFileSystem;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TmpFileSystem;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TmpFileSystem;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): TmpFileSystem;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TmpFileSystem;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TmpFileSystem;

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
  defaultField(field: string): TmpFileSystem;

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
  static defaultField(field: string): TmpFileSystem;

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
  defaultField(field: FieldType): TmpFileSystem;

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
  static defaultField(field: FieldType): TmpFileSystem;

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
  unsetField(field: string): TmpFileSystem;

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
  static unsetField(field: string): TmpFileSystem;

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
  unsetField(field: FieldType): TmpFileSystem;

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
  static unsetField(field: FieldType): TmpFileSystem;

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
  removeField(field: string): TmpFileSystem;

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
  static removeField(field: string): TmpFileSystem;

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
  removeField(field: FieldType): TmpFileSystem;

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
  static removeField(field: FieldType): TmpFileSystem;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TmpFileSystem;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TmpFileSystem;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TmpFileSystem;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): TmpFileSystem;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TmpFileSystem;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TmpFileSystem;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TmpFileSystem;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TmpFileSystem;

  mergeJson(json: any | null): TmpFileSystem;

  static mergeJson(json: any | null): TmpFileSystem;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TmpFileSystem;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TmpFileSystem;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TmpFileSystem;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): TmpFileSystem;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TmpFileSystem | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<TmpFileSystem | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TmpFileSystem | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TmpFileSystem | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TmpFileSystem | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<TmpFileSystem | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TmpFileSystem | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TmpFileSystem | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TmpFileSystem | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TmpFileSystem | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<TmpFileSystem | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TmpFileSystem | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TmpFileSystem;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TmpFileSystem;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TmpFileSystem;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TmpFileSystem;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TmpFileSystem;

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
  static make(fields: any, withDefaults?: boolean): TmpFileSystem;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TmpFileSystem;

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
  afterMake(): TmpFileSystem;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): TmpFileSystem;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TmpFileSystem;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TmpFileSystem>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TmpFileSystem;

  /**
   * This function should be invoked by the subtype to subscribe for notifications trigger by a file system.
   */
  static registerNotification(urlOrEncodedPathPrefix?: string | null, spec?: FileSystemNotificationSpec | null): void;

  /**
   * This function should be invoked by the subtype to unsubscribe for notifications trigger by a file system.
   */
  static deregisterNotification(urlOrEncodedPathPrefix?: string | null): void;

  /**
   * @return configuration of a default file-systems.
   */
  static defaultFileSystemConfig(secrets?: boolean): FileSystemConfigChild;

  /**
   * @return configuration of all file-systems.
   */
  static fileSystemConfig(secrets?: boolean): FileSystemConfig;

  /**
   * @return specific configuration of this file-systems.
   */
  configChild(secrets?: boolean): FileSystemConfigChild;

  /**
   * @return specific configuration of this file-systems.
   */
  static configChild(secrets?: boolean): FileSystemConfigChild;

  /**
   * @return the file system notification configuration for input urlOrEncodedPathPrefix.
   */
  static notificationConfig(urlOrEncodedPathPrefix: string): FileSystemNotificationConfig | null;

  /**
   * Checks if this file system type is enabled in the environment.
   */
  enabled(): boolean;

  /**
   * Checks if this file system type is enabled in the environment.
   */
  static enabled(): boolean;

  /**
   * Enable the file system on the environment
   */
  enable(): boolean;

  /**
   * Enable the file system on the environment
   */
  static enable(): boolean;

  /**
   * Checks if this file system type supports content type. If filesystem does support persisting content type then
   * it should also implement #replaceContentTypeAndEncodingBatch.
   */
  supportsContentType(): boolean;

  /**
   * Checks if this file system type supports content type. If filesystem does support persisting content type then
   * it should also implement #replaceContentTypeAndEncodingBatch.
   */
  static supportsContentType(): boolean;

  /**
   * Scheme for this file system. E.g. 'file' for Local FS, 's3', 'hdfs' etc.
   */
  scheme(): string;

  /**
   * Scheme for this file system. E.g. 'file' for Local FS, 's3', 'hdfs' etc.
   */
  static scheme(): string;

  /**
   * Cloud Service Provider for the FileSystem.
   */
  cloudProvider(): CloudProvider;

  /**
   * Cloud Service Provider for the FileSystem.
   */
  static cloudProvider(): CloudProvider;

  /**
   * Returns the CloudResource type name that handles credentials for this FileSystem.
   * E.g. 'AwsS3Bucket' for S3FileSystem, 'BoxAccount' for BoxFileSystem.
   * Returns null if this FileSystem does not support cloud credentials.
   */
  cloudResourceTypeName(): string | null;

  /**
   * Returns the CloudResource type name that handles credentials for this FileSystem.
   * E.g. 'AwsS3Bucket' for S3FileSystem, 'BoxAccount' for BoxFileSystem.
   * Returns null if this FileSystem does not support cloud credentials.
   */
  static cloudResourceTypeName(): string | null;

  /**
   * Returns file-system for a given scheme or fails if scheme is not supported.
   */
  static fromScheme(scheme: string): FileSystem;

  /**
   * Returns file-system for a given url or encoded path or fails if url contains un-supported scheme.
   *
   * path can be a fully qualified URL or relative encoded path using '/' as a separator with or without leading '/'
   * character. path is expected to be Url encoded.
   *
   * If encoded path starts with a leading '/' then it's expected to contain "mount", root folder or remote host
   * (depending on file system).
   */
  static fromUrlOrEncodedPath(urlOrEncodedPath?: string | null): FileSystem;

  /**
   * @return root url for this file-system.
   */
  rootUrl(): string;

  /**
   * @return root url for this file-system.
   */
  static rootUrl(): string;

  /**
   * @return parsed root url for this file-system.
   */
  parseRootUrl(): Url;

  /**
   * @return parsed root url for this file-system.
   */
  static parseRootUrl(): Url;

  /**
   * Returns fully qualified Url for a given relative encoded path. If path is not relative i.e. starts with '/' then
   * it needs to match one of accessible file system mount urls. If path is relative then it will be relative to a
   * default mount url.
   */
  urlFromEncodedPath(encodedPath?: string | null): string;

  /**
   * Returns fully qualified Url for a given relative encoded path. If path is not relative i.e. starts with '/' then
   * it needs to match one of accessible file system mount urls. If path is relative then it will be relative to a
   * default mount url.
   */
  static urlFromEncodedPath(encodedPath?: string | null): string;

  /**
   * Returns fully qualified Url for a given mount. If the mount is not provided, then `default` will be used.
   * e.g for {@link FileSystem.s3} if default mount is pointing to "s3://dev-c3/foo/bar", then
   * - FileSystem.s3().urlFromMount(FileSystemMount.DEFAULT)
   * - FileSystem.s3().urlFromMount("DEFAULT")
   * - FileSystem.s3().urlFromMount("/")
   * will all return "s3://dev-c3/foo/bar".
   */
  urlFromMount(mount?: string | null): string;

  /**
   * Returns fully qualified Url for a given mount. If the mount is not provided, then `default` will be used.
   * e.g for {@link FileSystem.s3} if default mount is pointing to "s3://dev-c3/foo/bar", then
   * - FileSystem.s3().urlFromMount(FileSystemMount.DEFAULT)
   * - FileSystem.s3().urlFromMount("DEFAULT")
   * - FileSystem.s3().urlFromMount("/")
   * will all return "s3://dev-c3/foo/bar".
   */
  static urlFromMount(mount?: string | null): string;

  /**
   * Returns fully qualified Url for a given mount and path components. If the mount is not provided, then `default`
   * will be used. e.g. for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" and path is
   * ["my-dir", "my file.txt"] then will return "s3://dev-c3/foo/bar/my-dir/my%20file.txt".
   *
   * PLAT-12089 - Inline methods in c3.typ file do not support variable arguments
   *
   * urlFromMountAndPath: final inline member function(mount: string, path: string ...): !string
   */
  urlFromMountAndPath(mount?: string | null, ...path: string | null[]): string;

  /**
   * Returns fully qualified Url for a given mount and path components. If the mount is not provided, then `default`
   * will be used. e.g. for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" and path is
   * ["my-dir", "my file.txt"] then will return "s3://dev-c3/foo/bar/my-dir/my%20file.txt".
   *
   * PLAT-12089 - Inline methods in c3.typ file do not support variable arguments
   *
   * urlFromMountAndPath: final inline member function(mount: string, path: string ...): !string
   */
  static urlFromMountAndPath(mount?: string | null, ...path: string | null[]): string;

  /**
   * Returns fully qualified Url for a given mount and encoded path. If the mount is not provided, then `default` will
   * be used. e.g. for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" and path is "/my-dir/my-file.txt" then
   * will return "s3://dev-c3/foo/bar/my-dir/my-file.txt".
   */
  urlFromMountAndRelativeEncodedPath(mount?: string | null, relativeEncodedPath?: string | null): string;

  /**
   * Returns fully qualified Url for a given mount and encoded path. If the mount is not provided, then `default` will
   * be used. e.g. for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" and path is "/my-dir/my-file.txt" then
   * will return "s3://dev-c3/foo/bar/my-dir/my-file.txt".
   */
  static urlFromMountAndRelativeEncodedPath(mount?: string | null, relativeEncodedPath?: string | null): string;

  /**
   * Returns fully qualified Url for a given host (part of the valid mount path) and decoded path. E.g.
   * for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" is a valid mount then for
   * "dev-c3" and "foo/bar/my-dir/my file.txt" will return "s3://dev-c3/foo/bar/my-dir/my%20file.txt".
   * Will fail if resulting URL does not have a valid mount url.
   */
  urlFromHostAndPath(host: string | null, path: string | null): string;

  /**
   * Returns fully qualified Url for a given host (part of the valid mount path) and decoded path. E.g.
   * for S3 if DEFAULT mount is pointing to "s3://dev-c3/foo/bar" is a valid mount then for
   * "dev-c3" and "foo/bar/my-dir/my file.txt" will return "s3://dev-c3/foo/bar/my-dir/my%20file.txt".
   * Will fail if resulting URL does not have a valid mount url.
   */
  static urlFromHostAndPath(host: string | null, path: string | null): string;

  /**
   * @return all available mounts i.e. mount to external URL mapping.
   */
  mounts(): C3.Map<string | null, string | null>;

  /**
   * @return all available mounts i.e. mount to external URL mapping.
   */
  static mounts(): C3.Map<string | null, string | null>;

  /**
   * File system mount url (a.k.a. root folder | remote host). If mount parameter is null then returns default mount
   * url for current environment and app. Can be null if file system doesn't support pre-defined mount.
   */
  mountUrl(mount?: string | null): string | null;

  /**
   * File system mount url (a.k.a. root folder | remote host). If mount parameter is null then returns default mount
   * url for current environment and app. Can be null if file system doesn't support pre-defined mount.
   */
  static mountUrl(mount?: string | null): string | null;

  /**
   * Validates and returns url if valid otherwise throws exception.
   */
  validateUrl(url: string | null): string | null;

  /**
   * Validates and returns url if valid otherwise throws exception.
   */
  static validateUrl(url: string | null): string | null;

  /**
   * Extracts mount url and encoded path from url.
   */
  mountUrlAndEncodedPathFromUrl(url: string, validate?: boolean): Pair<string | null, string | null>;

  /**
   * Extracts mount url and encoded path from url.
   */
  static mountUrlAndEncodedPathFromUrl(url: string, validate?: boolean): Pair<string | null, string | null>;

  /**
   * Extracts mount from url.
   */
  mountFromUrl(url: string, validate?: boolean): string | null;

  /**
   * Extracts mount from url.
   */
  static mountFromUrl(url: string, validate?: boolean): string | null;

  /**
   * @return true if ACL is enabled for provided mount.
   *
   * @see FileMeta
   */
  isAclEnabled(mount: string): boolean;

  /**
   * @return true if ACL is enabled for provided mount.
   *
   * @see FileMeta
   */
  static isAclEnabled(mount: string): boolean;

  /**
   * @return true if provided mount is read only.
   */
  isReadOnly(mount: string): boolean;

  /**
   * @return true if provided mount is read only.
   */
  static isReadOnly(mount: string): boolean;

  /**
   * @return true if provided url is valid; i.e. for a valid mount
   */
  isValidUrl(url: string | null): boolean;

  /**
   * @return true if provided url is valid; i.e. for a valid mount
   */
  static isValidUrl(url: string | null): boolean;

  /**
   * @return true if provided mount url is valid.
   */
  isValidMountUrl(mountUrl: string | null): boolean;

  /**
   * @return true if provided mount url is valid.
   */
  static isValidMountUrl(mountUrl: string | null): boolean;

  /**
   * Truncates given mount by deleting all the files. Requires confirm parameter to be true.
   */
  truncateMount(mount?: string | null, confirm?: boolean, spec?: FileOperationSpec | null): number;

  /**
   * Truncates given mount by deleting all the files. Requires confirm parameter to be true.
   */
  static truncateMount(mount?: string | null, confirm?: boolean, spec?: FileOperationSpec | null): number;

  /**
   * Creates instance of file from url or encoded path. Path can be relative, absolute or fully qualified url.
   * Doesn't read metadata nor checks if file exists or not.
   */
  makeFile(urlOrEncodedPath: string | null, contentType?: string | null, contentEncoding?: string | null): File;

  /**
   * Creates instance of file from url or encoded path. Path can be relative, absolute or fully qualified url.
   * Doesn't read metadata nor checks if file exists or not.
   */
  static makeFile(urlOrEncodedPath: string | null, contentType?: string | null, contentEncoding?: string | null): File;

  /**
   * Creates new file. If file exists truncates it's content.
   */
  createFile(file: File, spec?: FileOperationSpec | null): File;

  /**
   * Creates new file. If file exists truncates it's content.
   */
  static createFile(file: File, spec?: FileOperationSpec | null): File;

  /**
   * Creates new directory. If the directory already exists, returns false.
   * Returns true if the directory was created.
   */
  createDir(urlOrEncodedPath: string | null, spec?: FileOperationSpec | null): boolean;

  /**
   * Creates new directory. If the directory already exists, returns false.
   * Returns true if the directory was created.
   */
  static createDir(urlOrEncodedPath: string | null, spec?: FileOperationSpec | null): boolean;

  /**
   * Creates new ZIP file based on provided list of files.
   *
   * @param zipUrlOrEncodedPath
   *          url or encoded path for a resulting ZIP file
   * @param files
   *          list of files to ZIP
   * @param filesRootUrl
   *          root url for files; entry name in the ZIP file will be relative decoded path to this root; if not provided
   *          then entry name will be decoded path of the file
   */
  zipFiles(zipUrlOrEncodedPath: string, files: C3.Array<File | null>, filesRootUrl?: string | null, spec?: FileOperationSpec | null): File;

  /**
   * Creates new ZIP file based on provided list of files.
   *
   * @param zipUrlOrEncodedPath
   *          url or encoded path for a resulting ZIP file
   * @param files
   *          list of files to ZIP
   * @param filesRootUrl
   *          root url for files; entry name in the ZIP file will be relative decoded path to this root; if not provided
   *          then entry name will be decoded path of the file
   */
  static zipFiles(zipUrlOrEncodedPath: string, files: C3.Array<File | null>, filesRootUrl?: string | null, spec?: FileOperationSpec | null): File;

  /**
   * Opens file and reads it's metadata. Returns null if file doesn't exist.
   */
  openFile(file: File, spec?: FileOperationSpec | null): File | null;

  /**
   * Opens file and reads it's metadata. Returns null if file doesn't exist.
   */
  static openFile(file: File, spec?: FileOperationSpec | null): File | null;

  /**
   * Opens files and reads their metadata. Elements in resulting array will be null if that file doesn't exist.
   */
  openFiles(files: C3.Array<File | null>, spec?: FileOperationSpec | null): C3.Array<File | null>;

  /**
   * Opens files and reads their metadata. Elements in resulting array will be null if that file doesn't exist.
   */
  static openFiles(files: C3.Array<File | null>, spec?: FileOperationSpec | null): C3.Array<File | null>;

  /**
   * Lists files starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all files underneath it.
   * @param limit
   *          number of files to return; if -1 all files will be retrieved, defaults is file-system specific.
   *          always check for ListFilesResult.nextMarker.
   */
  listFiles(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesResult;

  /**
   * Lists files starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all files underneath it.
   * @param limit
   *          number of files to return; if -1 all files will be retrieved, defaults is file-system specific.
   *          always check for ListFilesResult.nextMarker.
   */
  static listFiles(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesResult;

  /**
   * List of files and directories just one level down from given url or encoded path.
   * E.g. with given object paths as following, using / as delimiter:
   * - North America/countyList.csv
   * - North America/Canada/Quebec/Montreal
   * - North America/Canada/Quebec/Montreal/population.csv
   * - North America/USA/Washington/Bellevue
   * - North America/USA/Washington/Seattle
   * ...
   *
   * With 'North America` passed as `urlOrEncodedPath`, the returned value would be a ListFilesAndDirsResult instance
   * which contains:
   * - files: [North America/countyList.csv] (entries are File instances)
   * - dirs:  [North America/Canada/,North America/USA/,...] (entries are names of direct child)
   * NOTE: all files and dirs included in result are direct children of the passed `urlOrEncodedPath`.
   *       And for deeper level children, like file "North America/Canada/Quebec/Montreal/population.csv", or dir
   *       "North America/USA/Washington/Bellevue", are excluded from the returned result.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all files underneath it.
   * @param limit
   *          number of files to return; if -1 all files will be retrieved, defaults is file-system specific.
   *          always check for ListFilesResult.nextMarker.
   */
  listDirectChildren(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesAndDirsResult;

  /**
   * List of files and directories just one level down from given url or encoded path.
   * E.g. with given object paths as following, using / as delimiter:
   * - North America/countyList.csv
   * - North America/Canada/Quebec/Montreal
   * - North America/Canada/Quebec/Montreal/population.csv
   * - North America/USA/Washington/Bellevue
   * - North America/USA/Washington/Seattle
   * ...
   *
   * With 'North America` passed as `urlOrEncodedPath`, the returned value would be a ListFilesAndDirsResult instance
   * which contains:
   * - files: [North America/countyList.csv] (entries are File instances)
   * - dirs:  [North America/Canada/,North America/USA/,...] (entries are names of direct child)
   * NOTE: all files and dirs included in result are direct children of the passed `urlOrEncodedPath`.
   *       And for deeper level children, like file "North America/Canada/Quebec/Montreal/population.csv", or dir
   *       "North America/USA/Washington/Bellevue", are excluded from the returned result.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all files underneath it.
   * @param limit
   *          number of files to return; if -1 all files will be retrieved, defaults is file-system specific.
   *          always check for ListFilesResult.nextMarker.
   */
  static listDirectChildren(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesAndDirsResult;

  doListDirectChildren(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesAndDirsResult;

  static doListDirectChildren(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesAndDirsResult;

  /**
   * Lists files starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all files underneath it.
   * @param limit
   *          number of files to return; if -1 all files will be retrieved, defaults is -1.
   */
  listFilesStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): Stream<File | null>;

  /**
   * Lists files starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all files underneath it.
   * @param limit
   *          number of files to return; if -1 all files will be retrieved, defaults is -1.
   */
  static listFilesStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): Stream<File | null>;

  /**
   * Lists directories starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all directories underneath it.
   * @param limit
   *          number of directories to return; if -1 all directories will be retrieved, defaults is -1.
   */
  listDirsStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, depth?: number | null, spec?: ListFilesOperationSpec | null): Stream<string | null>;

  /**
   * Lists directories starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *          path prefix to that would be used to get all directories underneath it.
   * @param limit
   *          number of directories to return; if -1 all directories will be retrieved, defaults is -1.
   */
  static listDirsStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, depth?: number | null, spec?: ListFilesOperationSpec | null): Stream<string | null>;

  /**
   * Determine which files have changed since the last state known to the caller. The method takes a path prefix
   * and finds all matching files. It compares the last modified time of the files to the values in the `lastSeen` map
   * to determine if the file has changed.
   *
   * @param urlOrEncodedPath directory path
   * @param lastSeen last state known to caller
   * @param filter lambda that will be called for each file before checking
   * @return summary of the changes, including a new version of the map
   */
  listChanges(urlOrEncodedPath: string, lastSeen: C3.Map<string, DateTime> | null, filter?: λPredicate<File> | null): FileSystem.Changes;

  /**
   * Determine which files have changed since the last state known to the caller. The method takes a path prefix
   * and finds all matching files. It compares the last modified time of the files to the values in the `lastSeen` map
   * to determine if the file has changed.
   *
   * @param urlOrEncodedPath directory path
   * @param lastSeen last state known to caller
   * @param filter lambda that will be called for each file before checking
   * @return summary of the changes, including a new version of the map
   */
  static listChanges(urlOrEncodedPath: string, lastSeen: C3.Map<string, DateTime> | null, filter?: λPredicate<File> | null): FileSystem.Changes;

  /**
   * API to execute the lambda function in a distributed batch mode. This api will listFiles at the given `path` and
   * call processBatch grouped by the `batchSize`. Within the processBatch, the lambda function will be executed on one
   * file at a time.
   * Kindly note that file metadata will not be read. One will have to explicitly read it in the lambda action passed if
   * required.
   * @param urlOrEncodedPath
   *            urlOrEncodedPath at which files should be listed
   * @param action
   *            The lambda function can be anything piece of code that needs to be applied to the files in distributed mode.
   *            E.g. (file) -> S3.copyFile("s3://bucket/some/other/location/file.name()) Checkout {@link Lambda} on how to create a lambda
   *            If you want to pass any arguments to it they should match the underlying lambda function
   * @param spec
   *           Spec for batch operation.
   * @return the distributed batch job
   */
  eachFile(urlOrEncodedPath?: string | null, action: Lambda<λConsumer<File> | null>, spec?: BatchFileOperationSpec | null): FileSystemBatchJob;

  /**
   * API to execute the lambda function in a distributed batch mode. This api will listFiles at the given `path` and
   * call processBatch grouped by the `batchSize`. Within the processBatch, the lambda function will be executed on one
   * file at a time.
   * Kindly note that file metadata will not be read. One will have to explicitly read it in the lambda action passed if
   * required.
   * @param urlOrEncodedPath
   *            urlOrEncodedPath at which files should be listed
   * @param action
   *            The lambda function can be anything piece of code that needs to be applied to the files in distributed mode.
   *            E.g. (file) -> S3.copyFile("s3://bucket/some/other/location/file.name()) Checkout {@link Lambda} on how to create a lambda
   *            If you want to pass any arguments to it they should match the underlying lambda function
   * @param spec
   *           Spec for batch operation.
   * @return the distributed batch job
   */
  static eachFile(urlOrEncodedPath?: string | null, action: Lambda<λConsumer<File> | null>, spec?: BatchFileOperationSpec | null): FileSystemBatchJob;

  /**
   * API to execute the lambda function in a distributed batch mode. This api will listFiles at the given `path` and
   * call processBatch grouped by the `batchSize`. Within the processBatch, the lambda function will be executed on a batch of files at a time.
   * Kindly note that file metadata will not be read. One will have to explicitly read it in the lambda action passed if
   * required.
   * @param urlOrEncodedPath
   *            urlOrEncodedPath at which files should be listed
   * @param action
   *            The lambda function can be anything piece of code that needs to be applied to the files in distributed mode.
   *            E.g. (file) -> S3.copyFile("s3://bucket/some/other/location/file.name()) Checkout {@link Lambda} on how to create a lambda
   * @param spec
   *           Spec for batch operation.
   * @return the distributed batch job
   */
  eachFileBatch(urlOrEncodedPath: string | null, action: Lambda<λConsumer<C3.Array<File | null>> | null>, spec?: BatchFileOperationSpec | null): FileSystemBatchJob;

  /**
   * API to execute the lambda function in a distributed batch mode. This api will listFiles at the given `path` and
   * call processBatch grouped by the `batchSize`. Within the processBatch, the lambda function will be executed on a batch of files at a time.
   * Kindly note that file metadata will not be read. One will have to explicitly read it in the lambda action passed if
   * required.
   * @param urlOrEncodedPath
   *            urlOrEncodedPath at which files should be listed
   * @param action
   *            The lambda function can be anything piece of code that needs to be applied to the files in distributed mode.
   *            E.g. (file) -> S3.copyFile("s3://bucket/some/other/location/file.name()) Checkout {@link Lambda} on how to create a lambda
   * @param spec
   *           Spec for batch operation.
   * @return the distributed batch job
   */
  static eachFileBatch(urlOrEncodedPath: string | null, action: Lambda<λConsumer<C3.Array<File | null>> | null>, spec?: BatchFileOperationSpec | null): FileSystemBatchJob;

  /**
   * Executes map-reduce algorithm for a list of file. This api will listFiles at the given `path` and call mapped for
   * each file batch based on `options.batchSize` and will persist intermediate results. Once all files are processed,
   * it will call reduce for each intermediate result and persist the final result.
   *
   * @param urlOrEncodedPath
   *         urlOrEncodedPath at which files should be listed
   * @param mapper
   *         The lambda function can be anything piece of code that needs to be applied to the files to produce
   *         intermediate results by logical key. See {@link Lambda} on how to create a lambda
   * @param reducer
   *         The lambda for processing all intermediate results for a given key
   * @param options
   *         options for this operation.
   * @return the distributed map reduce job
   *
   * @see MapReduceFilesOptions#context
   */
  mapReduceFiles(urlOrEncodedPath: string | null, mapper: Lambda<λBiFunction<C3.Array<File | null>, any, C3.Map<string | null, any>> | null>, reducer: Lambda<λTriFunction<string | null, C3.Array<any> | null, any, any> | null> | null, options?: MapReduceFilesOptions | null): FileSystemMapReduce;

  /**
   * Executes map-reduce algorithm for a list of file. This api will listFiles at the given `path` and call mapped for
   * each file batch based on `options.batchSize` and will persist intermediate results. Once all files are processed,
   * it will call reduce for each intermediate result and persist the final result.
   *
   * @param urlOrEncodedPath
   *         urlOrEncodedPath at which files should be listed
   * @param mapper
   *         The lambda function can be anything piece of code that needs to be applied to the files to produce
   *         intermediate results by logical key. See {@link Lambda} on how to create a lambda
   * @param reducer
   *         The lambda for processing all intermediate results for a given key
   * @param options
   *         options for this operation.
   * @return the distributed map reduce job
   *
   * @see MapReduceFilesOptions#context
   */
  static mapReduceFiles(urlOrEncodedPath: string | null, mapper: Lambda<λBiFunction<C3.Array<File | null>, any, C3.Map<string | null, any>> | null>, reducer: Lambda<λTriFunction<string | null, C3.Array<any> | null, any, any> | null> | null, options?: MapReduceFilesOptions | null): FileSystemMapReduce;

  /**
   * Return the total number of files in the given urlOrEncodedPath.
   *
   * @param urlOrEncodedPath
   *          path prefix that would be used to get count of all files underneath it.
   * @param spec
   *          file operation spec.
   * @return total number of files under the given path prefix.
   */
  countFiles(urlOrEncodedPath?: string | null, spec?: ListFilesOperationSpec | null): number;

  /**
   * Return the total number of files in the given urlOrEncodedPath.
   *
   * @param urlOrEncodedPath
   *          path prefix that would be used to get count of all files underneath it.
   * @param spec
   *          file operation spec.
   * @return total number of files under the given path prefix.
   */
  static countFiles(urlOrEncodedPath?: string | null, spec?: ListFilesOperationSpec | null): number;

  /**
   * Updates files access and modification times.
   *
   * @param paths
   *           list of files to touch.
   * @return list of updated Files in the same order as input.
   */
  touchFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Updates files access and modification times.
   *
   * @param paths
   *           list of files to touch.
   * @return list of updated Files in the same order as input.
   */
  static touchFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Updates access and modification times for files that start with provided url or encoded path.
   *
   * @param urlOrEncodedPath
   *           path prefix for files to touch.
   * @return number files deleted.
   */
  touchFiles(urlOrEncodedPath?: string | null, confirm?: boolean, spec?: ListFilesOperationSpec | null): number;

  /**
   * Updates access and modification times for files that start with provided url or encoded path.
   *
   * @param urlOrEncodedPath
   *           path prefix for files to touch.
   * @return number files deleted.
   */
  static touchFiles(urlOrEncodedPath?: string | null, confirm?: boolean, spec?: ListFilesOperationSpec | null): number;

  /**
   * Truncates files.
   *
   * @param files
   *           list of files to truncate.
   */
  truncateFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Truncates files.
   *
   * @param files
   *           list of files to truncate.
   */
  static truncateFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Truncates files.
   *
   * @param urlOrEncodedPath
   *           path prefix for files to truncate.
   */
  truncateFiles(urlOrEncodedPath?: string | null, confirm?: boolean, spec?: ListFilesOperationSpec | null): number;

  /**
   * Truncates files.
   *
   * @param urlOrEncodedPath
   *           path prefix for files to truncate.
   */
  static truncateFiles(urlOrEncodedPath?: string | null, confirm?: boolean, spec?: ListFilesOperationSpec | null): number;

  /**
   * Deletes files.
   *
   * @param files
   *           list of files to delete.
   */
  static deleteFilesBatch(files: C3.Array<File | null> | null, spec?: DeleteFileOperationSpec | null): void;

  /**
   * Deletes multiple files; confirm parameter should be set to true otherwise action fails.
   *
   * @param  urlOrEncodedPath
   *           path prefix for files to delete.
   * @return number files deleted.
   */
  deleteFiles(urlOrEncodedPath?: string | null, confirm?: boolean, spec?: DeleteFileOperationSpec | null): number;

  /**
   * Deletes multiple files; confirm parameter should be set to true otherwise action fails.
   *
   * @param  urlOrEncodedPath
   *           path prefix for files to delete.
   * @return number files deleted.
   */
  static deleteFiles(urlOrEncodedPath?: string | null, confirm?: boolean, spec?: DeleteFileOperationSpec | null): number;

  /**
   * Copies files from one path to another. The content type of the destination will not change from the content
   * type of the source file.
   *
   * @param srcFiles
   *             files to copy.
   * @param destPaths
   *             list of paths to a new destinations in the same order as srcFiles.
   * @return list of copied Files in the same order as input.
   */
  static copyFilesBatch(srcFiles: C3.Array<File | null> | null, destUrlsOrEncodedPaths: C3.Array<string | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Copies files from one path to another.
   *
   * @param srcUrlOrEncodedPath
   *             path prefix to source file(s).
   * @param destUrlOrEncodedPath
   *             path prefix to destination file(s).
   * @return number files copied.
   */
  copyFiles(srcUrlOrEncodedPath: string, destUrlOrEncodedPath: string, spec?: ListFilesOperationSpec | null): number;

  /**
   * Copies files from one path to another.
   *
   * @param srcUrlOrEncodedPath
   *             path prefix to source file(s).
   * @param destUrlOrEncodedPath
   *             path prefix to destination file(s).
   * @return number files copied.
   */
  static copyFiles(srcUrlOrEncodedPath: string, destUrlOrEncodedPath: string, spec?: ListFilesOperationSpec | null): number;

  /**
   * Move files from one path to another.
   *
   * @param srcFiles
   *             files to move.
   * @param destUrlsOrEncodedPaths
   *             list of paths to a new destinations in the same order as srcFiles.
   * @return list of copied Files in the same order as input.
   */
  static moveFilesBatch(srcFiles: C3.Array<File | null> | null, destUrlsOrEncodedPaths: C3.Array<string | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Moves the files from one path to another.
   *
   * @param srcUrlOrEncodedPath
   *             path prefix to source file(s).
   * @param destUrlOrEncodedPath
   *             path prefix to destination file(s).
   * @return number files copied
   */
  moveFiles(srcUrlOrEncodedPath: string, destUrlOrEncodedPath: string, spec?: ListFilesOperationSpec | null): number;

  /**
   * Moves the files from one path to another.
   *
   * @param srcUrlOrEncodedPath
   *             path prefix to source file(s).
   * @param destUrlOrEncodedPath
   *             path prefix to destination file(s).
   * @return number files copied
   */
  static moveFiles(srcUrlOrEncodedPath: string, destUrlOrEncodedPath: string, spec?: ListFilesOperationSpec | null): number;

  /**
   * Replaces the content type and encoding without modifying the content of the files.
   *
   * Not every file sustem supports persisting content type and content encoding.
   *
   * @param files
   *            source files for which the content type and content encoding needs to be replaced.
   * @param contentType
   *            new content type.
   * @param contentEncoding
   *            new content encoding.
   */
  replaceContentTypeAndEncodingBatch(files: C3.Array<File | null> | null, contentType: string, contentEncoding: string, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Replaces the content type and encoding without modifying the content of the files.
   *
   * Not every file sustem supports persisting content type and content encoding.
   *
   * @param files
   *            source files for which the content type and content encoding needs to be replaced.
   * @param contentType
   *            new content type.
   * @param contentEncoding
   *            new content encoding.
   */
  static replaceContentTypeAndEncodingBatch(files: C3.Array<File | null> | null, contentType: string, contentEncoding: string, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Replaces the content type and encoding without modifying the content of the files obtained by filePrefix.
   *
   * @param urlOrEncodedPathPrefix
   *            path prefix to source file(s) for which the content type and content encoding needs to be replaced.
   * @param contentType
   *            new content type.
   * @param contentEncoding
   *            new content encoding.
   */
  replaceContentTypeAndEncoding(urlOrEncodedPathPrefix: string, contentType: string, contentEncoding: string, spec?: ListFilesOperationSpec | null): number;

  /**
   * Replaces the content type and encoding without modifying the content of the files obtained by filePrefix.
   *
   * @param urlOrEncodedPathPrefix
   *            path prefix to source file(s) for which the content type and content encoding needs to be replaced.
   * @param contentType
   *            new content type.
   * @param contentEncoding
   *            new content encoding.
   */
  static replaceContentTypeAndEncoding(urlOrEncodedPathPrefix: string, contentType: string, contentEncoding: string, spec?: ListFilesOperationSpec | null): number;

  /**
   * Deserializes content from various files led to by the path prefix into a list of C3 Type instances.
   * @urlOrEncodedPathPrefix
   *           Path to the files to stream data from
   * @see FileObjsOperSpec.targetType
   *
   * @return list of objects
   */
  readObjs(urlOrEncodedPathPrefix: string, spec?: FileObjsOperSpec | null): Stream<Obj | null>;

  /**
   * Deserializes content from various files led to by the path prefix into a list of C3 Type instances.
   * @urlOrEncodedPathPrefix
   *           Path to the files to stream data from
   * @see FileObjsOperSpec.targetType
   *
   * @return list of objects
   */
  static readObjs(urlOrEncodedPathPrefix: string, spec?: FileObjsOperSpec | null): Stream<Obj | null>;

  /**
   * Checks if the provided url or encoded path is empty or a folder/file exists.
   *
   * @param urlOrEncodedPath
   *          prefix path for file(s).
   * @return whether the path is empty or not.
   */
  isPathEmpty(urlOrEncodedPath?: string | null, spec?: FileOperationSpec | null): boolean;

  /**
   * Checks if the provided url or encoded path is empty or a folder/file exists.
   *
   * @param urlOrEncodedPath
   *          prefix path for file(s).
   * @return whether the path is empty or not.
   */
  static isPathEmpty(urlOrEncodedPath?: string | null, spec?: FileOperationSpec | null): boolean;

  /**
   * @return true if path is a directory; i.e. weather or not it ends with '/';
   */
  isPathDirectory(urlOrEncodedPath?: string | null): boolean;

  /**
   * @return true if path is a directory; i.e. weather or not it ends with '/';
   */
  static isPathDirectory(urlOrEncodedPath?: string | null): boolean;

  /**
   * @return the file system capabilities for {@link FileOperationSpec}.
   */
  get capabilities(): FileSystem.Capabilities;

  /**
   * @return the file system capabilities for {@link FileOperationSpec}.
   */
  static get capabilities(): FileSystem.Capabilities;

  /**
   * @return instance of S3 file system
   */
  static s3(): S3FileSystem;

  /**
   * @return instance of Azure Blob File system
   */
  static azure(): AzureFileSystem;

  /**
   * @return instance of Azure Data Lake File system
   */
  static adl(): AdlFileSystem;

  /**
   * @return instance of C3 file system
   */
  static c3(): C3FileSystem;

  /**
   * @return instance of GCS file system
   */
  static gcs(): GcsFileSystem;

  /**
   * @return instance of GitHub file system
   */
  static github(): GitHubFileSystem;

  /**
   * @return instance of Http file system
   */
  static http(): HttpFileSystem;

  /**
   * @return instance of Https file system
   */
  static https(): HttpsFileSystem;

  /**
   * @return instance of Local file system
   */
  static local(): LocalFileSystem;

  /**
   * @return instance of tmp file system
   */
  static tmp(): TmpFileSystem;

  /**
   * @return instance of archive file system
   */
  static archive(): ArchiveFileSystem;

  /**
   * @return instance of hdfs file system
   */
  static hdfs(): Hdfs;

  /**
   * @return instance of MsGraph file system
   */
  static msgraph(): MsGraphFileSystem;

  /**
   * @return instance of Google Drive file system
   */
  static gdrive(): GoogleDriveFileSystem;

  /**
   * @return instance of Box file system
   */
  static box(): BoxFileSystem;

  isC3(): boolean;

  static isC3(): boolean;

  isS3(): boolean;

  static isS3(): boolean;

  isAzure(): boolean;

  static isAzure(): boolean;

  isAdl(): boolean;

  static isAdl(): boolean;

  isHttp(): boolean;

  static isHttp(): boolean;

  isHttps(): boolean;

  static isHttps(): boolean;

  isGcs(): boolean;

  static isGcs(): boolean;

  isLocal(): boolean;

  static isLocal(): boolean;

  isTmp(): boolean;

  static isTmp(): boolean;

  isArchive(): boolean;

  static isArchive(): boolean;

  isHdfs(): boolean;

  static isHdfs(): boolean;

  isMsGraph(): boolean;

  static isMsGraph(): boolean;

  isGDrive(): boolean;

  static isGDrive(): boolean;

  isBox(): boolean;

  static isBox(): boolean;

  asC3(failIfNot?: boolean): C3FileSystem | null;

  static asC3(failIfNot?: boolean): C3FileSystem | null;

  asS3(failIfNot?: boolean): S3FileSystem | null;

  static asS3(failIfNot?: boolean): S3FileSystem | null;

  asAdl(failIfNot?: boolean): AdlFileSystem | null;

  static asAdl(failIfNot?: boolean): AdlFileSystem | null;

  asHttp(failIfNot?: boolean): HttpFileSystem | null;

  static asHttp(failIfNot?: boolean): HttpFileSystem | null;

  asHttps(failIfNot?: boolean): HttpsFileSystem | null;

  static asHttps(failIfNot?: boolean): HttpsFileSystem | null;

  asTmp(failIfNot?: boolean): TmpFileSystem | null;

  static asTmp(failIfNot?: boolean): TmpFileSystem | null;

  asLocal(failIfNot?: boolean): LocalFileSystem | null;

  static asLocal(failIfNot?: boolean): LocalFileSystem | null;

  asArchive(failIfNot?: boolean): ArchiveFileSystem | null;

  static asArchive(failIfNot?: boolean): ArchiveFileSystem | null;

  asHdfs(failIfNot?: boolean): Hdfs | null;

  static asHdfs(failIfNot?: boolean): Hdfs | null;

  asMsGraph(failIfNot?: boolean): MsGraphFileSystem | null;

  static asMsGraph(failIfNot?: boolean): MsGraphFileSystem | null;

  asGDrive(failIfNot?: boolean): GoogleDriveFileSystem | null;

  static asGDrive(failIfNot?: boolean): GoogleDriveFileSystem | null;

  asBox(failIfNot?: boolean): BoxFileSystem | null;

  static asBox(failIfNot?: boolean): BoxFileSystem | null;

  /**
   * Make this instance of file system as default.
   */
  makeDefault(override?: string | null): void;

  /**
   * Make this instance of file system as default.
   */
  static makeDefault(override?: string | null): void;

  /**
   * Set mount URL on this file system.
   *
   * WARNING: Please DO NOT set mounts without ACL to any directory containing sensitive info or secrets
   *
   * @param mount can by any of `FileSystemMount` enum values or any other identifier.
   * @param url a fully qualified url with a valid file system scheme. Check {@link FileSystemScheme} for all possible file system schemes.
   *
   * Also, see {@link file-system.c3doc} for instructions on adding external buckets/blobs as mounts on FileSystem.
   * It may only be applicable to FileSystem(s) which supports having buckets/blobs. e.g S3FileSystem, AdlFileSystem.
   */
  setMount(mount: string, url: string, override?: string | null): void;

  /**
   * Set mount URL on this file system.
   *
   * WARNING: Please DO NOT set mounts without ACL to any directory containing sensitive info or secrets
   *
   * @param mount can by any of `FileSystemMount` enum values or any other identifier.
   * @param url a fully qualified url with a valid file system scheme. Check {@link FileSystemScheme} for all possible file system schemes.
   *
   * Also, see {@link file-system.c3doc} for instructions on adding external buckets/blobs as mounts on FileSystem.
   * It may only be applicable to FileSystem(s) which supports having buckets/blobs. e.g S3FileSystem, AdlFileSystem.
   */
  static setMount(mount: string, url: string, override?: string | null): void;

  /**
   * Remove mount from this file system.
   */
  removeMount(mount: string, override?: string | null): void;

  /**
   * Remove mount from this file system.
   */
  static removeMount(mount: string, override?: string | null): void;

  /**
   * Reads raw (possibly compressed) binary content of a file. It is highly recommended to use File type for accessing
   * content.
   *
   * @param file
   *           existing file to read content from.
   * @return the content if file exists or null if it doesn't.
   */
  fileEncodedStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, ByteStream | null> | null;

  /**
   * Reads raw (possibly compressed) binary content of a file. It is highly recommended to use File type for accessing
   * content.
   *
   * @param file
   *           existing file to read content from.
   * @return the content if file exists or null if it doesn't.
   */
  static fileEncodedStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, ByteStream | null> | null;

  /**
   * Truncates file and returns push stream for writing encoded binary content into it. It is highly recommended to
   * use File type for writing content.
   *
   * @param file
   *           existing or new file to write to.
   * @return push stream for new content.
   */
  fileEncodedPushStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, BytePushStream | null>;

  /**
   * Truncates file and returns push stream for writing encoded binary content into it. It is highly recommended to
   * use File type for writing content.
   *
   * @param file
   *           existing or new file to write to.
   * @return push stream for new content.
   */
  static fileEncodedPushStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, BytePushStream | null>;

  /**
   * Internal helper function to check for confirm flag used in truncateBucket, touchFiles and deleteFiles.
   */
  static confirm(action: string, confirm?: boolean): void;

  /**
   * Extracts mount path and relative path from file path.
   */
  parseUrlOrEncodedPath(urlOrEncodedPath: string | null): FileUrl | null;

  /**
   * Extracts mount path and relative path from file path.
   */
  static parseUrlOrEncodedPath(urlOrEncodedPath: string | null): FileUrl | null;

  /**
   * Extracts authority/host and relative (decoded) path from mount.
   */
  hostAndPathFromMount(mount: string | null, validate: boolean): Pair<string | null, string | null> | null;

  /**
   * Extracts authority/host and relative (decoded) path from mount.
   */
  static hostAndPathFromMount(mount: string | null, validate: boolean): Pair<string | null, string | null> | null;

  /**
   * Extracts authority/host (part of mount url) and relative (decoded) path from C3 file url.
   */
  hostAndPathFromUrlOrEncodedPath(urlOrEncodedPath: string | null, validate: boolean): Pair<string | null, string | null> | null;

  /**
   * Extracts authority/host (part of mount url) and relative (decoded) path from C3 file url.
   */
  static hostAndPathFromUrlOrEncodedPath(urlOrEncodedPath: string | null, validate: boolean): Pair<string | null, string | null> | null;

  /**
   * Extracts scheme, authority/host (part of mount url) and relative (decoded) path from url.
   */
  schemeHostAndPathFromUrlOrEncodedPath(urlOrEncodedPath: string | null, validate: boolean): Triple<string | null, string | null, string | null> | null;

  /**
   * Extracts scheme, authority/host (part of mount url) and relative (decoded) path from url.
   */
  static schemeHostAndPathFromUrlOrEncodedPath(urlOrEncodedPath: string | null, validate: boolean): Triple<string | null, string | null, string | null> | null;

  /**
   * Extracts authority/host (part of mount url) and relative (decoded) path from external url (i.e. content location
   * of C3 File).
   */
  hostAndPathFromExternalUrl(url: string | null): Pair<string | null, string | null> | null;

  /**
   * Extracts authority/host (part of mount url) and relative (decoded) path from external url (i.e. content location
   * of C3 File).
   */
  static hostAndPathFromExternalUrl(url: string | null): Pair<string | null, string | null> | null;

  /**
   * Extracts scheme, authority/host (part of mount url) and relative (decoded) path from external url (i.e. content
   * location of C3 File).
   */
  schemeHostAndPathFromExternalUrl(url: string | null): Triple<string | null, string | null, string | null> | null;

  /**
   * Extracts scheme, authority/host (part of mount url) and relative (decoded) path from external url (i.e. content
   * location of C3 File).
   */
  static schemeHostAndPathFromExternalUrl(url: string | null): Triple<string | null, string | null, string | null> | null;

  /**
   * Validates authority/host; throws exception or return host that should be used. If `exclusive` check is also
   * requested, then validates that corresponding mount URL doesn't have any relative path. E.g. this is helpful when
   * implementing "truncate host" functionality.
   */
  validateHost(host: string | null, exclusive?: boolean): string;

  /**
   * Validates authority/host; throws exception or return host that should be used. If `exclusive` check is also
   * requested, then validates that corresponding mount URL doesn't have any relative path. E.g. this is helpful when
   * implementing "truncate host" functionality.
   */
  static validateHost(host: string | null, exclusive?: boolean): string;

  /**
   * Validate (and translate if needed) C3 File URL or encoded path to external / mounted URL.
   */
  urlToExternalUrl(urlOrEncodedPath: string | null, validate?: boolean): string | null;

  /**
   * Validate (and translate if needed) C3 File URL or encoded path to external / mounted URL.
   */
  static urlToExternalUrl(urlOrEncodedPath: string | null, validate?: boolean): string | null;

  /**
   * Validate (and translate if needed) external / mounted URL to C3 File URL.
   */
  urlFromExternalUrl(url: string, validate?: boolean): string | null;

  /**
   * Validate (and translate if needed) external / mounted URL to C3 File URL.
   */
  static urlFromExternalUrl(url: string, validate?: boolean): string | null;

  /**
   * Scheme that should be used by external URL.
   */
  externalScheme(): string;

  /**
   * Scheme that should be used by external URL.
   */
  static externalScheme(): string;

  /**
   * Throws ObjNotFound exception.
   */
  throwFileNotFoundException(urlOrEncodedPath: string): void;

  /**
   * Throws ObjNotFound exception.
   */
  static throwFileNotFoundException(urlOrEncodedPath: string): void;

  /**
   * @return cached copy i.e. local file with same metadata and content.
   */
  cachedCopy(file: File, spec?: FileOperationSpec | null): File;

  /**
   * @return cached copy i.e. local file with same metadata and content.
   */
  static cachedCopy(file: File, spec?: FileOperationSpec | null): File;

  /**
   * @return cached file content or null if not cached.
   */
  cachedFileContent(url: string | null, cacheUrlOrEncodedPath: string | null): Pair<File | null, any | null> | null;

  /**
   * @return cached file content or null if not cached.
   */
  static cachedFileContent(url: string | null, cacheUrlOrEncodedPath: string | null): Pair<File | null, any | null> | null;

  /**
   * Caches file content.
   */
  cacheFileContent(file: File, encodedContent: any | null, cacheUrlOrEncodedPath: string | null, cacheTtlSec?: number | null): void;

  /**
   * Caches file content.
   */
  static cacheFileContent(file: File, encodedContent: any | null, cacheUrlOrEncodedPath: string | null, cacheTtlSec?: number | null): void;

  /**
   * Opens file and reads it's metadata. Returns null if file doesn't exist.
   */
  doOpenFile(file: File, spec?: FileOperationSpec | null): File | null;

  /**
   * Opens file and reads it's metadata. Returns null if file doesn't exist.
   */
  static doOpenFile(file: File, spec?: FileOperationSpec | null): File | null;

  /**
   * Opens files and reads their metadata. Elements in resulting array will be null if that file doesn't exist.
   */
  doOpenFiles(files: C3.Array<File | null>, spec?: FileOperationSpec | null): C3.Array<File | null>;

  /**
   * Opens files and reads their metadata. Elements in resulting array will be null if that file doesn't exist.
   */
  static doOpenFiles(files: C3.Array<File | null>, spec?: FileOperationSpec | null): C3.Array<File | null>;

  /**
   * Lists files starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *        Fully qualified URL or relative encoded path.
   *        Note: If encoded path starts with a leading '/' then it's expected to contain "mount", root folder or
   *              remote host (depending on file system).
   * @param limit
   *        number of files to return; if -1 all files will be retrieved, default is file-system specific.
   *        always check for ListFilesResult.nextMarker.
   * @param marker
   * @param readMetadata
   * @param spec
   */
  doListFiles(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesResult;

  /**
   * Lists files starting with given url or encoded path and marker.
   *
   * @param urlOrEncodedPath
   *        Fully qualified URL or relative encoded path.
   *        Note: If encoded path starts with a leading '/' then it's expected to contain "mount", root folder or
   *              remote host (depending on file system).
   * @param limit
   *        number of files to return; if -1 all files will be retrieved, default is file-system specific.
   *        always check for ListFilesResult.nextMarker.
   * @param marker
   * @param readMetadata
   * @param spec
   */
  static doListFiles(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): ListFilesResult;

  doListFilesStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): Stream<File | null>;

  static doListFilesStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, readMetadata?: boolean, spec?: ListFilesOperationSpec | null): Stream<File | null>;

  doListDirsStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, depth?: number | null, spec?: ListFilesOperationSpec | null): Stream<string | null>;

  static doListDirsStream(urlOrEncodedPath?: string | null, limit?: number | null, marker?: string | null, depth?: number | null, spec?: ListFilesOperationSpec | null): Stream<string | null>;

  doTruncateMount(mount?: string | null, confirm?: boolean, spec?: FileOperationSpec | null): number;

  static doTruncateMount(mount?: string | null, confirm?: boolean, spec?: FileOperationSpec | null): number;

  /**
   * Deletes batch of files.
   *
   * @param files
   *        List of files to delete.
   * @param spec
   *        Configuration options. {@see FileOperationSpec}
   */
  doDeleteFilesBatch(files: C3.Array<File | null> | null, spec?: DeleteFileOperationSpec | null): void;

  /**
   * Deletes batch of files.
   *
   * @param files
   *        List of files to delete.
   * @param spec
   *        Configuration options. {@see FileOperationSpec}
   */
  static doDeleteFilesBatch(files: C3.Array<File | null> | null, spec?: DeleteFileOperationSpec | null): void;

  /**
   * Replaces the content type and encoding without modifying the content of the files.
   */
  doReplaceContentTypeAndEncodingBatch(files: C3.Array<File | null> | null, contentType: string, contentEncoding: string, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Replaces the content type and encoding without modifying the content of the files.
   */
  static doReplaceContentTypeAndEncodingBatch(files: C3.Array<File | null> | null, contentType: string, contentEncoding: string, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Reads raw (possibly compressed) binary content of a file. It is highly recommended to use File type for accessing
   * content.
   *
   * @param file
   *        existing file to read content from.
   * @return the content if file exists or null if it doesn't.
   */
  doFileEncodedStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, ByteStream | null> | null;

  /**
   * Reads raw (possibly compressed) binary content of a file. It is highly recommended to use File type for accessing
   * content.
   *
   * @param file
   *        existing file to read content from.
   * @return the content if file exists or null if it doesn't.
   */
  static doFileEncodedStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, ByteStream | null> | null;

  /**
   * Truncates file and returns push stream for writing encoded binary content into it. It is highly recommended to
   * use File type for writing content.
   *
   * @param file
   *        existing or new file to write to.
   * @return push stream for new content.
   */
  doFileEncodedPushStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, BytePushStream | null> | null;

  /**
   * Truncates file and returns push stream for writing encoded binary content into it. It is highly recommended to
   * use File type for writing content.
   *
   * @param file
   *        existing or new file to write to.
   * @return push stream for new content.
   */
  static doFileEncodedPushStream(file: File, spec?: FileOperationSpec | null): Pair<File | null, BytePushStream | null> | null;

  /**
   * Creates new file. If file exists truncates it's content.
   * Default implementation uses fileEncodedPushStream and openFile pattern.
   */
  doCreateFile(file: File, spec?: FileOperationSpec | null): File;

  /**
   * Creates new file. If file exists truncates it's content.
   * Default implementation uses fileEncodedPushStream and openFile pattern.
   */
  static doCreateFile(file: File, spec?: FileOperationSpec | null): File;

  /**
   * Creates new folder. If the folder already exists, returns false.
   * Returns true if the folder was created.
   */
  doCreateDir(urlOrEncodedPath: string, spec?: FileOperationSpec | null): boolean;

  /**
   * Creates new folder. If the folder already exists, returns false.
   * Returns true if the folder was created.
   */
  static doCreateDir(urlOrEncodedPath: string, spec?: FileOperationSpec | null): boolean;

  /**
   * Touches files by updating their timestamps. Default implementation uses fileEncodedPushStream pattern.
   */
  doTouchFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Touches files by updating their timestamps. Default implementation uses fileEncodedPushStream pattern.
   */
  static doTouchFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Truncates files to zero length. Default implementation uses fileEncodedPushStream pattern.
   */
  doTruncateFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Truncates files to zero length. Default implementation uses fileEncodedPushStream pattern.
   */
  static doTruncateFilesBatch(files: C3.Array<File | null> | null, spec?: ListFilesOperationSpec | null): C3.Array<File | null>;

  /**
   * Returns true if this FileSystem supports Files that correspond to directories.
   */
  supportsDirs(): boolean;

  /**
   * Returns true if this FileSystem supports Files that correspond to directories.
   */
  static supportsDirs(): boolean;

  /**
   * Generates pre-signed URL that can be used to upload/download files to/from object storage using HTTP.
   *
   *   1. Content-Type has to be specified for PUT operation.
   *   2. Content-Length has to be specified for PUT operation.
   *   3. x-ms-blob-type has to be specified for PUT operation on AzureFile. <BlockBlob | PageBlob | AppendBlob>
   *
   * @param urlOrEncodedPath
   *          Fully qualified URL or relative encoded path.
   * @param httpMethod
   *          Type of HTTP request, could be GET, PUT, POST, PATCH, or DELETE.
   * @param duration
   *          Specifies how long the presignedUrl is valid. See Duration.fromString for more details.
   * @param spec
   *          Provides options for various File actions.
   */
  generatePresignedUrl(urlOrEncodedPath: string, method?: string | null, expiration?: string | null, spec?: FileOperationSpec | null): string;

  /**
   * Generates pre-signed URL that can be used to upload/download files to/from object storage using HTTP.
   *
   *   1. Content-Type has to be specified for PUT operation.
   *   2. Content-Length has to be specified for PUT operation.
   *   3. x-ms-blob-type has to be specified for PUT operation on AzureFile. <BlockBlob | PageBlob | AppendBlob>
   *
   * @param urlOrEncodedPath
   *          Fully qualified URL or relative encoded path.
   * @param httpMethod
   *          Type of HTTP request, could be GET, PUT, POST, PATCH, or DELETE.
   * @param duration
   *          Specifies how long the presignedUrl is valid. See Duration.fromString for more details.
   * @param spec
   *          Provides options for various File actions.
   */
  static generatePresignedUrl(urlOrEncodedPath: string, method?: string | null, expiration?: string | null, spec?: FileOperationSpec | null): string;

  /**
   * Whether the error is retryable for a specific file system.
   */
  static shouldRetry(ex: any): boolean;

  /**
   * Copy a file to the destUrl
   *
   * @param src
   *    The file to be copied
   * @param destUrl
   *    Path to a new destination
   * @param spec
   *    The spec for the operations on the file being transferred
   */
  static copyFile(src: File, destUrl: string, spec?: FileOperationSpec | null): File | null;

  /**
   * Checks if a file is locked/leased.
   *
   * @param file
   *    The file to check
   * @param spec
   *    The spec for the operations on the file
   * @return true if the file is locked/leased.
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  doIsFileLocked(file: File, spec?: FileOperationSpec | null): boolean;

  /**
   * Checks if a file is locked/leased.
   *
   * @param file
   *    The file to check
   * @param spec
   *    The spec for the operations on the file
   * @return true if the file is locked/leased.
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  static doIsFileLocked(file: File, spec?: FileOperationSpec | null): boolean;

  /**
   * Breaks the lock/lease on the file (or its blob), if it is locked/leased.
   *
   * @param file
   *    The file whose lock/lease needs to be broken.
   * @param spec
   *    The spec for the operations on the file
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  doBreakLockOnFile(file: File, spec?: FileOperationSpec | null): void;

  /**
   * Breaks the lock/lease on the file (or its blob), if it is locked/leased.
   *
   * @param file
   *    The file whose lock/lease needs to be broken.
   * @param spec
   *    The spec for the operations on the file
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  static doBreakLockOnFile(file: File, spec?: FileOperationSpec | null): void;

  /**
   * Checks if a file is locked/leased.
   *
   * @param file
   *    The file to check
   * @param spec
   *    The spec for the operations on the file
   * @return true if the file is locked/leased.
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  isFileLocked(file: File, spec?: FileOperationSpec | null): boolean;

  /**
   * Checks if a file is locked/leased.
   *
   * @param file
   *    The file to check
   * @param spec
   *    The spec for the operations on the file
   * @return true if the file is locked/leased.
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  static isFileLocked(file: File, spec?: FileOperationSpec | null): boolean;

  /**
   * Breaks the lock/lease on the file (or its blob), if it is locked/leased.
   *
   * @param file
   *    The file whose lock/lease needs to be broken.
   * @param spec
   *    The spec for the operations on the file
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  breakLockOnFile(file: File, spec?: FileOperationSpec | null): void;

  /**
   * Breaks the lock/lease on the file (or its blob), if it is locked/leased.
   *
   * @param file
   *    The file whose lock/lease needs to be broken.
   * @param spec
   *    The spec for the operations on the file
   *
   * Throws an exception if FileSystem does not provide file locking capabilities.
   */
  static breakLockOnFile(file: File, spec?: FileOperationSpec | null): void;

  /**
   * Cache of all FileSystem instances.
   */
  static instanceCache(): C3.Map<string | null, FileSystem | null>;

  /**
   * Cache of all FileSystem instances by corresponding URL scheme.
   */
  static schemeCache(): C3.Map<string | null, FileSystem | null>;

  /**
   * Creates an instance of a VirtualFileSystem rooted at the root. Root should be a URL.
   *
   * Throws an exception if 'root' can't be accessed.
   */
  static fromRoot(root: FileUrl): VirtualFileSystem;

  /**
   * deletes directory recursively. If directory does not exist, does nothing.
   *
   * @param encodedPath
   *           encodedPath relative to root
   * @param confirm
   *           flag to confirm.
   */
  deleteDir(encodedPath?: string | null, confirm?: boolean, spec?: FileOperationSpec | null): void;

  /**
   * deletes directory recursively. If directory does not exist, does nothing.
   *
   * @param encodedPath
   *           encodedPath relative to root
   * @param confirm
   *           flag to confirm.
   */
  static deleteDir(encodedPath?: string | null, confirm?: boolean, spec?: FileOperationSpec | null): void;

  /**
   * Returns cached configuration object for instance of this file system.
   */
  config(secrets?: boolean): TmpFsConfig;

  /**
   * Returns cached configuration object for instance of this file system.
   */
  static config(secrets?: boolean): TmpFsConfig;

  /**
   * Make a temporary file
   */
  static createTmpFile(spec?: TmpFileSpec | null): File;

  /**
   * Make a temporary directory where files can be created
   *
   * All files in this directory will be removed after the ttl
   *
   * @return the url of the temporary folder
   */
  static createTmpDirectory(spec?: TmpFileSpec | null): string;

  /**
   * Checks the ttl on all tmp files and directories and removes them all
   * Please note that **files are not automatically deleted when TTL expires.** This must be invoked either via a
   * CronJob or as part of a clean-up routine to clean-up the old files.
   *
   * e.g If a CronJob is setup to clean files every 8 hours, then based on when the TTL expires and the next
   * clean-up is triggered, an TTL expired file (available-for-deletion) can stay up to 7 hrs 59 mins before getting
   * cleaned-up.
   *
   * If the clusterWide parameter is set to true, reapTmpFiles will run on all nodes in the cluster. Otherwise, it
   * will only run on the node it is called from.
   *
   * @see TmpFsConfig.ttlHours
   * @see TmpFileSpec.ttl
   */
  static reapTmpFiles(clusterWide?: boolean): void;

  /**
   * @return configured root folder for the TMP file-system.
   */
  static configuredRoot(): string;
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

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
