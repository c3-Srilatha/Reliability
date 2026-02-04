export interface UiSdlSearchQueryChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSearchQueryChangePayload;

  readonly searchDataSourceId?: string | null;
  withSearchDataSourceId(searchDataSourceId: string | null): UiSdlSearchQueryChangePayload;

  readonly caseSensitive?: boolean;
  withCaseSensitive(caseSensitive: boolean): UiSdlSearchQueryChangePayload;

  readonly dataSource?: string | null;
  withDataSource(dataSource: string | null): UiSdlSearchQueryChangePayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSearchQueryChangePayload;

  readonly filterComparator?: string | null;
  withFilterComparator(filterComparator: string | null): UiSdlSearchQueryChangePayload;

  readonly generateFilter?: boolean;
  withGenerateFilter(generateFilter: boolean): UiSdlSearchQueryChangePayload;

  readonly queryString?: string | null;
  withQueryString(queryString: string | null): UiSdlSearchQueryChangePayload;

  readonly searchFields?: C3.Array<string | null>;
  withSearchFields(searchFields: C3.Array<string | null> | Array<string | null>): UiSdlSearchQueryChangePayload;
}

