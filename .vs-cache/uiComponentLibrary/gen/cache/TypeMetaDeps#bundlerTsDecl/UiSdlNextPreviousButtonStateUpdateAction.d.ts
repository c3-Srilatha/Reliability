export interface UiSdlNextPreviousButtonStateUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlNextPreviousButtonStateUpdateAction;

  readonly payload?: UiSdlNextPreviousButtonStateUpdatePayload | null;
  withPayload(payload: IUiSdlNextPreviousButtonStateUpdatePayload | null): UiSdlNextPreviousButtonStateUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlNextPreviousButtonStateUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNextPreviousButtonStateUpdateAction;
}

