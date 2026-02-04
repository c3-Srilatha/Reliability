export interface LukeTestUiSdlFormDataGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlFormDataGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlFormDataGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlFormDataGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlFormDataGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlFormDataGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUiSdlFormDataGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestUiSdlFormDataGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUiSdlFormDataGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlFormDataGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlFormDataGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestUiSdlFormDataGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestUiSdlFormDataGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestUiSdlFormDataGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestUiSdlFormDataGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestUiSdlFormDataGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestUiSdlFormDataGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestUiSdlFormDataGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestUiSdlFormDataGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestUiSdlFormDataGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestUiSdlFormDataGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestUiSdlFormDataGrid;

  readonly gridAddRowButton?: string | null;
  withGridAddRowButton(gridAddRowButton: string | null): LukeTestUiSdlFormDataGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestUiSdlFormDataGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestUiSdlFormDataGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestUiSdlFormDataGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestUiSdlFormDataGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestUiSdlFormDataGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestUiSdlFormDataGrid;
}

