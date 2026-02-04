export interface StudioToolbarAction {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): StudioToolbarAction;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): StudioToolbarAction;

  readonly name?: string | null;
  withName(name: string | null): StudioToolbarAction;

  readonly args?: any | null;
  withArgs(args: any | null): StudioToolbarAction;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): StudioToolbarAction;

  readonly error?: boolean | C3.Error | null | null;
  withError(error: boolean | IC3.Error | null | null): StudioToolbarAction;

  readonly disabledCondition?: UiSdlRenderCondition | null;
  withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): StudioToolbarAction;

  readonly disabledTooltip?: string | null;
  withDisabledTooltip(disabledTooltip: string | null): StudioToolbarAction;

  readonly hiddenCondition?: UiSdlRenderCondition | null;
  withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): StudioToolbarAction;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): StudioToolbarAction;

  readonly imagePath?: string | null;
  withImagePath(imagePath: string | null): StudioToolbarAction;

  readonly color?: string | null;
  withColor(color: string | null): StudioToolbarAction;
}

