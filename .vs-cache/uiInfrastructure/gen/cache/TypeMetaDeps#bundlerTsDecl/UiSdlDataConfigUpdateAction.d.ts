export interface UiSdlDataConfigUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataConfigUpdateAction;

  readonly payload?: UiSdlDataConfigUpdatePayload | null;
  withPayload(payload: IUiSdlDataConfigUpdatePayload | null): UiSdlDataConfigUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataConfigUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataConfigUpdateAction;
}

