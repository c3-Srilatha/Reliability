export interface UiSdlEffectPayloadForwarder {

  readonly payload?: any | null;
  withPayload(payload: any | null): UiSdlEffectPayloadForwarder;

  readonly payloadStrategy?: string | null;
  withPayloadStrategy(payloadStrategy: string | null): UiSdlEffectPayloadForwarder;
}

