// TypeScript definitions for the C3 type Py

/**
 * @remarks this represents a value passed to a method that expects an instance of Py
 */
declare interface IPy {

  /**
   * The unique and required name of this instance.
   */
  name: string;

  /**
   * Java source.
   * @see https://en.wikipedia.org/wiki/Java_(programming_language)
   */
  JAVA?: string | null;

  /**
   * JavaScript source (any ECMAScript version).
   * @see https://en.wikipedia.org/wiki/JavaScript
   */
  JAVASCRIPT?: string | null;

  /**
   * Python source.
   * @see https://en.wikipedia.org/wiki/Python_(programming_language)
   */
  PYTHON?: string | null;

  /**
   * TypeScript source.
   * @see https://www.typescriptlang.org/docs/handbook/basic-types.html
   */
  TYPESCRIPT?: string | null;

  /**
   * TypeScript/React source.
   * @see https://www.typescriptlang.org/docs/handbook/jsx.html
   */
  TSX?: string | null;
}

/**
 * @remarks this represents a made instance of Py
 */
declare class Py extends Obj {

  /**
   * The unique and required name of this instance.
   */
  readonly name: string;
  withName(name: string): Py;

  /**
   * The unique and required name of this instance.
   */
  static readonly name: string;

  /**
   * Java source.
   * @see https://en.wikipedia.org/wiki/Java_(programming_language)
   */
  readonly JAVA?: string | null;
  withJAVA(JAVA: string | null): Py;

  /**
   * Java source.
   * @see https://en.wikipedia.org/wiki/Java_(programming_language)
   */
  static readonly JAVA?: string | null;

  /**
   * JavaScript source (any ECMAScript version).
   * @see https://en.wikipedia.org/wiki/JavaScript
   */
  readonly JAVASCRIPT?: string | null;
  withJAVASCRIPT(JAVASCRIPT: string | null): Py;

  /**
   * JavaScript source (any ECMAScript version).
   * @see https://en.wikipedia.org/wiki/JavaScript
   */
  static readonly JAVASCRIPT?: string | null;

  /**
   * Python source.
   * @see https://en.wikipedia.org/wiki/Python_(programming_language)
   */
  readonly PYTHON?: string | null;
  withPYTHON(PYTHON: string | null): Py;

  /**
   * Python source.
   * @see https://en.wikipedia.org/wiki/Python_(programming_language)
   */
  static readonly PYTHON?: string | null;

  /**
   * TypeScript source.
   * @see https://www.typescriptlang.org/docs/handbook/basic-types.html
   */
  readonly TYPESCRIPT?: string | null;
  withTYPESCRIPT(TYPESCRIPT: string | null): Py;

  /**
   * TypeScript source.
   * @see https://www.typescriptlang.org/docs/handbook/basic-types.html
   */
  static readonly TYPESCRIPT?: string | null;

  /**
   * TypeScript/React source.
   * @see https://www.typescriptlang.org/docs/handbook/jsx.html
   */
  readonly TSX?: string | null;
  withTSX(TSX: string | null): Py;

