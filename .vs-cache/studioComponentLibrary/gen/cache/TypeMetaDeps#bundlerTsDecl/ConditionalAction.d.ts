export interface ConditionalAction {

  readonly condition?: UiSdlFieldBaseCondition | null;
  withCondition(condition: IUiSdlFieldBaseCondition | null): ConditionalAction;

  readonly thenAction?: UiSdlAction | null;
  withThenAction(thenAction: IUiSdlAction | null): ConditionalAction;

  readonly elseAction?: UiSdlAction | null;
  withElseAction(elseAction: IUiSdlAction | null): ConditionalAction;
}

