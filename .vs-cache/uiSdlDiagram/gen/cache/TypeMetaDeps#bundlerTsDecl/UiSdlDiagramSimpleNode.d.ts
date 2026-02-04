export interface UiSdlDiagramSimpleNode {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramSimpleNode;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramSimpleNode;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramSimpleNode;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramSimpleNode;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramSimpleNode;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramSimpleNode;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramSimpleNode;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramSimpleNode;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramSimpleNode;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramSimpleNode;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramSimpleNode;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramSimpleNode;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramSimpleNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramSimpleNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramSimpleNode;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramSimpleNode;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramSimpleNode;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramSimpleNode;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramSimpleNode;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramSimpleNode;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramSimpleNode;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramSimpleNode;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramSimpleNode;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramSimpleNode;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramSimpleNode;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramSimpleNode;

  readonly shapeId?: string | null;
  withShapeId(shapeId: string | null): UiSdlDiagramSimpleNode;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlDiagramSimpleNode;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlDiagramSimpleNode;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlDiagramSimpleNode;

  readonly subtitleTooltipKey?: string | null;
  withSubtitleTooltipKey(subtitleTooltipKey: string | null): UiSdlDiagramSimpleNode;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlDiagramSimpleNode;

  readonly colorClass?: string | null;
  withColorClass(colorClass: string | null): UiSdlDiagramSimpleNode;

  readonly errors?: C3.Array<string | null>;
  withErrors(errors: C3.Array<string | null> | Array<string | null>): UiSdlDiagramSimpleNode;

  readonly childContainerScrollTop?: number | null;
  withChildContainerScrollTop(childContainerScrollTop: number | null): UiSdlDiagramSimpleNode;

  readonly moveEdgesOnScroll?: any;
  withMoveEdgesOnScroll(moveEdgesOnScroll: any): UiSdlDiagramSimpleNode;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramSimpleNode;

  readonly width?: number | null;
  withWidth(width: number | null): UiSdlDiagramSimpleNode;

  readonly minifiedWidth?: number | null;
  withMinifiedWidth(minifiedWidth: number | null): UiSdlDiagramSimpleNode;

  readonly minifiedHeight?: number | null;
  withMinifiedHeight(minifiedHeight: number | null): UiSdlDiagramSimpleNode;

  readonly collapsedHeight?: number | null;
  withCollapsedHeight(collapsedHeight: number | null): UiSdlDiagramSimpleNode;

  readonly expandedHeight?: number | null;
  withExpandedHeight(expandedHeight: number | null): UiSdlDiagramSimpleNode;

  readonly spacingBetweenChildren?: number | null;
  withSpacingBetweenChildren(spacingBetweenChildren: number | null): UiSdlDiagramSimpleNode;

  readonly spacingBeforeChildren?: number | null;
  withSpacingBeforeChildren(spacingBeforeChildren: number | null): UiSdlDiagramSimpleNode;

  readonly spacingAfterChildren?: number | null;
  withSpacingAfterChildren(spacingAfterChildren: number | null): UiSdlDiagramSimpleNode;

  readonly maximumChildrenDisplayed?: number | null;
  withMaximumChildrenDisplayed(maximumChildrenDisplayed: number | null): UiSdlDiagramSimpleNode;

  readonly borderClass?: string | null;
  withBorderClass(borderClass: string | null): UiSdlDiagramSimpleNode;

  readonly backgroundClass?: string | null;
  withBackgroundClass(backgroundClass: string | null): UiSdlDiagramSimpleNode;

  readonly layeredIconClass?: string | null;
  withLayeredIconClass(layeredIconClass: string | null): UiSdlDiagramSimpleNode;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlDiagramSimpleNode;
}

