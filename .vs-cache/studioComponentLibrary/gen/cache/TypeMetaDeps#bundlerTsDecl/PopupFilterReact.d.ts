export interface PopupFilterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PopupFilterReact;

  readonly id?: string | null;
  withId(id: string | null): PopupFilterReact;

  readonly name?: string | null;
  withName(name: string | null): PopupFilterReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): PopupFilterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PopupFilterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PopupFilterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PopupFilterReact;

  readonly open?: boolean;
  withOpen(open: boolean): PopupFilterReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): PopupFilterReact;

  readonly filterOptions?: C3.Array<PopupFilterOption | null>;
  withFilterOptions(filterOptions: C3.Array<PopupFilterOption | null> | Array<IPopupFilterOption | null>): PopupFilterReact;

  readonly selectedFilterOption?: PopupFilterOption | null;
  withSelectedFilterOption(selectedFilterOption: IPopupFilterOption | null): PopupFilterReact;

  readonly filterOptionPlaceholder?: string | null;
  withFilterOptionPlaceholder(filterOptionPlaceholder: string | null): PopupFilterReact;

  readonly currentFilterData?: C3.Array<PopupFilterDataItem | null>;
  withCurrentFilterData(currentFilterData: C3.Array<PopupFilterDataItem | null> | Array<IPopupFilterDataItem | null>): PopupFilterReact;

  readonly filtersData?: C3.Array<C3.Array<PopupFilterDataItem | null>>;
  withFiltersData(filtersData: C3.Array<C3.Array<PopupFilterDataItem | null>> | Array<C3.Array<PopupFilterDataItem | null> | Array<IPopupFilterDataItem | null>>): PopupFilterReact;
}

