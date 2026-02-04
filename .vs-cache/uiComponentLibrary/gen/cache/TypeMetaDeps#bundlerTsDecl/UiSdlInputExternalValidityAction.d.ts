export interface UiSdlInputExternalValidityAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputExternalValidityAction;

  readonly payload?: UiSdlInputExternalValidityPayload | null;
  withPayload(payload: IUiSdlInputExternalValidityPayload | null): UiSdlInputExternalValidityAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputExternalValidityAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputExternalValidityAction;
}

