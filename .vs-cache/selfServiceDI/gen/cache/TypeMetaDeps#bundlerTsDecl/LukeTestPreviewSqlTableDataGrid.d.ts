export interface LukeTestPreviewSqlTableDataGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestPreviewSqlTableDataGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestPreviewSqlTableDataGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestPreviewSqlTableDataGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly rowActionsDropDownSelector?: string | null;
  withRowActionsDropDownSelector(rowActionsDropDownSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridActionBarWithSaveCancelButtonsSelector?: string | null;
  withGridActionBarWithSaveCancelButtonsSelector(gridActionBarWithSaveCancelButtonsSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridCellActionButton?: string | null;
  withGridCellActionButton(gridCellActionButton: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridCellHyperlink?: string | null;
  withGridCellHyperlink(gridCellHyperlink: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly tableActionBar?: string | null;
  withTableActionBar(tableActionBar: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestPreviewSqlTableDataGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestPreviewSqlTableDataGrid;
}

