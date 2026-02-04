export interface UiSdlDiagramNodeUi {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramNodeUi;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramNodeUi;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramNodeUi;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramNodeUi;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramNodeUi;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramNodeUi;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramNodeUi;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramNodeUi;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramNodeUi;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramNodeUi;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramNodeUi;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramNodeUi;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramNodeUi;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramNodeUi;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramNodeUi;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramNodeUi;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramNodeUi;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramNodeUi;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramNodeUi;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramNodeUi;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramNodeUi;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramNodeUi;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramNodeUi;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramNodeUi;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramNodeUi;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramNodeUi;
}

