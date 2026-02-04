export interface LukeTestKpiHeader {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestKpiHeader;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestKpiHeader;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestKpiHeader;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestKpiHeader;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestKpiHeader;

  readonly tileSelector?: string | null;
  withTileSelector(tileSelector: string | null): LukeTestKpiHeader;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestKpiHeader;

  readonly tooltipSelector?: string | null;
  withTooltipSelector(tooltipSelector: string | null): LukeTestKpiHeader;

  readonly valueSelector?: string | null;
  withValueSelector(valueSelector: string | null): LukeTestKpiHeader;
}

