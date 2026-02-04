// TypeScript definitions for the C3 type UiSdlReactTesting

/**
 * @remarks this represents a value passed to a method that expects an instance of UiSdlReactTesting
 */
declare interface IUiSdlReactTesting {
}

/**
 * @remarks this represents a made instance of UiSdlReactTesting
 */
declare class UiSdlReactTesting extends Obj {

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
  static fromJson(json: any | null): UiSdlReactTesting | null;

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
  static fromJsonString(json: string | null): UiSdlReactTesting | null;

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
  static fromXmlString(xml: string | null): UiSdlReactTesting | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlReactTesting | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlReactTesting;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlReactTesting;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlReactTesting;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlReactTesting | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlReactTesting | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlReactTesting;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlReactTesting;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlReactTesting;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlReactTesting;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlReactTesting;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlReactTesting;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlReactTesting;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlReactTesting;

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
  withoutFieldAtPath(path: string): UiSdlReactTesting;

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
  withoutField(field: string | null): UiSdlReactTesting;

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
  withoutField(field: FieldType | null): UiSdlReactTesting;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlReactTesting;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlReactTesting;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlReactTesting;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlReactTesting;

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
  defaultField(field: string): UiSdlReactTesting;

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
  defaultField(field: FieldType): UiSdlReactTesting;

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
  unsetField(field: string): UiSdlReactTesting;

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
  unsetField(field: FieldType): UiSdlReactTesting;

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
  removeField(field: string): UiSdlReactTesting;

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
  removeField(field: FieldType): UiSdlReactTesting;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlReactTesting;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlReactTesting;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlReactTesting;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlReactTesting;

  mergeJson(json: any | null): UiSdlReactTesting;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlReactTesting;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlReactTesting;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlReactTesting | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlReactTesting | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlReactTesting | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlReactTesting | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlReactTesting | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlReactTesting | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlReactTesting | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlReactTesting | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlReactTesting | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlReactTesting;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlReactTesting;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlReactTesting;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlReactTesting;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlReactTesting;

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
  static make(fields: any, withDefaults?: boolean): UiSdlReactTesting;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlReactTesting;

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
  afterMake(): UiSdlReactTesting;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlReactTesting;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlReactTesting>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlReactTesting;

  /**
   * Async function that imports the given type through a federated import.
   * @param typeName
   *           The name of the type to be imported
   * @returns The type imported
   */
  static importType(typeName?: string | null): C3.Promise<any> | null;

  /**
   * Async function that imports the given component type through a federated import.
   * @param metadataId
   *           The id of the component's metadata
   * @returns The component imported
   */
  static importComponent(metadataId?: string | null): C3.Promise<any> | null;

  /**
   * Async function that creates a spy for the input functionName on the componentType federated module.
   *
   * To create a spy on an imported method used in a different file, use:
   * `SpecHelper.createSpy(fileName,methodName,spec)`
   *
   * IMPORTANT: In order for spies to work, the calling code must be imported with
   * SpecHelper.importType and the spy has to be created on the calling code.
   *
   * Example: If you are spying on a function "helperFunction" called by
   * "MyTypeA.typeAFunction", and your test will call "typeAFunction", then you have
   * to import "MyTypeA.typeAFunction" with SpecHelper.importType and spy with
   * SpecHelper.createSpy('MyTypeA', 'helperFunction').
   *
   * NOTE 1: Even though "helperFunction" might not originally be defined in MyTypeA,
   * it has to be spied on that type, specially if MyTypeA statically imports "helperFunction",
   * otherwise you might create a spy on a separate federated module and it will never fire.
   *
   * Note 2: If all imports are done dynamically through federated imports, then you can
   * create the spies directly in the type that defines the function you want to spy on, in the
   * previous example, that could be: SpecHelper.createSpy('HelperType', 'helperFunction').
   *
   * Note 3: The intention of this function is to aid in unit testing, where you know the internals
   * of a type and want to shallowly spy on its dependencies, this is not intended to be used
   * to spy on deep dependencies, where you don't know how they were imported.
   *
   * @param componentType
   *           Name of the component to import functions from
   * @param functionName
   *           Name of the function to create spy for
   * @param spec
   *           The implementation spec
   * @return The spy instance that will get called whenever the `functionName` is called
   */
  static createSpy(componentType?: string | null, functionName?: string | null, spec?: UiSdlSpySpec | null): C3.Promise<any> | null;

