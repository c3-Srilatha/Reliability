export interface LukeTestUiSdlModal {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlModal;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlModal;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlModal;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlModal;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlModal;

  readonly modalBodySelector?: string | null;
  withModalBodySelector(modalBodySelector: string | null): LukeTestUiSdlModal;

  readonly closeButtonSelector?: string | null;
  withCloseButtonSelector(closeButtonSelector: string | null): LukeTestUiSdlModal;

  readonly dimmerSelector?: string | null;
  withDimmerSelector(dimmerSelector: string | null): LukeTestUiSdlModal;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUiSdlModal;

  readonly subHeaderSelector?: string | null;
  withSubHeaderSelector(subHeaderSelector: string | null): LukeTestUiSdlModal;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestUiSdlModal;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestUiSdlModal;

  readonly dangerButtonSelector?: string | null;
  withDangerButtonSelector(dangerButtonSelector: string | null): LukeTestUiSdlModal;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestUiSdlModal;

  readonly secondaryDangerButtonSelector?: string | null;
  withSecondaryDangerButtonSelector(secondaryDangerButtonSelector: string | null): LukeTestUiSdlModal;

  readonly tertiaryButtonSelector?: string | null;
  withTertiaryButtonSelector(tertiaryButtonSelector: string | null): LukeTestUiSdlModal;

  readonly topDivisionLineSelector?: string | null;
  withTopDivisionLineSelector(topDivisionLineSelector: string | null): LukeTestUiSdlModal;

  readonly bottomDivisionLineSelector?: string | null;
  withBottomDivisionLineSelector(bottomDivisionLineSelector: string | null): LukeTestUiSdlModal;
}

