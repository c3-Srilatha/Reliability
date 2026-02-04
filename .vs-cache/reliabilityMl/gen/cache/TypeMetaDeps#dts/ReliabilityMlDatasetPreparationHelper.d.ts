// TypeScript definitions for the C3 type ReliabilityMlDatasetPreparationHelper

/**
 * Helper type to prepare training and inference datasets for a {@link ReliabilityAsset}.
 * If the dataset preparation fails, then the user should not proceed to downstream ML
 * tasks such as model training. This Type is mixed-in by {@link ReliabilityAsset}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlDatasetPreparationHelper
 */
declare interface IReliabilityMlDatasetPreparationHelper {

  /**
   * All {@link ReliabilityMlDatasetPreparationRun}s created as a result of
   * calling {@link prepareMlDatasets} or {@link prepareMlDatasetsBatch}.
   * They are sorted in descending order of created date, i.e. the latest
   * {@link ReliabilityMlDatasetPreparationRun} will be the first entry in
   * this array.
   */
  datasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun>;

  /**
   * The latest {@link ReliabilityMlDatasetPreparationRun}. Also, the first
   * element in the {@link #datasetPreparationRuns} array.
   */
  latestDatasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE`.
   */
  completeDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun>;

  /**
   * The latest run in {@link #completeDatasetPreparationRuns}.
   */
  latestCompleteDatasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE` project.id 'reliabilityRisk'.
   */
  completeRiskDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun>;

  /**
   * The latest run in {@link #latestCompleteRiskDatasetPreparationRun}.
   */
  latestCompleteRiskDatasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The count of {@link #completeDatasetPreparationRuns}.
   */
  countOfCompleteDatasetPreparationRuns?: number;

  /**
   * Represents the current status of data preparation based on the {@link #datasetPreparationRuns}.
   * If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
   */
  datasetPreparationStatus?: string;
}

/**
 * Helper type to prepare training and inference datasets for a {@link ReliabilityAsset}.
 * If the dataset preparation fails, then the user should not proceed to downstream ML
 * tasks such as model training. This Type is mixed-in by {@link ReliabilityAsset}.
 *
 * @remarks this represents a made instance of ReliabilityMlDatasetPreparationHelper
 */
declare class ReliabilityMlDatasetPreparationHelper extends Obj  {