  /**
   * Async function that creates a spy for the input functionName on the componentType federated module.
   *
   * To create a spy on an imported method used in a different file, use:
   * `ReactTesting.createSpy(fileName,methodName, module, spec)`
   *
   * Example: If you are spying on a function "helperFunction" called by
   * "MyTypeA.typeAFunction", and your test will call "typeAFunction", then you have
   * to import "MyTypeA" with import * as myTypeA from '@c3/ui/MyTypeA' and then
   * ReactTesting.createSpy('MyTypeA', 'helperFunction', myTypeA).
   *
   * Example 2: If is a function that is being called within a module you want to test,
   * you can create a spy for that funciton by doing:
   *
   * ReactTesting.createSpy('UiSdlCanaryRenderCondition', 'useConfig', UiSdlCanaryRenderConditionModule, {
   *  returnValue: 'Hello World'
   * });
   *
   * which will create a spy for the 'useConfig' function within the 'UiSdlCanaryRenderConditionModule' module.
   *
   * NOTE 1: Even though "helperFunction" might not originally be defined in MyTypeA,
   * it has to be spied on that type, specially if MyTypeA statically imports "helperFunction",
   * otherwise you might create a spy on a separate federated module and it will never fire.
   *
   * Note 2: If all imports are done dynamically through federated imports, then you can
   * create the spies directly in the type that defines the function you want to spy on, in the
   * previous example, that could be: ReactTesting.createSpy('HelperType', 'helperFunction', helperTypeModule).
   *
   * Note 3: The intention of this function is to aid in unit testing, where you know the internals
   * of a type and want to shallowly spy on its dependencies, this is not intended to be used
   * to spy on deep dependencies, where you don't know how they were imported.
   *
   * @param componentType
   *           Name of the component to import functions from
   * @param functionName
   *           Name of the function to create spy for
   * @param moduleWithRewire
   *           Module for the componentType found by importing via `import * as Module from '@c3/ui/FileName';`
   * @param spec
   *           The implementation spec
   * @return The spy instance that will get called whenever the `functionName` is called
   */
  static createSpy(componentType?: string | null, functionName?: string | null, moduleWithRewire?: any, spec?: UiSdlSpySpec | null): C3.Promise<any> | null;

  /**
   * Async function that mocks an imported module with a different object. Useful when you need to mock, for example,
   * a `uiSdlPluggable` type's function
   * Use case:
   * In the file 'MyCoolComponent.ts':
   * import allTheUiPluggableTypes from '@c3/ui/types/pluggables/myPluggableNamespace'
   *
   * Then:
   * SpecHelper.mockImportedObject(
   *   'MyCoolComponent',
   *   'allTheUiPluggableTypes',
   *   {
   *     MyPluggableType: {
   *       someFunction: () => { doSomeStuff; }
   *     }
   *   }
   * );
   *
   *
   * @param componentType
   *           The file under test, or the file that contains the import to be mocked
   * @param importedObjectName
   *           The name of the imported object you wish to mock
   * @param mockedObject
   *           The object to swap in place of the original imported object
   */
  static mockImportedObject(componentType?: string | null, importedObjectName?: string | null, mockedObject?: any): C3.Promise< | null> | null;

