export interface UiSdlDataGridSortColumn {

  readonly field: string;
  withField(field: string): UiSdlDataGridSortColumn;

  readonly descending?: boolean;
  withDescending(descending: boolean): UiSdlDataGridSortColumn;
}

