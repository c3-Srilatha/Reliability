export interface UiSdlActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlActionClickAction;

  readonly payload?: any;
  withPayload(payload: any): UiSdlActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlActionClickAction;
}

