export interface LoaderListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): LoaderListReact;

  readonly id?: string | null;
  withId(id: string | null): LoaderListReact;

  readonly name?: string | null;
  withName(name: string | null): LoaderListReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): LoaderListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): LoaderListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): LoaderListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): LoaderListReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): LoaderListReact;

  readonly loadingItems?: C3.Array<LoadingListItem | null>;
  withLoadingItems(loadingItems: C3.Array<LoadingListItem | null> | Array<ILoadingListItem | null>): LoaderListReact;
}

