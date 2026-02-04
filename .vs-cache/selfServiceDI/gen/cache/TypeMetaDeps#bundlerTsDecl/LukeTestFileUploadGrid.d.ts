export interface LukeTestFileUploadGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestFileUploadGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestFileUploadGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestFileUploadGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestFileUploadGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestFileUploadGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestFileUploadGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestFileUploadGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestFileUploadGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestFileUploadGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestFileUploadGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestFileUploadGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestFileUploadGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestFileUploadGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestFileUploadGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestFileUploadGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestFileUploadGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestFileUploadGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestFileUploadGrid;

  readonly rowActionsDropDownSelector?: string | null;
  withRowActionsDropDownSelector(rowActionsDropDownSelector: string | null): LukeTestFileUploadGrid;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestFileUploadGrid;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestFileUploadGrid;

  readonly gridActionBarWithSaveCancelButtonsSelector?: string | null;
  withGridActionBarWithSaveCancelButtonsSelector(gridActionBarWithSaveCancelButtonsSelector: string | null): LukeTestFileUploadGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestFileUploadGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestFileUploadGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestFileUploadGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestFileUploadGrid;

  readonly gridCellActionButton?: string | null;
  withGridCellActionButton(gridCellActionButton: string | null): LukeTestFileUploadGrid;

  readonly gridCellHyperlink?: string | null;
  withGridCellHyperlink(gridCellHyperlink: string | null): LukeTestFileUploadGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestFileUploadGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestFileUploadGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestFileUploadGrid;

  readonly tableActionBar?: string | null;
  withTableActionBar(tableActionBar: string | null): LukeTestFileUploadGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestFileUploadGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestFileUploadGrid;

  readonly fileNameLinkSelector?: string | null;
  withFileNameLinkSelector(fileNameLinkSelector: string | null): LukeTestFileUploadGrid;

  readonly deleteFileSelector?: string | null;
  withDeleteFileSelector(deleteFileSelector: string | null): LukeTestFileUploadGrid;
}

