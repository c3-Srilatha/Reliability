export interface UiSdlGridLayoutToggleHighlightAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlGridLayoutToggleHighlightAction;

  readonly payload?: UiSdlGridLayoutToggleHighlightPayload | null;
  withPayload(payload: IUiSdlGridLayoutToggleHighlightPayload | null): UiSdlGridLayoutToggleHighlightAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlGridLayoutToggleHighlightAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGridLayoutToggleHighlightAction;
}

