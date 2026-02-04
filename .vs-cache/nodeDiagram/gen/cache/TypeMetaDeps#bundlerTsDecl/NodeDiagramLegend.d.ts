export interface NodeDiagramLegend {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramLegend;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramLegend;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramLegend;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramLegend;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramLegend;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramLegend;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramLegend;

  readonly edgeItems?: C3.Array<NodeDiagramLegendEdgeItem | null>;
  withEdgeItems(edgeItems: C3.Array<NodeDiagramLegendEdgeItem | null> | Array<INodeDiagramLegendEdgeItem | null>): NodeDiagramLegend;

  readonly nodeItems?: C3.Array<NodeDiagramLegendNodeItem | null>;
  withNodeItems(nodeItems: C3.Array<NodeDiagramLegendNodeItem | null> | Array<INodeDiagramLegendNodeItem | null>): NodeDiagramLegend;

  readonly legendBtnTitle?: string | null;
  withLegendBtnTitle(legendBtnTitle: string | null): NodeDiagramLegend;

  readonly nodesTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withNodesTitle(nodesTitle: string | null | IUiSdlDynamicValueSpec | null | null): NodeDiagramLegend;

  readonly edgesTitle?: string | null;
  withEdgesTitle(edgesTitle: string | null): NodeDiagramLegend;
}

