// TypeScript definitions for the C3 type SimpleMetric

/**
 * SimpleMetrics represent a concept.  Each Simple Metric can only represent a simple concept like
 * 'Waste Produced' or 'Number of Employees', not combinations of concepts like 'Waste Produced per Employee'.
 * SimpleMetric is defined once for each Type on which it applies.
 *
 * Simple Metric expressions could fall in one of the 3 categories:
 *
 * 1. Regular normalized timeseries based expression
 *
 * 2. AsTimeseries based behavior using TSDecl
 *
 * 3. Custom action based action - ONLY TO BE USED FOR PROTOTYPING
 *
 * @remarks this represents a value passed to a method that expects an instance of SimpleMetric
 */
declare interface ISimpleMetric {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Name of the metric
   */
  name: string;

  /**
   * Desired unit of the metric (optional). When specified, data will be converted to specified unit.
   * When it is not specified, and data does not have one, it will be treated as 'dimensionless'.
   */
  unit?: IUnit | null;

  /**
   * Expression that needs to be evaluated on the type that the path leads to (optional)
   * Expression with infix operator, will be evaluated in an infix visitor pattern.
   * e.g. A < B will be compiled an infix fashion with left of "<", as A, right of "<" as B, and then the whole expression
   * In the same spirit, A < B < C will compile (A < B), then C, and finally the whole expression. Note, this is not same as (A < B) && (B < C).
   */
  expression?: string | null;

  /**
   * Translated label (based on name as key).
   */
  label?: string | null;

  /**
   * Description of the metric
   */
  description?: string | null;

  /**
   * This provides the list of variables in the metric, values for which will be provided at run-time in the spec
   *   e.g. weatherNormalizeElectricity(ElectricityConsumption, eventDate) is the expression of the compound metric
   *   and say eventDate is to be provided at run-time. We can declare a binding in the spec
   *   bindings : <eventDate, "2013-01-01T00:00:00"> which will plug in this value during evaluation
   *
   * definition eg:
   * {
   *   "id": "weatherNormalizedElectricityConsumption",
   *   "name": "Weather Normalized Billed Electricity Consumption",
   *   "expression": "weatherNormalizeElectricity(BilledElectricityConsumption, eventDate)",
   *   "variables" : [{"name": "eventDate"}]
   * }
   */
  variables?: C3.Array<MetricVariable | null> | Array<IMetricVariable | null>;

  /**
   * the acronym associated with the metric
   * e.g. if a SimpleMetric has name TamperEventINTA, the acronym would be INTA
   */
  acronym?: string | null;

  /**
   * Tags that give information about the categories of a metric
   */
  tags?: C3.Array<string | null> | Array<string | null>;

  /**
   * The unique and required id of this instance.
   */
  id: string;

  /**
   * The src Type should be the entity for which we want to analyze data.
   *
   * eg. ServicePoint, Location, MeterAsset, etc.
   */
  srcType: IType;

  /**
   * Optional override to the source Type used for adhoc evaluation.
   */
  srcTypeOverride?: IType | null;

  /**
   * Path from the src Type to the Type where the metric expression OR tsDecl's data gets evaluated
   *
   * For cases where evaluation needs to happen on the same Type, do not specify the path
   */
  path?: string | null;

  /**
   * Specifies interval for which this metric is to be cached
   */
  cacheInterval?: string | null;

  /**
   * Specifies details for caching this metric. Set this field if you want the metric to be cached on first evaluation
   *
   * For the cache to be invalidated automatically upon changes to the data, {@link MetricDependency} must not be empty.
   * If {@link MetricDependency} is empty, the user needs to perform
   *
   * ```js
   *   App.rebuild(AppRebuildSpec.make({metricDeps: true}))
   * ```
   */
  cache?: ISimpleMetricCacheSpec | null;

  /**
   * Specify the Timeseries declaration for data that needs to be converted to a timeseries
   * These data points are data in a regular Type but has timeseries like properties.
   *
   * Note: When timeseries is specified on a metric "expression" / "action" should not be specified.
   * either of "timeseries" / "action" / "expression" should be specified at any given point of time on a simple metric
   */
  tsDecl?: ITSDecl | null;

