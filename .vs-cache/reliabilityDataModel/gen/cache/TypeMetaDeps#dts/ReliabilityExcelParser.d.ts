// TypeScript definitions for the C3 type ReliabilityExcelParser

/**
 * Excel parser that loads in all of the data associated with an {@link AssetClass}.
 *
 * @see ReliabilityAssetOnboardingConfig
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityExcelParser
 */
declare interface IReliabilityExcelParser {
}

/**
 * Excel parser that loads in all of the data associated with an {@link AssetClass}.
 *
 * @see ReliabilityAssetOnboardingConfig
 *
 * @remarks this represents a made instance of ReliabilityExcelParser
 */
declare class ReliabilityExcelParser extends Obj  {

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
  static fromJson(json: any): ReliabilityExcelParser | null;

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
  static fromJsonString(json: string): ReliabilityExcelParser | null;

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
  static fromXmlString(xml: string): ReliabilityExcelParser | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityExcelParser | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityExcelParser;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityExcelParser;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityExcelParser;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityExcelParser>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityExcelParser>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityExcelParser;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityExcelParser;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityExcelParser;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityExcelParser;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityExcelParser;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityExcelParser;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityExcelParser;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityExcelParser;

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
  withoutFieldAtPath(path: string): ReliabilityExcelParser;

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
  withoutField(field: string): ReliabilityExcelParser;

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
  withoutField(field: FieldType): ReliabilityExcelParser;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityExcelParser;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityExcelParser;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityExcelParser;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityExcelParser;

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
  defaultField(field: string): ReliabilityExcelParser;

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
  defaultField(field: FieldType): ReliabilityExcelParser;

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
  unsetField(field: string): ReliabilityExcelParser;

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
  unsetField(field: FieldType): ReliabilityExcelParser;

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
  removeField(field: string): ReliabilityExcelParser;

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
  removeField(field: FieldType): ReliabilityExcelParser;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityExcelParser;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityExcelParser;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityExcelParser;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityExcelParser;

