export interface InlineNotificationListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InlineNotificationListReact;

  readonly id?: string | null;
  withId(id: string | null): InlineNotificationListReact;

  readonly name?: string | null;
  withName(name: string | null): InlineNotificationListReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InlineNotificationListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InlineNotificationListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InlineNotificationListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InlineNotificationListReact;

  readonly inlineNotificationList?: C3.Array<InlineNotification | null>;
  withInlineNotificationList(inlineNotificationList: C3.Array<InlineNotification | null> | Array<IInlineNotification | null>): InlineNotificationListReact;
}

