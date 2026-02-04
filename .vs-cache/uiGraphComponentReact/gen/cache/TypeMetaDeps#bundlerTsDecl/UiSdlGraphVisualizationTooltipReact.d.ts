export interface UiSdlGraphVisualizationTooltipReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationTooltipReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationTooltipReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationTooltipReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationTooltipReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationTooltipReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationTooltipReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationTooltipReact;

  readonly tooltipBody?: string | null;
  withTooltipBody(tooltipBody: string | null): UiSdlGraphVisualizationTooltipReact;

  readonly tooltipSubtitle?: string | null;
  withTooltipSubtitle(tooltipSubtitle: string | null): UiSdlGraphVisualizationTooltipReact;

  readonly tooltipTitle?: string | null;
  withTooltipTitle(tooltipTitle: string | null): UiSdlGraphVisualizationTooltipReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationTooltipReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationTooltipReact;
}

