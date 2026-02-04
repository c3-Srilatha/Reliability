export interface UiSdlGraphVisualizationLegend {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationLegend;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationLegend;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationLegend;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationLegend;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationLegend;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationLegend;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationLegend;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlGraphVisualizationLegend;

  readonly items?: C3.Array<UiSdlGraphVisualizationLegendItem | null>;
  withItems(items: C3.Array<UiSdlGraphVisualizationLegendItem | null> | Array<IUiSdlGraphVisualizationLegendItem | null>): UiSdlGraphVisualizationLegend;

  readonly maxLegendItems?: number | null;
  withMaxLegendItems(maxLegendItems: number | null): UiSdlGraphVisualizationLegend;
}

