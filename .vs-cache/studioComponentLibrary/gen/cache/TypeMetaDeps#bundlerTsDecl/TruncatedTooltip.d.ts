export interface TruncatedTooltip {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TruncatedTooltip;

  readonly id?: string | null;
  withId(id: string | null): TruncatedTooltip;

  readonly name?: string | null;
  withName(name: string | null): TruncatedTooltip;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TruncatedTooltip;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TruncatedTooltip;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TruncatedTooltip;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TruncatedTooltip;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): TruncatedTooltip;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): TruncatedTooltip;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): TruncatedTooltip;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): TruncatedTooltip;

  readonly content?: string | null;
  withContent(content: string | null): TruncatedTooltip;

  readonly position?: string | null;
  withPosition(position: string | null): TruncatedTooltip;

  readonly popupSize?: string | null;
  withPopupSize(popupSize: string | null): TruncatedTooltip;

  readonly truncatedContent?: string | null;
  withTruncatedContent(truncatedContent: string | null): TruncatedTooltip;
}

