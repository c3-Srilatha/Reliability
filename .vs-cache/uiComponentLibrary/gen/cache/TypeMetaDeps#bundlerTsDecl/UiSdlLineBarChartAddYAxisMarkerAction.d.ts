export interface UiSdlLineBarChartAddYAxisMarkerAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlLineBarChartAddYAxisMarkerAction;

  readonly payload?: UiSdlLineBarChartAddYAxisMarkerPayload | null;
  withPayload(payload: IUiSdlLineBarChartAddYAxisMarkerPayload | null): UiSdlLineBarChartAddYAxisMarkerAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlLineBarChartAddYAxisMarkerAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlLineBarChartAddYAxisMarkerAction;
}

