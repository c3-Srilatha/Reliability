export interface LukeTestUiSdlFormBase {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlFormBase;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlFormBase;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlFormBase;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlFormBase;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlFormBase;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUiSdlFormBase;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestUiSdlFormBase;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestUiSdlFormBase;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestUiSdlFormBase;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestUiSdlFormBase;
}

