export interface UiSdlInAppDocShowHideAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInAppDocShowHideAction;

  readonly payload?: UiSdlInAppDocShowHidePayload | null;
  withPayload(payload: IUiSdlInAppDocShowHidePayload | null): UiSdlInAppDocShowHideAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInAppDocShowHideAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInAppDocShowHideAction;
}

