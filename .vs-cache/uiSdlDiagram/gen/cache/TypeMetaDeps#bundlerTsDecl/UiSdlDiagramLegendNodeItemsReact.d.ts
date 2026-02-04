export interface UiSdlDiagramLegendNodeItemsReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramLegendNodeItemsReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramLegendNodeItemsReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramLegendNodeItemsReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramLegendNodeItemsReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramLegendNodeItemsReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramLegendNodeItemsReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramLegendNodeItemsReact;

  readonly nodeItems?: C3.Array<UiSdlDiagramLegendNodeItem | null>;
  withNodeItems(nodeItems: C3.Array<UiSdlDiagramLegendNodeItem | null> | Array<IUiSdlDiagramLegendNodeItem | null>): UiSdlDiagramLegendNodeItemsReact;

  readonly nodesTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withNodesTitle(nodesTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramLegendNodeItemsReact;

  readonly rowLimit?: string | null;
  withRowLimit(rowLimit: string | null): UiSdlDiagramLegendNodeItemsReact;
}

