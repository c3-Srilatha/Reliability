export interface LukeTestUiSdlGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUiSdlGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestUiSdlGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUiSdlGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestUiSdlGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestUiSdlGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestUiSdlGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestUiSdlGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestUiSdlGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestUiSdlGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestUiSdlGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestUiSdlGrid;

  readonly rowActionsDropDownSelector?: string | null;
  withRowActionsDropDownSelector(rowActionsDropDownSelector: string | null): LukeTestUiSdlGrid;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestUiSdlGrid;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestUiSdlGrid;

  readonly gridActionBarWithSaveCancelButtonsSelector?: string | null;
  withGridActionBarWithSaveCancelButtonsSelector(gridActionBarWithSaveCancelButtonsSelector: string | null): LukeTestUiSdlGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestUiSdlGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestUiSdlGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestUiSdlGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestUiSdlGrid;

  readonly gridCellActionButton?: string | null;
  withGridCellActionButton(gridCellActionButton: string | null): LukeTestUiSdlGrid;

  readonly gridCellHyperlink?: string | null;
  withGridCellHyperlink(gridCellHyperlink: string | null): LukeTestUiSdlGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestUiSdlGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestUiSdlGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestUiSdlGrid;

  readonly tableActionBar?: string | null;
  withTableActionBar(tableActionBar: string | null): LukeTestUiSdlGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestUiSdlGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestUiSdlGrid;
}

