export interface NodeDiagram {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagram;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagram;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagram;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagram;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagram;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagram;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagram;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): NodeDiagram;

  readonly loadingItems?: C3.Array<LoadingListItem | null>;
  withLoadingItems(loadingItems: C3.Array<LoadingListItem | null> | Array<ILoadingListItem | null>): NodeDiagram;

  readonly options?: NodeDiagram.ConfigurationOptions | null;
  withOptions(options: INodeDiagram.ConfigurationOptions | null): NodeDiagram;

  readonly nodes?: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null>;
  withNodes(nodes: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null> | Array<INodeDiagramNode<NodeDiagramNodeData | null> | null>): NodeDiagram;

  readonly edges?: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null>;
  withEdges(edges: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null> | Array<INodeDiagramEdge<NodeDiagramEdgeData | null> | null>): NodeDiagram;

  readonly selectedNodes?: C3.Array<string | null>;
  withSelectedNodes(selectedNodes: C3.Array<string | null> | Array<string | null>): NodeDiagram;

  readonly selectedEdges?: C3.Array<string | null>;
  withSelectedEdges(selectedEdges: C3.Array<string | null> | Array<string | null>): NodeDiagram;

  readonly nodeContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withNodeContextMenus(nodeContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagram;

  readonly edgeContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withEdgeContextMenus(edgeContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagram;

  readonly paneContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withPaneContextMenus(paneContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagram;

  readonly panels?: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null>;
  withPanels(panels: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null> | Array<IUiSdlComponentRef<NodeDiagramPanel | null> | null>): NodeDiagram;

  readonly updateQueue?: C3.Array<NodeDiagramUpdate | null>;
  withUpdateQueue(updateQueue: C3.Array<NodeDiagramUpdate | null> | Array<INodeDiagramUpdate | null>): NodeDiagram;
}

