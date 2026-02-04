export interface LukeTestInlineNotification {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestInlineNotification;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestInlineNotification;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestInlineNotification;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestInlineNotification;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestInlineNotification;
}

