// TypeScript definitions for the C3 type TypeMeta_Deprecated

/**
 * Additional metadata for entity types.
 *
 * @see TypeMeta#db
 *
 * @remarks this represents a value passed to a method that expects an instance of TypeMeta_Deprecated
 */
declare interface ITypeMeta_Deprecated {

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
}

/**
 * Additional metadata for entity types.
 *
 * @see TypeMeta#db
 *
 * @remarks this represents a made instance of TypeMeta_Deprecated
 */
declare class TypeMeta_Deprecated extends Obj {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): TypeMeta_Deprecated;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): TypeMeta_Deprecated;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): TypeMeta_Deprecated;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  readonly pkg: Pkg;
  withPkg(pkg: IPkg): TypeMeta_Deprecated;

  /**
   * SDK json representing instance of this type
   */
  readonly json?: any;
  withJson(json: any): TypeMeta_Deprecated;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TypeMeta_Deprecated;

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
  static fromJson(json: any | null): TypeMeta_Deprecated | null;

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
  static fromJsonString(json: string | null): TypeMeta_Deprecated | null;

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
  static fromXmlString(xml: string | null): TypeMeta_Deprecated | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TypeMeta_Deprecated | null;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TypeMeta_Deprecated;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TypeMeta_Deprecated;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TypeMeta_Deprecated | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TypeMeta_Deprecated | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TypeMeta_Deprecated;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TypeMeta_Deprecated;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TypeMeta_Deprecated;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TypeMeta_Deprecated;

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
  withField(field: string, value: any, doNotConvert?: boolean): TypeMeta_Deprecated;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): TypeMeta_Deprecated;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TypeMeta_Deprecated;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TypeMeta_Deprecated;

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
  withoutFieldAtPath(path: string): TypeMeta_Deprecated;

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
  withoutField(field: string | null): TypeMeta_Deprecated;

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
  withoutField(field: FieldType | null): TypeMeta_Deprecated;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TypeMeta_Deprecated;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TypeMeta_Deprecated;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TypeMeta_Deprecated;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TypeMeta_Deprecated;

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
  defaultField(field: string): TypeMeta_Deprecated;

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
  defaultField(field: FieldType): TypeMeta_Deprecated;

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
  unsetField(field: string): TypeMeta_Deprecated;

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
  unsetField(field: FieldType): TypeMeta_Deprecated;

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
  removeField(field: string): TypeMeta_Deprecated;

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
  removeField(field: FieldType): TypeMeta_Deprecated;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TypeMeta_Deprecated;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TypeMeta_Deprecated;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TypeMeta_Deprecated;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TypeMeta_Deprecated;

  mergeJson(json: any | null): TypeMeta_Deprecated;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TypeMeta_Deprecated;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TypeMeta_Deprecated;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TypeMeta_Deprecated | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TypeMeta_Deprecated | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TypeMeta_Deprecated | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TypeMeta_Deprecated | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TypeMeta_Deprecated | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TypeMeta_Deprecated | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TypeMeta_Deprecated | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TypeMeta_Deprecated | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TypeMeta_Deprecated | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TypeMeta_Deprecated;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TypeMeta_Deprecated;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TypeMeta_Deprecated;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TypeMeta_Deprecated;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TypeMeta_Deprecated;

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
  static make(fields: any, withDefaults?: boolean): TypeMeta_Deprecated;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TypeMeta_Deprecated;

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
  afterMake(): TypeMeta_Deprecated;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TypeMeta_Deprecated;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TypeMeta_Deprecated>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TypeMeta_Deprecated;

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
  withoutDeclaredSrcPos(recursive?: boolean): TypeMeta_Deprecated;

  /**
   * Additional metadata specific to entity types.
   */
  db(failIfNotEntityType?: boolean): TypeMeta.Db | null;

  /**
   * @return True if type mixes NoSystemCols
   */
  isNoSystemCols(): boolean;

  isPersistableUpsertHelper(): boolean;

  isInvalidationDisabled(): boolean;

  isNoMetaOverrideType(): boolean;

  /**
   * Returns true if the type mixes {@link Searchable}
   */
  isSearchable(): boolean;

  /**
   * @return true if this type has a hierarchy denorm target.
   * Beneficial since Type system cache does not cache null values
   */
  isHierDenormTarget(): boolean;

  /**
   * @return true if the type is in the KV datastore and persistence can be optimized persisting the input raw values
   *         (e.g no boxing of primitive values for fields with the "any" value type.
   */
  canPersistKvRaw(): boolean;

  /**
   * @return True if the type has the field `id` and it's persistable.
   */
  hasPersistableId(): boolean;

  /**
   * @return True if the type has the field `name` and it's persistable.
   */
  hasPersistableName(): boolean;

  /**
   * @return True if the type has the field `meta` and it's persistable.
   */
  hasPersistableMeta(): boolean;

  /**
   * @return True if the type (or one of its base types) has generic bindings
   */
  hasPersistableTypeWithBindings(): boolean;

  /**
   * @return true if the type has a viewFilter or viewInclude specified
   */
  hasViewIncludeOrFilter(): boolean;

  hasShortId(): boolean;

  /**
   * @return True if instances of this type should persist the specific type bindings.  Note that for types that extend
   * this type and specify the bindings in the type definition will return false.
   */
  persistTypeWithBindings(): boolean;

  /**
   * @return false if duplicates should be removed when persisting instances of this type
   */
  persistDuplicates(): boolean;

  /**
   * @return True if the type is configured to retain a history of edits to each obj.
   */
  keepVersionHistory(): boolean;

  /**
   * @return Table name for non-external entity types (e.g. includes "C3_2_" prefix).
   */
  rootC3TableName(): string | null;

  /**
   * @return a map of all tables used for persisted collections, keyed by the field path for the collection field.
   */
  collectionTables(): C3.Map<string | null, string | null>;

  /**
   * @param unique
   *        If true, return unique indexes else non-unique indexes.
   *
   * @return list of indexes defined for this type in the @db(index) extension.
   */
  indexes(unique?: boolean): C3.Array<Db.Index | null>;

  /**
   * @return the value specified in {@link Ann.Db#datastore} (if any) or overridden in the Db.Domain.  This will
   *         currently be "kv" for data persisted in the KV store, null by default for data persisted in the c3 managed
   *         relational datastore, or the name of a specific datastore.
   */
  datastore(): string | null;

  /**
   * The datastore to maintain a parallel synchronized copy of the data for the type, typically to a system like
   * Redshift for advanced analytic querying capabilities.
   */
  secondaryDatastore(): string | null;

  /**
   * @return the {@link PgPartitionDef} for the type if it is defined and valid.
   */
  pgPartition(): PgPartitionDef | null;

  /**
   * @return list of unique indexes defined for this type in the db extension. Each entry will be an array of fields in
   * the unique index.  Index fields can optionally refer to a field of an included reference and that's why FieldPath
   * is used
   */
  uniqueConstraints(): C3.Array<C3.Array<FieldPath | null>>;

  shortIdPrefix(): string | null;

  shortIdSuffixType(): string | null;

  shortIdReservationRange(): number | null;

  /**
   * @return set of all fields used in any of the unique field sequences
   */
  allUniqueConstraintFields(): C3.Set<FieldPath | null>;

  /**
   * @return List of all collection fields (including nested) that are persisted in this type.
   */
  persistableCollectionFields(): C3.Array<FieldPath | null>;

  /**
   * @return list of all fields that have the textSearchField db annotation. For Postgres, a full text search index
   *         will be created
   */
  textSearchFields(): C3.Array<FieldPath | null>;

  /**
   * @return the list of fields comprising the primary key. If the type has a composite key, it will be the fields
   *         defined in the key type. Otherwise the id field will be returned for persistable types. For
   *         non-persistable fields, an empty array is returned.
   */
  primaryKeyFields(): C3.Array<FieldPath | null>;

  /**
   * @return The set of all read calc fields in this type
   */
  readCalcFields(): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all stored calc fields in this type and, optionally, any of its extension base types
   */
  storedCalcFields(inclExtBaseFields?: boolean): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all stored calc fields that specify a fixed period for recalc in this type and, optionally, any of
   * its extension base types
   */
  periodicCalcFields(inclExtBaseFields?: boolean): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all stored calc fields that specify a fixed schedule for recalc in this type and, optionally, any
   * of its extension base types
   */
  scheduledCalcFields(inclExtBaseFields?: boolean): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that have
   * the @db(timedValueHistoryField) annotation
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that have the
   * @db(timedValueHistoryField) annotation
   */
  timedValueFields(inclExtBaseFields?: boolean): C3.Array<string | null>;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that are the field
   * referenced in a @db(timedValueHistoryField) annotation for a timed value field
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that are the field
   *         referenced in a @db(timedValueHistoryField) annotation for a timed value field
   */
  timedValueHistoryFields(inclExtBaseFields?: boolean): C3.Map<string | null, string | null>;

  /**
   * Get the timed value history field for the specified timed value field.
   *
   * @param field
   *        The timed value field.
   *
   * @return The timed value history field for the specified timed value field.  If the specified field is not a timed
   *         value field, or is not associated with a history field, null is returned.
   */
  timedValueFieldForHistoryField(field: string): string | null;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that have
   * the @db(timedCharacteristicHistoryField) annotation
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that have the
   * @db(timedCharacteristicHistoryField) annotation
   */
  timedCharacteristicFields(inclExtBaseFields?: boolean): C3.Array<string | null>;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that are the field
   * referenced in a @db(timedCharacteristicHistory) annotation for a timed characteristic field
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that are the field
   *         referenced in a @db(timedCharacteristicHistoryField) annotation for a timed characteristic field
   */
  timedCharacteristicHistoryFields(inclExtBaseFields?: boolean): C3.Map<string | null, string | null>;

  /**
   * Get the timed characteristic history field for the specified timed characteristic field.
   *
   * @param field
   *        The timed characteristic field.
   *
   * @return The timed characteristic history field for the specified timed characteristic field.  If the specified
   *         field is not a timed characteristic field, or is not associated with a history field, null is returned.
   */
  timedCharacteristicFieldForHistoryField(field: string): string | null;

  /**
   * @return a map of timed value parent types/fields grouped by source type.
   */
  timedValuesParent(): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * Returns a map of timed characteristic parent types/fields grouped by source type.
   */
  timedCharacteristicsParent(): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * @return List of all fields that specify the {@link Ann.Db#include} annotation.
   */
  fieldsWithInclude(): C3.Array<FieldPath | null>;

  /**
   * Map, keyed by types that have fkey fields with this type as a reference type, where each element is the list of
   * the fkey field names.
   */
  fkeyParents(): C3.Map<Type | null, C3.Array<string | null>>;

  /**
   * @return calc field backward dependencies for a type
   */
  calcBwdDeps(): C3.Array<TypeBackwardDep | null>;

  /**
   * @return calc field backward dependencies for all calc fields of a type
   */
  calcBwdDepsByPathKey(): C3.Map<string | null, TypeBackwardDep | null>;

  /**
   * @return calc field backward dependencies for only calc fields that depend on a specific type
   */
  calcBwdDepsForType(type: TypeMeta): C3.Array<TypeBackwardDep | null>;

  /**
   * @return a calc field expression rewritten to replace type casting with typeIdent checks.  Note this only returns
   *         a rewritten expression if there were replaced type casts.
   *
   * FOR INTERNAL USE ONLY
   */
  rewrittenCalcFieldExpr(origExpr: string): any;

  /**
   * Determines the set of fields that trigger invalidation for the specified queue.
   *
   * @param queueType
   *        Queue type to check invalidation for.
   * @param includeBaseTypes
   *        If true, base type fields will also be included.
   * @param includeExtensionTypes
   *        If true, extension types will also be included.
   * @param ignoreSelfDeps
   *        If true, self deps (e.g. deps that have no parent) will be ignored.
   * @param forBeforeUpdate
   *        If true, only looking for deps that should be triggered during the beforeUpdate phase.
   *
   * @return the set of fields that trigger invalidation for the specified queue
   */
  triggeringFields(queueType: Type, includeBaseTypes?: boolean, includeExtensionTypes?: boolean, ignoreSelfDeps?: boolean, forBeforeUpdate?: boolean): C3.Set<string | null>;

  /**
   * Determines the set of fields that trigger invalidation for the specified key.
   *
   * @param key
   *        key describing trigger scenario
   *
   * @return the set of fields that trigger invalidation for the specified key.
   */
  _triggeringFields(scenario: string): C3.Set<string | null>;

  /**
   * @return the hierarchy denorm type for this type's hierarchy
   */
  hierDenormTarget(): HierDenormTarget | null;

  /**
   * @return acl backward dependencies for a type
   */
  aclBwdDeps(): C3.Array<TypeBackwardDep | null>;

  /**
   * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
   *
   * @return true if the schema was updated in this JVM/app
   */
  validateSchema(): boolean;

  /**
   * Called by platform when a Kv type is accessed to ensure that its schema is up to date.
   *
   * @return true if the schema was updated in this JVM/app (result of first call is cached return value).
   */
  validateKvSchema(): boolean;

  /**
   * Called by {@link validateSchema} to validate the schema for a type and all its extension types.
   *
   * @return true if the schema was updated in this JVM for the type and current app code (result of first call is
   *         cached return value).
   */
  doValidateSchema(): boolean;

  /**
   * @return List of all fields that the db engine enforces constraints on.
   */
  dbEngineConstraintFields(newRecord?: boolean): C3.Array<FieldType | null>;

  /**
   * @return true if all of the db engine constraint fields are "simple" (e.g. don't involve included references).
   */
  useSimpleDbEngineConstraintCheck(newRecord?: boolean): boolean;

  /**
   * @return The composite key type for the type, if any. The composite key type is the type in the mixin chain that
   *         directly mixes CompositeKey. For CompositeKey types themselves, this will return itself.
   */
  compositeKeyType(): Type | null;

  /**
   * @return the list of fields comprising the composite key, For any type that isA composite key and an empty
   *         array otherwise.
   */
  compositeKeyFields(): C3.Array<FieldPath | null>;

  /**
   * @return a list of all fields that are fkey fields (both array and single ref)
   */
  fkeyFields(): C3.Array<FieldPath | null>;

  /**
   * Db Extension: @return filter spec to be used for a read only fkey relationship.
   */
  fkeyRefFilter(field: string): string | null;

  /**
   * Db Extension: @return limit to be used for a read only fkey relationship.
   */
  fkeyRefLimit(field: string): number;

  /**
   * Db Extension: @return field path that is a foreign key in the reference type for a read only one to many
   * relationship.
   */
  fkeyRefFkey(field: string): string | null;

  /**
   * Db Extension: @return field path that is a key in the source type for a read only one to many relationship.
   */
  fkeyRefKey(field: string): string | null;

  /**
   * Db Extension: @return order spec to be used for a read only one to many relationship.
   */
  fkeyRefOrder(field: string): string | null;

  /**
   * @return whether this value type is an fkey reference array field.
   */
  isFkeyRefArray(field: string): boolean;

  /**
   * @return whether this value type is an fkey reference array field.
   */
  isFkeyRefArray(ft: FieldType): boolean;

  isFkeyRef(field: string): boolean;

  /**
   * @return the list of field that are the "latest characteristic" fields linked to `TimedCharacteristicHistory`
   *         fields.
   */
  latestCharacteristicsFields(): C3.Array<FieldPath | null>;

  /**
   * @return true if this C3 Type is a subtype of {@link AclEnabled}
   */
  isAclEnabled(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link AclEnabledTypes}
   */
  isAclEnabledTypes(): boolean;

  /**
   * @return true if this C3 type is a subtype of {@link JdbcStore}
   */
  isJdbcStore(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link TimedDataHeader}
   */
  isTimedDataHeader(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link IntervalDataHeader}
   */
  isIntervalDataHeader(): boolean;

  /**
   * @return true if the type supports timed fetch
   */
  isTimedValueType(): boolean;

  /**
   * @return true if the type is a timed interval type
   */
  isTimedIntervalType(): boolean;

  /**
   * @return true if the type is a {@link TimedRelation} or {@link TimedRelationRef} or {@link TimedIntervalRelation}
   * or {@link TimedIntervalRelationRef}
   */
  isTimedRelationType(): boolean;

  /**
   * @return true if the type is a timed value history type
   */
  isTimedValueHistory(): boolean;

  /**
   * @return true if the type is a {@link TimedRelation} type
   */
  isTimedRelation(): boolean;

  /**
   * @return true if the type is a timed characteristic type
   */
  isTimedCharacteristicType(): boolean;

  /**
   * @return true if the type is a timed interval characteristic history type
   */
  isTimedIntervalCharacteristicHistory(): boolean;

  /**
   * @return true if the type supports timed fetch
   */
  isTimedFetchType(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link IntervalDataPoint}
   */
  isIntervalDataPoint(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link TimedDataPoint}
   */
  isTimedDataPoint(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link TimeseriesDataPoints}
   */
  isTimeseriesDataPoints(): boolean;

  /**
   * @return true if this C3 Type is sub type of either {@link IntervalDataPoint}, {@link TimedDataPoint} or
   * {@link TimeseriesDataPoints}
   */
  isAnyTimeseriesDataPoint(): boolean;

  /**
   * @return True if the type is versionable (e.g. mixes Versionable).
   */
  isVersionable(): boolean;

  /**
   * @return True if the type is a Geography (e.g. mixes Geo).
   */
  isGeography(): boolean;

  /**
   * @return True if the type is a Geometry (e.g. mixes Geom).
   */
  isGeometry(): boolean;

  /**
   * @return True if this type mixes in the TimedDataHeader type but not the NormalizedTimeseries type
   */
  isRawTimedData(): boolean;

  isRawTimedDataPoint(): boolean;

  /**
   * @return name of the field for partitioning instances of this type for storage.
   */
  partitionKeyField(): string | null;

  /**
   * @return FieldType of the field for partitioning instances of this type for storage.
   */
  partitionKeyFieldType(): FieldType | null;

  /**
   * @return compiled partition key field expression (or id) on the given type
   */
  compiledPartitionKeyFieldExpr(): Expr.Compiled<any, any>;

  /**
   * @return True if this type mixes in the IntervalDataHeader type but not the NormalizedTimeseries type
   */
  isRawTimeseries(): boolean;

  /**
   * Checks if type is facaded for a given app. Facaded types live in a different app.
   *
   * @return true if type is facaded in an app other than the one specified. I.e. call to this type from app that is
   *         different then provided app will resolve into a remote call
   */
  isFacade(app: string): boolean;

  /**
   * @return True if entity and not generic
   */
  canBePersisted(): boolean;

  /**
   * @return True if the type has any non-fkey child collections. Includes recursive included type fields.
   */
  hasChildCollection(): boolean;

  /**
   * Whether this type is only persists its key (e.g. Persistable, Identified, Named).
   *
   * @param includePersistable
   *        if true, then types mixing {@link Persistable} will return false.  Otherwise they will return true.
   *
   * @return true if this type only persists its key.
   */
  isPersistKey(dontIncludePersistable?: boolean): boolean;

  /**
   * @return if {@link isPersistKey} returns true, the key field to be persisted (e.g. "name" or "id").
   */
  persistKeyField(): string | null;

  isNoOverlapTimedIntervalValueHistoryType(parentType: TypeMeta): boolean;

  isRawTimeseriesDataPoint(): boolean;

  isAnyNormalized(): boolean;

  isNormalizedTimedDataPoint(): boolean;

  isNormalizedTimeseriesDataPoint(): boolean;

  isArchiveable(): boolean;

  isCompositeKeyType(): boolean;

  isCompactType(): boolean;

  isSystemType(): boolean;

  isVersioned(): boolean;
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