  /**
   * Specify the action declaration for action based metrics.
   * The following action will be called with source objects populated with the given include spec.
   *
   * In the ideal case scenario, action metric authors should not be required to do any more i/o in the action itself
   */
  actionDecl?: IActionMetricDecl | null;
}

/**
 * SimpleMetrics represent a concept.  Each Simple Metric can only represent a simple concept like
 * 'Waste Produced' or 'Number of Employees', not combinations of concepts like 'Waste Produced per Employee'.
 * SimpleMetric is defined once for each Type on which it applies.
 *
 * Simple Metric expressions could fall in one of the 3 categories:
 *
 * 1. Regular normalized timeseries based expression
 *
 * 2. AsTimeseries based behavior using TSDecl
 *
 * 3. Custom action based action - ONLY TO BE USED FOR PROTOTYPING
 *
 * @remarks this represents a made instance of SimpleMetric
 */
declare class SimpleMetric extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SimpleMetric;

  /**
   * Name of the metric
   */
  readonly name: string;
  withName(name: string): SimpleMetric;

  /**
   * Desired unit of the metric (optional). When specified, data will be converted to specified unit.
   * When it is not specified, and data does not have one, it will be treated as 'dimensionless'.
   */
  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): SimpleMetric;

  /**
   * Expression that needs to be evaluated on the type that the path leads to (optional)
   * Expression with infix operator, will be evaluated in an infix visitor pattern.
   * e.g. A < B will be compiled an infix fashion with left of "<", as A, right of "<" as B, and then the whole expression
   * In the same spirit, A < B < C will compile (A < B), then C, and finally the whole expression. Note, this is not same as (A < B) && (B < C).
   */
  readonly expression?: string | null;
  withExpression(expression: string | null): SimpleMetric;

  /**
   * Translated label (based on name as key).
   */
  readonly label?: string | null;
  withLabel(label: string | null): SimpleMetric;

  /**
   * Description of the metric
   */
  readonly description?: string | null;
  withDescription(description: string | null): SimpleMetric;

  /**
   * This provides the list of variables in the metric, values for which will be provided at run-time in the spec
   *   e.g. weatherNormalizeElectricity(ElectricityConsumption, eventDate) is the expression of the compound metric
   *   and say eventDate is to be provided at run-time. We can declare a binding in the spec
   *   bindings : <eventDate, "2013-01-01T00:00:00"> which will plug in this value during evaluation
   *
   * definition eg:
   * {
   *   "id": "weatherNormalizedElectricityConsumption",
   *   "name": "Weather Normalized Billed Electricity Consumption",
   *   "expression": "weatherNormalizeElectricity(BilledElectricityConsumption, eventDate)",
   *   "variables" : [{"name": "eventDate"}]
   * }
   */
  readonly variables?: C3.Array<MetricVariable | null>;
  withVariables(variables: C3.Array<MetricVariable | null> | Array<IMetricVariable | null>): SimpleMetric;

  /**
   * the acronym associated with the metric
   * e.g. if a SimpleMetric has name TamperEventINTA, the acronym would be INTA
   */
  readonly acronym?: string | null;
  withAcronym(acronym: string | null): SimpleMetric;

  /**
   * Tags that give information about the categories of a metric
   */
  readonly tags?: C3.Array<string | null>;
  withTags(tags: C3.Array<string | null> | Array<string | null>): SimpleMetric;

  /**
   * The unique and required id of this instance.
   */
  readonly id: string;
  withId(id: string): SimpleMetric;

  /**
   * The src Type should be the entity for which we want to analyze data.
   *
   * eg. ServicePoint, Location, MeterAsset, etc.
   */
  readonly srcType: Type;
  withSrcType(srcType: IType): SimpleMetric;

  /**
   * Optional override to the source Type used for adhoc evaluation.
   */
  readonly srcTypeOverride?: Type | null;
  withSrcTypeOverride(srcTypeOverride: IType | null): SimpleMetric;

  /**
   * Path from the src Type to the Type where the metric expression OR tsDecl's data gets evaluated
   *
   * For cases where evaluation needs to happen on the same Type, do not specify the path
   */
  readonly path?: string | null;
  withPath(path: string | null): SimpleMetric;

  /**
   * Specifies interval for which this metric is to be cached
   */
  readonly cacheInterval?: string | null;
  withCacheInterval(cacheInterval: string | null): SimpleMetric;

  /**
   * Specifies details for caching this metric. Set this field if you want the metric to be cached on first evaluation
   *
   * For the cache to be invalidated automatically upon changes to the data, {@link MetricDependency} must not be empty.
   * If {@link MetricDependency} is empty, the user needs to perform
   *
   * ```js
   *   App.rebuild(AppRebuildSpec.make({metricDeps: true}))
   * ```
   */
  readonly cache?: SimpleMetricCacheSpec | null;
  withCache(cache: ISimpleMetricCacheSpec | null): SimpleMetric;

  /**
   * Specify the Timeseries declaration for data that needs to be converted to a timeseries
   * These data points are data in a regular Type but has timeseries like properties.
   *
   * Note: When timeseries is specified on a metric "expression" / "action" should not be specified.
   * either of "timeseries" / "action" / "expression" should be specified at any given point of time on a simple metric
   */
  readonly tsDecl?: TSDecl | null;
  withTsDecl(tsDecl: ITSDecl | null): SimpleMetric;

  /**
   * Specify the action declaration for action based metrics.
   * The following action will be called with source objects populated with the given include spec.
   *
   * In the ideal case scenario, action metric authors should not be required to do any more i/o in the action itself
   */
  readonly actionDecl?: ActionMetricDecl | null;
  withActionDecl(actionDecl: IActionMetricDecl | null): SimpleMetric;

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
  static fromJson(json: any | null): SimpleMetric | null;

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
  static fromJsonString(json: string | null): SimpleMetric | null;

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
  static fromXmlString(xml: string | null): SimpleMetric | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): SimpleMetric | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): SimpleMetric;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SimpleMetric;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): SimpleMetric;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SimpleMetric | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<SimpleMetric | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): SimpleMetric;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SimpleMetric;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): SimpleMetric;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): SimpleMetric;

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
  withField(field: string, value: any, doNotConvert?: boolean): SimpleMetric;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): SimpleMetric;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): SimpleMetric;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): SimpleMetric;

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
  withoutFieldAtPath(path: string): SimpleMetric;

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
  withoutField(field: string | null): SimpleMetric;

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
  withoutField(field: FieldType | null): SimpleMetric;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): SimpleMetric;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): SimpleMetric;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): SimpleMetric;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): SimpleMetric;

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
  defaultField(field: string): SimpleMetric;

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
  defaultField(field: FieldType): SimpleMetric;

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
  unsetField(field: string): SimpleMetric;

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
  unsetField(field: FieldType): SimpleMetric;

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
  removeField(field: string): SimpleMetric;

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
  removeField(field: FieldType): SimpleMetric;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): SimpleMetric;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): SimpleMetric;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): SimpleMetric;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): SimpleMetric;

  mergeJson(json: any | null): SimpleMetric;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): SimpleMetric;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): SimpleMetric;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<SimpleMetric | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<SimpleMetric | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<SimpleMetric | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<SimpleMetric | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<SimpleMetric | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, SimpleMetric | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, SimpleMetric | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<SimpleMetric | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<SimpleMetric | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): SimpleMetric;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): SimpleMetric;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): SimpleMetric;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): SimpleMetric;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): SimpleMetric;

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
  static make(fields: any, withDefaults?: boolean): SimpleMetric;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): SimpleMetric | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): SimpleMetric;

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
  afterMake(): SimpleMetric;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): SimpleMetric;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<SimpleMetric>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): SimpleMetric;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<SimpleMetric | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<SimpleMetric | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<SimpleMetric | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<SimpleMetric | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<SimpleMetric | null>;

  save(subPath?: string | null, contentType?: string | null): SimpleMetric;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: SimpleMetric | null, spec?: UpsertSpec | null): SimpleMetric | null;

  upsert(srcObj?: SimpleMetric | null, spec?: UpsertSpec | null): SimpleMetric | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

  /**
   * Checks if the name and id are valid for a metric.
   */
  checkNameAndIdValidity(): void;

  /**
   * Validates a metric.
   *
   * @return A list of any validations errors that were found while validating the metric.
   */
  validate(): C3.Array<string | null>;

  /**
   *  Generate metric definition(s) from the given template. This api will only replace the various elements (id/name/path..)
   *  in the metric to generate the various metric definitions by applying the bindings and replacing the template variables
   *  with the actual binding values. The resultant metrics will not have any variables since all the templatized variables
   *  will be replaced by the binding strings.
   *  Note: The template engine does not allow numbers to names of variables, so use alphabets as variables (e.g. a,b..)
   *  Example 1
   * ```js
   *   var m = SimpleMetric.make({"id": "${a}And${b}_Car", "name": "${a}And${b}","expression": "color == '${a}' && type == '${b}'"})
   *   var metrics = Metric.fromTemplate(m, { "a": ["White", "Black"],  "b": ["Sedan", "SUV"] });
   *   // return
   *   [{  "id": "WhiteAndSedan_Car",
   *        "name": "WhiteAndSedan",
   *        "expression": "color == 'White' && type == 'Sedan'"
   *    },
   *    {  "id": "BlackAndSUV_Car",
   *       "name": "BlackAndSUV",
   *       "expression": "color == 'Black' && type == 'SUV'"
   *    }]
   * ```
   *  Example 2
   *  ```js
   *   var m = SimpleMetric.make({"id": "${a}And${b}_Car", "name": "${a}And${b}","expression": "color == '${a}' && type == '${b}'"})
   *   var metrics = Metric.fromTemplate(m, { "a": ["White", "Black"],  "b": ["Sedan", "SUV"] }, true);
   *   // return
   *  [ {  "id": "WhiteAndSedan_Car",
   *       "name": "WhiteAndSedan",
   *       "expression": "color == 'White' && type == 'Sedan'"},
   *    {  "id": "BlackAndSUV_Car",
   *       "name": "BlackAndSUV",
   *      "expression": "color == 'Black' && type == 'SUV'"
   *    },
   *    {  "id": "BlackAndSedan_Car",
   *       "name": "BlackAndSedan",
   *       "expression": "color == 'Black' && type == 'Sedan'"
   *    },
   *    {  "id": "WhiteAndSUV_Car",
   *       "name": "WhiteAndSUV",
   *       "expression": "color == 'White' && type == 'SUV'"
   *    }]
   *  ```
   *  @param template
   *             Templatized metric definition that needs to be replaced with the binding value
   *  @param bindings
   *             Values for the template variables in the metric
   *  @param bindingCartesianProduct
   *             If set, takes the cartesian product of the individual variables. If not set, the cardinality of the variables
   *             specified in the bindings map need to be the same for each variable
   *  @return new metrics as a result of template substitution
   */
  static fromTemplate(template: Metric, bindings: C3.Map<string | null, C3.Array<any>>, bindingCartesianProduct?: boolean): C3.Array<Metric | null>;

  /**
   * Generate Simple & Compound metrics from the given TSDecl (simple metric) or expr (Compound Metric)
   */
  static fromTSDeclOrExpr(type?: Type | null, metrics?: C3.Map<string | null, TSDecl | null | string | null | null>): C3.Array<Metric | null>;

  /**
   * Value of the field used in metric evaluations. e.g. "id" for CompoundMetric / "name" in SimpleMetric
   * @returns the actual value of the above fields for the given metric
   */
  evalKeyFieldValue(): string;

  /**
   * Create {@link Feature} from the given metric
   */
  createFeature(subjectType: Type, interval: string): Feature;

  /**
   * Look up metric by Metric#evalKeyFieldValue
   */
  static forEvalKeyValue(evalType?: Type | null, metric: string): Metric | null;

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
  static fromString(s: string | null): SimpleMetric | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): SimpleMetric | null;

  /**
   * Check whether a metric is valid
   *
   * @param throwOnInvalid
   *        If true, an exception will be thrown if the metric is not valid.  Otherwise, the function will only
   *        return false if it isn't.
   *
   * @return A boolean value specifying if a metric is valid or not.
   */
  isValid(throwOnInvalid?: boolean): boolean;

  /**
   * Refresh any metric dependencies
   *
   * @param spec
   *          the parameters used for refreshing metric dependencies
   */
  static refreshMetricDeps(spec?: RefreshMetricDepsSpec | null): RefreshMetricDepsBatchJob | null;

  /**
   * Invalidates the metrics cache
   *
   * @param specs
   *                Spec indicating the metric and the source for which invalidation needs to happen
   */
  static invalidateCache(specs?: C3.Array<MetricInvalidationSpec | null>): void;

  /**
   * API to indicate whether a simple metric has been cached in the Persistent cache. Cache range is determined by
   * the {@link cache} field on the simple metric. The default number of months in the past is 60 (5 years) and number of
   * months in the future is 1. This can be changed by changing the metric definition.
   *
   * @param srcId
   *            The id of the source
   *
   * @param interval
   *            Interval for which cache range needs to be checked. If cacheInterval is populated and cache field is not
   *            or if there is only 1 interval in the intervals field on SimpleMetricCacheSpec
   *            then the system will automatically pick it up otherwise the user can provide a specific interval that
   *            he wants to check the range for
   *
   * @param srcType
   *            Needed if the source Type is different from the Type of the SimpleMetric. E.g. Simple metric
   *            might be getting evaluated on the child Type of the Type on which the simple metric is defined.
   *            Simple Metric might be defined on WeatherAware, however actual evaluation might be on Location, so
   *            evaluation source Type in this case is Location.
   *
   * @return cached time range, null if not cached, otherwise the range will return the time range for the cached metric.
   */
  cacheRange(srcId: string, interval?: string | null, srcType?: Type | null): TimeRange | null;

  /**
   * Generate the cache key for this cached metric
   *
   * @param srcId
   *            The id of the source
   *
   * @param interval
   *            Interval for which cache range needs to be checked. If cacheInterval is populated and cache field is not
   *            or if there is only 1 interval in the intervals field on SimpleMetricCacheSpec
   *            then the system will automatically pick it up otherwise the user can provide a specific interval that
   *            he wants to check the range for
   *
   * @param srcType
   *            Needed if the source Type is different from the Type of the SimpleMetric. E.g. Simple metric
   *            might be getting evaluated on the child Type of the Type on which the simple metric is defined.
   *            Simple Metric might be defined on WeatherAware, however actual evaluation might be on Location, so
   *            evaluation source Type in this case is Location.
   *
   * @return cache key
   */
  cacheId(srcId: string, interval: string, srcType: Type): string;

  /**
   * Returns the set of strings containing the include spec from the source Type to the end of the path & the non
   * timeseries expression fields. This include spec contains include string for:
   *
   * 1. Path
   *
   * 2. Non Timeseries Expression fields
   */
  includes(): C3.Set<string | null>;

  /**
   * Return the Type at the end of the path. If path is null, it will return the source Type
   */
  typeAtEndOfPath(): Type;

  /**
   * @returns all types referenced in the #path in metric
   */
  allTypesInPath(): C3.Array<Type | null>;

  /**
   * @returns all types referenced in metric
   */
  allReferencedTypes(): C3.Array<Type | null>;

  /**
   * Returns the set of string containing the include spec from the data point Type of the TSDecl object
   */
  tsDeclIncludes(): C3.Set<string | null>;

  /**
   * Returns the Type of the data point
   */
  tsDeclDataPointType(): Type | null;

  /**
   * Return the normalized ts header and the ts field for this metric if applicable, else return null
   */
  tsHeaderAndTsField(): Pair<Type | null, string | null> | null;

  /**
   * Builds the parsed expressions for an AsTs metric.
   *
   * @param throwOnPathNotFound
   *        If true and any expression references an invalid path, an exception will be thrown.  Otherwise, invalid
   *        expressions will be ignored.
   *
   * @return The parsed expressions for an AsTs metric.
   */
  buildAsTsMetricExprs(throwOnPathNotFound?: boolean): AsTsMetricExprs | null;

  /**
   * Gets the parsed expressions for an AsTs metric.
   *
   * @return The parsed expressions for an AsTs metric.
   */
  asTsMetricExprs(): AsTsMetricExprs | null;

  /**
   * Gets the source Type for a simple metric with the specified id.
   *
   * @param metricId
   *        Id of the simple metric.
   *
   * @return The source Type for the specified metric.
   */
  static srcTypeForId(metricId: string): Type | null;

  /**
   * @return the logical timeseries headed Type for an AsTs metric.
   */
  asTsMetricHeaderType(): Type | null;

  /**
   * @return the field path of the metric's path appended with the logical ts header path.
   */
  pathWithHeaderFieldPath(): any;

  /**
   * @return The canonicalized path used for various purposes.
   */
  safePath(): string | null;

  /**
   * @return list of metric groups that the metric belongs to (as indicated by the {@link AnalyticsListener} types).
   */
  static analyticsMetricGroups(metricId: string): C3.Array<string | null>;

  /**
   * Gets the include spec generated by the InputOptimizer for an expr/path.
   *
   * @param metricOrTsDecl
   *        SimpleMetric or TsDecl to get the include for.
   *
   * @param evalType
   *        Type the expression will be evaluated on.
   *
   * @param exprField
   *        Field in the metric containing the expression
   *
   * @param throwOnPathNotFound
   *        True indicates an exception should be thrown if a referenced path in the metric's expression could not
   *        be found.
   *
   * @return The include spec generated by the InputOptimizer for an expr/path.
   */
  static optimizedInclude(metricOrTsDecl: Obj, evalType: Type, exprField: string, throwOnPathNotFound?: boolean): string | null;

  /**
   * Gets all of the field paths for a metric.
   *
   * @param forMetricInvalidation
   *        True if we only want the path to the ts header (or as ts header). False if we want all of the paths.
   *
   * @param throwOnPathNotFound
   *        True indicates an exception should be thrown if a referenced path in the metric's expression could not
   *        be found.
   *
   * @return A list of field paths in the expression for a metric
   */
  fieldPaths(forMetricInvalidation?: boolean, throwOnPathNotFound?: boolean): MetricFieldPaths;

  /**
   * Resolves the field path for a metric.
   *
   * @param fieldPath
   *        Field path to resolve.
   * @param throwOnPathNotFound
   *        True indicates an exception should be thrown if a referenced path in the metric's expression could not
   *        be found.
   *
   * @return The requested field path.
   */
  resolveFieldPath(fieldPath: string, throwOnPathNotFound?: boolean): any;

  /**
   * @return The reference Type for the metric's path.
   */
  pathRefType(): Type;

  /**
   * Determines if a metric references a field anywhere in its path or expression.
   *
   * @param field
   *        Field to check.
   *
   * @return true if the metric references a field anywhere in its path or expression.
   */
  referencesField(field?: any): boolean;

  /**
   * Determines if a metric references a Type anywhere in its path or expression.
   *
   * @param type
   *        Type to check.
   *
   * @return true if the metric references a field anywhere in its path or expression.
   */
  referencesType(type: Type): boolean;

  /**
   * @return True if the metric specifies a custom action.
   */
  isActionMetric(): boolean;

  /**
   * @return True if the metric specifies a tsDecl.
   */
  isAsTsMetric(): boolean;

  /**
   * @return True if the metric path leads to a timeseries header.
   */
  isTsMetric(): boolean;

  /**
   * Gets a list of all metrics that are affected by a field. A metric is affected by a field if it is referenced
   * anywhere in the metric path or expression.
   *
   * @param field
   *        Field to check.
   *
   * @return List of metrics affected by the field.
   */
  static metricsForField(field?: any): C3.Array<SimpleMetric | null>;

  /**
   * Gets a list of all metrics that are affected by a Type. A metric is affected by a Type if it is referenced
   * anywhere in the metric path or expression.
   *
   * @param type
   *        Type to check.
   *
   * @return List of metrics affected by the type.
   */
  static metricsForType(type: Type): C3.Array<SimpleMetric | null>;

  /**
   * Determines if a metric has an analytics listener.
   *
   * @param metricId
   *        Metric id to check.
   *
   * @return True if the metric has an analytics listener.
   */
  static hasAnalyticsListener(metricId: string): boolean;

  /**
   * Determines if a metric has a metrics listener.
   *
   * @param metricId
   *        Metric id to check.
   *
   * @return True if the metric has a metrics listener.
   */
  static hasMetricsListener(metricId: string): boolean;

  /**
   * Strips off any array index at the end of the path.  This is necessary to process the metric.
   *
   * @param path
   *        Path to strip the array index from.
   *
   * @return The path with any array index at the end stripped off.
   */
  static stripArrayIndexAtEndOfPath(path: string): string | null;

  /**
   * Gets the best simple metric for a source Type and metric name.
   *
   * @param srcType
   *        Source Type to check.
   * @param metricName
   *        Metric name to check.
   *
   * @return The best simple metric for the source Type and metric name.
   */
  static bestMetric(srcType: Type, metricName: string): SimpleMetric | null;

  /**
   * Gets all metrics with a specified name.
   *
   * @param metricName
   *        Metric name to check for
   *
   * @return All SimpleMetrics
   */
  static metricsForName(metricName: string): C3.Array<SimpleMetric | null>;

  /**
   * Gets ids for all metrics with a specified name.
   *
   * @param metricName
   *        Metric name to check for
   *
   * @return Ids for all metrics with a specified name.
   */
  static metricIdsForName(metricName: string): C3.Array<string | null>;

  /**
   * @return All simple metrics.
   */
  static metrics(): C3.Array<SimpleMetric | null>;

  /**
   * Gets a simple metric by its id.
   *
   * @param metricId
   *        Id of the metric to get.
   *
   * @return The requested simple metric.
   */
  static metricForId(metricId: string): SimpleMetric | null;

  /**
   * @return If {@link srcTypeOverride} is set, return that, otherwise the {@link srcType} defined for the metric.
   */
  evalSrcType(): Type | null;

  /**
   * Checks/validates field paths for the metric.
   */
  checkFieldPaths(bindings?: C3.Array<string | null>): void;

  /**
   * @return The fkey field at the end of the path if the metric is an AsTs metric and null otherwise.
   */
  tsDeclFkeyFieldAtEndOfPath(): string | null;

  /**
   * @return The fkey field on the logical datapoint Type if the metric is an AsTs metric and null otherwise.
   */
  tsDeclFkeyFieldOnDpType(): string | null;

  /**
   * @return The evaluation mode for the metric.
   */
  mode(): string;

  /**
   * @return The path (defaulted to "this" if null) adjusted if the metric is a time invariant metric.
   */
  timeInvariantPath(): string;

  /**
   * @return True if the metric is time invariant.
   */
  isTimeInvariantMetric(): boolean;

  /**
   * @return The id of the unit specified for the metric, if any.
   */
  unitId(): string | null;

  /**
   * @return A map of variable values, keyed by name, defined on the metric.
   */
  variablesMap(): C3.Map<string | null, any>;

  /**
   * @return True if the metric has a cache interval specified.
   */
  hasCacheInterval(): boolean;

  /**
   * @return True if the metric is for a timed relation.
   */
  isTimedRelationMetric(): boolean;

  /**
   * @return The parsed action expression for the metric, if any.
   */
  parsedActionFunction(): MetricParsedAction | null;
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
