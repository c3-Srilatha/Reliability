export interface UiSdlDataGridRowConfig {

  readonly zebraStriped?: boolean;
  withZebraStriped(zebraStriped: boolean): UiSdlDataGridRowConfig;

  readonly rowBorder?: string | null;
  withRowBorder(rowBorder: string | null): UiSdlDataGridRowConfig;

  readonly rowSize?: string | null;
  withRowSize(rowSize: string | null): UiSdlDataGridRowConfig;
}

