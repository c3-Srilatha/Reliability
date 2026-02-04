export interface LukeTestUiSdlEmptyState {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlEmptyState;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlEmptyState;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlEmptyState;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlEmptyState;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlEmptyState;

  readonly imageSelector?: string | null;
  withImageSelector(imageSelector: string | null): LukeTestUiSdlEmptyState;

  readonly headerTextSelector?: string | null;
  withHeaderTextSelector(headerTextSelector: string | null): LukeTestUiSdlEmptyState;

  readonly descriptionTextSelector?: string | null;
  withDescriptionTextSelector(descriptionTextSelector: string | null): LukeTestUiSdlEmptyState;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestUiSdlEmptyState;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestUiSdlEmptyState;
}

