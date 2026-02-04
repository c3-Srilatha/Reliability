export interface UiSdlBaseDataGridSelectableTableAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlBaseDataGridSelectableTableAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlBaseDataGridSelectableTableAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlBaseDataGridSelectableTableAction;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlBaseDataGridSelectableTableAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlBaseDataGridSelectableTableAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlBaseDataGridSelectableTableAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlBaseDataGridSelectableTableAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlBaseDataGridSelectableTableAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlBaseDataGridSelectableTableAction;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlBaseDataGridSelectableTableAction;

  readonly dropdownContent?: C3.Array<UiSdlAction | null>;
  withDropdownContent(dropdownContent: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlBaseDataGridSelectableTableAction;

  readonly selected?: boolean;
  withSelected(selected: boolean): UiSdlBaseDataGridSelectableTableAction;
}

