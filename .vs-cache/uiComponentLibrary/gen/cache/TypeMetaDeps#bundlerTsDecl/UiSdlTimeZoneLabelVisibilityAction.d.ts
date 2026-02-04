export interface UiSdlTimeZoneLabelVisibilityAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTimeZoneLabelVisibilityAction;

  readonly payload?: UiSdlTimeZoneLabelVisibilityPayload | null;
  withPayload(payload: IUiSdlTimeZoneLabelVisibilityPayload | null): UiSdlTimeZoneLabelVisibilityAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTimeZoneLabelVisibilityAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTimeZoneLabelVisibilityAction;
}