  /**
   * Function similar to mockImportedObject, but takes a component instead of just the name of a component to be
   * imported. Example usage: importing custom `useTranslate` React hook
   *
   *
   * @param componentObject
   *           The object to be mocked
   * @param importedObjectName
   *           The name of the imported object you wish to mock
   * @param mockedObject
   *           The object to swap in place of the original imported object
   */
  static mock(componentObject?: any, importedObjectName?: string | null, mockedObject?: any): void;

  /**
   * Spies on the action stream that an UiSdlEpic listens for.
   * Can be used to determine if certain action(s) has been received by the async effect.
   * @example
   * var spy = spyOnEffect(MyTestEffect);
   * // ...
   * expect(spy).toHaveBeenCalledWith({
   *  type: 'Test.Action',
   *  payload: 'Test Message',
   * });
   *
   * @param effectType
   *           The name of the UiSdlEpic type to be spied on.
   * @param functionName
   *           The name of the UiSdlEpic method corresponding to the epic.
   * @param callThrough
   *           Whether to call through the original effect
   * @return The spy instance that will get called whenever the effect receives an action
   */
  static spyOnEffect(effectType?: string | null, functionName?: string | null, callThrough?: boolean): C3.Promise<any> | null;

  /**
   * Spies on redux actions of a given action type.
   * Can be used to determine whether a redux action has been dispatched.
   *
   * EXAMPLE NEEDED!!!
   *
   * @param actionType
   *           The type of the action (UiSdlReduxAction.actionType)
   * @return A jasmine spy that listens for actions of the target action type
   */
  static spyOnReduxAction(actionType?: string | null): C3.Promise<any> | null;

  /**
   * Recursively freezes the given props object. This is useful for testing that
   * components do not inadvertently mutate their props. React props are intended
   * to be read-only.
   *
   * @param props
   *           The props to freeze.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
   */
  static freezeProps(props?: Obj | null): Obj | null;

  /**
   * Async function that removes the mock of the function
   * @param componentType
   *           Name of the component to import functions from
   * @param functionName
   *           Name of the function to remove the mock of
   */
  static removeDependencies(componentType?: string | null, functionName?: string | null): C3.Promise< | null> | null;

  /**
   * Removes the mock created by the mock function
   *
   * @param moduleToRemoveRewire
   *           Module object with the function we want to remove the mock of
   * @param functionName
   *           Name of the function to remove the mock of
   */
  static removeMock(moduleToRemoveRewire?: any, functionName?: string | null): void;

  /**
   * Async function that renders a component given its metadataId
   * @param metadataId
   *           Id of the component of which to render
   */
  static renderByMetadataId(metadataId?: string | null): C3.Promise< | null> | null;

  /**
   * Clear the rendered UI/Component from test page
   */
  static clearRenderedContent(): void;

  /**
   * If an async function or Promise is used inside an epic, you shouldn't be using expectObservable.
   * Instead you should be testing it as so:
   *
   * Separate your epic into two different functions:
   *
   * For example, if your epic was originally
   *
   * export async function itemsLoadEpic(actionStream, stateStream) {
   *   return actionStream.pipe(
   *     flatMap(async function (action) {
   *       const state = stateStream.value;
   *       // async epic logic
   *     });
   *   );
   *
   * separate the logic into two functions with the format
   *
   * export function itemsLoadEpic(actionStream, stateStream) {
   *   return actionStream.pipe(
   *     flatMap(async function (action) {
   *       const state = stateStream.value;
   *       return await loadItemsObservable(action, state);
   *     });
   *   );
   *
   * export async function loadItemsObservable(action, state) {
   *   // epic logic
   * }
   *
   * The reason this is done is because expectObservable is not designed to test epics that use async functions/promise.
   * It is better to test the async function separately rather than the epic as a whole if this is the case. To test an async function, you
   * can do so with the format
   *
   * describe('::loadItemsObservable', function () {
   *   beforeEach(function () {
   *     this.state = SpecHelper.getState();
   *     // state setup logic
   *     this.expectedResult = // expected result of this observable
   *     this.action = loadItemsAction(...action parameters);
   *     this.observable = loadItemsObservable(this.action, this.state);
   *   });
   *
   *   it('loads items correctly', function () {
   *     observable.subscribe(
   *       function (result) {
   *         expect(result).toEqual(this.expectedResult);
   *       },
   *       function (error) {
   *         fail(error);
   *       }
   *     );
   *   });
   * });
   *
   * Creates expectations for a given observableStream and a particular async effect.
   * @see https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md
   *
   * @param done
   *           The function to call when all the expectations are completed
   * @param spec
   *           The expectation options
   * @param stateStream
   *           Optional initial state as passed from redux observable
   */
  static expectObservable(done?: λNullConsumer | null, spec?: UiSdlExpectObservableSpec | null, stateStream?: UiSdlObservable | null): C3.Promise<any> | null;

