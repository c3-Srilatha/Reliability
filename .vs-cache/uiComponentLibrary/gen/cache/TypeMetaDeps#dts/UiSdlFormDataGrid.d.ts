// TypeScript definitions for the C3 type UiSdlFormDataGrid

/**
 * Type to use grid as an input in forms. When this type is used, {@link UiSdlDataGrid}'s in-built
 * editor will be disabled and columns will always be in edit mode.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlFormDataGrid
 */
declare interface IUiSdlFormDataGrid {

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
  dataSpec?: IUiSdlFormDataGridDataSpec | null;

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
   * The spec used for retrieving the total data count, will be used for exporting and pagination.
   */
  totalDataCount?: IUiSdlDataGridTotalDataCountDataSpec | null;

  /**
   * Holds the total count of the data.
   */
  dataCollectionCount?: number | null;

  /**
   * Holds the data to display in the grid.
   */
  dataCollection?: C3.Array<Obj | null> | Array<IObj | null>;

  /**
   * Configuration of the header subcomponent.
   */
  header?: IUiSdlComponentHeader | null;

  /**
   * When a component is provided, it is shown as detail when a row is expanded.
   */
  detailComponentId?: string | null;

  /**
   * Whether we should apply filter from the filter panel to the detailComponent.
   */
  detailComponentFilterable?: boolean;

  /**
   * A mapping to keep track of which item details to expand.
   * Key is item id, value is boolean.
   *
   * map<string, boolean> doesn't play well with Immutable.js
   */
  expandedItems?: any | null;

  /**
   * Specifies whether checkboxes will be prepended to each row in the grid.
   */
  checkboxes?: boolean;

  /**
   * Whether the scrollbar should be visible on scroll or all the time
   */
  scrollbarAlwaysVisible?: boolean;

  /**
   * Specifies whether select all action will be enabled when a checkboxes are present in a grid.
   */
  checkboxesShowSelectAllBanner?: boolean;

  /**
   * Specifies the row style of the grid.
   *
   * 'LINE_DIVISIONS' would add lines between each row,
   * 'FREE_FORM' would add no lines between any row or column, and
   * 'GRID_LINES' would add lines between each row and between each column.
   */
  rowStyle?: string | null;

  /**
   * Specifies whether the grid's rows will have alternating background colors.
   */
  zebraStripes?: boolean;

  /**
   * Specifies the visible density of the grid rows.
   */
  rowDensity?: string | null;

  /**
   * Specifies whether to allow the user to resize columns in the grid display.
   */
  resizableColumns?: boolean;

  /**
   * Specifies whether to allow the user to reorder columns in the grid display.
   * NOTE: even if this is true, columns with {@link UiSdlDataGridDataSpecColumnFieldSetting#sticky} as true will not be re-orderable
   */
  reorderableColumns?: boolean;

  /**
   * Specifies whether to allow the user to add and remove individual grid rows in order to change the underlying data.
   */
  removableRows?: boolean;

  /**
   * Whether to show a confirmation modal when deleting a row.
   * This only takes effect if {@link #removableRows} is `true`.
   *
   * When set to true, the grid dispatches a `ROW_ACTION_CLICK_DELETE_WITH_CONFIRMATION` action
   * instead of the standard `ROW_ACTION_CLICK_DELETE` action. This allows the developer to
   * implement a custom confirmation modal before the row is deleted.
   *
   * The `ROW_ACTION_CLICK_DELETE_WITH_CONFIRMATION` action is handled by {@link #pendingRowDeletionIdUpdateEffect}, which updates {@link #pendingRowDeletionId}.
   */
  confirmBeforeRowDelete?: boolean;

  /**
   * Saves the rows id for deletion, when there is a confirmation modal before deletion.
   */
  pendingRowDeletionId?: string | null | C3.Array<string | null> | Array<string | null> | null;

  /**
   * `id`s of items that are currently selected in a checklist grid.
   * Applicable if and only if {@link grid#checkBoxes} is `true`.
   */
  selectedItemIds?: C3.Array<string | null> | Array<string | null>;

  /**
   * Currently clicked row data.
   */
  currentlyClickedData?: any | null;

  /**
   * Internal state field to capture the current sort column and sort order. This field
   * should not be configured directly. For configuring a column to be used as the data grid's
   * default sort order (i.e. on initial render), use
   * {@link UiSdlBaseDataGridDataSpecColumnFieldSetting#defaultSortField} instead.
   */
  sortColumn?: IUiSdlDataGridSortColumn | null;

  /**
   * Whether the grid is in editable mode (a field is actively being edited).
   */
  isEditing?: boolean;

  /**
   * The `id` of the item that is being edited.
   * Applicable if and only if one of the {@link UiSdlDataGridDataSpecColumnFieldSetting#editable} is true.
   */
  editItemId?: string | null;

  /**
   * The `field` of the item that is being edited.
   * Applicable if and only if one of the {@link UiSdlDataGridDataSpecColumnFieldSetting#editable} is true.
   */
  editItemField?: string | null;

