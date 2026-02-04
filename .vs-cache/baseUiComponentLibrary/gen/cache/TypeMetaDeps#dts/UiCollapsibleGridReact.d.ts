// TypeScript definitions for the C3 type UiCollapsibleGridReact

/**
 * The React implementation of {@link UiCollapsibleGrid}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiCollapsibleGridReact
 */
declare interface IUiCollapsibleGridReact {

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
   * The specification used for retrieving data displayed by the component.
   */
  dataSpec?: IUiCollapsibleGridDataSpec;

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
   * The component header.
   */
  header?: IUiSdlComponentTitle;

  /**
   * The empty state for this component.
   */
  emptyState?: IUiSdlEmptyState;

  /**
   * Holds the data for the component.
   */
  componentData?: IUiCollapsibleGridTree;

  /**
   * Whether numerical data that are zero-valued should be hidden.
   */
  hideZeroValuedData?: boolean;

  /**
   * Whether grouping should be collapsible.
   */
  groupCollapsible?: boolean;

  /**
   * If {@link groupCollapsible} is true, whether groups should be expanded on first render.
   */
  expandGroupsOnFirstRender?: boolean;

  /**
   * Whether the data should be exportable.
   */
  exportable?: boolean;

  /**
   * Whether or not the data should be exportable as
   * a flattened grid. In order for export flattened to work as
   * expected #componentData.treeGroupings needs to be
   * accurately defined.
   * If both #exportable and #exportableFlattened
   * are true, #exportable will override #exportableFlattened.
   */
  exportableFlattened?: boolean;

  /**
   * The number of rows from the top that should be sticky.
   */
  stickyTopRowsNum?: number;

  /**
   * The number of columns from the left that should be sticky.
   *
   * `NOTE`: ReactGrid will only apply [stickiness](https://reactgrid.com/docs/4.0/2-implementing-core-features/4-sticky/) if
   *         the combined width of all sticky columns is small enough to give the non-sticky columns space. If the combined
   *         width is too large, stickiness won't be applied to **any** columns to prevent the non-sticky columns from being
   *         permanently hidden. Use care when specifying several sticky right and/or left columns.
   */
  stickyLeftColumnsNum?: number;

  /**
   * The number of columns from the right that should be sticky.
   *
   * `NOTE`: ReactGrid will only apply [stickiness](https://reactgrid.com/docs/4.0/2-implementing-core-features/4-sticky/) if
   *         the combined width of all sticky columns is small enough to give the non-sticky columns space. If the combined
   *         width is too large, stickiness won't be applied to **any** columns to prevent the non-sticky columns from being
   *         permanently hidden. Use care when specifying several sticky right and/or left columns.
   */
  stickyRightColumnsNum?: number;

  /**
   * Specifies whether checkboxes will be prepended to each row in the grid.
   */
  checkboxes?: boolean;

  /**
   * The list of rows currently selected in the grid. This field is only applicable if the #checkboxes field is set
   * to `true`. By default, only the leaf nodes of the user's row selections are stored. When the #detectAllSelectedRows
   * field is set to `true`, all the selected nodes are stored.
   */
  selectedRows?: Array_Type<UiCollapsibleGridTreeNode> | Array<IUiCollapsibleGridTreeNode>;

  /**
   * This field is only applicable when #checkboxes is set to `true`. In such a case, this field can be used to
   * configure the information contained in the `selectedRows` payload of the #selectRowsAction.
   * By default, only the leaf nodes of the user's row selections are contained in the `selectedRows` payload.
   * When this field is set to `true`, all the rows in checked state is contained in the `selectedRows` payload.
   */
  detectAllSelectedRows?: boolean;

  /**
   * Pixel reduction applied to the viewport height; used to add "margin", i.e. some space from the edges of the page.
   * This reduction is applied before a minimum height is determined so may be ignored if the component doesn't
   * overflow the viewport.
   */
  availableViewportHeightReduction?: number;

