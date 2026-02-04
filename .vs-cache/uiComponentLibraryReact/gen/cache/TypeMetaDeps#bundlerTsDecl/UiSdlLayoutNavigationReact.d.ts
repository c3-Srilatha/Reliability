export interface UiSdlLayoutNavigationReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutNavigationReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutNavigationReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutNavigationReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlLayoutNavigationReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutNavigationReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutNavigationReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutNavigationReact;

  readonly navigation?: UiSdlComponentRef<UiSdlNavMenu | null> | null;
  withNavigation(navigation: IUiSdlComponentRef<UiSdlNavMenu | null> | null): UiSdlLayoutNavigationReact;

  readonly content?: UiSdlComponentRef<UiSdlContentLayout | null> | null;
  withContent(content: IUiSdlComponentRef<UiSdlContentLayout | null> | null): UiSdlLayoutNavigationReact;

  readonly pageTitle?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withPageTitle(pageTitle: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlLayoutNavigationReact;

  readonly pageBreadcrumbs?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withPageBreadcrumbs(pageBreadcrumbs: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlLayoutNavigationReact;
}

