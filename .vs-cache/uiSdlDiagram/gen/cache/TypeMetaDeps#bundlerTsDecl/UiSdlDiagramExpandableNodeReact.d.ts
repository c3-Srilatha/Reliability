export interface UiSdlDiagramExpandableNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramExpandableNodeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramExpandableNodeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramExpandableNodeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramExpandableNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramExpandableNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramExpandableNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramExpandableNodeReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramExpandableNodeReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramExpandableNodeReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramExpandableNodeReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramExpandableNodeReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramExpandableNodeReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramExpandableNodeReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramExpandableNodeReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramExpandableNodeReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramExpandableNodeReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramExpandableNodeReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramExpandableNodeReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramExpandableNodeReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramExpandableNodeReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramExpandableNodeReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramExpandableNodeReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramExpandableNodeReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramExpandableNodeReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramExpandableNodeReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramExpandableNodeReact;

  readonly shapeId?: string | null;
  withShapeId(shapeId: string | null): UiSdlDiagramExpandableNodeReact;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlDiagramExpandableNodeReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlDiagramExpandableNodeReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlDiagramExpandableNodeReact;

  readonly subtitleTooltipKey?: string | null;
  withSubtitleTooltipKey(subtitleTooltipKey: string | null): UiSdlDiagramExpandableNodeReact;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlDiagramExpandableNodeReact;

  readonly colorClass?: string | null;
  withColorClass(colorClass: string | null): UiSdlDiagramExpandableNodeReact;

  readonly errors?: C3.Array<string | null>;
  withErrors(errors: C3.Array<string | null> | Array<string | null>): UiSdlDiagramExpandableNodeReact;

  readonly childContainerScrollTop?: number | null;
  withChildContainerScrollTop(childContainerScrollTop: number | null): UiSdlDiagramExpandableNodeReact;

  readonly moveEdgesOnScroll?: any;
  withMoveEdgesOnScroll(moveEdgesOnScroll: any): UiSdlDiagramExpandableNodeReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramExpandableNodeReact;

  readonly width?: number | null;
  withWidth(width: number | null): UiSdlDiagramExpandableNodeReact;

  readonly minifiedWidth?: number | null;
  withMinifiedWidth(minifiedWidth: number | null): UiSdlDiagramExpandableNodeReact;

  readonly minifiedHeight?: number | null;
  withMinifiedHeight(minifiedHeight: number | null): UiSdlDiagramExpandableNodeReact;

  readonly collapsedHeight?: number | null;
  withCollapsedHeight(collapsedHeight: number | null): UiSdlDiagramExpandableNodeReact;

  readonly expandedHeight?: number | null;
  withExpandedHeight(expandedHeight: number | null): UiSdlDiagramExpandableNodeReact;

  readonly spacingBetweenChildren?: number | null;
  withSpacingBetweenChildren(spacingBetweenChildren: number | null): UiSdlDiagramExpandableNodeReact;

  readonly spacingBeforeChildren?: number | null;
  withSpacingBeforeChildren(spacingBeforeChildren: number | null): UiSdlDiagramExpandableNodeReact;

  readonly spacingAfterChildren?: number | null;
  withSpacingAfterChildren(spacingAfterChildren: number | null): UiSdlDiagramExpandableNodeReact;

  readonly maximumChildrenDisplayed?: number | null;
  withMaximumChildrenDisplayed(maximumChildrenDisplayed: number | null): UiSdlDiagramExpandableNodeReact;

  readonly borderClass?: string | null;
  withBorderClass(borderClass: string | null): UiSdlDiagramExpandableNodeReact;

  readonly backgroundClass?: string | null;
  withBackgroundClass(backgroundClass: string | null): UiSdlDiagramExpandableNodeReact;

  readonly layeredIconClass?: string | null;
  withLayeredIconClass(layeredIconClass: string | null): UiSdlDiagramExpandableNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlDiagramExpandableNodeReact;

  readonly children?: C3.Array<UiSdlDiagramSimpleNodeChild | null>;
  withChildren(children: C3.Array<UiSdlDiagramSimpleNodeChild | null> | Array<IUiSdlDiagramSimpleNodeChild | null>): UiSdlDiagramExpandableNodeReact;
}

