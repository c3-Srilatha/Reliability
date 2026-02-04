export interface UiSdlInlineNotification {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlInlineNotification;

  readonly id?: string | null;
  withId(id: string | null): UiSdlInlineNotification;

  readonly name?: string | null;
  withName(name: string | null): UiSdlInlineNotification;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlInlineNotification;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlInlineNotification;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlInlineNotification;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlInlineNotification;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlInlineNotification;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlInlineNotification;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlInlineNotification;

  readonly icon?: boolean;
  withIcon(icon: boolean): UiSdlInlineNotification;

  readonly firstButtonConfig?: UiSdlButton | null;
  withFirstButtonConfig(firstButtonConfig: IUiSdlButton | null): UiSdlInlineNotification;

  readonly secondButtonConfig?: UiSdlButton | null;
  withSecondButtonConfig(secondButtonConfig: IUiSdlButton | null): UiSdlInlineNotification;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlInlineNotification;

  readonly closable?: boolean;
  withClosable(closable: boolean): UiSdlInlineNotification;
}

