// TypeScript definitions for the C3 type StringType

/**
 * The String value type contains Unicode character data. Encoding in most cases is
 * [UTF-8](https://en.wikipedia.org/wiki/UTF-8).
 *
 * Generally, empty strings and strings composed only of whitespace are not retained. In order to preserve these
 * "empty" values, a field can declared using the question mark modifier: `?string`.
 *
 * This type must not be used for true binary data (arbitrary byte values), which should instead use
 * {@link BinaryType binary}.
 *
 * There are no fields (other than #modifier), so this is normally accessed with {@link PrimitiveType#ofStr}.
 *
 * @remarks this represents a value passed to a method that expects an instance of StringType
 */
declare interface IStringType {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  declaredPkgPath?: string | null;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  declaredSrcLine?: number | null;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  declaredSrcCharInLine?: number | null;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  pkg: IPkg;

  /**
   * SDK json representing instance of this type
   */
  json?: any;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  annotationsJson?: any | null;

  /**
   * Value type modifier
   *
   * Non empty constraint is specified by adding an exclamation mark in front of the ValueType:
   * ```type
   *   where: !Location
   * ```
   *
   * The desire to preserve empty values (such that they can be differentiated from the lack of any value) is specified
   * by adding a question mark in front of the ValueType:
   * ```type
   *   approved: ?boolean
   * ```
   *
   * The non optional function parameter constraint is specified by adding `!?` in front of the ValueType:
   * ```type
   *   f: function(url: !?string serialized Url)
   * ```
   *
   * @see #isNonEmpty
   * @see #preservesEmpty
   * @see #isNonOptionalParam
   * @see FunctionParam#isNonOptional
   */
  modifier?: string | null;

  /**
   * The name of the primitive type (such as `double` or `boolean`). This is usually the same as the DSL syntax,
   * except it does not include variations such as (`date` or `datetime with millis`) or modifiers (`!` and `?`).
   *
   * @see #keyword
   */
  name: string;

  /**
   * This declares the type which is represented by this primitive. For example a type that wants to manage URLs as
   * strings might use:
   * ```type
   * type Endpoint {
   *   url: !string serialized Url
   * }
   * ```
   *
   * What this means is that the field value is a `string`, but it must conform to the {@link StringSerializable}
   * contract of {@link Url#toString} / fromString.
   *
   * In addition to providing documentation on the format of the string as well as a means to validate this, for
   * fields a method is synthesized that parses the string and returns the resulting instance:
   * ```js
   * endpoint.parsedUrl().host
   * ```
   *
   * The most common use of this is reference type, to a type that mixes {@link StringSerializable} for `string` or
   * {@link Serializable} for `json`. However, it is also possible to use other types which have built-in serialization
   * support. For example, `string serialized json` would indicate that `string` value, which would always be in JSON
   * format and the "parsed" method (see above) would return `json`.
   *
   * @see StringSerializable
   * @see #dereferenceSerialized
   */
  serializedType?: IValueType | null;

  /**
   * This declares that the values are constrained to those defined on the named enum type. The fields of the enum
   * type must have the same type as the primitive type which is constrained by them.
   *
   * ```type
   * enum type Interval { SECOND MINUTE HOUR }
   *
   * type X {
   *   interval: string enum Interval
   * }
   * ```
   *
   * @see Enum
   */
  enumRefType?: IReferenceType | null;

  /**
   * This declares that the values are constrained to a specific set of values for a single declaration only.
   * Each of the values in the array must be the same type as the primitive type.
   *
   * ```type
   * when: string enum('weekday', 'weekend')
   * ```
   *
   * It is generally better to create an enum type, and always better if it is used in more than one declaration.
   *
   * Note that this field and enumType are exclusive (and both are optional).
   *
   * @see #enumType
   */
  declaredEnumValues?: C3.Array<string | null> | Array<string | null>;
}

/**
 * The String value type contains Unicode character data. Encoding in most cases is
 * [UTF-8](https://en.wikipedia.org/wiki/UTF-8).
 *
 * Generally, empty strings and strings composed only of whitespace are not retained. In order to preserve these
 * "empty" values, a field can declared using the question mark modifier: `?string`.
 *
 * This type must not be used for true binary data (arbitrary byte values), which should instead use
 * {@link BinaryType binary}.
 *
 * There are no fields (other than #modifier), so this is normally accessed with {@link PrimitiveType#ofStr}.
 *
 * @remarks this represents a made instance of StringType
 */
