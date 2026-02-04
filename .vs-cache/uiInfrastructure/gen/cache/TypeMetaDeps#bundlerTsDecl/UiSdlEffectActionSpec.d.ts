export interface UiSdlEffectActionSpec {

  readonly payload?: any | null;
  withPayload(payload: any | null): UiSdlEffectActionSpec;

  readonly payloadStrategy?: string | null;
  withPayloadStrategy(payloadStrategy: string | null): UiSdlEffectActionSpec;

  readonly actionType?: string | null;
  withActionType(actionType: string | null): UiSdlEffectActionSpec;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEffectActionSpec;

  readonly meta?: any;
  withMeta(meta: any): UiSdlEffectActionSpec;
}

