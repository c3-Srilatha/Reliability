export interface UiSdlCurrentPathSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCurrentPathSetAction;

  readonly payload?: UiSdlCurrentPathSetPayload | null;
  withPayload(payload: IUiSdlCurrentPathSetPayload | null): UiSdlCurrentPathSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCurrentPathSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCurrentPathSetAction;
}