  /**
   * TypeScript/React source.
   * @see https://www.typescriptlang.org/docs/handbook/jsx.html
   */
  static readonly TSX?: string | null;

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
  static fromJson(json: any | null): Py | null;

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
  static fromJsonString(json: string | null): Py | null;

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
  static fromXmlString(xml: string | null): Py | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Py | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Py;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): Py;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Py;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Py;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Py;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Py;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Py | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Py | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Py | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Py | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Py;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Py;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Py;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Py;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Py;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Py;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Py;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): Py;

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
  withField(field: string, value: any, doNotConvert?: boolean): Py;

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
  static withField(field: string, value: any, doNotConvert?: boolean): Py;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Py;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): Py;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Py;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Py;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Py;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Py;

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
  withoutFieldAtPath(path: string): Py;

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
  static withoutFieldAtPath(path: string): Py;

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
  withoutField(field: string | null): Py;

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
  static withoutField(field: string | null): Py;

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
  withoutField(field: FieldType | null): Py;

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
  static withoutField(field: FieldType | null): Py;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Py;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): Py;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Py;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Py;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Py;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): Py;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Py;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Py;

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
  defaultField(field: string): Py;

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
  static defaultField(field: string): Py;

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
  defaultField(field: FieldType): Py;

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
  static defaultField(field: FieldType): Py;

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
  unsetField(field: string): Py;

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
  static unsetField(field: string): Py;

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
  unsetField(field: FieldType): Py;

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
  static unsetField(field: FieldType): Py;

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
  removeField(field: string): Py;

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
  static removeField(field: string): Py;

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
  removeField(field: FieldType): Py;

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
  static removeField(field: FieldType): Py;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Py;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Py;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Py;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): Py;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Py;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Py;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Py;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Py;

  mergeJson(json: any | null): Py;

  static mergeJson(json: any | null): Py;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Py;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Py;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Py;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): Py;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Py | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<Py | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Py | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Py | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Py | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<Py | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Py | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Py | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Py | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Py | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<Py | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Py | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Py;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Py;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Py;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Py;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Py;

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
  static make(fields: any, withDefaults?: boolean): Py;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Py | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Py;

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
  afterMake(): Py;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): Py;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Py;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Py>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Py;

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
  static fromString(s: string | null): Py | null;

  /**
   * Return the matching ImplLanguage for the specified string or null. This is case-insensitive and handles common
   * abbreviations.
   */
  static forName(name: string | null, failIfMissing?: boolean): Py | null;

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): Py;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): Py | null;

  /**
   * @return `true` if underlying language supports overloaded functions
   */
  supportsOverloads(): boolean;

  /**
   * @return `true` if underlying language supports overloaded functions
   */
  static supportsOverloads(): boolean;

  /**
   * Language versions supported for this language. Note that this is not necessarily a semantic version.
   */
  versions(): C3.Array<string | null>;

  /**
   * Language versions supported for this language. Note that this is not necessarily a semantic version.
   */
  static versions(): C3.Array<string | null>;

  /**
   * Return the official name of matching ImplLanguage for the specified string or null. This is case-insensitive and
   * handles common abbreviations.
   */
  static nameOf(lang: string | null, failIfInvalid?: boolean): string | null;

  /**
   * @return name of this language as used in method declaration (if any)
   */
  dslName(): string | null;

  /**
   * @return name of this language as used in method declaration (if any)
   */
  static dslName(): string | null;

  /**
   * @return name of the specified language as used in method declaration (if any)
   */
  static dslNameOf(lang: string): string | null;

  /**
   * Return the canonical file extension for one of the language enum values.
   *
   * @return file extension (including dot)
   */
  fileExt(): string;

  /**
   * Return the canonical file extension for one of the language enum values.
   *
   * @return file extension (including dot)
   */
  static fileExt(): string;

  /**
   * Return the canonical file extension for the specified language enum value.
   *
   * @return file extension (including dot)
   */
  static fileExtOf(lang: string): string;

  /**
   * Return the canonical content type extension for one of the language enum values.
   *
   * @return content type
   */
  mediaType(): string;

  /**
   * Return the canonical content type extension for one of the language enum values.
   *
   * @return content type
   */
  static mediaType(): string;

  /**
   * Extract the function names from the script that could implement type methods. This means named top-level
   * functions which could match up with type methods names.
   *
   * Normally a script that cannot be parsed will fail silently, returning an empty list, but passing true to
   * failIfInvalid will cause an appropriate error to be thrown instead.
   *
   * @param source code to parse
   * @param failIfInvalid throw an exception the script has a syntax error
   */
  functions(source: string, failIfInvalid?: boolean): C3.Array<string | null>;

  /**
   * Extract the function names from the script that could implement type methods. This means named top-level
   * functions which could match up with type methods names.
   *
   * Normally a script that cannot be parsed will fail silently, returning an empty list, but passing true to
   * failIfInvalid will cause an appropriate error to be thrown instead.
   *
   * @param source code to parse
   * @param failIfInvalid throw an exception the script has a syntax error
   */
  static functions(source: string, failIfInvalid?: boolean): C3.Array<string | null>;

  /**
   *  Return the list of keywords for a given language. This is the list of words used by the implementation of a
   *  programming language. If the name of a field or method conflicts with one of these keywords, the field or method
   *  can be accessed by appending "_" to the end of its name. For example:
   *
   *  ```py
   *     with open("foo.txt", "w") as f: # Note that "with" is a Python keyword
   *         f.write("bar")
   *     inst = c3.ArrayType.ofBool().emptyArray()
   *     # inst = inst.with(True) <- this would fail as "with" is a keyword in Python
   *     inst = inst.with_(True) # Works!
   *     c3.Py.keywords().contains("with") # returns True
   * ```
   */
  keywords(): C3.Array<string | null>;

  /**
   *  Return the list of keywords for a given language. This is the list of words used by the implementation of a
   *  programming language. If the name of a field or method conflicts with one of these keywords, the field or method
   *  can be accessed by appending "_" to the end of its name. For example:
   *
   *  ```py
   *     with open("foo.txt", "w") as f: # Note that "with" is a Python keyword
   *         f.write("bar")
   *     inst = c3.ArrayType.ofBool().emptyArray()
   *     # inst = inst.with(True) <- this would fail as "with" is a keyword in Python
   *     inst = inst.with_(True) # Works!
   *     c3.Py.keywords().contains("with") # returns True
   * ```
   */
  static keywords(): C3.Array<string | null>;

  /**
   * Return the matching language for the specified extension.
   *
   * @param ext extension string to match
   * @param failIfNone if true, throw error instead of returning null
   * @return matched enum value
   */
  static forFileExt(ext: string | null, failIfNone?: boolean): Py | null;

  /**
   * @return `true` if this is Java implementation language
   */
  isJava(): boolean;

  /**
   * @return `true` if this is Java implementation language
   */
  static isJava(): boolean;

  /**
   * @return `true` if this is JavaScript implementation language
   */
  isJs(): boolean;

  /**
   * @return `true` if this is JavaScript implementation language
   */
  static isJs(): boolean;

  /**
   * @return `true` if this is Python implementation language
   */
  isPy(): boolean;

  /**
   * @return `true` if this is Python implementation language
   */
  static isPy(): boolean;

  /**
   * @return implementation language for Java
   */
  static java(): ImplLanguage;

  /**
   * @return implementation language for JavaScript
   */
  static js(): ImplLanguage;

  /**
   * @return implementation language for Python
   */
  static py(): ImplLanguage;

  /**
   * @return all implementation languages.
   */
  static all(): C3.Array<ImplLanguage | null>;

  /**
   * @return all implementation languages.
   */
  static allNames(): C3.Array<string | null>;

  /**
   * @return file extensions for all supported ImplLanguages.
   */
  static allFileExts(): C3.Array<string | null>;

  /**
   * @return scripting language instances (implementation languages other than Java)
   *
   * @see #all
   */
  static allScripting(): C3.Array<ImplLanguage | null>;

  /**
   * @return scripting language names (implementation languages other than Java)
   *
   * @see #allNames
   */
  static allScriptingNames(): C3.Array<string | null>;

  /**
   * @return `true` if any of provided {@link Action.Requirements} is for Java
   */
  static hasJava(actionRequirements: C3.Array<string | null> | null): boolean;

  /**
   * @return `true` if any of provided {@link Action.Requirements} is for JavaScript
   */
  static hasJs(actionRequirements: C3.Array<string | null> | null): boolean;

  /**
   * @return `true` if any of provided {@link Action.Requirements} is for Python
   */
  static hasPy(actionRequirements: C3.Array<string | null> | null): boolean;

  /**
   * @return `true` if the provided {@Link Action.Engine} can run any of provided {@Link Action.Requirement actionRequirements}. If the parameter actionRequirements is
   * empty we assume it has only one {@Link Action.Requirement} "java".
   */
  static canRunActionRequirements(find: string | null, actionRequirements: C3.Array<string | null> | null): boolean;

  /**
   * @return `true` if any of provided {@link Action.Requirements} use the specified language
   */
  static hasLang(find: string, actionRequirements: C3.Array<string | null> | null): boolean;

  /**
   * @return `true` if the provided language is a scripting language.
   *
   * @see #allScripting
   */
  static isScriptLang(lang: string): boolean;

  /**
   * @return `true` if any of provided {@link Action.Requirements} are a scripting language
   *
   * @see #allScripting
   */
  static hasScript(actionRequirements: C3.Array<string | null> | null): boolean;

  /**
   * @return the requirements from the list that use the specified language
   */
  static filterLang(find: string, actionRequirements: C3.Array<string | null> | null): C3.Array<string | null>;

  /**
   * Installs the specified runtime, deleting potentially stale (cache-dirty) installations already present.
   */
  installRuntime(runtime: ImplLanguage.ResolvedRuntime): void;

  /**
   * Installs the specified runtime, deleting potentially stale (cache-dirty) installations already present.
   */
  static installRuntime(runtime: ImplLanguage.ResolvedRuntime): void;

  /**
   * Resolve the specified runtime, {@Link ImplLanguage.RuntimeLocation locations}, and {@Link ImplLanguage.Executor executors} combinations.
   *
   * @param runtime
   *            The runtime to resolve.
   * @param location
   *            If provided, runtime will be resolved for the specific {@Link ImplLanguage.RuntimeLocation location}. If not
   *            provided runtime is resolved against all {@Link ImplLanguage.RuntimeLocation locations}.
   * @param executors
   *            If provided, the runtime will be resolved only for {@Link ImplLanguage.Executor executors} specified in the parameter executors. If not
   *            set runtime is resolved against all {@Link ImplLanguage.Executor executors}.
   * @param doNotValidate
   *            Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
   *            runtime. In some cases, it may be desirable or necessary to disable this validation. For
   *            example, if one of the packages has an installation name that does not match its 'importable' name.
   * @return A named tuple with fields `seededRuntimes` and `errors`. The 'seededRuntimes' field is a map with {@Link Action.Engine} as the key and its {@Link Action.Engine#installedRuntime resolved runtime}
   * as the value. The 'errors' field is a map with {@Link Action.Engine} as the key and the error message as value if the runtime resolution failed for that {@Link Action.Engine}.
   */
  resolveRuntime(runtime: ImplLanguage.Runtime, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Resolve the specified runtime, {@Link ImplLanguage.RuntimeLocation locations}, and {@Link ImplLanguage.Executor executors} combinations.
   *
   * @param runtime
   *            The runtime to resolve.
   * @param location
   *            If provided, runtime will be resolved for the specific {@Link ImplLanguage.RuntimeLocation location}. If not
   *            provided runtime is resolved against all {@Link ImplLanguage.RuntimeLocation locations}.
   * @param executors
   *            If provided, the runtime will be resolved only for {@Link ImplLanguage.Executor executors} specified in the parameter executors. If not
   *            set runtime is resolved against all {@Link ImplLanguage.Executor executors}.
   * @param doNotValidate
   *            Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
   *            runtime. In some cases, it may be desirable or necessary to disable this validation. For
   *            example, if one of the packages has an installation name that does not match its 'importable' name.
   * @return A named tuple with fields `seededRuntimes` and `errors`. The 'seededRuntimes' field is a map with {@Link Action.Engine} as the key and its {@Link Action.Engine#installedRuntime resolved runtime}
   * as the value. The 'errors' field is a map with {@Link Action.Engine} as the key and the error message as value if the runtime resolution failed for that {@Link Action.Engine}.
   */
  static resolveRuntime(runtime: ImplLanguage.Runtime, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * The api to upsert a runtime. After a runtime is successfully upserted it can be used as a part of {@Link Action.Requirement}
   * in method claims and {@Link Lambda lambdas}.
   *
   * @param runtime
   *            The runtime to upsert. Once a runtime is successfully upserted it is available for use in {@Link Action.Requirement}
   *            with any valid combination of {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors} that support
   *            custom runtimes. The user can also upsert a runtime for specific locations and executors and then it can be used with only those
   *            combination of locations and executors.
   * @param location
   *            This optional parameter allows user to upsert a runtime for a specific {@Link ImplLanguage.RuntimeLocation location}. If not provided a successfully upserted runtime can be used
   *            with any location in an {@Link Action.Requirement}. For instance, calling upsert on a runtime "py-foo" with location set as "server" will allow users to use that runtime only with server.
   *            Any method claim like "py-foo-client" will be invalid and throw metadata error.
   * @param executor
   *            This optional parameter allows user to upsert a runtime for some array of {@Link ImplLanguage.Executor executors}. If not provided a successfully upserted runtime can be used
   *            with any {@Link ImplLanguage.Executor executor} that supports custom runtimes. For instance, calling upsert on a runtime "py-foo" with executor
   *            set as ["ipython"] will allow users to use that runtime only with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}. A method claim like
   *            "py-foo-server" will be invalid and throw metadata error as {@Link ImplLanguage.Executor#IPYTHON ipython} is an executor for client side python. Similarly,
   *            the method claim "py-foo-py4j" will be invalid as "py-foo" can only be used with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}.
   * @param doNotValidate
   *            Upsertion of runtime typically involves validation to confirm that the installed runtimes satisfy the
   *            runtime which was to be upserted. In some cases, it may be desirable or necessary to disable this validation. For
   *            example, if one of the packages has an installation name that does not match its 'importable' name.
   *
   * @return A named tuple with fields 'seededRuntimes' and 'errors'. The 'seededRuntimes' field will provide detailed information
   *         about the the libraries that will be installed when using this runtime with various {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}. It is a map with {@Link Action.Engine} as key and its {@Link Action.Engine#installedRuntime} as value.
   *         The 'errors' field is a map with {@Link Action.Engine} as key and error message as value if the runtime upsertion failed for that particular {@Link Action.Engine}. To check if upsertion is completely successfully it is enough to check that 'errors' field is an empty map.
   *         If the upsertion was not successful or partially successful `errors` field will give detailed information about why upsertion failed for all/some
   *         requested {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}.
   */
  upsertRuntime(runtime: ImplLanguage.Runtime, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * The api to upsert a runtime. After a runtime is successfully upserted it can be used as a part of {@Link Action.Requirement}
   * in method claims and {@Link Lambda lambdas}.
   *
   * @param runtime
   *            The runtime to upsert. Once a runtime is successfully upserted it is available for use in {@Link Action.Requirement}
   *            with any valid combination of {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors} that support
   *            custom runtimes. The user can also upsert a runtime for specific locations and executors and then it can be used with only those
   *            combination of locations and executors.
   * @param location
   *            This optional parameter allows user to upsert a runtime for a specific {@Link ImplLanguage.RuntimeLocation location}. If not provided a successfully upserted runtime can be used
   *            with any location in an {@Link Action.Requirement}. For instance, calling upsert on a runtime "py-foo" with location set as "server" will allow users to use that runtime only with server.
   *            Any method claim like "py-foo-client" will be invalid and throw metadata error.
   * @param executor
   *            This optional parameter allows user to upsert a runtime for some array of {@Link ImplLanguage.Executor executors}. If not provided a successfully upserted runtime can be used
   *            with any {@Link ImplLanguage.Executor executor} that supports custom runtimes. For instance, calling upsert on a runtime "py-foo" with executor
   *            set as ["ipython"] will allow users to use that runtime only with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}. A method claim like
   *            "py-foo-server" will be invalid and throw metadata error as {@Link ImplLanguage.Executor#IPYTHON ipython} is an executor for client side python. Similarly,
   *            the method claim "py-foo-py4j" will be invalid as "py-foo" can only be used with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}.
   * @param doNotValidate
   *            Upsertion of runtime typically involves validation to confirm that the installed runtimes satisfy the
   *            runtime which was to be upserted. In some cases, it may be desirable or necessary to disable this validation. For
   *            example, if one of the packages has an installation name that does not match its 'importable' name.
   *
   * @return A named tuple with fields 'seededRuntimes' and 'errors'. The 'seededRuntimes' field will provide detailed information
   *         about the the libraries that will be installed when using this runtime with various {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}. It is a map with {@Link Action.Engine} as key and its {@Link Action.Engine#installedRuntime} as value.
   *         The 'errors' field is a map with {@Link Action.Engine} as key and error message as value if the runtime upsertion failed for that particular {@Link Action.Engine}. To check if upsertion is completely successfully it is enough to check that 'errors' field is an empty map.
   *         If the upsertion was not successful or partially successful `errors` field will give detailed information about why upsertion failed for all/some
   *         requested {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}.
   */
  static upsertRuntime(runtime: ImplLanguage.Runtime, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  upsertRuntime(runtime: ImplLanguage.Runtime, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  static upsertRuntime(runtime: ImplLanguage.Runtime, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Upserts each runtime in {{runtimes}} via {@link upsertRuntime}. Ancestor runtimes will be upserted prior to their
   * descendants. If resolution fails for a parent runtime, attempts to resolve any of its descendants will be skipped.
   *
   * All arguments and return value have the same semantics as {@link upsertRuntime}.
   */
  upsertRuntimes(runtimes: C3.Array<ImplLanguage.Runtime | null>, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Upserts each runtime in {{runtimes}} via {@link upsertRuntime}. Ancestor runtimes will be upserted prior to their
   * descendants. If resolution fails for a parent runtime, attempts to resolve any of its descendants will be skipped.
   *
   * All arguments and return value have the same semantics as {@link upsertRuntime}.
   */
  static upsertRuntimes(runtimes: C3.Array<ImplLanguage.Runtime | null>, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Upserts each runtime in {{changedRuntimes}} via {@link upsertRuntimes}. Also upserts runtimes
   * for any runtime which {@link ImplLanguage.Runtime#isDescendantOf is a descendant of} a runtime in
   * {{changedRuntimes}}. Ancestor runtimes will be upserted prior to their descendants.
   *
   * All arguments and return value have the same semantic as {@link upsertRuntime}
   */
  upsertRuntimesAndDependents(changedRuntimes: C3.Array<ImplLanguage.Runtime | null>, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Upserts each runtime in {{changedRuntimes}} via {@link upsertRuntimes}. Also upserts runtimes
   * for any runtime which {@link ImplLanguage.Runtime#isDescendantOf is a descendant of} a runtime in
   * {{changedRuntimes}}. Ancestor runtimes will be upserted prior to their descendants.
   *
   * All arguments and return value have the same semantic as {@link upsertRuntime}
   */
  static upsertRuntimesAndDependents(changedRuntimes: C3.Array<ImplLanguage.Runtime | null>, location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Upserts all runtimes declared in the current {@link Pkg} via {@link upsertRuntimes}.
   *
   * All arguments and return value have the same semantic as {@link upsertRuntime}
   */
  upsertPkgRuntimes(location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Upserts all runtimes declared in the current {@link Pkg} via {@link upsertRuntimes}.
   *
   * All arguments and return value have the same semantic as {@link upsertRuntime}
   */
  static upsertPkgRuntimes(location?: string | null, executors?: C3.Array<string | null>, doNotValidate?: boolean): [seededRuntimes: C3.Map<string | null, ImplLanguage.ResolvedRuntime | null>, errors: C3.Map<string | null, string | null>];

  /**
   * Uninstalls the specified runtime if installed.
   */
  uninstallRuntime(runtimeName: string): void;

  /**
   * Uninstalls the specified runtime if installed.
   */
  static uninstallRuntime(runtimeName: string): void;

  /**
   * Library manager for this language and provided runtime.
   */
  libraryManager(runtimeName?: string | null): LibraryManager<LibraryManager.Config | null, ImplLanguage.ResolvedRuntime | null>;

  /**
   * Library manager for this language and provided runtime.
   */
  static libraryManager(runtimeName?: string | null): LibraryManager<LibraryManager.Config | null, ImplLanguage.ResolvedRuntime | null>;

  /**
   * All valid executors for this language
   */
  get executors(): C3.Array<string | null>;

  /**
   * All valid executors for this language
   */
  static get executors(): C3.Array<string | null>;

  /**
   * Regular expression that matches all supported languages
   */
  static regexPattern(): string;

  /**
   * @return the method stubs for declared or overridden methods in given typemeta.
   *
   * @param meta
   *           the type to generate stubs for
   * @param delegate
   *           use super to call Java instead of throwing an error
   */
  static methodStubs(meta: TypeMeta, delegate?: boolean): string | null;

  /**
   * @return a block prepended to all generated files
   */
  static preamble(): string | null;

  /**
   * Build a stub function declaration as multiple lines. All lines, including the last one, should end with newlines.
   *
   * @param type
   *        the type
   * @param methodName
   *        name of the method
   * @param isMember
   *        if this is a member method
   * @param fixed
   *        the parameters that are the same in all overloads
   * @param requiredCount
   *        the number of the sharedOverloadParams parameters that must be specified by the caller
   * @param remaining
   *        the name for any remaining parameters that vary by overload or are varargs
   * @param delegate
   *        use super to call Java instead of throwing an error
   * @return stub function declaration
   */
  static stub(type: TypeMeta, methodName: string, isMember?: boolean, fixed?: C3.Array<string | null>, requiredCount?: number | null, remaining?: string | null, delegate?: boolean): string | null;

  /**
   * @return a block appended to all generated files
   */
  static postamble(): string | null;

  /**
   * @return the single-line comment prefix
   */
  static comment(): string;

  /**
   * @return the language as listed in {@link ImplLanguage}.
   */
  static language(): string;

  /**
   * Build a made array of the specified type from the specified native array or list. The elements are made by
   * making them as the element type of the specified array type. The made array corresponds to the specified
   * array type.
   */
  static toArray(v: any, type: ArrayType, failIfInvalid?: boolean): C3.Array<E | null>;

  /**
   * Build a made array of `any` from the specified native array or list. The elements are made by guessing the type.
   */
  static toArrayOfAny(v: any, failIfInvalid?: boolean): C3.Array<any>;

  /**
   * Build a made array of `double` from the specified native array or list. The elements are made as necessary.
   *
   * @see ArrayType#ofDbl
   */
  static toArrayOfDbl(v: any, failIfInvalid?: boolean): C3.Array<number | null>;

  /**
   * Build a made array of `int` from the specified native array or list. The elements are made as necessary.
   *
   * @see ArrayType#ofInt
   */
  static toArrayOfInt(v: any, failIfInvalid?: boolean): C3.Array<number | null>;

  /**
   * Build a made array of `string` from the specified native array or list. The elements are made as necessary.
   *
   * @see ArrayType#ofStr
   */
  static toArrayOfStr(v: any, failIfInvalid?: boolean): C3.Array<string | null>;

  /**
   * Build a made map of the specified type from the specified native map or dictionary. The keys and values are
   * made by making them as the element type of the specified map type. The made map corresponds to the specified
   * map type.
   */
  static toMap(v: any, type: MapType, failIfInvalid?: boolean): C3.Map<K | null, V | null>;

  /**
   * Build a made map of `any` from the specified native map or dictionary. The keys and values are made by
   * guessing the types.
   */
  static toMapOfAny(v: any, failIfInvalid?: boolean): C3.Map<any, any>;

  /**
   * Build a made map of `string` to `any` from the specified native map or dictionary. The values are made by
   * guessing the types.
   */
  static toMapOfStrToAny(v: any, failIfInvalid?: boolean): C3.Map<string | null, any>;

  /**
   * Build a made map of `double` from the specified native map or dictionary. The keys and values are made as
   * necessary.
   *
   * @see MapType#ofStrToDbl
   */
  static toMapOfStrToDbl(v: any, failIfInvalid?: boolean): C3.Map<string | null, number | null>;

  /**
   * Build a made map of `int` from the specified native map or dictionary. The keys and values are made as
   * necessary.
   *
   * @see MapType#ofStrToInt
   */
  static toMapOfStrToInt(v: any, failIfInvalid?: boolean): C3.Map<string | null, number | null>;

  /**
   * Build a made map of `string` from the specified native map or dictionary. The keys and values are made as
   * necessary.
   *
   * @see MapType#ofStrToStr
   */
  static toMapOfStrToStr(v: any, failIfInvalid?: boolean): C3.Map<string | null, string | null>;

  /**
   * Build a made instance of a type. Note that this might not actually be an Obj if the specified type does not mixin
   * Obj. If the value specifies a type more specific that than given the more specific type is used. If it specifies
   * an unrelated type, null is returned or an error is thrown.
   *
   * If the type is an Obj, then a field initializer map (either made or unmade) or a JSON object may be specified.
   *
   * If the type mixes {@link StringSerializable}, then the string representation may be specified.
   *
   * @see Obj#make
   */
  static toObj(v: any, type: Type, failIfInvalid?: boolean): O | null;

  /**
   * Build a made set of the specified type from the specified native array or list. The elements are made by
   * making them as the element type of the specified set type. The made set corresponds to the specified
   * set type.
   */
  static toSet(v: any, type: SetType, failIfInvalid?: boolean): C3.Set<E | null>;

  /**
   * Build a made set of `double` from the specified native array or list. The elements are made as necessary.
   *
   * @see SetType#ofDbl
   */
  static toSetOfDbl(v: any, failIfInvalid?: boolean): C3.Set<number | null>;

  /**
   * Build a made set of `int` from the specified native array or list. The elements are made as necessary.
   *
   * @see SetType#ofInt
   */
  static toSetOfInt(v: any, failIfInvalid?: boolean): C3.Set<number | null>;

  /**
   * Build a made set of `string` from the specified native array or list. The elements are made as necessary.
   *
   * @see SetType#ofStr
   */
  static toSetOfStr(v: any, failIfInvalid?: boolean): C3.Set<string | null>;

  /**
   * Build a made stream of the specified type from the specified native collection or iterator. The elements are made
   * by making them as the element type of the specified stream type. The made stream corresponds to the specified
   * stream type.
   */
  static toStream(v: any, type: StreamType, failIfInvalid?: boolean): Stream<E | null>;

  /**
   * Build a made stream of `any` from the specified native collection or iterator. The elements are made by guessing
   * the type.
   */
  static toStreamOfAny(v: any, failIfInvalid?: boolean): Stream<any>;

  /**
   * Build a made stream of `double` from the specified native collection or iterator. The elements are made as
   * necessary.
   */
  static toStreamOfDbl(v: any, failIfInvalid?: boolean): Stream<number | null>;

  /**
   * Build a made stream of `int` from the specified native collection or iterator. The elements are made as necessary.
   */
  static toStreamOfInt(v: any, failIfInvalid?: boolean): Stream<number | null>;

  /**
   * Build a made stream of `string` from the specified native collection or iterator. The elements are made as
   * necessary.
   */
  static toStreamOfStr(v: any, failIfInvalid?: boolean): Stream<string | null>;

  /**
   * Construct a made value for the specified value type.
   *
   * @see ValueType#makeValue
   */
  static toValue(v: any, type: ValueType, failIfInvalid?: boolean): any;

  /**
   * Returns a language-native key-value object for scripting languages: JavaScript Object or Python dict.
   * The only supported input types are C3 `json` values and the language native equivalents (for which `toNativeObject`
   * is a no-op).
   */
  static toNativeObject(o: any): any;

  /**
   * Private function to profile a python action/lambda and dump profile results to a local file
   *
   * @param name
   *        name of the action or test, used as the profile result file name
   * @param lambda
   *        the lambda to be profiled
   * @param count
   *        profile the action for this many times
   * @return the (last if running multiple times) return value of the action
   *
   * @see PythonTesting.c3doc
   */
  static profilePyAction(name: string, lambda: λNullConsumer, count?: number): any;

  /**
   * Allows py4j interpreters to persist beyond the action for which they were created to avoid process startup
   * overhead on subsequent calls that use the same interpreter.
   *
   * By default, persistent py4j interpreters are disabled.
   *
   * @see #disablePersistentPy4jInterpreters
   */
  static enablePersistentPy4jInterpreters(): void;

  /**
   * Prevents py4j interpreters from persisting beyond the action for which they were created.
   * This API does not close existing py4j interpreters. To do so, use #closeAllPy4jInterpreters.
   *
   * By default, persistent py4j interpreters are disabled.
   *
   * @see #enablePersistentPy4jInterpreters
   */
  static disablePersistentPy4jInterpreters(): void;

  /**
   * Closes all open Py4j interpreters.
   */
  static closeAllPy4jInterpreters(): void;

  /**
   * Invalidates all Jep interpreters. Due to the thread-access pattern for jep, this will not synchronously close
   * all Jep interpreters, but rather ensure that the next time that interpreter would be used by its corresponding
   * Java worker thread, the Jep thread is closed and reopened.
   */
  static invalidateAllJepInterpreters(): void;

  /**
   * Initializes a Python interpreter in the current Java thread for the given {@link Action.Engine}. This means
   * starting the Python interpreter, bootstrapping the Python SDK, and respecting any initialization semantics of
   * {@link App.Node.ThreadPool.Config.Py}. If the Python interpreter is already initialized for the current thread,
   * this method will do nothing. This function only applies to {@link ImplLanguage.RuntimeLocation#SERVER server}
   * action engines.
   *
   * Note: If the provided action engine has the {ImplLanguage.Executor#PY4J py4j} executor and its Py4j interpreter
   * is not persisted, invoking this method will not be meaningful (as the initialized interpreter will not be
   * persisted).
   */
  static startInterpreter(engine: string): void;

  /**
   * Implements respecting Python config semantics which must occur when a Java thread starts
   */
  static onJavaThreadStart(config?: App.Node.ThreadPool.Config.Py | null): void;

  /**
   * Evaluate a Python expression (using `py-jep`) and return the result. This only works for _expressions_;
   * to call a declared Python function, use #call.
   *
   * @param expr Python expression
   * @return expression result value
   */
  static eval(expr: string): any;

  /**
   * Execute a block of Python code (using `py-jep`). Like Python's built-in `exec`, this does not return a value,
   * so is only useful for its side-effects. To call a declared Python function, use #call.
   *
   * @param code the source code containing the function declaration
   */
  static exec(code: string): any;

  /**
   * Call a declared Python function (using `py-jep`) and return the result. If `args` is an array, the values are
   * called as positional arguments. If a map, as keyword arguments.
   *
   * @param code the source code containing the function declaration
   * @param fn the function name to call
   * @param args arguments passed to the function
   * @return function return value
   */
  static call(code: string, fn: string, args?: C3.Array<any> | C3.Map<string | null, any> | null): any;

  /**
   * Upsert the pandas dataframe into database such that each row corresponds to a single instance of the provided
   * **serType**. Please note that {@link Persistable.createBatch} will be used to create the instances in the db if
   * UpsertSpec#createDirect option is provided.
   */
  static upsert_pandas_to_db(pandas: any, serType: Type, batchSize?: number | null, spec?: UpsertSpec | null): void;

  /**
   * Upsert the local arrow file into database such that each row corresponds to a single instance of the provided
   * **serType**. Please note that {@link Persistable.createBatch} will be used to create the instances in the db if
   * UpsertSpec#createDirect option is provided.
   */
  static upsertLocalArrowToDb(metadata: Feature.Store.WriteMetadata, serType: Type, batchSize?: number | null, spec?: UpsertSpec | null): void;

  /**
   * @return profiler for profiling server side python calls
   *
   * @see #Py.Profiler#start
   */
  profiler(): Py.Profiler;

  /**
   * @return profiler for profiling server side python calls
   *
   * @see #Py.Profiler#start
   */
  static profiler(): Py.Profiler;

  /**
   * Returns py4j interpreter's current pool size if interpreter pooling is enabled.
   */
  static py4jInterpreterPoolSize(): number | null;
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

interface λNullConsumer {
  (): void
}

interface λPredicate<T> {
  (t: T): boolean
}
