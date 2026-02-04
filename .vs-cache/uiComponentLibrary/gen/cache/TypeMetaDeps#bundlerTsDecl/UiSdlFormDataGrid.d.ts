export interface UiSdlFormDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFormDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormDataGrid;

  readonly dataSpec?: UiSdlFormDataGridDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormDataGridDataSpec | null): UiSdlFormDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormDataGrid;

  readonly totalDataCount?: UiSdlDataGridTotalDataCountDataSpec | null;
  withTotalDataCount(totalDataCount: IUiSdlDataGridTotalDataCountDataSpec | null): UiSdlFormDataGrid;

  readonly dataCollectionCount?: number | null;
  withDataCollectionCount(dataCollectionCount: number | null): UiSdlFormDataGrid;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlFormDataGrid;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlFormDataGrid;

  readonly detailComponentId?: string | null;
  withDetailComponentId(detailComponentId: string | null): UiSdlFormDataGrid;

  readonly detailComponentFilterable?: boolean;
  withDetailComponentFilterable(detailComponentFilterable: boolean): UiSdlFormDataGrid;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): UiSdlFormDataGrid;

  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiSdlFormDataGrid;

  readonly scrollbarAlwaysVisible?: boolean;
  withScrollbarAlwaysVisible(scrollbarAlwaysVisible: boolean): UiSdlFormDataGrid;

  readonly checkboxesShowSelectAllBanner?: boolean;
  withCheckboxesShowSelectAllBanner(checkboxesShowSelectAllBanner: boolean): UiSdlFormDataGrid;

  readonly rowStyle?: string | null;
  withRowStyle(rowStyle: string | null): UiSdlFormDataGrid;

  readonly zebraStripes?: boolean;
  withZebraStripes(zebraStripes: boolean): UiSdlFormDataGrid;

  readonly rowDensity?: string | null;
  withRowDensity(rowDensity: string | null): UiSdlFormDataGrid;

  readonly resizableColumns?: boolean;
  withResizableColumns(resizableColumns: boolean): UiSdlFormDataGrid;

  readonly reorderableColumns?: boolean;
  withReorderableColumns(reorderableColumns: boolean): UiSdlFormDataGrid;

  readonly removableRows?: boolean;
  withRemovableRows(removableRows: boolean): UiSdlFormDataGrid;

  readonly confirmBeforeRowDelete?: boolean;
  withConfirmBeforeRowDelete(confirmBeforeRowDelete: boolean): UiSdlFormDataGrid;

  readonly pendingRowDeletionId?: string | null | C3.Array<string | null> | null;
  withPendingRowDeletionId(pendingRowDeletionId: string | null | C3.Array<string | null> | Array<string | null> | null): UiSdlFormDataGrid;

  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlFormDataGrid;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlFormDataGrid;

  readonly sortColumn?: UiSdlDataGridSortColumn | null;
  withSortColumn(sortColumn: IUiSdlDataGridSortColumn | null): UiSdlFormDataGrid;

  readonly isEditing?: boolean;
  withIsEditing(isEditing: boolean): UiSdlFormDataGrid;

  readonly editItemId?: string | null;
  withEditItemId(editItemId: string | null): UiSdlFormDataGrid;

  readonly editItemField?: string | null;
  withEditItemField(editItemField: string | null): UiSdlFormDataGrid;

  readonly editChanges?: C3.Map<string | null, C3.Array<string | null>>;
  withEditChanges(editChanges: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlFormDataGrid;

  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlFormDataGrid;

  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlFormDataGrid;

  readonly tableActionsCollapseThreshold?: number | null;
  withTableActionsCollapseThreshold(tableActionsCollapseThreshold: number | null): UiSdlFormDataGrid;

  readonly tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withTableActions(tableActions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): UiSdlFormDataGrid;

  readonly multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null>;
  withMultipleRowActions(multipleRowActions: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>): UiSdlFormDataGrid;

  readonly insertableRows?: boolean;
  withInsertableRows(insertableRows: boolean): UiSdlFormDataGrid;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlFormDataGrid;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlFormDataGrid;

  readonly selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null>;
  withSelectedGridItems(selectedGridItems: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>): UiSdlFormDataGrid;

  readonly selectableRows?: boolean;
  withSelectableRows(selectableRows: boolean): UiSdlFormDataGrid;

  readonly selectableColumns?: boolean;
  withSelectableColumns(selectableColumns: boolean): UiSdlFormDataGrid;

  readonly showCheckboxActionButtons?: boolean;
  withShowCheckboxActionButtons(showCheckboxActionButtons: boolean): UiSdlFormDataGrid;

  readonly showRowActionsOnIdle?: boolean;
  withShowRowActionsOnIdle(showRowActionsOnIdle: boolean): UiSdlFormDataGrid;

  readonly checkboxPrimaryActionButtonText?: string | null;
  withCheckboxPrimaryActionButtonText(checkboxPrimaryActionButtonText: string | null): UiSdlFormDataGrid;

  readonly checkboxSecondaryActionButtonText?: string | null;
  withCheckboxSecondaryActionButtonText(checkboxSecondaryActionButtonText: string | null): UiSdlFormDataGrid;

  readonly showSaveCancelButton?: boolean;
  withShowSaveCancelButton(showSaveCancelButton: boolean): UiSdlFormDataGrid;

  readonly hideSaveCancelButtonOnEdit?: boolean;
  withHideSaveCancelButtonOnEdit(hideSaveCancelButtonOnEdit: boolean): UiSdlFormDataGrid;

  readonly saveChangesButtonText?: string | null;
  withSaveChangesButtonText(saveChangesButtonText: string | null): UiSdlFormDataGrid;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlFormDataGrid;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlFormDataGrid;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlFormDataGrid;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlFormDataGrid;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlFormDataGrid;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFormDataGrid;

  readonly searchBarPlaceHolderText?: string | null;
  withSearchBarPlaceHolderText(searchBarPlaceHolderText: string | null): UiSdlFormDataGrid;

  readonly filterBar?: boolean;
  withFilterBar(filterBar: boolean): UiSdlFormDataGrid;

  readonly insertLocation?: string | null;
  withInsertLocation(insertLocation: string | null): UiSdlFormDataGrid;
}

