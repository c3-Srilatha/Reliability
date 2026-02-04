export interface UiSdlDataCountAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataCountAction;

  readonly payload?: UiSdlDataCountPayload | null;
  withPayload(payload: IUiSdlDataCountPayload | null): UiSdlDataCountAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataCountAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataCountAction;
}

