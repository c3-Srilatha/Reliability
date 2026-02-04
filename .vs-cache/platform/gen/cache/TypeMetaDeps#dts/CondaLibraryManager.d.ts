// TypeScript definitions for the C3 type CondaLibraryManager

/**
 * CondaLibraryManager uses `conda` to resolve, merge, and install Python {@link ImplLanguage#Runtime runtimes}.
 *
 * @remarks this represents a value passed to a method that expects an instance of CondaLibraryManager
 */
declare interface ICondaLibraryManager {

  /**
   * The unique and required name of this instance.
   */
  name: string;

  CONDA?: string | null;

  NPM?: string | null;
}

/**
 * CondaLibraryManager uses `conda` to resolve, merge, and install Python {@link ImplLanguage#Runtime runtimes}.
 *
 * @remarks this represents a made instance of CondaLibraryManager
 */
declare class CondaLibraryManager extends Obj {

  /**
   * The unique and required name of this instance.
   */
  readonly name: string;
  withName(name: string): CondaLibraryManager;

  /**
   * The unique and required name of this instance.
   */
  static readonly name: string;

  readonly CONDA?: string | null;
  withCONDA(CONDA: string | null): CondaLibraryManager;

  static readonly CONDA?: string | null;

  readonly NPM?: string | null;
  withNPM(NPM: string | null): CondaLibraryManager;

