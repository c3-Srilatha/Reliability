export interface UiSdlSearchable {

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlSearchable;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlSearchable;

  readonly isLoading?: boolean;
  withIsLoading(isLoading: boolean): UiSdlSearchable;

  readonly replaceArgument?: string | null;
  withReplaceArgument(replaceArgument: string | null): UiSdlSearchable;

  readonly dataSourceFieldMaps?: C3.Map<string | null, C3.Map<string | null, ValueType | null>>;
  withDataSourceFieldMaps(dataSourceFieldMaps: C3.Map<string | null, C3.Map<string | null, ValueType | null>> | {[key: string | null]: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}}): UiSdlSearchable;

  readonly activeFilters?: C3.Map<string | null, string | null>;
  withActiveFilters(activeFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlSearchable;
}

