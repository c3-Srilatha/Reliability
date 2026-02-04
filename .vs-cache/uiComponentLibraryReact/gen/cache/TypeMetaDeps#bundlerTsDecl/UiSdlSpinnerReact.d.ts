export interface UiSdlSpinnerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSpinnerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSpinnerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSpinnerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSpinnerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSpinnerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSpinnerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSpinnerReact;

  readonly loadingText?: string | null;
  withLoadingText(loadingText: string | null): UiSdlSpinnerReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSpinnerReact;

  readonly isDataLoading?: boolean;
  withIsDataLoading(isDataLoading: boolean): UiSdlSpinnerReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlSpinnerReact;
}

