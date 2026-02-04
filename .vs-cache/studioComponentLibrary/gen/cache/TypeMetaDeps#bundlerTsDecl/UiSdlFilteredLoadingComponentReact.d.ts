export interface UiSdlFilteredLoadingComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilteredLoadingComponentReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFilteredLoadingComponentReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFilteredLoadingComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFilteredLoadingComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilteredLoadingComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilteredLoadingComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilteredLoadingComponentReact;

  readonly loadingText?: string | null;
  withLoadingText(loadingText: string | null): UiSdlFilteredLoadingComponentReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlFilteredLoadingComponentReact;

  readonly isDataLoading?: boolean;
  withIsDataLoading(isDataLoading: boolean): UiSdlFilteredLoadingComponentReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlFilteredLoadingComponentReact;

  readonly leftSidePanel?: UiSdlComponentRef<UiSdlFilterPanel | null> | null;
  withLeftSidePanel(leftSidePanel: IUiSdlComponentRef<UiSdlFilterPanel | null> | null): UiSdlFilteredLoadingComponentReact;

  readonly loadingChildIndex?: number | null;
  withLoadingChildIndex(loadingChildIndex: number | null): UiSdlFilteredLoadingComponentReact;
}

