export interface UiSdlDiagramTerminatorNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramTerminatorNodeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramTerminatorNodeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramTerminatorNodeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramTerminatorNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramTerminatorNodeReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramTerminatorNodeReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramTerminatorNodeReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramTerminatorNodeReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramTerminatorNodeReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramTerminatorNodeReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramTerminatorNodeReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramTerminatorNodeReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramTerminatorNodeReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramTerminatorNodeReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramTerminatorNodeReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramTerminatorNodeReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramTerminatorNodeReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramTerminatorNodeReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramTerminatorNodeReact;
}

