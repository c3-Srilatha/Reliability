export interface UiSdlDataGridMultipleRowAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlDataGridMultipleRowAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlDataGridMultipleRowAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDataGridMultipleRowAction;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlDataGridMultipleRowAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlDataGridMultipleRowAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlDataGridMultipleRowAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlDataGridMultipleRowAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlDataGridMultipleRowAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlDataGridMultipleRowAction;
}

