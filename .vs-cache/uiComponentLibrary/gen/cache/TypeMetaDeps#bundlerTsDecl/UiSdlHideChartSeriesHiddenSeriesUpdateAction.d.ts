export interface UiSdlHideChartSeriesHiddenSeriesUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHideChartSeriesHiddenSeriesUpdateAction;

  readonly payload?: UiSdlHideChartSeriesHiddenSeriesUpdatePayload | null;
  withPayload(payload: IUiSdlHideChartSeriesHiddenSeriesUpdatePayload | null): UiSdlHideChartSeriesHiddenSeriesUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHideChartSeriesHiddenSeriesUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHideChartSeriesHiddenSeriesUpdateAction;
}

