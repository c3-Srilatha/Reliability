export interface LukeTestStudioRadioButtonGroup {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioRadioButtonGroup;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioRadioButtonGroup;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioRadioButtonGroup;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioRadioButtonGroup;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioRadioButtonGroup;

  readonly radioButtonItemSelector?: string | null;
  withRadioButtonItemSelector(radioButtonItemSelector: string | null): LukeTestStudioRadioButtonGroup;

  readonly radioMarkEl?: string | null;
  withRadioMarkEl(radioMarkEl: string | null): LukeTestStudioRadioButtonGroup;
}

