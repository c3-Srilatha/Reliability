export interface LukeTestExternalSourceDetailsGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestExternalSourceDetailsGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestExternalSourceDetailsGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestExternalSourceDetailsGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestExternalSourceDetailsGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestExternalSourceDetailsGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestExternalSourceDetailsGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestExternalSourceDetailsGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestExternalSourceDetailsGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestExternalSourceDetailsGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestExternalSourceDetailsGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestExternalSourceDetailsGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestExternalSourceDetailsGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestExternalSourceDetailsGrid;

  readonly rowActionsDropDownSelector?: string | null;
  withRowActionsDropDownSelector(rowActionsDropDownSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridActionBarWithSaveCancelButtonsSelector?: string | null;
  withGridActionBarWithSaveCancelButtonsSelector(gridActionBarWithSaveCancelButtonsSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridCellActionButton?: string | null;
  withGridCellActionButton(gridCellActionButton: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridCellHyperlink?: string | null;
  withGridCellHyperlink(gridCellHyperlink: string | null): LukeTestExternalSourceDetailsGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestExternalSourceDetailsGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestExternalSourceDetailsGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestExternalSourceDetailsGrid;

  readonly tableActionBar?: string | null;
  withTableActionBar(tableActionBar: string | null): LukeTestExternalSourceDetailsGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestExternalSourceDetailsGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestExternalSourceDetailsGrid;
}

