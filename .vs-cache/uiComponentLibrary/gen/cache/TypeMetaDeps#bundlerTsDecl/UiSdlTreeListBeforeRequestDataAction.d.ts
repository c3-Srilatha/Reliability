export interface UiSdlTreeListBeforeRequestDataAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTreeListBeforeRequestDataAction;

  readonly payload?: UiSdlTreeListBeforeRequestDataPayload | null;
  withPayload(payload: IUiSdlTreeListBeforeRequestDataPayload | null): UiSdlTreeListBeforeRequestDataAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTreeListBeforeRequestDataAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTreeListBeforeRequestDataAction;
}

