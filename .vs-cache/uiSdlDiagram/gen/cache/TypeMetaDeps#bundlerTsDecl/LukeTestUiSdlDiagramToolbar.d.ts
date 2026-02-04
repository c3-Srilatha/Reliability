export interface LukeTestUiSdlDiagramToolbar {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDiagramToolbar;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlDiagramToolbar;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlDiagramToolbar;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlDiagramToolbar;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlDiagramToolbar;

  readonly toolbarSelector?: string | null;
  withToolbarSelector(toolbarSelector: string | null): LukeTestUiSdlDiagramToolbar;

  readonly toolbarItemSelector?: string | null;
  withToolbarItemSelector(toolbarItemSelector: string | null): LukeTestUiSdlDiagramToolbar;

  readonly hiddenToolbarItemSelector?: string | null;
  withHiddenToolbarItemSelector(hiddenToolbarItemSelector: string | null): LukeTestUiSdlDiagramToolbar;
}

