export interface TooltipGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TooltipGridCell;

  readonly id?: string | null;
  withId(id: string | null): TooltipGridCell;

  readonly name?: string | null;
  withName(name: string | null): TooltipGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TooltipGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TooltipGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TooltipGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TooltipGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): TooltipGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): TooltipGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): TooltipGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): TooltipGridCell;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): TooltipGridCell;

  readonly truncateCharacterLimit?: number | null;
  withTruncateCharacterLimit(truncateCharacterLimit: number | null): TooltipGridCell;

  readonly leadingCharsLimit?: number | null;
  withLeadingCharsLimit(leadingCharsLimit: number | null): TooltipGridCell;

  readonly trailingCharsLimit?: number | null;
  withTrailingCharsLimit(trailingCharsLimit: number | null): TooltipGridCell;

  readonly position?: string | null;
  withPosition(position: string | null): TooltipGridCell;

  readonly popupSize?: string | null;
  withPopupSize(popupSize: string | null): TooltipGridCell;
}

