export interface UiSdlDataLoadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataLoadAction;

  readonly payload?: UiSdlDataLoadPayload | null;
  withPayload(payload: IUiSdlDataLoadPayload | null): UiSdlDataLoadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataLoadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataLoadAction;
}

