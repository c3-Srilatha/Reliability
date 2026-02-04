export interface UiSdlAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAction;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlAction;
}

