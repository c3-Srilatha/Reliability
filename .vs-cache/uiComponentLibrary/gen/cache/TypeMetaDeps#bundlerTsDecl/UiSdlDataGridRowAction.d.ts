export interface UiSdlDataGridRowAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlDataGridRowAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlDataGridRowAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataGridRowAction;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlDataGridRowAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlDataGridRowAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlDataGridRowAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlDataGridRowAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlDataGridRowAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlDataGridRowAction;
}

