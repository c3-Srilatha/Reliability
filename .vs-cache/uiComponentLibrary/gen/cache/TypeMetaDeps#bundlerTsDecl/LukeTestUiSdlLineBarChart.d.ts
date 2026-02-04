export interface LukeTestUiSdlLineBarChart {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlLineBarChart;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlLineBarChart;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlLineBarChart;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlLineBarChart;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlLineBarChart;

  readonly canvas?: string | null;
  withCanvas(canvas: string | null): LukeTestUiSdlLineBarChart;

  readonly eChartsForReact?: string | null;
  withEChartsForReact(eChartsForReact: string | null): LukeTestUiSdlLineBarChart;

  readonly legendLabel?: string | null;
  withLegendLabel(legendLabel: string | null): LukeTestUiSdlLineBarChart;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): LukeTestUiSdlLineBarChart;

  readonly headerDropdownButtonSelector?: string | null;
  withHeaderDropdownButtonSelector(headerDropdownButtonSelector: string | null): LukeTestUiSdlLineBarChart;

  readonly downloadOptionSelector?: string | null;
  withDownloadOptionSelector(downloadOptionSelector: string | null): LukeTestUiSdlLineBarChart;
}

