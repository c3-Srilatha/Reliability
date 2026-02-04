export interface UiSdlSessionExpiredPage {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSessionExpiredPage;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSessionExpiredPage;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSessionExpiredPage;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSessionExpiredPage;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSessionExpiredPage;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSessionExpiredPage;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSessionExpiredPage;

  readonly redirectUrl?: string | null;
  withRedirectUrl(redirectUrl: string | null): UiSdlSessionExpiredPage;
}

