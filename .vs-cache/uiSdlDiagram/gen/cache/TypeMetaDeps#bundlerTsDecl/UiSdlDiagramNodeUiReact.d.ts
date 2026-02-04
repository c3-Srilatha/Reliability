export interface UiSdlDiagramNodeUiReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramNodeUiReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramNodeUiReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramNodeUiReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramNodeUiReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramNodeUiReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramNodeUiReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramNodeUiReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramNodeUiReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramNodeUiReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramNodeUiReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramNodeUiReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramNodeUiReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramNodeUiReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramNodeUiReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramNodeUiReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramNodeUiReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramNodeUiReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramNodeUiReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramNodeUiReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramNodeUiReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramNodeUiReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramNodeUiReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramNodeUiReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramNodeUiReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramNodeUiReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramNodeUiReact;
}

