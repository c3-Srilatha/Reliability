export interface UiSdlDataGridDataItem {

  readonly error?: C3.Map<string | null, string | null>;
  withError(error: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataGridDataItem;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDataGridDataItem;

  readonly inEdit?: string | null | boolean | null;
  withInEdit(inEdit: string | null | boolean | null): UiSdlDataGridDataItem;

  readonly node?: HierarchyNode | null;
  withNode(node: IHierarchyNode | null): UiSdlDataGridDataItem;

  readonly obj?: C3.Map<string | null, any>;
  withObj(obj: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataGridDataItem;
}

