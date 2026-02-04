export interface UiSdlDataCountArgumentsSyncAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataCountArgumentsSyncAction;

  readonly payload?: UiSdlDataCountArgumentsSyncPayload | null;
  withPayload(payload: IUiSdlDataCountArgumentsSyncPayload | null): UiSdlDataCountArgumentsSyncAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataCountArgumentsSyncAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataCountArgumentsSyncAction;
}

