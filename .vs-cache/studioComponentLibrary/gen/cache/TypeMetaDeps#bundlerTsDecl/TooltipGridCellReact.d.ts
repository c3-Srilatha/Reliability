export interface TooltipGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TooltipGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): TooltipGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): TooltipGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TooltipGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TooltipGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TooltipGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TooltipGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): TooltipGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): TooltipGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): TooltipGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): TooltipGridCellReact;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): TooltipGridCellReact;

  readonly truncateCharacterLimit?: number | null;
  withTruncateCharacterLimit(truncateCharacterLimit: number | null): TooltipGridCellReact;

  readonly leadingCharsLimit?: number | null;
  withLeadingCharsLimit(leadingCharsLimit: number | null): TooltipGridCellReact;

  readonly trailingCharsLimit?: number | null;
  withTrailingCharsLimit(trailingCharsLimit: number | null): TooltipGridCellReact;

  readonly position?: string | null;
  withPosition(position: string | null): TooltipGridCellReact;

  readonly popupSize?: string | null;
  withPopupSize(popupSize: string | null): TooltipGridCellReact;
}

