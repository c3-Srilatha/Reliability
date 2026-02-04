export interface UiSdlDiagramMinimizedNode {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramMinimizedNode;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramMinimizedNode;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramMinimizedNode;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramMinimizedNode;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramMinimizedNode;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramMinimizedNode;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramMinimizedNode;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramMinimizedNode;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramMinimizedNode;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramMinimizedNode;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramMinimizedNode;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramMinimizedNode;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramMinimizedNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramMinimizedNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramMinimizedNode;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramMinimizedNode;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramMinimizedNode;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramMinimizedNode;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramMinimizedNode;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramMinimizedNode;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramMinimizedNode;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramMinimizedNode;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramMinimizedNode;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramMinimizedNode;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramMinimizedNode;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramMinimizedNode;
}

