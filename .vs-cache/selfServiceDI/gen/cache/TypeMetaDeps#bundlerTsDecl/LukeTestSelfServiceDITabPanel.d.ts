export interface LukeTestSelfServiceDITabPanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDITabPanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDITabPanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDITabPanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDITabPanel;

  readonly titleSectionSelector?: string | null;
  withTitleSectionSelector(titleSectionSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly subTitleSelector?: string | null;
  withSubTitleSelector(subTitleSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly bodyTextSelector?: string | null;
  withBodyTextSelector(bodyTextSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly tileParentSelector?: string | null;
  withTileParentSelector(tileParentSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly tileSelector?: string | null;
  withTileSelector(tileSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly buttonParentSelector?: string | null;
  withButtonParentSelector(buttonParentSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly tabParentSelector?: string | null;
  withTabParentSelector(tabParentSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly tabSelector?: string | null;
  withTabSelector(tabSelector: string | null): LukeTestSelfServiceDITabPanel;

  readonly activeTabSelector?: string | null;
  withActiveTabSelector(activeTabSelector: string | null): LukeTestSelfServiceDITabPanel;
}

