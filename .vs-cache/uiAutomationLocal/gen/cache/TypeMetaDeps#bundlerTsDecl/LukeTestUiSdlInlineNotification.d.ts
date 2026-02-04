export interface LukeTestUiSdlInlineNotification {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlInlineNotification;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlInlineNotification;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlInlineNotification;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlInlineNotification;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlInlineNotification;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestUiSdlInlineNotification;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlInlineNotification;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestUiSdlInlineNotification;
}

