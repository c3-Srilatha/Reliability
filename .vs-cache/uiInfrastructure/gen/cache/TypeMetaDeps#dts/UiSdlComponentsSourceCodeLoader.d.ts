// TypeScript definitions for the C3 type UiSdlComponentsSourceCodeLoader

/**
 * Produces source files for component instance metadata (meta/*.json)
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlComponentsSourceCodeLoader
 */
declare interface IUiSdlComponentsSourceCodeLoader {
}

/**
 * Produces source files for component instance metadata (meta/*.json)
 *
 * @remarks this represents a made instance of UiSdlComponentsSourceCodeLoader
 */
declare class UiSdlComponentsSourceCodeLoader extends Obj {

  /**
   * Generates a source file for each component instance metadata.
   */
  static produceAll(loaderData?: UiSdlComponentsSourceCodeLoader | null): UiSdlFileLoaderContent | null;

  static indent(input?: string | null, level?: number | null): string | null;

  static metaPath(rootPackageName?: string | null, subPath?: string | null): string | null;

  static handleMissing(message?: string | null, failIfMissing?: boolean): any;

  static logWithTimestamp(message?: string | null): void;

  /**
   * Finds the enum types used within a piece of TypeScript code and returns a map of type names to true
   *
   * @param code
   *           The TypeScript code to search through
   */
  static findUsedEnums(code?: string | null): C3.Map<string | null, boolean>;

  /**
   * Returns a map of {@link Type#name}s to {@link MetadataFileValue} for a given set of types and
   * extension with proper source code implementation.
   *
   * Our .ts and .tsx implementations (ESM modules) cannot easily include duplicate code and
   * the current C3 platform APIs that retrieve code for a type, concatenate all the implementations
   * of the type's hierarchy.
   *
   * @param types
   *           The array of types to get the gien extension source code for
   * @param extension
   *           The extension/ implementation language to fetch source code for
   * @returns A of {@link Type#name}s to {@link MetadataFileValue} whose content is the source code for
   *           the given extension.
   */
  static filesForTypes(types?: C3.Array<TypeMeta | null>, extension?: string | null): C3.Map<string | null, Pkg.File.Value | null>;

  /**
   * Creates a new mapping where all keys mapped to the same value are stored under
   * the value as key.
   *
   * Example:
   *      groupByValue({a: 'lower', b: 'lower', A: 'upper'})
   *      // returns {lower: ['a','b'], upper: ['A']}
   *
   * @param mapping
   *      The object whose values are going to be used as keys.
   */
  static groupByValue(mapping?: C3.Map<string | null, any>): C3.Map<string | null, any>;

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
  static fromJson(json: any | null): UiSdlComponentsSourceCodeLoader | null;

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
  static fromJsonString(json: string | null): UiSdlComponentsSourceCodeLoader | null;

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
  static fromXmlString(xml: string | null): UiSdlComponentsSourceCodeLoader | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlComponentsSourceCodeLoader | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlComponentsSourceCodeLoader;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlComponentsSourceCodeLoader;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlComponentsSourceCodeLoader;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlComponentsSourceCodeLoader | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlComponentsSourceCodeLoader | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlComponentsSourceCodeLoader;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlComponentsSourceCodeLoader;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlComponentsSourceCodeLoader;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlComponentsSourceCodeLoader;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlComponentsSourceCodeLoader;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlComponentsSourceCodeLoader;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlComponentsSourceCodeLoader;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlComponentsSourceCodeLoader;

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
  withoutFieldAtPath(path: string): UiSdlComponentsSourceCodeLoader;

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
  withoutField(field: string | null): UiSdlComponentsSourceCodeLoader;

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
  withoutField(field: FieldType | null): UiSdlComponentsSourceCodeLoader;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlComponentsSourceCodeLoader;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlComponentsSourceCodeLoader;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlComponentsSourceCodeLoader;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlComponentsSourceCodeLoader;

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
  defaultField(field: string): UiSdlComponentsSourceCodeLoader;

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
  defaultField(field: FieldType): UiSdlComponentsSourceCodeLoader;

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
  unsetField(field: string): UiSdlComponentsSourceCodeLoader;

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
  unsetField(field: FieldType): UiSdlComponentsSourceCodeLoader;

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
  removeField(field: string): UiSdlComponentsSourceCodeLoader;

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
  removeField(field: FieldType): UiSdlComponentsSourceCodeLoader;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlComponentsSourceCodeLoader;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlComponentsSourceCodeLoader;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlComponentsSourceCodeLoader;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlComponentsSourceCodeLoader;

  mergeJson(json: any | null): UiSdlComponentsSourceCodeLoader;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlComponentsSourceCodeLoader;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlComponentsSourceCodeLoader;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlComponentsSourceCodeLoader | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlComponentsSourceCodeLoader | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlComponentsSourceCodeLoader | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlComponentsSourceCodeLoader | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlComponentsSourceCodeLoader | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlComponentsSourceCodeLoader | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlComponentsSourceCodeLoader | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlComponentsSourceCodeLoader | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlComponentsSourceCodeLoader | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlComponentsSourceCodeLoader;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlComponentsSourceCodeLoader;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlComponentsSourceCodeLoader;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlComponentsSourceCodeLoader;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlComponentsSourceCodeLoader;

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
  static make(fields: any, withDefaults?: boolean): UiSdlComponentsSourceCodeLoader;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlComponentsSourceCodeLoader;

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
  afterMake(): UiSdlComponentsSourceCodeLoader;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlComponentsSourceCodeLoader;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlComponentsSourceCodeLoader>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlComponentsSourceCodeLoader;

