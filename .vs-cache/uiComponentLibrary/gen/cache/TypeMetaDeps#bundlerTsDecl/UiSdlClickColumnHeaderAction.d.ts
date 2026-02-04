export interface UiSdlClickColumnHeaderAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlClickColumnHeaderAction;

  readonly payload?: UiSdlClickColumnHeaderPayload | null;
  withPayload(payload: IUiSdlClickColumnHeaderPayload | null): UiSdlClickColumnHeaderAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlClickColumnHeaderAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlClickColumnHeaderAction;
}