  mergeJson(json: any): ReliabilityExcelParser;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityExcelParser;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityExcelParser;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityExcelParser>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityExcelParser> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityExcelParser> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityExcelParser>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityExcelParser> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityExcelParser> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityExcelParser> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityExcelParser>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityExcelParser>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityExcelParser;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityExcelParser;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityExcelParser;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityExcelParser;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityExcelParser;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityExcelParser;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityExcelParser;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): ReliabilityExcelParser;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityExcelParser;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityExcelParser> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityExcelParser;

  /**
   * Loads asset hierarchy template data, most often generated by #preprocessExcelTemplateFile.
   *
   * If the template data is based on a specific system, the asset hierarchy data will have
   * been stored in a `resource/{system name}` folder, e.g. `resource/AGT`. Otherwise, one
   * must provide a `templateDir` to specify the data's location.
   *
   * @param systemName
   *        The system name, e.g. `AGT`. This is ignored if `templateDir` is provided. If this is
   *        used, types are expected to exist in `** /{systemName}/ ** /{typeName}.csv`.
   * @param packageName
   *        The package name. Defaults to `reliabilityDataModel`.
   * @param useTestResources
   *        Whether to use resources from test folder (used for tests only).
   * @param endExistingRelations
   *        When set to true, ends all existing relations regardless of whether they are
   *        associated with the assets being upserted or not. Upserts only relations loaded
   *        from the new template.
   * @param templateDir
   *        Takes precedence over `systemName`. The directory where the template data is stored.
   *        Files should be stored in `resource/{templateDir}/{typeName}/{typeName}.csv`.
   * @param sourceFileMeta
   *        Metadata pointing to the original file this data was loaded from. This will be added
   *        to all entities that mix {@link AssetOnboardingMeta}.
   *
   * @see ReliabilityAssetOnboardingConfig#assetTypeName
   * @see ReliabilityAssetOnboardingConfig#additionalTypeNames
   */
  static loadTemplateData(systemName: string, packageName?: string, useTestResources?: boolean, endExistingRelations?: boolean, templateDir?: string = '\'\'', sourceFileMeta?: AssetOnboardingSourceFile): void;

  /**
   * Updates `start` and `end` field values on relation objects from `newObjects` and `existingObjects` arrays.
   *
   *   - If endExistingRelations is true, set existingObjects `end` field to now.
   *   - If a relation object exists both in `newObjects` and `existingObjects`, do not update `start` and `end` field values.
   *   - If a relation object exists in `newObjects` but does not exist in `existingObjects`, set `start` field value as `now`.
   *   - If a relation object `from` has changed and `to` remains same, update `end` field value of existing relation.
   *
   * @param newObjects
   *        List of new {@link TimedIntervalValue} objects from loading data set.
   * @param existingObjects
   *        Stream of existing {@link TimedIntervalValue} relation objects of the same type that have not yet ended.
   * @param now
   *        Current datetime.
   * @param endExistingRelations
   *        If set true, ends all the existing relations and upserts only relations loaded from the template.
   * @param isTreeStructure
   *        Whether the relation structure is a tree structure.
   * @return Updated list of {@link TimedIntervalValue} relation objects to be upserted.
   */
  static updateStartEndDatesForRelationTypes(newObjects?: Array_Type<any>, existingObjects?: Stream<Obj>, now?: DateTime, endExistingRelations?: boolean, isTreeStructure?: boolean): Array_Type<any> | null;

  /**
   * Updates `start` and `end` field values on relation objects from `newObjects` and `existingObjects` arrays.
   *
   *   - If endExistingRelations is true, set existingObjects `end` field to now.
   *   - If a relation object exists both in `newObjects` and `existingObjects`, do not update `start` and `end` field values.
   *   - If a relation object exists in `newObjects` but does not exist in `existingObjects`, set `start` field value as `now`.
   *   - If a relation object `from` has changed and `to` remains same, update `end` field value of existing relation.
   *
   * @param spec
   *        The spec containing all parameters for updating start and end dates for relation types.
   * @return Updated list of {@link TimedIntervalValue} relation objects to be upserted.
   */
  static updateStartEndDatesForRelationTypesWithSpec(spec?: UpdateStartEndDatesForRelationTypesSpec): Array_Type<any> | null;

  /**
   * Converts a formatted Excel file into asset class csv files conforming to type definitions.
   *
   * Note that even small deviations from the required Excel format may produce incorrect results; as such, it is highly recommended to manually verify generated results.
   *
   * @param inputPath
   *        The file path to the Excel file with `.xlsx` extension.
   * @param outputPath
   *        The relative file path to the directory to persist output csv files in the file/1/ endpoint.
   * @return The file path to the directory where output csv files were persisted.
   */
  static preprocessExcelTemplateFile(inputPath: string, outputPath: string): string;

  /**
   * *Seamlessly* load asset hierarchy template data from a formatted Excel file.
   *
   * Refer to {@link ReliabilityExcelParser#preprocessExcelTemplateFile} and {@link ReliabilityExcelParser#loadTemplateData} for parameter descriptions.
   *
   * @param inputPath
   *        The file path to the Excel file with `.xlsx` extension.
   * @param outputPath
   *        The relative file path to the directory to persist output csv files in the file/1/ endpoint.
   * @param endExistingRelations
   *        When set to true, ends all existing relations regardless of whether they are
   *        associated with the assets being upserted or not. Upserts only relations loaded
   *        from the new template.
   * @return The result containing statistics about the loading operation.
   */
  static loadExcelTemplate(inputPath: string, outputPath: string, endExistingRelations?: boolean): LoadExcelTemplateResult;

  /**
   * Function that fetches and cleans the asset hierarchy spreadsheet dataframes from `readAssetHierarchyExcelSpreadsheetGeneric` function and returns
   * a `map` of `{sheet_name: pd.DataFrame}`. Cleaning the failure modes and failure mode recommendations dataframes: transforming multi-level headers into single-level,
   * renaming columns for expected sensors and diagnostics, and removing unnamed columns.
   *
   * @param inputPath
   *        The path to the Excel spreadsheet containing the asset hierarchy data.
   * @return
   *     A map where keys are sheet names (strings) and values are Data objects
   *     containing the corresponding DataFrames read from each sheet.
   */
  static readAssetHierarchyExcelSpreadsheetInline(inputPath: string): any | null;

  /**
   * Function that reads the asset hierarchy excel spreadsheet from the given input path or file and returns
   * a `map` of `{sheet_name: pd.DataFrame}`. Spreadsheets:
   *
   * `REL_Asset_Hierarchy` - Asset hierarchy with class, facility, and sensor details
   * `Expected_Sensors` - Sensor names with units and unit type
   * `ExpSens_Diag_FailureModes` - Sensors mapped to possible failure modes
   * `FailureModes_to_RecActions` - Failure modes mapped to recommended actions
   * `Sensor_Measurement_Bounds` - Sensors mapped to their measurement bounds
   * `Events` - Logged past failure events
   * `Time_Range` - Start and end intervals for the data
   *
   *
   * @param inputPath
   *        The path to the Excel spreadsheet containing the asset hierarchy data.
   * @param file
   *        The excel spreadsheet {@link File} containing the asset hierarchy data.
   * @return
   *     A map where keys are sheet names (strings) and values are Data objects
   *     containing the corresponding DataFrames read from each sheet.
   */
  static readAssetHierarchyExcelSpreadsheetGeneric(inputPath?: string, file?: File): any | null;

  /**
   * This function is a wrapper around the private `readAssetHierarchyExcelSpreadsheetInline` function.
   *
   * @param inputPath
   *        The path to the Excel spreadsheet containing the asset hierarchy data.
   * @return A map where keys are sheet names (strings) and values are Data objects
   *         containing the corresponding DataFrames read from each sheet.
   */
  static readAssetHierarchyExcelSpreadsheet(inputPath: string): Map_Type<string, Data> | null;

  /**
   * Function that writes the asset hierarchy excel spreadsheet from the given data
   * @param data
   *        The data to be written to the Excel spreadsheet.
   * @param sheetNames
   *        A list of strings representing the names to be written for the sheets in the Excel workbook.
   * @param outputPath
   *        The path where the generated Excel file will be saved.
   * @return A File object representing the created Excel file.
   */
  static writeAssetHierarchyExcelSpreadsheetInline(data: Array_Type<any>, sheetNames: Array_Type<string>, outputPath: string): File | null;

  /**
   * Function that writes the asset hierarchy excel spreadsheet from the given data.
   * This function is a wrapper around the private `writeAssetHierarchyExcelSpreadsheetInline` function.
   *
   * @param data
   *     The data to be written to the Excel spreadsheet.
   * @param sheetNames
   *     A list of strings representing the names of the sheets in the Excel workbook.
   * @param outputPath
   *     The path where the generated Excel file will be saved.
   * @return A File object representing the created Excel file.
   */
  static writeAssetHierarchyExcelSpreadsheet(data: Array_Type<Data>, sheetNames: Array_Type<string>, outputPath: string): File | null;

  /**
   * Returns the stream of the object that wants to deserialize from a file.
   *
   * @param pkg
   *        Name of the package where the file to deserialize is located.
   * @param isTest
   *        Variable to determinate if the file is located on the src or test package.
   * @param typeName
   *        TypeMeta for the Type to deserialize.
   * @param path
   *        Path where the file is located.
   * @param continueOnErr
   *        Variable to determine if the flow should be interrupted when the deserialization fails.
   * @param isMetaData
   *        Variable to determine if the file is metadata.
   * @return Stream of `typeName` objects read from the file.
   */
  static readCsv(pkg: string, isTest: boolean, typeName: string, path: string, continueOnErr?: boolean, isMetaData?: boolean): Stream<Obj> | null;

  /**
   * @param templateDir
   *        The directory where the template data is stored.
   * @return The count of {@link ReliabilityAsset}s newly-created and edited by {@link ReliabilityExcelParser#loadExcelTemplate} function.
   */
  static countOfNewAndEditedAssets(templateDir: string): LoadExcelTemplateResult;

  /**
   * Helper method to perform additional processing on asset hierarchy data in the
   * Excel workbook before it is written to the {@link FileSystem}. This function
   * is invoked as the last step of #preprocessExcelTemplateFile and by default, it
   * does nothing. To add additional processing in a specific package, this method
   * should be overridden either when [mixed in](TypeMeta#declaredMixin) or
   * [remixed](TypeMeta#declaredRemix).
   *
   * This function should apply all modifications *in place* and return nothing.
   *
   * @param asset_hierarchy_sheet
   *        asset hierarchy data frame.
   * @param entity_collections
   *        Collection of entity objects.
   * @param asset_levels
   *        List of column names for asset levels (E.g., "L0", "L1").
   * @param customer_asset_levels
   *        List of column names for customer asset levels (E.g., "Customer L0 ID",
   *        "Customer L1 ID").
   * @param root_asset_id_column
   *        The column name of the highest asset level (most often "L0").
   * @param format_asset_id
   *        Helper function passed in to ensure asset IDs are formatted identically
   *        to the rest of the functions on this type. Accepts the following arguments:
   *
   *          - `asset_id_column`
   *          - `row`
   * @param format_id
   *        Helper function passed in to ensure non-asset IDs are formatted
   *        identically to the rest of the functions on this type. Accepts a
   *        single string argument.
   * @param row_is_valid
   *        Helper function passed in to check row validity.
   */
  static overrideEntityAssets(asset_hierarchy_sheet?: Pandas.DataFrame, entity_collections?: any, asset_levels?: Array_Type<string>, customer_asset_levels?: Array_Type<string>, root_asset_id_column?: string, format_asset_id?: FunctionType, format_id?: FunctionType, row_is_valid?: FunctionType): void;
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
