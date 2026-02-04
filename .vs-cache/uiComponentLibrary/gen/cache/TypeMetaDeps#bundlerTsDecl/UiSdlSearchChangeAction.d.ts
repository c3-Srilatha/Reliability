export interface UiSdlSearchChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchChangeAction;

  readonly payload?: any;
  withPayload(payload: any): UiSdlSearchChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchChangeAction;
}

