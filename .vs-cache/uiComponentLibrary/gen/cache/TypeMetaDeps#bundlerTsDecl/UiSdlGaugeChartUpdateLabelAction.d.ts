export interface UiSdlGaugeChartUpdateLabelAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlGaugeChartUpdateLabelAction;

  readonly payload?: UiSdlGaugeChartUpdateLabelPayload | null;
  withPayload(payload: IUiSdlGaugeChartUpdateLabelPayload | null): UiSdlGaugeChartUpdateLabelAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlGaugeChartUpdateLabelAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGaugeChartUpdateLabelAction;
}