  /**
   * All {@link ReliabilityMlDatasetPreparationRun}s created as a result of
   * calling {@link prepareMlDatasets} or {@link prepareMlDatasetsBatch}.
   * They are sorted in descending order of created date, i.e. the latest
   * {@link ReliabilityMlDatasetPreparationRun} will be the first entry in
   * this array.
   */
  readonly datasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun>;
  withDatasetPreparationRuns(datasetPreparationRuns: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun> | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * The latest {@link ReliabilityMlDatasetPreparationRun}. Also, the first
   * element in the {@link #datasetPreparationRuns} array.
   */
  readonly latestDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withLatestDatasetPreparationRun(latestDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE`.
   */
  readonly completeDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun>;
  withCompleteDatasetPreparationRuns(completeDatasetPreparationRuns: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun> | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * The latest run in {@link #completeDatasetPreparationRuns}.
   */
  readonly latestCompleteDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withLatestCompleteDatasetPreparationRun(latestCompleteDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE` project.id 'reliabilityRisk'.
   */
  readonly completeRiskDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun>;
  withCompleteRiskDatasetPreparationRuns(completeRiskDatasetPreparationRuns: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun> | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * The latest run in {@link #latestCompleteRiskDatasetPreparationRun}.
   */
  readonly latestCompleteRiskDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withLatestCompleteRiskDatasetPreparationRun(latestCompleteRiskDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * The count of {@link #completeDatasetPreparationRuns}.
   */
  readonly countOfCompleteDatasetPreparationRuns?: number;
  withCountOfCompleteDatasetPreparationRuns(countOfCompleteDatasetPreparationRuns: number | null): ReliabilityMlDatasetPreparationHelper;

  /**
   * Represents the current status of data preparation based on the {@link #datasetPreparationRuns}.
   * If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
   */
  readonly datasetPreparationStatus?: string;
  withDatasetPreparationStatus(datasetPreparationStatus: string | null): ReliabilityMlDatasetPreparationHelper;

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
  static fromJson(json: any): ReliabilityMlDatasetPreparationHelper | null;

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
  static fromJsonString(json: string): ReliabilityMlDatasetPreparationHelper | null;

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
  static fromXmlString(xml: string): ReliabilityMlDatasetPreparationHelper | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityMlDatasetPreparationHelper | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityMlDatasetPreparationHelper;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationHelper;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlDatasetPreparationHelper>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlDatasetPreparationHelper>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationHelper;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityMlDatasetPreparationHelper;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  withoutFieldAtPath(path: string): ReliabilityMlDatasetPreparationHelper;

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
  withoutField(field: string): ReliabilityMlDatasetPreparationHelper;

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
  withoutField(field: FieldType): ReliabilityMlDatasetPreparationHelper;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityMlDatasetPreparationHelper;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMlDatasetPreparationHelper;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityMlDatasetPreparationHelper;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMlDatasetPreparationHelper;

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
  defaultField(field: string): ReliabilityMlDatasetPreparationHelper;

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
  defaultField(field: FieldType): ReliabilityMlDatasetPreparationHelper;

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
  unsetField(field: string): ReliabilityMlDatasetPreparationHelper;

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
  unsetField(field: FieldType): ReliabilityMlDatasetPreparationHelper;

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
  removeField(field: string): ReliabilityMlDatasetPreparationHelper;

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
  removeField(field: FieldType): ReliabilityMlDatasetPreparationHelper;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMlDatasetPreparationHelper;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMlDatasetPreparationHelper;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMlDatasetPreparationHelper;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMlDatasetPreparationHelper;

  mergeJson(json: any): ReliabilityMlDatasetPreparationHelper;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMlDatasetPreparationHelper;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityMlDatasetPreparationHelper;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityMlDatasetPreparationHelper>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMlDatasetPreparationHelper> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityMlDatasetPreparationHelper> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityMlDatasetPreparationHelper>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityMlDatasetPreparationHelper> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityMlDatasetPreparationHelper> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMlDatasetPreparationHelper> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityMlDatasetPreparationHelper>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityMlDatasetPreparationHelper>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMlDatasetPreparationHelper;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMlDatasetPreparationHelper;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMlDatasetPreparationHelper;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityMlDatasetPreparationHelper;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMlDatasetPreparationHelper;

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
  afterMake(): ReliabilityMlDatasetPreparationHelper;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityMlDatasetPreparationHelper;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMlDatasetPreparationHelper> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityMlDatasetPreparationHelper;

  /**
   * Function to mark the current entity as a member of the given project, if needed for bookkeeping.
   * By default, this function does nothing, but should be overridden by a type that extends this one.
   * For an example of usage, see the {@link ReliabilityAsset} remix in the `reliability` package.
   *
   * @param project
   *        The {@link ReliabilityMl.Project} to assign this entity to.
   */
  assignToProject(project?: ReliabilityMl.Project): void;

  /**
   * Used internally during the preparation run to determine the start and end dates
   * for the dataset preparation. If the {@link ReliabilityMlDatasetPreparationSpec#materializeStart}
   * and {@link ReliabilityMlDatasetPreparationSpec#materializeEnd} are provided, then it defaults to this dates,
   * otherwise, it defaults to the start and end of the from the earliest and latest data points from
   * the {@link PointPhysicalMeasurementSeries} associated with the {@link ReliabilityAsset}.
   *
   * @param start
   *        The start datetime for the dataset preparation.
   * @param end
   *        The end datetime for the dataset preparation.
   * @return a {@link StrPair} containing the start and end dates as strings.
   */
  getMlStartEnd(start?: DateTime, end?: DateTime): StrPair | null;

  /**
   * Given flatliningTimeSteps and a pandas DataFrame, returns the percentage of data that is flatlining.
   * If flatliningTimeSteps is less than 0, function will throw an error.
   * Returns float or Series depending on shape of the DataFrame
   *
   * @param flatliningTimeSteps
   *        The number of time steps to check for flatlining behavior.
   * @param df
   *        The pandas DataFrame to analyze for flatlining.
   * @return a float or Series representing the percentage of data that is flatlining.
   */
  static getFlatliningPercentage(flatliningTimeSteps?: number, df?: any): any | null;

  /**
   * Create {@link Feature}s for all the {@link Sensor}s associated with this
   * {@link ReliabilityAsset} through {@link ReliabilityAssetSensorRelation}s.
   * If you want to create featues for {@link ReliabilityAssetSensorRelation}s
   * that are not associated with this {@link ReliabilityAsset}, then you can
   * provide them in the `additionalRasrs` argument.
   * Refer to type documentation on {@link ReliabilityMlFeatureCreationMethod}
   * for more information on the different methods to create {@link Feature}s for
   * the {@link Sensor}s.
   * Exact and full documentation on the {@link Feature} creation process may be
   * found in {@link ReliabilityAssetSensorRelation#createSensorFeature}, which this
   * function simply calls in a loop for all {@link ReliabilityAssetSensorRelation}s.
   */
  createSensorFeatures(excludeSensors?: Array_Type<string>, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR', method?: string = 'BEST', additionalRasrs?: Array_Type<ReliabilityAssetSensorRelation>): Array_Type<Feature> | null;

  /**
   * Create a {@link Metric} expression which evalutes to 1 for all intervals whose start lies within
   * one of the given {@link TimeRange} objects, and 0 elsewhere.
   *
   * @param timeRanges
   *        An array of {@link TimeRange} objects to create the mask expression for.
   * @return a string representing the metric expression for the time range mask.
   */
  static createTimeRangeMaskExpression(timeRanges?: Array_Type<TimeRange>): string | null;

  /**
   * The {@link Feature.Set} creation process has two main steps:
   * - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
   * - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
   * This function implements logic for the first part of the {@link Feature.Set} creation
   * process.
   * NOTE: This function is NOT intended to be used by users. It will be called internally
   * by {@link prepareFeatures}, which the user is encouraged to always interact with.
   *
   * @param spec
   *        The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
   * @param start
   *        The start datetime for feature preparation.
   * @param end
   *        The end datetime for feature preparation.
   * @param interval
   *        The time interval for feature preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature.Set} containing the initial features.
   */
  prepareInitialFeatureSet(spec: ReliabilityMlFeaturePreparationSpec, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR'): Feature.Set | null;

  /**
   * The {@link Feature.Set} creation process has two main steps:
   * - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
   * - Apply the masks on the initial {@link Feature.Set} corresponding to the provided
   * {@link ReliabilityMlDatasetPreparationSpec#masksBeforeCleaning}, if the
   * {@link ReliabilityMlDatasetPreparationSpec#approach} is `sequential`.
   * - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
   * This function implements logic for the second part of the {@link Feature.Set} creation
   * process.
   * NOTE: This function is NOT intended to be used by users. It will be called internally
   * by {@link prepareFeatures}, which the user is encouraged to always interact with.
   *
   * @param featureSet
   *        The initial {@link Feature.Set} to be cleaned.
   * @param spec
   *        The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
   * @param start
   *        The start datetime for feature preparation.
   * @param end
   *        The end datetime for feature preparation.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for feature preparation, defaults to QUARTER_HOUR.
   * @param sensorAssociationJobId
   *        Optional job ID for sensor association, defaults to None.
   * @return a cleaned {@link Feature.Set}.
   */
  prepareCleanedFeatureSet(featureSet: Feature.Set, spec: ReliabilityMlFeaturePreparationSpec, start?: DateTime, end?: DateTime, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', sensorAssociationJobId?: string = 'None'): Feature.Set | null;

  /**
   * The {@link Feature.Set} creation process has two main steps:
   * - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
   * - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
   * This function implements logic for both aspects of the {@link Feature.Set} creation
   * process. Internally, it first calls {@link prepareInitialFeatureSet}, then calls
   * {@link prepareMasks} for the provided masksBeforeCleaning, and passes the
   * output of these functions into {@link prepareCleanedFeatureSet}.
   * NOTE: In the most common implementation of `reliabilityRisk`, the user need not concern
   * themselves with this function. It is suggested that the user use this function ONLY if
   * they want to define non-standard {@link Feature}s that don't simply return the time
   * series data for all the {@link Sensor}s.
   *
   * @param spec
   *        The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
   * @param start
   *        The start datetime for feature preparation.
   * @param end
   *        The end datetime for feature preparation.
   * @param masksBeforeCleaning
   *        An array of mask names to apply before cleaning the feature set.
   * @param maskPreparationSpec
   *        The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
   * @param interval
   *        The time interval for feature preparation, defaults to QUARTER_HOUR.
   * @param sensorAssociationJobId
   *        Optional job ID for sensor association, defaults to None.
   * @return a map of feature set names to {@link Feature.Set} objects.
   */
  prepareFeatures(spec: ReliabilityMlFeaturePreparationSpec, start?: DateTime, end?: DateTime, masksBeforeCleaning?: Array_Type<string>, maskPreparationSpec: ReliabilityMlMaskPreparationSpec, interval?: string = 'QUARTER_HOUR', sensorAssociationJobId?: string = 'None'): Map_Type<string, Feature.Set> | null;

  /**
   * Helper function to prepare a default {@link Feature}, representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * a planned/unplanned downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature} representing the default asset events mask.
   */
  static prepareDefaultAssetEventsMask(start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR'): Feature | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * a planned/unplanned downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the asset events mask.
   */
  prepareAssetEventsMask(start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * anomalous/abnormal behavior in a window of time leading up to an unplanned
   * downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param preAssetEventsWindow
   *        The number of time steps before an asset event to include in the mask.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the pre-asset events mask.
   */
  preparePreAssetEventsMask(preAssetEventsWindow?: number, start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * transient modes of operation immediately following a planned/unplanned downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param postAssetEventsWindow
   *        The number of time steps after an asset event to include in the mask.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the post-asset events mask.
   */
  preparePostAssetEventsMask(postAssetEventsWindow?: number, start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was not
   * operational (not including planned/unplanned downtime events).
   * Such asset operation is usually infer-able from the values in the time series data
   * of one or more {@link Sensor}s, for example, "an asset is not operational if the
   * RPM is less than 1000".
   * By default, it is assumed that the {@link ReliabilityAsset} is constantly operational
   * unless it is undergoing planned/unplanned downtime and, therefore, the default
   * {@link Feature} will always evaluate to zero, i.e., "the asset is always operational".
   * However, if the user wishes to mask periods of data corresponding to the asset not being operational,
   * then they can either provide their own upserted {@link Feature}, with its `name` field populated.
   * See {@link ReliabilityMlMaskPreparationSpec} for more details.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the asset not operational mask.
   */
  prepareIsAssetNotOperationalMask(start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to optionally prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} contains
   * anomalous training data.
   * By default, it is assumed that the other masks used to mask training data for the
   * {@link ReliabilityAsset} already cover all the anomalous periods of operation associated with
   * the asset, therefore, the default {@link Feature} will by default evaluate to zero.
   * However, if the user wishes to still mask out anomalous periods within the training data algorithmically,
   * they can do so by setting {@link ReliabilityMlMaskPreparationSpec#generateAlgorithmicallyComputedTrainingMask}
   * to true, and specifying the technique to be used in
   * {@link ReliabilityMlMaskPreparationSpec#algorithmicallyComputedTrainingMaskTechnique}. If a technique is not
   * specified, the code will default to an Isolation Forest based approach to mask out anomalous periods
   * in the training data.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param generateAlgorithmicallyComputedTrainingMask
   *        Boolean flag indicating whether to generate the algorithmically computed training mask.
   * @param algorithmicallyComputedTrainingMaskTechnique
   *        The technique to use for computing the training mask algorithmically.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature.Set} representing the algorithmically computed training mask.
   */
  prepareAlgorithmicallyComputedTrainingMask(start?: DateTime, end?: DateTime, generateAlgorithmicallyComputedTrainingMask?: boolean, algorithmicallyComputedTrainingMaskTechnique?: AlgorithmicallyComputedTrainingMaskTechnique, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR'): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data that cannot otherwise be expressed elegantly
   * to remove rows of data from training the {@link MlModel}.
   * Usually, such situations arise when it is known that there are certain time ranges
   * when there is clearly anomalous asset operation, however, it may not be express-able
   * as generic rules. In such cases, users have the option to provide {@link TimeRange}s
   * in the `timeRanges` argument. Any data within any of the provided {@link TimeRange}s
   * will be ignored while training the {@link MlModel}.
   * By default, however, it will be assumed that there are no abnormal operating modes
   * of the {@link ReliabilityAsset} unless the user provides `timeRanges`.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param timeRanges
   *        Optional array of {@link TimeRange} objects to exclude from training.
   * @param preIsAssetNotOperationalFeatureOverride
   *        Optional override {@link Feature} for pre-asset not operational check.
   * @param postIsAssetNotOperationalFeatureOverride
   *        Optional override {@link Feature} for post-asset not operational check.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the ad-hoc training mask.
   */
  prepareAdHocTrainingMask(start?: DateTime, end?: DateTime, features?: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', timeRanges?: Array_Type<TimeRange>, preIsAssetNotOperationalFeatureOverride?: Feature, postIsAssetNotOperationalFeatureOverride?: Feature, overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when an {@link MlModel} should NOT make predictions
   * for the {@link ReliabilityAsset}. For example, "when the inlet temperature is less than
   * 150 degrees Fahrenheit and outlet temperature is greater than 100 degrees Fahrenheit,
   * we know that there is something obviously wrong with the asset and, therefore, do not
   * want to be alerted to it. Suppress ML model outputs at such times".
   * By default, however, no such assumption is made. The {@link MlModel} will always make
   * predictions, unless the asset is experiencing a planned/unplanned downtime or if it is
   * not operational.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param postIsAssetNotOperationalFeatureOverride
   *        Optional override {@link Feature} for post-asset not operational check.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @param timeRanges
   *        Optional array of {@link TimeRange} objects to exclude from inference.
   * @return a {@link Feature.Set} representing the ad-hoc inference mask.
   */
  prepareAdHocInferenceMask(start?: DateTime, end?: DateTime, features?: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', postIsAssetNotOperationalFeatureOverride?: Feature, overrideFeature?: Feature, timeRanges?: Array_Type<TimeRange>): Feature.Set | null;

  /**
   * Helper function that orchestrates the preparation of all the different types of masks.
   * Internally, it prepares the mask for the the specified `maskToApply` using the
   * provided spec, and returns a {@link Feature.Set}.
   * Internally, it calls the following functions to prepare the mask:
   * - {@link prepareAssetEventsMask}
   * - {@link preparePreAssetEventsMask}
   * - {@link preparePostAssetEventsMask}
   * - {@link prepareIsAssetNotOperationalMask}
   * - {@link prepareAdHocTrainingMask}
   * - {@link prepareAdHocInferenceMask}
   * - {@link prepareAlgorithmicallyComputedTrainingMask}
   *
   * All the masks that have been applied before a specific mask is prepared
   * are available in the `masks` field. Depending on the `approach`, `masksBeforeCleaning`
   * and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec},
   * either the initial {@link Feature.Set} or the cleaned {@link Feature.Set} will be available
   * in the `features` field.
   *
   * @param spec
   *        The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param maskToApply
   *        The name of the mask to prepare.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature.Set} representing the prepared mask.
   */
  prepareMask(spec: ReliabilityMlMaskPreparationSpec, start?: DateTime, end?: DateTime, maskToApply?: string, features?: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR'): Feature.Set | null;

  /**
   * Helper function to prepare materialized {@link Feature.Set}s for all the different types
   * of masks necessary for robust training and performance of {@link MlModel}s. Internally,
   * this function calls {@link prepareMask} for each mask in `masksToApply`. It, then, aggregates
   * the {@link Feature.Set}s resulting from calls to all the mask-related functions into a `map` object.
   *
   * The order in which these functions are called is determined by the `approach`, `masksBeforeCleaning`
   * and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec}.
   *
   * @param spec
   *        The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param masksToApply
   *        An array of mask names to prepare.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masksApplied
   *        A map of already applied mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a map of mask names to {@link Feature.Set} objects.
   */
  prepareMasks(spec: ReliabilityMlMaskPreparationSpec, start?: DateTime, end?: DateTime, masksToApply?: Array_Type<string>, features?: Feature.Set, masksApplied?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR'): Map_Type<string, Feature.Set> | null;

  /**
   * Usually, in `reliabilityRisk`, it is not suggested to train and deploy supervised
   * {@link MlModel}s. However, sometimes, they perform  better than the default,
   * semi-supervised {@link MlModel}s. In such cases, use this function to define the target
   * variable according to the {@link ReliabilityMlTargetPreparationSpec}.
   *
   * @param spec
   *        The {@link ReliabilityMlTargetPreparationSpec} containing target preparation configuration.
   * @param start
   *        The start datetime for target preparation.
   * @param end
   *        The end datetime for target preparation.
   * @param interval
   *        The time interval for target preparation, defaults to QUARTER_HOUR.
   * @return a map of target names to {@link Feature.Set} objects.
   */
  prepareTarget(spec: ReliabilityMlTargetPreparationSpec, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR'): Map_Type<string, Feature.Set> | null;

  /**
   * Helper function to prepare a {@link Feature.Set}s for alertContext, which is required to generate
   * accurate alerts in production. By default, this API prepares a set of features that fetches the
   * riskScore, riskScoreNormalized and alert corresponding to the deployed CHAMPION model. This is required
   * when {@link ReliabilityMlModel#process} is called for a specified "start:end" period - alertContext
   * is used to provide the {@link ReliabilityRiskMl.Pipeline#alertingPipe} with information about previously
   * persisted riskScores and alerts, which it uses to accurately determine when a new alert should be generated
   * within the "start:end" window.
   *
   * @param project
   *        The {@link ReliabilityMl.Project} to prepare alert context for.
   * @param start
   *        The start datetime for alert context preparation.
   * @param end
   *        The end datetime for alert context preparation.
   * @param interval
   *        The time interval for alert context preparation, defaults to QUARTER_HOUR.
   * @param overrideFeatures
   *        Optional array of override {@link Feature} objects to use.
   * @return a map of feature names to {@link Feature.Set} objects for alert context.
   */
  prepareAlertContext(project?: ReliabilityMl.Project, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR', overrideFeatures?: Array_Type<Feature>): Map_Type<string, Feature.Set> | null;

  /**
   * Once all the {@link Feature.Set}s are defined and materialized, there is one final step
   * before one can begin training {@link MlModel}s, i.e., splitting the datasets into
   * training and validation. This function will split the datasets according to the
   * {@link ReliabilityMlTrainValSplitSpec}.
   * NOTE: It is strongly suggested that users NOT call this function directly. This will be
   * internally called by {@link prepareMlDatasets}.
   *
   * @param featureSet
   *        The {@link Feature.Set} to split into training and validation sets.
   * @param spec
   *        The {@link ReliabilityMlTrainValSplitSpec} containing split configuration.
   * @param start
   *        The start datetime for the split.
   * @param end
   *        The end datetime for the split.
   * @return a map of split names to {@link TimeRange} objects.
   */
  trainValSplit(featureSet: Feature.Set, spec: ReliabilityMlTrainValSplitSpec, start: DateTime, end: DateTime): Map_Type<string, TimeRange> | null;

  /**
   * This function is called from {@link #doPrepareMlDatasets} if the provided {@link ReliabilityMlDatasetPreparationSpec}
   * has a `sensorAssociationJobId' provided and its `doNotUpdateSpecForSensorAssociation` is set to `false`,
   * to update the fields on the data prep spec, and return
   * a new data prep spec with the updated fields.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} to update for sensor association.
   * @return the updated {@link ReliabilityMlDatasetPreparationSpec}.
   */
  updateSpecForSensorAssociation(spec: ReliabilityMlDatasetPreparationSpec): ReliabilityMlDatasetPreparationSpec;

  /**
   * Updates the {@link ReliabilityMlDatasetPreparationJob} with fields that are required for a dataset preparation job.
   * Creates a map of {@link ReliabilityAsset#id}s to {@link ReliabilityMlDatasetPreparationRun}s
   * from the given {@link ReliabilityMlDatasetPreparationSpec#targetAssetFilter}, so that we can name
   * the dataset preparation runs and link them to the tracking job. The created
   * {@link ReliabilityMlDatasetPreparationRun}s are persisted in the database, and the map is
   * set in the {@link ReliabilityMlDatasetPreparationSpec#datasetRunMap datasetRunMap} field
   * of the {@link ReliabilityMlDatasetPreparationJob#spec}.
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob} that will use this map.
   * @returns the updated {@link ReliabilityMlDatasetPreparationJob}.
   */
  static initializeJobSpec(job: ReliabilityMlDatasetPreparationJob): ReliabilityMlDatasetPreparationJob | null;

  /**
   * Any asset-specific modifications that need to be done to the
   * {@link ReliabilityMlDatasetPreparationSpec} may be made in this function.
   * By default, there is no modification to the spec. This function is useful
   * when invoking the dataset preparation job in bulk, i.e., for many assets,
   * but there are modifications to be made to the spec such as an
   * asset-specific feature creation process to set
   * {@link ReliabilityMlFeaturePreparationSpec#overrideFeatures}.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} to modify.
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
   * @return the modified {@link ReliabilityMlDatasetPreparationSpec}.
   */
  beforePrepareMlDatasets(spec: ReliabilityMlDatasetPreparationSpec, job?: ReliabilityMlDatasetPreparationJob): ReliabilityMlDatasetPreparationSpec;

  /**
   * This function contains the logic of preparing clean datasets for model training.
   * Rarely requires modification.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
   */
  doPrepareMlDatasets(spec: ReliabilityMlDatasetPreparationSpec): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Post-preparation of datasets for model training, there may be a requirement to
   * modify the {@link ReliabilityMlDatasetPreparationRun}, for example. These
   * requirements are specific to each deployment. As such, the base function will
   * always make no modifications. However, this function may be overridden in a deployment
   * to transform the outputs to be specific to that deployment.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} used for preparation.
   * @param run
   *        The {@link ReliabilityMlDatasetPreparationRun} to modify.
   * @return the modified {@link ReliabilityMlDatasetPreparationRun}.
   */
  afterPrepareMlDatasets(spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Synchronous method to prepare ML Datasets for a given {@link ReliabilityAsset}. It
   * is, however, STRONGLY SUGGESTED that users use the safer and distributed version of
   * the same function, i.e., {@link prepareMlDatasetsBatch}.
   * The order of execution of operations is:
   * ```
   * 1. beforePrepareMlDatasets
   *    - Users may choose to modify the dataset preparation spec on a per-asset basis, if necessary.
   * 2. doPrepareMlDatasets
   *    - This contains the logic for preparing clean datasets for training the machine learning model.
   *      Most often, this is not modified by deployments.
   * 3. afterPrepareMlDatasets
   *    - Post-completion of dataset preparation, there may be some modifications needed to be made, in which case,
   *      this function may be implemented by the user.
   * ```
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
   * @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
   */
  prepareMlDatasets(spec?: ReliabilityMlDatasetPreparationSpec, job?: ReliabilityMlDatasetPreparationJob): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Distributed and safer version of {@link prepareMlDatasets}. It is safer because
   * it does not block threads on the leader nodes of the {@link App}. Since the task
   * nodes will pick up this task, it will not affect the availability and performance
   * of the {@link App} for other, more urgent requests.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @param options
   *        The {@link MapReduceOptions} for distributed processing.
   * @return a {@link ReliabilityMlDatasetPreparationJob} representing the batch preparation job.
   */
  static prepareMlDatasetsBatch(spec?: ReliabilityMlDatasetPreparationSpec, options?: MapReduceOptions): ReliabilityMlDatasetPreparationJob | null;

  /**
   * Helper method to validate a mask expression when specified. Since this expression will
   * be used to create a {@link Feature}, we need to ensure that the user input is valid.
   *
   * @param assetId
   *        The ID of the {@link ReliabilityAsset} to validate the expression for.
   * @param expressions
   *        An array of mask expressions to validate.
   * @return true if all expressions are valid, false otherwise.
   */
  static validateMaskExpression(assetId: string, expressions?: Array_Type<string>): boolean;

  /**
   * Transform mask expression into a format that can be used in a metric expression
   *
   * @param expression
   *        Expression that needs to be transformed
   * @return string representing the expression transformed
   */
  static parseMaskExpression(expression?: string): string | null;

  /**
   * This function will prepare the {@link ReliabilityMlDatasetPreparationRun} for the
   * given {@link ReliabilityAsset}s and {@link ReliabilityMlDatasetPreparationSpec}.
   * This will create the {@link Feature.Set}s that can be used for training on the given
   * {@link ReliabilityAsset}s.
   *
   * @param assets
   *        An array of {@link ReliabilityAsset} objects to prepare datasets for.
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
   */
  static prepareMlDatasetsAndSensorDataReports(assets: Array_Type<ReliabilityAsset>, spec: ReliabilityMlDatasetPreparationSpec): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Prepares {@link SensorDataReport}s for the {@link ReliabilityAsset} based on the provided
   * {@link ReliabilityMlDatasetPreparationSpec}. This function is called when preparing ML datasets.
   * It validates that the spec contains {@link ReliabilityMlDatasetPreparationSpec#sensorDataReportThresholds},
   * {@link ReliabilityMlDatasetPreparationSpec#materializeStart}, and
   * {@link ReliabilityMlDatasetPreparationSpec#materializeEnd}, and executes
   * {@link ReliabilityAsset#generateSensorDataReport}.
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} that contains the thresholds and time range.
   * @param overrideTimeRange
   *        The time range to use for the sensor data reports, if materializeStart and materializeEnd are not provided
   *        in the spec.
   * @returns
   *       The updated {@link ReliabilityMlDatasetPreparationSpec} with the sensor data reports prepared. If the
   *       spec does not contain the required fields, or a time range is not provided, the unmodified spec is returned.
   */
  prepareSensorDataReports(spec: ReliabilityMlDatasetPreparationSpec, overrideTimeRange?: TimeRange): ReliabilityMlDatasetPreparationSpec;

  /**
   * Get assets 'relevant' mainly for modeling purposes for the current asset.
   *
   * What defines the relevance of an asset?
   *
   * A given asset is relevant to current asset if it is present in vicinity of the current asset. There are two ways to define this vicinity:
   * 1. Relative level - Use `level` to climb up the hierarchy from the current asset's level and fetch all the descendant assets of the resolved ancestor asset.
   * 2. Absolute level - Use `level` as the absolute depth to resolve ancestor asset and fetch all it's descendant assets.
   *
   *
   *                      {GrandParent}
   *                       /          \
   *                 {Parent1}      {Parent2}
   *                    /   \           \
   *                   /     \           \
   *                  /       \           \
   *          {selectedAsset} {sibling1}  {sibling2}
   *            /          \
   *        {child1}      {child2}
   *
   * For example, considering the above hierarchy for the 'selectedAsset':
   * - `fetchRelevantAssets()` with default parameters resolves to assets [sibling1, child1, child2].
   * - `fetchRelevantAssets(0, true)` resolves to assets [GrandParent, Parent1, Parent2, sibling1, sibling2, child1, child2].
   *
   * @param level
   *          The integer level which will be used to calculate the depth at which ancestor asset will be resolved.
   *          level has to >=0, negative level results in an error thrown. Defaults to 1.
   * @param isAbsolute
   *           A flag to indicates whether to interpret the level as 'relative' or 'absolute'. Defaults to false.
   *             - if set to true, ancestor will be resolved at the provided level of the hierarchy.
   *             - if set to false, provided level will be used to climb up the hierarchy from the current asset.
   *
   * @returns A {@link FetchResult#of} {@link ReliabilityAsset}s.
   */
  fetchRelevantAssets(level?: number = '1', isAbsolute?: boolean = 'false'): FetchResult<ReliabilityAsset> | null;

  /**
   * This function returns a list of objects prepared from {@link ReliabilityAssetSensorRelation}s for a given list of {@link ReliabilityAsset}s.
   * The FetchSpec has limited functionality as `offset`, `limit`, and `filter` parameters are respected as is, whereas `include` is not.
   * One must practice caution in providing `{@link FetchSpec#filter}` that is compatible with {@link ReliabilityAssetSensorRelation} schema.
   *
   * @param assets
   *    List of {@link ReliabilityAsset} ids.
   * @param spec
   *    - A {@link FetchSpec} for the fetch call which will be called on {@link ReliabilityAssetSensorRelation}.
   * @param sensorDataReportsFilter (used especially for UI)
   *    A string filter that can be applied on {@link SensorDataReport} to get all the sensors that have been selected or excluded already in the UI.
   *
   * @return {@link FetchResultWithTotalCount} with sensor details as json objs in the following format:
   *     ```json
   *      sensorObj: {
   *         id: ...
   *         from.name: ...
   *         to.name: ...
   *         sensorId: ...
   *         latestValue: ...
   *       }
   *     ```
   */
  static fetchSensorsForSelectedAssets(assets: Array_Type<string>, spec?: FetchSpec, sensorDataReportsFilter?: string): FetchResultWithTotalCount<any> | null;

  /**
   * The purpose of this method is to populate the job.preparationSettings field on dataset runs that are
   * created on the backend, such as a Jupyter Notebook or the static console. The preparationSettings will
   * be populated with the given {@link ReliabilityMlDatasetPreparationRun run} and {@link ReliabilityMlDatasetPreparationSpec spec}.
   *
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob job} to attach the preparationSettings
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec spec} to generate the datasets
   * @param run
   *        The {@link ReliabilityMlDatasetPreparationRun dataset preparation run}
   * @returns The {@link ReliabilityMlDatasetPreparationJob job} with the preparationSettings field populated
   */
  populateJobPreparationSettings(job: ReliabilityMlDatasetPreparationJob, spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun): ReliabilityMlDatasetPreparationJob | null;
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
