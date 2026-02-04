export interface LukeTestUiSdlSidePanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlSidePanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlSidePanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlSidePanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlSidePanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlSidePanel;

  readonly actionGroupButtonSelector?: string | null;
  withActionGroupButtonSelector(actionGroupButtonSelector: string | null): LukeTestUiSdlSidePanel;

  readonly sidePanelHeaderSelector?: string | null;
  withSidePanelHeaderSelector(sidePanelHeaderSelector: string | null): LukeTestUiSdlSidePanel;

  readonly itemSelector?: string | null;
  withItemSelector(itemSelector: string | null): LukeTestUiSdlSidePanel;

  readonly closeIconSelector?: string | null;
  withCloseIconSelector(closeIconSelector: string | null): LukeTestUiSdlSidePanel;

  readonly openIconSelector?: string | null;
  withOpenIconSelector(openIconSelector: string | null): LukeTestUiSdlSidePanel;

  readonly sidePanelOpenSelector?: string | null;
  withSidePanelOpenSelector(sidePanelOpenSelector: string | null): LukeTestUiSdlSidePanel;
}

