export interface UiSdlStepIndexUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlStepIndexUpdateAction;

  readonly payload?: UiSdlStepIndexUpdatePayload | null;
  withPayload(payload: IUiSdlStepIndexUpdatePayload | null): UiSdlStepIndexUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlStepIndexUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlStepIndexUpdateAction;
}

