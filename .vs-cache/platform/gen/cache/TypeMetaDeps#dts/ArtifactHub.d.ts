// TypeScript definitions for the C3 type ArtifactHub

/**
 * A hub for discovering, managing, and delivering {@link ArtifactHub.Artifact}s to distributed {@link App}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of ArtifactHub
 */
declare interface IArtifactHub {

  /**
   * The unique and required name of this instance.
   */
  name: string;
}

/**
 * A hub for discovering, managing, and delivering {@link ArtifactHub.Artifact}s to distributed {@link App}s.
 *
 * @remarks this represents a made instance of ArtifactHub
 */
declare class ArtifactHub extends Obj {

  /**
   * The unique and required name of this instance.
   */
  readonly name: string;
  withName(name: string): ArtifactHub;

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
  static fromJson(json: any | null): ArtifactHub | null;

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
  static fromJsonString(json: string | null): ArtifactHub | null;

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
  static fromXmlString(xml: string | null): ArtifactHub | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ArtifactHub | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ArtifactHub;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): ArtifactHub;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ArtifactHub;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ArtifactHub;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ArtifactHub;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ArtifactHub;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ArtifactHub | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ArtifactHub | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ArtifactHub | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ArtifactHub | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ArtifactHub;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ArtifactHub;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ArtifactHub;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ArtifactHub;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ArtifactHub;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ArtifactHub;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ArtifactHub;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): ArtifactHub;

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
  withField(field: string, value: any, doNotConvert?: boolean): ArtifactHub;

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
  static withField(field: string, value: any, doNotConvert?: boolean): ArtifactHub;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ArtifactHub;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): ArtifactHub;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ArtifactHub;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ArtifactHub;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ArtifactHub;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ArtifactHub;

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
  withoutFieldAtPath(path: string): ArtifactHub;

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
  static withoutFieldAtPath(path: string): ArtifactHub;

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
  withoutField(field: string | null): ArtifactHub;

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
  static withoutField(field: string | null): ArtifactHub;

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
  withoutField(field: FieldType | null): ArtifactHub;

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
  static withoutField(field: FieldType | null): ArtifactHub;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): ArtifactHub;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): ArtifactHub;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ArtifactHub;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ArtifactHub;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ArtifactHub;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): ArtifactHub;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ArtifactHub;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ArtifactHub;

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
  defaultField(field: string): ArtifactHub;

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
  static defaultField(field: string): ArtifactHub;

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
  defaultField(field: FieldType): ArtifactHub;

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
  static defaultField(field: FieldType): ArtifactHub;

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
  unsetField(field: string): ArtifactHub;

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
  static unsetField(field: string): ArtifactHub;

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
  unsetField(field: FieldType): ArtifactHub;

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
  static unsetField(field: FieldType): ArtifactHub;

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
  removeField(field: string): ArtifactHub;

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
  static removeField(field: string): ArtifactHub;

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
  removeField(field: FieldType): ArtifactHub;

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
  static removeField(field: FieldType): ArtifactHub;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ArtifactHub;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ArtifactHub;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): ArtifactHub;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): ArtifactHub;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ArtifactHub;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ArtifactHub;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ArtifactHub;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ArtifactHub;

  mergeJson(json: any | null): ArtifactHub;

  static mergeJson(json: any | null): ArtifactHub;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ArtifactHub;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ArtifactHub;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): ArtifactHub;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): ArtifactHub;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<ArtifactHub | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<ArtifactHub | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<ArtifactHub | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ArtifactHub | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<ArtifactHub | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<ArtifactHub | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ArtifactHub | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, ArtifactHub | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ArtifactHub | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ArtifactHub | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<ArtifactHub | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ArtifactHub | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ArtifactHub;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ArtifactHub;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ArtifactHub;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ArtifactHub;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ArtifactHub;

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
  static make(fields: any, withDefaults?: boolean): ArtifactHub;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): ArtifactHub | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ArtifactHub;

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
  afterMake(): ArtifactHub;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): ArtifactHub;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ArtifactHub;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ArtifactHub>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): ArtifactHub;

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
   * Retrieves the real backing {@link Content} of a {@link Microservice.Content}.
   *
   * Use {@link Microservice.Content} APIs for interacting with {@link Microservice} content.
   *
   * @param content
   *           A descriptor for the real backing {@link Content} managed by the service.
   */
  static contentFor(content: Microservice.Content): Content;

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): ArtifactHub;

  /**
   * Returns where the ArtifactHub is currently configured to write artifacts to.
   */
  static artifactsMount(): string | null;

  /**
   * Retrieves the most recent version of the given artifact.
   */
  static artifactForId(artifactId: string): ArtifactHub.Artifact | null;

  /**
   * Retrieves the specific version of an artifact.
   */
  static artifactForVersion(name: string, version: string): ArtifactHub.Artifact | null;

  /**
   * Retrieves the unique names of registered {@link ArtifactHub.Artifact}s.
   *
   * @param spec
   *           A spec which can be used to filter and limit the number of results
   * @return A list of {@link ArtifactHub.Artifact#names} registered in {@link ArtifactHub}.
   */
  static availableArtifacts(spec?: ArtifactHub.EvaluateSpec | null): C3.Array<string | null>;

  /**
   * Retrieves the unique kinds of registered {@link ArtifactHub.Artifact}s.
   *
   * @param spec
   *           A spec which can be used to filter and limit the number of results
   * @return A list of {@link ArtifactHub.Artifact#kinds} registered in {@link ArtifactHub}.
   */
  static availableArtifactKinds(spec?: ArtifactHub.EvaluateSpec | null): C3.Array<string | null>;

  /**
   * Retrieves the unique versions of registered {@link ArtifactHub.Artifact}s.
   *
   * @param spec
   *           A spec used to describe what data to fetch. It can be used to filter and limit the number of results.
   * @return An array of {@link ArtifactHub.Artifact}s which fit the spec passed in.
   */
  static availableVersions(spec?: ArtifactHub.FetchSpec | null): C3.Array<ArtifactHub.Artifact | null>;

  /**
   * Retrieves the highest versions of {@link ArtifactHub.Artifact}s requested.
   *
   * @param spec
   *           A spec used to describe what data to fetch. It can be used to filter and limit the number of
   *           records being processed.
   * @return A map of {@link ArtifactHub.Artifact#name} to artifact with the highest version out of the requested
   *         range in the given spec.
   */
  static bestVersions(spec?: ArtifactHub.FetchSpec | null): C3.Map<string | null, ArtifactHub.Artifact | null>;

  /**
   * Retrieves the best set of dependencies for the given spec. This will return a recursively flattened list of
   * dependencies.
   *
   * The chosen version of each dependency will be the highest version available that adheres to the
   * requested set of {@link ArtifactHub.DependencyResolutionSpec#ranges} and does not conflict with the
   * nested dependencies of any other chosen dependency versions.
   *
   * Dependency versions are chosen in topological order starting with dependencies that have no dependents.
   *
   * For example:
   * ```
   * ranges: { pkgA: "8", pkgB: "*" }
   * available versions: pkgA:8.2.0, pkgA:8.1.0, pkgB:3.0.0, pkgB:4.0.0
   * relations: pkgA:8.2.0 -> pkgB:3.*, pkgA:8.1.0 -> pkgB:4.*
   * topological order: pkgA -> pkgB
   * resolution: pkgA:8.2.0, pkgB:3.0.0
   * ```
   *
   * @param spec
   *           A spec used to describe what dependencies to fetch. It can be used to filter and limit the number of
   *           records being processed.
   * @return A flattened array with the best versions of all required dependencies for the given spec
   */
  static resolveDependencies(spec?: ArtifactHub.DependencyResolutionSpec | null): C3.Array<ArtifactHub.Artifact | null>;

  /**
   * Wrapps {@link #resolveDependencies} in a try/catch and returns structured resolution information
   * back to the user.
   *
   * Backwards compatibility is not guaranteed for this api and its return structure.
   */
  static resolveDependenciesDebugFrames(spec?: ArtifactHub.DependencyResolutionSpec | null): any | null;

  /**
   * Registers a new set of {@link ArtifactHub.Artifact}s in {@link ArtifactHub}.
   *
   * @param artifacts
   *           A array of {@link ArtifactHub.Artifact}s to be registered in {@link ArtifactHub} along with
   *           the type of content for the artifact.
   * @return An array of registered artifacts with writable {@link Content} instances for each field in the subtype
   *         mixing {@link Content}. The type of {@link Content} is defined by the spec.
   */
  static registerArtifacts(artifacts?: C3.Array<ArtifactHub.Artifact | null>): C3.Array<ArtifactHub.Artifact | null>;

  /**
   * Deletes the {@link ArtifactHub.Artifact}s matching the given spec.
   *
   * @param spec
   *           A spec used to describe what data to delete. It can be used to filter and limit the number of records
   *           being processed.
   * @param force
   *           If true, the artifacts will be deleted immediately. If false, they will be marked for deletion and
   *           eventually be cleaned up by the service.
   */
  static deleteArtifacts(spec: ArtifactHub.FetchSpec, force?: boolean): void;

  /**
   * Retrieves the semanticVersion for {@link ArtifactHub.Artifact}s matching the most recent sha.
   *
   * @param shas
   *           An array of order commit shas, to find the most recent sha in  {@link ArtifactHub}
   * @param filter
   *           A filter describing which {@link ArtifactHub.Artifact}s to evaluate
   * @return the most recent matching sha
   */
  static bestVersion(shas: C3.Array<string | null>, filter?: string | null): string | null;

  /**
   * @return A temporary session token for {@link User#artifactReader User ArtifactReader} with an expiration time of 1 hour.
   */
  static generateTempToken(): SessionToken | null;

  /**
   * Update expiration settings for a {@link ArtifactHub.Artifact}.
   * If keepForever is not provided, it is assumed to be false.
   */
  static updateExpiration(spec: ArtifactHub.FetchSpec, expiration?: DateTime | null, keepForever?: boolean): void;

  /**
   * Return whether ArtifactHub service is in air-gap mode.
   * In air-gap mode, if an artifact is missing, it will throw object not found error when accessed through
   * the {@link serve content ArtifactHub.RestfulContentHandler#serveContent} REST end point.
   * If it is not in air-gap mode, it will try to pull the artifact from an external repository and put it in ArtifactHub.
   */
  static pullThroughCachingDisabled(): boolean;

  /**
   * Produces an {@link ArtifactHub.Artifact} with content containing other {@link ArtifactHub.Artifact artifacts}
   * metadata and their {@link ArtifactHub.Artifact.Content content}. It is used together with {@link importArtifacts}
   * to move artifacts across clusters.
   * It is assumed that callers of this API will have already validated that the artifacts are valid and can be exported.
   * Callers can leverage {@link validateArtifactDependencies} to help with this validation.
   *
   * Example:
   * ```
   * var export = ArtifactHub.exportArtifacts({
   *   filter: Filter.eq("kind", ArtifactHub.ArtifactKind.CONDA_PKG),
   * }, DateTime.now().plusHours(1));
   * var exportFile = C3.File.fromString(export.content.safeUrl());
   * ```
   *
   * @param spec
   *        {@link ArtifactHub.FetchSpec} that specifies which artifacts to export. The API expects artifacts fetchable by the `spec`
   *        to be a self contained export, meaning all dependencies must be included in the `spec`.
   * @param expiresAt
   *        At what point in time the generated export should be deleted
   * @param keepForever
   *        Whether the artifact should be kept forever
   * @return An artifact representing the export
   */
  static exportArtifacts(spec: ArtifactHub.FetchSpec, expiresAt?: DateTime | null, keepForever?: boolean): ArtifactHub.Artifact;

  /**
   * Validates that for the given `source` artifacts, all `resolvedDependencies` of the `source` artifacts are present in the specified
   * {@link ArtifactHub.Artifact.DependencyValidationSpec#scope}.
   * Will throw an error if any dependencies are not found.
   * @param source
   *           The list of artifacts to validate dependencies for. The "name", "kind", "semanticVersion", and "resolvedDependencies" fields must be populated.
   * @param validationSpec
   *          The specification for how to validate the dependencies of the `source` artifacts.
   */
  static validateArtifactDependencies(source: C3.Array<ArtifactHub.Artifact | null> | null, validationSpec?: ArtifactHub.Artifact.DependencyValidationSpec | null): void;

  /**
   * Accepts the url to a zip file containing the {@link ArtifactHub.Artifact#content} of an export generated by
   * {@link #exportArtifacts} and imports the exported artifacts.
   *
   * Example:
   * ```
   * ArtifactHub.importArtifacts("gcs://bucket/path/export.zip");
   * ```
   *
   * @param exportLocation
   *        The url to the zip file containing the exported artifacts
   * @param deleteExportZip
   *        Whether to delete the zip file after importing the artifacts. Will only delete on successful import.
   * @return
   *        An array of all of the artifacts imported
   */
  static importArtifacts(exportLocation: string, deleteExportZip?: boolean): C3.Array<ArtifactHub.Artifact | null>;

  /**
   * Accepts a spec and imports (pulls) matching {@link ArtifactHub.Artifact}s from an upstream {@link ArtifactHub}.
   *
   * Example:
   * ```
   * var spec = { ranges: { artifact1: "1.0.0", artifact2: "2.0.0" } };
   * var imported = ArtifactHub.importArtifacts(spec);
   * imported // artifact1-1.0.0+1, artifact1-1.0.0+2, artifact2-2.0.0+1, artifact2-2.0.0+2
   * ```
   *
   * @param spec
   *        Specifies which artifacts to import from the upstream {@link ArtifactHub}.
   * @return
   *        An array of all of the artifacts imported.
   */
  static importUpstreamArtifacts(spec: ArtifactHub.FetchSpec): C3.Array<ArtifactHub.Artifact | null>;

  /**
   * Registers a set of {@link ArtifactHub.Artifact}s in an upstream Artifact Hub.
   * Validates that the artifacts being registered have all dependencies included or already existing upstream.
   *
   * For example if you wanted to automatically promote artifacts from a development environment
   * to a staging environment, you could use this method to register the artifacts in the staging
   * environment.
   *
   * Example:
   * ```
   * // Assuming an administrator has configured your ArtifactHub to point to staging ArtifactHub
   * var spec = { filter: Filter.eq("semanticVersion", "1.0.0-pre+specific.build") };
   * ArtifactHub.registerArtifactsUpstream(spec);
   * // Now the artifacts with semanticVersion "1.0.0-pre+sepcific.build" are available in the upstream ArtifactHub
   * ```
   *
   * @param spec
   *           A spec used to describe which artifacts to promote
   * @param targetHub
   *          The name of the {@link ArtifactHubProxy} to register the artifacts in
   */
  static registerArtifactsUpstream(spec: ArtifactHub.FetchSpec, targetHub?: string | null): void;

  /**
   * Registers a set of {@link ArtifactHub.Artifact}s in an upstream Artifact Hub with an expiration time.
   * Validates that the artifacts being registered have all dependencies included or already existing upstream.
   * @param spec
   *           A spec used to capture all the artifacts to move upstream.
   * @param targetHub
   *          The name of the {@link ArtifactHubProxy} to register the artifacts in
   * @param expiration
   *          The time at which the registered artifacts will expire in the upstream hub. If set, keepForever cannot be true.
   * @param keepForever
   *          Whether to keep the registered artifacts forever in the upstream hub. If true, expiration must be null.
   */
  static registerArtifactsUpstream(spec: ArtifactHub.FetchSpec, targetHub?: string | null, expiration?: DateTime | null, keepForever?: boolean): void;

  /**
   * Registers an independently deployable {@link ArtifactHub.Artifact} in an upstream Artifact Hub.
   * @param spec
   *           A spec used to capture all the artifacts to move upstream. Only the artifacts that of kind "LEGACY_PKG" will be included.
   * @param targetHub
   *          The name of the {@link ArtifactHubProxy} to register the artifact in
   * @param expiration
   *          The time at which the registered artifact will expire in the upstream hub. If set, keepForever cannot be true.
   * @param keepForever
   *          Whether to keep the registered artifact forever in the upstream hub. If true, expiration must be null.
   */
  static registerDeployableArtifactsUpstream(spec: ArtifactHub.FetchSpec, targetHub?: string | null, expiration?: DateTime | null, keepForever?: boolean): C3.Array<ArtifactHub.Artifact | null>;

  /**
   * Registers a new set of {@link ArtifactHub.Resource}s in {@link ArtifactHub}.
   *
   * @return An array of registered resources that are writable {@link Content} instances.
   */
  static registerResources(resources?: C3.Array<ArtifactHub.Artifact.Resource | null>): C3.Array<ArtifactHub.Artifact.Resource | null>;

  /**
   * Registers a {@link ArtifactHub.Artifact} in {@link ArtifactHub}. This method can be called for the artifact by multiple
   *   nodes or threads at the same time. The method will ensure that only one of the calls will register the artifact.
   *
   * @param artifact
   *           The {@link ArtifactHub.Artifact}s to be registered in {@link ArtifactHub} along with
   *           the type of content for the artifact.
   * @param urlToPullFrom
   *           The url to pull the content of the artifact from.
   * @return The registered artifacts with writable {@link Content} instances for each field in the subtype
   *         mixing {@link Content}. The type of {@link Content} is defined by the spec.
   */
  static registerArtifactAndPull(artifact: ArtifactHub.Artifact, urlToPullFrom?: Url | null): ArtifactHub.Artifact;

  /**
   * Fetch all the metrics related to artifacts to be shown on the UI.
   */
  static fetchArtifactMetrics(): any | null;

  /**
   * Submit a request to the service
   * @param topic
   *        The topic to which the request is submitted
   * @param data
   *        Data associated with the request for the topic.
   */
  static submitRequest(topic: string, data: string, spec?: ArtifactHub.SpecBase | null): C3RequestFields | null;

  /**
   * Cancels the request corresponding to the given id or throws if id not found.
   */
  static cancelRequest(topic: string, requestId: string, deciderSpec?: C3Request.DeciderSpec | null, spec?: ArtifactHub.SpecBase | null): void;

  /**
   * Fetch a set of requests from the service based off the spec
   */
  static requests(topic: string, spec?: ArtifactHub.FetchSpecBase | null): C3.Array<C3RequestFields | null>;

  /**
   * Approves the request corresponding to the given id or throws if id not found.
   * Approving a request must be done in the ArtifactHub that owns the request, there is no ability to approve a request upstream.
   */
  static approveRequest(topic: string, requestId: string, deciderSpec?: C3Request.DeciderSpec | null): void;

  /**
   * Denies the request corresponding to the given id or throws if id not found.
   * Denying a request must be done in the ArtifactHub that owns the request, there is no ability to deny a request upstream.
   */
  static denyRequest(topic: string, requestId: string, deciderSpec?: C3Request.DeciderSpec | null): void;

  /**
   * Fetch existing entitlements for this client from the service
   */
  static availableEntitlements(spec?: ArtifactHub.FetchSpecBase | null): C3.Array<ArtifactHub.Artifact.Entitlement | null>;

  /**
   * Updates the content of a registered {@link ArtifactHub.Artifact} in {@link ArtifactHub} if the urlToPullFrom has
   * updated content. This method can be called for the artifact by multiple nodes or threads at the same time.
   * The method will ensure that only one of the calls will update the artifact content.
   *
   * @param artifact
   *           The {@link ArtifactHub.Artifact}s to be updated in {@link ArtifactHub}.
   * @param urlToPullFrom
   *           The url to pull the content of the artifact from.
   * @return The registered artifact.
   */
  static updateRegisteredArtifactContent(artifact: ArtifactHub.Artifact, urlToPullFrom?: Url | null): ArtifactHub.Artifact;

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
  static fromString(s: string | null): ArtifactHub | null;

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
  static forName(name: string | null, failIfMissing?: boolean): ArtifactHub | null;

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

  static artifactForIdWithRetry(artifactId: string): ArtifactHub.Artifact | null;

  static artifactForVersionWithRetry(name: string, version: string): ArtifactHub.Artifact | null;

  static availableArtifactsWithRetry(spec?: ArtifactHub.EvaluateSpec | null): C3.Array<string | null>;

  static availableVersionsWithRetry(spec?: ArtifactHub.FetchSpec | null): C3.Array<ArtifactHub.Artifact | null>;

  static bestVersionsWithRetry(spec?: ArtifactHub.FetchSpec | null): C3.Map<string | null, ArtifactHub.Artifact | null>;

  static resolveDependenciesWithRetry(spec?: ArtifactHub.DependencyResolutionSpec | null): C3.Array<ArtifactHub.Artifact | null>;

  static registerArtifactsWithRetry(artifacts?: C3.Array<ArtifactHub.Artifact | null>): C3.Array<ArtifactHub.Artifact | null>;

  static registerResourcesWithRetry(resources?: C3.Array<ArtifactHub.Artifact.Resource | null>): C3.Array<ArtifactHub.Artifact.Resource | null>;

  static bestVersionWithRetry(shas: C3.Array<string | null>, filter?: string | null): string | null;
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
