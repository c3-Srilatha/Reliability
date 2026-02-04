export interface UiSdlI18nConfig {

  readonly parent?: UiSdlConfig | null;
  withParent(parent: IUiSdlConfig | null): UiSdlI18nConfig;

  readonly locales?: C3.Array<Locale | null>;
  withLocales(locales: C3.Array<Locale | null> | Array<ILocale | null>): UiSdlI18nConfig;
}

