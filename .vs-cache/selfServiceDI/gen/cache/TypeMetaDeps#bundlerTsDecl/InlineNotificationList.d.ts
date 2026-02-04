export interface InlineNotificationList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InlineNotificationList;

  readonly id?: string | null;
  withId(id: string | null): InlineNotificationList;

  readonly name?: string | null;
  withName(name: string | null): InlineNotificationList;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InlineNotificationList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InlineNotificationList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InlineNotificationList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InlineNotificationList;

  readonly inlineNotificationList?: C3.Array<InlineNotification | null>;
  withInlineNotificationList(inlineNotificationList: C3.Array<InlineNotification | null> | Array<IInlineNotification | null>): InlineNotificationList;
}

