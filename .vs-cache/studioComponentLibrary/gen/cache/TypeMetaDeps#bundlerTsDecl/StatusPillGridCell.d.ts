export interface StatusPillGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StatusPillGridCell;

  readonly id?: string | null;
  withId(id: string | null): StatusPillGridCell;

  readonly name?: string | null;
  withName(name: string | null): StatusPillGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StatusPillGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StatusPillGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StatusPillGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StatusPillGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): StatusPillGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): StatusPillGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): StatusPillGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): StatusPillGridCell;

  readonly content: string;
  withContent(content: string): StatusPillGridCell;

  readonly contentMap?: Obj | null;
  withContentMap(contentMap: IObj | null): StatusPillGridCell;

  readonly icon?: string | null;
  withIcon(icon: string | null): StatusPillGridCell;

  readonly iconMap?: Obj | null;
  withIconMap(iconMap: IObj | null): StatusPillGridCell;

  readonly color?: string | null;
  withColor(color: string | null): StatusPillGridCell;

  readonly colorMap?: Obj | null;
  withColorMap(colorMap: IObj | null): StatusPillGridCell;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): StatusPillGridCell;

  readonly onClick?: λNullConsumer | null;
  withOnClick(onClick: λNullConsumer | null): StatusPillGridCell;

  readonly tooltipPosition?: string | null;
  withTooltipPosition(tooltipPosition: string | null): StatusPillGridCell;
}


interface λNullConsumer {
  (): void
}
