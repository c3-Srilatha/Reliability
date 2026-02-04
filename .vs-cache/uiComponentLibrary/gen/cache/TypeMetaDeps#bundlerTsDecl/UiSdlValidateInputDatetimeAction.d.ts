export interface UiSdlValidateInputDatetimeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlValidateInputDatetimeAction;

  readonly payload?: UiSdlValidateInputDatetimePayload | null;
  withPayload(payload: IUiSdlValidateInputDatetimePayload | null): UiSdlValidateInputDatetimeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlValidateInputDatetimeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlValidateInputDatetimeAction;
}