  /**
   * Wait until certain condition satisfies.
   * @param func
   *           The function that validates if the target condition has been reached
   * @param scope
   *           The scope (thisArg) to call the validator function
   * @param timeout
   *           The maximum wait time in milliseconds
   * @param message
   *           The error message to reject with when it times out
   * @param interval
   *           The interval for polling the validator function
   * @return A promise that resolves when the target condition is reached within the time
   *         constraint, and rejects otherwise.
   */
  static waitUntil(func?: λNullPredicate | null, scope?: any, timeout?: number | null, message?: string | null, interval?: number | null): C3.Promise< | null> | null;

  /**
   * Async function that initializes a component with redux store and state
   * @param componentId
   *           Id of the component of which to get the state of
   * @param metadata
   *           The metadata to mock in the Redux state
   * @param initialMetadata
   *           The initialMetadata to mock in the Redux state
   * @param render
   *           Boolean to render the component;
   * @return the redux store
   */
  static initComponent(componentId?: string | null, metadata?: C3.Map<string | null, any>, initialMetadata?: C3.Map<string | null, any>, render?: boolean): C3.Promise<any> | null;

  /**
   * Returns the Redux slice of the component
   * @param componentId
   *           Id of the component of which to get the state of
   * @param metadata
   *            The metadata to mock in the Redux state
   * @param initialMetadata
   *           The initialMetadata to mock in the Redux state
   * @return The state for the component.
   */
  static getState(componentId?: string | null, metadata?: C3.Map<string | null, any>, initialMetadata?: C3.Map<string | null, any>): UiSdlReduxState | null;

  /**
   * Dispatches an action through the redux store
   *
   * @param action
   *           The action to dispatch.
   * @returns the action that was dispatched
   */
  static dispatch(action?: UiSdlReduxAction<any> | null): UiSdlReduxAction<any> | null;

  /**
   * Helper function to destroy the store in between specs
   */
  static destroyStore(): void;

  /**
   * Shallow renders the given element in a wrapper with an IntlProvider and the given translations.
   * Use this to test a React component with translations while rendering a partial React tree.
   *
   * @param node
   *           The React element to shallow render.
   * @param options
   *           Mount renderer props. See enzyme.shallow.
   * @param translations
   *           A map of translations to include in the Intl context.
   * @returns A React wrapper of the shallow rendered element.
   */
  static shallowWithIntl(node?: any, options?: any, translations?: C3.Map<string | null, string | null>): any;

  /**
   * Mounts the given element in a wrapper with an IntlProvider and the given translations.
   * Use this to test a React component with translations while rendering the full React tree.
   *
   * @param node
   *           The React element to mount.
   * @param options
   *           Mount renderer props. See enzyme.mount.
   * @param translations
   *           A map of translations to include in the Intl context.
   * @returns A React wrapper of the mounted element.
   */
  static mountWithIntl(node?: any, options?: any, translations?: C3.Map<string | null, string | null>): any;

