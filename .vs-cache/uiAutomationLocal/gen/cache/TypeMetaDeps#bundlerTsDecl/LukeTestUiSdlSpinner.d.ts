export interface LukeTestUiSdlSpinner {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlSpinner;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlSpinner;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlSpinner;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlSpinner;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlSpinner;

  readonly spinnerSelector?: string | null;
  withSpinnerSelector(spinnerSelector: string | null): LukeTestUiSdlSpinner;
}

