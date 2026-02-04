// TypeScript definitions for the C3 type UiSdlCategoricalLineBarChart

/**
 * Type to represent a categorical line bar chart.  We will use this type if the user selects to configure
 * a categorical line bar chart rather than a timeseries chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlCategoricalLineBarChart
 */
declare interface IUiSdlCategoricalLineBarChart {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The specification used for retrieving data displayed by the grid.
   */
  dataSpec?: IUiSdlCategoricalLineBarChartDataSpec | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * A list of hidden series id.
   */
  hiddenSeries?: C3.Array<string | null> | Array<string | null>;

  /**
   * A list of default colors.
   * If a series doesn't have specified color it will take color from this list of foundation design tokens in order.
   * slate-50, blue-60, cyan-40, purple-50, plum-70, forest-40, choco-60, cyan-60, plum-30, olive-50, purple-70, forest-70
   */
  defaultColors?: C3.Array<string | null> | Array<string | null>;

  /**
   * The background style for the chart.
   */
  backgroundStyle?: string | null;

  /**
   * The height of the component in pixels.
   */
  height?: number | null;

  /**
   * Whether to enable tooltips.
   */
  tooltipEnabled?: boolean;

  /**
   * The decimal precision to show on tooltip values.
   */
  tooltipValuesDecimalPrecision?: number | null;

  /**
   * Whether or not to show units in tooltip
   */
  tooltipUnitEnabled?: boolean;

  tooltipConfig?: IUiSdlTooltipBaseSettings | null;

  /**
   * Data area zooming. If set to `true`, a zoom icon will be displayed in the
   * toolbox and users will be able to zoom in by dragging within the chart area.
   */
  toolboxDataZoom?: boolean;

  /**
   * Holds the data to display in the grid.
   */
  data?: C3.Array<Obj | null> | Array<IObj | null>;

  /**
   * Chart header.
   */
  header?: IUiSdlComponentHeader | null;

  /**
   * Y-axis config type.
   */
  yAxis?: IUiSdlLineBarChartYAxisConfig | null;

  /**
   *  Configuration for the grid.
   * Includes left, right, top, bottom padding for the chart
   */
  grid?: IUiSdlChartEChartsGrid | null;

  /**
   * The chart legend - information for each series.
   */
  legend?: IUiSdlChartLegend | null;

  /**
   * Whether to allow users to zoom the chart data via a scrubber tool
   * displayed directly below the chart.
   */
  zoomEnabled?: boolean;

  /**
   * The default type of chart to be displayed. This is a fallback value used
   * when a series does not have a specific series type configured.
   */
  defaultChartType?: string | null;

  /**
   * Show a dropdown menu in the chart header to download the chart.
   * The user can choose to download one of the following file types: .png, .jpeg, .csv
   */
  showDownloadOptions?: boolean;

  /**
   * Show a toggle next to the download options that will display data labels
   */
  showDataLabelsToggle?: boolean;

  /**
   * If `true`, stack all series whose series type is `'bar'`.
   */
  stackBars?: boolean;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   */
  emptyState?: IUiSdlComponentRef<UiSdlEmptyState | null> | null;

  /**
   * The number of actions to display on the chart header.
   */
  chartActionsCollapseThreshold?: number | null;

  /**
   * What is used to fill in missing seriesData when exporting to .csv data
   */
  csvMissingDataFiller?: string | null;

  /**
   * Chart data layout. If 'HORIZONTAL' is chosen, the x- and y-axis positions
   * will reverse and data will render horizontally.
   */
  chartLayout?: string | null;

  /**
   * X-axis configuration.
   */
  xAxis?: IUiSdlLineBarChartXAxisConfig | null;

  /**
   * Whether or not to remove series not specified in the xAxisField or yAxisField of dataSpec
   */
  removeExtraSeries?: boolean;

  /**
   * Configurations to add vertical line on the graph.
   */
  markLinesDataSpec?: IUiSdlCategoricalLineBarChartMarkLineDataSpec | null;
}

/**
 * Type to represent a categorical line bar chart.  We will use this type if the user selects to configure
 * a categorical line bar chart rather than a timeseries chart.
 *
 * @remarks this represents a made instance of UiSdlCategoricalLineBarChart
 */
