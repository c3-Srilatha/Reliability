export interface UiSdlFormDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFormDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormDataGridReact;

  readonly dataSpec?: UiSdlFormDataGridDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormDataGridDataSpec | null): UiSdlFormDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormDataGridReact;

  readonly totalDataCount?: UiSdlDataGridTotalDataCountDataSpec | null;
  withTotalDataCount(totalDataCount: IUiSdlDataGridTotalDataCountDataSpec | null): UiSdlFormDataGridReact;

  readonly dataCollectionCount?: number | null;
  withDataCollectionCount(dataCollectionCount: number | null): UiSdlFormDataGridReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlFormDataGridReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlFormDataGridReact;

  readonly detailComponentId?: string | null;
  withDetailComponentId(detailComponentId: string | null): UiSdlFormDataGridReact;

  readonly detailComponentFilterable?: boolean;
  withDetailComponentFilterable(detailComponentFilterable: boolean): UiSdlFormDataGridReact;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): UiSdlFormDataGridReact;

  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiSdlFormDataGridReact;

  readonly scrollbarAlwaysVisible?: boolean;
  withScrollbarAlwaysVisible(scrollbarAlwaysVisible: boolean): UiSdlFormDataGridReact;

  readonly checkboxesShowSelectAllBanner?: boolean;
  withCheckboxesShowSelectAllBanner(checkboxesShowSelectAllBanner: boolean): UiSdlFormDataGridReact;

  readonly rowStyle?: string | null;
  withRowStyle(rowStyle: string | null): UiSdlFormDataGridReact;

  readonly zebraStripes?: boolean;
  withZebraStripes(zebraStripes: boolean): UiSdlFormDataGridReact;

  readonly rowDensity?: string | null;
  withRowDensity(rowDensity: string | null): UiSdlFormDataGridReact;

  readonly resizableColumns?: boolean;
  withResizableColumns(resizableColumns: boolean): UiSdlFormDataGridReact;

  readonly reorderableColumns?: boolean;
  withReorderableColumns(reorderableColumns: boolean): UiSdlFormDataGridReact;

  readonly removableRows?: boolean;
  withRemovableRows(removableRows: boolean): UiSdlFormDataGridReact;

  readonly confirmBeforeRowDelete?: boolean;
  withConfirmBeforeRowDelete(confirmBeforeRowDelete: boolean): UiSdlFormDataGridReact;

  readonly pendingRowDeletionId?: string | null | C3.Array<string | null> | null;
  withPendingRowDeletionId(pendingRowDeletionId: string | null | C3.Array<string | null> | Array<string | null> | null): UiSdlFormDataGridReact;

  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlFormDataGridReact;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlFormDataGridReact;

  readonly sortColumn?: UiSdlDataGridSortColumn | null;
  withSortColumn(sortColumn: IUiSdlDataGridSortColumn | null): UiSdlFormDataGridReact;

  readonly isEditing?: boolean;
  withIsEditing(isEditing: boolean): UiSdlFormDataGridReact;

  readonly editItemId?: string | null;
  withEditItemId(editItemId: string | null): UiSdlFormDataGridReact;

  readonly editItemField?: string | null;
  withEditItemField(editItemField: string | null): UiSdlFormDataGridReact;

  readonly editChanges?: C3.Map<string | null, C3.Array<string | null>>;
  withEditChanges(editChanges: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlFormDataGridReact;

  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlFormDataGridReact;

  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlFormDataGridReact;

  readonly tableActionsCollapseThreshold?: number | null;
  withTableActionsCollapseThreshold(tableActionsCollapseThreshold: number | null): UiSdlFormDataGridReact;

  readonly tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withTableActions(tableActions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): UiSdlFormDataGridReact;

  readonly multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null>;
  withMultipleRowActions(multipleRowActions: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>): UiSdlFormDataGridReact;

  readonly insertableRows?: boolean;
  withInsertableRows(insertableRows: boolean): UiSdlFormDataGridReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlFormDataGridReact;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlFormDataGridReact;

  readonly selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null>;
  withSelectedGridItems(selectedGridItems: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>): UiSdlFormDataGridReact;

  readonly selectableRows?: boolean;
  withSelectableRows(selectableRows: boolean): UiSdlFormDataGridReact;

  readonly selectableColumns?: boolean;
  withSelectableColumns(selectableColumns: boolean): UiSdlFormDataGridReact;

  readonly showCheckboxActionButtons?: boolean;
  withShowCheckboxActionButtons(showCheckboxActionButtons: boolean): UiSdlFormDataGridReact;

  readonly showRowActionsOnIdle?: boolean;
  withShowRowActionsOnIdle(showRowActionsOnIdle: boolean): UiSdlFormDataGridReact;

  readonly checkboxPrimaryActionButtonText?: string | null;
  withCheckboxPrimaryActionButtonText(checkboxPrimaryActionButtonText: string | null): UiSdlFormDataGridReact;

  readonly checkboxSecondaryActionButtonText?: string | null;
  withCheckboxSecondaryActionButtonText(checkboxSecondaryActionButtonText: string | null): UiSdlFormDataGridReact;

  readonly showSaveCancelButton?: boolean;
  withShowSaveCancelButton(showSaveCancelButton: boolean): UiSdlFormDataGridReact;

  readonly hideSaveCancelButtonOnEdit?: boolean;
  withHideSaveCancelButtonOnEdit(hideSaveCancelButtonOnEdit: boolean): UiSdlFormDataGridReact;

  readonly saveChangesButtonText?: string | null;
  withSaveChangesButtonText(saveChangesButtonText: string | null): UiSdlFormDataGridReact;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlFormDataGridReact;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlFormDataGridReact;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlFormDataGridReact;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlFormDataGridReact;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlFormDataGridReact;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFormDataGridReact;

  readonly searchBarPlaceHolderText?: string | null;
  withSearchBarPlaceHolderText(searchBarPlaceHolderText: string | null): UiSdlFormDataGridReact;

  readonly filterBar?: boolean;
  withFilterBar(filterBar: boolean): UiSdlFormDataGridReact;

  readonly insertLocation?: string | null;
  withInsertLocation(insertLocation: string | null): UiSdlFormDataGridReact;
}

