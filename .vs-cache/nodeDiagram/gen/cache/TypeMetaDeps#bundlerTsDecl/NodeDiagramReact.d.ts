export interface NodeDiagramReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): NodeDiagramReact;

  readonly id?: string | null;
  withId(id: string | null): NodeDiagramReact;

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): NodeDiagramReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): NodeDiagramReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): NodeDiagramReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): NodeDiagramReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): NodeDiagramReact;

  readonly loadingItems?: C3.Array<LoadingListItem | null>;
  withLoadingItems(loadingItems: C3.Array<LoadingListItem | null> | Array<ILoadingListItem | null>): NodeDiagramReact;

  readonly options?: NodeDiagram.ConfigurationOptions | null;
  withOptions(options: INodeDiagram.ConfigurationOptions | null): NodeDiagramReact;

  readonly nodes?: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null>;
  withNodes(nodes: C3.Array<NodeDiagramNode<NodeDiagramNodeData | null> | null> | Array<INodeDiagramNode<NodeDiagramNodeData | null> | null>): NodeDiagramReact;

  readonly edges?: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null>;
  withEdges(edges: C3.Array<NodeDiagramEdge<NodeDiagramEdgeData | null> | null> | Array<INodeDiagramEdge<NodeDiagramEdgeData | null> | null>): NodeDiagramReact;

  readonly selectedNodes?: C3.Array<string | null>;
  withSelectedNodes(selectedNodes: C3.Array<string | null> | Array<string | null>): NodeDiagramReact;

  readonly selectedEdges?: C3.Array<string | null>;
  withSelectedEdges(selectedEdges: C3.Array<string | null> | Array<string | null>): NodeDiagramReact;

  readonly nodeContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withNodeContextMenus(nodeContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagramReact;

  readonly edgeContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withEdgeContextMenus(edgeContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagramReact;

  readonly paneContextMenus?: C3.Array<UiSdlAction | null> | C3.Array<string | null> | null;
  withPaneContextMenus(paneContextMenus: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null> | C3.Array<string | null> | Array<string | null> | null): NodeDiagramReact;

  readonly panels?: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null>;
  withPanels(panels: C3.Array<UiSdlComponentRef<NodeDiagramPanel | null> | null> | Array<IUiSdlComponentRef<NodeDiagramPanel | null> | null>): NodeDiagramReact;

  readonly updateQueue?: C3.Array<NodeDiagramUpdate | null>;
  withUpdateQueue(updateQueue: C3.Array<NodeDiagramUpdate | null> | Array<INodeDiagramUpdate | null>): NodeDiagramReact;

  readonly generatedImports?: any | null;
  withGeneratedImports(generatedImports: any | null): NodeDiagramReact;
}

