export interface UiSdlItemChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlItemChangeAction;

  readonly payload?: UiSdlItemChangePayload | null;
  withPayload(payload: IUiSdlItemChangePayload | null): UiSdlItemChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlItemChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlItemChangeAction;
}

