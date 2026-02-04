export interface UiSdlDataGridConfig {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataGridConfig;

  readonly viewMode?: string | null;
  withViewMode(viewMode: string | null): UiSdlDataGridConfig;

  readonly treeView?: UiSdlTreeViewConfig | null;
  withTreeView(treeView: IUiSdlTreeViewConfig | null): UiSdlDataGridConfig;

  readonly detailComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withDetailComponent(detailComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlDataGridConfig;

  readonly canAddRow?: boolean;
  withCanAddRow(canAddRow: boolean): UiSdlDataGridConfig;

  readonly checkBoxes?: boolean;
  withCheckBoxes(checkBoxes: boolean): UiSdlDataGridConfig;

  readonly pageSize?: number | null;
  withPageSize(pageSize: number | null): UiSdlDataGridConfig;

  readonly rowActions?: C3.Array<UiSdlDataGridRowAction | null>;
  withRowActions(rowActions: C3.Array<UiSdlDataGridRowAction | null> | Array<IUiSdlDataGridRowAction | null>): UiSdlDataGridConfig;

  readonly canDeleteRow?: boolean;
  withCanDeleteRow(canDeleteRow: boolean): UiSdlDataGridConfig;

  readonly paginationConfig?: UiSdlDataGridPaginationConfig | null;
  withPaginationConfig(paginationConfig: IUiSdlDataGridPaginationConfig | null): UiSdlDataGridConfig;

  readonly rowConfig?: UiSdlDataGridRowConfig | null;
  withRowConfig(rowConfig: IUiSdlDataGridRowConfig | null): UiSdlDataGridConfig;
}

