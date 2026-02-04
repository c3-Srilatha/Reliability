export interface UiSdlDataDeleteAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataDeleteAction;

  readonly payload?: UiSdlDataDeletePayload | null;
  withPayload(payload: IUiSdlDataDeletePayload | null): UiSdlDataDeleteAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataDeleteAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataDeleteAction;
}

