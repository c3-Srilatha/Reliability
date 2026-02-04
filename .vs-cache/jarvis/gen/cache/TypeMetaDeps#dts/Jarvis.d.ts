// TypeScript definitions for the C3 type Jarvis

/**
 * @remarks this represents a value passed to a method that expects an instance of Jarvis
 */
declare interface IJarvis {

  /**
   * The unique and required name of this instance.
   */
  name: string;
}

/**
 * @remarks this represents a made instance of Jarvis
 */
declare class Jarvis extends Obj {

  /**
   * The unique and required name of this instance.
   */
  readonly name: string;
  withName(name: string): Jarvis;

  /**
   * The unique and required name of this instance.
   */
  static readonly name: string;

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
  static fromJson(json: any | null): Jarvis | null;

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
  static fromJsonString(json: string | null): Jarvis | null;

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
  static fromXmlString(xml: string | null): Jarvis | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Jarvis | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Jarvis;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): Jarvis;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Jarvis;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Jarvis;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Jarvis;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Jarvis;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Jarvis | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Jarvis | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Jarvis | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Jarvis | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Jarvis;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Jarvis;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Jarvis;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Jarvis;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Jarvis;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Jarvis;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Jarvis;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): Jarvis;

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
  withField(field: string, value: any, doNotConvert?: boolean): Jarvis;

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
  static withField(field: string, value: any, doNotConvert?: boolean): Jarvis;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Jarvis;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): Jarvis;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Jarvis;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Jarvis;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Jarvis;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Jarvis;

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
  withoutFieldAtPath(path: string): Jarvis;

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
  static withoutFieldAtPath(path: string): Jarvis;

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
  withoutField(field: string | null): Jarvis;

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
  static withoutField(field: string | null): Jarvis;

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
  withoutField(field: FieldType | null): Jarvis;

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
  static withoutField(field: FieldType | null): Jarvis;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Jarvis;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): Jarvis;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Jarvis;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Jarvis;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Jarvis;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): Jarvis;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Jarvis;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Jarvis;

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
  defaultField(field: string): Jarvis;

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
  static defaultField(field: string): Jarvis;

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
  defaultField(field: FieldType): Jarvis;

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
  static defaultField(field: FieldType): Jarvis;

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
  unsetField(field: string): Jarvis;

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
  static unsetField(field: string): Jarvis;

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
  unsetField(field: FieldType): Jarvis;

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
  static unsetField(field: FieldType): Jarvis;

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
  removeField(field: string): Jarvis;

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
  static removeField(field: string): Jarvis;

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
  removeField(field: FieldType): Jarvis;

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
  static removeField(field: FieldType): Jarvis;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Jarvis;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Jarvis;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Jarvis;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): Jarvis;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Jarvis;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Jarvis;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Jarvis;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Jarvis;

  mergeJson(json: any | null): Jarvis;

  static mergeJson(json: any | null): Jarvis;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Jarvis;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Jarvis;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Jarvis;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): Jarvis;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Jarvis | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<Jarvis | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Jarvis | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Jarvis | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Jarvis | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<Jarvis | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Jarvis | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Jarvis | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Jarvis | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Jarvis | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<Jarvis | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Jarvis | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Jarvis;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Jarvis;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Jarvis;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Jarvis;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Jarvis;

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
  static make(fields: any, withDefaults?: boolean): Jarvis;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Jarvis | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Jarvis;

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
  afterMake(): Jarvis;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): Jarvis;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Jarvis;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Jarvis>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Jarvis;

  /**
   * @return package and version in which this interface is defined.
   */
  static ifacePackageAndVersion(): Pair<string, string>;

  /**
   * Return the latest metadata for a {@link Microservice.Content} to the client.
   * This method is called automatically after updating content to ensure the client has the latest metadata.
   */
  static updateContentMetadata(content: Microservice.Content): Microservice.Content;

  /**
   * @inheritdoc Microservice.Content.Iface
   *
   * NOTE: Jarvis utilizes only the {@link Jarvis.Content#name} field to retrieve the backing content.
   */
  static contentFor(content: Microservice.Content): Content;

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): Jarvis;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): Jarvis | null;

  /**
   * Where to service is currently configured to store build artifacts, ex: logs, screenshots.
   * This is NOT the same as the generated artifacts that are managed by {@link ArtifactHub}.
   * Build artifacts will be stored by {@link JarvisService.Build#id} and {@link JarvisService.Step#id}.
   */
  static buildArtifactsMount(): string | null;

  /**
   * @return build for provided id
   */
  static buildForId(id: string, failIfMissing?: boolean): Jarvis.Build | null;

  /**
   * @return step for provided id
   */
  static stepForId(id: string, failIfMissing?: boolean): Jarvis.Step | null;

  /**
   * @return content containing step artifacts for provided id
   */
  static stepArtifactsForId(id: string): Content | null;

  /**
   * Fetch related semantic versions for the given semantic versions. This includes semantic versions that are
   * used for production, testing, coverage, and root source.
   */
  static relatedSemanticVersions(semanticVersions?: C3.Array<string | null>): C3.Array<string | null>;

  /**
   * Triggers build for a given branch with null build config value.
   * @param branch
   *           The branch to build
   * @param forceRefresh
   *           Whether or not the latest commit sha should be force refreshed
   * @return the build instance.
   * @return Build pipeline url.
   * @param buildId The build id to generate the pipeline url for.
   */
  static buildPipelineUrl(buildId: string): string | null;

  /**
   * Triggers build for a given branch with null build config value.
   * @param branch
   *           The branch to build
   * @param forceRefresh
   *           Whether or not the latest commit sha should be force refreshed
   * @return the build instance.
   */
  static triggerBuild(branch: Jarvis.Branch, forceRefresh?: boolean): Jarvis.Build | null;

  /**
   * Triggers build for a given branch. Does not impose any limits on starting a build.
   * @param branch
   *           The branch to build
   * @param config
   *           The build config for this {@link Jarvis.Build}.
   *           This config will take precedence over config file from {@link Jarvis.Build#jarvisFilePath}.
   * @param forceRefresh
   *           Whether or not the latest commit sha should be force refreshed
   * @return the build instance.
   */
  static triggerBuild(branch: Jarvis.Branch, config?: any | null, forceRefresh?: boolean): Jarvis.Build | null;

  /**
   * Asynchronously aborts a running build.
   */
  static abort(build: Jarvis.Build): void;

  /**
   * Adds a step to current pipeline; will perform basic validation.
   * @param steps
   *       The steps to add
   * @param inheritEdges
   *       If true, the new steps will inherit the calling step's edges - meaning it will block the same steps.
   * @return identifiable instances of added Jarvis.Steps
   */
  static addSteps(steps: C3.Array<Jarvis.Step | null> | null, inheritEdges?: boolean): C3.Array<Jarvis.Step | null> | null;

  /**
   * Re-directs the parent of the given steps to the new parent step.
   * Note that this might change the order of operations of the steps, since step execution order
   * is partially determined by the parent-child relationship.
   *
   * Pipeline authors should be aware of the implications of this method and use it with caution.
   */
  static resetStepsParent(steps?: C3.Array<Jarvis.Step | null>, newParent?: Jarvis.Step | null): void;

  /**
   * Sets a list of steps to be blocked by the specified step.
   */
  static setStepsBlockedBy(steps?: C3.Array<Jarvis.Step | null>, blockedBy?: Jarvis.Step | null): void;

  /**
   * Adds placeholder steps to current pipeline; will perform basic validation. The steps will automatically be marked
   * as DONE with SUCCESS results.
   * @return identifiable instances of added Jarvis.Steps
   */
  static addPlaceholderSteps(steps: C3.Array<Jarvis.Step | null> | null): C3.Array<Jarvis.Step | null> | null;

  /**
   * Lock the next step for calling executor; if `null` then no more steps left to execute
   *
   * @see #completeStep
   */
  static lockStep(): Jarvis.Step | null;

  /**
   * Completes and unlocks locked step for calling executor; note that #result parameter is optional and if not provided
   * then will either create a new empty result or will change status of existing result to
   * {@link Jarvis.Step.Status.SUCCESS}
   */
  static completeStep(result?: Jarvis.Step.Result | null): void;

  /**
   * Fail the locked step for calling executor
   */
  static failStep(err: C3.Error): void;

  /**
   * Notify Jarvis that a step has begun execution and the actionId associated with that execution.
   */
  static setStepRunning(actionId: string): Jarvis.Step | null;

  /**
   * Return a {@link SourceControlRestApi} for the build that the calling executor is currently running a step for.
   */
  static sourceControlRestApi(): SourceControlRestApi<any>;

  /**
   * Returns the step results that match the given filter but removes all results for steps that that were retried.
   * Effectively returns the step results that should be considered for any status evaluation.
   * @param filter
   *          Filter to apply on the Jarvis.Step.Result before calculating the final results to return
   * @param include
   *          Include statement for the returned {@link Jarvis.Step.Result}
   */
  static finalStepResultsFor(filter?: string | null, include?: string | null): C3.Array<Jarvis.Step.Result | null> | null;

  static accessData(typeName: string, actionName: string, spec?: any): any | null;

  static buildConfigKeyValues(buildId: string): C3.Map<string | null, string | null>;

  static buildSecretKeys(buildId: string): C3.Array<string | null>;

  static serviceConfigKeyValues(): C3.Map<string | null, string | null>;

  /**
   * Set the service level config.
   */
  static setServiceConfigValue(key: string, value?: string | null): void;

  static branchGroupConfigKeyValues(branchGroupId: string): C3.Map<string | null, string | null>;

  static branchGroupSecretKeys(branchGroupId: string): C3.Array<string | null>;

  /**
   * Return a {@link Jarvis.BranchGroup} config value for the current {@link Jarvis.Step}.
   * Should only be used from Jarvis Executor.
   */
  static branchGroupConfigValue(key: string): string | null;

  /**
   * Return a {@link Jarvis.BranchGroup} config value for the current {@link Jarvis.Step}.
   * Should only be used from Studio UI.
   */
  static branchGroupConfigValue(branchGroupId: string, key: string): string | null;

  /**
   * Return a {@link Jarvis.BranchGroup} secret config value for the current {@link Jarvis.Step}.
   * Should only be used from Jarvis Executor.
   */
  static branchGroupSecretValue(key: string): string | null;

  /**
   * Return a {@link Jarvis.BranchGroup} secret config value for the current {@link Jarvis.Step}.
   * Should only be used from Studio UI.
   */
  static branchGroupSecretValue(branchGroupId: string, key: string): string | null;

  /**
   * Set a branch group config value for {@link Jarvis.BranchGroup}.
   * Should only be used from Studio UI.
   */
  static setBranchGroupConfigValue(branchGroupId: string, key: string, value: string): void;

  /**
   * Set a secret branch group config value for {@link Jarvis.BranchGroup}.
   * Should only be used from Studio UI
   */
  static setBranchGroupSecretValue(branchGroupId: string, key: string, secret: string): void;

  /**
   * Clear a specified branch group config value from a {@link Jarvis.BranchGroup}
   * Should only be used from Studio UI.
   */
  static clearBranchGroupConfigValue(branchGroupId: string, key: string): void;

  /**
   * Clear a list of specified branch group config values from a {@link Jarvis.BranchGroup}
   * Should only be used from Studio UI.
   */
  static clearBranchGroupConfigValues(branchGroupId: string, keys: C3.Array<string | null> | null): void;

  /**
   * Clear a specified branch group secret config value from a {@link Jarvis.BranchGroup}
   * Should only be used from Studio UI.
   */
  static clearBranchGroupSecretValue(branchGroupId: string, key: string): void;

  /**
   * Clear a list of specified branch group secret config values from a {@link Jarvis.BranchGroup}
   * Should only be used from Studio UI.
   */
  static clearBranchGroupSecretValues(branchGroupId: string, keys: C3.Array<string | null> | null): void;

  /**
   * Clear all the branch group config values and secret values for a specific branch group.
   * @param branchGroupId
   *        The id of the branch group whose config values are to be cleared.
   */
  static clearBranchGroupConfigAndSecret(branchGroupId: string): void;

  /**
   * Fetch build config value from a config with a specific build id.
   * Should only be used from Studio UI.
   * @param buildId
   *        The id of the build.
   * @param key
   *        The key of the config whose value is to be fetched.
   */
  static buildConfigValue(buildId: string, key: string): string | null;

  /**
   * Fetch build config value with a specific key from the current build.
   * Should only be used from Jarvis Executor.
   */
  static buildConfigValue(key: string): string | null;

  /**
   * Fetch build secret value from a config with a specific build id.
   * Should only be used from Studio UI.
   * @param buildId
   *        The id of the build.
   * @param key
   *        The key of the config whose value is to be fetched.
   */
  static buildSecretValue(buildId: string, key: string): string | null;

  /**
   * Fetch build secret value with a specific key from the current build.
   * Should only be used from Jarvis Executor.
   */
  static buildSecretValue(key: string): string | null;

  /**
   * Set config value for the current {@link Jarvis.Build}.
   * Should only be used in Jarvis Executor.
   * @param key
   *        The key of the config whose value is to be added/changed.
   * @param value
   *        The value of the new key in the config.
   */
  static setBuildConfigValue(key: string, value: string): void;

  /**
   * Set config value for the current {@link Jarvis.Build}.
   * Should only be used in Jarvis Executor.
   * @param key
   *        The key of the config whose value is to be added/changed.
   * @param value
   *        The value of the new key in the config.
   */
  static setBuildSecretValue(key: string, secret: string): void;

  /**
   * Clear config value with a specified key for the current {@link Jarvis.Build}.
   * Should only be used in Jarvis Executor.
   * @param key
   *        The key of the config whose value is to be added/changed.
   */
  static clearBuildConfigValue(key: string): void;

  /**
   * Clear secret value with a specified key for the current {@link Jarvis.Build}.
   * Should only be used in Jarvis Executor.
   * @param key
   *        The key of the config whose value is to be added/changed.
   */
  static clearBuildSecretValue(key: string): void;

  /**
   * Clear all config/secret values for the current {@link Jarvis.Build}.
   * Should only be used in Jarvis Executor.
   */
  static clearBuildConfigAndSecret(): void;

  /**
   * Create and set a new {@link JarvisService.BuildConfig} for the current {@link Jarvis.Build}.
   * @param buildId
   *        The id of the build whose config values are to be set.
   * @param configValues
   *        The config values of build config.
   * @param secretValues
   *        The secret values of build config.
   * @param overwrite
   *        Whether the values with the same keys that already exist be overwritten.
   */
  static setBuildConfig(buildId?: string | null, configValues?: C3.Map<string | null, string | null>, secretValues?: C3.Map<string | null, string | null>, overwrite?: boolean): void;

  /**
   * Create and set a new {@link JarvisService.BuildConfig} for the current {@link Jarvis.Build}.
   * @param buildId
   *        The id of the build whose config values are to be set.
   * @param jsSource
   *        The js source of build config, read from source content.
   */
  static setBuildConfig(buildId?: string | null, jsSource?: string | null, overwrite?: boolean): void;

  /**
   * Register a {@link Jarvis.BranchGroup} in service. It will trigger a refresh of all {@link Jarvis.Branch}es for
   * the given branchGroup's repository
   *
   * @param branchGroup
   *           The group to register. If the repository of the group does not exist, will also create the repo
   * @param token
   *           An auth token that can be used to access the {@link Jarvis.BranchGroup#repository}.
   *           If given, it will update the {@link Jarvis.BranchGroup#repository} to use the token moving forward.
   *           If none is given, it will try to use an existing token for the repo.
   * @return the registered branch group
   */
  static registerBranchGroup(branchGroup: Jarvis.BranchGroup, token?: string | null): Jarvis.BranchGroup | null;

  /**
   * Register a {@link Jarvis.BranchGroup} in service. It will trigger a refresh of all {@link Jarvis.Branch}es for
   * the given branchGroup's repository
   *
   * @param branchGroup
   *           The group to register. If the repository of the group does not exist, will also create the repo
   * @param token
   *           An auth token that can be used to access the {@link Jarvis.BranchGroup#repository}.
   *           If given, it will update the {@link Jarvis.BranchGroup#repository} to use the token moving forward.
   *           If none is given, it will try to use an existing token for the repo.
   * @param configValues
   *        The config values of branchGroup config.
   * @param secretValues
   *        The secret values of branchGroup config.
   * @return the registered branch group
   */
  static registerBranchGroup(branchGroup: Jarvis.BranchGroup, token?: string | null, configValues?: C3.Map<string | null, string | null>, secretValues?: C3.Map<string | null, string | null>): Jarvis.BranchGroup | null;

  /**
   * Unregister a {@link Jarvis.BranchGroup} in service. It will trigger a refresh of all {@link Jarvis.Branch}es for
   * the given branchGroup's repository
   *
   * @param branchGroup
   *           The group to remove.
   */
  static unregisterBranchGroup(branchGroupId: string): void;

  /**
   * De-activate a {@link Jarvis.Branch}
   */
  static deactivateBranch(branch: Jarvis.Branch): void;

  /**
   * Re-activate a {@link Jarvis.Branch}
   */
  static reactivateBranch(branch: Jarvis.Branch): void;

  /**
   * Update expiration settings for a {@link Jarvis.Build}, and subsequently its corresponding {@link ArtifactHub.Artifact}s.
   */
  static updateBuildExpiration(buildId: string, expiration?: DateTime | null, keepForever?: boolean): void;

  /**
   * Get config {@link CodeCoverageConfig} for the current build
   */
  static getCoverageConfig(): CodeCoverageConfig | null;

  /**
   * Persist all custom {@link Jarvis.Lambda}s to the Jarvis database.
   * @param lambdas
   *        The list of custom lambdas to register.
   */
  static registerBuildLambdas(lambdas?: C3.Array<Jarvis.Lambda | null>): void;

  /**
   * Retrieves updated {@link Jarvis.Report} from the service. Child reports should be aggregated
   * by cronjob {@link JarvisService#aggregateChildReports}
   */
  static reportForId(reportId: string): Jarvis.Report | null;

  /**
   * Retrieves updated {@link Jarvis.Report} from the service if exists or throws an error if desired.
   */
  static reportForId(reportId: string, failIfMissing?: boolean): Jarvis.Report | null;

  /**
   * Retrieves data for {@link Jarvis.Report}. Ensures that the reports are up to date.
   */
  static accessReports(actionName: string, spec?: FetchSpec | null): any | null;

  /**
   * Updates the supplied reports on the service. A combination of {@link Jarvis.Report} subtypes can be given at once.
   */
  static fileReports(reports?: C3.Array<Jarvis.Report | null>): void;

  /**
   * Removes the {@link Jarvis.Report} with the given ids from the service. Generally, this should be used when a {@link Jarvis.Step}
   * processes child reports "manually" instead of relying on {@link Jarvis.Report#amend} to be called asynchronously.
   */
  static removeReports(reportIds?: C3.Array<string | null>): void;

  /**
   * Terminate executors by setting their state to ABORTING.
   */
  static terminateExecutors(executorIds?: C3.Array<string | null>): number | null;

  /**
   * Terminates all the executor that are NOT in DONE state.
   */
  static forceTerminateAllExecutors(confirm?: boolean): void;

  /**
   * Fetch all metrics related to builds, executors, and steps.
   */
  static fetchPerformanceMetrics(): any | null;

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
  static fromString(s: string | null): Jarvis | null;

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
  static forName(name: string | null, failIfMissing?: boolean): Jarvis | null;

  /**
   * @return version of this micro service; server version by default
   */
  version(): string;

  /**
   * @return version of this micro service; server version by default
   */
  static version(): string;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  config(secrets?: boolean): Microservice.Config;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  static config(secrets?: boolean): Microservice.Config;

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
  static typeConfig(): Microservice.Config;

  /**
   * @return executes given action representing method call on one of this type's mixin type.
   */
  static _exec(action: Action): any;

  /**
   * @returns true if the target service app is configured
   */
  isConfigured(): boolean;

  /**
   * @returns true if the target service app is configured
   */
  static isConfigured(): boolean;

  /**
   * Sets target service App id and optionally url; Note it is required to ensure that access is allowed to current App
   * in the App of a target service. You can use {@link Microservice.Service#allowAccess} in the App of the target
   * service potentially hosted by a different cluster.
   *
   * @see Microservice.Service#allowAccess
   */
  setServiceAppId(serviceAppId: string, serviceAppUrl?: string | null): void;

  /**
   * Sets target service App id and optionally url; Note it is required to ensure that access is allowed to current App
   * in the App of a target service. You can use {@link Microservice.Service#allowAccess} in the App of the target
   * service potentially hosted by a different cluster.
   *
   * @see Microservice.Service#allowAccess
   */
  static setServiceAppId(serviceAppId: string, serviceAppUrl?: string | null): void;

  /**
   * Optionally sets target service type name.
   */
  setServiceTypeName(serviceTypeName: string): void;

  /**
   * Optionally sets target service type name.
   */
  static setServiceTypeName(serviceTypeName: string): void;

  /**
   * Name of the target service type
   */
  serviceTypeName(): string;

  /**
   * Name of the target service type
   */
  static serviceTypeName(): string;

  /**
   * App ID of a target service
   */
  serviceAppId(): string;

  /**
   * App ID of a target service
   */
  static serviceAppId(): string;

  /**
   * App endpoint of a target service
   */
  serviceAppUrl(): string;

  /**
   * App endpoint of a target service
   */
  static serviceAppUrl(): string;

  /**
   * Returns the {@link App} this service is running in, or null if it does not exist.
   */
  serviceApp(): App | null;

  /**
   * Returns the {@link App} this service is running in, or null if it does not exist.
   */
  static serviceApp(): App | null;

  /**
   * Returns an {@link AppToken} for the proxy that can be used to make requests to the service.
   */
  serviceAuthToken(): string;

  /**
   * Returns an {@link AppToken} for the proxy that can be used to make requests to the service.
   */
  static serviceAuthToken(): string;

  /**
   * Returns the {@link App} that should be impersonated when making a call to the service.
   * This is typically a current app, but can be configured to be `env-c3` or `c3-c3` app.
   * This is useful when the service is shared across all apps in the env or cluster respectively.
   */
  proxyApp(): App | null;

  /**
   * Returns the {@link App} that should be impersonated when making a call to the service.
   * This is typically a current app, but can be configured to be `env-c3` or `c3-c3` app.
   * This is useful when the service is shared across all apps in the env or cluster respectively.
   */
  static proxyApp(): App | null;

  /**
   * Provides a static means of making a microservice call using in memory options rather than relying on
   * a subtype. Allows consumers to leverage the built in retry, network, and ser/deser logic.
   */
  static exec(rpcSpec: Microservice.RpcSpec): any;

  /**
   * Creates a {@link Cluster.StartEnvSpec} by taking the current {@link Cluster.StartEnvSpec} and applying the fields
   * from the provided partial spec to it.
   */
  static startEnvSpecFromPartial(partial?: string | null): Cluster.StartEnvSpec | null;

  /**
   * Creates a {@link Cluster.StartAppSpec} by taking the current {@link Cluster.StartAppSpec} and applying the fields
   * from the provided partial spec to it.
   */
  static startAppSpecFromPartial(partial?: string | null): Env.StartAppSpec | null;

  /**
   * Visualize activity within the service for a given time range.
   * If no time range is given, defaults to the last 24 hours.
   */
  static visualizeActivity(timeRange?: TimeRange | null): void;

  /**
   * Visualize activity for a specific build.
   */
  static visualizeActivity(buildId: Jarvis.Build): void;

  /**
   * Put this in node js without the typesystem since this was LLM generated and C3 collections do not have same support as
   * native JS.
   */
  static generateTimelineHTML(data?: any | null, timeRange?: TimeRange | null): string | null;
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
