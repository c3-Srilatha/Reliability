export interface UiSdlSortChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSortChangePayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlSortChangePayload;

  readonly descending?: boolean;
  withDescending(descending: boolean): UiSdlSortChangePayload;

  readonly sortNullsLast?: boolean;
  withSortNullsLast(sortNullsLast: boolean): UiSdlSortChangePayload;

  readonly caseInsensitiveSort?: boolean;
  withCaseInsensitiveSort(caseInsensitiveSort: boolean): UiSdlSortChangePayload;
}

