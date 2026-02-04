export interface UiSdlAdvancedFilterSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAdvancedFilterSubmitAction;

  readonly payload?: UiSdlAdvancedFilterSubmitPayload | null;
  withPayload(payload: IUiSdlAdvancedFilterSubmitPayload | null): UiSdlAdvancedFilterSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAdvancedFilterSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAdvancedFilterSubmitAction;
}

