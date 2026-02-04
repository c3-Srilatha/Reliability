export interface UiSdlGraphVisualizationNodesLabel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationNodesLabel;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationNodesLabel;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationNodesLabel;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationNodesLabel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationNodesLabel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationNodesLabel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationNodesLabel;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationNodesLabel;

  readonly label: string;
  withLabel(label: string): UiSdlGraphVisualizationNodesLabel;

  readonly isHidden?: boolean;
  withIsHidden(isHidden: boolean): UiSdlGraphVisualizationNodesLabel;
}

