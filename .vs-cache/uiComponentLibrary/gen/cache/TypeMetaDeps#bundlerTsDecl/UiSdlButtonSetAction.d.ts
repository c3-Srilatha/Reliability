export interface UiSdlButtonSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlButtonSetAction;

  readonly payload?: UiSdlButtonSetPayload | null;
  withPayload(payload: IUiSdlButtonSetPayload | null): UiSdlButtonSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlButtonSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlButtonSetAction;
}

