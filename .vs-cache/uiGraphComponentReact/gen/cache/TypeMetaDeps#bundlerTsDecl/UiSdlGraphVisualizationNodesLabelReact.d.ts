export interface UiSdlGraphVisualizationNodesLabelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationNodesLabelReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationNodesLabelReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationNodesLabelReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationNodesLabelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationNodesLabelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationNodesLabelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationNodesLabelReact;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationNodesLabelReact;

  readonly label: string;
  withLabel(label: string): UiSdlGraphVisualizationNodesLabelReact;

  readonly isHidden?: boolean;
  withIsHidden(isHidden: boolean): UiSdlGraphVisualizationNodesLabelReact;
}

