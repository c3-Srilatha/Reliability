export interface PopupFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PopupFilter;

  readonly id?: string | null;
  withId(id: string | null): PopupFilter;

  readonly name?: string | null;
  withName(name: string | null): PopupFilter;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): PopupFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PopupFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PopupFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PopupFilter;

  readonly open?: boolean;
  withOpen(open: boolean): PopupFilter;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): PopupFilter;

  readonly filterOptions?: C3.Array<PopupFilterOption | null>;
  withFilterOptions(filterOptions: C3.Array<PopupFilterOption | null> | Array<IPopupFilterOption | null>): PopupFilter;

  readonly selectedFilterOption?: PopupFilterOption | null;
  withSelectedFilterOption(selectedFilterOption: IPopupFilterOption | null): PopupFilter;

  readonly filterOptionPlaceholder?: string | null;
  withFilterOptionPlaceholder(filterOptionPlaceholder: string | null): PopupFilter;

  readonly currentFilterData?: C3.Array<PopupFilterDataItem | null>;
  withCurrentFilterData(currentFilterData: C3.Array<PopupFilterDataItem | null> | Array<IPopupFilterDataItem | null>): PopupFilter;

  readonly filtersData?: C3.Array<C3.Array<PopupFilterDataItem | null>>;
  withFiltersData(filtersData: C3.Array<C3.Array<PopupFilterDataItem | null>> | Array<C3.Array<PopupFilterDataItem | null> | Array<IPopupFilterDataItem | null>>): PopupFilter;
}

