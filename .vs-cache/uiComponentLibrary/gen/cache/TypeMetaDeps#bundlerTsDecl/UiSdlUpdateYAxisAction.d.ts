export interface UiSdlUpdateYAxisAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUpdateYAxisAction;

  readonly payload?: UiSdlUpdateYAxisPayload | null;
  withPayload(payload: IUiSdlUpdateYAxisPayload | null): UiSdlUpdateYAxisAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUpdateYAxisAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUpdateYAxisAction;
}

