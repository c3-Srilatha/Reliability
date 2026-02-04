export interface UiSdlAppContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAppContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAppContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAppContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlAppContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAppContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAppContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAppContainer;

  readonly siteId?: string | null;
  withSiteId(siteId: string | null): UiSdlAppContainer;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlAppContainer;
}

