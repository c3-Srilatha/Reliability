// TypeScript definitions for the C3 type ResidualAlertFilterPanelSpec

/**
 * Spec for plotting the charts on the Residual Diagnostics Alert Detail page.
 *
 * This spec will be populated using the values selected in the ResidualDiagnosticsAlertDetailFilterPanel
 * and sent to the charting API.
 *
 * @remarks this represents a value passed to a method that expects an instance of ResidualAlertFilterPanelSpec
 */
declare interface IResidualAlertFilterPanelSpec {

  /**
   * The constant name for the mask indicating when the asset is not operational.
   * Used to filter out non-operational periods in the chart.
   *
   * @see ReliabilityMlDatasetPreparationRunCommon#maskDatasets
   */
  NON_OPERATIONAL_MASK_NAME?: string;

  /**
   * Start date selected in the filter panel.
   */
  start: string;

  /**
   * End date selected in the filter panel.
   */
  end: string;

  /**
   * The {@link Interval} selected for the plotting the values.
   */
  interval: string;

  /**
   * Plot alerts on the chart if the field is set to `true`.
   */
  showAlerts?: boolean;

  /**
   * Show unplanned events on the chart if the field is set to `true`.
   */
  showUnplannedEvents?: boolean;

  /**
   * Show work orders on the chart if the field is set to `true`.
   */
  showWorkOrders?: boolean;

  /**
   * Show training period on the chart if the field is set to `true`.
   */
  showTrainingPeriod?: boolean;

  /**
   * Selected features to be plotted.
   *
   * This field will carry the IDs of features selected in filter panel.
   */
  features?: Array_Type<string> | Array<string>;

  /**
   * Show the feature contribution->risk score mapping on chart if field set to `true`.
   */
  showFeatureContributionsToRiskScore?: boolean;

  /**
   * Show the feature reconstruction on chart if field set to `true`.
   */
  showFeatureReconstruction?: boolean;

  /**
   * Show the sensor training bounds on chart if field set to `true`.
   */
  displaySensorTrainingBounds?: boolean;

  /**
   * List of selected sensors in the filter panel.
   */
  sensors?: Array_Type<string> | Array<string>;

  /**
   * List of {@link ReliabilityMetric} Ids to be selected.
   */
  reliabilityMetricIds?: Array_Type<string> | Array<string>;

  /**
   * The id of the {@link ReliabilityAssetAlert} being viewed.
   */
  alertId: string;

  /**
   * If true, filter out non-operational periods from the charts using the #NON_OPERATIONAL_MASK_NAME.
   */
  showNonOperationalPeriods?: boolean;
}

/**
 * Spec for plotting the charts on the Residual Diagnostics Alert Detail page.
 *
 * This spec will be populated using the values selected in the ResidualDiagnosticsAlertDetailFilterPanel
 * and sent to the charting API.
 *
 * @remarks this represents a made instance of ResidualAlertFilterPanelSpec
 */
declare class ResidualAlertFilterPanelSpec extends Obj  {

  /**
   * The constant name for the mask indicating when the asset is not operational.
   * Used to filter out non-operational periods in the chart.
   *
   * @see ReliabilityMlDatasetPreparationRunCommon#maskDatasets
   */
  readonly NON_OPERATIONAL_MASK_NAME?: string;
  withNON_OPERATIONAL_MASK_NAME(NON_OPERATIONAL_MASK_NAME: string | null): ResidualAlertFilterPanelSpec;

  /**
   * Start date selected in the filter panel.
   */
  readonly start: string;
  withStart(start: string): ResidualAlertFilterPanelSpec;

  /**
   * End date selected in the filter panel.
   */
  readonly end: string;
  withEnd(end: string): ResidualAlertFilterPanelSpec;

  /**
   * The {@link Interval} selected for the plotting the values.
   */
  readonly interval: string;
  withInterval(interval: string): ResidualAlertFilterPanelSpec;