declare class UiSdlCategoricalLineBarChart extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCategoricalLineBarChart;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlCategoricalLineBarChart;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlCategoricalLineBarChart;

  /**
   * The specification used for retrieving data displayed by the grid.
   */
  readonly dataSpec?: UiSdlCategoricalLineBarChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCategoricalLineBarChartDataSpec | null): UiSdlCategoricalLineBarChart;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCategoricalLineBarChart;

  /**
   * A list of hidden series id.
   */
  readonly hiddenSeries?: C3.Array<string | null>;
  withHiddenSeries(hiddenSeries: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChart;

  /**
   * A list of default colors.
   * If a series doesn't have specified color it will take color from this list of foundation design tokens in order.
   * slate-50, blue-60, cyan-40, purple-50, plum-70, forest-40, choco-60, cyan-60, plum-30, olive-50, purple-70, forest-70
   */
  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlCategoricalLineBarChart;

  /**
   * The background style for the chart.
   */
  readonly backgroundStyle?: string | null;
  withBackgroundStyle(backgroundStyle: string | null): UiSdlCategoricalLineBarChart;

  /**
   * The height of the component in pixels.
   */
  readonly height?: number | null;
  withHeight(height: number | null): UiSdlCategoricalLineBarChart;

  /**
   * Whether to enable tooltips.
   */
  readonly tooltipEnabled?: boolean;
  withTooltipEnabled(tooltipEnabled: boolean): UiSdlCategoricalLineBarChart;

  /**
   * The decimal precision to show on tooltip values.
   */
  readonly tooltipValuesDecimalPrecision?: number | null;
  withTooltipValuesDecimalPrecision(tooltipValuesDecimalPrecision: number | null): UiSdlCategoricalLineBarChart;

  /**
   * Whether or not to show units in tooltip
   */
  readonly tooltipUnitEnabled?: boolean;
  withTooltipUnitEnabled(tooltipUnitEnabled: boolean): UiSdlCategoricalLineBarChart;

  readonly tooltipConfig?: UiSdlTooltipBaseSettings | null;
  withTooltipConfig(tooltipConfig: IUiSdlTooltipBaseSettings | null): UiSdlCategoricalLineBarChart;

  /**
   * Data area zooming. If set to `true`, a zoom icon will be displayed in the
   * toolbox and users will be able to zoom in by dragging within the chart area.
   */
  readonly toolboxDataZoom?: boolean;
  withToolboxDataZoom(toolboxDataZoom: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Holds the data to display in the grid.
   */
  readonly data?: C3.Array<Obj | null>;
  withData(data: C3.Array<Obj | null> | Array<IObj | null>): UiSdlCategoricalLineBarChart;

  /**
   * Chart header.
   */
  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlCategoricalLineBarChart;

  /**
   * Y-axis config type.
   */
  readonly yAxis?: UiSdlLineBarChartYAxisConfig | null;
  withYAxis(yAxis: IUiSdlLineBarChartYAxisConfig | null): UiSdlCategoricalLineBarChart;

  /**
   *  Configuration for the grid.
   * Includes left, right, top, bottom padding for the chart
   */
  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlCategoricalLineBarChart;

  /**
   * The chart legend - information for each series.
   */
  readonly legend?: UiSdlChartLegend | null;
  withLegend(legend: IUiSdlChartLegend | null): UiSdlCategoricalLineBarChart;

  /**
   * Whether to allow users to zoom the chart data via a scrubber tool
   * displayed directly below the chart.
   */
  readonly zoomEnabled?: boolean;
  withZoomEnabled(zoomEnabled: boolean): UiSdlCategoricalLineBarChart;

  /**
   * The default type of chart to be displayed. This is a fallback value used
   * when a series does not have a specific series type configured.
   */
  readonly defaultChartType?: string | null;
  withDefaultChartType(defaultChartType: string | null): UiSdlCategoricalLineBarChart;

  /**
   * Show a dropdown menu in the chart header to download the chart.
   * The user can choose to download one of the following file types: .png, .jpeg, .csv
   */
  readonly showDownloadOptions?: boolean;
  withShowDownloadOptions(showDownloadOptions: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Show a toggle next to the download options that will display data labels
   */
  readonly showDataLabelsToggle?: boolean;
  withShowDataLabelsToggle(showDataLabelsToggle: boolean): UiSdlCategoricalLineBarChart;

  /**
   * If `true`, stack all series whose series type is `'bar'`.
   */
  readonly stackBars?: boolean;
  withStackBars(stackBars: boolean): UiSdlCategoricalLineBarChart;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   */
  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlCategoricalLineBarChart;

  /**
   * The number of actions to display on the chart header.
   */
  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlCategoricalLineBarChart;

  /**
   * What is used to fill in missing seriesData when exporting to .csv data
   */
  readonly csvMissingDataFiller?: string | null;
  withCsvMissingDataFiller(csvMissingDataFiller: string | null): UiSdlCategoricalLineBarChart;

  /**
   * Chart data layout. If 'HORIZONTAL' is chosen, the x- and y-axis positions
   * will reverse and data will render horizontally.
   */
  readonly chartLayout?: string | null;
  withChartLayout(chartLayout: string | null): UiSdlCategoricalLineBarChart;

  /**
   * X-axis configuration.
   */
  readonly xAxis?: UiSdlLineBarChartXAxisConfig | null;
  withXAxis(xAxis: IUiSdlLineBarChartXAxisConfig | null): UiSdlCategoricalLineBarChart;

  /**
   * Whether or not to remove series not specified in the xAxisField or yAxisField of dataSpec
   */
  readonly removeExtraSeries?: boolean;
  withRemoveExtraSeries(removeExtraSeries: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Configurations to add vertical line on the graph.
   */
  readonly markLinesDataSpec?: UiSdlCategoricalLineBarChartMarkLineDataSpec | null;
  withMarkLinesDataSpec(markLinesDataSpec: IUiSdlCategoricalLineBarChartMarkLineDataSpec | null): UiSdlCategoricalLineBarChart;

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
  static fromJson(json: any | null): UiSdlCategoricalLineBarChart | null;

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
  static fromJsonString(json: string | null): UiSdlCategoricalLineBarChart | null;

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
  static fromXmlString(xml: string | null): UiSdlCategoricalLineBarChart | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlCategoricalLineBarChart | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlCategoricalLineBarChart;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlCategoricalLineBarChart;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlCategoricalLineBarChart | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlCategoricalLineBarChart | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlCategoricalLineBarChart;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlCategoricalLineBarChart;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlCategoricalLineBarChart;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlCategoricalLineBarChart;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlCategoricalLineBarChart;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlCategoricalLineBarChart;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlCategoricalLineBarChart;

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
  withoutFieldAtPath(path: string): UiSdlCategoricalLineBarChart;

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
  withoutField(field: string | null): UiSdlCategoricalLineBarChart;

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
  withoutField(field: FieldType | null): UiSdlCategoricalLineBarChart;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlCategoricalLineBarChart;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlCategoricalLineBarChart;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlCategoricalLineBarChart;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlCategoricalLineBarChart;

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
  defaultField(field: string): UiSdlCategoricalLineBarChart;

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
  defaultField(field: FieldType): UiSdlCategoricalLineBarChart;

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
  unsetField(field: string): UiSdlCategoricalLineBarChart;

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
  unsetField(field: FieldType): UiSdlCategoricalLineBarChart;

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
  removeField(field: string): UiSdlCategoricalLineBarChart;

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
  removeField(field: FieldType): UiSdlCategoricalLineBarChart;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlCategoricalLineBarChart;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlCategoricalLineBarChart;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlCategoricalLineBarChart;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlCategoricalLineBarChart;

  mergeJson(json: any | null): UiSdlCategoricalLineBarChart;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlCategoricalLineBarChart;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlCategoricalLineBarChart | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlCategoricalLineBarChart | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlCategoricalLineBarChart | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlCategoricalLineBarChart | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlCategoricalLineBarChart | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlCategoricalLineBarChart | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlCategoricalLineBarChart | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlCategoricalLineBarChart | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlCategoricalLineBarChart | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlCategoricalLineBarChart;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlCategoricalLineBarChart;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlCategoricalLineBarChart;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlCategoricalLineBarChart;

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
  static make(fields: any, withDefaults?: boolean): UiSdlCategoricalLineBarChart;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlCategoricalLineBarChart | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlCategoricalLineBarChart;

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
  afterMake(): UiSdlCategoricalLineBarChart;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlCategoricalLineBarChart;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlCategoricalLineBarChart>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlCategoricalLineBarChart;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlCategoricalLineBarChart | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlCategoricalLineBarChart | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlCategoricalLineBarChart | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlCategoricalLineBarChart | null> | null>;

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
  dependencies(): MetadataDeps<UiSdlCategoricalLineBarChart | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlCategoricalLineBarChart;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlCategoricalLineBarChart | null, spec?: UpsertSpec | null): UiSdlCategoricalLineBarChart | null;

  upsert(srcObj?: UiSdlCategoricalLineBarChart | null, spec?: UpsertSpec | null): UiSdlCategoricalLineBarChart | null;

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
  static fromString(s: string | null): UiSdlCategoricalLineBarChart | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlCategoricalLineBarChart | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlCategoricalLineBarChart, state: UiSdlReduxState): UiSdlCategoricalLineBarChart | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Triggered to update chart hidden series.
   *
   * @param id
   *            Id of the component.
   * @param name
   *            The name of the series to hide.
   *
   * @return A `HIDDEN_SERIES_UPDATE` action for this instance with the following properties:
   * - payload {string} The name of the series.
   */
  static updateHiddenSeriesAction(id?: string | null, name: string): UiSdlHideChartSeriesHiddenSeriesUpdateAction | null;

  /**
   * Listens for actions of type `HIDDEN_SERIES_UPDATE` and updates internal field {@link hiddenSeries}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static hiddenSeriesUpdateEffect(state?: UiSdlReduxState | null, action?: UiSdlHideChartSeriesHiddenSeriesUpdateAction | null): UiSdlReduxState | null;

  /**
   * Private helper function to generate a filter expression from {@link fieldValues}.
   *
   * @param filterValues
   *         A mapping of field names to values.
   *
   * @return string
   *         The filter string representing the {@link fieldValues}.
   */
  static generateFilterString(fieldValues?: C3.Map<string | null, any>): string | null;

  /**
   * Private helper function to get relevant field values for this specific component from raw field values.
   * Every component at this page should call this helper function to get the relevant field values.
   * What it does is loop over raw field values and only look at the fields that have the same data type at
   * `dataMappings` field as the data type used in data spec.  Also if applicable, it will transform the fieldNames
   * as specified in the {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
   * {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
   *
   * @param fieldValues
   *           A mapping of field names to values.
   * @param typeName
   *           The name of the type to get relevant fields for.
   * @param componentId
   *           Optional componentId; this will be used when checking if there are any component field bindings; if so,
   *           the fieldName will be transformed to that which is specified in the
   *           {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
   *           {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
   *
   * @return Only relevant field values.
   */
  static getRelevantFieldValues(fieldValues: C3.Map<string | null, any>, typeName?: string | null, componentId?: string | null): C3.Map<string | null, any>;

  /**
   * Generate each filter string element of final filter string.
   *
   * @param item
   *          Json config of one field to filter on.
   * @param field
   *          Field path on type.
   */
  static generateFilterStringElem(item?: any, field?: string | null): string | null;

  /**
   * Transform fieldName for this specific component based on the field bindings.
   * Will determine which field value applies to the current component and what field to assign that value to.
   *
   * @param fieldName
   *           The fieldName which may be transformed.
   * @param fieldValue
   *           The fieldValue associated with the fieldName.
   * @param componentId
   *           The componentId for the component to be filtered.
   *
   * @return Only relevant field values.
   */
  static transformFieldNameForComponentBinding(fieldName: string, fieldValue: C3.Map<string | null, any>, componentId: string): string;

  /**
   * Triggers `FILTER_SUBMIT` action.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static filterSubmitEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `ADVANCED_FILTER_SUBMIT` action.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static advancedFilterSubmitEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Action to update the title for the time series line bar chart.
   *
   * @param id
   *           Id of the component.
   * @param title
   *           Title to update
   *
   * @returns a `TITLE_UPDATE` action for this instance with the following properties:
   * - payload {
   *      header: {
   *        titles: string
   *      },
   *      componentId: string
   *   }
   */
  static updateTitleAction(id: string, title: string): UiSdlTitleUpdateAction | null;

  /**
   * Listens for actions of type 'TITLE_UPDATE' and updates the title
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static updateTitleReducer(state?: UiSdlReduxState | null, action?: UiSdlTitleUpdateAction | null): UiSdlReduxState | null;

  /**
   * Action to update the xAxis configuration for the time series.
   *
   * @param id
   *           Id of the component.
   * @param xAxis
   *           xAxis configuration to update
   *
   * @returns a `X_AXIS_UPDATE` action for this instance with the following properties:
   * - payload {
   *      xAxis: UiSdlLineBarChartXAxisConfig,
   *      componentId: string
   *   }
   */
  static updateXAxisAction(id: string, xAxis: UiSdlLineBarChartXAxisConfig | null | UiSdlHistogramXAxisConfig | null): UiSdlUpdateXAxisAction | null;

  /**
   * Listens for actions of type 'X_AXIS_UPDATE' and updates the xAxis configuration
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static updateXAxisReducer(state?: UiSdlReduxState | null, action?: UiSdlUpdateXAxisAction | null): UiSdlReduxState | null;

  /**
   * Action to update the yAxis configuration for the time series.
   *
   * @param id
   *           Id of the component.
   * @param yAxis
   *           yAxis configuration to update
   *
   * @returns a `Y_AXIS_UPDATE` action for this instance with the following properties:
   * - payload {
   *      yAxis: UiSdlLineBarChartYAxisConfig,
   *      componentId: string
   *   }
   */
  static updateYAxisAction(id: string, yAxis: UiSdlLineBarChartYAxisConfig | null | UiSdlHistogramYAxisConfig | null): UiSdlUpdateYAxisAction | null;

  /**
   * Listens for actions of type 'Y_AXIS_UPDATE' and updates the yAxis configuration
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static updateYAxisReducer(state?: UiSdlReduxState | null, action?: UiSdlUpdateYAxisAction | null): UiSdlReduxState | null;

  /**
   * Generates the spec that is merged into the chart's data source in {@link UiSdlLineBarChart#filterSubmitEpic}.
   *
   * @param relevantFields
   *           A mapping of relevant field names to values.
   * @param componentId
   *           The componentId that the generated spec applies to.
   * @param typeName
   *           The type applying to the component.
   *
   * @returns A spec.
   */
  static generateSpec(relevantFields?: C3.Map<string | null, any>, componentId?: string | null, typeName?: string | null): C3.Map<string | null, any>;

  /**
   * Triggered when a point on the chart is clicked.
   *
   * @param id
   *            Id of the component.
   * @param point
   *           An object which represents data for the point that was clicked
   *           with the following shape:
   *     {
   *         data: an array with x and y values
   *         dataIndex: the index in the series of the point clicked
   *         name: the point label (what appears on the x axis)
   *         seriesIndex: the index of the series that was clicked (among all series on the chart)
   *         seriesName: the series label
   *         type: the type of event, e.g. "click", "hover" etc.
   *         value: an array of x and y values
   *     }
   * @return A `CHART_CLICK` action with the passed in series array as the payload.
   */
  static clickChartAction(id?: string | null, point?: Obj | null): UiSdlChartClickAction | null;

  /**
   * Triggered to add a Y axis marker to the chart that is related to an specific metric.
   *
   * @param id
   *           Id of the component.
   * @param markerSpec
   *           The marker spec to add.
   */
  static addYAxisMarkerAction(id?: string | null, markerSpec?: UiSdlLineBarChartYAxisMarkerLineSpec | null): UiSdlLineBarChartAddYAxisMarkerAction | null;

  /**
   * Adds a Y axis marker to the chart from redux state of the component.
   */
  static yAxisMarkerAddReducer(state?: UiSdlReduxState | null, action?: UiSdlLineBarChartAddYAxisMarkerAction | null): UiSdlReduxState | null;

  /**
   * Triggered to update the grid value.
   *
   * @param id
   *           Id of the component.
   * @param grid
   *           New grid value.
   */
  static updateChartGridAction(id?: string | null, grid?: UiSdlChartEChartsGrid | null): UiSdlChartGridUpdateAction | null;

  /**
   * Updates the chart grid from redux state of the component.
   */
  static chartGridUpdateReducer(state?: UiSdlReduxState | null, action?: UiSdlChartGridUpdateAction | null): UiSdlReduxState | null;

  static addXAxisShadingAction(id?: string | null, markerIdentifier?: string | null, fromDate?: DateTime | null, toDate?: DateTime | null, areaLabel?: string | null): UiSdlXAxisShadingAddAction | null;

  static xAxisShadingAddReducer(state?: UiSdlReduxState | null, action?: UiSdlXAxisShadingAddAction | null): UiSdlReduxState | null;
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
