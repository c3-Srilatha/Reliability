export interface UiSdlAddonEmphasizeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAddonEmphasizeAction;

  readonly payload?: UiSdlAddonEmphasizePayload | null;
  withPayload(payload: IUiSdlAddonEmphasizePayload | null): UiSdlAddonEmphasizeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAddonEmphasizeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAddonEmphasizeAction;
}

