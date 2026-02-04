export interface UiSdlEmptyStateActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlEmptyStateActionClickAction;

  readonly payload?: UiSdlEmptyStateActionClickPayload | null;
  withPayload(payload: IUiSdlEmptyStateActionClickPayload | null): UiSdlEmptyStateActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlEmptyStateActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlEmptyStateActionClickAction;
}

