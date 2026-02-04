export interface UiSdlFilterableContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilterableContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFilterableContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFilterableContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFilterableContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilterableContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilterableContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilterableContainer;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFilterableContainer;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlFilterableContainer;

  readonly filterLabel?: string | null;
  withFilterLabel(filterLabel: string | null): UiSdlFilterableContainer;

  readonly filterComponent?: UiSdlComponentRef<UiSdlSingleSearch | null> | null | UiSdlSingleSearch | null | null;
  withFilterComponent(filterComponent: IUiSdlComponentRef<UiSdlSingleSearch | null> | null | IUiSdlSingleSearch | null | null): UiSdlFilterableContainer;

  readonly filterValue?: string | null;
  withFilterValue(filterValue: string | null): UiSdlFilterableContainer;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent | null> | null>): UiSdlFilterableContainer;
}

