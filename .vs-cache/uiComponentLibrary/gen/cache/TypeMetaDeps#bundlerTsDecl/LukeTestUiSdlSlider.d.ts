export interface LukeTestUiSdlSlider {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlSlider;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlSlider;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlSlider;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlSlider;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlSlider;

  readonly sliderHandle?: string | null;
  withSliderHandle(sliderHandle: string | null): LukeTestUiSdlSlider;

  readonly sliderInput?: string | null;
  withSliderInput(sliderInput: string | null): LukeTestUiSdlSlider;
}

