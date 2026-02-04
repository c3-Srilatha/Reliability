export interface UiSdlSegmentedButtonStatusSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSegmentedButtonStatusSetAction;

  readonly payload?: UiSdlSegmentedButtonStatusSetPayload | null;
  withPayload(payload: IUiSdlSegmentedButtonStatusSetPayload | null): UiSdlSegmentedButtonStatusSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSegmentedButtonStatusSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSegmentedButtonStatusSetAction;
}

