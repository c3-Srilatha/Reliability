export interface UiSdlStepUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlStepUpdateAction;

  readonly payload?: UiSdlStepUpdatePayload | null;
  withPayload(payload: IUiSdlStepUpdatePayload | null): UiSdlStepUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlStepUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlStepUpdateAction;
}

