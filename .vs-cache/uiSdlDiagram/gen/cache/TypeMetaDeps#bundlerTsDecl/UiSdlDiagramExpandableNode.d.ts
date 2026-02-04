export interface UiSdlDiagramExpandableNode {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramExpandableNode;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramExpandableNode;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramExpandableNode;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramExpandableNode;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramExpandableNode;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramExpandableNode;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramExpandableNode;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramExpandableNode;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramExpandableNode;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramExpandableNode;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramExpandableNode;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramExpandableNode;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramExpandableNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramExpandableNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramExpandableNode;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramExpandableNode;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramExpandableNode;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramExpandableNode;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramExpandableNode;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramExpandableNode;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramExpandableNode;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramExpandableNode;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramExpandableNode;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramExpandableNode;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramExpandableNode;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramExpandableNode;

  readonly shapeId?: string | null;
  withShapeId(shapeId: string | null): UiSdlDiagramExpandableNode;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlDiagramExpandableNode;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlDiagramExpandableNode;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlDiagramExpandableNode;

  readonly subtitleTooltipKey?: string | null;
  withSubtitleTooltipKey(subtitleTooltipKey: string | null): UiSdlDiagramExpandableNode;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlDiagramExpandableNode;

  readonly colorClass?: string | null;
  withColorClass(colorClass: string | null): UiSdlDiagramExpandableNode;

  readonly errors?: C3.Array<string | null>;
  withErrors(errors: C3.Array<string | null> | Array<string | null>): UiSdlDiagramExpandableNode;

  readonly childContainerScrollTop?: number | null;
  withChildContainerScrollTop(childContainerScrollTop: number | null): UiSdlDiagramExpandableNode;

  readonly moveEdgesOnScroll?: any;
  withMoveEdgesOnScroll(moveEdgesOnScroll: any): UiSdlDiagramExpandableNode;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramExpandableNode;

  readonly width?: number | null;
  withWidth(width: number | null): UiSdlDiagramExpandableNode;

  readonly minifiedWidth?: number | null;
  withMinifiedWidth(minifiedWidth: number | null): UiSdlDiagramExpandableNode;

  readonly minifiedHeight?: number | null;
  withMinifiedHeight(minifiedHeight: number | null): UiSdlDiagramExpandableNode;

  readonly collapsedHeight?: number | null;
  withCollapsedHeight(collapsedHeight: number | null): UiSdlDiagramExpandableNode;

  readonly expandedHeight?: number | null;
  withExpandedHeight(expandedHeight: number | null): UiSdlDiagramExpandableNode;

  readonly spacingBetweenChildren?: number | null;
  withSpacingBetweenChildren(spacingBetweenChildren: number | null): UiSdlDiagramExpandableNode;

  readonly spacingBeforeChildren?: number | null;
  withSpacingBeforeChildren(spacingBeforeChildren: number | null): UiSdlDiagramExpandableNode;

  readonly spacingAfterChildren?: number | null;
  withSpacingAfterChildren(spacingAfterChildren: number | null): UiSdlDiagramExpandableNode;

  readonly maximumChildrenDisplayed?: number | null;
  withMaximumChildrenDisplayed(maximumChildrenDisplayed: number | null): UiSdlDiagramExpandableNode;

  readonly borderClass?: string | null;
  withBorderClass(borderClass: string | null): UiSdlDiagramExpandableNode;

  readonly backgroundClass?: string | null;
  withBackgroundClass(backgroundClass: string | null): UiSdlDiagramExpandableNode;

  readonly layeredIconClass?: string | null;
  withLayeredIconClass(layeredIconClass: string | null): UiSdlDiagramExpandableNode;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlDiagramExpandableNode;

  readonly children?: C3.Array<UiSdlDiagramSimpleNodeChild | null>;
  withChildren(children: C3.Array<UiSdlDiagramSimpleNodeChild | null> | Array<IUiSdlDiagramSimpleNodeChild | null>): UiSdlDiagramExpandableNode;
}

