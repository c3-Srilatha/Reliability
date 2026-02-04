export interface UiSdlDiagramLegend {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramLegend;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramLegend;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramLegend;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramLegend;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramLegend;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramLegend;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramLegend;

  readonly edgeItems?: C3.Array<UiSdlDiagramLegendEdgeItem | null>;
  withEdgeItems(edgeItems: C3.Array<UiSdlDiagramLegendEdgeItem | null> | Array<IUiSdlDiagramLegendEdgeItem | null>): UiSdlDiagramLegend;

  readonly nodeItems?: C3.Array<UiSdlDiagramLegendNodeItem | null>;
  withNodeItems(nodeItems: C3.Array<UiSdlDiagramLegendNodeItem | null> | Array<IUiSdlDiagramLegendNodeItem | null>): UiSdlDiagramLegend;

  readonly legendBtnTitle?: string | null;
  withLegendBtnTitle(legendBtnTitle: string | null): UiSdlDiagramLegend;

  readonly nodesTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withNodesTitle(nodesTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegend;

  readonly edgesTitle?: string | null;
  withEdgesTitle(edgesTitle: string | null): UiSdlDiagramLegend;
}

