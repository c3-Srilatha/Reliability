export interface LukeTestUiSdlToggle {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlToggle;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlToggle;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlToggle;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlToggle;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlToggle;

  readonly checkboxSelector?: string | null;
  withCheckboxSelector(checkboxSelector: string | null): LukeTestUiSdlToggle;

  readonly checkboxInputSelector?: string | null;
  withCheckboxInputSelector(checkboxInputSelector: string | null): LukeTestUiSdlToggle;

  readonly checkboxValueSelector?: string | null;
  withCheckboxValueSelector(checkboxValueSelector: string | null): LukeTestUiSdlToggle;
}

