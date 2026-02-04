export interface UiSdlMenuItemClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlMenuItemClickAction;

  readonly payload?: UiSdlMenuItemClickPayload | null;
  withPayload(payload: IUiSdlMenuItemClickPayload | null): UiSdlMenuItemClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlMenuItemClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlMenuItemClickAction;
}

