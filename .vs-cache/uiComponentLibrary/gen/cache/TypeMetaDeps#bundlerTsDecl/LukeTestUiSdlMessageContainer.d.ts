export interface LukeTestUiSdlMessageContainer {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlMessageContainer;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlMessageContainer;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlMessageContainer;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlMessageContainer;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlMessageContainer;

  readonly bannerSelector?: string | null;
  withBannerSelector(bannerSelector: string | null): LukeTestUiSdlMessageContainer;

  readonly bannerIconSelector?: string | null;
  withBannerIconSelector(bannerIconSelector: string | null): LukeTestUiSdlMessageContainer;

  readonly bannerPrimaryTextSelector?: string | null;
  withBannerPrimaryTextSelector(bannerPrimaryTextSelector: string | null): LukeTestUiSdlMessageContainer;

  readonly bannerSecondaryTextSelector?: string | null;
  withBannerSecondaryTextSelector(bannerSecondaryTextSelector: string | null): LukeTestUiSdlMessageContainer;

  readonly bannerCloseButtonSelector?: string | null;
  withBannerCloseButtonSelector(bannerCloseButtonSelector: string | null): LukeTestUiSdlMessageContainer;
}

