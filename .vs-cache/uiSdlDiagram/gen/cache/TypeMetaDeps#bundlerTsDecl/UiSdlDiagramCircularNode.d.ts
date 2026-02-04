export interface UiSdlDiagramCircularNode {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramCircularNode;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramCircularNode;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramCircularNode;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramCircularNode;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramCircularNode;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramCircularNode;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramCircularNode;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramCircularNode;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramCircularNode;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramCircularNode;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramCircularNode;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramCircularNode;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramCircularNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramCircularNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramCircularNode;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramCircularNode;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramCircularNode;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramCircularNode;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramCircularNode;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramCircularNode;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramCircularNode;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramCircularNode;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramCircularNode;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramCircularNode;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramCircularNode;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramCircularNode;

  readonly shapeId?: string | null;
  withShapeId(shapeId: string | null): UiSdlDiagramCircularNode;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlDiagramCircularNode;

  readonly colorClass?: string | null;
  withColorClass(colorClass: string | null): UiSdlDiagramCircularNode;

  readonly borderClass?: string | null;
  withBorderClass(borderClass: string | null): UiSdlDiagramCircularNode;

  readonly backgroundClass?: string | null;
  withBackgroundClass(backgroundClass: string | null): UiSdlDiagramCircularNode;

  readonly layeredIconClass?: string | null;
  withLayeredIconClass(layeredIconClass: string | null): UiSdlDiagramCircularNode;
}

