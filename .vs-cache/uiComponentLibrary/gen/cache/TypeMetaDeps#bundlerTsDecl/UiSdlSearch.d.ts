export interface UiSdlSearch {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearch;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearch;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearch;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSearch;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearch;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearch;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearch;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlSearch;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlSearch;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlSearch;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlSearch;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlSearch;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlSearch;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlSearch;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlSearch;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSearch;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSearch;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSearch;

  readonly generateFilter?: boolean;
  withGenerateFilter(generateFilter: boolean): UiSdlSearch;

  readonly hint?: string | null;
  withHint(hint: string | null): UiSdlSearch;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSearch;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlSearch;

  readonly loadInitialData?: boolean;
  withLoadInitialData(loadInitialData: boolean): UiSdlSearch;

  readonly noResultsMessage?: string | null;
  withNoResultsMessage(noResultsMessage: string | null): UiSdlSearch;

  readonly openOnFocus?: boolean;
  withOpenOnFocus(openOnFocus: boolean): UiSdlSearch;

  readonly openOnResultsChange?: boolean;
  withOpenOnResultsChange(openOnResultsChange: boolean): UiSdlSearch;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSearch;

  readonly searchDataSource?: string | null;
  withSearchDataSource(searchDataSource: string | null): UiSdlSearch;

  readonly searchFields?: C3.Array<string | null>;
  withSearchFields(searchFields: C3.Array<string | null> | Array<string | null>): UiSdlSearch;
}

