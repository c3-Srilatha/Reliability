export interface LukeTestStatusTracker {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStatusTracker;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStatusTracker;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStatusTracker;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStatusTracker;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStatusTracker;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestStatusTracker;

  readonly trackerTitleSelector?: string | null;
  withTrackerTitleSelector(trackerTitleSelector: string | null): LukeTestStatusTracker;

  readonly fileNameSelector?: string | null;
  withFileNameSelector(fileNameSelector: string | null): LukeTestStatusTracker;

  readonly individualfileUplodStatusSelector?: string | null;
  withIndividualfileUplodStatusSelector(individualfileUplodStatusSelector: string | null): LukeTestStatusTracker;

  readonly filePercentageSelector?: string | null;
  withFilePercentageSelector(filePercentageSelector: string | null): LukeTestStatusTracker;

  readonly rawCompletionRatioSelector?: string | null;
  withRawCompletionRatioSelector(rawCompletionRatioSelector: string | null): LukeTestStatusTracker;

  readonly rawCountRatioSelector?: string | null;
  withRawCountRatioSelector(rawCountRatioSelector: string | null): LukeTestStatusTracker;

  readonly completedDismissButtonSelector?: string | null;
  withCompletedDismissButtonSelector(completedDismissButtonSelector: string | null): LukeTestStatusTracker;

  readonly expandButtonSelector?: string | null;
  withExpandButtonSelector(expandButtonSelector: string | null): LukeTestStatusTracker;

  readonly statusTrackerExpandSelector?: string | null;
  withStatusTrackerExpandSelector(statusTrackerExpandSelector: string | null): LukeTestStatusTracker;
}

