export interface UiSdlColumnsReorderedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlColumnsReorderedAction;

  readonly payload?: UiSdlColumnsReorderedPayload | null;
  withPayload(payload: IUiSdlColumnsReorderedPayload | null): UiSdlColumnsReorderedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlColumnsReorderedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlColumnsReorderedAction;
}

