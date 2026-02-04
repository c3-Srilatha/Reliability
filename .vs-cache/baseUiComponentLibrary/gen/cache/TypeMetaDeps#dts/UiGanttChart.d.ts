// TypeScript definitions for the C3 type UiGanttChart

/**
 * `UiGanttChart` is a component focused on visualizing a Gantt chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiGanttChart
 */
declare interface IUiGanttChart {

  /**
   * Various system fields.
   */
  meta?: IMeta;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string;

  /**
   * The specification used for retrieving data displayed by the Gantt chart.
   */
  dataSpec?: IUiGanttChartDataSpec;

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
   * A list of default colors.
   * If a series doesn't have specified color it will take color from here in order.
   */
  defaultColors?: Array_Type<string> | Array<string>;

  /**
   * Holds the data to display in the Gantt chart.
   */
  data?: IFetchResult<Obj>;

  /**
   * Chart header.
   */
  header?: IUiSdlComponentHeader;

  /**
   * Chart interactions.
   */
  interactions?: IUiGanttChartInteractionConfig;

  /**
   * The xAxis configuration for this Gantt chart that determines the start/end date.
   */
  xAxis?: IUiGanttChartXAxisStaticConfig;

  /**
   * The yAxis name for this Gantt chart.
   */
  yAxisName?: string;

  /**
   * The puck size configuration.
   */
  rowHeight?: string;

  /**
   * Horizontal label alignment on a puck.
   */
  puckLabelHorizontalAlignment?: string;

  /**
   * Vertical label alignment on a puck.
   */
  puckLabelVerticalAlignment?: string;

  /**
   * The decimal precision to show on the puck tooltips.
   */
  tooltipDecimalPrecision?: number;

  /**
   * Set this field value when "Show Lineage" or "Hide Lineage" is selected.
   */
  showLineage?: boolean;

  /**
   * Whether the user has entered multi-select mode.
   */
  multiSelectMode?: boolean;

  /**
   * Whether data should be automatically saved on puck drop.
   */
  saveDataOnDrop?: boolean;

  /**
   * Whether overlapped pucks should be stacking.
   */
  showStacking?: boolean;

  /**
   * Whether the cursor tracking line should be shown.
   */
  mouseTracking?: boolean;

  /**
   * Whether to show the y-axis grid line.
   */
  showYaxisGridLine?: boolean;

  /**
   * Whether to hide empty tooltip value (i.e. a line with just tooltip label).
   */
  hideEmptyTooltipValue?: boolean;

  /**
   * If set to false UTC time will be shown in the exported CSV.
   */
  exportInLocalTime?: boolean;

  /**
   * Sets a specific height (in pixels) for the Gantt chart container. If set, and the Gantt chart height exceeds the
   * value in this field, the chart will be scrollable.
   */
  fixedContainerHeight?: number;

  /**
   * When in "show dependencies" state, only the selected puck and any dependencies should be shown in their normal
   * color state.  All other pucks should be de-emphasized.
   */
  puckDeemphasizedColor?: string;

  /**
   * Color string for union pucks (i.e. union of overlapping pucks).
   */
  unionPuckColor?: string;

  /**
   * The number of chart actions to display on the grid header. If there are more, an additional chart action
   * icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
   * chart action.
   *
   * Chart actions that are configured outside of the {@link chartActions} field do not count towards this limit.
   * The additional chart action itself does count towards the limit. Examples:
   *
   * - If chartActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
   *   chart header, and there is no additional actions icon.
   * - If chartActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
   *   chart header will show action "A" and the additional actions icon.  Clicking the additional actions icon
   *   will show a dropdown containing actions "B" and "C".
   */
  chartActionsCollapseThreshold?: number;

