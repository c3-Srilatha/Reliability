export interface UiSdlAppContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAppContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAppContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAppContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlAppContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAppContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAppContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAppContainerReact;

  readonly siteId?: string | null;
  withSiteId(siteId: string | null): UiSdlAppContainerReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlAppContainerReact;
}

