export interface LukeTestUiSdlRadioButtonGroup {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlRadioButtonGroup;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlRadioButtonGroup;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlRadioButtonGroup;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlRadioButtonGroup;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlRadioButtonGroup;

  readonly radioButtonInputSelector?: string | null;
  withRadioButtonInputSelector(radioButtonInputSelector: string | null): LukeTestUiSdlRadioButtonGroup;

  readonly radioButtonLabelSelector?: string | null;
  withRadioButtonLabelSelector(radioButtonLabelSelector: string | null): LukeTestUiSdlRadioButtonGroup;
}

