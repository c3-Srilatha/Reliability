export interface LukeTestExternalSourceDetailsCheckboxGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly rowActionsDropDownSelector?: string | null;
  withRowActionsDropDownSelector(rowActionsDropDownSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridActionBarWithSaveCancelButtonsSelector?: string | null;
  withGridActionBarWithSaveCancelButtonsSelector(gridActionBarWithSaveCancelButtonsSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridCellActionButton?: string | null;
  withGridCellActionButton(gridCellActionButton: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridCellHyperlink?: string | null;
  withGridCellHyperlink(gridCellHyperlink: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly tableActionBar?: string | null;
  withTableActionBar(tableActionBar: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestExternalSourceDetailsCheckboxGrid;
}

