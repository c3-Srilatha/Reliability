export interface UiSdlActionableOptionsShowHideAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlActionableOptionsShowHideAction;

  readonly payload?: UiSdlActionableOptionsShowHidePayload | null;
  withPayload(payload: IUiSdlActionableOptionsShowHidePayload | null): UiSdlActionableOptionsShowHideAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlActionableOptionsShowHideAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlActionableOptionsShowHideAction;
}

