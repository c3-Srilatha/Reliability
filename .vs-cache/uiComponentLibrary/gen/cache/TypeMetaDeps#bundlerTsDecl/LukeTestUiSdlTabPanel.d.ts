export interface LukeTestUiSdlTabPanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlTabPanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlTabPanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlTabPanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlTabPanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlTabPanel;

  readonly titleSectionSelector?: string | null;
  withTitleSectionSelector(titleSectionSelector: string | null): LukeTestUiSdlTabPanel;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlTabPanel;

  readonly subTitleSelector?: string | null;
  withSubTitleSelector(subTitleSelector: string | null): LukeTestUiSdlTabPanel;

  readonly bodyTextSelector?: string | null;
  withBodyTextSelector(bodyTextSelector: string | null): LukeTestUiSdlTabPanel;

  readonly tileParentSelector?: string | null;
  withTileParentSelector(tileParentSelector: string | null): LukeTestUiSdlTabPanel;

  readonly tileSelector?: string | null;
  withTileSelector(tileSelector: string | null): LukeTestUiSdlTabPanel;

  readonly buttonParentSelector?: string | null;
  withButtonParentSelector(buttonParentSelector: string | null): LukeTestUiSdlTabPanel;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestUiSdlTabPanel;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestUiSdlTabPanel;

  readonly tabParentSelector?: string | null;
  withTabParentSelector(tabParentSelector: string | null): LukeTestUiSdlTabPanel;

  readonly tabSelector?: string | null;
  withTabSelector(tabSelector: string | null): LukeTestUiSdlTabPanel;

  readonly activeTabSelector?: string | null;
  withActiveTabSelector(activeTabSelector: string | null): LukeTestUiSdlTabPanel;
}

