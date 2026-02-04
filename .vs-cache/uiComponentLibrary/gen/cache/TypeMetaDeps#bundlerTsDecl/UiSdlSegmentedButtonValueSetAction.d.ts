export interface UiSdlSegmentedButtonValueSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSegmentedButtonValueSetAction;

  readonly payload?: UiSdlSegmentedButtonValueSetPayload | null;
  withPayload(payload: IUiSdlSegmentedButtonValueSetPayload | null): UiSdlSegmentedButtonValueSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSegmentedButtonValueSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSegmentedButtonValueSetAction;
}

