export interface LukeTestUiSdlButton {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlButton;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlButton;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlButton;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlButton;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlButton;

  readonly buttonSelector?: string | null;
  withButtonSelector(buttonSelector: string | null): LukeTestUiSdlButton;
}

