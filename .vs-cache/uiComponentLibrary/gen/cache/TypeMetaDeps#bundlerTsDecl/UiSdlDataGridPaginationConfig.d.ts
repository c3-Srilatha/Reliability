export interface UiSdlDataGridPaginationConfig {

  readonly pageSize?: number | null;
  withPageSize(pageSize: number | null): UiSdlDataGridPaginationConfig;

  readonly pageSizes?: C3.Array<number | null>;
  withPageSizes(pageSizes: C3.Array<number | null> | Array<number | null>): UiSdlDataGridPaginationConfig;

  readonly pagination?: boolean;
  withPagination(pagination: boolean): UiSdlDataGridPaginationConfig;
}

