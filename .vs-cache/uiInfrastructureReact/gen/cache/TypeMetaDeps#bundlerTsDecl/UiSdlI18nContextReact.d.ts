export interface UiSdlI18nContextReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlI18nContextReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlI18nContextReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlI18nContextReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlI18nContextReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlI18nContextReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlI18nContextReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlI18nContextReact;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): UiSdlI18nContextReact;

  readonly preferredLocale?: Locale | null;
  withPreferredLocale(preferredLocale: ILocale | null): UiSdlI18nContextReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlI18nContextReact;
}

