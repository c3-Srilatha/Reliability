export interface LukeTestStudioHeader {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioHeader;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioHeader;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioHeader;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioHeader;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioHeader;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestStudioHeader;

  readonly dropdown?: LukeTestUiSdlSelectInput | null;
  withDropdown(dropdown: ILukeTestUiSdlSelectInput | null): LukeTestStudioHeader;

  readonly actionsSelector?: string | null;
  withActionsSelector(actionsSelector: string | null): LukeTestStudioHeader;
}

