export interface LukeTestTimeRangeCell {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestTimeRangeCell;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestTimeRangeCell;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestTimeRangeCell;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestTimeRangeCell;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestTimeRangeCell;

  readonly selectFieldSubTitleSelector?: string | null;
  withSelectFieldSubTitleSelector(selectFieldSubTitleSelector: string | null): LukeTestTimeRangeCell;

  readonly dateRangeSubTitleSelector?: string | null;
  withDateRangeSubTitleSelector(dateRangeSubTitleSelector: string | null): LukeTestTimeRangeCell;

  readonly disabledDateRangeSelector?: string | null;
  withDisabledDateRangeSelector(disabledDateRangeSelector: string | null): LukeTestTimeRangeCell;

  readonly dropdown?: LukeTestUiSdlSelectInput | null;
  withDropdown(dropdown: ILukeTestUiSdlSelectInput | null): LukeTestTimeRangeCell;

  readonly dateRange?: LukeTestUiSdlDateTimeRangeInput | null;
  withDateRange(dateRange: ILukeTestUiSdlDateTimeRangeInput | null): LukeTestTimeRangeCell;
}