  /**
   * Checks if a component is rendered. It is useful when a dynamic component is asynchronously rendered,
   * and test should wait for a given `timeout` for successful rendering before proceeding with an assertion block.
   * If a component is rendered successfully during the given `timeout`, the function returns a {Promise} that resolves
   * to `true`. Otherwise the function returns a {Promise} that resolves to `false`.
   *
   * @param {ReactWrapper} wrapper
   *        The wrapper instance around the rendered component.
   * @param {string} selector
   *         The selector to check if a component is rendered.
   * @param {number} timeout
   *         The timeout (in seconds) during which performed a check if a component is rendered.
   * @returns {Promise} The {Promise} that resolves to `true` in case of successful rendering, and to `false` otherwise.
   */
  static isComponentRendered(wrapper?: any, selector?: string | null, timeout?: number | null): C3.Promise<boolean> | null;

  /**
   *  Checks if a component is rendered. It is useful when a dynamic component is asynchronously rendered,
   *  and test should wait for a given `timeout` for successful rendering before proceeding with an assertion block.
   *  If a component is rendered successfully during the given `timeout`, the function returns a {Promise} that resolves
   *  to `true`. Otherwise the function returns a {Promise} that resolves to `false`.
   *
   *  @param {string} selector
   * The selector to check if a component is rendered.
   *  @param {number} timeout
   * The timeout (in seconds) during which performed a check if a component is rendered.
   *  @param {HTMLElement} container
   * The container around the rendered component.
   *  @returns {Promise} The {Promise} that resolves to `true` in case of successful rendering, and to `false` otherwise.
   */
  static isComponentRendered(selector?: string | null, timeout?: number | null, container?: any): C3.Promise<boolean> | null;

  /**
   * Async function that given a tenant name, it returns the name of its default tag.
   * @param tenant
   *           The tenant name
   * @returns The name of the tenant's default tag
   */
  static detectCurrentTag(tenant?: string | null): C3.Promise<string | null> | null;

  /**
   * Renders the given element in a wrapper with an IntlProvider and the application's `en.json` translations.
   * Consumers can provide an additional `translations` map to supplement or override the application's translations.
   * Use this to test a React component with translations while rendering the full React tree.
   *
   * @param node
   *           The React element to mount.
   * @param additionalTranslations
   *           A map of translations to supplement or override the application's `en` translations in the Intl context.
   * @returns A [render result](https://testing-library.com/docs/react-testing-library/api/#render-result)
   */
  static renderWithIntl(node?: any, additionalTranslations?: C3.Map<string | null, string | null>): any;

  /**
   * Renders the given element in a wrapper with a ReactReduxProvider.
   * Use this to test a React component which leverages Redux directly (i.e. via ReactReduxContext or useSelector).
   *
   * @param node
   *           The React element to mount.
   * @param initialState
   *           The initialState to initialize with the Redux store.
   * @param connected
   *           If true, initializes a Redux store with the UI framework's rootReducer and epic middleware for rendering connected components.
   * @returns A [render result](https://testing-library.com/docs/react-testing-library/api/#render-result)
   */
  static renderWithState(node?: any, initialState?: UiSdlReduxState | null, connected?: boolean): any;

  /**
   * Renders the given element in a wrapper with a ReactReduxProvider and an IntlProvider.
   * Consumers can provide an additional `translations` map to supplement or override the application's translations.
   * Use this to test a React component with translations while rendering the full React tree.
   *
   * @param node
   *           The React element to mount.
   * @param initialState
   *           The initialState to initialize with the Redux store.
   * @param connected
   *           If true, initializes a Redux store with the UI framework's rootReducer and epic middleware for rendering connected components.
   * @param additionalTranslations
   *           A map of translations to supplement or override the application's `en` translations in the Intl context.
   * @param container
   *          The container around the rendered component.
   * @returns A [render result](https://testing-library.com/docs/react-testing-library/api/#render-result)
   */
  static renderWithStateAndIntl(node?: any, initialState?: UiSdlReduxState | null, connected?: boolean, additionalTranslations?: C3.Map<string | null, string | null>, container?: any): any;

