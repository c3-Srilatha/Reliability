export interface UiSdlBaseDataGrid<DataType> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlBaseDataGrid;

  readonly id?: string | null;
  withId(id: string | null): UiSdlBaseDataGrid;

  readonly name?: string | null;
  withName(name: string | null): UiSdlBaseDataGrid;

  readonly dataSpec?: DataType | null;
  withDataSpec(dataSpec: DataType | null): UiSdlBaseDataGrid;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlBaseDataGrid;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlBaseDataGrid;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlBaseDataGrid;

  readonly totalDataCount?: UiSdlDataGridTotalDataCountDataSpec | null;
  withTotalDataCount(totalDataCount: IUiSdlDataGridTotalDataCountDataSpec | null): UiSdlBaseDataGrid;

  readonly dataCollectionCount?: number | null;
  withDataCollectionCount(dataCollectionCount: number | null): UiSdlBaseDataGrid;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlBaseDataGrid;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlBaseDataGrid;

  readonly detailComponentId?: string | null;
  withDetailComponentId(detailComponentId: string | null): UiSdlBaseDataGrid;

  readonly detailComponentFilterable?: boolean;
  withDetailComponentFilterable(detailComponentFilterable: boolean): UiSdlBaseDataGrid;

  readonly expandedItems?: any | null;
  withExpandedItems(expandedItems: any | null): UiSdlBaseDataGrid;

  readonly checkboxes?: boolean;
  withCheckboxes(checkboxes: boolean): UiSdlBaseDataGrid;

  readonly scrollbarAlwaysVisible?: boolean;
  withScrollbarAlwaysVisible(scrollbarAlwaysVisible: boolean): UiSdlBaseDataGrid;

  readonly checkboxesShowSelectAllBanner?: boolean;
  withCheckboxesShowSelectAllBanner(checkboxesShowSelectAllBanner: boolean): UiSdlBaseDataGrid;

  readonly rowStyle?: string | null;
  withRowStyle(rowStyle: string | null): UiSdlBaseDataGrid;

  readonly zebraStripes?: boolean;
  withZebraStripes(zebraStripes: boolean): UiSdlBaseDataGrid;

  readonly rowDensity?: string | null;
  withRowDensity(rowDensity: string | null): UiSdlBaseDataGrid;

  readonly resizableColumns?: boolean;
  withResizableColumns(resizableColumns: boolean): UiSdlBaseDataGrid;

  readonly reorderableColumns?: boolean;
  withReorderableColumns(reorderableColumns: boolean): UiSdlBaseDataGrid;

  readonly removableRows?: boolean;
  withRemovableRows(removableRows: boolean): UiSdlBaseDataGrid;

  readonly confirmBeforeRowDelete?: boolean;
  withConfirmBeforeRowDelete(confirmBeforeRowDelete: boolean): UiSdlBaseDataGrid;

  readonly pendingRowDeletionId?: string | null | C3.Array<string | null> | null;
  withPendingRowDeletionId(pendingRowDeletionId: string | null | C3.Array<string | null> | Array<string | null> | null): UiSdlBaseDataGrid;

  readonly selectedItemIds?: C3.Array<string | null>;
  withSelectedItemIds(selectedItemIds: C3.Array<string | null> | Array<string | null>): UiSdlBaseDataGrid;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlBaseDataGrid;

  readonly sortColumn?: UiSdlDataGridSortColumn | null;
  withSortColumn(sortColumn: IUiSdlDataGridSortColumn | null): UiSdlBaseDataGrid;

  readonly isEditing?: boolean;
  withIsEditing(isEditing: boolean): UiSdlBaseDataGrid;

  readonly editItemId?: string | null;
  withEditItemId(editItemId: string | null): UiSdlBaseDataGrid;

  readonly editItemField?: string | null;
  withEditItemField(editItemField: string | null): UiSdlBaseDataGrid;

  readonly editChanges?: C3.Map<string | null, C3.Array<string | null>>;
  withEditChanges(editChanges: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlBaseDataGrid;

  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlBaseDataGrid;

  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlBaseDataGrid;

  readonly tableActionsCollapseThreshold?: number | null;
  withTableActionsCollapseThreshold(tableActionsCollapseThreshold: number | null): UiSdlBaseDataGrid;

  readonly tableActions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withTableActions(tableActions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): UiSdlBaseDataGrid;

  readonly multipleRowActions?: C3.Array<UiSdlDataGridMultipleRowAction | null>;
  withMultipleRowActions(multipleRowActions: C3.Array<UiSdlDataGridMultipleRowAction | null> | Array<IUiSdlDataGridMultipleRowAction | null>): UiSdlBaseDataGrid;

  readonly insertableRows?: boolean;
  withInsertableRows(insertableRows: boolean): UiSdlBaseDataGrid;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlBaseDataGrid;

  readonly sidePanel?: UiSdlAlignedComponentRef<UiSdlSidePanel | null> | null;
  withSidePanel(sidePanel: IUiSdlAlignedComponentRef<UiSdlSidePanel | null> | null): UiSdlBaseDataGrid;

  readonly selectedGridItems?: C3.Array<UiSdlSelectedGridItemConfig | null>;
  withSelectedGridItems(selectedGridItems: C3.Array<UiSdlSelectedGridItemConfig | null> | Array<IUiSdlSelectedGridItemConfig | null>): UiSdlBaseDataGrid;

  readonly selectableRows?: boolean;
  withSelectableRows(selectableRows: boolean): UiSdlBaseDataGrid;

  readonly selectableColumns?: boolean;
  withSelectableColumns(selectableColumns: boolean): UiSdlBaseDataGrid;

  readonly showCheckboxActionButtons?: boolean;
  withShowCheckboxActionButtons(showCheckboxActionButtons: boolean): UiSdlBaseDataGrid;

  readonly showRowActionsOnIdle?: boolean;
  withShowRowActionsOnIdle(showRowActionsOnIdle: boolean): UiSdlBaseDataGrid;

  readonly checkboxPrimaryActionButtonText?: string | null;
  withCheckboxPrimaryActionButtonText(checkboxPrimaryActionButtonText: string | null): UiSdlBaseDataGrid;

  readonly checkboxSecondaryActionButtonText?: string | null;
  withCheckboxSecondaryActionButtonText(checkboxSecondaryActionButtonText: string | null): UiSdlBaseDataGrid;

  readonly showSaveCancelButton?: boolean;
  withShowSaveCancelButton(showSaveCancelButton: boolean): UiSdlBaseDataGrid;

  readonly hideSaveCancelButtonOnEdit?: boolean;
  withHideSaveCancelButtonOnEdit(hideSaveCancelButtonOnEdit: boolean): UiSdlBaseDataGrid;

  readonly saveChangesButtonText?: string | null;
  withSaveChangesButtonText(saveChangesButtonText: string | null): UiSdlBaseDataGrid;
}

