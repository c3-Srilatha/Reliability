export interface UiSdlChartGridUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChartGridUpdateAction;

  readonly payload?: UiSdlChartSynchronizedModeChangePayload | null;
  withPayload(payload: IUiSdlChartSynchronizedModeChangePayload | null): UiSdlChartGridUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChartGridUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChartGridUpdateAction;
}

