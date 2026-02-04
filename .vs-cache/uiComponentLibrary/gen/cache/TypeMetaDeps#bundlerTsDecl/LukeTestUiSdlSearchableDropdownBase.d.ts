export interface LukeTestUiSdlSearchableDropdownBase {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlSearchableDropdownBase;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlSearchableDropdownBase;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlSearchableDropdownBase;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlSearchableDropdownBase;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlSearchableDropdownBase;

  readonly noResultsMessageSelector?: string | null;
  withNoResultsMessageSelector(noResultsMessageSelector: string | null): LukeTestUiSdlSearchableDropdownBase;
}

