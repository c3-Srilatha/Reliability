export interface UiSdlTreeListItemAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlTreeListItemAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlTreeListItemAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTreeListItemAction;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlTreeListItemAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlTreeListItemAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlTreeListItemAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlTreeListItemAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlTreeListItemAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlTreeListItemAction;

  readonly hideWhenDisabled?: boolean;
  withHideWhenDisabled(hideWhenDisabled: boolean): UiSdlTreeListItemAction;

  readonly hideWhenEnabled?: boolean;
  withHideWhenEnabled(hideWhenEnabled: boolean): UiSdlTreeListItemAction;

  readonly usage?: string | null;
  withUsage(usage: string | null): UiSdlTreeListItemAction;
}

