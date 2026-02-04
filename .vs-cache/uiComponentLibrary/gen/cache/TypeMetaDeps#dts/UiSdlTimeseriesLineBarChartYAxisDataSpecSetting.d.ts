// TypeScript definitions for the C3 type UiSdlTimeseriesLineBarChartYAxisDataSpecSetting

/**
 * A specification that describes how to use each field of the {@link dataType} for display in the {@link UiSdlTimeseriesLineBarChart}.
 * A single field can be mapped to only Y axis, so an instance of this type specifies how to display the Y axis
 * in a time series line bar chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlTimeseriesLineBarChartYAxisDataSpecSetting
 */
declare interface IUiSdlTimeseriesLineBarChartYAxisDataSpecSetting {

  /**
   * Provides a mapping from a data record returned by an api call, which may be in any shape,
   * to the shape required by the concrete data spec setting type implementation.
   */
  dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null};

  /**
   * The title to be shown above the yAxis line. This will override {@link UiSdlLineBarChartYAxisConfig#name}
   * default yAxis line title
   */
  yAxisTitle?: string | null | IUiSdlDynamicValueSpec | null | null;

  /**
   * An object that contains some overrides for Y Axis config such as Y Axis name location, rotation and gap.
   */
  yAxisStyleOverride?: IUiSdlLineBarChartYAxisConfigOverride | null;

  /**
   * The label to be shown in the legend.
   */
  legendLabel?: string | null | IUiSdlDynamicValueSpec | null | null;

  /**
   * The description of the legend label on hover
   */
  legendDescription?: string | null | IUiSdlDynamicValueSpec | null | null;

  /**
   * The icon of all legend items
   */
  legendIcon?: string | null;

  /**
   * The default color to be shown for this data series.
   */
  color?: string | null;

  /**
   * The period to convert to.
   */
  period?: IPeriod | null | string | null | null;

  /**
   * Aggregation function per metric if we are merging features in this set by aggregating or disaggregating on given
   * period. If not provided, will choose default agg function of SUM
   * Example for multiple metrics with different agg function: {"metric1": "SUM", "metric2": "AVG"}
   */
  periodAggregationStrategy?: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null;

  /**
   * The name of the metric to which these settings apply.
   */
  metricName?: string | null;

  /**
   * The type on which the metric is defined. Used to override {@link UiSdlComponentDataSpec#dataType}
   * when we want to show metrics defined on different types in the same component
   */
  dataType?: string | null;

  /**
   * This variable provides a way to provide values for fields at runtime for metrics.
   * Refer to {@link EvalMetricSpec#bindings} for more information
   */
  bindings?: any | null;

  /**
   * Id for the source type
   * Refer to {@link EvalMetricSpec#id} for more information
   */
  entityId?: string | null;

  /**
   * {@link Unit} to be used for the metric
   */
  unit?: IUnit | null;

  /**
   * {@link EvalMetricsOptions} to be taken into account when evaluating the metric.
   */
  options?: IEvalMetricsOptions | null;

  /**
   * Keeps track of the evalute action triggered in the datasource. Possible values
   * are evalMetric or rollupMetrics. Defaults to 'EVAL'.
   */
  evaluateAction?: string | null;

  /**
   * When we use an array of bindings to generate multiple series from one metric
   * every element in this array is the legend label for the corresponding binding.
   */
  bindingsLegendLabels?: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>;

  /**
   * Every element in this array is the legend description for the corresponding binding on legend hover
   * note that if bindingsLegendDescriptions don't match bindingsLegendLabels length, descriptions will not render
   */
  bindingsLegendDescriptions?: C3.Array<string | null> | Array<string | null>;

  /**
   * When we use an array of bindings to generate multiple series from one metric
   * every element in this array is the legend icon for the corresponding binding
   * note that if bindingsLegendIcons don't match bindingsLegendLabels length, icon will not render
   */
  bindingsLegendIcons?: C3.Array<string | null> | Array<string | null>;

  /**
   * When in synchronized mode, and we use an array of bindings to generate multiple series from one metric,
   * each element in this array is the grid height for its corresponding binding. Must match length of bindingsLegendLabels.
   */
  bindingsSynchronizedGridHeights?: C3.Array<number | null> | Array<number | null>;

  /**
   * The type of visualization. It could be either 'UiSdlLineBarChartBarVisualization', 'UiSdlLineBarChartPointVisualization' or 'UiSdlTimeseriesLineBarChartLineVisualization'.
   * To config it at json file, put visualization type value at "type" field alongside with other fields from the reference type.
   * For example:
   *     "visualizationType": {
   *       "type": "UiSdlTimeseriesLineBarChartLineVisualization",
   *       "lineStyle": "Dotted"
   *     }
   */
  visualizationType?: IUiSdlLineBarChartBarVisualization | null | IUiSdlLineBarChartPointVisualization | null | IUiSdlTimeseriesLineBarChartLineVisualization | null | IUiSdlLineBarChartYAxisMarkerLineVisualization | null | IUiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | IUiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | IUiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null;

  /**
   * The related markers to this series. Used to associate a series to 0 or more markers.
   */
  relatedMarkers?: C3.Array<string | null> | Array<string | null>;

  /**
   * Upper bound shade above timeseries data
   * ** Must have a unique entityId **
   */
  upperBound?: IUiSdlMetricBasedDataSpecSetting | null;

  /**
   * Lower bound shade below timeseries data
   * ** Must have a unique entityId **
   */
  lowerBound?: IUiSdlMetricBasedDataSpecSetting | null;

  /**
   * When in synchronized mode, a spec to allow further control over how separate chart grids are rendered.
   */
  synchronizationSpec?: IUiSdlSynchronizedChartDataSpecSetting | null;

  /**
   * Rollup function options for collection fields.
   */
  aggregation?: string | null;
}

