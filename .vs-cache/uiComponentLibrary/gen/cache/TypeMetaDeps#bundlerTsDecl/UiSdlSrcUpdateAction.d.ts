export interface UiSdlSrcUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSrcUpdateAction;

  readonly payload?: string | null;
  withPayload(payload: string | null): UiSdlSrcUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSrcUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSrcUpdateAction;
}

