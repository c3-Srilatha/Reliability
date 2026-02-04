export interface UiSdlFilterableContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilterableContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFilterableContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFilterableContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFilterableContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilterableContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilterableContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilterableContainerReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFilterableContainerReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlFilterableContainerReact;

  readonly filterLabel?: string | null;
  withFilterLabel(filterLabel: string | null): UiSdlFilterableContainerReact;

  readonly filterComponent?: UiSdlComponentRef<UiSdlSingleSearch | null> | null | UiSdlSingleSearch | null | null;
  withFilterComponent(filterComponent: IUiSdlComponentRef<UiSdlSingleSearch | null> | null | IUiSdlSingleSearch | null | null): UiSdlFilterableContainerReact;

  readonly filterValue?: string | null;
  withFilterValue(filterValue: string | null): UiSdlFilterableContainerReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent | null> | null>): UiSdlFilterableContainerReact;
}

