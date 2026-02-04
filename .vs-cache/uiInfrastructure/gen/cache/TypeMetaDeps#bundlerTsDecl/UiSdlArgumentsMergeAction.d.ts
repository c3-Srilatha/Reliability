export interface UiSdlArgumentsMergeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlArgumentsMergeAction;

  readonly payload?: UiSdlArgumentsMergePayload | null;
  withPayload(payload: IUiSdlArgumentsMergePayload | null): UiSdlArgumentsMergeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlArgumentsMergeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlArgumentsMergeAction;
}

