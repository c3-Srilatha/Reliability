export interface UiSdlSpinner {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSpinner;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSpinner;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSpinner;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSpinner;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSpinner;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSpinner;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSpinner;

  readonly loadingText?: string | null;
  withLoadingText(loadingText: string | null): UiSdlSpinner;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSpinner;

  readonly isDataLoading?: boolean;
  withIsDataLoading(isDataLoading: boolean): UiSdlSpinner;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlSpinner;
}

