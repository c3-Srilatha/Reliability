export interface LukeTestUiSdlMap {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlMap;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlMap;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlMap;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlMap;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlMap;

  readonly mapSelector?: string | null;
  withMapSelector(mapSelector: string | null): LukeTestUiSdlMap;

  readonly mapMarkerSelector?: string | null;
  withMapMarkerSelector(mapMarkerSelector: string | null): LukeTestUiSdlMap;

  readonly tooltipSelector?: string | null;
  withTooltipSelector(tooltipSelector: string | null): LukeTestUiSdlMap;

  readonly tooltipHeaderSelector?: string | null;
  withTooltipHeaderSelector(tooltipHeaderSelector: string | null): LukeTestUiSdlMap;

  readonly tooltipSubHeaderSelector?: string | null;
  withTooltipSubHeaderSelector(tooltipSubHeaderSelector: string | null): LukeTestUiSdlMap;

  readonly tooltipAdditionalFieldsSelector?: string | null;
  withTooltipAdditionalFieldsSelector(tooltipAdditionalFieldsSelector: string | null): LukeTestUiSdlMap;

  readonly tooltipAdditionalFields?: LukeTestUiSdlDefinitionList | null;
  withTooltipAdditionalFields(tooltipAdditionalFields: ILukeTestUiSdlDefinitionList | null): LukeTestUiSdlMap;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestUiSdlMap;

  readonly zoomInButtonSelector?: string | null;
  withZoomInButtonSelector(zoomInButtonSelector: string | null): LukeTestUiSdlMap;

  readonly zoomOutButtonSelector?: string | null;
  withZoomOutButtonSelector(zoomOutButtonSelector: string | null): LukeTestUiSdlMap;
}