  /**
   * The set of actions that don't depend on a selected puck, e.g., export, refresh. A toggleable group of actions can
   * also be specified. When considering the `chartActionsCollapseThreshold`, consider the chart actions to be
   * flattened. Listen to triggers of the chart actions through `CHART_ACTION_CLICK_${actionSuffix}`.
   */
  chartActions?: Array_Type<UiSdlActionGroup> | Array<IUiSdlActionGroup>;

  /**
   * The number of puck actions to display on the chart header.
   * Similar logic to `chartActionsCollapseThreshold`. See the other field for details.
   */
  multiplePuckActionsCollapseThreshold?: number;

  /**
   * The action type for the selected puck.
   * This field is used with {@link multiplePuckActions} to display the puck actions.
   */
  puckActionType?: string;

  /**
   * The set of actions that apply to pucks.
   * Those actions will be visible only if at least one puck has been selected.
   * Listen to triggers of the puck actions through `MULTIPLE_PUCK_ACTION_CLICK_${actionSuffix}`.
   * The key must be the same as `puckActionType` field on puck type. 'default' is
   * used for null/undefined `puckActionType` field.
   */
  multiplePuckActions?: Map_Type<string, Array_Type<UiSdlActionGroup>> | {[key: string]: Array_Type<UiSdlActionGroup> | Array<IUiSdlActionGroup>};

  /**
   * Currently selected item ids.
   */
  selectedItemIds?: Array_Type<string> | Array<string>;

  /**
   * Currently expanded row ids. Used for overlapping/union pucks feature.
   */
  expandedRowIds?: Array_Type<string> | Array<string>;

  /**
   * Currently expanded row ids of parent pucks.
   * This is used to expand a parent puck to reveal its child pucks.
   */
  expandedParentRowIds?: Array_Type<string> | Array<string>;

  /**
   * Currently de-highlighed item ids.
   */
  deHighlightedItemIds?: Array_Type<string> | Array<string>;

  /**
   * Legend label for immovable pucks (locked, or overtime/downtime pucks).
   */
  immovablePuckLegendLabel?: string;
}

/**
 * `UiGanttChart` is a component focused on visualizing a Gantt chart.
 *
 * @remarks this represents a made instance of UiGanttChart
 */
