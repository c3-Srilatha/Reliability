export interface UiSdlWarningModalAcknowledgeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlWarningModalAcknowledgeAction;

  readonly payload?: UiSdlWarningModalAcknowledgePayload | null;
  withPayload(payload: IUiSdlWarningModalAcknowledgePayload | null): UiSdlWarningModalAcknowledgeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlWarningModalAcknowledgeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWarningModalAcknowledgeAction;
}

