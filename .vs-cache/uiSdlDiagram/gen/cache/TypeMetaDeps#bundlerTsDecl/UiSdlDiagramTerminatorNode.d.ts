export interface UiSdlDiagramTerminatorNode {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramTerminatorNode;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramTerminatorNode;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramTerminatorNode;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramTerminatorNode;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramTerminatorNode;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramTerminatorNode;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramTerminatorNode;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramTerminatorNode;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramTerminatorNode;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramTerminatorNode;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramTerminatorNode;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramTerminatorNode;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramTerminatorNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramTerminatorNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramTerminatorNode;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramTerminatorNode;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramTerminatorNode;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramTerminatorNode;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramTerminatorNode;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramTerminatorNode;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramTerminatorNode;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramTerminatorNode;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramTerminatorNode;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramTerminatorNode;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramTerminatorNode;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramTerminatorNode;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramTerminatorNode;
}

