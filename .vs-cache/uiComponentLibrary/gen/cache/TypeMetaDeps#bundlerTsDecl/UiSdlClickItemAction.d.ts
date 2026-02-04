export interface UiSdlClickItemAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlClickItemAction;

  readonly payload?: UiSdlClickItemPayload | null;
  withPayload(payload: IUiSdlClickItemPayload | null): UiSdlClickItemAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlClickItemAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlClickItemAction;
}