  /**
   * Pixel reduction applied to the viewport width; used to add "margin", i.e. some space from the edges of the page.
   * This reduction is applied before a minimum width is determined so may be ignored if the component doesn't
   * overflow the viewport.
   */
  availableViewportWidthReduction?: number;

  /**
   * Additional css stylings applied to the css-collapsible-grid element. Write with semicolons; i.e. "margin: 20px;"
   */
  additionalGridStyling?: string;

  /**
   * Maximum height for a spreadsheet component in pixels. An example is the alerts profile component, which has a
   * second component below it and therefore should not occupy the full viewport even if it is able to.
   */
  spreadsheetMaxHeight?: number;

  /**
   * Optional if using sticky rows. Selectors for components that impact the width of the spreadsheet.
   * Use the outermost component. If there is a filter panel on the left side of the component within
   * a side-panel, use the side-panel selector such as [".c3-sdl-side-panel-container"],
   */
  widthSiblingSelectors?: Array_Type<string> | Array<string>;

  /**
   * Optional if using sticky rows. Selectors for components impacting spreadsheet height. Use the outermost component.
   * If there is a title above the component use its selector; i.e. [".c3-sdl-page-title"],
   */
  heightSiblingSelectors?: Array_Type<string> | Array<string>;

  /**
   * Element(s) in dom which are observed for changes that might require a rerender of spreadsheet width/height
   */
  rerenderSiblingSelectors?: Array_Type<string> | Array<string>;

  /**
   * Required if using sticky rows. This is the parent selector for the spreadsheet.
   */
  parentSelector?: string;

  /**
   * The set of actions that don't depend on rows, e.g., export, refresh. A toggle-able group of actions can also be
   * specified. When considering the `sheetActionsCollapseThreshold`, consider the sheet actions to be flattened.
   * Listen to triggers of the sheet actions through `SHEET_ACTION_CLICK_${actionSuffix}`.
   */
  sheetActions?: Array_Type<UiSdlActionGroup> | Array<IUiSdlActionGroup>;

  /**
   * The number of sheet actions to display on the sheet header.  If there are more, an additional sheet action
   * icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
   * sheet action.
   *
   * Sheet actions that are configured outside of the {@link sheetActions} field (such as adding new rows,
   * removing columns, or exporting) do not count towards this limit.  The additional sheet action itself
   * does count towards the limit.  Examples:
   *
   * - If sheetActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
   *   sheet header, and there is no additional actions icon.
   * - If sheetActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
   *   sheet header will show action "A" and the additional actions icon.  Clicking the additional actions icon
   *   will show a dropdown containing actions "B" and "C".
   */
  sheetActionsCollapseThreshold?: number;

  /**
   * Defines whether the context menu should be displayed on right click.
   */
  showContextMenu?: boolean;

  /**
   * Rows Ids which are collapsed by level of indentation.
   * {
   *  [0]: ["0_0", "0_1", ... ,"0_n"] indent level 0
   *  [1]: ["0_0_0", "0_0_1", ... , "0_0_n"] indent level 1
   *  [2]: ["0_0_0_0", "0_0_0_1", ... , "0_0_0_n"] indent level 2
   *  ...
   *  [n]: ["0_0_0_0_n"] indent level n
   * }
   */
  collapsedRowIds?: any;

  /**
   * It enables multi-selection with mouse drag/click.
   */
  enableRangeSelection?: boolean;

  /**
   * A list of {@link UiCollapsibleGridRightClickAction}s that are triggered on right click as a dropdown. This actions
   * are additional to the Copy, Paste and Cut default actions for the grid, and can be customized.
   */
  rightClickActions?: Array_Type<UiCollapsibleGridRightClickAction> | Array<IUiCollapsibleGridRightClickAction>;
}

/**
 * The React implementation of {@link UiCollapsibleGrid}.
 *
 * @remarks this represents a made instance of UiCollapsibleGridReact
 */