  /**
   * Spies on the action stream that an UiSdlEpic listens for.
   * Can be used to determine if certain action(s) has been received by the async epic.
   * @example
   * var spy = spyOnEpic(MyTestEpic);
   * // ...
   * expect(spy).toHaveBeenCalledWith({
   *  type: 'Test.Action',
   *  payload: 'Test Message',
   * });
   *
   * @param epicType
   *           The name of the UiSdlEpic type to be spied on.
   * @param epicWithRewire
   *           The module of the UiSdlEpic type to be spied on.
   * @param functionName
   *           The name of the UiSdlEpic method corresponding to the epic.
   * @param callThrough
   *           Whether to call through the original epic
   * @return The spy instance that will get called whenever the epic receives an action
   */
  static spyOnEpic(epicType?: string | null, epicWithRewire?: any, functionName?: string | null, callThrough?: boolean): C3.Promise<any> | null;

  /**
   *  Checks if an element with the given role is rendered. Useful when the element will be rendered asynchronously, and
   *  the test needs to wait for the assertion block. It will throw an error if it fails to find the element in time.
   *
   *  @param {string} role
   * The role to check if an element is rendered.
   *  @param {waitForOptions} waitForOptions
   * The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
   *  @param {any} options
   * The options for React Testing Library's queryAllByRole. See [here](https://testing-library.com/docs/queries/byrole#api).
   *  @returns {Promise} The {Promise} that throws an error if the element never renders.
   */
  static waitForRole(role?: string | null, waitForOptions?: any, options?: any): C3.Promise<any> | null;

  /**
   *  Checks if an element with the given text is rendered. Useful when the element will be rendered asynchronously, and
   *  the test needs to wait for the assertion block. It will throw an error if it fails to find the element in time.
   *
   *  @param {string} text
   * The text to check if an element is rendered.
   *  @param {waitForOptions} waitForOptions
   * The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
   *  @param {any} options
   * The options for React Testing Library's queryAllByText. See [here](https://testing-library.com/docs/queries/bytext#api).
   *  @returns {Promise} The {Promise} that throws an error if the element never renders.
   */
  static waitForText(text?: string | null, waitForOptions?: any, options?: any): C3.Promise<any> | null;

  /**
   *  Checks if an element with the given test id is rendered. Useful when the element will be rendered asynchronously, and
   *  the test needs to wait for the assertion block. It will throw an error if it fails to find the element in time.
   *
   *  @param {string} id
   * The id to check if an element is rendered.
   *  @param {waitForOptions} waitForOptions
   * The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
   *  @param {any} options
   * The options for React Testing Library's queryAllByTestId. See [here](https://testing-library.com/docs/queries/bytestid#api).
   *  @returns {Promise} The {Promise} that throws an error if the element never renders.
   */
  static waitForTestId(id?: string | null, waitForOptions?: any, options?: any): C3.Promise<any> | null;

  /**
   *  Checks if a spy has been called a certain number of times. Useful when the spy call will happen asynchronously, and
   *  the test needs to wait for the assertion block. It will throw an error if the spy does not have the correct number of calls in time.
   *
   *  @param {jasmine.Spy} spy
   * The spy to check if it has been called
   *  @param {number} calls
   * The number of times we expect the spy to have been called.
   *  @param {waitForOptions} waitForOptions
   * The options for React Testing Library's waitFor. See [here](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor).
   *  @returns {Promise} The {Promise} that throws an error if the element never renders.
   */
  static waitForSpyCall(spy?: any, calls?: number | null, waitForOptions?: any): C3.Promise<any> | null;
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

interface λNullPredicate {
  (): boolean
}

interface λNullConsumer {
  (): void
}

interface λPredicate<T> {
  (t: T): boolean
}
