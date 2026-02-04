export interface LukeTestUiSdlCollapsibleComponent {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlCollapsibleComponent;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlCollapsibleComponent;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlCollapsibleComponent;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlCollapsibleComponent;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlCollapsibleComponent;

  readonly titleSectionSelector?: string | null;
  withTitleSectionSelector(titleSectionSelector: string | null): LukeTestUiSdlCollapsibleComponent;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlCollapsibleComponent;

  readonly secondaryTitleAsButtonSelector?: string | null;
  withSecondaryTitleAsButtonSelector(secondaryTitleAsButtonSelector: string | null): LukeTestUiSdlCollapsibleComponent;

  readonly secondaryTitleAsTextSelector?: string | null;
  withSecondaryTitleAsTextSelector(secondaryTitleAsTextSelector: string | null): LukeTestUiSdlCollapsibleComponent;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestUiSdlCollapsibleComponent;
}