declare class StringType extends Obj {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): StringType;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): StringType;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): StringType;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  readonly pkg: Pkg;
  withPkg(pkg: IPkg): StringType;

  /**
   * SDK json representing instance of this type
   */
  readonly json?: any;
  withJson(json: any): StringType;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): StringType;

  /**
   * Value type modifier
   *
   * Non empty constraint is specified by adding an exclamation mark in front of the ValueType:
   * ```type
   *   where: !Location
   * ```
   *
   * The desire to preserve empty values (such that they can be differentiated from the lack of any value) is specified
   * by adding a question mark in front of the ValueType:
   * ```type
   *   approved: ?boolean
   * ```
   *
   * The non optional function parameter constraint is specified by adding `!?` in front of the ValueType:
   * ```type
   *   f: function(url: !?string serialized Url)
   * ```
   *
   * @see #isNonEmpty
   * @see #preservesEmpty
   * @see #isNonOptionalParam
   * @see FunctionParam#isNonOptional
   */
  readonly modifier?: string | null;
  withModifier(modifier: string | null): StringType;

  /**
   * The name of the primitive type (such as `double` or `boolean`). This is usually the same as the DSL syntax,
   * except it does not include variations such as (`date` or `datetime with millis`) or modifiers (`!` and `?`).
   *
   * @see #keyword
   */
  readonly name: string;
  withName(name: string): StringType;

  /**
   * This declares the type which is represented by this primitive. For example a type that wants to manage URLs as
   * strings might use:
   * ```type
   * type Endpoint {
   *   url: !string serialized Url
   * }
   * ```
   *
   * What this means is that the field value is a `string`, but it must conform to the {@link StringSerializable}
   * contract of {@link Url#toString} / fromString.
   *
   * In addition to providing documentation on the format of the string as well as a means to validate this, for
   * fields a method is synthesized that parses the string and returns the resulting instance:
   * ```js
   * endpoint.parsedUrl().host
   * ```
   *
   * The most common use of this is reference type, to a type that mixes {@link StringSerializable} for `string` or
   * {@link Serializable} for `json`. However, it is also possible to use other types which have built-in serialization
   * support. For example, `string serialized json` would indicate that `string` value, which would always be in JSON
   * format and the "parsed" method (see above) would return `json`.
   *
   * @see StringSerializable
   * @see #dereferenceSerialized
   */
  readonly serializedType?: ValueType | null;
  withSerializedType(serializedType: IValueType | null): StringType;

  /**
   * This declares that the values are constrained to those defined on the named enum type. The fields of the enum
   * type must have the same type as the primitive type which is constrained by them.
   *
   * ```type
   * enum type Interval { SECOND MINUTE HOUR }
   *
   * type X {
   *   interval: string enum Interval
   * }
   * ```
   *
   * @see Enum
   */
  readonly enumRefType?: ReferenceType | null;
  withEnumRefType(enumRefType: IReferenceType | null): StringType;

  /**
   * This declares that the values are constrained to a specific set of values for a single declaration only.
   * Each of the values in the array must be the same type as the primitive type.
   *
   * ```type
   * when: string enum('weekday', 'weekend')
   * ```
   *
   * It is generally better to create an enum type, and always better if it is used in more than one declaration.
   *
   * Note that this field and enumType are exclusive (and both are optional).
   *
   * @see #enumType
   */
  readonly declaredEnumValues?: C3.Array<string | null>;
  withDeclaredEnumValues(declaredEnumValues: C3.Array<string | null> | Array<string | null>): StringType;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): StringType;

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
  static fromJson(json: any | null): StringType | null;

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
  static fromJsonString(json: string | null): StringType | null;

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
  static fromXmlString(xml: string | null): StringType | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): StringType | null;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Value types never count as "empty" because their type is a large part of their state.
   */
  isEmptyObj(): boolean;

  /**
   * Whether the specified instance represents exactly the same object as this instance.
   */
  isSame(other: Obj | null): boolean;

  isSame(other: ValueType): boolean;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): StringType;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): StringType;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<StringType | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<StringType | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): StringType;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): StringType;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): StringType;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): StringType;

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
  withField(field: string, value: any, doNotConvert?: boolean): StringType;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): StringType;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): StringType;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): StringType;

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
  withoutFieldAtPath(path: string): StringType;

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
  withoutField(field: string | null): StringType;

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
  withoutField(field: FieldType | null): StringType;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): StringType;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): StringType;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): StringType;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): StringType;

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
  defaultField(field: string): StringType;

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
  defaultField(field: FieldType): StringType;

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
  unsetField(field: string): StringType;

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
  unsetField(field: FieldType): StringType;

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
  removeField(field: string): StringType;

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
  removeField(field: FieldType): StringType;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): StringType;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): StringType;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): StringType;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): StringType;

  mergeJson(json: any | null): StringType;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): StringType;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): StringType;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<StringType | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<StringType | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<StringType | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<StringType | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<StringType | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, StringType | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, StringType | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<StringType | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<StringType | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): StringType;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): StringType;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): StringType;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): StringType;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): StringType;

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
  static make(fields: any, withDefaults?: boolean): StringType;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): StringType | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): StringType;

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
  afterMake(): StringType;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): StringType;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<StringType>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): StringType;

  /**
   * The metadata path where the parent type's declaration file is located:
   * Format: /<package>/[gen|test]/src/<pkg-sub-path>/<name>.c3typ
   * E.g. for the given package folder structure:
   * ```
   * myRepo
   *  |
   *  -  myPkg
   *      |
   *      -  src
   *          |
   *          - folder1
   *              |
   *              - folder2
   *                  |
   *                  - SomeType1.c3typ
   *          - SomeType3.c3typ
   *      -  test
   *          |
   *           - src
   *              |
   *              - SomeType2.c3typ
   *      -  gen
   *          |
   *           - src
   *              |
   *              - SomeType4.c3typ
   * ```
   * For SomeType1.c3typ will return -> /myPkg/src/folder1/folder2/SomeType1.c3typ
   * For SomeType3.c3typ will return -> /myPkg/src/SomeType3.c3typ
   * For SomeType2.c3typ will return -> /myPkg/test/src/SomeType2.c3typ
   * For SomeType4.c3typ will return -> /myPkg/gen/src/SomeType4.c3typ
   *
   * @see #package
   * @see #pkgSubPath
   */
  get pkgPath(): Pkg.Path;

  /**
   * The name of the package where this type was declared.
   *
   * For example, if package "app", depends on "industry", which depends on "foundation", provisioning app will bring
   * in the types in the industry and foundation packages as well. This means that the `package` of the Location
   * type will be foundation, even if it gets remixed by industry (or even app).
   *
   * @see #pkg
   * @see #pkgPath
   * @see #pkgSubPath
   */
  get package(): string;

  /**
   * The version of the package where this type was declared.
   */
  get packageVersionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Dot (".") separated relative path of the folder where this type's declaration file is located in the package
   * E.g. for the given structure
   * ```
   * myRepo
   *  |
   *  -  myPkg
   *      |
   *      -  src
   *          |
   *          - folder1
   *              |
   *              - folder2
   *                  |
   *                  - SomeType1.c3typ
   *          - SomeType3.c3typ
   *      -  test
   *          |
   *           - src
   *              |
   *              - SomeType2.c3typ
   *      -  gen
   *          |
   *           - src
   *              |
   *              - SomeType4.c3typ
   * ```
   * For SomeType1.c3typ will return -> folder1/folder2
   * For SomeType3.c3typ will return -> "" (empty string)
   * For SomeType3.c3typ will return -> "" (empty string)
   * For SomeType4.c3typ will return -> "" (empty string)
   *
   * @see #pkgPath
   * @see #package
   */
  get pkgSubPath(): string;

  /**
   * Pkg where this type was declared, note could be different then #pkg.
   */
  get declaredPkg(): Pkg;

  get metadataPath(): string | null;

  /**
   * Convert the internal object representation of this instance to SdkJson for an efficient loading of type at
   * execution time.
   */
  toTypesysJson(): Typesys.Json;

  /**
   * @return package for built-in Type System; this could be different from #pkg() when package is loaded from a disk
   *         for code gen
   */
  typesys(): Pkg;

  /**
   * @return an instance with the #declaredSrcLine and #declaredSrcCharInLine fields unset.
   */
  withoutDeclaredSrcPos(recursive?: boolean): StringType;

  /**
   * Override this method to return the merged set of annotations from itself and its hierarchy
   * E.g.
   * ```type
   *   @config(folder="x")
   *   type A {
   *   }
   *   @config(secret=true)
   *   type B mixes A
   * ```
   * => return config(secret=true, folder="x") for type B
   * If not overridden, by default this returns #annotationJson
   */
  mergedAnnotationsJson(): any | null;

  /**
   * The declared annotations for this metadata element.
   */
  declaredAnnotations(): Annotations;

  /**
   * The annotations for this metadata element.
   */
  annotations(): Annotations;

  /**
   * Whether this metadata element has any annotation.
   */
  hasAnnotations(): boolean;

  /**
   * Whether this metadata element has annotation with provided name.
   */
  hasAnnotation(ann: string | null): boolean;

  /**
   * Whether this metadata element has annotation field value.
   */
  hasAnnotationValue(ann: string | null, annField: string | null): boolean;

  /**
   * @return annotation with provided name
   */
  annotation(ann: string | null, failIfMissing?: boolean): Annotation | null;

  /**
   * @return annotation value for provided annotation name and annotation field
   */
  annotationValue(ann: string | null, annField: string | null): any;

  /**
   * Add an annotation to the given metadata
   */
  withAnnotation(ann: Annotation): StringType;

  /**
   * Add an annotation to the given metadata
   * @param ann
   *         annotation to add
   * @param annField
   *         which field on the annotation needs to be set
   * @param value
   *         value for the field
   */
  withAnnotation(ann: string, annField?: string | null, value?: any): StringType;

  /**
   * Whether the specified instances have same annotations.
   */
  static haveSameAnnotations(a1: Annotatable | null, a2: Annotatable): boolean;

  /**
   * Return the JSON for annotations that can be inherited by children of this element of metadata. Annotations are
   * normally inherited, but ones marked with {@link Annotation#noInherit} will not be.
   */
  inheritableAnnotationsJson(): any | null;

  /**
   * ValueType instance serialize will make the DSL declaration.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * ValueType.fromString will make a value type instance from a valid DSL declaration.
   *
   * @see #toString
   */
  static fromString(s: string | null): StringType | null;

  /**
   * The name of this instance.
   */
  cacheKey(): string | null;

  cachedFingerprint(): number;

  /**
   * Whether this value type allows empty values. This is the inverse of {@link #isNonEmpty}.
   *
   * Returns true for:
   * - `type` (no modifier) - can be empty
   * - `?type` (PRESERVES_EMPTY) - can be empty, preserves and differentiates empty vs null
   * - `!?type` (NON_OPTIONAL_PARAM) - can be empty, must be explicitly provided
   *
   * Returns false for:
   * - `!type` (NON_EMPTY) - cannot be empty
   *
   * @see #isNonEmpty
   * @see #preservesEmpty
   * @see ValueModifier
   */
  allowsEmpty(): boolean;

  /**
   * If true, value is allowed to be empty. The definition of "empty" expands depending on the value type, but always
   * includes null.
   *
   * In DSL, this is specified by adding a question mark in front of the ValueType:
   * ```type
   *   approved: ?boolean
   * ```
   *
   * Effect on various value types:
   * - boolean: when true, it means a tri-state (`true`/`false`/`null`); when false, `false` and `null` are identical.
   * - string: when true, whitespace values (including empty string itself) will retain their original value and not
   * be treated as `null`; if false, they will be treated as null.
   * - collection: when true, `null` will continue to be `null` instead of being auto-converted into empty collections;
   * when false, `null` will be auto-converted into empty collections to allow easy traversal but the empty values are
   * transient.
   * - reference: when true, an empty instance (with no fields) will continue to be an empty instance and not
   * auto-converted to `null`; if false, it would be transient and converted to null.
   *
   * @see #isEmptyValue
   */
  preservesEmpty(): boolean;

  /**
   * Whether this value type is an explicit "any". This is a singleton representing any of the other types listed
   * here (except `native`).
   *
   * @see AnyType
   */
  isAny(): boolean;

  /**
   * Whether this value type is a primitive.
   *
   * @see PrimitiveType
   */
  isPrimitive(): boolean;

  /**
   * Whether this value type is an array.
   *
   * @see ArrayType
   */
  isArray(): boolean;

  /**
   * Whether this value type is a set.
   *
   * @see SetType
   */
  isSet(): boolean;

  /**
   * Whether this value type is a map.
   *
   * @see MapType
   */
  isMap(): boolean;

  /**
   * Whether this value type is a stream.
   *
   * @see StreamType
   */
  isStream(): boolean;

  /**
   * Whether this value type is a push stream.
   *
   * @see PushStreamType
   */
  isPushStream(): boolean;

  /**
   * Whether this value type is an event stream.
   *
   * @see EventStreamType
   */
  isEventStream(): boolean;

  /**
   * Whether this value type can be streamed, e.g. over HTTP.
   */
  isStreamable(): boolean;

  /**
   * Whether this value type can be streamed as C3 action argument, e.g. over HTTP.
   */
  isStreamableArg(): boolean;

  /**
   * Whether this value type can be streamed as C3 action result, e.g. over HTTP.
   */
  isStreamableResult(): boolean;

  /**
   * Whether this value type is any collection (array, map, set, stream).
   *
   * @see CollectionType
   */
  isCollection(): boolean;

  /**
   * Whether this value type is a reference to a type.
   *
   * @see ReferenceType
   */
  isReference(): boolean;

  /**
   * Whether this value type is a reference to an Instance type such as `Array` or `Lambda`.
   *
   * @see #instanceType
   * @see #instanceValueType
   */
  isInstanceType(): boolean;

  /**
   * Whether this value type is a reference to a type or method generic variable.
   *
   * @see VarReferenceType
   */
  isVarReference(): boolean;

  /**
   * Whether this value type is a declared reference to a type or method generic variable.
   */
  isDeclaredReference(): boolean;

  /**
   * Whether this value type is an "anyof" (or "union type") such as `int | [int]`.
   *
   * @see AnyOfType
   */
  isAnyOf(): boolean;

  /**
   * Whether this value type is a binary (of any size).
   *
   * @see BinaryType
   */
  isBinary(): boolean;

  /**
   * Whether this type is a Boolean value.
   *
   * @see BooleanType
   */
  isBoolean(): boolean;

  /**
   * Whether this type is a byte.
   *
   * @see ByteType
   */
  isByte(): boolean;

  /**
   * Whether this type is a full (64 bit) integer.
   *
   * @see IntType
   */
  isInt(): boolean;

  /**
   * Whether this type is a half (32 bit) integer.
   *
   * @see Int32Type
   */
  isInt32(): boolean;

  /**
   * Whether this type is a quarter (16 bit) integer.
   *
   * @see Int16Type
   */
  isInt16(): boolean;

  /**
   * Whether this type is an arbitrary-length integer.
   *
   * @see BigIntType
   */
  isBigInt(): boolean;

  /**
   * Whether this type is a IEEE single precision number.
   *
   * @see FloatType
   */
  isFloat(): boolean;

  /**
   * Whether this type is a IEEE double precision number.
   *
   * @see DoubleType
   */
  isDouble(): boolean;

  /**
   * Whether this type is a arbitrary-precision decimal number.
   *
   * @see DecimalType
   */
  isDecimal(): boolean;

  /**
   * Whether this value type is a date/time value (of any resolution).
   *
   * @see DateTimeType
   */
  isDateTime(): boolean;

  /**
   * Whether this type is a JavaScript Object Notation object.
   *
   * @see JsonType
   * Whether this type is JavaScript Object Notation object.
   */
  isJson(): boolean;

  /**
   * Whether this type is a typed JavaScript Object Notation object.
   */
  isTypedJson(): boolean;

  /**
   * Whether this type is an untyped JavaScript Object Notation object.
   */
  isUntypedJson(): boolean;

  /**
   * Whether this type is a number.
   *
   * @see NumberType
   */
  isNumber(): boolean;

  /**
   * Whether this type is a text string.
   *
   * @see StringType
   */
  isString(): boolean;

  /**
   * Whether this value type is a numeric primitive with an integer type.
   *
   * @see ByteType
   * @see IntType
   * @see Int32Type
   * @see Int16Type
   * @see BigIntType
   */
  isIntegralNumber(): boolean;

  /**
   * Whether this value type is a numeric primitive with a real number type.
   *
   * @see DoubleType
   * @see FloatType
   * @see DecimalType
   */
  isRealNumber(): boolean;

  /**
   * Whether this value type is a vector.
   *
   * @see VectorType
   */
  isVector(): boolean;

  /**
   * Whether this value type is an explicit "void". This is a singleton representing no possible value.
   *
   * @see VoidType
   */
  isVoid(): boolean;

  /**
   * Whether this value type is a {@link Boxed} C3 type reference. Non-specific value types such as `any` and "anyof"
   * require boxing during serialization to preserve the type information.
   */
  isBoxed(): boolean;

  /**
   * Whether this type is a potentially boxed type; i.e. it's instances could be boxed; e.g. will return `true` for
   * `any` and of course for any value type that `isBoxed`. This returns true if the value should be boxed for
   * serialization.
   */
  isBoxedForSerialization(): boolean;

  /**
   * Whether this value type is a reference to a primitive value boxed in an instance of Boxed C3 type.
   */
  isBoxedPrimitive(): boolean;

  /**
   * Whether this value type is an array of references to a boxed primitive type.
   *
   * @see ArrayType
   * @see Boxed
   */
  isBoxedArray(): boolean;

  /**
   * @return whether this value type is a map whose elements are references to a boxed primitive type.
   *
   * @see MapType
   * @see Boxed
   */
  isBoxedMap(): boolean;

  /**
   * @return whether this value type is a set of references to a boxed primitive type.
   *
   * @see SetType
   * @see Boxed
   */
  isBoxedSet(): boolean;

  /**
   * @return whether this value type is a collection of references to a boxed primitive type.
   *
   * @see CollectionType
   * @see Boxed
   */
  isBoxedCollection(): boolean;

  /**
   * Whether this value type is an array of references.
   *
   * @see ArrayType
   * @see ReferenceType
   */
  isRefArray(): boolean;

  /**
   * Whether this value type is a map whose elements are references.
   *
   * @see MapType
   * @see ReferenceType
   */
  isRefMap(): boolean;

  /**
   * Whether this value type is a set of references.
   *
   * @see SetType
   * @see ReferenceType
   */
  isRefSet(): boolean;

  /**
   * Whether this value type is any collection of references.
   *
   * @see CollectionType
   * @see ReferenceType
   */
  isRefCollection(): boolean;

  /**
   * Whether this value type specifies that a _non-empty_ value must be specified. This is normally the
   * {@link ValueModifier NON_EMPTY} modifier, but may also consider compound structure of more complex value types.
   */
  isNonEmpty(): boolean;

  /**
   * Whether this value type specifies that a (possibly empty) value must be passed as an argument. This is either of
   * the `NON_OPTIONAL_PARAM` or `NON_EMPTY` {@link ValueModifier modifiers}.
   *
   * @see #isNonEmpty
   */
  isNonOptionalParam(): boolean;

  /**
   * Whether this value type is any collection of numbers.
   *
   * @see CollectionType
   * @see NumberType
   */
  isNumCollection(): boolean;

  /**
   * Whether this value type is an array of numbers.
   *
   * @see ArrayType
   * @see NumberType
   */
  isNumArray(): boolean;

  /**
   * Whether this value type is map whose elements are numbers.
   *
   * @see MapType
   * @see NumberType
   */
  isNumMap(): boolean;

  /**
   * Whether this value type is any collection of string.
   *
   * @see CollectionType
   * @see StringType
   */
  isStrCollection(): boolean;

  /**
   * Whether this value type is an array of strings.
   *
   * @see ArrayType
   * @see StringType
   */
  isStrArray(): boolean;

  /**
   * Whether this value type is map whose elements are strings.
   *
   * @see ArrayType
   * @see StringType
   */
  isStrMap(): boolean;

  /**
   * Whether this value type is a {@link Timeseries}.
   */
  isTimeseries(): boolean;

  /**
   * Whether this value type is a tuple.
   *
   * @see TupleType
   */
  isTuple(): boolean;

  /**
   * Whether this value type is a function.
   *
   * @see FunctionType
   */
  isFunction(): boolean;

  /**
   * Whether this value type is a method that implements a type action.
   *
   * @see MethodType
   */
  isMethod(): boolean;

  /**
   * Whether this value type is a lambda.
   *
   * @see LambdaType
   */
  isLambda(): boolean;

  /**
   * Whether this value type represents a native type, directly supported through each language binding. Uses of
   * native implicitly include all other value types (since they can be represented in each language).
   *
   * @see NativeType
   */
  isNative(): boolean;

  /**
   * Whether the value type has a reference to an enum.
   *
   * @see ReferenceType
   * @see Enum
   */
  isEnumRef(): boolean;

  /**
   * Whether this value type is a reference to an {@link Obj}.
   * Note that this is *not* the equivalent of {@link #isReference}, since there exists references to {@link Value}.
   *
   * @see ReferenceType
   * @see Obj
   */
  isObjRef(): boolean;

  /**
   * Whether this value type is a reference to the specified type. This is a convenience function that checks for
   * a reference type and then that the reference is to the specified type. Note that unlike #isAssignableTo, this
   * compares the exact type.
   */
  isReferenceTo(type: Type | null | string | null): boolean;

  /**
   * Cast this value type into a primitive type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return primitive type or null
   */
  asPrimitiveType(failIfNot?: boolean, source?: λSupplier<string | null> | null): PrimitiveType | null;

  /**
   * Cast this value type into a number type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return native type or null
   */
  asNumberType(failIfNot?: boolean, source?: λSupplier<string | null> | null): NumberType | null;

  /**
   * Cast this value type into a datetime type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return native type or null
   */
  asDateTimeType(failIfNot?: boolean, source?: λSupplier<string | null> | null): DateTimeType | null;

  /**
   * Cast this value type into a number type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return native type or null
   */
  asStringType(failIfNot?: boolean, source?: λSupplier<string | null> | null): StringType | null;

  /**
   * Cast this value type into a reference type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return reference type or null
   */
  asReferenceType(failIfNot?: boolean, source?: λSupplier<string | null> | null): ReferenceType | null;

  /**
   * Cast this value type into an varReference type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return var reference type or null
   */
  asVarReferenceType(failIfNot?: boolean, source?: λSupplier<string | null> | null): VarReferenceType | null;

  /**
   * Cast this value type into a declared reference type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return declared reference type or null
   */
  asDeclaredReferenceType(failIfNot?: boolean, source?: λSupplier<string | null> | null): DeclaredReferenceType | null;

  /**
   * Cast this value type into a collection type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return collection type or null
   */
  asCollectionType(failIfNot?: boolean, source?: λSupplier<string | null> | null): CollectionType | null;

  /**
   * Cast this value type into an array type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return array type or null
   */
  asArrayType(failIfNot?: boolean, source?: λSupplier<string | null> | null): ArrayType | null;

  /**
   * Cast this value type into a set type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return set type or null
   */
  asSetType(failIfNot?: boolean, source?: λSupplier<string | null> | null): SetType | null;

  /**
   * Cast this value type into a map type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return map type or null
   */
  asMapType(failIfNot?: boolean, source?: λSupplier<string | null> | null): MapType | null;

  /**
   * Cast this value type into a stream type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return stream type or null
   */
  asStreamType(failIfNot?: boolean, source?: λSupplier<string | null> | null): StreamType | null;

  /**
   * Cast this value type into a push stream type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return push stream type or null
   */
  asPushStreamType(failIfNot?: boolean, source?: λSupplier<string | null> | null): PushStreamType | null;

  /**
   * Cast this value type into a event stream type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return event stream type or null
   */
  asEventStreamType(failIfNot?: boolean, source?: λSupplier<string | null> | null): EventStreamType | null;

  /**
   * Cast this value type into a tuple type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return tuple type or null
   */
  asTupleType(failIfNot?: boolean, source?: λSupplier<string | null> | null): TupleType | null;

  /**
   * Cast this value type into a function type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return function type or null
   */
  asFunctionType(failIfNot?: boolean, source?: λSupplier<string | null> | null): FunctionType | null;

  /**
   * Cast this value type into a method type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return method type or null
   */
  asMethodType(failIfNot?: boolean, source?: λSupplier<string | null> | null): MethodType | null;

  /**
   * Cast this value type into an anyof type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return anyof type or null
   */
  asAnyOfType(failIfNot?: boolean, source?: λSupplier<string | null> | null): AnyOfType | null;

  /**
   * Cast this value type into an any type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return any type or null
   */
  asAnyType(failIfNot?: boolean, source?: λSupplier<string | null> | null): AnyType | null;

  /**
   * Cast this value type into a native type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return native type or null
   */
  asNativeType(failIfNot?: boolean, source?: λSupplier<string | null> | null): NativeType | null;

  /**
   * Cast this value type into a lambda type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return lambda type or null
   */
  asLambdaType(failIfNot?: boolean, source?: λSupplier<string | null> | null): LambdaType | null;

  /**
   * Cast this value type into a vector type.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @param source if throwing an error, provides more detail in the message
   * @return vector type or null
   */
  asVectorType(failIfNot?: boolean, source?: λSupplier<string | null> | null): VectorType | null;

  /**
   * Whether or not there are any `mixing` reference types in this instance.
   *
   * @see ReferenceType#mixing
   */
  hasAnyMixing(): boolean;

  /**
   * Returns true if there are no `mixing` reference types or if all `mixing` declarations matches the given type Name
   */
  hasValidMixing(typeName: string): boolean;

  /**
   * Whether or not this ValueType has any possible values.
   *
   * @see #possibleValues
   */
  hasPossibleValues(): boolean;

  /**
   * @return `true` if this type references valid C3 type
   *
   * @see ReferenceType
   */
  hasReference(): boolean;

  /**
   * @return `true` if this type references a generic variable
   *
   * @see VarReferenceType
   */
  hasVarReference(): boolean;

  /**
   * Look up the referenced C3 type and return it. For unbound variables or invalid type references, null is returned.
   *
   * @param failIfMissing if true, throw an error instead of returning null
   * @return loaded type
   *
   * @see #instanceType
   */
  dereference(failIfMissing?: boolean): Type | null;

  /**
   * Look up the referenced C3 type and return it's {@link TypeMeta}. For unbound variables or invalid type references,
   * null is returned.
   *
   * @param failIfMissing if true, throw an error instead of returning null
   * @return loaded type
   *
   * @see #dereference
   */
  dereferenceMeta(failIfMissing?: boolean): TypeMeta | null;

  /**
   * Look up the C3 type that represents instance of this value type. Note that is maybe different then a reference to
   * a C3 Type from this value type. E.g. in case of `[Dimension]` value type `dereference` -> `Dimension` but
   * `instanceType` -> `Array<Dimension>`
   *
   * @return loaded type
   *
   * @see #isInstanceType
   * @see #dereference
   */
  instanceType(failIfMissing?: boolean): Type | null;

  /**
   * Look up the C3 value type that represents this instance type. E.g. if `instanceType` -> `Array<Dimension>` then
   * `instanceValueType` -> `[Dimension]` i.e. corresponding `ArrayType`
   *
   * @return value type or null if this is not an instance type
   *
   * @see #isInstanceType
   * @see #instanceType
   */
  instanceValueType(failIfNot?: boolean): ValueType | null;

  /**
   * Return boxed type for the given value type.
   *
   * @see Boxed
   */
  boxType(): Type;

  /**
   * Return boxed type reference for the given value type.
   *
   * @see ReferenceType
   * @see Boxed
   */
  boxTypeRefType(): ReferenceType;

  /**
   * Return this value type if a not boxed or value type that was boxed.
   *
   * @see #boxType
   */
  unboxType(): ValueType | null;

  /**
   * Returns this value type if a primitive; if a boxed primitive, unboxes the reference; otherwise returns null.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @return primitive type or null
   */
  unboxPrimitiveType(failIfNot?: boolean): PrimitiveType | null;

  /**
   * Returns this value type if a collection; if a boxed collection, unboxes the reference; otherwise returns null.
   *
   * @param failIfNot if true, throw an error instead of returning null
   * @return collection type or null
   */
  unboxCollectionType(failIfNot?: boolean): CollectionType | null;

  /**
   * Box the given value for the value type.
   *
   * @param value that needs to be boxed
   * @return Boxed object
   */
  boxValue(value: any): WithType | null;

  /**
   * Unbox the given value for the value type.
   *
   * @param Boxed value that needs to be unboxed
   * @return unboxed primitive
   */
  unboxValue(obj: Obj | null): any;

  /**
   * `true` if this value type needs boxing during serialization even when serialized value type is known. E.g. when
   * value is a result of an action call. This check is performed to to ensure strongly typed deserialization. E.g. if
   * method return type is `int` then there is no need to box numeric value in json as caller can deserialize it
   * correctly. However if method return type is `any` then we need to box integers, numbers, datetime etc to ensure
   * strongly typed semantic. Similarly `[any]` will required boxing of elements.
   */
  needsValueBoxing(): boolean;

  /**
   * Guess which primitive type a value fits most closely. For null values or when no primitive type matches, return
   * null.
   *
   * @param value value to examine
   * @return matched primitive type or null
   *
   * @see guessTypeRestrictions
   */
  static guessType(value: any, failIfNone?: boolean): PrimitiveType | null;

  /**
   * Guess the corresponding C3 PrimitiveType from Java class (i.e. Long.class -> PrimitiveType.ofInt())
   */
  static guessTypeFromJavaClass(value: any, failIfNone?: boolean): PrimitiveType | null;

  /**
   * Guess the corresponding C3 PrimitiveType from Python class
   */
  static guessTypeFromPythonClass(value: any, failIfNone?: boolean): PrimitiveType | null;

  /**
   * Guess which primitive type a value fits most closely. For null values or when no primitive type matches, return
   * null.
   *
   * The conventions of the language binding affect the result. Java's rich set of types mean that values are highly
   * descriptive, while JavaScript has only "number" for all numeric values. Python falls in between with distinct
   * integer and floating point types.
   *
   * If the parameter testContent is false, values are **not** inspected inside to determine if they could be converted.
   * For example, guessType with the string `"4.0"` will return String
   * (even though the value when parsed could be a Double or even an Int).
   * See #convertValue for explicit conversion.
   *
   *
   * | value       | result      |
   * |-------------|-------------|
   * | `4`         | Int         |
   * | `3.9`       | Double      |
   * | `"four"`    | String      |
   * | `"4.0"`     | String      |
   * | `true`      | Boolean     |
   * | `null`      | `null`      |
   *
   * If the parameter testContent is true and the type is determined to be a string,
   * the string will be parsed to attempt to extract the (narrowest) type it could be converted to.
   * That type will then be returned.
   * For example, guessConvertibleType("12", testContent=true) will return ByteType.
   * As an exception, FloatType is not considered (for efficiency); all parsable decimals will return DoubleType.
   */
  static guessConvertibleType(value: any, testContent?: boolean, failIfNone?: boolean): PrimitiveType | null;

  /**
   * Infer value type from a C3 value. If the type cannot be determined, `any` is returned. Only values which are
   * assignment compatible will be matched (unless testContent is true).
   *
   * Null values can never be guessed and will always return `any`.
   *
   * @param value value to guess type of
   * @param testContent if true and the value is a string, attempts to parse string content to determine type
   * @return guessed type or `any` if specific type cannot be determined
   *
   * @see #guessType
   */
  static guessTypeOrAny(value: any, testContent?: boolean): ValueType;

  /**
   * Return a string that represents the type of the value, useful in error messages where a value cannot be handled
   * such as conversion. Note that if this isn't a made type or a natural primitive, the native label (such as the
   * Java class name) is returned.
   */
  static guessTypeName(v: any): string;

  /**
   * Infer serializable value type from a C3 or native value. If the type cannot be determined, null is returned.
   *
   * Null values can never be guessed and will always return null, or throw an exception if failIfNone is true.
   *
   * @param value to guess the serializable type of
   * @param failIfNone if true, throw an exception instead of returning null
   */
  static guessSerializableType(value: any, failIfNone?: boolean): ValueType | null;

  /**
   * Infer serializable value type from a C3 or native value. If the type cannot be determined, `any` is returned.
   * Only values which are assignment compatible will be matched.
   *
   * Null values can never be guessed and will always return `any`.
   *
   * @param value to guess serializable type of
   * @return guessed serializable type or `any` if specific type cannot be determined
   *
   * @see #guessSerializableType
   */
  static guessSerializableTypeOrAny(value: any): ValueType;

  /**
   * Whether the specified value's natural value type is exactly the same values as this value type. This will ignore
   * the value modifier for non-empty values so both `!int` and `int` will return true for `7`.
   *
   * @see #isSame
   */
  isSameValue(value: any): boolean;

  /**
   * Whether this value type is the same or a sub-type of the specified value type. This tests the value type
   * hierarchy, not the acceptability of value assignment. For the latter, use #isAssignableTo. In addition, this
   * tests generic bindings.
   *
   * For example, {@link IntType} isA {@link NumberType}, but `int` !isA `any` because **IntType** is not a sub-type
   * of {@link AnyType}. Also, `[int]` isA `collection<int>` because {@link ArrayType} is a sub-type of
   * {@link CollectionType} and they have isA generic bindings (`E: int`).
   *
   * @see TypeMeta#isA
   * @see #isSame
   * @deprecated(details="Use `#isAssignableTo` for acceptability of assignment or `TypeMeta#isA` to test type hierarchy.")
   */
  isA(other: ValueType): boolean;

  /**
   * Whether this value type is the same or a sub-type of the specified value type. This tests the value type
   * hierarchy, not the acceptability of value assignment. For the latter, use #isAssignableTo. In addition, this
   * tests generic bindings.
   *
   * For example, {@link IntType} isA {@link NumberType}, but `int` !isA `any` because **IntType** is not a sub-type
   * of {@link AnyType}. Also, `[int]` isA `collection<int>` because {@link ArrayType} is a sub-type of
   * {@link CollectionType} and they have isA generic bindings (`E: int`).
   *
   * @see TypeMeta#isA
   * @see #isSame
   * @deprecated(details="Use `#IsAssignableTo` for acceptability of assignment or `TypeMeta#isA` to test type hierarchy.")
   */
  isA(decl: string): boolean;

  /**
   * Whether all values of this type can be directly assigned to a field of the specified type.
   *
   * This is the most convenient way to ask "is this type usable in a context requiring the other type?"
   * For example all `int` values are assignable to `int`, `number`, `any`, and `int | [int]` values.
   *
   * Note that this takes into account generic variables for collection types so `[int]` is assignable to
   * `collection<int>`, but not `collection<string>` (and not to other collection types).
   *
   * This is the inverse of #isAssignableFrom (and is implemented using it).
   *
   * @see #isAssignableFrom
   * @see #isSame
   */
  isAssignableTo(other: ValueType): boolean;

  /**
   * Whether all values of this type can be directly assigned to a field of the specified type.
   *
   * This is the most convenient way to ask "is this type usable in a context requiring the other type?"
   * For example all `int` values are assignable to `int`, `number`, `any` and `int | [int]` values.
   *
   * Note that this takes into account generic variables for collection types so `[int]` is assignable to
   * `collection<int>`, but not `collection<string>` (and not to other collection types).
   *
   * This is the inverse of #isAssignableFrom (and is implemented using it).
   *
   * @see #isAssignableFrom
   * @see #isSame
   */
  isAssignableTo(decl: string): boolean;

  /**
   * Whether all values of the specified type can be directly assigned to a field of this type.
   *
   * This is a convenient way to ask "is the other type usable in a context requiring this one?" For example `int`,
   * `number`, `any` and `int | [int]` values are all assignable from `int`.
   *
   * Note that this takes into account generic variables for collection types so `collection<int>` is assignable from
   * `[int]`, but not `collection<string>`. (And other collection types with `int` elements.)
   *
   * @see #isConvertibleFrom
   * @see #isAssignableValue
   * @see #convertValue
   * @see #isAssignableTo
   */
  isAssignableFrom(other: ValueType): boolean;

  /**
   * Whether the specified value can be assigned to this type. This is similar to
   * `isAssignableFrom(ValueType.guessType(value))`, except that it handles null and values of unknown type.
   *
   * @see #isAssignableFrom
   * @see #guessType
   */
  isAssignableValue(value: any): boolean;

  /**
   * Whether values of the specified type can potentially be converted to this type. This is the weakest form of
   * compatibility and only makes sense on values since the types may be generally incompatible (not #isSame nor
   * #isAssignableTo).
   *
   * For example `string.isConvertibleFrom(double)` is true since all double values can be converted to strings.
   * However, `double.isConvertibleFrom(string)` is _also_ true, since there exists a conversion from string to double.
   * But, not every string is a valid double, so #convertValue may fail at runtime if given a string that is not a
   * valid double representation.
   *
   * @see #isAssignableFrom
   * @see #isConvertibleValue
   * @see #convertValue
   */
  isConvertibleFrom(other: ValueType): boolean;

  /**
   * Whether specified value can potentially be converted to this type.
   *
   * @param testContent if set to `true` will effectively perform conversion so with `testContent` set and this method
   *                    returning `true` it is guaranteed that runtime conversion will also succeed.
   *
   * @see #isAssignableFrom
   * @see #convertValue
   */
  isConvertibleValue(value: any, testContent?: boolean): boolean;

  /**
   * Calculates "distance" between this and other value types as defined by integer where:
   *  - 0 - means that value types are same
   *  - 1 - means that other is assignable to this value type
   *  - 2 - means that other is convertible to this value type
   *  - PrimitiveType.ofInt().maxValue() - means that other is not even convertible to this value type
   */
  distance(other: ValueType): number;

  /**
   * Calculates "distance" between this and provided value where:
   *  -  0 - means that value's natural value type is exactly the same as this value type.
   *  -  1 - means that value can be assigned to this value type, which is a non-abstract type.
   *  -  2 - means that value is a "WrappedValue", and the value being wrapped has a `valueDistance` of 0 or 1.
   *  -  3 - means that value can be assigned to this value type, which is an abstract type.
   *  -  4 - means that value is a number and the value type is a number type.
   *  -  5 - means that value is convertible to this value type (without testing content).
   *  -  6 - means that value is convertible to this value type (with testing content).
   *  -  7 - means that value is null or any, so technically is convertible to this value type.
   *  -  8 - means that value is not a string and the value type is a string type,
   *           or it means that this value type is native, everything can be assign to this value type.
   *  -  9 - means that value is a "WrappedValue", and the value being wrapped is convertible to the given value type.
   *  - -1 - means that value is not even convertible to this value type.
   */
  valueDistance(value: any, testContent?: boolean): number;

  /**
   * Convert the specified value to this primitive type. If the value is null or cannot be converted, return null.
   * If failIfInvalid is true, a non-convertible value will throw an error.
   *
   * Note that "null" includes similar values such as JavaScript's `undefined`. The actual value returned for null will
   * be appropriate to the language binding, for example Python's `None` singleton. For JavaScript, conversion of
   * `null` and `undefined` return the given value. Similarly, conversion of fractional numbers to integers uses the
   * language binding conventions, typically truncation towards zero.
   *
   * Here are some examples for PrimitiveType.Int.convertValue:
   *
   * | value       | failIfInvalid | result      |
   * |-------------|---------------|-------------|
   * | `4`         | false         | `4`         |
   * | `4`         | true          | `4`         |
   * | `3.9`       | false         | `3`         |
   * | `3.9`       | true          | `3`         |
   * | `"4.0"`     | false         | `4`         |
   * | `"4.0"`     | true          | `4`         |
   * | `"four"`    | false         | `null`      |
   * | `"four"`    | true          | *error*     |
   * | `null`      | false         | `null`      |
   * | `null`      | true          | `null`      |
   * | `undefined` | false         | `undefined` |
   * | `undefined` | true          | `undefined` |
   *
   * @param value value to convert
   * @param failIfInvalid whether to throw an error if conversion fails
   * @return value or null if not convertible
   */
  convertValue(value: any, failIfInvalid?: boolean): any;

  /**
   * Convert the specified value to this value type. If the value cannot be converted or is null [ or empty ] then
   * invokes provided callback.
   *
   * @see #convertValue
   */
  convertValueWithDflt(value: any, dfltConversion: λFunction<any, any>): any;

  /**
   * Convert a c3 object to java runtime class
   * @param value
   *           c3 object to convert.
   * @param failIfInvalid
   *           whether to throw error if the conversion fails.
   *
   * @see {@link Ann.Java#runtimeClassName}
   */
  convertToJavaRuntime(value: any, failIfInvalid?: boolean): T | null;

  /**
   * Produce a string serialization of the value for this type. If the value is null, the produced string is null.
   * If this is a primitive type, the natural representation is produced. Otherwise if **StringSerializable**,
   * the `toString` method is called. Otherwise, null is returned.
   *
   * @param value value to serialize as a string
   * @param failIfNone throw an error instead of returning null if no string serialization exists
   *
   * @see StringSerializable#toString
   */
  valueToString(value: any, failIfNone?: boolean): string | null;

  /**
   * Instantiate a value of this type from the serialized string. If the string is null, the produced value is null.
   * If this is a primitive type, the natural representation is parsed. Otherwise if **StringSerializable** the
   * `fromString` method is called.
   *
   * @see StringSerializable#fromString
   */
  valueFromString(s: string | null, failIfInvalid?: boolean): any;

  /**
   * Produce a json serialization of the provided value for this value type. If the value is null, the returned json is
   * null.
   *
   * @param value
   *        The value to serialize.
   *
   * @return the json serialization of the value
   */
  valueToTypedJson(value: any): any | null;

  /**
   * Produce a json string serialization of the value for this type.
   */
  valueToTypedJsonString(value: any): string | null;

  /**
   * Produce a json serialization of the provided value for this value type. If the value is null, the returned json is
   * null. The produced json should not contain any type information or boxing. This is used mostly for ensuring that
   * pure json is not converted and to pass C3 value instances to external (non-type-aware) libraries.
   *
   * @param value
   *        The value to serialize.
   *
   * @return the json serialization of the value
   */
  valueToJson(value: any): any | null;

  /**
   * Produce a json string serialization of the value for this type. If the value is null, produces null.
   * The produced json should not contain any type information or boxing. This is used mostly for ensuring that
   * pure json is not converted and to pass C3 value instances to external (non-type-aware) libraries.
   */
  valueToJsonString(value: any): string | null;

  /**
   * Instantiate a value of this type from the serialized json. If the json is null, the produced value is null.
   */
  valueFromJson(json: any | null, failIfInvalid?: boolean): any;

  /**
   * Instantiate a value of this type from the serialized json string. If the json string is null, the produced value is
   * null.
   */
  valueFromJsonString(json: string | null, failIfInvalid?: boolean): any;

  /**
   * Instantiate a value of this type from a boxed json.
   * See {@link documentation-features.c3doc} for the formal documentation for "boxed json".
   */
  valueFromJsonWithType(json: any | null, failIfInvalid?: boolean): any;

  /**
   * Produce a HttpResponse serialization of the provided value for this value type. If this value type is Streamable,
   * then should attempt to also stream it in the HttpResponse.
   *
   * @param value
   *        The value to serialize as HttpResponse.
   *
   * @return the HttpResponse serialization of the value
   */
  valueToHttpResponse(value: any, req: HttpRequest): HttpResponse;

  /**
   * Produce a value from provided HttpRequest. If value type is Streamable, then should stream directly from
   * HttpRequest without immediately reading http request body.
   *
   * @param value
   *        The value instantiated from HttpRequest.
   *
   * @return the value represented by HttpRequest
   */
  valueFromHttpRequest(req: HttpRequest): T;

  /**
   * Validates the provided value, i.e. populates all defaults and ensures resulting value is valid i.e. #isSameValue
   * and satisfies all constraints. Also handles #defaultEmptyValue if this value type #hasDefaultEmptyValue
   * and provided value is null.
   *
   * @param value
   *      Value that needs to be validated
   * @param asFunctionArg
   *      Apply function argument validation rules
   * @param forJava
   *      Apply validation and conversion rules that are specific to Java
   * @param failIfInvalid
   *      Throw an exception if validation fails
   * @return true if provided value is valid i.e. #isSameValue and satisfies all constraints.
   */
  validateValueWithDefaults(value: T | null, asFunctionArg: boolean | null, forJava: boolean | null, failIfInvalid?: boolean): T | null;

  /**
   * Validates if the the provided value is valid i.e. #isAssignableValue and satisfies all constraints
   *
   * @param value
   *      Value that needs to be validated
   * @param failIfInvalid
   *      Throw an exception if validation fails
   * @return true if provided value is valid i.e. #isSameValue and satisfies all constraints.
   */
  validateValue(value: any, failIfInvalid?: boolean): boolean;

  /**
   * @return predicate that tests if value is valid i.e. #isAssignableValue and satisfies all constraints.
   */
  valueValidator(): λPredicate<T | null>;

  /**
   * @return `true` if this type defines any constraints such as `non empty`
   */
  hasConstraints(): boolean;

  /**
   * @return `true` if this type defines any constraints such as `non empty` or has default values or requires any other
   *         form of validation i.e. reason to use `#validateValueWithDefaults`
   */
  hasValidation(asFunctionArg?: boolean): boolean;

  /**
   * @return 0 if provided values are equal; -1 if v1 < v2 and 1 if v1 > v2. Note that null == null and null > non null
   */
  compareValues(v1: any, v2: any): number;

  /**
   * @return value comparator lambda as described in #compareValues.
   */
  valueComparator(): λBiFunction<T | null, T | null, number> | null;

  /**
   * @return value comparator lambda in a descending order as described in #compareValues.
   */
  valueComparator(descending: boolean): λBiFunction<T | null, T | null, number> | null;

  /**
   * @return the appropriate `ValueConverter` for values of the given class.
   */
  valueConverter(valueClass: any): any;

  /**
   * @return value comparator lambda returning if the values are same
   */
  isSamePredicate(kind?: string | null): λBiPredicate<T | null, T | null> | null;

  /**
   * @return default empty value for this value type that is typically not `null`; this is value that on Val.isEmpty
   *         check returns `true`. However some value types such as `int` or `function` do not have non null empty
   *         values. E.g. default empty value for boolean is `false` and for collections an empty collection.
   */
  defaultEmptyValue(): any;

  /**
   * @return `true` if this value type has #defaultEmptyValue that is not null
   */
  hasDefaultEmptyValue(): boolean;

  /**
   * @return initial value for this value type; this is typically a non null instance but not necessarily same as
   *         #defaultEmptyValue. E.g. for `int` #initialValue is 0 while #defaultEmptyValue is `null`.
   */
  initialValue(): any;

  /**
   * @return true if this primitive type has an enum type (`string enum Interval`) or an explicit list of enumerated
   * values (`string enum('one', 'two')`).
   */
  hasEnum(): boolean;

  /**
   * If this type has an enumeration of possible values, those possible values.
   *
   * @see hasEnum
   */
  enumValues(): C3.Array<any>;

  /**
   * If this value type has an enumeration of possible values, those possible values.
   *
   * @param scope
   *         scope for the {@link Ann.Value#possibles `@value(possibles)`} C3 expression. This is basically parent where
   *         this value type is defined. Such as C3 type or a C3 tuple.
   * @param failIfUnknown
   *         if true, throw an error if the possible values cannot be determined
   * @return all possible values if known; e.g. all boolean values or all enum values
   */
  possibleValues(scope?: Tuple | null | TypeMeta | null | Obj | null | null, failIfUnknown?: boolean): C3.Array<any>;

  /**
   * @return cached parsed expression for @value(possibles) annotation
   */
  possibleValuesExpr(): Expr | null;

  /**
   * @return true if value for this value type is empty
   */
  isEmptyValue(v: any): boolean;

  /**
   * Returns a type which can accommodate all of the passed value types. This is as narrow as necessary, but will be
   * expanded so that all passed value types are #isAssignableTo the returned type.
   *
   * @param types
   *        one or more types to be merged into a single type
   * @return merged value type
   */
  static mergeValueTypes(...types: ValueType | null[]): ValueType | null;

  /**
   * @return array type with this as element type.
   */
  arrayType(): ArrayType;

  /**
   * @return set type with this as element type.
   */
  setType(): SetType;

  /**
   * @return stream type with this as element type.
   */
  streamType(): StreamType;

  /**
   * @return map type with `string` as key type and this as element type.
   */
  mapType(): MapType;

  /**
   * @return map type with provided type and this as element type.
   */
  mapTypeOf(keyType: ValueType): MapType;

  /**
   * @return `true` if this is a EventStream or references any event streams
   */
  hasEventStream(): boolean;

  /**
   * Produce a user-friendly label for this value type. This will be some of what appears in #toString, but will _not_
   * be complete and cannot be used for serialization. This is intented to be used in the UI to summarize data being
   * displayed.
   */
  toLabel(): string;

  /**
   * @return built instance of this value type; i.e. instance bound to a parent type typically by resolving references
   *         and generic variable bindings. Note that if this value type is invalid call will still succeed but will set
   *         appropriate metadata issue on a parent type.
   *
   * @param scope
   *        C3 Type-system scope for this value type
   * @param required
   *        if set and this value type is invalid will return generic instance of this value type
   * @param context
   *        description / context to be used when generating MetadataIssue for parent type if this value type is invalid
   *
   * @see DeclaredReferenceType
   */
  build(scope: TypesysScope, required: boolean, context: λSupplier<string>): ValueType | null;

  /**
   * @return true if this instance was constructed with #build vs just by parsing DSL.
   */
  isBuilt(): boolean;

  /**
   * Calls specific method on visitor based on instance of this ValueType.
   */
  visit(visitor: any): T | null;

  /**
   * @return Java class that can hold instance of this value; if `box` is true will return boxed Java class even if
   *         primitive is required
   */
  javaClass(box: boolean): any;

  /**
   * @return Python class that can hold instance of this value
   */
  get pyClass(): any;

  /**
   * @return Java Type that can hold instance of this value
   */
  javaJType(spec?: any): any;

  /**
   * @return cache key prefix containing modifiers like `!`, '?', '!?'
   */
  cacheKeyPrefix(): string | null;

  /**
   * @return ValueType with all varBindings bound to `any`, only if refVarBindings weren't "declared" on the "raw"
   * c3typ files.
   * Uses {@link ReferenceType#hadDeclaredVarBindings} to decide if refVarBindings were declared.
   */
  bindAllGenericVars(scope: TypesysScope): ValueType;

  /**
   * @return True if the value type should be persisted as a serialized value
   */
  isPersistSerialized(): boolean;

  /**
   * @return The serialized value type for this value type if {@link isPersistSerialized} returns true.
   */
  serializedValueType(): ValueType | null;

  /**
   * Get names of all data (e.g. non-enum, non-const...) fields for this type. Concretely, we have:
   * ReferenceType: {@link TypeMeta#dataFieldTypeNames} of {@link ReferenceType#dereferenceMeta}
   * CollectionType: {@link ValueType#dataFieldTypeNames} of {@link CollectionType#elementType}
   * TupleType (named): {@link TupleFieldType#name}s of {@link TupleType#fieldTypes}
   * Everything else: empty list
   *
   * @return a list of field names.
   */
  dataFieldTypeNames(): C3.Array<string | null>;

  /**
   * Execute provided lambda against this ValueType and recursively against all other ValueTypes referenced in the
   * declaration of this ValueType.
   * e.g., an {@link AnyOfType}'s {@link AnyOfType#restrictions}
   *       an {@link ArrayType}'s {@link ArrayType#elementType}, etc.
   */
  eachReferencedValueType(action: λConsumer<ValueType | null>): void;

  /**
   * The following value types should json object conversion to extract type / value if json is object structure
   */
  skipJsonObjectConversion(): boolean;

  makeValue(from: any): any;

  emptyValue(): any;

  /**
   * @return the factory method name for this primitive type (e.g., "ofInt", "ofStr", "ofDbl", "ofBool").
   */
  factoryMethodName(): string;

  /**
   * @return a code expression that instantiates this value type (e.g., "PrimitiveType.ofInt()", "ArrayType.ofStr()").
   *         can be used by code generators and tests.
   */
  factoryMethodExpr(): string;

  /**
   * If #serializedType is a reference type (the most common case), return that value type. This is a convenience for
   * `serializedType().asReferenceType()` plus the null checks. In addition, any unbound generic variables on the
   * reference type are bound to `any`.
   *
   * @see #serializedType
   */
  get serRefType(): ReferenceType | null;

  /**
   * @return `binary` primitive type
   */
  static ofBinary(): BinaryType;

  /**
   * @return `boolean` primitive type
   */
  static ofBool(): BooleanType;

  /**
   * @return `byte` primitive type
   */
  static ofByte(): ByteType;

  /**
   * @return `datetime` primitive type
   */
  static ofDateTime(): DateTimeType;

  /**
   * @return `date` primitive type
   */
  static ofDateOnly(): DateTimeType;

  /**
   * @return `datetime` primitive type with nanosecond precision
   */
  static ofDateTimeNanos(): DateTimeType;

  /**
   * @return `datetime` primitive type with millisecond precision
   */
  static ofDateTimeMillis(): DateTimeType;

  /**
   * @return `datetime` primitive type with microsecond precision
   */
  static ofDateTimeMicros(): DateTimeType;

  /**
   * @return `decimal` primitive type
   */
  static ofDecimal(): DecimalType;

  /**
   * @return `double` primitive type
   */
  static ofDbl(): DoubleType;

  /**
   * @return `float` primitive type
   */
  static ofFloat(): FloatType;

  /**
   * @return `int` primitive type
   */
  static ofInt(): IntType;

  /**
   * @return `int32` primitive type
   */
  static ofInt32(): Int32Type;

  /**
   * @return `int16` primitive type
   */
  static ofInt16(): Int16Type;

  /**
   * @return `bigint` primitive type
   */
  static ofBigInt(): BigIntType;

  /**
   * @return untyped `json` primitive type
   */
  static ofJson(): JsonType;

  /**
   * @return untyped `json` primitive type
   */
  static ofUntypedJson(): JsonType;

  /**
   * @return typed `json` primitive type
   */
  static ofTypedJson(): JsonType;

  /**
   * @return `number` primitive type
   */
  static ofNum(): NumberType;

  /**
   * @return `string` primitive type
   */
  static ofStr(): StringType;

  /**
   * Return a list of primitive types whose values can be assigned into this type.
   *
   * For example, `long.assignableTypes()` return an array including `int` because can be safely be assigned to `long`.
   *
   * @see #isAssignableFrom
   */
  assignableFromTypes(): C3.Array<PrimitiveType | null>;

  /**
   * Get the type name of the boxed type for this primitive type.
   *
   * @see ValueType#isBoxedPrimitive
   * @see ValueType#unboxType
   */
  boxedTypeName(): string;

  /**
   * Get the smallest (negative for signed values) value representable by this fixed-size numeric type. For non-numeric
   * types, it is null.
   *  - `int`: -2⁶³ (-9,223,372,036,854,775,808)
   *  - `int32`: -2³¹ (-2,147,483,648)
   *  - `byte`: -2⁷ (-128)
   *  - `char`: 0
   *  - `double`: -1.8 × 10³⁰⁸
   *  - `float`: -3.4 × 10³⁸
   *  - `datetime`: Jan. 1, 1583 (earlier values can be created, but are outside the ISO 8601 spec)
   *
   * Note that this is only relevant for fixed-size numeric types; `decimal` has no a priori limit.
   */
  minValue(): any;

  /**
   * Get the largest value representable by this fixed-size numeric type. For non-numeric types, it is null.
   *  - `int`: 2⁶³-1 (9,223,372,036,854,775,807)
   *  - `int32`: 2³¹-1 (2,147,483,647)
   *  - `byte`: 2⁷-1 (127)
   *  - `char`: U+10FFFF
   *  - `double`: 1.8 × 10³⁰⁸
   *  - `float`: 3.4 × 10³⁸
   *  - `datetime`: Dec. 31, 9999 (later values can be created, but are outside the ISO 8601 spec)
   *
   * Note that this is only relevant for fixed-size numeric types; `decimal` has no a priori limit.
   */
  maxValue(): any;

  /**
   * Guess which primitive type from the restriction list a value fits most closely.
   * For null values or when no primitive type matches, return null.
   *
   * Values in the restriction list should be primitive types or boxed primitive (reference) types.
   * Other types are skipped. If there are no appropriate types in the list, null is returned.
   *
   * If the natural type of the value (using #guessType) appears in the list, that one is returned.
   * Otherwise, matching (using #isAssignable) is attempted to each of the types in the list
   * and the first one that succeeds is returned.
   *
   * This makes the order of types significant in cases where values can be accepted by
   * multiple types, in particular the numeric types in JavaScript.
   *
   * @param value value to examine
   * @param restrictions list of value types to match against
   * @return matched primitive type or null
   *
   * @see guessType
   * @see isAssignable
   */
  static guessTypeRestrictions(value?: any, restrictions?: C3.Array<ValueType | null>): PrimitiveType | null;

  /**
   * @return serialization type which is represented by this primitive.
   *
   * @see #serializedType
   */
  serType(): Type | null;

  /**
   * @return enum type that declares the values that are constraints for values of this primitive type.
   *
   * @see Enum
   */
  enumType(): Type | null;

  /**
   * Return a list of all the canonical primitive types.
   */
  static all(): C3.Array<PrimitiveType | null>;

  /**
   * Get the primitive type that corresponds to the specified string. The canonical name is matched, along with a few
   * natural aliases (such as "integer" for "int").
   *
   * @see name
   */
  static forName(name: string | null, failIfMissing?: boolean): PrimitiveType | null;

  /**
   * Calls specific method on primitive visitor based on instance of this primitive type.
   */
  visitPrimitive(visitor: any): T | null;

  /**
   * The basic DSL keyword for this type, such as `double` or `boolean`. This does not include variations such as
   * (`date` or `datetime with millis`) or modifiers (`!` and `?`).
   */
  keyword(): string;

  /**
   * Determines whether this primitive value type should be defined wild when translated java in the context it is defined.
   */
  isWild(baseDeclaration?: ValueType | null, usage?: string | null): boolean;

  /**
   * @return an anonymized value based on the provided {@link Anonymizer.Model} and input. The input may or may not be
   * used in the anonymization. Also, see {@link Anonymizer.anonymize} and {@link Collection.anonymize} to anonymize
   * different kinds of data in C3 Type System. Internally, {@link Anonymizer.Model.anonFunc} is used to anonymize the
   * value.
   *
   * @see Anonymizer.anonymize
   * @see Collection.anonymize
   * @see Anonymizer.Model.anonFunc
   */
  anonymize(input: E | null, model: Anonymizer.Model): E | null;

  /**
   * If this primitive represents the serialization of a type, return that type.
   *
   * @see #serializedType
   */
  dereferenceSerialized(): Type | null;
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

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λPredicate<T> {
  (t: T): boolean
}
