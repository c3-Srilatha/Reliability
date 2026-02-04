export interface CustomNodeWithDropdownReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CustomNodeWithDropdownReact;

  readonly id?: string | null;
  withId(id: string | null): CustomNodeWithDropdownReact;

  readonly name?: string | null;
  withName(name: string | null): CustomNodeWithDropdownReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CustomNodeWithDropdownReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CustomNodeWithDropdownReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CustomNodeWithDropdownReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CustomNodeWithDropdownReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): CustomNodeWithDropdownReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): CustomNodeWithDropdownReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): CustomNodeWithDropdownReact;

  readonly x?: number | null;
  withX(x: number | null): CustomNodeWithDropdownReact;

  readonly y?: number | null;
  withY(y: number | null): CustomNodeWithDropdownReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): CustomNodeWithDropdownReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): CustomNodeWithDropdownReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): CustomNodeWithDropdownReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): CustomNodeWithDropdownReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): CustomNodeWithDropdownReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): CustomNodeWithDropdownReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): CustomNodeWithDropdownReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): CustomNodeWithDropdownReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithDropdownReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): CustomNodeWithDropdownReact;

  readonly className?: string | null;
  withClassName(className: string | null): CustomNodeWithDropdownReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): CustomNodeWithDropdownReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): CustomNodeWithDropdownReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): CustomNodeWithDropdownReact;

  readonly title?: string | null;
  withTitle(title: string | null): CustomNodeWithDropdownReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): CustomNodeWithDropdownReact;
}

