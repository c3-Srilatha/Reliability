export interface UiSdlDataGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataGridReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataGridReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataGridReact;

  readonly dataSpec?: UiSdlDataGridDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDataGridDataSpec | null): UiSdlDataGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataGridReact;

  readonly totalDataCount?: UiSdlDataGridTotalDataCountDataSpec | null;
  withTotalDataCount(totalDataCount: IUiSdlDataGridTotalDataCountDataSpec | null): UiSdlDataGridReact;

  readonly dataCollectionCount?: number | null;
  withDataCollectionCount(dataCollectionCount: number | null): UiSdlDataGridReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDataGridReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlDataGridReact;

  readonly detailComponentId?: string | null;
  withDetailComponentId(detailComponentId: string | null): UiSdlDataGridReact;

  readonly detailComponentFilterable?: boolean;
  withDetailComponentFilterable(detailComponentFilterable: boolean): UiSdlDataGridReact;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): UiSdlDataGridReact;

  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiSdlDataGridReact;

  readonly scrollbarAlwaysVisible?: boolean;
  withScrollbarAlwaysVisible(scrollbarAlwaysVisible: boolean): UiSdlDataGridReact;

  readonly checkboxesShowSelectAllBanner?: boolean;
  withCheckboxesShowSelectAllBanner(checkboxesShowSelectAllBanner: boolean): UiSdlDataGridReact;

  readonly rowStyle?: string | null;
  withRowStyle(rowStyle: string | null): UiSdlDataGridReact;

  readonly zebraStripes?: boolean;
  withZebraStripes(zebraStripes: boolean): UiSdlDataGridReact;

  readonly rowDensity?: string | null;
  withRowDensity(rowDensity: string | null): UiSdlDataGridReact;

  readonly resizableColumns?: boolean;
  withResizableColumns(resizableColumns: boolean): UiSdlDataGridReact;

  readonly reorderableColumns?: boolean;
  withReorderableColumns(reorderableColumns: boolean): UiSdlDataGridReact;

  readonly removableRows?: boolean;
  withRemovableRows(removableRows: boolean): UiSdlDataGridReact;

  readonly confirmBeforeRowDelete?: boolean;
  withConfirmBeforeRowDelete(confirmBeforeRowDelete: boolean): UiSdlDataGridReact;

  readonly pendingRowDeletionId?: string | null | C3.Array<string | null> | null;
  withPendingRowDeletionId(pendingRowDeletionId: string | null | C3.Array<string | null> | Array<string | null> | null): UiSdlDataGridReact;

  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlDataGridReact;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlDataGridReact;

  readonly sortColumn?: UiSdlDataGridSortColumn | null;
  withSortColumn(sortColumn: IUiSdlDataGridSortColumn | null): UiSdlDataGridReact;

  readonly isEditing?: boolean;
  withIsEditing(isEditing: boolean): UiSdlDataGridReact;

  readonly editItemId?: string | null;
  withEditItemId(editItemId: string | null): UiSdlDataGridReact;

  readonly editItemField?: string | null;
  withEditItemField(editItemField: string | null): UiSdlDataGridReact;

  readonly editChanges?: C3.Map<string | null, C3.Array<string | null>>;
  withEditChanges(editChanges: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlDataGridReact;

  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlDataGridReact;

  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlDataGridReact;

  readonly tableActionsCollapseThreshold?: number | null;
  withTableActionsCollapseThreshold(tableActionsCollapseThreshold: number | null): UiSdlDataGridReact;

  readonly tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withTableActions(tableActions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): UiSdlDataGridReact;

  readonly multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null>;
  withMultipleRowActions(multipleRowActions: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>): UiSdlDataGridReact;

  readonly insertableRows?: boolean;
  withInsertableRows(insertableRows: boolean): UiSdlDataGridReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlDataGridReact;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlDataGridReact;

  readonly selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null>;
  withSelectedGridItems(selectedGridItems: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>): UiSdlDataGridReact;

  readonly selectableRows?: boolean;
  withSelectableRows(selectableRows: boolean): UiSdlDataGridReact;

  readonly selectableColumns?: boolean;
  withSelectableColumns(selectableColumns: boolean): UiSdlDataGridReact;

  readonly showCheckboxActionButtons?: boolean;
  withShowCheckboxActionButtons(showCheckboxActionButtons: boolean): UiSdlDataGridReact;

  readonly showRowActionsOnIdle?: boolean;
  withShowRowActionsOnIdle(showRowActionsOnIdle: boolean): UiSdlDataGridReact;

  readonly checkboxPrimaryActionButtonText?: string | null;
  withCheckboxPrimaryActionButtonText(checkboxPrimaryActionButtonText: string | null): UiSdlDataGridReact;

  readonly checkboxSecondaryActionButtonText?: string | null;
  withCheckboxSecondaryActionButtonText(checkboxSecondaryActionButtonText: string | null): UiSdlDataGridReact;

  readonly showSaveCancelButton?: boolean;
  withShowSaveCancelButton(showSaveCancelButton: boolean): UiSdlDataGridReact;

  readonly hideSaveCancelButtonOnEdit?: boolean;
  withHideSaveCancelButtonOnEdit(hideSaveCancelButtonOnEdit: boolean): UiSdlDataGridReact;

  readonly saveChangesButtonText?: string | null;
  withSaveChangesButtonText(saveChangesButtonText: string | null): UiSdlDataGridReact;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlDataGridReact;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlDataGridReact;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlDataGridReact;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlDataGridReact;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlDataGridReact;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataGridReact;

  readonly searchBarPlaceHolderText?: string | null;
  withSearchBarPlaceHolderText(searchBarPlaceHolderText: string | null): UiSdlDataGridReact;

  readonly fuzzyCount?: boolean;
  withFuzzyCount(fuzzyCount: boolean): UiSdlDataGridReact;

  readonly disableExportWarningModal?: boolean;
  withDisableExportWarningModal(disableExportWarningModal: boolean): UiSdlDataGridReact;

  readonly paginationConfig?: UiSdlDataGridPaginationConfig | null;
  withPaginationConfig(paginationConfig: IUiSdlDataGridPaginationConfig | null): UiSdlDataGridReact;

  readonly numberFormatSpec?: UiSdlNumberParamKindFormatSpec | null;
  withNumberFormatSpec(numberFormatSpec: IUiSdlNumberParamKindFormatSpec | null): UiSdlDataGridReact;

  readonly fixedRows?: boolean;
  withFixedRows(fixedRows: boolean): UiSdlDataGridReact;

  readonly defaultPageSize?: number | null;
  withDefaultPageSize(defaultPageSize: number | null): UiSdlDataGridReact;

  readonly filterBar?: boolean;
  withFilterBar(filterBar: boolean): UiSdlDataGridReact;

  readonly removableColumns?: boolean;
  withRemovableColumns(removableColumns: boolean): UiSdlDataGridReact;

  readonly paginationDataSkipSize?: number | null;
  withPaginationDataSkipSize(paginationDataSkipSize: number | null): UiSdlDataGridReact;

  readonly dataOffset?: number | null;
  withDataOffset(dataOffset: number | null): UiSdlDataGridReact;

  readonly rowActionAlignment?: string | null;
  withRowActionAlignment(rowActionAlignment: string | null): UiSdlDataGridReact;

  readonly fullWidthNestedComponent?: boolean;
  withFullWidthNestedComponent(fullWidthNestedComponent: boolean): UiSdlDataGridReact;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlDataGridReact;

  readonly exportWarningRecordThreshold?: number | null;
  withExportWarningRecordThreshold(exportWarningRecordThreshold: number | null): UiSdlDataGridReact;

  readonly rowActionsCollapseThreshold?: number | null;
  withRowActionsCollapseThreshold(rowActionsCollapseThreshold: number | null): UiSdlDataGridReact;

  readonly exportData?: UiSdlDataGridDataSpec | null;
  withExportData(exportData: IUiSdlDataGridDataSpec | null): UiSdlDataGridReact;

  readonly customExport?: boolean;
  withCustomExport(customExport: boolean): UiSdlDataGridReact;

  readonly headerMaxLinesWhenTruncated?: number | null;
  withHeaderMaxLinesWhenTruncated(headerMaxLinesWhenTruncated: number | null): UiSdlDataGridReact;

  readonly maxLinesWhenTruncated?: number | null;
  withMaxLinesWhenTruncated(maxLinesWhenTruncated: number | null): UiSdlDataGridReact;

  readonly exportDataCollection?: C3.Array<Obj | null>;
  withExportDataCollection(exportDataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlDataGridReact;

  readonly userHasAcknowledgedExportWarning?: boolean;
  withUserHasAcknowledgedExportWarning(userHasAcknowledgedExportWarning: boolean): UiSdlDataGridReact;

  readonly columnsOrder?: C3.Map<string | null, number | null>;
  withColumnsOrder(columnsOrder: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): UiSdlDataGridReact;

  readonly tableActionsAlwaysVisible?: boolean;
  withTableActionsAlwaysVisible(tableActionsAlwaysVisible: boolean): UiSdlDataGridReact;
}

