export interface LukeTestUiSdlMetricTile {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlMetricTile;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlMetricTile;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlMetricTile;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlMetricTile;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlMetricTile;

  readonly metricTileSelector?: string | null;
  withMetricTileSelector(metricTileSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileTitleSelector?: string | null;
  withMetricTileTitleSelector(metricTileTitleSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileTitleIconSelector?: string | null;
  withMetricTileTitleIconSelector(metricTileTitleIconSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileValueIconSelector?: string | null;
  withMetricTileValueIconSelector(metricTileValueIconSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileTrendIndicatorSelector?: string | null;
  withMetricTileTrendIndicatorSelector(metricTileTrendIndicatorSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileTrendPercentageSelector?: string | null;
  withMetricTileTrendPercentageSelector(metricTileTrendPercentageSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileValueSelector?: string | null;
  withMetricTileValueSelector(metricTileValueSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileSparklineHorizontalLabelsSelector?: string | null;
  withMetricTileSparklineHorizontalLabelsSelector(metricTileSparklineHorizontalLabelsSelector: string | null): LukeTestUiSdlMetricTile;

  readonly metricTileSparklineChartSelector?: string | null;
  withMetricTileSparklineChartSelector(metricTileSparklineChartSelector: string | null): LukeTestUiSdlMetricTile;
}

