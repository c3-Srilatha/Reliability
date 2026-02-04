export interface AvatarWithTextGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AvatarWithTextGridCell;

  readonly id?: string | null;
  withId(id: string | null): AvatarWithTextGridCell;

  readonly name?: string | null;
  withName(name: string | null): AvatarWithTextGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): AvatarWithTextGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): AvatarWithTextGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): AvatarWithTextGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): AvatarWithTextGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): AvatarWithTextGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): AvatarWithTextGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): AvatarWithTextGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): AvatarWithTextGridCell;

  readonly titleContent?: UiSdlFieldBasedDataSpecSetting | null;
  withTitleContent(titleContent: IUiSdlFieldBasedDataSpecSetting | null): AvatarWithTextGridCell;

  readonly titleContentMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null>;
  withTitleContentMap(titleContentMap: C3.Map<string | null, UiSdlDynamicValueSpec | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null}): AvatarWithTextGridCell;

  readonly prependedAvatar?: GridCellAvatarSetting | null;
  withPrependedAvatar(prependedAvatar: IGridCellAvatarSetting | null): AvatarWithTextGridCell;

  readonly subtitleContent?: UiSdlFieldBasedDataSpecSetting | null;
  withSubtitleContent(subtitleContent: IUiSdlFieldBasedDataSpecSetting | null): AvatarWithTextGridCell;

  readonly subtitleContentMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null>;
  withSubtitleContentMap(subtitleContentMap: C3.Map<string | null, UiSdlDynamicValueSpec | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null}): AvatarWithTextGridCell;

  readonly isClickable?: boolean;
  withIsClickable(isClickable: boolean): AvatarWithTextGridCell;
}

