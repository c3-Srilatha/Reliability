export interface UiSdlTreeListNodeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTreeListNodeAction;

  readonly payload?: UiSdlTreeListNodePayload | null;
  withPayload(payload: IUiSdlTreeListNodePayload | null): UiSdlTreeListNodeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTreeListNodeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTreeListNodeAction;
}

