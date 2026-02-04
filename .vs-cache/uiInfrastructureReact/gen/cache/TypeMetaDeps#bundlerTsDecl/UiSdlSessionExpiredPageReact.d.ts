export interface UiSdlSessionExpiredPageReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSessionExpiredPageReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSessionExpiredPageReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSessionExpiredPageReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSessionExpiredPageReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSessionExpiredPageReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSessionExpiredPageReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSessionExpiredPageReact;

  readonly redirectUrl?: string | null;
  withRedirectUrl(redirectUrl: string | null): UiSdlSessionExpiredPageReact;
}

