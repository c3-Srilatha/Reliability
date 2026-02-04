export interface UiSdlActionableOptionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlActionableOptionClickAction;

  readonly payload?: UiSdlActionableOptionClickPayload | null;
  withPayload(payload: IUiSdlActionableOptionClickPayload | null): UiSdlActionableOptionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlActionableOptionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlActionableOptionClickAction;
}

