export interface UiSdlDiagramSimpleNodeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramSimpleNodeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramSimpleNodeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramSimpleNodeReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramSimpleNodeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramSimpleNodeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramSimpleNodeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramSimpleNodeReact;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramSimpleNodeReact;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramSimpleNodeReact;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramSimpleNodeReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramSimpleNodeReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramSimpleNodeReact;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramSimpleNodeReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramSimpleNodeReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramSimpleNodeReact;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramSimpleNodeReact;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramSimpleNodeReact;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramSimpleNodeReact;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramSimpleNodeReact;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramSimpleNodeReact;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramSimpleNodeReact;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramSimpleNodeReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDiagramSimpleNodeReact;

  readonly titleClassName?: string | null;
  withTitleClassName(titleClassName: string | null): UiSdlDiagramSimpleNodeReact;

  readonly subtitleClassName?: string | null;
  withSubtitleClassName(subtitleClassName: string | null): UiSdlDiagramSimpleNodeReact;

  readonly iconClassName?: string | null;
  withIconClassName(iconClassName: string | null): UiSdlDiagramSimpleNodeReact;

  readonly shapeId?: string | null;
  withShapeId(shapeId: string | null): UiSdlDiagramSimpleNodeReact;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlDiagramSimpleNodeReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlDiagramSimpleNodeReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlDiagramSimpleNodeReact;

  readonly subtitleTooltipKey?: string | null;
  withSubtitleTooltipKey(subtitleTooltipKey: string | null): UiSdlDiagramSimpleNodeReact;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlDiagramSimpleNodeReact;

  readonly colorClass?: string | null;
  withColorClass(colorClass: string | null): UiSdlDiagramSimpleNodeReact;

  readonly errors?: C3.Array<string | null>;
  withErrors(errors: C3.Array<string | null> | Array<string | null>): UiSdlDiagramSimpleNodeReact;

  readonly childContainerScrollTop?: number | null;
  withChildContainerScrollTop(childContainerScrollTop: number | null): UiSdlDiagramSimpleNodeReact;

  readonly moveEdgesOnScroll?: any;
  withMoveEdgesOnScroll(moveEdgesOnScroll: any): UiSdlDiagramSimpleNodeReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramSimpleNodeReact;

  readonly width?: number | null;
  withWidth(width: number | null): UiSdlDiagramSimpleNodeReact;

  readonly minifiedWidth?: number | null;
  withMinifiedWidth(minifiedWidth: number | null): UiSdlDiagramSimpleNodeReact;

  readonly minifiedHeight?: number | null;
  withMinifiedHeight(minifiedHeight: number | null): UiSdlDiagramSimpleNodeReact;

  readonly collapsedHeight?: number | null;
  withCollapsedHeight(collapsedHeight: number | null): UiSdlDiagramSimpleNodeReact;

  readonly expandedHeight?: number | null;
  withExpandedHeight(expandedHeight: number | null): UiSdlDiagramSimpleNodeReact;

  readonly spacingBetweenChildren?: number | null;
  withSpacingBetweenChildren(spacingBetweenChildren: number | null): UiSdlDiagramSimpleNodeReact;

  readonly spacingBeforeChildren?: number | null;
  withSpacingBeforeChildren(spacingBeforeChildren: number | null): UiSdlDiagramSimpleNodeReact;

  readonly spacingAfterChildren?: number | null;
  withSpacingAfterChildren(spacingAfterChildren: number | null): UiSdlDiagramSimpleNodeReact;

  readonly maximumChildrenDisplayed?: number | null;
  withMaximumChildrenDisplayed(maximumChildrenDisplayed: number | null): UiSdlDiagramSimpleNodeReact;

  readonly borderClass?: string | null;
  withBorderClass(borderClass: string | null): UiSdlDiagramSimpleNodeReact;

  readonly backgroundClass?: string | null;
  withBackgroundClass(backgroundClass: string | null): UiSdlDiagramSimpleNodeReact;

  readonly layeredIconClass?: string | null;
  withLayeredIconClass(layeredIconClass: string | null): UiSdlDiagramSimpleNodeReact;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlDiagramSimpleNodeReact;
}

