export interface UiSdlDataTypeUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataTypeUpdateAction;

  readonly payload?: UiSdlDataTypeUpdatePayload | null;
  withPayload(payload: IUiSdlDataTypeUpdatePayload | null): UiSdlDataTypeUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataTypeUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataTypeUpdateAction;
}

