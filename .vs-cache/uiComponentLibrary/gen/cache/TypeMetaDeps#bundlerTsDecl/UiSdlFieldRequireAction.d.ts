export interface UiSdlFieldRequireAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFieldRequireAction;

  readonly payload?: UiSdlFieldRequirePayload | null;
  withPayload(payload: IUiSdlFieldRequirePayload | null): UiSdlFieldRequireAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFieldRequireAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFieldRequireAction;
}