  /**
   * Plot alerts on the chart if the field is set to `true`.
   */
  readonly showAlerts?: boolean;
  withShowAlerts(showAlerts: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Show unplanned events on the chart if the field is set to `true`.
   */
  readonly showUnplannedEvents?: boolean;
  withShowUnplannedEvents(showUnplannedEvents: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Show work orders on the chart if the field is set to `true`.
   */
  readonly showWorkOrders?: boolean;
  withShowWorkOrders(showWorkOrders: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Show training period on the chart if the field is set to `true`.
   */
  readonly showTrainingPeriod?: boolean;
  withShowTrainingPeriod(showTrainingPeriod: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Selected features to be plotted.
   *
   * This field will carry the IDs of features selected in filter panel.
   */
  readonly features?: Array_Type<string>;
  withFeatures(features: Array_Type<string> | Array<string> | null): ResidualAlertFilterPanelSpec;

  /**
   * Show the feature contribution->risk score mapping on chart if field set to `true`.
   */
  readonly showFeatureContributionsToRiskScore?: boolean;
  withShowFeatureContributionsToRiskScore(showFeatureContributionsToRiskScore: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Show the feature reconstruction on chart if field set to `true`.
   */
  readonly showFeatureReconstruction?: boolean;
  withShowFeatureReconstruction(showFeatureReconstruction: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Show the sensor training bounds on chart if field set to `true`.
   */
  readonly displaySensorTrainingBounds?: boolean;
  withDisplaySensorTrainingBounds(displaySensorTrainingBounds: boolean): ResidualAlertFilterPanelSpec;

  /**
   * List of selected sensors in the filter panel.
   */
  readonly sensors?: Array_Type<string>;
  withSensors(sensors: Array_Type<string> | Array<string> | null): ResidualAlertFilterPanelSpec;

  /**
   * List of {@link ReliabilityMetric} Ids to be selected.
   */
  readonly reliabilityMetricIds?: Array_Type<string>;
  withReliabilityMetricIds(reliabilityMetricIds: Array_Type<string> | Array<string> | null): ResidualAlertFilterPanelSpec;

  /**
   * The id of the {@link ReliabilityAssetAlert} being viewed.
   */
  readonly alertId: string;
  withAlertId(alertId: string): ResidualAlertFilterPanelSpec;

  /**
   * If true, filter out non-operational periods from the charts using the #NON_OPERATIONAL_MASK_NAME.
   */
  readonly showNonOperationalPeriods?: boolean;
  withShowNonOperationalPeriods(showNonOperationalPeriods: boolean): ResidualAlertFilterPanelSpec;

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
  static fromJson(json: any): ResidualAlertFilterPanelSpec | null;

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
  static fromJsonString(json: string): ResidualAlertFilterPanelSpec | null;

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
  static fromXmlString(xml: string): ResidualAlertFilterPanelSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ResidualAlertFilterPanelSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ResidualAlertFilterPanelSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ResidualAlertFilterPanelSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ResidualAlertFilterPanelSpec>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ResidualAlertFilterPanelSpec>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ResidualAlertFilterPanelSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ResidualAlertFilterPanelSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ResidualAlertFilterPanelSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): ResidualAlertFilterPanelSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ResidualAlertFilterPanelSpec;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ResidualAlertFilterPanelSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ResidualAlertFilterPanelSpec;

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
  withoutFieldAtPath(path: string): ResidualAlertFilterPanelSpec;

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
  withoutField(field: string): ResidualAlertFilterPanelSpec;

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
  withoutField(field: FieldType): ResidualAlertFilterPanelSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ResidualAlertFilterPanelSpec;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ResidualAlertFilterPanelSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ResidualAlertFilterPanelSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ResidualAlertFilterPanelSpec;

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
  defaultField(field: string): ResidualAlertFilterPanelSpec;

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
  defaultField(field: FieldType): ResidualAlertFilterPanelSpec;

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
  unsetField(field: string): ResidualAlertFilterPanelSpec;

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
  unsetField(field: FieldType): ResidualAlertFilterPanelSpec;

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
  removeField(field: string): ResidualAlertFilterPanelSpec;

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
  removeField(field: FieldType): ResidualAlertFilterPanelSpec;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ResidualAlertFilterPanelSpec;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ResidualAlertFilterPanelSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ResidualAlertFilterPanelSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ResidualAlertFilterPanelSpec;

  mergeJson(json: any): ResidualAlertFilterPanelSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ResidualAlertFilterPanelSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ResidualAlertFilterPanelSpec>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ResidualAlertFilterPanelSpec> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ResidualAlertFilterPanelSpec> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ResidualAlertFilterPanelSpec>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ResidualAlertFilterPanelSpec> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ResidualAlertFilterPanelSpec> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ResidualAlertFilterPanelSpec> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ResidualAlertFilterPanelSpec>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ResidualAlertFilterPanelSpec>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ResidualAlertFilterPanelSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ResidualAlertFilterPanelSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ResidualAlertFilterPanelSpec;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ResidualAlertFilterPanelSpec;

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
  static make(fields: any, withDefaults?: boolean): ResidualAlertFilterPanelSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ResidualAlertFilterPanelSpec;

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
  afterMake(): ResidualAlertFilterPanelSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ResidualAlertFilterPanelSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ResidualAlertFilterPanelSpec> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ResidualAlertFilterPanelSpec;

  /**
   * Executes this spec to generate data for the Residual Diagnostics Alert Detail page based on the spec fields.
   *
   * This function constructs the appropriate queries for different data components:
   * - Sensor measurements via {@link ReliabilitySensorTimedDataQuery}
   * - Reliability metrics via {@link ReliabilityMetricTimedDataQuery}
   * - Model outputs via {@link ReliabilityModelOutputsTimedDataQuery} (risk scores, feature contributions)
   * - Feature values via {@link ReliabilityFeatureTimedDataQuery}.
   * - Event data via {@link ReliabilityEventTimedDataQuery} (alerts, unplanned events, work orders)
   *
   * All individual queries are combined into a global {@link ReliabilityTimedDataQuery}
   * which is executed with the configured time parameters.
   *
   * @returns {map<string, any>} A map containing structured with the following keys and values:
   *   - 'sensorData': Sensor measurements over time
   *   - 'metricData': Reliability metrics over time
   *   - 'modelOutputs': Model predictions and feature contributions
   *   - 'featureData': Raw and reconstructed feature values
   *   - 'eventData': Alerts, unplanned events, and work orders
   */
  executeSpec(): Map_Type<string, any> | null;
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
