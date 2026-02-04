export interface UiSdlGraphVisualizationTooltip {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationTooltip;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationTooltip;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationTooltip;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationTooltip;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationTooltip;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationTooltip;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationTooltip;

  readonly tooltipBody?: string | null;
  withTooltipBody(tooltipBody: string | null): UiSdlGraphVisualizationTooltip;

  readonly tooltipSubtitle?: string | null;
  withTooltipSubtitle(tooltipSubtitle: string | null): UiSdlGraphVisualizationTooltip;

  readonly tooltipTitle?: string | null;
  withTooltipTitle(tooltipTitle: string | null): UiSdlGraphVisualizationTooltip;

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationTooltip;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationTooltip;
}

