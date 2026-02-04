export interface UiSdlScrollChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlScrollChangeAction;

  readonly payload?: UiSdlScrollChangePayload | null;
  withPayload(payload: IUiSdlScrollChangePayload | null): UiSdlScrollChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlScrollChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlScrollChangeAction;
}

