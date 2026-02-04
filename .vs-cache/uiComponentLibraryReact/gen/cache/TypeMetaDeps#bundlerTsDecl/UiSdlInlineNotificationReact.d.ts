export interface UiSdlInlineNotificationReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlInlineNotificationReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlInlineNotificationReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlInlineNotificationReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlInlineNotificationReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlInlineNotificationReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlInlineNotificationReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlInlineNotificationReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlInlineNotificationReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlInlineNotificationReact;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlInlineNotificationReact;

  readonly icon?: boolean;
  withIcon(icon: boolean): UiSdlInlineNotificationReact;

  readonly firstButtonConfig?: UiSdlButton | null;
  withFirstButtonConfig(firstButtonConfig: IUiSdlButton | null): UiSdlInlineNotificationReact;

  readonly secondButtonConfig?: UiSdlButton | null;
  withSecondButtonConfig(secondButtonConfig: IUiSdlButton | null): UiSdlInlineNotificationReact;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlInlineNotificationReact;

  readonly closable?: boolean;
  withClosable(closable: boolean): UiSdlInlineNotificationReact;
}

