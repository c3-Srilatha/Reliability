export interface LukeTestUiSdlBaseDataGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlBaseDataGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlBaseDataGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlBaseDataGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlBaseDataGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlBaseDataGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUiSdlBaseDataGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestUiSdlBaseDataGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUiSdlBaseDataGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlBaseDataGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlBaseDataGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestUiSdlBaseDataGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestUiSdlBaseDataGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestUiSdlBaseDataGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestUiSdlBaseDataGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestUiSdlBaseDataGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestUiSdlBaseDataGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestUiSdlBaseDataGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestUiSdlBaseDataGrid;
}

