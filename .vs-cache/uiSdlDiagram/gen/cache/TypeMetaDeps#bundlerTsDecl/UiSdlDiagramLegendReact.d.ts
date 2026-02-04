export interface UiSdlDiagramLegendReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramLegendReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramLegendReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramLegendReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramLegendReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramLegendReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramLegendReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramLegendReact;

  readonly edgeItems?: C3.Array<UiSdlDiagramLegendEdgeItem | null>;
  withEdgeItems(edgeItems: C3.Array<UiSdlDiagramLegendEdgeItem | null> | Array<IUiSdlDiagramLegendEdgeItem | null>): UiSdlDiagramLegendReact;

  readonly nodeItems?: C3.Array<UiSdlDiagramLegendNodeItem | null>;
  withNodeItems(nodeItems: C3.Array<UiSdlDiagramLegendNodeItem | null> | Array<IUiSdlDiagramLegendNodeItem | null>): UiSdlDiagramLegendReact;

  readonly legendBtnTitle?: string | null;
  withLegendBtnTitle(legendBtnTitle: string | null): UiSdlDiagramLegendReact;

  readonly nodesTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withNodesTitle(nodesTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegendReact;

  readonly edgesTitle?: string | null;
  withEdgesTitle(edgesTitle: string | null): UiSdlDiagramLegendReact;
}

