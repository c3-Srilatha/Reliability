export interface CustomNodeWithButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CustomNodeWithButton;

  readonly id?: string | null;
  withId(id: string | null): CustomNodeWithButton;

  readonly name?: string | null;
  withName(name: string | null): CustomNodeWithButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CustomNodeWithButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CustomNodeWithButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CustomNodeWithButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CustomNodeWithButton;

  readonly edge?: boolean;
  withEdge(edge: boolean): CustomNodeWithButton;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): CustomNodeWithButton;

  readonly srid?: number | null;
  withSrid(srid: number | null): CustomNodeWithButton;

  readonly x?: number | null;
  withX(x: number | null): CustomNodeWithButton;

  readonly y?: number | null;
  withY(y: number | null): CustomNodeWithButton;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): CustomNodeWithButton;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): CustomNodeWithButton;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): CustomNodeWithButton;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): CustomNodeWithButton;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): CustomNodeWithButton;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): CustomNodeWithButton;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): CustomNodeWithButton;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): CustomNodeWithButton;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithButton;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithButton;

  readonly className?: string | null;
  withClassName(className: string | null): CustomNodeWithButton;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): CustomNodeWithButton;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): CustomNodeWithButton;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): CustomNodeWithButton;

  readonly clickDebounce?: number | null;
  withClickDebounce(clickDebounce: number | null): CustomNodeWithButton;

  readonly content?: string | null;
  withContent(content: string | null): CustomNodeWithButton;

  readonly usage?: string | null;
  withUsage(usage: string | null): CustomNodeWithButton;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): CustomNodeWithButton;

  readonly loading?: boolean;
  withLoading(loading: boolean): CustomNodeWithButton;

  readonly size?: string | null;
  withSize(size: string | null): CustomNodeWithButton;
}

