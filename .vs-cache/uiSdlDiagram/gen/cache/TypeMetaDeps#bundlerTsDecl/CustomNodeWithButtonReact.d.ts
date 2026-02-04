export interface CustomNodeWithButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CustomNodeWithButtonReact;

  readonly id?: string | null;
  withId(id: string | null): CustomNodeWithButtonReact;

  readonly name?: string | null;
  withName(name: string | null): CustomNodeWithButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CustomNodeWithButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CustomNodeWithButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CustomNodeWithButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CustomNodeWithButtonReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): CustomNodeWithButtonReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): CustomNodeWithButtonReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): CustomNodeWithButtonReact;

  readonly x?: number | null;
  withX(x: number | null): CustomNodeWithButtonReact;

  readonly y?: number | null;
  withY(y: number | null): CustomNodeWithButtonReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): CustomNodeWithButtonReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): CustomNodeWithButtonReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): CustomNodeWithButtonReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): CustomNodeWithButtonReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): CustomNodeWithButtonReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): CustomNodeWithButtonReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): CustomNodeWithButtonReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): CustomNodeWithButtonReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithButtonReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithButtonReact;

  readonly className?: string | null;
  withClassName(className: string | null): CustomNodeWithButtonReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): CustomNodeWithButtonReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): CustomNodeWithButtonReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): CustomNodeWithButtonReact;

  readonly clickDebounce?: number | null;
  withClickDebounce(clickDebounce: number | null): CustomNodeWithButtonReact;

  readonly content?: string | null;
  withContent(content: string | null): CustomNodeWithButtonReact;

  readonly usage?: string | null;
  withUsage(usage: string | null): CustomNodeWithButtonReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): CustomNodeWithButtonReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): CustomNodeWithButtonReact;

  readonly size?: string | null;
  withSize(size: string | null): CustomNodeWithButtonReact;
}

