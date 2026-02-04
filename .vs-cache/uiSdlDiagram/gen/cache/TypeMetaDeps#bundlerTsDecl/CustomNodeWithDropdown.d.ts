export interface CustomNodeWithDropdown {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CustomNodeWithDropdown;

  readonly id?: string | null;
  withId(id: string | null): CustomNodeWithDropdown;

  readonly name?: string | null;
  withName(name: string | null): CustomNodeWithDropdown;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CustomNodeWithDropdown;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CustomNodeWithDropdown;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CustomNodeWithDropdown;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CustomNodeWithDropdown;

  readonly edge?: boolean;
  withEdge(edge: boolean): CustomNodeWithDropdown;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): CustomNodeWithDropdown;

  readonly srid?: number | null;
  withSrid(srid: number | null): CustomNodeWithDropdown;

  readonly x?: number | null;
  withX(x: number | null): CustomNodeWithDropdown;

  readonly y?: number | null;
  withY(y: number | null): CustomNodeWithDropdown;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): CustomNodeWithDropdown;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): CustomNodeWithDropdown;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): CustomNodeWithDropdown;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): CustomNodeWithDropdown;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): CustomNodeWithDropdown;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): CustomNodeWithDropdown;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): CustomNodeWithDropdown;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): CustomNodeWithDropdown;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithDropdown;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithDropdown;

  readonly className?: string | null;
  withClassName(className: string | null): CustomNodeWithDropdown;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): CustomNodeWithDropdown;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): CustomNodeWithDropdown;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): CustomNodeWithDropdown;

  readonly title?: string | null;
  withTitle(title: string | null): CustomNodeWithDropdown;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): CustomNodeWithDropdown;
}

