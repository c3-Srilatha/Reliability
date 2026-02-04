export interface UiSdlPageTitleAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlPageTitleAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlPageTitleAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPageTitleAction;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlPageTitleAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlPageTitleAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): UiSdlPageTitleAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): UiSdlPageTitleAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): UiSdlPageTitleAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): UiSdlPageTitleAction;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlPageTitleAction;

  readonly usage?: string | null;
  withUsage(usage: string | null): UiSdlPageTitleAction;
}

