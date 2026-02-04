export interface LukeTestDeleteModal {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestDeleteModal;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestDeleteModal;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestDeleteModal;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestDeleteModal;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestDeleteModal;

  readonly modalBodySelector?: string | null;
  withModalBodySelector(modalBodySelector: string | null): LukeTestDeleteModal;

  readonly closeButtonSelector?: string | null;
  withCloseButtonSelector(closeButtonSelector: string | null): LukeTestDeleteModal;

  readonly dimmerSelector?: string | null;
  withDimmerSelector(dimmerSelector: string | null): LukeTestDeleteModal;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestDeleteModal;

  readonly subHeaderSelector?: string | null;
  withSubHeaderSelector(subHeaderSelector: string | null): LukeTestDeleteModal;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestDeleteModal;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestDeleteModal;

  readonly dangerButtonSelector?: string | null;
  withDangerButtonSelector(dangerButtonSelector: string | null): LukeTestDeleteModal;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestDeleteModal;

  readonly secondaryDangerButtonSelector?: string | null;
  withSecondaryDangerButtonSelector(secondaryDangerButtonSelector: string | null): LukeTestDeleteModal;

  readonly tertiaryButtonSelector?: string | null;
  withTertiaryButtonSelector(tertiaryButtonSelector: string | null): LukeTestDeleteModal;

  readonly topDivisionLineSelector?: string | null;
  withTopDivisionLineSelector(topDivisionLineSelector: string | null): LukeTestDeleteModal;

  readonly bottomDivisionLineSelector?: string | null;
  withBottomDivisionLineSelector(bottomDivisionLineSelector: string | null): LukeTestDeleteModal;
}

