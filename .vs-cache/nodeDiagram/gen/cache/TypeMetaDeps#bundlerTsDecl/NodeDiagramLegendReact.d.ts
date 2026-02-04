export interface NodeDiagramLegendReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramLegendReact;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramLegendReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramLegendReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramLegendReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramLegendReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramLegendReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramLegendReact;

  readonly edgeItems?: C3.Array<NodeDiagramLegendEdgeItem | null>;
  withEdgeItems(edgeItems: C3.Array<NodeDiagramLegendEdgeItem | null> | Array<INodeDiagramLegendEdgeItem | null>): NodeDiagramLegendReact;

  readonly nodeItems?: C3.Array<NodeDiagramLegendNodeItem | null>;
  withNodeItems(nodeItems: C3.Array<NodeDiagramLegendNodeItem | null> | Array<INodeDiagramLegendNodeItem | null>): NodeDiagramLegendReact;

  readonly legendBtnTitle?: string | null;
  withLegendBtnTitle(legendBtnTitle: string | null): NodeDiagramLegendReact;

  readonly nodesTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withNodesTitle(nodesTitle: string | null | IUiSdlDynamicValueSpec | null | null): NodeDiagramLegendReact;

  readonly edgesTitle?: string | null;
  withEdgesTitle(edgesTitle: string | null): NodeDiagramLegendReact;
}

