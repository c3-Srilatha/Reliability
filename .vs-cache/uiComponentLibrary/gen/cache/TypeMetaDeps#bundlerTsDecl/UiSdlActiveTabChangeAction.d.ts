export interface UiSdlActiveTabChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlActiveTabChangeAction;

  readonly payload?: UiSdlActiveTabChangePayload | null;
  withPayload(payload: IUiSdlActiveTabChangePayload | null): UiSdlActiveTabChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlActiveTabChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlActiveTabChangeAction;
}

