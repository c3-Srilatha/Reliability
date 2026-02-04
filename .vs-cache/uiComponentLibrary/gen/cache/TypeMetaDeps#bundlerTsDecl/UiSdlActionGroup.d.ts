export interface UiSdlActionGroup {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlActionGroup;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlActionGroup;

  readonly name?: string | null;
  withName(name: string | null): UiSdlActionGroup;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlActionGroup;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlActionGroup;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlActionGroup;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlActionGroup;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlActionGroup;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlActionGroup;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlActionGroup;

  readonly dropdownContent?: C3.Array<UiSdlAction | null>;
  withDropdownContent(dropdownContent: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlActionGroup;
}

