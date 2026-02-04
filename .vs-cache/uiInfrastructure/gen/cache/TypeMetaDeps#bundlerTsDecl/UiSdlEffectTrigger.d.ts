export interface UiSdlEffectTrigger {

  readonly payload?: any | null;
  withPayload(payload: any | null): UiSdlEffectTrigger;

  readonly payloadStrategy?: string | null;
  withPayloadStrategy(payloadStrategy: string | null): UiSdlEffectTrigger;

  readonly trigger?: C3.Array<string | null> | string | null | null;
  withTrigger(trigger: C3.Array<string | null> | Array<string | null> | string | null | null): UiSdlEffectTrigger;

  readonly effectType?: string | null;
  withEffectType(effectType: string | null): UiSdlEffectTrigger;

  readonly actions?: C3.Array<UiSdlEffectActionSpec | null>;
  withActions(actions: C3.Array<UiSdlEffectActionSpec | null> | Array<IUiSdlEffectActionSpec | null>): UiSdlEffectTrigger;

  readonly comment?: string | null;
  withComment(comment: string | null): UiSdlEffectTrigger;
}

