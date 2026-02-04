export interface StatusPillGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StatusPillGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): StatusPillGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): StatusPillGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StatusPillGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StatusPillGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StatusPillGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StatusPillGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): StatusPillGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): StatusPillGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): StatusPillGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): StatusPillGridCellReact;

  readonly content: string;
  withContent(content: string): StatusPillGridCellReact;

  readonly contentMap?: Obj | null;
  withContentMap(contentMap: IObj | null): StatusPillGridCellReact;

  readonly icon?: string | null;
  withIcon(icon: string | null): StatusPillGridCellReact;

  readonly iconMap?: Obj | null;
  withIconMap(iconMap: IObj | null): StatusPillGridCellReact;

  readonly color?: string | null;
  withColor(color: string | null): StatusPillGridCellReact;

  readonly colorMap?: Obj | null;
  withColorMap(colorMap: IObj | null): StatusPillGridCellReact;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): StatusPillGridCellReact;

  readonly onClick?: λNullConsumer | null;
  withOnClick(onClick: λNullConsumer | null): StatusPillGridCellReact;

  readonly tooltipPosition?: string | null;
  withTooltipPosition(tooltipPosition: string | null): StatusPillGridCellReact;
}


interface λNullConsumer {
  (): void
}
