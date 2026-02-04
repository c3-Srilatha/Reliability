export interface StudioGridCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioGridCellReact;

  readonly id?: string | null;
  withId(id: string | null): StudioGridCellReact;

  readonly name?: string | null;
  withName(name: string | null): StudioGridCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioGridCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioGridCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioGridCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioGridCellReact;

  readonly dataItem?: UiSdlDataGridDataItem | null;
  withDataItem(dataItem: IUiSdlDataGridDataItem | null): StudioGridCellReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): StudioGridCellReact;

  readonly columnProps?: UiSdlDataGridDataSpecColumnFieldSetting | null;
  withColumnProps(columnProps: IUiSdlDataGridDataSpecColumnFieldSetting | null): StudioGridCellReact;

  readonly gridProps?: UiSdlDataGridConfig | null;
  withGridProps(gridProps: IUiSdlDataGridConfig | null): StudioGridCellReact;

  readonly content?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withContent(content: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCellReact;

  readonly link?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withLink(link: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCellReact;

  readonly contentMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null>;
  withContentMap(contentMap: C3.Map<string | null, UiSdlDynamicValueSpec | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null}): StudioGridCellReact;

  readonly usage?: string | null;
  withUsage(usage: string | null): StudioGridCellReact;

  readonly prependedAvatar?: StudioGridCellAvatarSetting | null;
  withPrependedAvatar(prependedAvatar: IStudioGridCellAvatarSetting | null): StudioGridCellReact;

  readonly appendedAvatar?: StudioGridCellAvatarSetting | null;
  withAppendedAvatar(appendedAvatar: IStudioGridCellAvatarSetting | null): StudioGridCellReact;

  readonly tooltip?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withTooltip(tooltip: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCellReact;

  readonly tooltipMap?: C3.Map<string | null, UiSdlDynamicValueSpec | null | string | null | null>;
  withTooltipMap(tooltipMap: C3.Map<string | null, UiSdlDynamicValueSpec | null | string | null | null> | {[key: string | null]: IUiSdlDynamicValueSpec | null | string | null | null}): StudioGridCellReact;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): StudioGridCellReact;

  readonly truncatedCharacterLimit?: number | null;
  withTruncatedCharacterLimit(truncatedCharacterLimit: number | null): StudioGridCellReact;

  readonly capitalizeText?: boolean;
  withCapitalizeText(capitalizeText: boolean): StudioGridCellReact;

  readonly className?: string | null;
  withClassName(className: string | null): StudioGridCellReact;
}

