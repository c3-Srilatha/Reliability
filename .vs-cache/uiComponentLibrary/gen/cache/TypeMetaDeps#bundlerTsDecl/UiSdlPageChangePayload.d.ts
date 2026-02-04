export interface UiSdlPageChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlPageChangePayload;

  readonly paginationDataSkipSize: number;
  withPaginationDataSkipSize(paginationDataSkipSize: number): UiSdlPageChangePayload;

  readonly pageSize: number;
  withPageSize(pageSize: number): UiSdlPageChangePayload;
}

