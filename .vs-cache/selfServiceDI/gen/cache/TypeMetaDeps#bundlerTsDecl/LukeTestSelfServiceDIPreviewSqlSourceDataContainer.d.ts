export interface LukeTestSelfServiceDIPreviewSqlSourceDataContainer {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIPreviewSqlSourceDataContainer;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIPreviewSqlSourceDataContainer;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIPreviewSqlSourceDataContainer;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIPreviewSqlSourceDataContainer;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIPreviewSqlSourceDataContainer;

  readonly presentationalTreeView?: LukeTestPresentationalTreeView | null;
  withPresentationalTreeView(presentationalTreeView: ILukeTestPresentationalTreeView | null): LukeTestSelfServiceDIPreviewSqlSourceDataContainer;
}

