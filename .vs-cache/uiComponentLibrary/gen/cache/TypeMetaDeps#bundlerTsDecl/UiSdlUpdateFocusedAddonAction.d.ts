export interface UiSdlUpdateFocusedAddonAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUpdateFocusedAddonAction;

  readonly payload?: UiSdlUpdateFocusedAddonPayload | null;
  withPayload(payload: IUiSdlUpdateFocusedAddonPayload | null): UiSdlUpdateFocusedAddonAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUpdateFocusedAddonAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUpdateFocusedAddonAction;
}

