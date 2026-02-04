export interface UiSdlFilteredLoadingComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilteredLoadingComponent;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFilteredLoadingComponent;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFilteredLoadingComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFilteredLoadingComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilteredLoadingComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilteredLoadingComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilteredLoadingComponent;

  readonly loadingText?: string | null;
  withLoadingText(loadingText: string | null): UiSdlFilteredLoadingComponent;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlFilteredLoadingComponent;

  readonly isDataLoading?: boolean;
  withIsDataLoading(isDataLoading: boolean): UiSdlFilteredLoadingComponent;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlFilteredLoadingComponent;

  readonly leftSidePanel?: UiSdlComponentRef<UiSdlFilterPanel | null> | null;
  withLeftSidePanel(leftSidePanel: IUiSdlComponentRef<UiSdlFilterPanel | null> | null): UiSdlFilteredLoadingComponent;

  readonly loadingChildIndex?: number | null;
  withLoadingChildIndex(loadingChildIndex: number | null): UiSdlFilteredLoadingComponent;
}

