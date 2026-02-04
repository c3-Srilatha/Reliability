export interface UiSdlHiddenThemingIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHiddenThemingIdSetAction;

  readonly payload?: UiSdlHiddenThemingIdSetPayload | null;
  withPayload(payload: IUiSdlHiddenThemingIdSetPayload | null): UiSdlHiddenThemingIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHiddenThemingIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHiddenThemingIdSetAction;
}

