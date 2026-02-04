export interface UiSdlChartSynchronizedModeChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChartSynchronizedModeChangeAction;

  readonly payload?: UiSdlChartSynchronizedModeChangePayload | null;
  withPayload(payload: IUiSdlChartSynchronizedModeChangePayload | null): UiSdlChartSynchronizedModeChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChartSynchronizedModeChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChartSynchronizedModeChangeAction;
}

