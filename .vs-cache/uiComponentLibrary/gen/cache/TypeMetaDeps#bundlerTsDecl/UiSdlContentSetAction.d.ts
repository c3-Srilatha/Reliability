export interface UiSdlContentSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentSetAction;

  readonly payload?: UiSdlContentSetPayload | null;
  withPayload(payload: IUiSdlContentSetPayload | null): UiSdlContentSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentSetAction;
}

