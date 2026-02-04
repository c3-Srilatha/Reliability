export interface UiSdlBaseDataGridToggleableTableActionGroup {

  readonly requireActiveSelection?: boolean;
  withRequireActiveSelection(requireActiveSelection: boolean): UiSdlBaseDataGridToggleableTableActionGroup;

  readonly group?: C3.Array<UiSdlBaseDataGridSelectableTableAction | null>;
  withGroup(group: C3.Array<UiSdlBaseDataGridSelectableTableAction | null> | Array<IUiSdlBaseDataGridSelectableTableAction | null>): UiSdlBaseDataGridToggleableTableActionGroup;
}