  /**
   * The changes that are made to the grid. This key is `id`; value is an array of fields modified.
   */
  editChanges?: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>};

  /**
   * The upserting editErrors from {@link #editChanges}. This key is `id`; value is a map of field to error message.
   */
  editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}};

  /**
   * The set of row-specific actions to be rendered in each row.
   */
  rowActions?: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>;

  /**
   * The number of table actions to display on the grid header.  If there are more, an additional table action
   * icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
   * table action.
   *
   * Table actions that are configured outside of the {@link #tableActions} field (such as adding new rows,
   * removing columns, or exporting) do not count towards this limit.  The additional table action itself
   * does count towards the limit.  Examples:
   *
   * - If tableActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
   *   grid header, and there is no additional actions icon.
   * - If tableActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
   *   grid header will show action "A" and the additional actions icon.  Clicking the additional actions icon
   *   will show a dropdown containing actions "B" and "C".
   */
  tableActionsCollapseThreshold?: number | null;

  /**
   * The set of actions that don't depend on rows, e.g., export, refresh. A toggleable group of actions can also be
   * specified. When considering the `tableActionsCollapseThreshold`, consider the table actions to be flattened.
   * Listen to triggers of the table actions through `TABLE_ACTION_CLICK_${actionSuffix}`. Actions specified in a
   * UiSdlBaseDataGridSelectableTableAction will only be triggered when it enters a "selected" state.
   */
  tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>;

  /**
   * The set of actions that could apply to one or more rows.
   *
   * Those actions will be visible only if one or more rows are selected.
   */
  multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>;

  /**
   * Whether grid allows inserting rows. If this field's value is `false` in metadata, grid does not allow new row insertion.
   * If this field's value is not set, then we use {@link UiSdlDataGrid#removableRows} to decide whether to allow new row insertion.
   */
  insertableRows?: boolean;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   */
  emptyState?: IUiSdlComponentRef<UiSdlEmptyState | null> | null;

  /**
   * An instance of {@link UiSdlSidePanel}.
   */
  sidePanel?: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;

  /**
   * The currently selected items in the grid. See {@link UiSdlSelectedGridItemConfig} for the selectable item types.
   */
  selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>;

  /**
   * Whether or not rows without a checkbox are selectable on row click. Will only be respected if {@link #checkboxes}
   * is false.
   */
  selectableRows?: boolean;

  /**
   * Whether or not columns are selectable on header click.
   */
  selectableColumns?: boolean;

  /**
   * Whether to show the action button in the grid header (checkboxes enabled).
   */
  showCheckboxActionButtons?: boolean;

  /**
   * Whether to show row actions on grid rows on idle. If false, row actions will show on hover.
   * If true:
   * 1. Single action: Display a visible icon for the specific action.
   * 2. Two or more actions: Display the "…" (ellipsis) icon and allow users to view the available actions in a menu.
   */
  showRowActionsOnIdle?: boolean;

  /**
   * Whether to show the action button in the grid header (checkboxes enabled).
   */
  checkboxPrimaryActionButtonText?: string | null;

  /**
   * Whether to show the action button in the grid header (checkboxes enabled).
   */
  checkboxSecondaryActionButtonText?: string | null;

  /**
   * Whether to show the save cancel button in the grid header. If set to true, this will force the save/cancel buttons
   * to be shown, regardless of whether any grid cells have been edited.
   */
  showSaveCancelButton?: boolean;

  /**
   * Whether to hide the save/cancel buttons when the grid is editable, and a cell has been edited.
   * This should be set to true if custom table actions are being used to save/cancel changes.
   */
  hideSaveCancelButtonOnEdit?: boolean;

  /**
   * Enabled to pass new label for save button.
   */
  saveChangesButtonText?: string | null;

  /**
   * Whether the filter string needs to take case-sensitivity into account.
   */
  caseSensitive?: boolean;

  /**
   * The comparator to use when generating the filter expression with the new search query.
   */
  filterComparator?: string | null;

  /**
   * Whether the search is loading or not.
   * This is an internal state, developers should not touch it manually.
   */
  isLoading?: boolean;

  /**
   * The argument in the data source API to replace with the new (and maybe transformed) search query string.
   * By default, the argument is `spec`, assuming it is a fetch call with a filter spec.
   */
  replaceArgument?: string | null;

  /**
   * A private cache of field {@link ValueType} maps for each datasource associated with this component. Use
   * {@link getFieldMapForDatasource} as an interface with this field; do not use 'dataSourceFieldMaps' directly.
   */
  dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}};

  /**
   * A mapping of componentId to the filter string generated by that component, so that all strings can be combined
   * when generating the filter string.
   * For example, `{ SDL.ExampleGrid: 'id == "SomeID"', SDL.ExampleFilterPanel: 'name == "SomeName"' }` would be
   * combined to form the filter string `'( id == "SomeID" ) && ( name == "SomeName" )'`.
   */
  activeFilters?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Placeholder text in search bar.
   */
  searchBarPlaceHolderText?: string | null;

  /**
   * Specifies whether to render the filter bar subcomponent.
   */
  filterBar?: boolean;

  /**
   * The location to insert an added row.  Prepend will add to the front of the array of objects populating the grid
   * and append will add to the end of the array.
   */
  insertLocation?: string | null;
}

/**
 * Type to use grid as an input in forms. When this type is used, {@link UiSdlDataGrid}'s in-built
 * editor will be disabled and columns will always be in edit mode.
 *
 * @remarks this represents a made instance of UiSdlFormDataGrid
 */
