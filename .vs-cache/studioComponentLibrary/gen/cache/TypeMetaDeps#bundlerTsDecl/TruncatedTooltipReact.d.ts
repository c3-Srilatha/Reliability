export interface TruncatedTooltipReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TruncatedTooltipReact;

  readonly id?: string | null;
  withId(id: string | null): TruncatedTooltipReact;

  readonly name?: string | null;
  withName(name: string | null): TruncatedTooltipReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TruncatedTooltipReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TruncatedTooltipReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TruncatedTooltipReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TruncatedTooltipReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): TruncatedTooltipReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): TruncatedTooltipReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): TruncatedTooltipReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): TruncatedTooltipReact;

  readonly content?: string | null;
  withContent(content: string | null): TruncatedTooltipReact;

  readonly position?: string | null;
  withPosition(position: string | null): TruncatedTooltipReact;

  readonly popupSize?: string | null;
  withPopupSize(popupSize: string | null): TruncatedTooltipReact;

  readonly truncatedContent?: string | null;
  withTruncatedContent(truncatedContent: string | null): TruncatedTooltipReact;
}

