export interface UiSdlSearchReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSearchReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSearchReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSearchReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSearchReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSearchReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSearchReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSearchReact;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlSearchReact;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlSearchReact;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlSearchReact;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlSearchReact;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlSearchReact;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlSearchReact;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlSearchReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlSearchReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlSearchReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSearchReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlSearchReact;

  readonly generateFilter?: boolean;
  withGenerateFilter(generateFilter: boolean): UiSdlSearchReact;

  readonly hint?: string | null;
  withHint(hint: string | null): UiSdlSearchReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlSearchReact;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlSearchReact;

  readonly loadInitialData?: boolean;
  withLoadInitialData(loadInitialData: boolean): UiSdlSearchReact;

  readonly noResultsMessage?: string | null;
  withNoResultsMessage(noResultsMessage: string | null): UiSdlSearchReact;

  readonly openOnFocus?: boolean;
  withOpenOnFocus(openOnFocus: boolean): UiSdlSearchReact;

  readonly openOnResultsChange?: boolean;
  withOpenOnResultsChange(openOnResultsChange: boolean): UiSdlSearchReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlSearchReact;

  readonly searchDataSource?: string | null;
  withSearchDataSource(searchDataSource: string | null): UiSdlSearchReact;

  readonly searchFields?: C3.Array<string | null>;
  withSearchFields(searchFields: C3.Array<string | null> | Array<string | null>): UiSdlSearchReact;
}

