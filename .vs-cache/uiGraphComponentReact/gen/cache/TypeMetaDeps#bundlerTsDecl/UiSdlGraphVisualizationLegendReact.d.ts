export interface UiSdlGraphVisualizationLegendReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationLegendReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationLegendReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationLegendReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationLegendReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationLegendReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationLegendReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationLegendReact;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlGraphVisualizationLegendReact;

  readonly items?: C3.Array<UiSdlGraphVisualizationLegendItem | null>;
  withItems(items: C3.Array<UiSdlGraphVisualizationLegendItem | null> | Array<IUiSdlGraphVisualizationLegendItem | null>): UiSdlGraphVisualizationLegendReact;

  readonly maxLegendItems?: number | null;
  withMaxLegendItems(maxLegendItems: number | null): UiSdlGraphVisualizationLegendReact;
}

