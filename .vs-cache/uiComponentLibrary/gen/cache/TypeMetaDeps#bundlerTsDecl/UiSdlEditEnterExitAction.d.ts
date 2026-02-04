export interface UiSdlEditEnterExitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEditEnterExitAction;

  readonly payload?: UiSdlEditEnterExitPayload | null;
  withPayload(payload: IUiSdlEditEnterExitPayload | null): UiSdlEditEnterExitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEditEnterExitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEditEnterExitAction;
}

