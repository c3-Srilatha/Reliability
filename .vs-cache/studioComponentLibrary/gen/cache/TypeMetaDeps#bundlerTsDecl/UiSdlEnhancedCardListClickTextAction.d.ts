export interface UiSdlEnhancedCardListClickTextAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEnhancedCardListClickTextAction;

  readonly payload?: UiSdlEnhancedCardListClickTextActionPayload | null;
  withPayload(payload: IUiSdlEnhancedCardListClickTextActionPayload | null): UiSdlEnhancedCardListClickTextAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEnhancedCardListClickTextAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEnhancedCardListClickTextAction;
}