  static readonly NPM?: string | null;

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
  static fromJson(json: any | null): CondaLibraryManager | null;

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
  static fromJsonString(json: string | null): CondaLibraryManager | null;

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
  static fromXmlString(xml: string | null): CondaLibraryManager | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): CondaLibraryManager | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): CondaLibraryManager;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): CondaLibraryManager;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): CondaLibraryManager;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): CondaLibraryManager;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): CondaLibraryManager;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): CondaLibraryManager;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<CondaLibraryManager | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<CondaLibraryManager | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<CondaLibraryManager | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<CondaLibraryManager | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): CondaLibraryManager;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): CondaLibraryManager;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): CondaLibraryManager;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): CondaLibraryManager;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): CondaLibraryManager;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): CondaLibraryManager;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): CondaLibraryManager;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): CondaLibraryManager;

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
  withField(field: string, value: any, doNotConvert?: boolean): CondaLibraryManager;

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
  static withField(field: string, value: any, doNotConvert?: boolean): CondaLibraryManager;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): CondaLibraryManager;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): CondaLibraryManager;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): CondaLibraryManager;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): CondaLibraryManager;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): CondaLibraryManager;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): CondaLibraryManager;

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
  withoutFieldAtPath(path: string): CondaLibraryManager;

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
  static withoutFieldAtPath(path: string): CondaLibraryManager;

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
  withoutField(field: string | null): CondaLibraryManager;

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
  static withoutField(field: string | null): CondaLibraryManager;

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
  withoutField(field: FieldType | null): CondaLibraryManager;

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
  static withoutField(field: FieldType | null): CondaLibraryManager;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): CondaLibraryManager;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): CondaLibraryManager;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): CondaLibraryManager;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): CondaLibraryManager;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): CondaLibraryManager;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): CondaLibraryManager;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): CondaLibraryManager;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): CondaLibraryManager;

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
  defaultField(field: string): CondaLibraryManager;

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
  static defaultField(field: string): CondaLibraryManager;

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
  defaultField(field: FieldType): CondaLibraryManager;

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
  static defaultField(field: FieldType): CondaLibraryManager;

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
  unsetField(field: string): CondaLibraryManager;

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
  static unsetField(field: string): CondaLibraryManager;

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
  unsetField(field: FieldType): CondaLibraryManager;

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
  static unsetField(field: FieldType): CondaLibraryManager;

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
  removeField(field: string): CondaLibraryManager;

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
  static removeField(field: string): CondaLibraryManager;

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
  removeField(field: FieldType): CondaLibraryManager;

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
  static removeField(field: FieldType): CondaLibraryManager;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): CondaLibraryManager;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): CondaLibraryManager;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): CondaLibraryManager;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): CondaLibraryManager;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): CondaLibraryManager;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): CondaLibraryManager;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): CondaLibraryManager;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): CondaLibraryManager;

  mergeJson(json: any | null): CondaLibraryManager;

  static mergeJson(json: any | null): CondaLibraryManager;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): CondaLibraryManager;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): CondaLibraryManager;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): CondaLibraryManager;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): CondaLibraryManager;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<CondaLibraryManager | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<CondaLibraryManager | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<CondaLibraryManager | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<CondaLibraryManager | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<CondaLibraryManager | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<CondaLibraryManager | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<CondaLibraryManager | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, CondaLibraryManager | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, CondaLibraryManager | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<CondaLibraryManager | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<CondaLibraryManager | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<CondaLibraryManager | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): CondaLibraryManager;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): CondaLibraryManager;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): CondaLibraryManager;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): CondaLibraryManager;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): CondaLibraryManager;

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
  static make(fields: any, withDefaults?: boolean): CondaLibraryManager;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): CondaLibraryManager | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): CondaLibraryManager;

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
  afterMake(): CondaLibraryManager;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): CondaLibraryManager;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): CondaLibraryManager;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<CondaLibraryManager>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): CondaLibraryManager;

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
  static fromString(s: string | null): CondaLibraryManager | null;

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
  static forName(name: string | null, failIfMissing?: boolean): CondaLibraryManager | null;

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): CondaLibraryManager;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): CondaLibraryManager | null;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  config(secrets?: boolean): CondaLibraryManager.Config;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  static config(secrets?: boolean): CondaLibraryManager.Config;

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
  static typeConfig(): CondaLibraryManager.Config;

  /**
   * Helper function called by {@link ImplLanguage#resolveRuntime} under the hood.
   *
   * Resolves the specified runtime by fully determining the version of libraries in
   * {@link ImplLanguage#Runtime#libraries} as well as their required dependent libraries.
   * The parameter `runtime` should already be 'merged' with any runtimes it depends on, so its `libraries` field
   * should include the `libraries` of those inherited runtimes.
   * If the parameter runtime (or one of the runtimes it inherits from) declares `testLibraries`, then two resolved
   * runtimes for each location should be returned: one for production and one for testing.
   *
   * @param runtime
   *        an instance of {@link ImplLanguage#Runtime} to be resolved
   * @param doNotValidate
   *            Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
   *            declared runtime. In some cases, it may be desirable or necessary to disable this validation. For
   *            example, if one of the packages has an installation name that does not match its 'importable' name.
   *
   * @return a ResolvedRuntime for production and, if the parameter runtime has `testLibraries`, one for test
   */
  resolveRuntime(runtime: ImplLanguage.Runtime, doNotValidate?: boolean): Py.Runtime;

  /**
   * Helper function called by {@link ImplLanguage#resolveRuntime} under the hood.
   *
   * Resolves the specified runtime by fully determining the version of libraries in
   * {@link ImplLanguage#Runtime#libraries} as well as their required dependent libraries.
   * The parameter `runtime` should already be 'merged' with any runtimes it depends on, so its `libraries` field
   * should include the `libraries` of those inherited runtimes.
   * If the parameter runtime (or one of the runtimes it inherits from) declares `testLibraries`, then two resolved
   * runtimes for each location should be returned: one for production and one for testing.
   *
   * @param runtime
   *        an instance of {@link ImplLanguage#Runtime} to be resolved
   * @param doNotValidate
   *            Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
   *            declared runtime. In some cases, it may be desirable or necessary to disable this validation. For
   *            example, if one of the packages has an installation name that does not match its 'importable' name.
   *
   * @return a ResolvedRuntime for production and, if the parameter runtime has `testLibraries`, one for test
   */
  static resolveRuntime(runtime: ImplLanguage.Runtime, doNotValidate?: boolean): Py.Runtime;

  /**
   * Helper function called by {@link ImplLanguage#installRuntime} which is responsible for
   * installing the given runtime.
   * If overridePath is given, the runtime will be installed at the given path, instead of runtime.runtimePath().
   *
   * @see ImplLanguage#installRuntime
   */
  installRuntime(runtime: Py.Runtime, overridePath?: string | null): void;

  /**
   * Helper function called by {@link ImplLanguage#installRuntime} which is responsible for
   * installing the given runtime.
   * If overridePath is given, the runtime will be installed at the given path, instead of runtime.runtimePath().
   *
   * @see ImplLanguage#installRuntime
   */
  static installRuntime(runtime: Py.Runtime, overridePath?: string | null): void;

  /**
   * Helper function called by {@link ImplLanguage#uninstallRuntime} which is responsible for
   * uninstalling the given runtime.
   *
   * @see ImplLanguage#uninstallRuntime
   */
  uninstallRuntime(runtime: Py.Runtime): void;

  /**
   * Helper function called by {@link ImplLanguage#uninstallRuntime} which is responsible for
   * uninstalling the given runtime.
   *
   * @see ImplLanguage#uninstallRuntime
   */
  static uninstallRuntime(runtime: Py.Runtime): void;

  /**
   * Uninstall the runtime at given path, should be {ImplLanguage.Runtime#runtimePath runtimePath}.
   */
  uninstallRuntime(path: string): void;

  /**
   * Uninstall the runtime at given path, should be {ImplLanguage.Runtime#runtimePath runtimePath}.
   */
  static uninstallRuntime(path: string): void;

  /**
   * @return the full path for all runtimes
   * For runtimes installed via {@link CondaLibraryManager}, this will return "/usr/local/share/c3/runtimes/conda/"
   */
  runtimesBasePath(): string;

  /**
   * @return the full path for all runtimes
   * For runtimes installed via {@link CondaLibraryManager}, this will return "/usr/local/share/c3/runtimes/conda/"
   */
  static runtimesBasePath(): string;

  /**
   * Helper function to create a runtime directory to install a given runtime
   */
  createRuntimeDirectory(runtimePath: string): any;

  /**
   * Helper function to create a runtime directory to install a given runtime
   */
  static createRuntimeDirectory(runtimePath: string): any;

  /**
   * This method will execute {@link https://docs.conda.io/projects/conda/en/latest/commands/clean.html conda clean} and
   * {@link https://pip.pypa.io/en/stable/cli/pip_cache/ pip cache purge} for conda library manager
   * and  will execute "npm cache clean" for npm library manager.
   * @param removalTarget
   *        The target to remove. All possible targets and their descriptions can be found in the link above. For npm this field should be kept empty
   */
  clearPackageCache(removalTarget?: string | null): void;

  /**
   * This method will execute {@link https://docs.conda.io/projects/conda/en/latest/commands/clean.html conda clean} and
   * {@link https://pip.pypa.io/en/stable/cli/pip_cache/ pip cache purge} for conda library manager
   * and  will execute "npm cache clean" for npm library manager.
   * @param removalTarget
   *        The target to remove. All possible targets and their descriptions can be found in the link above. For npm this field should be kept empty
   */
  static clearPackageCache(removalTarget?: string | null): void;

  /**
   * Populates {@link ArtifactHub.Artifact} for each {@link ImplLanguage.Library library} contained in the supplied
   * {@link ImplLanguage.Runtime}. This function will throw if {@link CondaLibraryManager.Config#useArtifactHub} is not set to true.
   * Since this method installs and uninstalls {@link ImplLanguage.ResolvedRuntime}s, it can interfere with concurrently executing python actions, so
   * make sure to only call when no other python actions are running in {@link Action.Engine}s with these {@link ImplLanguage.ResolvedRuntime}s.
   * @param runtimes
   *        Array of {@link ImplLanguage.Runtime}.
   * @return A named tuple with fields `populatedRuntimes` and `errors`. The `populatedRuntimes` field is an array of {@link ImplLanguage.ResolvedRuntime}
   *         which were successfully populated. The `errors` field is a map from {@link ImplLanguage.ResolvedRuntime} as the key
   *         and the error message as value.
   */
  populateArtifactHubForRuntimes(runtimes?: C3.Array<ImplLanguage.Runtime | null>): [populatedRuntimes: C3.Array<string | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Populates {@link ArtifactHub.Artifact} for each {@link ImplLanguage.Library library} contained in the supplied
   * {@link ImplLanguage.Runtime}. This function will throw if {@link CondaLibraryManager.Config#useArtifactHub} is not set to true.
   * Since this method installs and uninstalls {@link ImplLanguage.ResolvedRuntime}s, it can interfere with concurrently executing python actions, so
   * make sure to only call when no other python actions are running in {@link Action.Engine}s with these {@link ImplLanguage.ResolvedRuntime}s.
   * @param runtimes
   *        Array of {@link ImplLanguage.Runtime}.
   * @return A named tuple with fields `populatedRuntimes` and `errors`. The `populatedRuntimes` field is an array of {@link ImplLanguage.ResolvedRuntime}
   *         which were successfully populated. The `errors` field is a map from {@link ImplLanguage.ResolvedRuntime} as the key
   *         and the error message as value.
   */
  static populateArtifactHubForRuntimes(runtimes?: C3.Array<ImplLanguage.Runtime | null>): [populatedRuntimes: C3.Array<string | null>, errors: C3.Map<string | null, string | null>];

  populateArtifactHubForPkgRuntimes(deep?: boolean): [populatedRuntimes: C3.Array<string | null>, errors: C3.Map<string | null, string | null>];

  static populateArtifactHubForPkgRuntimes(deep?: boolean): [populatedRuntimes: C3.Array<string | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Exports all @link{ArtifactHub.Artifact}s related to {@link ImplLanguage.ResolvedRuntime}s for a LibraryManager.
   *
   * @return location of zip file with the following structure:
   *         One file named artifacts that holds json serialized artifacts
   *         For each artifact, a file named after the artifact id that holds {@link ArtifactHub.Artifact.Content}.
   */
  exportRuntimeArtifacts(): string | null;

  /**
   * Exports all @link{ArtifactHub.Artifact}s related to {@link ImplLanguage.ResolvedRuntime}s for a LibraryManager.
   *
   * @return location of zip file with the following structure:
   *         One file named artifacts that holds json serialized artifacts
   *         For each artifact, a file named after the artifact id that holds {@link ArtifactHub.Artifact.Content}.
   */
  static exportRuntimeArtifacts(): string | null;

  /**
   * Returns array of strings of LibraryManager's artifact types to be exported.
   * For {@link NpmLibraryManager} the artifact types are {@link ArtifactHub.ArtifactKind.NPM_PKG} and {@link ArtifactHub.ArtifactKind.NPM_PKG_METADATA}
   * For {@link CondaLibraryManager} the artifact types are {@link ArtifactHub.ArtifactKind.CONDA_PKG}, {@link ArtifactHub.ArtifactKind.PY_PACKAGE_INDEX_PKG}, and {@link ArtifactHub.ArtifactKind.PY_PACKAGE_INDEX_SIMPLE}.
   */
  artifactTypes(): C3.Array<string | null>;

  /**
   * Returns array of strings of LibraryManager's artifact types to be exported.
   * For {@link NpmLibraryManager} the artifact types are {@link ArtifactHub.ArtifactKind.NPM_PKG} and {@link ArtifactHub.ArtifactKind.NPM_PKG_METADATA}
   * For {@link CondaLibraryManager} the artifact types are {@link ArtifactHub.ArtifactKind.CONDA_PKG}, {@link ArtifactHub.ArtifactKind.PY_PACKAGE_INDEX_PKG}, and {@link ArtifactHub.ArtifactKind.PY_PACKAGE_INDEX_SIMPLE}.
   */
  static artifactTypes(): C3.Array<string | null>;

  /**
   * Checks if a runtime is installed by seeing whether node_modules exists in runtime directory for npm runtimes or {runtimePath}/bin/python executable for Conda exists.
   */
  isInstalled(runtime: Py.Runtime): boolean;

  /**
   * Checks if a runtime is installed by seeing whether node_modules exists in runtime directory for npm runtimes or {runtimePath}/bin/python executable for Conda exists.
   */
  static isInstalled(runtime: Py.Runtime): boolean;

  /**
   * @param useAppInternalUrl
   *        If true it will use {@link App#internalUrl} as the host url.
   *        Otherwise, if method called from {@link CondaLibraryManager} or callFromCluster is true it will use {@link Server#endpointUrl}, else {@link App#endpoint} is used.
   * @param authToken
   *        The auth token for the User artifactreader to access the ArtifactHub if we are using ArtifactHub.
   * @param callFromCluster
   *        If true and useAppInternalUrl false it will use {@link Server#endpointUrl} as the host url else it will use {@link App#endpoint}.
   * @returns
   *          The url which LibraryManager uses to download packages from ArtifactHub when {@link LibraryManager.Config#useArtifactHub} is true.
   */
  hostUrlForArtifactHub(useAppInternalUrl?: boolean, authToken?: string | null, callFromCluster?: boolean): Url | null;

  /**
   * @param useAppInternalUrl
   *        If true it will use {@link App#internalUrl} as the host url.
   *        Otherwise, if method called from {@link CondaLibraryManager} or callFromCluster is true it will use {@link Server#endpointUrl}, else {@link App#endpoint} is used.
   * @param authToken
   *        The auth token for the User artifactreader to access the ArtifactHub if we are using ArtifactHub.
   * @param callFromCluster
   *        If true and useAppInternalUrl false it will use {@link Server#endpointUrl} as the host url else it will use {@link App#endpoint}.
   * @returns
   *          The url which LibraryManager uses to download packages from ArtifactHub when {@link LibraryManager.Config#useArtifactHub} is true.
   */
  static hostUrlForArtifactHub(useAppInternalUrl?: boolean, authToken?: string | null, callFromCluster?: boolean): Url | null;

  validateLibsVersion(runtime: ImplLanguage.Runtime, solvedLibs: C3.Array<ImplLanguage.Library | null>): void;

  static validateLibsVersion(runtime: ImplLanguage.Runtime, solvedLibs: C3.Array<ImplLanguage.Library | null>): void;

  /**
   * @returns A map containing details of all installed node-level runtimes, including name, path, exact size, human-readable size, and total size.
   */
  static getAllInstalledRuntimesAtNodeLevel(): C3.Map<string | null, any>;

  /**
   * Returns the package manager, name, and version for an {@link ImplLanguage.Library}. For pip libraries with
   * installation url, returns the github link for the version.
   */
  static libraryInfo(library: ImplLanguage.Library): [string | null, string | null, string | null] | null;

  /**
   * @returns path to the conda executable used for installation and resolution
   */
  static executablePath(): string;

  /**
   * Generates a YAML configuration string for a runtime by name.
   *
   * @param runtimeName
   *        the name of the runtime
   * @param withoutChannelUrls
   *        if true, uses raw channel names
   *        if false, processes channels into full URLs with access tokens when needed
   * @returns the YAML configuration string for the runtime
   */
  yamlStringForRuntime(runtimeName: string, withoutChannelUrls?: boolean): string;

  /**
   * Generates a YAML configuration string for a runtime by name.
   *
   * @param runtimeName
   *        the name of the runtime
   * @param withoutChannelUrls
   *        if true, uses raw channel names
   *        if false, processes channels into full URLs with access tokens when needed
   * @returns the YAML configuration string for the runtime
   */
  static yamlStringForRuntime(runtimeName: string, withoutChannelUrls?: boolean): string;

  /**
   * Generates a YAML configuration string for an ImplLanguage.Runtime object.
   *
   * @param runtime
   *        the ImplLanguage.Runtime object
   * @param withoutChannelUrls
   *        if true, uses raw channel names
   *        if false, processes channels into full URLs with access tokens when needed
   * @returns the YAML configuration string for the runtime
   */
  yamlStringForRuntime(runtime: ImplLanguage.Runtime, withoutChannelUrls?: boolean): string;

  /**
   * Generates a YAML configuration string for an ImplLanguage.Runtime object.
   *
   * @param runtime
   *        the ImplLanguage.Runtime object
   * @param withoutChannelUrls
   *        if true, uses raw channel names
   *        if false, processes channels into full URLs with access tokens when needed
   * @returns the YAML configuration string for the runtime
   */
  static yamlStringForRuntime(runtime: ImplLanguage.Runtime, withoutChannelUrls?: boolean): string;

  /**
   * Generates a YAML configuration string for a Py.Runtime object.
   *
   * @param runtime
   *        the Py.Runtime object
   * @param withoutChannelUrls
   *        if true, uses raw channel names
   *        if false, processes channels into full URLs with access tokens when needed
   * @returns the YAML configuration string for the runtime
   */
  yamlStringForRuntime(runtime: Py.Runtime, withoutChannelUrls?: boolean): string;

  /**
   * Generates a YAML configuration string for a Py.Runtime object.
   *
   * @param runtime
   *        the Py.Runtime object
   * @param withoutChannelUrls
   *        if true, uses raw channel names
   *        if false, processes channels into full URLs with access tokens when needed
   * @returns the YAML configuration string for the runtime
   */
  static yamlStringForRuntime(runtime: Py.Runtime, withoutChannelUrls?: boolean): string;

  /**
   * @param runtime
   *        the runtime whose Python binary we want to execute
   * @param args
   *        optional arguments to pass to the Python command
   * @returns a command which, when executed from the command line, executes Python for the given runtime
   */
  static pyCommandForRuntime(runtime: Py.Runtime, ...args: string | null[]): C3.Array<string | null>;

  /**
   * @param path
   *        path of a conda environment whose Python binary we want to execute
   * @param args
   *        optional arguments to pass to the Python command
   * @returns a command which, when executed from the command line, executes Python for the given runtime.
   * For instance calling CondaLibraryManager.pyCommandForRuntime("/usr/local/share/runtimes/py-foobar", "-m", "pip", "install", "pytorch") will return
   * "conda run -p /usr/local/share/runtimes/py-foobar python -m pip install pytorch". The conda binary used here is the location of the conda
   * binary on C3 Server.
   */
  static pyCommandForRuntime(path?: string | null, ...args: string | null[]): C3.Array<string | null>;

  /**
   * @param runtime
   *        the runtime whose requirements file we want to compute
   * @param explicit
   *        If set true the requirements file for conda will start with @Explicit annotation and contain full url of all the packages.
   *        https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html. Using explicit requirements file
   *         prevent resolution and does not involve calling a Solver (https://docs.conda.io/projects/conda/en/latest/dev-guide/deep-dives/solvers.html)
   * @param useAppInternalUrl
   *        If true it will use {@link App#internalUrl} as the host url else it will use {@link Server#endpointUrl} when {@link CondaLibraryManager.Config#useArtifactHub} is true.
   *
   * @returns a named tuple with the string "conda" and "pip" as keys and corresponding requirements file as values
   */
  requirementsFile(runtime: Py.Runtime, explicit?: boolean, useAppInternalUrl?: boolean): [conda: string | null, pip: string | null] | null;

  /**
   * @param runtime
   *        the runtime whose requirements file we want to compute
   * @param explicit
   *        If set true the requirements file for conda will start with @Explicit annotation and contain full url of all the packages.
   *        https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html. Using explicit requirements file
   *         prevent resolution and does not involve calling a Solver (https://docs.conda.io/projects/conda/en/latest/dev-guide/deep-dives/solvers.html)
   * @param useAppInternalUrl
   *        If true it will use {@link App#internalUrl} as the host url else it will use {@link Server#endpointUrl} when {@link CondaLibraryManager.Config#useArtifactHub} is true.
   *
   * @returns a named tuple with the string "conda" and "pip" as keys and corresponding requirements file as values
   */
  static requirementsFile(runtime: Py.Runtime, explicit?: boolean, useAppInternalUrl?: boolean): [conda: string | null, pip: string | null] | null;

  /**
   * @param runtime
   * @returns the fingerprint of the runtime. The fingerprint is computed by concatenating the conda and pip requirements file
   * and taking a hash. This fingerprint is used to compute ImplLanguage.Runtime#runtimePath
   */
  fingerprintOfRuntime(runtime: Py.Runtime): number | null;

  /**
   * @param runtime
   * @returns the fingerprint of the runtime. The fingerprint is computed by concatenating the conda and pip requirements file
   * and taking a hash. This fingerprint is used to compute ImplLanguage.Runtime#runtimePath
   */
  static fingerprintOfRuntime(runtime: Py.Runtime): number | null;

  /**
   * @param runtime
   *         The resolved runtime we want to install
   * @param condaBinaryPath
   *         The full path of the conda binary
   * @param runtimeInstallationPath
   *          The prefix of the conda environment to be created
   * @returns
   *          A bash script in string format which when executed will install the runtime at the runtimeInstallationPath. If the runtimeInstallationPath
   * is not provided, it will install at the default location of conda
   */
  installRuntimeScript(runtime: string, condaBinaryPath?: string | null, runtimeInstallationPath?: string | null): string | null;

  /**
   * @param runtime
   *         The resolved runtime we want to install
   * @param condaBinaryPath
   *         The full path of the conda binary
   * @param runtimeInstallationPath
   *          The prefix of the conda environment to be created
   * @returns
   *          A bash script in string format which when executed will install the runtime at the runtimeInstallationPath. If the runtimeInstallationPath
   * is not provided, it will install at the default location of conda
   */
  static installRuntimeScript(runtime: string, condaBinaryPath?: string | null, runtimeInstallationPath?: string | null): string | null;

  /**
   * @param isPipRequirementsFile
   *        Whether we are installing with a pip requirements rile. If false, we're installing from a conda yaml file.
   * @param useAppInternalUrl
   *        If true it will use {@link App#internalUrl} as the host url else it will use {@link Server#internalUrl} when {@link CondaLibraryManager.Config#useArtifactHub} is true.
   * @param runtime
   *        The runtime whose extra index URLs we want to extract from environment variables
   * @returns
   *           A list of arguments computed from the {@link CondaLibraryManager.Config} to be passed to pip when installing a library. This is used to install libraries from a requirements file.
   */
  pipArgumentsFromConfig(isPipRequirementsFile?: boolean, useAppInternalUrl?: boolean, runtime?: ImplLanguage.RuntimeBase | null): C3.Array<string | null>;

  /**
   * @param isPipRequirementsFile
   *        Whether we are installing with a pip requirements rile. If false, we're installing from a conda yaml file.
   * @param useAppInternalUrl
   *        If true it will use {@link App#internalUrl} as the host url else it will use {@link Server#internalUrl} when {@link CondaLibraryManager.Config#useArtifactHub} is true.
   * @param runtime
   *        The runtime whose extra index URLs we want to extract from environment variables
   * @returns
   *           A list of arguments computed from the {@link CondaLibraryManager.Config} to be passed to pip when installing a library. This is used to install libraries from a requirements file.
   */
  static pipArgumentsFromConfig(isPipRequirementsFile?: boolean, useAppInternalUrl?: boolean, runtime?: ImplLanguage.RuntimeBase | null): C3.Array<string | null>;

  /**
   * @returns
   *          A bash script in string format which, when executed, will set {@link ImplLanguage.Runtime#runEnvVars} to the conda environment associated with this runtime.
   */
  runEnvVarsCommand(runtime: Py.Runtime, condaBinaryPath: string, runtimeInstallationPath?: string | null): string;

  /**
   * @returns
   *          A bash script in string format which, when executed, will set {@link ImplLanguage.Runtime#runEnvVars} to the conda environment associated with this runtime.
   */
  static runEnvVarsCommand(runtime: Py.Runtime, condaBinaryPath: string, runtimeInstallationPath?: string | null): string;

  /**
   * @param path
   *          the download path of a conda pkg e.g. (conda/noarch/conda-index-0.2.1-py_0.conda)
   * @returns
   *          A map that contains useful information parsed from the download path.
   *          The keys and corresponding values, for the example above, of the map are:
   *          platform: (noarch),
   *          channel: (conda),
   *          fileNameWithExt: (conda-index-0.2.1-py_0.conda),
   *          fileNameNoExt: (conda-index-0.2.1-py_0),
   *          pkgName: (conda-index),
   *          semanticVersion: (0.2.1-py_0)
   */
  static parsePath(path: string): C3.Map<string | null, string | null>;

  /**
   * @returns CondaLibraryManager.Config#packageCachePath if set in the config, otherwise the runtimes base path with the "cache" appended.
   */
  packageCachePath(): string;

  /**
   * @returns CondaLibraryManager.Config#packageCachePath if set in the config, otherwise the runtimes base path with the "cache" appended.
   */
  static packageCachePath(): string;

  clearPipCache(): void;

  static clearPipCache(): void;

  /**
   * @returns the installed version of conda
   */
  static condaVersion(): SemanticVersion | null;
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
