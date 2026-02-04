export interface AvatarWithTextGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AvatarWithTextGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): AvatarWithTextGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): AvatarWithTextGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): AvatarWithTextGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): AvatarWithTextGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): AvatarWithTextGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): AvatarWithTextGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): AvatarWithTextGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): AvatarWithTextGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): AvatarWithTextGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): AvatarWithTextGridCellReact;

  readonly titleContent?: UiSdlFieldBasedDataSpecSetting | null;
  withTitleContent(titleContent: IUiSdlFieldBasedDataSpecSetting | null): AvatarWithTextGridCellReact;

  readonly titleContentMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null>;
  withTitleContentMap(titleContentMap: C3.Map<string | null, UiSdlDynamicValueSpec | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null}): AvatarWithTextGridCellReact;

  readonly prependedAvatar?: GridCellAvatarSetting | null;
  withPrependedAvatar(prependedAvatar: IGridCellAvatarSetting | null): AvatarWithTextGridCellReact;

  readonly subtitleContent?: UiSdlFieldBasedDataSpecSetting | null;
  withSubtitleContent(subtitleContent: IUiSdlFieldBasedDataSpecSetting | null): AvatarWithTextGridCellReact;

  readonly subtitleContentMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null>;
  withSubtitleContentMap(subtitleContentMap: C3.Map<string | null, UiSdlDynamicValueSpec | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null}): AvatarWithTextGridCellReact;

  readonly isClickable?: boolean;
  withIsClickable(isClickable: boolean): AvatarWithTextGridCellReact;
}

