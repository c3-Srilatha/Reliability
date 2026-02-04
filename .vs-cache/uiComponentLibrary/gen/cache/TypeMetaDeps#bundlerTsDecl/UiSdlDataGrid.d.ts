export interface UiSdlDataGrid {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataGrid;

  readonly dataSpec?: UiSdlDataGridDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDataGridDataSpec | null): UiSdlDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataGrid;

  readonly totalDataCount?: UiSdlDataGridTotalDataCountDataSpec | null;
  withTotalDataCount(totalDataCount: IUiSdlDataGridTotalDataCountDataSpec | null): UiSdlDataGrid;

  readonly dataCollectionCount?: number | null;
  withDataCollectionCount(dataCollectionCount: number | null): UiSdlDataGrid;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDataGrid;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlDataGrid;

  readonly detailComponentId?: string | null;
  withDetailComponentId(detailComponentId: string | null): UiSdlDataGrid;

  readonly detailComponentFilterable?: boolean;
  withDetailComponentFilterable(detailComponentFilterable: boolean): UiSdlDataGrid;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): UiSdlDataGrid;

  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiSdlDataGrid;

  readonly scrollbarAlwaysVisible?: boolean;
  withScrollbarAlwaysVisible(scrollbarAlwaysVisible: boolean): UiSdlDataGrid;

  readonly checkboxesShowSelectAllBanner?: boolean;
  withCheckboxesShowSelectAllBanner(checkboxesShowSelectAllBanner: boolean): UiSdlDataGrid;

  readonly rowStyle?: string | null;
  withRowStyle(rowStyle: string | null): UiSdlDataGrid;

  readonly zebraStripes?: boolean;
  withZebraStripes(zebraStripes: boolean): UiSdlDataGrid;

  readonly rowDensity?: string | null;
  withRowDensity(rowDensity: string | null): UiSdlDataGrid;

  readonly resizableColumns?: boolean;
  withResizableColumns(resizableColumns: boolean): UiSdlDataGrid;

  readonly reorderableColumns?: boolean;
  withReorderableColumns(reorderableColumns: boolean): UiSdlDataGrid;

  readonly removableRows?: boolean;
  withRemovableRows(removableRows: boolean): UiSdlDataGrid;

  readonly confirmBeforeRowDelete?: boolean;
  withConfirmBeforeRowDelete(confirmBeforeRowDelete: boolean): UiSdlDataGrid;

  readonly pendingRowDeletionId?: string | null | C3.Array<string | null> | null;
  withPendingRowDeletionId(pendingRowDeletionId: string | null | C3.Array<string | null> | Array<string | null> | null): UiSdlDataGrid;

  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlDataGrid;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlDataGrid;

  readonly sortColumn?: UiSdlDataGridSortColumn | null;
  withSortColumn(sortColumn: IUiSdlDataGridSortColumn | null): UiSdlDataGrid;

  readonly isEditing?: boolean;
  withIsEditing(isEditing: boolean): UiSdlDataGrid;

  readonly editItemId?: string | null;
  withEditItemId(editItemId: string | null): UiSdlDataGrid;

  readonly editItemField?: string | null;
  withEditItemField(editItemField: string | null): UiSdlDataGrid;

  readonly editChanges?: C3.Map<string | null, C3.Array<string | null>>;
  withEditChanges(editChanges: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlDataGrid;

  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlDataGrid;

  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlDataGrid;

  readonly tableActionsCollapseThreshold?: number | null;
  withTableActionsCollapseThreshold(tableActionsCollapseThreshold: number | null): UiSdlDataGrid;

  readonly tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withTableActions(tableActions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): UiSdlDataGrid;

  readonly multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null>;
  withMultipleRowActions(multipleRowActions: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>): UiSdlDataGrid;

  readonly insertableRows?: boolean;
  withInsertableRows(insertableRows: boolean): UiSdlDataGrid;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlDataGrid;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlDataGrid;

  readonly selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null>;
  withSelectedGridItems(selectedGridItems: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>): UiSdlDataGrid;

  readonly selectableRows?: boolean;
  withSelectableRows(selectableRows: boolean): UiSdlDataGrid;

  readonly selectableColumns?: boolean;
  withSelectableColumns(selectableColumns: boolean): UiSdlDataGrid;

  readonly showCheckboxActionButtons?: boolean;
  withShowCheckboxActionButtons(showCheckboxActionButtons: boolean): UiSdlDataGrid;

  readonly showRowActionsOnIdle?: boolean;
  withShowRowActionsOnIdle(showRowActionsOnIdle: boolean): UiSdlDataGrid;

  readonly checkboxPrimaryActionButtonText?: string | null;
  withCheckboxPrimaryActionButtonText(checkboxPrimaryActionButtonText: string | null): UiSdlDataGrid;

  readonly checkboxSecondaryActionButtonText?: string | null;
  withCheckboxSecondaryActionButtonText(checkboxSecondaryActionButtonText: string | null): UiSdlDataGrid;

  readonly showSaveCancelButton?: boolean;
  withShowSaveCancelButton(showSaveCancelButton: boolean): UiSdlDataGrid;

  readonly hideSaveCancelButtonOnEdit?: boolean;
  withHideSaveCancelButtonOnEdit(hideSaveCancelButtonOnEdit: boolean): UiSdlDataGrid;

  readonly saveChangesButtonText?: string | null;
  withSaveChangesButtonText(saveChangesButtonText: string | null): UiSdlDataGrid;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlDataGrid;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlDataGrid;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlDataGrid;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlDataGrid;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlDataGrid;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataGrid;

  readonly searchBarPlaceHolderText?: string | null;
  withSearchBarPlaceHolderText(searchBarPlaceHolderText: string | null): UiSdlDataGrid;

  readonly fuzzyCount?: boolean;
  withFuzzyCount(fuzzyCount: boolean): UiSdlDataGrid;

  readonly disableExportWarningModal?: boolean;
  withDisableExportWarningModal(disableExportWarningModal: boolean): UiSdlDataGrid;

  readonly paginationConfig?: UiSdlDataGridPaginationConfig | null;
  withPaginationConfig(paginationConfig: IUiSdlDataGridPaginationConfig | null): UiSdlDataGrid;

  readonly numberFormatSpec?: UiSdlNumberParamKindFormatSpec | null;
  withNumberFormatSpec(numberFormatSpec: IUiSdlNumberParamKindFormatSpec | null): UiSdlDataGrid;

  readonly fixedRows?: boolean;
  withFixedRows(fixedRows: boolean): UiSdlDataGrid;

  readonly defaultPageSize?: number | null;
  withDefaultPageSize(defaultPageSize: number | null): UiSdlDataGrid;

  readonly filterBar?: boolean;
  withFilterBar(filterBar: boolean): UiSdlDataGrid;

  readonly removableColumns?: boolean;
  withRemovableColumns(removableColumns: boolean): UiSdlDataGrid;

  readonly paginationDataSkipSize?: number | null;
  withPaginationDataSkipSize(paginationDataSkipSize: number | null): UiSdlDataGrid;

  readonly dataOffset?: number | null;
  withDataOffset(dataOffset: number | null): UiSdlDataGrid;

  readonly rowActionAlignment?: string | null;
  withRowActionAlignment(rowActionAlignment: string | null): UiSdlDataGrid;

  readonly fullWidthNestedComponent?: boolean;
  withFullWidthNestedComponent(fullWidthNestedComponent: boolean): UiSdlDataGrid;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlDataGrid;

  readonly exportWarningRecordThreshold?: number | null;
  withExportWarningRecordThreshold(exportWarningRecordThreshold: number | null): UiSdlDataGrid;

  readonly rowActionsCollapseThreshold?: number | null;
  withRowActionsCollapseThreshold(rowActionsCollapseThreshold: number | null): UiSdlDataGrid;

  readonly exportData?: UiSdlDataGridDataSpec | null;
  withExportData(exportData: IUiSdlDataGridDataSpec | null): UiSdlDataGrid;

  readonly customExport?: boolean;
  withCustomExport(customExport: boolean): UiSdlDataGrid;

  readonly headerMaxLinesWhenTruncated?: number | null;
  withHeaderMaxLinesWhenTruncated(headerMaxLinesWhenTruncated: number | null): UiSdlDataGrid;

  readonly maxLinesWhenTruncated?: number | null;
  withMaxLinesWhenTruncated(maxLinesWhenTruncated: number | null): UiSdlDataGrid;

  readonly exportDataCollection?: C3.Array<Obj | null>;
  withExportDataCollection(exportDataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDataGrid;

  readonly userHasAcknowledgedExportWarning?: boolean;
  withUserHasAcknowledgedExportWarning(userHasAcknowledgedExportWarning: boolean): UiSdlDataGrid;

  readonly columnsOrder?: C3.Map<string | null, number | null>;
  withColumnsOrder(columnsOrder: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): UiSdlDataGrid;

  readonly tableActionsAlwaysVisible?: boolean;
  withTableActionsAlwaysVisible(tableActionsAlwaysVisible: boolean): UiSdlDataGrid;
}

