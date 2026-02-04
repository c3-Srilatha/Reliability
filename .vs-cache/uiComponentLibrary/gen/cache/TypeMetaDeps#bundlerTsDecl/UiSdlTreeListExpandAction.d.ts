export interface UiSdlTreeListExpandAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTreeListExpandAction;

  readonly payload?: UiSdlTreeListExpandPayload | null;
  withPayload(payload: IUiSdlTreeListExpandPayload | null): UiSdlTreeListExpandAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTreeListExpandAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTreeListExpandAction;
}

