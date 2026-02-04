export interface UiSdlI18nContext {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlI18nContext;

  readonly id?: string | null;
  withId(id: string | null): UiSdlI18nContext;

  readonly name?: string | null;
  withName(name: string | null): UiSdlI18nContext;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlI18nContext;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlI18nContext;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlI18nContext;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlI18nContext;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): UiSdlI18nContext;

  readonly preferredLocale?: Locale | null;
  withPreferredLocale(preferredLocale: ILocale | null): UiSdlI18nContext;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlI18nContext;
}

