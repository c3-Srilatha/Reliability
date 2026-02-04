export interface LoaderList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): LoaderList;

  readonly id?: string | null;
  withId(id: string | null): LoaderList;

  readonly name?: string | null;
  withName(name: string | null): LoaderList;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): LoaderList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): LoaderList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): LoaderList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): LoaderList;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): LoaderList;

  readonly loadingItems?: C3.Array<LoadingListItem | null>;
  withLoadingItems(loadingItems: C3.Array<LoadingListItem | null> | Array<ILoadingListItem | null>): LoaderList;
}

