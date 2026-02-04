export interface LukeTestFileUploadTabPanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestFileUploadTabPanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestFileUploadTabPanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestFileUploadTabPanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestFileUploadTabPanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestFileUploadTabPanel;

  readonly titleSectionSelector?: string | null;
  withTitleSectionSelector(titleSectionSelector: string | null): LukeTestFileUploadTabPanel;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestFileUploadTabPanel;

  readonly subTitleSelector?: string | null;
  withSubTitleSelector(subTitleSelector: string | null): LukeTestFileUploadTabPanel;

  readonly bodyTextSelector?: string | null;
  withBodyTextSelector(bodyTextSelector: string | null): LukeTestFileUploadTabPanel;

  readonly tileParentSelector?: string | null;
  withTileParentSelector(tileParentSelector: string | null): LukeTestFileUploadTabPanel;

  readonly tileSelector?: string | null;
  withTileSelector(tileSelector: string | null): LukeTestFileUploadTabPanel;

  readonly buttonParentSelector?: string | null;
  withButtonParentSelector(buttonParentSelector: string | null): LukeTestFileUploadTabPanel;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestFileUploadTabPanel;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestFileUploadTabPanel;

  readonly tabParentSelector?: string | null;
  withTabParentSelector(tabParentSelector: string | null): LukeTestFileUploadTabPanel;

  readonly tabSelector?: string | null;
  withTabSelector(tabSelector: string | null): LukeTestFileUploadTabPanel;

  readonly activeTabSelector?: string | null;
  withActiveTabSelector(activeTabSelector: string | null): LukeTestFileUploadTabPanel;
}