/**
 * A specification that describes how to use each field of the {@link dataType} for display in the {@link UiSdlTimeseriesLineBarChart}.
 * A single field can be mapped to only Y axis, so an instance of this type specifies how to display the Y axis
 * in a time series line bar chart.
 *
 * @remarks this represents a made instance of UiSdlTimeseriesLineBarChartYAxisDataSpecSetting
 */
declare class UiSdlTimeseriesLineBarChartYAxisDataSpecSetting extends Obj {

  /**
   * Provides a mapping from a data record returned by an api call, which may be in any shape,
   * to the shape required by the concrete data spec setting type implementation.
   */
  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The title to be shown above the yAxis line. This will override {@link UiSdlLineBarChartYAxisConfig#name}
   * default yAxis line title
   */
  readonly yAxisTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withYAxisTitle(yAxisTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * An object that contains some overrides for Y Axis config such as Y Axis name location, rotation and gap.
   */
  readonly yAxisStyleOverride?: UiSdlLineBarChartYAxisConfigOverride | null;
  withYAxisStyleOverride(yAxisStyleOverride: IUiSdlLineBarChartYAxisConfigOverride | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The label to be shown in the legend.
   */
  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The description of the legend label on hover
   */
  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The icon of all legend items
   */
  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The default color to be shown for this data series.
   */
  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The period to convert to.
   */
  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Aggregation function per metric if we are merging features in this set by aggregating or disaggregating on given
   * period. If not provided, will choose default agg function of SUM
   * Example for multiple metrics with different agg function: {"metric1": "SUM", "metric2": "AVG"}
   */
  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The name of the metric to which these settings apply.
   */
  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The type on which the metric is defined. Used to override {@link UiSdlComponentDataSpec#dataType}
   * when we want to show metrics defined on different types in the same component
   */
  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * This variable provides a way to provide values for fields at runtime for metrics.
   * Refer to {@link EvalMetricSpec#bindings} for more information
   */
  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Id for the source type
   * Refer to {@link EvalMetricSpec#id} for more information
   */
  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * {@link Unit} to be used for the metric
   */
  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * {@link EvalMetricsOptions} to be taken into account when evaluating the metric.
   */
  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Keeps track of the evalute action triggered in the datasource. Possible values
   * are evalMetric or rollupMetrics. Defaults to 'EVAL'.
   */
  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * When we use an array of bindings to generate multiple series from one metric
   * every element in this array is the legend label for the corresponding binding.
   */
  readonly bindingsLegendLabels?: C3.Array<UiSdlDynamicValueSpec | null>;
  withBindingsLegendLabels(bindingsLegendLabels: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Every element in this array is the legend description for the corresponding binding on legend hover
   * note that if bindingsLegendDescriptions don't match bindingsLegendLabels length, descriptions will not render
   */
  readonly bindingsLegendDescriptions?: C3.Array<string | null>;
  withBindingsLegendDescriptions(bindingsLegendDescriptions: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * When we use an array of bindings to generate multiple series from one metric
   * every element in this array is the legend icon for the corresponding binding
   * note that if bindingsLegendIcons don't match bindingsLegendLabels length, icon will not render
   */
  readonly bindingsLegendIcons?: C3.Array<string | null>;
  withBindingsLegendIcons(bindingsLegendIcons: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * When in synchronized mode, and we use an array of bindings to generate multiple series from one metric,
   * each element in this array is the grid height for its corresponding binding. Must match length of bindingsLegendLabels.
   */
  readonly bindingsSynchronizedGridHeights?: C3.Array<number | null>;
  withBindingsSynchronizedGridHeights(bindingsSynchronizedGridHeights: C3.Array<number | null> | Array<number | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The type of visualization. It could be either 'UiSdlLineBarChartBarVisualization', 'UiSdlLineBarChartPointVisualization' or 'UiSdlTimeseriesLineBarChartLineVisualization'.
   * To config it at json file, put visualization type value at "type" field alongside with other fields from the reference type.
   * For example:
   *     "visualizationType": {
   *       "type": "UiSdlTimeseriesLineBarChartLineVisualization",
   *       "lineStyle": "Dotted"
   *     }
   */
  readonly visualizationType?: UiSdlLineBarChartBarVisualization | null | UiSdlLineBarChartPointVisualization | null | UiSdlTimeseriesLineBarChartLineVisualization | null | UiSdlLineBarChartYAxisMarkerLineVisualization | null | UiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | UiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | UiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null;
  withVisualizationType(visualizationType: IUiSdlLineBarChartBarVisualization | null | IUiSdlLineBarChartPointVisualization | null | IUiSdlTimeseriesLineBarChartLineVisualization | null | IUiSdlLineBarChartYAxisMarkerLineVisualization | null | IUiSdlLineBarChartYAxisMarkerRangeShadingVisualization | null | IUiSdlTimeseriesLineBarChartXAxisAreaShadingVisualization | null | IUiSdlLineBarChartXAxisMarkerRangeShadingVisualization | null | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * The related markers to this series. Used to associate a series to 0 or more markers.
   */
  readonly relatedMarkers?: C3.Array<string | null>;
  withRelatedMarkers(relatedMarkers: C3.Array<string | null> | Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Upper bound shade above timeseries data
   * ** Must have a unique entityId **
   */
  readonly upperBound?: UiSdlMetricBasedDataSpecSetting | null;
  withUpperBound(upperBound: IUiSdlMetricBasedDataSpecSetting | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Lower bound shade below timeseries data
   * ** Must have a unique entityId **
   */
  readonly lowerBound?: UiSdlMetricBasedDataSpecSetting | null;
  withLowerBound(lowerBound: IUiSdlMetricBasedDataSpecSetting | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * When in synchronized mode, a spec to allow further control over how separate chart grids are rendered.
   */
  readonly synchronizationSpec?: UiSdlSynchronizedChartDataSpecSetting | null;
  withSynchronizationSpec(synchronizationSpec: IUiSdlSynchronizedChartDataSpecSetting | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Rollup function options for collection fields.
   */
  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  static fromJson(json: any | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null;

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
  static fromJsonString(json: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null;

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
  static fromXmlString(xml: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withoutFieldAtPath(path: string): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withoutField(field: string | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withoutField(field: FieldType | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  defaultField(field: string): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  defaultField(field: FieldType): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  unsetField(field: string): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  unsetField(field: FieldType): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  removeField(field: string): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  removeField(field: FieldType): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  mergeJson(json: any | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  static make(fields: any, withDefaults?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

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
  afterMake(): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlTimeseriesLineBarChartYAxisDataSpecSetting>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlTimeseriesLineBarChartYAxisDataSpecSetting;

  static validatePeriod(period?: string | null): Period | null;

  /**
   * A wrapper function to pass in period and agg arguments to {@EvalMetricsResultBase.toPeriod} function.
   * See more docs from the platform type.
   */
  static evalMetricsResultAndToPeriod(spec?: EvalMetricsSpec | null, type?: Type | null, period?: Period | null | string | null | null, aggregationStrategy?: C3.Map<string | null, string | null> | string | null | null): EvalMetricsResult | null;
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
