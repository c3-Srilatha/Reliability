export interface UiSdlInputDsLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputDsLoadAction;

  readonly payload?: any;
  withPayload(payload: any): UiSdlInputDsLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputDsLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputDsLoadAction;
}

