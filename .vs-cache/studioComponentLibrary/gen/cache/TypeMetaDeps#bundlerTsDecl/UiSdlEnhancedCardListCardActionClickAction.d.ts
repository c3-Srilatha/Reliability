export interface UiSdlEnhancedCardListCardActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEnhancedCardListCardActionClickAction;

  readonly payload?: UiSdlEnhancedCardListCardActionClickPayload | null;
  withPayload(payload: IUiSdlEnhancedCardListCardActionClickPayload | null): UiSdlEnhancedCardListCardActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEnhancedCardListCardActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEnhancedCardListCardActionClickAction;
}

