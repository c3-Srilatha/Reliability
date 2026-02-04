export interface UiSdlGaugeChartUpdateLabelPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGaugeChartUpdateLabelPayload;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlGaugeChartUpdateLabelPayload;
}