declare class UiGanttChart extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): UiGanttChart;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string;
  withId(id: string | null): UiGanttChart;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string;
  withName(name: string | null): UiGanttChart;

  /**
   * The specification used for retrieving data displayed by the Gantt chart.
   */
  readonly dataSpec?: UiGanttChartDataSpec;
  withDataSpec(dataSpec: IUiGanttChartDataSpec | null): UiGanttChart;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiGanttChart;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiGanttChart;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiGanttChart;

  /**
   * A list of default colors.
   * If a series doesn't have specified color it will take color from here in order.
   */
  readonly defaultColors?: Array_Type<string>;
  withDefaultColors(defaultColors: Array_Type<string> | Array<string> | null): UiGanttChart;

  /**
   * Holds the data to display in the Gantt chart.
   */
  readonly data?: FetchResult<Obj>;
  withData(data: IFetchResult<Obj> | null): UiGanttChart;

  /**
   * Chart header.
   */
  readonly header?: UiSdlComponentHeader;
  withHeader(header: IUiSdlComponentHeader | null): UiGanttChart;

  /**
   * Chart interactions.
   */
  readonly interactions?: UiGanttChartInteractionConfig;
  withInteractions(interactions: IUiGanttChartInteractionConfig | null): UiGanttChart;

  /**
   * The xAxis configuration for this Gantt chart that determines the start/end date.
   */
  readonly xAxis?: UiGanttChartXAxisStaticConfig;
  withXAxis(xAxis: IUiGanttChartXAxisStaticConfig | null): UiGanttChart;

  /**
   * The yAxis name for this Gantt chart.
   */
  readonly yAxisName?: string;
  withYAxisName(yAxisName: string | null): UiGanttChart;

  /**
   * The puck size configuration.
   */
  readonly rowHeight?: string;
  withRowHeight(rowHeight: string | null): UiGanttChart;

  /**
   * Horizontal label alignment on a puck.
   */
  readonly puckLabelHorizontalAlignment?: string;
  withPuckLabelHorizontalAlignment(puckLabelHorizontalAlignment: string | null): UiGanttChart;

  /**
   * Vertical label alignment on a puck.
   */
  readonly puckLabelVerticalAlignment?: string;
  withPuckLabelVerticalAlignment(puckLabelVerticalAlignment: string | null): UiGanttChart;

  /**
   * The decimal precision to show on the puck tooltips.
   */
  readonly tooltipDecimalPrecision?: number;
  withTooltipDecimalPrecision(tooltipDecimalPrecision: number | null): UiGanttChart;

  /**
   * Set this field value when "Show Lineage" or "Hide Lineage" is selected.
   */
  readonly showLineage?: boolean;
  withShowLineage(showLineage: boolean): UiGanttChart;

  /**
   * Whether the user has entered multi-select mode.
   */
  readonly multiSelectMode?: boolean;
  withMultiSelectMode(multiSelectMode: boolean): UiGanttChart;

  /**
   * Whether data should be automatically saved on puck drop.
   */
  readonly saveDataOnDrop?: boolean;
  withSaveDataOnDrop(saveDataOnDrop: boolean): UiGanttChart;

  /**
   * Whether overlapped pucks should be stacking.
   */
  readonly showStacking?: boolean;
  withShowStacking(showStacking: boolean): UiGanttChart;

  /**
   * Whether the cursor tracking line should be shown.
   */
  readonly mouseTracking?: boolean;
  withMouseTracking(mouseTracking: boolean): UiGanttChart;

  /**
   * Whether to show the y-axis grid line.
   */
  readonly showYaxisGridLine?: boolean;
  withShowYaxisGridLine(showYaxisGridLine: boolean): UiGanttChart;

  /**
   * Whether to hide empty tooltip value (i.e. a line with just tooltip label).
   */
  readonly hideEmptyTooltipValue?: boolean;
  withHideEmptyTooltipValue(hideEmptyTooltipValue: boolean): UiGanttChart;

  /**
   * If set to false UTC time will be shown in the exported CSV.
   */
  readonly exportInLocalTime?: boolean;
  withExportInLocalTime(exportInLocalTime: boolean): UiGanttChart;

  /**
   * Sets a specific height (in pixels) for the Gantt chart container. If set, and the Gantt chart height exceeds the
   * value in this field, the chart will be scrollable.
   */
  readonly fixedContainerHeight?: number;
  withFixedContainerHeight(fixedContainerHeight: number | null): UiGanttChart;

  /**
   * When in "show dependencies" state, only the selected puck and any dependencies should be shown in their normal
   * color state.  All other pucks should be de-emphasized.
   */
  readonly puckDeemphasizedColor?: string;
  withPuckDeemphasizedColor(puckDeemphasizedColor: string | null): UiGanttChart;

  /**
   * Color string for union pucks (i.e. union of overlapping pucks).
   */
  readonly unionPuckColor?: string;
  withUnionPuckColor(unionPuckColor: string | null): UiGanttChart;

  /**
   * The number of chart actions to display on the grid header. If there are more, an additional chart action
   * icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
   * chart action.
   *
   * Chart actions that are configured outside of the {@link chartActions} field do not count towards this limit.
   * The additional chart action itself does count towards the limit. Examples:
   *
   * - If chartActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
   *   chart header, and there is no additional actions icon.
   * - If chartActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
   *   chart header will show action "A" and the additional actions icon.  Clicking the additional actions icon
   *   will show a dropdown containing actions "B" and "C".
   */
  readonly chartActionsCollapseThreshold?: number;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiGanttChart;

  /**
   * The set of actions that don't depend on a selected puck, e.g., export, refresh. A toggleable group of actions can
   * also be specified. When considering the `chartActionsCollapseThreshold`, consider the chart actions to be
   * flattened. Listen to triggers of the chart actions through `CHART_ACTION_CLICK_${actionSuffix}`.
   */
  readonly chartActions?: Array_Type<UiSdlActionGroup>;
  withChartActions(chartActions: Array_Type<UiSdlActionGroup> | Array<IUiSdlActionGroup> | null): UiGanttChart;

  /**
   * The number of puck actions to display on the chart header.
   * Similar logic to `chartActionsCollapseThreshold`. See the other field for details.
   */
  readonly multiplePuckActionsCollapseThreshold?: number;
  withMultiplePuckActionsCollapseThreshold(multiplePuckActionsCollapseThreshold: number | null): UiGanttChart;

  /**
   * The action type for the selected puck.
   * This field is used with {@link multiplePuckActions} to display the puck actions.
   */
  readonly puckActionType?: string;
  withPuckActionType(puckActionType: string | null): UiGanttChart;

  /**
   * The set of actions that apply to pucks.
   * Those actions will be visible only if at least one puck has been selected.
   * Listen to triggers of the puck actions through `MULTIPLE_PUCK_ACTION_CLICK_${actionSuffix}`.
   * The key must be the same as `puckActionType` field on puck type. 'default' is
   * used for null/undefined `puckActionType` field.
   */
  readonly multiplePuckActions?: Map_Type<string, Array_Type<UiSdlActionGroup>>;
  withMultiplePuckActions(multiplePuckActions: Map_Type<string, Array_Type<UiSdlActionGroup>> | {[key: string]: Array_Type<UiSdlActionGroup> | Array<IUiSdlActionGroup>} | null): UiGanttChart;

  /**
   * Currently selected item ids.
   */
  readonly selectedItemIds?: Array_Type<string>;
  withSelectedItemIds(selectedItemIds: Array_Type<string> | Array<string> | null): UiGanttChart;

  /**
   * Currently expanded row ids. Used for overlapping/union pucks feature.
   */
  readonly expandedRowIds?: Array_Type<string>;
  withExpandedRowIds(expandedRowIds: Array_Type<string> | Array<string> | null): UiGanttChart;

  /**
   * Currently expanded row ids of parent pucks.
   * This is used to expand a parent puck to reveal its child pucks.
   */
  readonly expandedParentRowIds?: Array_Type<string>;
  withExpandedParentRowIds(expandedParentRowIds: Array_Type<string> | Array<string> | null): UiGanttChart;

  /**
   * Currently de-highlighed item ids.
   */
  readonly deHighlightedItemIds?: Array_Type<string>;
  withDeHighlightedItemIds(deHighlightedItemIds: Array_Type<string> | Array<string> | null): UiGanttChart;

  /**
   * Legend label for immovable pucks (locked, or overtime/downtime pucks).
   */
  readonly immovablePuckLegendLabel?: string;
  withImmovablePuckLegendLabel(immovablePuckLegendLabel: string | null): UiGanttChart;

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
  static fromJson(json: any): UiGanttChart | null;

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
  static fromJsonString(json: string): UiGanttChart | null;

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
  static fromXmlString(xml: string): UiGanttChart | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): UiGanttChart | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiGanttChart;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiGanttChart;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiGanttChart;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiGanttChart>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiGanttChart>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiGanttChart;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiGanttChart;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiGanttChart;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiGanttChart;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiGanttChart;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiGanttChart;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiGanttChart;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiGanttChart;

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
  withoutFieldAtPath(path: string): UiGanttChart;

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
  withoutField(field: string): UiGanttChart;

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
  withoutField(field: FieldType): UiGanttChart;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): UiGanttChart;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): UiGanttChart;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiGanttChart;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiGanttChart;

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
  defaultField(field: string): UiGanttChart;

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
  defaultField(field: FieldType): UiGanttChart;

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
  unsetField(field: string): UiGanttChart;

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
  unsetField(field: FieldType): UiGanttChart;

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
  removeField(field: string): UiGanttChart;

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
  removeField(field: FieldType): UiGanttChart;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): UiGanttChart;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): UiGanttChart;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiGanttChart;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiGanttChart;

  mergeJson(json: any): UiGanttChart;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiGanttChart;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): UiGanttChart;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<UiGanttChart>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<UiGanttChart> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiGanttChart> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<UiGanttChart>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiGanttChart> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, UiGanttChart> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiGanttChart> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiGanttChart>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiGanttChart>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): UiGanttChart;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiGanttChart;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): UiGanttChart;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiGanttChart;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiGanttChart;

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
  static make(fields: any, withDefaults?: boolean): UiGanttChart;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): UiGanttChart | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiGanttChart;

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
  afterMake(): UiGanttChart;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiGanttChart;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<UiGanttChart> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): UiGanttChart;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<UiGanttChart>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiGanttChart>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<UiGanttChart> | null;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<UiGanttChart>> | null;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec): number;

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
  static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

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
  static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec): boolean;

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
  singletonMap(): Map_Type<string, WithKey>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<UiGanttChart>;

  save(subPath?: string, contentType?: string): UiGanttChart;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: UiGanttChart, spec?: UpsertSpec): UiGanttChart | null;

  upsert(srcObj?: UiGanttChart, spec?: UpsertSpec): UiGanttChart | null;

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
  static fromString(s: string): UiGanttChart | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): UiGanttChart | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiGanttChart, state: UiSdlReduxState): UiGanttChart | null;

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
   * Private helper function to generate a filter expression from {@link fieldValues}.
   *
   * @param filterValues
   *         A mapping of field names to values.
   *
   * @return string
   *         The filter string representing the {@link fieldValues}.
   */
  static generateFilterString(fieldValues?: Map_Type<string, any>): string | null;

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
  static getRelevantFieldValues(fieldValues: Map_Type<string, any>, typeName?: string, componentId?: string): Map_Type<string, any> | null;

  /**
   * Generate each filter string element of final filter string.
   *
   * @param item
   *          Json config of one field to filter on.
   * @param field
   *          Field path on type.
   */
  static generateFilterStringElem(item?: any, field?: string): string | null;

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
  static transformFieldNameForComponentBinding(fieldName: string, fieldValue: Map_Type<string, any>, componentId: string): string;

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
  static filterSubmitEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

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
  static advancedFilterSubmitEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Triggered when a user selects to show or hide lineage.
   *
   * @param id
   *           The componentId.
   * @param shouldShowLineage
   *           Whether the lineage should be shown or hidden.
   * @return A `LINEAGE_(SHOW|HIDE)` action for this instance.
   */
  static showOrHideLineageAction(id?: string, shouldShowLineage?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `LINEAGE_SHOW` and sets internal field {@link showLineage}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static lineageShowReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Listens for actions of type `LINEAGE_HIDE` and sets internal field {@link showLineage}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static lineageHideReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when the user (un)selects multiple pucks.
   *
   * @param id
   *           Id of the component.
   * @param selected
   *           `true` if the item was selected (in non multi-select mode, this would overwrite the `selectedItemIds`
   *           field), `false` if it was unselected.
   * @param itemIds
   *           The `id` of the objects that were (un)selected.
   * @return A `SELECTION_CHANGE` action for this instance.
   */
  static changeSelectionsAction(id?: string, itemIds: Array_Type<string>, selected: boolean): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `SELECTION_CHANGE` and updates internal
   * field {@link selectedItemIds} by setting or unsetting it to the id of the selected puck.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static selectionChangeReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when the user expands/collapses a row with a union puck.
   *
   * @param id
   *           Id of the component.
   * @param rowId
   *           The `id` of the parent puck row that was expanded/collapsed.
   * @return A `PARENT_PUCK_ROW_TOGGLE` action for this instance.
   */
  static toggleParentPuckRowAction(id?: string, rowId: string): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `PARENT_PUCK_ROW_TOGGLE` and updates internal
   * field {@link expandedParentRowIds} by setting or unsetting it to the id of the expanded row.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static parentPuckRowToggleReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when the user expands/collapses a row with a union puck.
   *
   * @param id
   *           Id of the component.
   * @param rowIds
   *           The `id` of the rows that were expanded/collapsed
   * @param expanded
   *           Optional parameter to indicate if the rows should be expanded. If undefined, then the state is toggled.
   * @return A `UNION_PUCK_ROW_TOGGLE` action for this instance.
   */
  static toggleUnionPuckRowsAction(id?: string, rowIds: Array_Type<string>, expanded?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `UNION_PUCK_ROW_TOGGLE` and updates internal
   * field {@link expandedRowIds} by setting or unsetting it to the id of the expanded row.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static unionPuckRowsToggleReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Listens for actions of type `CHART_ACTION_CLICK_UNION_PUCK_ROW_TOGGLE_ALL` and updates internal
   * field {@link expandedRowIds} by setting it to all rows or empty array.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static toggleAllUnionPuckRowsReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Action for clearing a puck selection.
   *
   * @param id
   *           Id of the component.
   * @return A `SELECTION_CLEAR` action for this instance.
   */
  static clearSelectionAction(id?: string): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `MULTI_SELECT_MODE_UPDATE` toggles `multiSelectMode` in the state
   * to be inverse of its latest value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static updateMultiSelectModeReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Listens for actions of type `CHART_ACTION_CLICK_MOUSE_LINE_TOGGLE` and sets internal field {@link mouseTracking}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static toggleMouseLineReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Listens for actions of type `SELECTION_CLEAR` and clears selectedItemIds.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static selectionClearReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggers an action that applies to the whole component.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   * @param payload
   *           Optional argument to specify the payload of the underlying action.
   * @return A `CHART_ACTION_CLICK_${actionSuffix}` action.
   */
  static triggerChartActionAction(id?: string, actionSuffix?: string, payload?: any): UiSdlReduxAction<any> | null;

  /**
   * Triggers an action that applies to the currently selected item only.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   * @param itemIds
   *           The ids of the records that were selected at the time the action is triggered.
   * @return A `MULTIPLE_PUCK_ACTION_CLICK_${actionSuffix}` action.
   */
  static triggerMultiplePuckActionAction(id?: string, actionSuffix?: string, itemIds?: Array_Type<string>): UiSdlReduxAction<any> | null;

  /**
   * Triggered by editing a puck to save data that was modified.
   * Triggers epic to save and persist changes to the data source.
   * Modified from UiSdlDataRedux.
   *
   * @param id
   *           Id of the component.
   * @param dataItems
   *           The modified dataItems.
   * @return A `DATA_SAVE` action for this instance.
   */
  static saveDataAction(id?: string, dataItems?: Array_Type<any>): UiSdlReduxAction<any> | null;

  /**
   * @param id
   *           Id of the component.
   * @return A `GANTT_CHART_MOUNT_ACTION` action for this instance.
   */
  static ganttChartMountAction(id?: string): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `DATA_SAVE` and saves modified data items.
   * Creates a copy of the original state to act as the modified state and send to the dataSetEffect.
   *
   * @param actionStream
   *           Redux actionStream.
   * @param stateStream
   *           Redux stateStream.
   * @return A {@link UiSdlActionsObservable} for this instance.
   */
  static dataSaveEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CHART_ACTION_CLICK_EXPORT` and exports the data that is currently in the gantt chart
   * state to a csv file.
   *
   * @param actionStream
   *           Redux actionStream.
   * @param stateStream
   *           Redux stateStream.
   * @return A {@link UiSdlActionsObservable} for this instance.
   */
  static dataExportEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Triggered after dropping a puck.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           The mouse drop event.
   * @return A `PUCK_DROPPED` action for this instance.
   */
  static droppedPuckAction(id?: string, event?: any): UiSdlReduxAction<any> | null;

  /**
   * Triggered when the start/end dates of the Gantt chart are changed.
   *
   * @param id
   *           Id of the component.
   * @return A `RANGE_UPDATE` action for this instance.
   */
  static updateRangeAction(id?: string, start?: DateTime, end?: DateTime): UiSdlReduxAction<any> | null;

  /**
   * Updates the start/end dates of the Gantt chart.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static rangeUpdateReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Trigger to set a puck's isLocked field to true or false.
   *
   * @param id
   *           Id of the component.
   * @param itemIds
   *           The ids of the pucks.
   * @param locked
   *           `true` if puck is to be locked, `false` if it is to be unlocked.
   * @return A `PUCKS_LOCK` action for this instance.
   */
  static lockPucksAction(id?: string, itemIds?: Array_Type<string>, locked?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Updates the lock state of pucks.
   *
   * @param actionStream
   *           Redux actionStream.
   * @param stateStream
   *           Redux stateStream.
   * @return A {@link UiSdlActionsObservable} for this instance.
   */
  static pucksLockEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Triggered when making Gantt chart pucks draggable or not.
   *
   * @param id
   *           Id of the component.
   * @param draggable
   *           Whether the Gantt chart pucks should be draggable.
   * @return A `DRAGGABLE_UPDATE` action for this instance.
   */
  static updateDraggableAction(id?: string, draggable?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Updates the horizontal and vertical draggability of pucks.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static draggableUpdateReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when updating the Gantt Chart chart actions.
   *
   * @param id
   *           Id of the component.
   * @param updatedChartActions
   *           List of updated chart actions for the Gantt chart.
   * @return A `CHART_ACTIONS_UPDATE` action for this instance.
   */
  static updateChartActionsAction(id?: string, updatedChartActions?: Array_Type<UiSdlActionGroup>): UiSdlReduxAction<any> | null;

  /**
   * Updates the {@link #chartActions} of the Gantt Chart.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static chartActionsUpdateReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when updating the Gantt Chart puck actions.
   *
   * @param id
   *           Id of the component.
   * @param updatedMultiplePuckActions
   *           List of updated puck actions for the Gantt chart.
   * @return A `MULTIPLE_PUCK_ACTIONS_UPDATE` action for this instance.
   */
  static updateMultiplePuckActionsAction(id?: string, updatedMultiplePuckActions?: Map_Type<string, Array_Type<UiSdlActionGroup>>): UiSdlReduxAction<any> | null;

  /**
   * Updates the {@link #multiplePuckActions} of the Gantt Chart.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static multiplePuckActionsUpdateReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when filtering pucks to be highlighted.
   *
   * @param id
   *           Id of the component.
   * @param highlightedPuckIds
   *           An array of highlighted puck ids.
   * @return A `PUCK_HIGHLIGHT` action for this instance.
   */
  static highlightPuckAction(id?: string, highlightedPuckIds?: Array_Type<string>): UiSdlReduxAction<any> | null;

  /**
   * Highlights filtered pucks.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static puckHighlightReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  /**
   * Triggered when updating valid drop zones of pucks.
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Field name of {@link UiGanttChartPuckDataSpec} valid drop zones to be updated. When not provided,
   *           {@link UiGanttChartPuckDataSpec} valid drop zones will be undefined, and any puck can be dropped anywhere.
   * @return A `VALID_DROP_ZONE_UPDATE` action for this instance.
   */
  static updateValidDropZonesAction(id?: string, fieldName?: string): UiSdlReduxAction<any> | null;

  /**
   * Updates valid drop zones of pucks.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @return A new Redux state.
   */
  static validDropZonesUpdateReducer(state?: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;
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
