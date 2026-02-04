export interface UiSdlPageChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPageChangeAction;

  readonly payload?: UiSdlPageChangePayload | null;
  withPayload(payload: IUiSdlPageChangePayload | null): UiSdlPageChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPageChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPageChangeAction;
}

