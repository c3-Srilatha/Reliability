export interface UiSdlChartXAxisAreaCollapsePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChartXAxisAreaCollapsePayload;

  readonly markerIdentifiersToCollapse?: C3.Array<string | null>;
  withMarkerIdentifiersToCollapse(markerIdentifiersToCollapse: C3.Array<string | null> | Array<string | null>): UiSdlChartXAxisAreaCollapsePayload;
}

