export interface UiSdlDiagramLegendNodeItems {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramLegendNodeItems;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramLegendNodeItems;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramLegendNodeItems;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramLegendNodeItems;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramLegendNodeItems;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramLegendNodeItems;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramLegendNodeItems;

  readonly nodeItems?: C3.Array<UiSdlDiagramLegendNodeItem | null>;
  withNodeItems(nodeItems: C3.Array<UiSdlDiagramLegendNodeItem | null> | Array<IUiSdlDiagramLegendNodeItem | null>): UiSdlDiagramLegendNodeItems;

  readonly nodesTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withNodesTitle(nodesTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegendNodeItems;

  readonly rowLimit?: string | null;
  withRowLimit(rowLimit: string | null): UiSdlDiagramLegendNodeItems;
}

