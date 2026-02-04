export interface UiSdlAddonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAddonClickAction;

  readonly payload?: UiSdlAddonClickPayload | null;
  withPayload(payload: IUiSdlAddonClickPayload | null): UiSdlAddonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAddonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAddonClickAction;
}

