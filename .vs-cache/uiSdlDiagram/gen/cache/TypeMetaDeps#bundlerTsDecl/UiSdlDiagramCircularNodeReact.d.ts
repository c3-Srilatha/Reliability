export interface UiSdlDiagramCircularNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramCircularNodeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramCircularNodeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramCircularNodeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramCircularNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramCircularNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramCircularNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramCircularNodeReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramCircularNodeReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramCircularNodeReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramCircularNodeReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramCircularNodeReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramCircularNodeReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramCircularNodeReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramCircularNodeReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramCircularNodeReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramCircularNodeReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramCircularNodeReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramCircularNodeReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramCircularNodeReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramCircularNodeReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramCircularNodeReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramCircularNodeReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramCircularNodeReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramCircularNodeReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramCircularNodeReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramCircularNodeReact;

  readonly shapeId?: string | null;
  withShapeId(shapeId: string | null): UiSdlDiagramCircularNodeReact;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlDiagramCircularNodeReact;

  readonly colorClass?: string | null;
  withColorClass(colorClass: string | null): UiSdlDiagramCircularNodeReact;

  readonly borderClass?: string | null;
  withBorderClass(borderClass: string | null): UiSdlDiagramCircularNodeReact;

  readonly backgroundClass?: string | null;
  withBackgroundClass(backgroundClass: string | null): UiSdlDiagramCircularNodeReact;

  readonly layeredIconClass?: string | null;
  withLayeredIconClass(layeredIconClass: string | null): UiSdlDiagramCircularNodeReact;
}

