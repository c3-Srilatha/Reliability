export interface UiSdlDataSpecArgumentsMergeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataSpecArgumentsMergeAction;

  readonly payload?: UiSdlDataSpecArgumentsMergePayload | null;
  withPayload(payload: IUiSdlDataSpecArgumentsMergePayload | null): UiSdlDataSpecArgumentsMergeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataSpecArgumentsMergeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSpecArgumentsMergeAction;
}

