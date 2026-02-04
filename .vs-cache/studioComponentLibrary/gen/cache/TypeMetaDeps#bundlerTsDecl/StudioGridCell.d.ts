export interface StudioGridCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioGridCell;

  readonly id?: string | null;
  withId(id: string | null): StudioGridCell;

  readonly name?: string | null;
  withName(name: string | null): StudioGridCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioGridCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioGridCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioGridCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioGridCell;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): StudioGridCell;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): StudioGridCell;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): StudioGridCell;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): StudioGridCell;

  readonly content?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withContent(content: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCell;

  readonly link?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withLink(link: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCell;

  readonly contentMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null>;
  withContentMap(contentMap: C3.Map<string | null, UiSdlDynamicValueSpec | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null}): StudioGridCell;

  readonly usage?: string | null;
  withUsage(usage: string | null): StudioGridCell;

  readonly prependedAvatar?: StudioGridCellAvatarSetting | null;
  withPrependedAvatar(prependedAvatar: IStudioGridCellAvatarSetting | null): StudioGridCell;

  readonly appendedAvatar?: StudioGridCellAvatarSetting | null;
  withAppendedAvatar(appendedAvatar: IStudioGridCellAvatarSetting | null): StudioGridCell;

  readonly tooltip?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withTooltip(tooltip: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCell;

  readonly tooltipMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null | string | null | null>;
  withTooltipMap(tooltipMap: C3.Map<string | null, UiSdlDynamicValueSpec | null | string | null | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null | string | null | null}): StudioGridCell;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): StudioGridCell;

  readonly truncatedCharacterLimit?: number | null;
  withTruncatedCharacterLimit(truncatedCharacterLimit: number | null): StudioGridCell;

  readonly capitalizeText?: boolean;
  withCapitalizeText(capitalizeText: boolean): StudioGridCell;

  readonly className?: string | null;
  withClassName(className: string | null): StudioGridCell;
}

