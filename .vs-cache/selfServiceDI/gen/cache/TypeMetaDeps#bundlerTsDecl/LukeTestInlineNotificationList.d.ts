export interface LukeTestInlineNotificationList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestInlineNotificationList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestInlineNotificationList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestInlineNotificationList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestInlineNotificationList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestInlineNotificationList;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestInlineNotificationList;

  readonly linkTextSelector?: string | null;
  withLinkTextSelector(linkTextSelector: string | null): LukeTestInlineNotificationList;
}