  static produceOne(componentId: string): string | null;

  /**
   * Generates source files for multiple component instances metadata.
   */
  static produceBatch(componentIds: C3.Array<string | null>): UiSdlCodeGenBatchResult | null;

  /**
   * Generates source file for default page wrapper.
   */
  static generatePageWrapper(): string | null;

  /**
   * Generates TSX source code for a single component with the given metadata.
   *
   * @param componentId
   *           The id of the component for which to generate source code.
   * @param componentMetadata
   *           UI metadata of the component.
   * @return the generated source file content.
   */
  static generateUiSdlComponentSourceCode(componentId: string, componentMetadata: any): string | null;

  /**
   * Calls {@link generateUiSdlComponentSourceCode} for each input
   * @param inputs
   *            Array of objects ({fst: "", snd: {}})
   *            fst represents `componentId` parameter in generateUiSdlComponentSourceCode;
   *            snd represents `componentMetadata` parameter in generateUiSdlComponentSourceCode
   * @return outputs from {@link generateUiSdlComponentSourceCode} in the same order as the inputs parameter
   */
  static generateUiSdlComponentSourceCodeBatch(inputs?: any | null): C3.Array<UiSdlMetadataLoaderResult | null>;

  /**
   * @param spec
   *          A filter spec to determine the completeness of the return values
   * @return a list of all {@link UiSdlComponent} subtype names
   */
  static uiSdlComponentSubTypesNames(spec?: UiSdlComponentSubTypeSpec | null): C3.Array<string | null>;

  /**
   * Function that adds quotes to expressions that are not valid React code.
   */
  static addQuotesToNonJSXExpressions(expression?: any): string | null;

  /**
   * Converts a given component id to an expression that evaluates to a JSX element.
   *
   * @param componentId
   *        Id of the component.
   * @param props
   *        Props of the component.
   * @param componentIndex
   *        Index of the component.
   *
   * @returns A string that is the JSX expression of the component.
   */
  static jsxExpressionFromId(componentId?: string | null, props?: C3.Map<string | null, any>, componentIndex?: number | null): string | null;

  /**
   * Converts an array of strings to a string of an object in form `{'item': item}`.
   *
   * @param importNames
   *          Names of the imports to make an object for.
   *
   * @returns A string that is an object in form `{'item': item}`
   */
  static createObjectFromGeneratedImports(importNames?: C3.Array<string | null>): string | null;

  /**
   * Gets the valueType name associated with a field
   */
  static getValueTypeName(typeName?: string | null, fieldName?: string | null): string | null;

  /**
   * Gets the default values of a type
   *
   * @param typeName
   *        The type to get default values
   *
   * @returns A map of field names to default value
   */
  static getDefaultValuesForType(typeName?: string | null): any | null;

  /**
   * Used to test the internal deepMake functionality.
   *
   * @param metadataString
   *        The initial metadata of the instance as string
   * @param componentTypeName
   *        The type of the instance to be made
   *
   * @returns Stringified initial metadata with default values added.
   */
  static deepMakeFromMetadataString(metadataString: string, componentTypeName?: string | null): string | null;

  /**
   * This is only used for UiSdlGridLayoutReact, and because of that, it is very ad-hoc. Exposed for testing.
   *
   * Deeply finds childComponents and creates a JSON stringified object that references them, it removes all other fields.
   *
   *     '{ type: "UiSdlGridLayoutReact", children: [{ childComponent: {id: "MyApp.MyComponent"} }] }'
   *     => {
   *          imports: ['import MyApp_MyComponent from "..."'],
   *          deepComponents: '{ children: [{ childComponent: {id: MyApp_MyComponent} }] }'
   *        }
   *     }
   * @param metadata The component metadata as stringified json
   * @returns an object containing a collection of import statements and the serialized deep component references
   */
  static deepComponentsFromMetadataString(metadata?: string | null): any | null;

  /**
   * Used to test the internal circular dependencies detection functionality.
   *
   * @param componentsReferenceList
   *        Mapping of component ids to their referencing component ids.
   */
  static findCircularDependencies(componentsReferenceList: C3.Map<string | null, C3.Array<string | null>>): void;

  /**
   * Helper function to create a componentRefs map to hold all react components.
   * This is needed because component imports could start with a lowercase letter (vs Title case),
   * in which case, React treats them as builtin HTML elements vs React components.
   * A way to let React know they are React components is to create a dot separated
   * component name. By creating an object called componentRefs and referencing all
   * React components through this object, we can let React know they are components and they
   * need to be transpiled to React.createElement(componentRef.componentName)
   *
   * @param referencedComponents
   *           The components that need to be stored in the componentRefs object.
   * @return the generated componentRefs object.
   */
  static generateComponentRefsForComponents(referencedComponents?: C3.Array<Type | null>): string | null;

  /**
   * Generate import statements and mapping of switch conditions to corresponding React elements for {@link UiSdlSwitchRenderer}.
   *
   * @param componentMetadata
   *        Metadata of the component
   * @param importStatements
   *        Import statements to concat to
   *
   * @returns Import statements and mapping of each switch condition to the React component that should be rendered when the condition is met.
   */
  static generateSwitchRendererComponentRefs(componentMetadata?: C3.Map<string | null, any>, importStatements?: string | null): C3.Map<string | null, string | null>;
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
