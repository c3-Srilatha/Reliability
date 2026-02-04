export interface UiSdlChartGridUpdatePayload {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChartGridUpdatePayload;

  readonly payload?: UiSdlChartSynchronizedModeChangePayload | null;
  withPayload(payload: IUiSdlChartSynchronizedModeChangePayload | null): UiSdlChartGridUpdatePayload;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChartGridUpdatePayload;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChartGridUpdatePayload;

  readonly grid?: UiSdlChartEChartsGrid | null;
  withGrid(grid: IUiSdlChartEChartsGrid | null): UiSdlChartGridUpdatePayload;
}

