export interface UiSdlFilterStringValidateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFilterStringValidateAction;

  readonly payload?: UiSdlFilterStringValidatePayload | null;
  withPayload(payload: IUiSdlFilterStringValidatePayload | null): UiSdlFilterStringValidateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFilterStringValidateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFilterStringValidateAction;
}

