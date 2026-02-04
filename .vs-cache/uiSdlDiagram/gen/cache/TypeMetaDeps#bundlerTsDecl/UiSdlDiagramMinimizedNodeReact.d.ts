export interface UiSdlDiagramMinimizedNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramMinimizedNodeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramMinimizedNodeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramMinimizedNodeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramMinimizedNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramMinimizedNodeReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramMinimizedNodeReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramMinimizedNodeReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramMinimizedNodeReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramMinimizedNodeReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramMinimizedNodeReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramMinimizedNodeReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramMinimizedNodeReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramMinimizedNodeReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramMinimizedNodeReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramMinimizedNodeReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramMinimizedNodeReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramMinimizedNodeReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramMinimizedNodeReact;
}