declare class UiSdlFormDataGrid extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormDataGrid;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlFormDataGrid;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlFormDataGrid;

  /**
   * The specification used for retrieving data displayed by the grid.
   */
  readonly dataSpec?: UiSdlFormDataGridDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormDataGridDataSpec | null): UiSdlFormDataGrid;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormDataGrid;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormDataGrid;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormDataGrid;

  /**
   * The spec used for retrieving the total data count, will be used for exporting and pagination.
   */
  readonly totalDataCount?: UiSdlDataGridTotalDataCountDataSpec | null;
  withTotalDataCount(totalDataCount: IUiSdlDataGridTotalDataCountDataSpec | null): UiSdlFormDataGrid;

  /**
   * Holds the total count of the data.
   */
  readonly dataCollectionCount?: number | null;
  withDataCollectionCount(dataCollectionCount: number | null): UiSdlFormDataGrid;

  /**
   * Holds the data to display in the grid.
   */
  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlFormDataGrid;

  /**
   * Configuration of the header subcomponent.
   */
  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlFormDataGrid;

  /**
   * When a component is provided, it is shown as detail when a row is expanded.
   */
  readonly detailComponentId?: string | null;
  withDetailComponentId(detailComponentId: string | null): UiSdlFormDataGrid;

  /**
   * Whether we should apply filter from the filter panel to the detailComponent.
   */
  readonly detailComponentFilterable?: boolean;
  withDetailComponentFilterable(detailComponentFilterable: boolean): UiSdlFormDataGrid;

  /**
   * A mapping to keep track of which item details to expand.
   * Key is item id, value is boolean.
   *
   * map<string, boolean> doesn't play well with Immutable.js
   */
  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): UiSdlFormDataGrid;

  /**
   * Specifies whether checkboxes will be prepended to each row in the grid.
   */
  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiSdlFormDataGrid;

  /**
   * Whether the scrollbar should be visible on scroll or all the time
   */
  readonly scrollbarAlwaysVisible?: boolean;
  withScrollbarAlwaysVisible(scrollbarAlwaysVisible: boolean): UiSdlFormDataGrid;

  /**
   * Specifies whether select all action will be enabled when a checkboxes are present in a grid.
   */
  readonly checkboxesShowSelectAllBanner?: boolean;
  withCheckboxesShowSelectAllBanner(checkboxesShowSelectAllBanner: boolean): UiSdlFormDataGrid;

  /**
   * Specifies the row style of the grid.
   *
   * 'LINE_DIVISIONS' would add lines between each row,
   * 'FREE_FORM' would add no lines between any row or column, and
   * 'GRID_LINES' would add lines between each row and between each column.
   */
  readonly rowStyle?: string | null;
  withRowStyle(rowStyle: string | null): UiSdlFormDataGrid;

  /**
   * Specifies whether the grid's rows will have alternating background colors.
   */
  readonly zebraStripes?: boolean;
  withZebraStripes(zebraStripes: boolean): UiSdlFormDataGrid;

  /**
   * Specifies the visible density of the grid rows.
   */
  readonly rowDensity?: string | null;
  withRowDensity(rowDensity: string | null): UiSdlFormDataGrid;

  /**
   * Specifies whether to allow the user to resize columns in the grid display.
   */
  readonly resizableColumns?: boolean;
  withResizableColumns(resizableColumns: boolean): UiSdlFormDataGrid;

  /**
   * Specifies whether to allow the user to reorder columns in the grid display.
   * NOTE: even if this is true, columns with {@link UiSdlDataGridDataSpecColumnFieldSetting#sticky} as true will not be re-orderable
   */
  readonly reorderableColumns?: boolean;
  withReorderableColumns(reorderableColumns: boolean): UiSdlFormDataGrid;

  /**
   * Specifies whether to allow the user to add and remove individual grid rows in order to change the underlying data.
   */
  readonly removableRows?: boolean;
  withRemovableRows(removableRows: boolean): UiSdlFormDataGrid;

  /**
   * Whether to show a confirmation modal when deleting a row.
   * This only takes effect if {@link #removableRows} is `true`.
   *
   * When set to true, the grid dispatches a `ROW_ACTION_CLICK_DELETE_WITH_CONFIRMATION` action
   * instead of the standard `ROW_ACTION_CLICK_DELETE` action. This allows the developer to
   * implement a custom confirmation modal before the row is deleted.
   *
   * The `ROW_ACTION_CLICK_DELETE_WITH_CONFIRMATION` action is handled by {@link #pendingRowDeletionIdUpdateEffect}, which updates {@link #pendingRowDeletionId}.
   */
  readonly confirmBeforeRowDelete?: boolean;
  withConfirmBeforeRowDelete(confirmBeforeRowDelete: boolean): UiSdlFormDataGrid;

  /**
   * Saves the rows id for deletion, when there is a confirmation modal before deletion.
   */
  readonly pendingRowDeletionId?: string | null | C3.Array<string | null> | null;
  withPendingRowDeletionId(pendingRowDeletionId: string | null | C3.Array<string | null> | Array<string | null> | null): UiSdlFormDataGrid;

  /**
   * `id`s of items that are currently selected in a checklist grid.
   * Applicable if and only if {@link grid#checkBoxes} is `true`.
   */
  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlFormDataGrid;

  /**
   * Currently clicked row data.
   */
  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlFormDataGrid;

  /**
   * Internal state field to capture the current sort column and sort order. This field
   * should not be configured directly. For configuring a column to be used as the data grid's
   * default sort order (i.e. on initial render), use
   * {@link UiSdlBaseDataGridDataSpecColumnFieldSetting#defaultSortField} instead.
   */
  readonly sortColumn?: UiSdlDataGridSortColumn | null;
  withSortColumn(sortColumn: IUiSdlDataGridSortColumn | null): UiSdlFormDataGrid;

  /**
   * Whether the grid is in editable mode (a field is actively being edited).
   */
  readonly isEditing?: boolean;
  withIsEditing(isEditing: boolean): UiSdlFormDataGrid;

  /**
   * The `id` of the item that is being edited.
   * Applicable if and only if one of the {@link UiSdlDataGridDataSpecColumnFieldSetting#editable} is true.
   */
  readonly editItemId?: string | null;
  withEditItemId(editItemId: string | null): UiSdlFormDataGrid;

  /**
   * The `field` of the item that is being edited.
   * Applicable if and only if one of the {@link UiSdlDataGridDataSpecColumnFieldSetting#editable} is true.
   */
  readonly editItemField?: string | null;
  withEditItemField(editItemField: string | null): UiSdlFormDataGrid;

  /**
   * The changes that are made to the grid. This key is `id`; value is an array of fields modified.
   */
  readonly editChanges?: C3.Map<string | null, C3.Array<string | null>>;
  withEditChanges(editChanges: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlFormDataGrid;

  /**
   * The upserting editErrors from {@link #editChanges}. This key is `id`; value is a map of field to error message.
   */
  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlFormDataGrid;

  /**
   * The set of row-specific actions to be rendered in each row.
   */
  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlFormDataGrid;

  /**
   * The number of table actions to display on the grid header.  If there are more, an additional table action
   * icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
   * table action.
   *
   * Table actions that are configured outside of the {@link #tableActions} field (such as adding new rows,
   * removing columns, or exporting) do not count towards this limit.  The additional table action itself
   * does count towards the limit.  Examples:
   *
   * - If tableActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
   *   grid header, and there is no additional actions icon.
   * - If tableActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
   *   grid header will show action "A" and the additional actions icon.  Clicking the additional actions icon
   *   will show a dropdown containing actions "B" and "C".
   */
  readonly tableActionsCollapseThreshold?: number | null;
  withTableActionsCollapseThreshold(tableActionsCollapseThreshold: number | null): UiSdlFormDataGrid;

  /**
   * The set of actions that don't depend on rows, e.g., export, refresh. A toggleable group of actions can also be
   * specified. When considering the `tableActionsCollapseThreshold`, consider the table actions to be flattened.
   * Listen to triggers of the table actions through `TABLE_ACTION_CLICK_${actionSuffix}`. Actions specified in a
   * UiSdlBaseDataGridSelectableTableAction will only be triggered when it enters a "selected" state.
   */
  readonly tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withTableActions(tableActions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): UiSdlFormDataGrid;

  /**
   * The set of actions that could apply to one or more rows.
   *
   * Those actions will be visible only if one or more rows are selected.
   */
  readonly multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null>;
  withMultipleRowActions(multipleRowActions: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>): UiSdlFormDataGrid;

  /**
   * Whether grid allows inserting rows. If this field's value is `false` in metadata, grid does not allow new row insertion.
   * If this field's value is not set, then we use {@link UiSdlDataGrid#removableRows} to decide whether to allow new row insertion.
   */
  readonly insertableRows?: boolean;
  withInsertableRows(insertableRows: boolean): UiSdlFormDataGrid;

  /**
   * The component that handles the empty state.
   * It will appear if the grid has no data.
   */
  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlFormDataGrid;

  /**
   * An instance of {@link UiSdlSidePanel}.
   */
  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlFormDataGrid;

  /**
   * The currently selected items in the grid. See {@link UiSdlSelectedGridItemConfig} for the selectable item types.
   */
  readonly selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null>;
  withSelectedGridItems(selectedGridItems: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>): UiSdlFormDataGrid;

  /**
   * Whether or not rows without a checkbox are selectable on row click. Will only be respected if {@link #checkboxes}
   * is false.
   */
  readonly selectableRows?: boolean;
  withSelectableRows(selectableRows: boolean): UiSdlFormDataGrid;

  /**
   * Whether or not columns are selectable on header click.
   */
  readonly selectableColumns?: boolean;
  withSelectableColumns(selectableColumns: boolean): UiSdlFormDataGrid;

  /**
   * Whether to show the action button in the grid header (checkboxes enabled).
   */
  readonly showCheckboxActionButtons?: boolean;
  withShowCheckboxActionButtons(showCheckboxActionButtons: boolean): UiSdlFormDataGrid;

  /**
   * Whether to show row actions on grid rows on idle. If false, row actions will show on hover.
   * If true:
   * 1. Single action: Display a visible icon for the specific action.
   * 2. Two or more actions: Display the "…" (ellipsis) icon and allow users to view the available actions in a menu.
   */
  readonly showRowActionsOnIdle?: boolean;
  withShowRowActionsOnIdle(showRowActionsOnIdle: boolean): UiSdlFormDataGrid;

  /**
   * Whether to show the action button in the grid header (checkboxes enabled).
   */
  readonly checkboxPrimaryActionButtonText?: string | null;
  withCheckboxPrimaryActionButtonText(checkboxPrimaryActionButtonText: string | null): UiSdlFormDataGrid;

  /**
   * Whether to show the action button in the grid header (checkboxes enabled).
   */
  readonly checkboxSecondaryActionButtonText?: string | null;
  withCheckboxSecondaryActionButtonText(checkboxSecondaryActionButtonText: string | null): UiSdlFormDataGrid;

  /**
   * Whether to show the save cancel button in the grid header. If set to true, this will force the save/cancel buttons
   * to be shown, regardless of whether any grid cells have been edited.
   */
  readonly showSaveCancelButton?: boolean;
  withShowSaveCancelButton(showSaveCancelButton: boolean): UiSdlFormDataGrid;

  /**
   * Whether to hide the save/cancel buttons when the grid is editable, and a cell has been edited.
   * This should be set to true if custom table actions are being used to save/cancel changes.
   */
  readonly hideSaveCancelButtonOnEdit?: boolean;
  withHideSaveCancelButtonOnEdit(hideSaveCancelButtonOnEdit: boolean): UiSdlFormDataGrid;

  /**
   * Enabled to pass new label for save button.
   */
  readonly saveChangesButtonText?: string | null;
  withSaveChangesButtonText(saveChangesButtonText: string | null): UiSdlFormDataGrid;

  /**
   * Whether the filter string needs to take case-sensitivity into account.
   */
  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlFormDataGrid;

  /**
   * The comparator to use when generating the filter expression with the new search query.
   */
  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlFormDataGrid;

  /**
   * Whether the search is loading or not.
   * This is an internal state, developers should not touch it manually.
   */
  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlFormDataGrid;

  /**
   * The argument in the data source API to replace with the new (and maybe transformed) search query string.
   * By default, the argument is `spec`, assuming it is a fetch call with a filter spec.
   */
  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlFormDataGrid;

  /**
   * A private cache of field {@link ValueType} maps for each datasource associated with this component. Use
   * {@link getFieldMapForDatasource} as an interface with this field; do not use 'dataSourceFieldMaps' directly.
   */
  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlFormDataGrid;

  /**
   * A mapping of componentId to the filter string generated by that component, so that all strings can be combined
   * when generating the filter string.
   * For example, `{ SDL.ExampleGrid: 'id == "SomeID"', SDL.ExampleFilterPanel: 'name == "SomeName"' }` would be
   * combined to form the filter string `'( id == "SomeID" ) && ( name == "SomeName" )'`.
   */
  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFormDataGrid;

  /**
   * Placeholder text in search bar.
   */
  readonly searchBarPlaceHolderText?: string | null;
  withSearchBarPlaceHolderText(searchBarPlaceHolderText: string | null): UiSdlFormDataGrid;

  /**
   * Specifies whether to render the filter bar subcomponent.
   */
  readonly filterBar?: boolean;
  withFilterBar(filterBar: boolean): UiSdlFormDataGrid;

  /**
   * The location to insert an added row.  Prepend will add to the front of the array of objects populating the grid
   * and append will add to the end of the array.
   */
  readonly insertLocation?: string | null;
  withInsertLocation(insertLocation: string | null): UiSdlFormDataGrid;

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
  static fromJson(json: any | null): UiSdlFormDataGrid | null;

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
  static fromJsonString(json: string | null): UiSdlFormDataGrid | null;

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
  static fromXmlString(xml: string | null): UiSdlFormDataGrid | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlFormDataGrid | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlFormDataGrid;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlFormDataGrid;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlFormDataGrid;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlFormDataGrid | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlFormDataGrid | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlFormDataGrid;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlFormDataGrid;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlFormDataGrid;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlFormDataGrid;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlFormDataGrid;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlFormDataGrid;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlFormDataGrid;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlFormDataGrid;

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
  withoutFieldAtPath(path: string): UiSdlFormDataGrid;

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
  withoutField(field: string | null): UiSdlFormDataGrid;

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
  withoutField(field: FieldType | null): UiSdlFormDataGrid;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlFormDataGrid;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlFormDataGrid;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlFormDataGrid;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlFormDataGrid;

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
  defaultField(field: string): UiSdlFormDataGrid;

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
  defaultField(field: FieldType): UiSdlFormDataGrid;

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
  unsetField(field: string): UiSdlFormDataGrid;

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
  unsetField(field: FieldType): UiSdlFormDataGrid;

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
  removeField(field: string): UiSdlFormDataGrid;

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
  removeField(field: FieldType): UiSdlFormDataGrid;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlFormDataGrid;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlFormDataGrid;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlFormDataGrid;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlFormDataGrid;

  mergeJson(json: any | null): UiSdlFormDataGrid;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlFormDataGrid;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlFormDataGrid;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlFormDataGrid | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlFormDataGrid | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlFormDataGrid | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlFormDataGrid | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlFormDataGrid | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlFormDataGrid | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlFormDataGrid | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlFormDataGrid | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlFormDataGrid | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlFormDataGrid;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlFormDataGrid;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlFormDataGrid;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlFormDataGrid;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlFormDataGrid;

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
  static make(fields: any, withDefaults?: boolean): UiSdlFormDataGrid;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlFormDataGrid | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlFormDataGrid;

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
  afterMake(): UiSdlFormDataGrid;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlFormDataGrid;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlFormDataGrid>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlFormDataGrid;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlFormDataGrid | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlFormDataGrid | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlFormDataGrid | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlFormDataGrid | null> | null>;

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
  dependencies(): MetadataDeps<UiSdlFormDataGrid | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlFormDataGrid;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlFormDataGrid | null, spec?: UpsertSpec | null): UiSdlFormDataGrid | null;

  upsert(srcObj?: UiSdlFormDataGrid | null, spec?: UpsertSpec | null): UiSdlFormDataGrid | null;

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
  static fromString(s: string | null): UiSdlFormDataGrid | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlFormDataGrid | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlFormDataGrid, state: UiSdlReduxState): UiSdlFormDataGrid | null;

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
   * Triggers `DATA_CONFIG_UPDATE` and `DATA_REQUEST` actions if the type of data source is 'Hierarchy'.
   * Otherwise triggers `DATA_COUNT_ARGS_SYNC` and `DATA_REQUEST` actions.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static countDataEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggered when the component needs to load its data.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `DATA_LOAD` action for this instance.
   */
  static loadDataAction(id?: string | null): UiSdlDataLoadAction | null;

  /**
   * Triggered when a row has been successfully edited@param id.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `EDIT_CHANGES_UPDATE` action for this instance.
   */
  static editChangesUpdateAction(id?: string | null): UiSdlEditChangesUpdateAction | null;

  /**
   * Triggered to update {@link #showSaveCancelButton} value.
   *
   * @param id
   *            Id of the component.
   * @param visible
   *            True if `Save` and `Cancel` buttons should be visible, false otherwise.
   *
   * @returns A `SAVE_CANCEL_BUTTON_VISIBILITY_UPDATE` action for this instance.
   */
  static updateSaveCancelButtonVisibilityAction(id?: string | null, visible?: boolean): UiSdlSaveCancelButtonVisibilityUpdateAction | null;

  /**
   * Triggered when the user (un)selects a checkbox for one of the grid items.
   * Applicable if and only if {@link grid#checkBoxes} is `true`.
   *
   * @param id
   *            Id of the component.
   * @param selected
   *           `true` if the item was selected, `false` if it was unselected.
   * @param itemId
   *           The `id` of the object that was (un)selected.
   *
   * @returns A `SELECTION_CHANGE` action for this instance with the following properties:
   * - payload.selected {boolean} `true` if the item was selected, `false` if it was unselected.
   * - payload.id {string} The `id` of the object that was (un)selected.
   * - payload.componentId {string} The componentId of the component on which the action was triggered.
   * - meta.dataSourceId {string} The `id` of the data source to which the (un)selected item belongs.
   */
  static changeSelectionAction(id?: string | null, selected?: boolean, itemId: string): UiSdlBaseDataGridSelectionChangeAction | null;

  /**
   * Triggered when the user (un)checks the "select all" checkbox in the header
   * row of the grid in a page. Applicable if and only if {@link grid#checkBoxes} is `true`.
   * This action can also be used to clear selections by passing in the 'false' parameter to deselect everything.
   * The toggle select/deselect all is in local scope -
   * it only apply to items in a page, not all data from the fetch response.
   *
   * @param id
   *            Id of the component.
   * @param selected
   *           `true` if the "select all" checkbox was selected, `false` if it was unselected.
   *
   * @returns A `SELECT_ALL_TOGGLE` action for this instance with the following properties:
   * - payload.selected {boolean} `true` if the item was selected, `false` if it was unselected.
   * - payload.componentId {string} The componentId of the component on which the action was triggered.
   */
  static toggleSelectAllAction(id?: string | null, selected?: boolean): UiSdlSelectAllToggleAction | null;

  /**
   * Triggered when a row in the grid is clicked
   *
   * @param id
   *            Id of the component.
   * @param dataItem
   *            The record that represents the row in the grid.
   *
   * @returns A `ROW_CLICK` action for this instance with the following properties:
   * - payload.componentId - {string} The `id` of the component who dispatches the action.
   * - payload.dataItem - The record that represents the row in the grid.
   */
  static clickRowAction(id?: string | null, dataItem?: any | null): UiSdlRowCellClickAction | null;

  /**
   * Triggered when row action button clicked.
   *
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *           The action that was clicked on the row.
   * @param dataItem
   *           The record that represents the row in the grid.
   * @param args
   *           The args that represent additional data that may be provided.
   *
   * @returns A `ROW_ACTION_CLICK_${actionSuffix}` action with the following properties:
   * - `payload.dataItem` {any} The record that represents the row in the grid that the action was triggered from.
   * - `meta.dataSourceId` {string} The `id` of the data source to which the items belong.
   */
  static triggerRowAction(id?: string | null, actionSuffix?: string | null, dataItem?: any | null, args?: any | null): UiSdlRowCellClickAction | null;

  /**
   * Triggers an action that applies to the currently selected items only.
   *
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   * @param dataItems
   *           The list of records that are selected at the time the action is triggered.
   *
   * @returns A `MULTIPLE_ROW_ACTION_CLICK_${actionSuffix}` action with the following properties:
   * - `action.payload` {any} The list of records that are selected.
   * - `action.componentId` {string} The `id` of the component who dispatches the action.
   */
  static triggerMultipleRowAction(id?: string | null, actionSuffix?: string | null, dataItems?: C3.Array<any | null>): UiSdlMultipleRowActionClickAction | null;

  /**
   * Triggers an action that applies to the whole component.
   *
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   *
   * @returns A `TABLE_ACTION_CLICK_${actionSuffix}` action with the following properties:
   * - `meta.dataSourceId` {string} The `id` of the `UiSdlDataGrid`.
   */
  static triggerTableAction(id?: string | null, actionSuffix?: string | null): UiSdlTableActionClickAction | null;

  /**
   * Return an action that sets the loading status of a table action button.  A loading button
   * will show a spinner and not respond to clicks.
   *
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *            The actionSuffix of the action in {@link #tableActions}.
   * @param loading
   *           The loading status to set.
   *
   * @return A `TABLE_ACTION_LOADING_SET` action corresponding to the table action.
   */
  static setTableActionLoadingAction(id?: string | null, actionSuffix: string, loading?: boolean): UiSdlTableActionLoadingSetAction | null;

  /**
   * Triggered when a {@link UiSdlBaseDataGridSelectableTableAction} selection state is toggled.
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *            The suffix of the action that is toggled.
   * @param selected
   *            True if the action is toggled to be selected.
   *
   * @returns A `SELECTABLE_TABLE_ACTION_TOGGLE` action with the following properties:
   *  - payload.actionSuffix {string} The action suffix of the action.
   *  - payload.componentId {string} The id of this grid component.
   *  - payload.selected {boolean}  True if the action is toggled to be selected.
   */
  static triggerToggleSelectedTableAction(id?: string | null, actionSuffix?: string | null, selected?: boolean): UiSdlSelectableTableActionToggleAction | null;

  /**
   * Triggers an action that applies to the clicked cell.
   *
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *            The suffix of the action that should be triggered.
   *
   * @return A CELL_ACTION_CLICK_${actionSuffix} action with the following properties:
   * - `payload.dataItem` {any} The record for the specific cell.
   * - `meta.dataSourceId` {string} The `id` of the data source to which the items belong.
   */
  static triggerCellAction(id?: string | null, actionSuffix?: string | null, dataItem?: any | null): UiSdlRowCellClickAction | null;

  /**
   * Triggered when the user changes the value in a cell, after each key stroke.
   *
   * @param id
   *        The id of the component.
   * @param itemId
   *        The id of the item.
   * @param field
   *        The field of the column.
   * @param value
   *        The new value.
   *
   * @return An `ITEM_CHANGE` action for this instance with the following properties:
   * - payload.id {string} The id of the item.
   * - payload.field {string} The field of the column.
   * - payload.value {string} The new value.
   * - meta.dataSourceId {string} The `id` of the data source.
   */
  static changeItemAction(id?: string | null, itemId: string, field: string, value?: string | null): UiSdlItemChangeAction | null;

  /**
   * Triggered when the user cancels any editable cell changes.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `CHANGE_CANCEL` action for this instance.
   */
  static cancelChangeAction(id?: string | null): UiSdlBaseDataGridChangeCancelAction | null;

  /**
   * Triggered when the user saves data that was edited in a grid cell.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `DATA_SAVE` action for this instance.
   */
  static saveDataAction(id?: string | null): UiSdlDataSaveAction | null;

  /**
   * Triggered when the user clicks the primary button when checkboxes are true
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `CHECKBOX_PRIMARY_BUTTON_CLICK` action for this instance.
   */
  static checkboxPrimaryButtonClickAction(id?: string | null): UiSdlBaseDataGridCheckboxPrimaryButtonAction | null;

  /**
   * Triggered when the user clicks the primary button when checkboxes are true
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `CHECKBOX_SECONDARY_BUTTON_CLICK` action for this instance.
   */
  static checkboxSecondaryButtonClickAction(id?: string | null): UiSdlBaseDataGridCheckboxSecondaryButtonAction | null;

  /**
   * Triggered when the user selects/deselects a column in the 'edit columns' dropdown.
   *
   * @param id
   *            Id of the component.
   * @param columnId
   *           The id of the {@link UiSdlDataGridDataSpecColumnFieldSetting} to toggle (hidden/visible).
   *
   * @returns A `COLUMN_VISIBILITY_TOGGLE` action for this instance with the following properties:
   * - payload.columnId {string} the id of the column to toggle.
   */
  static toggleColumnVisibilityAction(id?: string | null, columnId: string): UiSdlColumnVisibilityToggleAction | null;

  /**
   * Triggered when the user clicks into an editable cell.
   *
   * @param id
   *        Id of the component.
   * @param itemId
   *        The id of the item.
   * @param field
   *        The field of the column.
   *
   * @return An `EDIT_ENTER` action for this instance with the following properties:
   * - payload.id {string} The id of the item.
   * - payload.field {string} The field of the column.
   * - meta.dataSourceId {string} The `id` of the data source.
   */
  static enterEditAction(id?: string | null, itemId: string, field: string): UiSdlEditEnterExitAction | null;

  /**
   * Triggered when the user moves the focus out of a editable cell.
   *
   * @param id
   *        Id of the component.
   * @param itemId
   *        The id of the item.
   * @param field
   *        The field of the column.
   *
   * @return An `EDIT_EXIT` action for this instance with the following properties:
   * - payload.id {string} The id of the item.
   * - payload.field {string} The field of the column.
   * - meta.dataSourceId {string} The `id` of the data source.
   */
  static exitEditAction(id?: string | null, itemId: string, field: string): UiSdlEditEnterExitAction | null;

  /**
   * Triggered when the user saves changes or when data is loaded
   *
   * @param id
   *          Id of the component.
   * @param buttonType
   *          The type of button ('SAVE' or 'CANCEL')
   * @param disable
   *          Whether the button should be disabled
   * @param loading
   *           Whether the button should be loading
   *
   * @return An `ACTION_BUTTON_STATE_CHANGE` action for this instance with the following properties:
   * - payload.componentId {string} The id of the item.
   * - payload.buttonType {string} The type of button
   * - payload.disabled {boolean} Whether the button should be disabled
   * - payload.loading {boolean} Whether the button should be loading
   */
  static changeActionButtonStateAction(id?: string | null, buttonType: string, disable?: boolean, loading?: boolean): UiSdlBaseDataGridActionButtonStateChangeAction | null;

  /**
   * Triggered to update {@link editErrors}.
   *
   * @param id
   *            Id of the component.
   * @param editErrors
   *        Edit errors to be saved to {@link #editErrors}.
   *
   * @return An `EDITERROR_CHANGES` action for this instance with the following properties:
   * - payload {map<string, map<string,string>>} Edit errors to be saved to {@link #editErrors}.
   * - meta.dataSourceId {string} The `id` of the data source.
   */
  static editErrorChangesAction(id?: string | null, editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>): UiSdlEditerrorChangesAction | null;

  /**
   * Triggered when the user expands/contracts a row's details.
   *
   * @param id
   *            Id of the component.
   * @param expanded
   *           `true` if the detail are being expanded, `false` if contracted.
   * @param itemId
   *           The id of the data item in the toggled row.
   *
   * @returns a `ROW_TOGGLE` action for this instance with the following properties:
   * - payload.expanded {boolean} True if the row's detail has to be expanded.
   * - payload.id {string} The id of the row's dataItem.
   */
  static toggleRowAction(id?: string | null, expanded?: boolean, itemId: string): UiSdlRowToggleAction | null;

  /**
   * Triggers an action when either `primaryActionButton` or `secondaryActionButton` is clicked
   * on the empty state component.
   *
   * @param id
   *            Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   *
   * @returns An `EMPTY_STATE_ACTION_CLICK_${actionSuffix}` action.
   */
  static clickEmptyStateButtonAction(id?: string | null, actionSuffix: string): UiSdlEmptyStateActionClickAction | null;

  /**
   * Triggered when a row in the grid is clicked.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `CURRENTLY_CLICKED_DATA_UPDATE` action for this instance.
   */
  static updateCurrentlyClickedData(id?: string | null, data?: any | null): UiSdlCurrentlyClickedDataUpdateAction | null;

  /**
   * When {@link #selectableRows} is true, and a row is clicked, this action will be invoked.
   * Applicable if and only if {@link #selectableRows} is `true` and {@link #checkboxes} is `false`.
   *
   * @param id
   *            Id of the component.
   * @param dataItem
   *            The record that represents the row in the grid.
   *
   * @returns A `ROW_SELECT` action for this instance with the following properties:
   * - payload.componentId - {string} The `id` of the component who dispatches the action.
   * - payload.dataItem - The record that represents the row in the grid.
   */
  static selectRowAction(id?: string | null, dataItem?: any | null): UiSdlRowCellClickAction | null;

  /**
   * When {@link #selectableColumns} is true, and a column header is clicked, this action will be invoked.
   *
   * @param id
   *            Id of the component.
   * @param columnConfig
   *            Json that represents the column in the grid.
   *
   * @returns A `COLUMN_SELECT` action for this instance with the following properties:
   * - payload.componentId - {string} The `id` of the component who dispatches the action.
   * - payload.columnConfig - The json that represents the column in the grid.
   */
  static selectColumnAction(id?: string | null, columnConfig?: any | null): UiSdlColumnSelectAction | null;

  /**
   * Triggered to update the state with the new column order.
   *
   * @param state
   *          Redux state.
   * @param action
   *          Redux action.
   * @returns A new Redux state.
   */
  static reorderColumnsAction(id?: string | null, columnsOrder?: C3.Map<string | null, number | null>): UiSdlColumnsReorderedAction | null;

  /**
   * Listens for actions of type 'REORDER_COLUMNS' updates the state with the new column order.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static reorderColumnsReducer(state?: UiSdlReduxState | null, action?: UiSdlColumnsReorderedAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `ROW_ACTION_CLICK_DELETE_WITH_CONFIRMATION` and updates the state accordingly.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static pendingRowDeletionIdUpdateEffect(state: UiSdlReduxState, action: UiSdlRowCellClickAction): UiSdlReduxState;

  /**
   * Listens for actions of type `MULTIPLE_ROW_ACTION_CLICK_DELETE_WITH_CONFIRMATION` and updates the `pendingRowDeletionId` value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static pendingRowsDeletionIdUpdateReducer(state: UiSdlReduxState, action: UiSdlMultipleRowActionClickDeleteRowAction): UiSdlReduxState;

  /**
   * Listens for actions of type `CURRENTLY_CLICKED_DATA_UPDATE` and updates the {@link #currentlyClickedData} value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static currentlyClickedDataUpdateEffect(state: UiSdlReduxState, action: UiSdlCurrentlyClickedDataUpdateAction): UiSdlReduxState;

  /**
   * Listens for actions of type `EDIT_CHANGES_UPDATE` and updates the {@link #editChanges} value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static updateEditChangesEffect(state: UiSdlReduxState, action: UiSdlEditChangesUpdateAction): UiSdlReduxState;

  /**
   * Listens for actions of type 'DATA_COUNT_ARGS_SYNC' and synchronizes the grid's dataSpec and dataCountExportSpec,
   * specifically the filter for fetchCount.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static dataCountArgumentsSyncReducer(state?: UiSdlReduxState | null, action?: UiSdlDataCountArgumentsSyncAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `SAVE_CANCEL_BUTTON_VISIBILITY_UPDATE` and updates the {@link #showSaveCancelButton} value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static saveCancelButtonVisibilityUpdateReducer(state: UiSdlReduxState, action: UiSdlSaveCancelButtonVisibilityUpdateAction): UiSdlReduxState;

  /**
   * Listens for actions of type `MULTIPLE_ROW_ACTION_CLICK_DELETE_ROW` and clear {@link #selectedItemIds}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static multipleRowsDeleteEffect(state: UiSdlReduxState, action: UiSdlMultipleRowActionClickDeleteRowAction): UiSdlReduxState;

  /**
   * Listens for actions of type `COLUMN_VISIBILITY_TOGGLE` and toggles the 'hidden' field on the specified column.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static columnVisibilityToggleEffect(state?: UiSdlReduxState | null, action?: UiSdlColumnVisibilityToggleAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `EDIT_ENTER` and updates internal
   * fields {@link editItemId} and {@link #editItemField} with the new item id and field.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static enterEditEffect(state?: UiSdlReduxState | null, action?: UiSdlEditEnterExitAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `EDIT_EXIT` and updates internal
   * fields {@link editItemId} and {@link #editItemField} to null.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static editExitEffect(state?: UiSdlReduxState | null, action?: UiSdlEditEnterExitAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `EDITERROR_CHANGES` and updates internal
   * field {@link #editErrors}.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static editErrorChangesEffect(state?: UiSdlReduxState | null, action?: UiSdlEditerrorChangesAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `SELECTION_CHANGE` and updates internal
   * field {@link selectedItemIds} by removing or adding the unchecked or
   * checked item, respectively. Applicable if and only if {@link grid#checkBoxes} is `true`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static selectionChangeEffect(state?: UiSdlReduxState | null, action?: UiSdlBaseDataGridSelectionChangeAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `SELECT_ALL_TOGGLE` and updates internal
   * field {@link selectedItemIds} with either all items or no items.
   * Applicable if and only if {@link grid#checkBoxes} is `true`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static selectAllToggleEffect(state?: UiSdlReduxState | null, action?: UiSdlSelectAllToggleAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `ROW_SELECT` and updates {@link #selectedGridItems} to contain only the selected row.
   *
   * @param state
   *    Redux state.
   * @param action
   *    Redux action containing a payload with the selected row's data item.
   *
   * @returns A new Redux state with the updated {@link #selectedGridItems} array.
   */
  static rowSelectReducer(state?: UiSdlReduxState | null, action?: UiSdlRowCellClickAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `COLUMN_SELECT` and updates {@link #selectedGridItems} to contain only the selected
   * column.
   *
   * @param state
   *    Redux state.
   * @param action
   *    Redux action containing a payload with the selected column's data.
   *
   * @returns A new Redux state with the updated {@link #selectedGridItems} array.
   */
  static columnSelectReducer(state?: UiSdlReduxState | null, action?: UiSdlColumnSelectAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `ROW_TOGGLE` and updates internal
   * field `expanded` on the expanded item.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static toggleRowEffect(state?: UiSdlReduxState | null, action?: UiSdlRowToggleAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `ACTION_BUTTON_STATE_CHANGE` and updates the specified
   * button's state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state
   */
  static actionButtonStateChangeEffect(state?: UiSdlReduxState | null, action?: UiSdlBaseDataGridActionButtonStateChangeAction | null): UiSdlReduxState | null;

  /**
   * Listens for actions of type `TABLE_ACTION_LOADING_SET` and sets the loading status of the
   * requested table action.
   */
  static tableActionLoadingSetReducer(state?: UiSdlReduxState | null, action?: UiSdlTableActionLoadingSetAction | null): UiSdlReduxState | null;

  /**
   * Trigger a handle new added entry when create a new row at data grid.
   * @param id
   *            Id of the component.
   * @returns an `ADDED_ENTRY_HANDLE` action for this instance.
   */
  handleAddedEntryAction(id?: string | null, dataId?: string | null): UiSdlAddedDataHandleAction | null;

  /**
   * Private
   *
   * Listens for actions of type `SELECTABLE_TABLE_ACTION_TOGGLE` and updates the state accordingly
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static selectableTableActionToggleReducer(state: UiSdlReduxState, action: UiSdlSelectableTableActionToggleAction): UiSdlReduxState;

  /**
   * Triggers `DATA_DELETE` and `DATA_SAVE` actions to delete multiple rows.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static multipleRowsDeleteEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `DATA_DELETE` and `DATA_SAVE` actions to delete a row.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static rowDeleteEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `DATA_MODIFY` and `EDIT_CHANGES_UPDATE` actions to change an item.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static itemChangeEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers 'EDIT_CHANGES_UPDATE', 'ACTION_BUTTON_STATE_CHANGE', and 'SEARCH_LOADING_SET' actions to get rid of cancel and save buttons
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static loadedDataHandleEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `'EDIT_ENTER` and `ID_CREATE` actions to add a row.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static rowAddEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions to load data.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static dataLoadEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `CHANGE_CANCEL` and `EDIT_CHANGES_UPDATE` actions to cancel a change.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static changeCancelEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `DATA_SAVE` and `ACTION_BUTTON_STATE_CHANGE` actions to save data.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static dataSaveEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `TOTAL_DATA_COUNT` action to update total data count in a grid
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static dataUpdateCountEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers `EDIT_ENTER` action to start enter edit mode for new added entry.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static addedEntryHandleEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

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
   * Triggered to set the search value.
   *
   * @param id
   *           The id of the search component.
   * @param value
   *           The value to set.
   *
   * @returns A `SEARCH_VALUE_SET` action for this instance.
   */
  static setSearchValueAction(id?: string | null, value?: string | null): UiSdlSearchValueSetAction;

  /**
   * Triggered when search dataSource needs to be loaded.
   *
   * @param id
   *           Id of the component.
   *
   * @returns A `SEARCH_DATA_SOURCE_LOAD` action for this instance.
   */
  static loadSearchDataSourceAction(id?: string | null): UiSdlSearchDataSourceLoadAction;

  /**
   * Triggered to create {@link dataSourceFieldMaps} when the component first mounts.
   *
   * @param id
   *           Id of the component.
   *
   * @returns A `DATA_SOURCE_FIELD_MAP_SET` action for this instance.
   */
  static setDataSourceFieldMapAction(id?: string | null, searchDataSourceId?: string | null, fieldMap?: any | null): UiSdlDataSourceFieldMapSetAction;

  /**
   * Triggered to create {@link dataSourceFieldMaps} when the component first mounts.
   *
   * @param id
   *           Id of the component.
   *
   * @returns A `DATA_SOURCE_TYPES_LOAD` action for this instance.
   */
  static loadDataSourceTypesAction(id?: string | null, searchDataSourceId?: string | null): UiSdlDataSourceTypesLoadAction;

  /**
   * Triggered when a search input's content is changed.
   *
   * @param id
   *           Id of the component.
   * @param value
   *           The value in the search input.
   * @param idValue
   *           The identifying value of the search (may be different from or same as value).
   *
   * @returns A `SEARCH_CHANGE` action for this instance.
   */
  static changeSearchAction(id?: string | null, value?: string | null, idValue?: string | null): UiSdlSearchableSearchChangeAction;

  /**
   * Triggered when search is loading.
   *
   * @param id
   *           Id of the component.
   * @param loading
   *           The boolean to set search bar to loading.
   *
   * @returns A `SEARCH_LOADING_SET` action for this instance.
   */
  static setSearchLoadingAction(id?: string | null, loading?: boolean): UiSdlSearchableSearchLoadingSetAction;

  /**
   * Triggered when a search result from the dropdown list is selected.
   *
   * @param id
   *           Id of the component.
   * @param selection
   *           The selected search result. An object with an id field and a value field.
   *
   * @returns A `SEARCH_RESULT_SELECT` action for this instance.
   */
  static selectSearchResultAction(id?: string | null, selection?: Obj | null): UiSdlSearchResultsSelectAction;

  /**
   * Triggered when a search input query changes.
   *
   * @param id
   *           Id of the component.
   * @param {String} query
   *           The query string.
   * @param {Object} searchProps
   *           The props for the field for which the query changed.
   *
   * @returns A `SEARCH_QUERY_CHANGE` action for this instance with the following properties:
   * - payload.queryString {String} The query string that the data source will be filtered on.
   * - payload.dataSource {String} The data source reference that will be filtered with the new query.
   * - payload.searchFields {Array} If the data source is a fetch call, the fields that the filter will search on.
   * - payload.isFetch {Boolean} Indicates if the data source is a fetch, so that filtering is handled differently
   * than a custom data source api.S
   * - payload.valuefield {String} The value field of the input to fall back on, in case search fields are empty.
   */
  static changeSearchQueryAction(id?: string | null, query?: string | null, searchProps?: Obj | null): UiSdlSearchQueryChangeAction;

  /**
   * Triggered after the field values of a filter panel updating the component are changed, so that the
   * corresponding entry in the state can also be updated. This updated map is used to generate a combined
   * filter string/expression with filters from other contributing components stored in the current component's state.
   *
   * @param id
   *            Id of the component.
   * @param sourceComponentId
   *            The id of the component for which mapping in the state needs to be updated.
   * @param filterString
   *            The updated field values' object for the component that needs to updated in the mappings in the state.
   *
   * @returns A `SOURCE_FILTERS_MAP_UPDATE` action for this instance with the following properties:
   * - payload.sourceComponentId {string} The id of the component for which mapping in the state needs to be updated.
   * - payload.value {string} The updated filter string generated by the component `payload.sourceComponentId`.
   */
  static updateSourceFiltersMapAction(id?: string | null, sourceComponentId: string, filterString?: string | null): UiSdlSourceFiltersMapUpdateAction | null;

  /**
   * Private function to generate a fetch filter expression from the payload field configs.
   * @example
   * If queryString = 'Redwood', and searchFields = ['streetName', 'city'],
   * then returns: `{ spec: { filter: Filter.contains('lowerCase(streetName)', 'redwood') || Filter.contains('lowerCase(city)', 'redwood') }}`.
   *
   * @param {Obj} payload
   *           The payload object, with configurations to construct the filter expression.
   * @param dataSourceFieldMaps
   *           {@link dataSourceFieldMaps}.
   * @param searchableFormattedColumnFields
   *           The array of {@link UiSdlDataGridDataSpec#columnFields}
   *
   * @return The filter expression to be merged in the fetch spec of a data source.
   */
  generateSearchFilter(payload?: Obj | null, dataSourceFieldMaps?: any | null, searchableFormattedColumnFields?: C3.Array<UiSdlDataGridDataSpecColumnFieldSetting | null>): Obj | null;

  /**
   * Private function to generate a search argument object from the payload field configs
   * for custom APIs, keep in mind that this replaces the `replaceArgument` of the data source with the
   * query string, and merges it back into the arguments of the data source.
   *
   * @param {Any} payload
   *           The action payload containing query string, and field configs.
   * @param dataSourceFieldMaps
   *           {@link dataSourceFieldMaps}.
   * @param replaceArgument
   *           {@link replaceArgument}.
   * @param searchableFormattedColumnFields
   *           The array of {@link UiSdlDataGridDataSpec#columnFields}
   *
   * @return The json to be merged into the arguments of the data source.
   */
  generateSearchArguments(payload?: Obj | null, dataSourceFieldMaps?: any | null, replaceArgument?: string | null, searchableFormattedColumnFields?: C3.Array<UiSdlDataGridDataSpecColumnFieldSetting | null>): any | null;

  /**
   * Listens for actions of type `SEARCH_VALUE_SET` and sets the search value in the state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static searchValueSetEffect(state: UiSdlReduxState, action: UiSdlSearchValueSetAction): UiSdlReduxState;

  /**
   * Listens for actions of type `SEARCH_CHANGE`, then updates the store with the new state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static searchChangeEffect(state: UiSdlReduxState, action: UiSdlSearchableSearchChangeAction): UiSdlReduxState;

  /**
   * Listens for actions of type `SEARCH_LOADING_SET`, then updates the store with the new state.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static searchLoadingSetReducer(state: UiSdlReduxState, action: UiSdlSearchableSearchLoadingSetAction): UiSdlReduxState;

  /**
   * Listens for actions of type `DATA_SOURCE_FIELD_MAP_SET`, then updates the store with the new {@link dataSourceFieldMaps} state value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static dataSourceFieldMapSetEffect(state: UiSdlReduxState, action: UiSdlDataSourceFieldMapSetAction): UiSdlReduxState;

  /**
   * Listens for actions of type `SOURCE_FILTERS_MAP_UPDATE`, then updates the value in the state
   * for the key corresponding to `payload.sourceComponentId` in the filter components' map.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static sourceFiltersMapUpdateEffect(state: UiSdlReduxState, action: UiSdlSourceFiltersMapUpdateAction): UiSdlReduxState;

  /**
   * Function that generates a combined filter from all the filters persisted in the state of the passed in componentId.
   *
   * @param componentId
   *          The id of the component for which the combined filter needs to be generated.
   * @param state
   *          Redux state.
   * @param sourceComponentId
   *          The id of the source component that has not yet been updated in the state. (Latest UI interaction).
   * @param filterString
   *          The filter string for the latest sourceComponent. This is the string that will be used over the value
   *          stored in the state for `sourceComponentId`, since that may not be up to date.
   *
   * @return The combined filter string to pass into the mergeArgumentsAction for the data source.
   */
  static generateCombinedFilter(componentId: string, state: UiSdlReduxState, sourceComponentId: string, filterString?: string | null): string | null;

  /**
   * Triggers `ARGUMENTS_MERGE`, `DATA_REQUEST` and `SOURCE_FILTERS_MAP_UPDATE` actions when a search input query changes.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static searchQueryChangeEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Triggers a `DATA_REQUEST` action when search dataSource needs to be loaded.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static searchDataSourceLoadEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Helper function to get the deleted, added, or edited data record IDs for a specific {@link UiSdlFormDataGrid}.
   *
   * @param state
   *           The Redux state.
   * @param dataLocation
   *           The type of data modifications requested.
   * @param componentId
   *           The component id of the form data grid.
   *
   * @return The list of modified (deleted, added, or edited) data record IDs.
   */
  static getDataModificationsFromState(state: UiSdlReduxState, dataLocation: string, componentId: string): C3.Array<string | null>;

  /**
   * Triggered when a row is added to the grid.
   *
   * @param id
   *           Id of the component.
   * @param row
   *           Information about the row that was added.
   *
   * @returns A `ROW_ADDED` action for this instance with the following properties:
   * - payload.row - {json} The row that was added.
   */
  static addedRowAction(id?: string | null, row?: any | null): UiSdlRowAddedAction | null;

  /**
   * Triggered when a row is deleted from the grid.
   *
   * @param id
   *           Id of the component.
   * @param row
   *           Information about the row that was deleted.  Will have the shape `{id: string}`.
   *
   * @returns A `ROW_DELETED` action for this instance with the following properties:
   * - payload.row - {json} The row that was deleted.
   */
  static deletedRowAction(id?: string | null, row?: any | null): UiSdlRowDeletedAction | null;

  /**
   * A function that will be called when an item in this grid is reordered.
   *
   * @param id
   *           Id of the component.
   * @param fromIndex
   *           The current index of the reordered item.
   * @param toIndex
   *           The target index of the reordered item. If the item is
   *           being moved to the end of the list, this will be the length of
   *           the list.
   *
   * @return An `ITEM_REORDER` action with the following payload properties:
   * - fromIndex {int} The index of the reordered item, before reordering.
   * - toIndex {int} The index of the reordered item, after reordering.
   */
  static reorderItemAction(id?: string | null, fromIndex: number, toIndex: number): UiSdlItemReorderAction;

  /**
   * Returns the current rows in the grid.
   *
   * @param state
   *           The Redux state.
   * @param componentId
   *           Id of the component.
   *
   * @return All the rows in the form grid.
   */
  static getCurrentRows(state?: UiSdlReduxState | null, componentId?: string | null): C3.Array<any | null>;

  /**
   * Triggers `DATA_RECEIVE` action when an item in this grid is reordered.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static itemReorderEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;
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
