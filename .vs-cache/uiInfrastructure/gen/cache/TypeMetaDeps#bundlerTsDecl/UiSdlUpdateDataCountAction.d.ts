export interface UiSdlUpdateDataCountAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUpdateDataCountAction;

  readonly payload?: UiSdlDataSavePayload | null;
  withPayload(payload: IUiSdlDataSavePayload | null): UiSdlUpdateDataCountAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUpdateDataCountAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUpdateDataCountAction;
}