declare class UiCollapsibleGridReact extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): UiCollapsibleGridReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string;
  withId(id: string | null): UiCollapsibleGridReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string;
  withName(name: string | null): UiCollapsibleGridReact;

  /**
   * The specification used for retrieving data displayed by the component.
   */
  readonly dataSpec?: UiCollapsibleGridDataSpec;
  withDataSpec(dataSpec: IUiCollapsibleGridDataSpec | null): UiCollapsibleGridReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiCollapsibleGridReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiCollapsibleGridReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiCollapsibleGridReact;

  /**
   * The component header.
   */
  readonly header?: UiSdlComponentTitle;
  withHeader(header: IUiSdlComponentTitle | null): UiCollapsibleGridReact;

  /**
   * The empty state for this component.
   */
  readonly emptyState?: UiSdlEmptyState;
  withEmptyState(emptyState: IUiSdlEmptyState | null): UiCollapsibleGridReact;

  /**
   * Holds the data for the component.
   */
  readonly componentData?: UiCollapsibleGridTree;
  withComponentData(componentData: IUiCollapsibleGridTree | null): UiCollapsibleGridReact;

  /**
   * Whether numerical data that are zero-valued should be hidden.
   */
  readonly hideZeroValuedData?: boolean;
  withHideZeroValuedData(hideZeroValuedData: boolean): UiCollapsibleGridReact;

  /**
   * Whether grouping should be collapsible.
   */
  readonly groupCollapsible?: boolean;
  withGroupCollapsible(groupCollapsible: boolean): UiCollapsibleGridReact;

  /**
   * If {@link groupCollapsible} is true, whether groups should be expanded on first render.
   */
  readonly expandGroupsOnFirstRender?: boolean;
  withExpandGroupsOnFirstRender(expandGroupsOnFirstRender: boolean): UiCollapsibleGridReact;

  /**
   * Whether the data should be exportable.
   */
  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiCollapsibleGridReact;

  /**
   * Whether or not the data should be exportable as
   * a flattened grid. In order for export flattened to work as
   * expected #componentData.treeGroupings needs to be
   * accurately defined.
   * If both #exportable and #exportableFlattened
   * are true, #exportable will override #exportableFlattened.
   */
  readonly exportableFlattened?: boolean;
  withExportableFlattened(exportableFlattened: boolean): UiCollapsibleGridReact;

  /**
   * The number of rows from the top that should be sticky.
   */
  readonly stickyTopRowsNum?: number;
  withStickyTopRowsNum(stickyTopRowsNum: number | null): UiCollapsibleGridReact;

  /**
   * The number of columns from the left that should be sticky.
   *
   * `NOTE`: ReactGrid will only apply [stickiness](https://reactgrid.com/docs/4.0/2-implementing-core-features/4-sticky/) if
   *         the combined width of all sticky columns is small enough to give the non-sticky columns space. If the combined
   *         width is too large, stickiness won't be applied to **any** columns to prevent the non-sticky columns from being
   *         permanently hidden. Use care when specifying several sticky right and/or left columns.
   */
  readonly stickyLeftColumnsNum?: number;
  withStickyLeftColumnsNum(stickyLeftColumnsNum: number | null): UiCollapsibleGridReact;

  /**
   * The number of columns from the right that should be sticky.
   *
   * `NOTE`: ReactGrid will only apply [stickiness](https://reactgrid.com/docs/4.0/2-implementing-core-features/4-sticky/) if
   *         the combined width of all sticky columns is small enough to give the non-sticky columns space. If the combined
   *         width is too large, stickiness won't be applied to **any** columns to prevent the non-sticky columns from being
   *         permanently hidden. Use care when specifying several sticky right and/or left columns.
   */
  readonly stickyRightColumnsNum?: number;
  withStickyRightColumnsNum(stickyRightColumnsNum: number | null): UiCollapsibleGridReact;

  /**
   * Specifies whether checkboxes will be prepended to each row in the grid.
   */
  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiCollapsibleGridReact;

  /**
   * The list of rows currently selected in the grid. This field is only applicable if the #checkboxes field is set
   * to `true`. By default, only the leaf nodes of the user's row selections are stored. When the #detectAllSelectedRows
   * field is set to `true`, all the selected nodes are stored.
   */
  readonly selectedRows?: Array_Type<UiCollapsibleGridTreeNode>;
  withSelectedRows(selectedRows: Array_Type<UiCollapsibleGridTreeNode> | Array<IUiCollapsibleGridTreeNode> | null): UiCollapsibleGridReact;

  /**
   * This field is only applicable when #checkboxes is set to `true`. In such a case, this field can be used to
   * configure the information contained in the `selectedRows` payload of the #selectRowsAction.
   * By default, only the leaf nodes of the user's row selections are contained in the `selectedRows` payload.
   * When this field is set to `true`, all the rows in checked state is contained in the `selectedRows` payload.
   */
  readonly detectAllSelectedRows?: boolean;
  withDetectAllSelectedRows(detectAllSelectedRows: boolean): UiCollapsibleGridReact;

  /**
   * Pixel reduction applied to the viewport height; used to add "margin", i.e. some space from the edges of the page.
   * This reduction is applied before a minimum height is determined so may be ignored if the component doesn't
   * overflow the viewport.
   */
  readonly availableViewportHeightReduction?: number;
  withAvailableViewportHeightReduction(availableViewportHeightReduction: number | null): UiCollapsibleGridReact;

  /**
   * Pixel reduction applied to the viewport width; used to add "margin", i.e. some space from the edges of the page.
   * This reduction is applied before a minimum width is determined so may be ignored if the component doesn't
   * overflow the viewport.
   */
  readonly availableViewportWidthReduction?: number;
  withAvailableViewportWidthReduction(availableViewportWidthReduction: number | null): UiCollapsibleGridReact;

  /**
   * Additional css stylings applied to the css-collapsible-grid element. Write with semicolons; i.e. "margin: 20px;"
   */
  readonly additionalGridStyling?: string;
  withAdditionalGridStyling(additionalGridStyling: string | null): UiCollapsibleGridReact;

  /**
   * Maximum height for a spreadsheet component in pixels. An example is the alerts profile component, which has a
   * second component below it and therefore should not occupy the full viewport even if it is able to.
   */
  readonly spreadsheetMaxHeight?: number;
  withSpreadsheetMaxHeight(spreadsheetMaxHeight: number | null): UiCollapsibleGridReact;

  /**
   * Optional if using sticky rows. Selectors for components that impact the width of the spreadsheet.
   * Use the outermost component. If there is a filter panel on the left side of the component within
   * a side-panel, use the side-panel selector such as [".c3-sdl-side-panel-container"],
   */
  readonly widthSiblingSelectors?: Array_Type<string>;
  withWidthSiblingSelectors(widthSiblingSelectors: Array_Type<string> | Array<string> | null): UiCollapsibleGridReact;

  /**
   * Optional if using sticky rows. Selectors for components impacting spreadsheet height. Use the outermost component.
   * If there is a title above the component use its selector; i.e. [".c3-sdl-page-title"],
   */
  readonly heightSiblingSelectors?: Array_Type<string>;
  withHeightSiblingSelectors(heightSiblingSelectors: Array_Type<string> | Array<string> | null): UiCollapsibleGridReact;

  /**
   * Element(s) in dom which are observed for changes that might require a rerender of spreadsheet width/height
   */
  readonly rerenderSiblingSelectors?: Array_Type<string>;
  withRerenderSiblingSelectors(rerenderSiblingSelectors: Array_Type<string> | Array<string> | null): UiCollapsibleGridReact;

  /**
   * Required if using sticky rows. This is the parent selector for the spreadsheet.
   */
  readonly parentSelector?: string;
  withParentSelector(parentSelector: string | null): UiCollapsibleGridReact;

  /**
   * The set of actions that don't depend on rows, e.g., export, refresh. A toggle-able group of actions can also be
   * specified. When considering the `sheetActionsCollapseThreshold`, consider the sheet actions to be flattened.
   * Listen to triggers of the sheet actions through `SHEET_ACTION_CLICK_${actionSuffix}`.
   */
  readonly sheetActions?: Array_Type<UiSdlActionGroup>;
  withSheetActions(sheetActions: Array_Type<UiSdlActionGroup> | Array<IUiSdlActionGroup> | null): UiCollapsibleGridReact;

  /**
   * The number of sheet actions to display on the sheet header.  If there are more, an additional sheet action
   * icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
   * sheet action.
   *
   * Sheet actions that are configured outside of the {@link sheetActions} field (such as adding new rows,
   * removing columns, or exporting) do not count towards this limit.  The additional sheet action itself
   * does count towards the limit.  Examples:
   *
   * - If sheetActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
   *   sheet header, and there is no additional actions icon.
   * - If sheetActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
   *   sheet header will show action "A" and the additional actions icon.  Clicking the additional actions icon
   *   will show a dropdown containing actions "B" and "C".
   */
  readonly sheetActionsCollapseThreshold?: number;
  withSheetActionsCollapseThreshold(sheetActionsCollapseThreshold: number | null): UiCollapsibleGridReact;

  /**
   * Defines whether the context menu should be displayed on right click.
   */
  readonly showContextMenu?: boolean;
  withShowContextMenu(showContextMenu: boolean): UiCollapsibleGridReact;

  /**
   * Rows Ids which are collapsed by level of indentation.
   * {
   *  [0]: ["0_0", "0_1", ... ,"0_n"] indent level 0
   *  [1]: ["0_0_0", "0_0_1", ... , "0_0_n"] indent level 1
   *  [2]: ["0_0_0_0", "0_0_0_1", ... , "0_0_0_n"] indent level 2
   *  ...
   *  [n]: ["0_0_0_0_n"] indent level n
   * }
   */
  readonly collapsedRowIds?: any;
  withCollapsedRowIds(collapsedRowIds: any | null): UiCollapsibleGridReact;

  /**
   * It enables multi-selection with mouse drag/click.
   */
  readonly enableRangeSelection?: boolean;
  withEnableRangeSelection(enableRangeSelection: boolean): UiCollapsibleGridReact;

  /**
   * A list of {@link UiCollapsibleGridRightClickAction}s that are triggered on right click as a dropdown. This actions
   * are additional to the Copy, Paste and Cut default actions for the grid, and can be customized.
   */
  readonly rightClickActions?: Array_Type<UiCollapsibleGridRightClickAction>;
  withRightClickActions(rightClickActions: Array_Type<UiCollapsibleGridRightClickAction> | Array<IUiCollapsibleGridRightClickAction> | null): UiCollapsibleGridReact;

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
  static fromJson(json: any): UiCollapsibleGridReact | null;

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
  static fromJsonString(json: string): UiCollapsibleGridReact | null;

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
  static fromXmlString(xml: string): UiCollapsibleGridReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): UiCollapsibleGridReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiCollapsibleGridReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiCollapsibleGridReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiCollapsibleGridReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiCollapsibleGridReact>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiCollapsibleGridReact>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiCollapsibleGridReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiCollapsibleGridReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiCollapsibleGridReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiCollapsibleGridReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiCollapsibleGridReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiCollapsibleGridReact;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiCollapsibleGridReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiCollapsibleGridReact;

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
  withoutFieldAtPath(path: string): UiCollapsibleGridReact;

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
  withoutField(field: string): UiCollapsibleGridReact;

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
  withoutField(field: FieldType): UiCollapsibleGridReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): UiCollapsibleGridReact;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): UiCollapsibleGridReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiCollapsibleGridReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiCollapsibleGridReact;

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
  defaultField(field: string): UiCollapsibleGridReact;

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
  defaultField(field: FieldType): UiCollapsibleGridReact;

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
  unsetField(field: string): UiCollapsibleGridReact;

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
  unsetField(field: FieldType): UiCollapsibleGridReact;

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
  removeField(field: string): UiCollapsibleGridReact;

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
  removeField(field: FieldType): UiCollapsibleGridReact;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): UiCollapsibleGridReact;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): UiCollapsibleGridReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiCollapsibleGridReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiCollapsibleGridReact;

  mergeJson(json: any): UiCollapsibleGridReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiCollapsibleGridReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): UiCollapsibleGridReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<UiCollapsibleGridReact>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<UiCollapsibleGridReact> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiCollapsibleGridReact> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<UiCollapsibleGridReact>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiCollapsibleGridReact> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, UiCollapsibleGridReact> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiCollapsibleGridReact> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiCollapsibleGridReact>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiCollapsibleGridReact>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): UiCollapsibleGridReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiCollapsibleGridReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): UiCollapsibleGridReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiCollapsibleGridReact;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiCollapsibleGridReact;

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
  static make(fields: any, withDefaults?: boolean): UiCollapsibleGridReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): UiCollapsibleGridReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiCollapsibleGridReact;

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
  afterMake(): UiCollapsibleGridReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiCollapsibleGridReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<UiCollapsibleGridReact> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): UiCollapsibleGridReact;

  /**
   * Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
   * fields defined on the component type. This interface is always named with the type name plus "Props" and appended
   * to the existing source file.
   */
  static tsx(): string | null;

  /**
   * Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
   * includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
   * can be controlled through the spec argument, but the defaults are what gets used by #tsx.
   *
   * @param type the type to examine
   * @param spec options for interface generation
   * @return TypeScript interface declaration
   */
  static buildProps(type: Type, spec?: ReactComponentPropsSpec): string | null;

  /**
   * The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
   */
  static tsxPath(): string | null;

  /**
   * If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
   */
  static importedModule(): any | null;

  /**
   * The render function must be implemented as the function the TSX implementation exports.
   */
  static render(props?: UiCollapsibleGridReact): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<UiCollapsibleGridReact>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiCollapsibleGridReact>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<UiCollapsibleGridReact> | null;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<UiCollapsibleGridReact>> | null;

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
  dependencies(): MetadataDeps<UiCollapsibleGridReact>;

  save(subPath?: string, contentType?: string): UiCollapsibleGridReact;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: UiCollapsibleGridReact, spec?: UpsertSpec): UiCollapsibleGridReact | null;

  upsert(srcObj?: UiCollapsibleGridReact, spec?: UpsertSpec): UiCollapsibleGridReact | null;

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
  static fromString(s: string): UiCollapsibleGridReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): UiCollapsibleGridReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiCollapsibleGridReact, state: UiSdlReduxState): UiCollapsibleGridReact | null;

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
   * Function to create ID based on level and parentId.
   *
   * @param parentId
   *           Id of the parent.
   * @param index
   *           Level in which the row is.
   * @return string
   *           String based on parentId and current level i.e. '0_0_1'
   */
  static generateRowId(parentId?: any, index?: any): string | null;

  /**
   * Triggers an action that applies to the whole spreadsheet.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   * @return {@link UiSdlReduxAction}
   */
  static triggerSheetAction(id?: string, actionSuffix?: string, args?: any): UiSdlReduxAction<any> | null;

  /**
   * Triggered when rows are selected in the component.
   *
   * @param id
   *        Id of the component.
   * @param selectedRows
   *        List of nodes for the selected rows in the spreadsheet. By default, only the leaf nodes of the
   *        user's row selections is contained in this field. When the {@link #checkboxes} and
   *        {@link #detectAllSelectedRows} fields are set to `true`, `selectedRows` will contain all the nodes
   *        that are in the checked state.
   * @return {@link UiSdlReduxAction}
   */
  static selectRowsAction(id?: string, selectedRows?: Array_Type<UiCollapsibleGridTreeNode>): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type 'ROWS_ACTION_SELECT' and updates {@link #selectedRows} field.
   * The existing `selectedRows` information will be replaced with the new `selectedRows` value
   * which contains the updated list of row selections.
   *
   * @param state
   *        Redux state.
   * @param action
   *        Redux action.
   *
   * @returns A new Redux state with the updated `selectedRows` value.
   */
  static rowsSelectReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to clear all #selectedRows from state.
   *
   * @param id
   *        ID of the component.
   * @return A Redux action that will trigger #selectedRowsClearReducer.
   */
  static clearSelectedRowsAction(id: string): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type `ROWS_ACTION_CLEAR` and updates the #selectedRows field
   * to be an empty array.
   *
   * @param state
   *        Redux state.
   * @param action
   *        Redux action.
   *
   * @returns A new Redux state with the updated #selectedRows value.
   */
  static selectedRowsClearReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggers an action that applies to a single cell.
   * Cells can be clicked when {@link UiCollapsibleGridTreeNodeDatum#actionSuffix} is set.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   * @param cellData
   *           The {@link UiCollapsibleGridTreeNodeDatum} associated with the clicked cell.
   * @return {@link UiSdlReduxAction}
   */
  static triggerCellAction(id?: string, actionSuffix?: string, cellData?: UiCollapsibleGridTreeNodeDatum): UiSdlReduxAction<any> | null;

  /**
   * Triggers the action associated with the action button that was clicked in a cell.
   * Cells with action buttons can be clicked when {@link UiCollapsibleGridTreeNodeDatum#cellActions} is set.
   *
   * @param id
   *        ID of the component.
   * @param actionSuffix
   *        The suffix of the action that should be triggered.
   * @param cellData
   *        The {@link UiCollapsibleGridTreeNodeDatum} associated with the clicked cell.
   * @param args
   *        Optional key-value pairs that will be included in the payload of this action.
   * @return A {@link UiSdlReduxAction} of type `CELL_BUTTON_CLICK_${actionSuffix}` with the payload
   *         containing the `cellData` object.
   */
  static clickCellButtonAction(id: string, actionSuffix: string, cellData: UiCollapsibleGridTreeNodeDatum, args?: any): UiSdlReduxAction<any> | null;

  /**
   * Triggers an action when the content of a cell is changed
   * @param id
   *        Id of the component.
   * @param cellData
   *        The cell data of the new cell.
   *
   * @returns An `EDIT_CELL` action for this instance.
   */
  static triggerEditCellAction(id: string, cellData: UiCollapsibleGridTreeNodeDatum): UiSdlReduxAction<any>;

  /**
   * Triggers an action when the content of a dropdown cell is changed
   *
   * @param id
   *        Id of the component.
   * @param cellData
   *        The {@link UiCollapsibleGridTreeNodeDatum} associated with the clicked cell.
   * @return {@link UiSdlReduxAction}
   */
  static triggerDropdownCellAction(id: string, cellData: UiCollapsibleGridTreeNodeDatum): UiSdlReduxAction<any>;

  /**
   * Triggers an action that updates the header of the spreadsheet.
   *
   * @param id
   *           Id of the component.
   * @param header
   *           The new header object.  The existing header will be merged  with the new header information. To remove
   *           parts of the header set the field to remove to `null`.
   *
   * @returns A `HEADER_UPDATE` action for this instance.
   */
  static updateHeaderAction(id?: string, header?: UiSdlComponentTitle): UiSdlReduxAction<any> | null;

  /**
   * Triggers an action that either expands or collapse the clicked chevron row.
   *
   * @param id
   *           Id of the component.
   * @param rowIds
   *           The rowIds of the clicked chevron row.
   * @param level
   *           The level of the clicked chevron row.
   * @param expand
   *           Tells the action wether it should collapse or expand.
   *           True -> expand, False -> collapse
   *
   * @returns A `ROW_VISIBILITY_CHANGE` action for this instance.
   */
  static rowVisibilityChangeAction(id?: string, rowIds?: Array_Type<string>, level?: number, expand?: boolean): UiSdlReduxAction<any> | null;

  /**
   * Listens for actions of type 'HEADER_UPDATE' and updates {@link #header} field. The existing header will be merged
   * with the new header information.  To remove parts of the header set the field to remove to `null`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static headerUpdateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type 'ROW_VISIBILITY_CHANGE' and either collapse or expand the desired rowId.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static rowVisibilityChangeReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;
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
