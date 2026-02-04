export interface UiSdlStyleIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlStyleIdSetAction;

  readonly payload?: UiSdlStyleIdSetPayload | null;
  withPayload(payload: IUiSdlStyleIdSetPayload | null): UiSdlStyleIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlStyleIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlStyleIdSetAction;
}

