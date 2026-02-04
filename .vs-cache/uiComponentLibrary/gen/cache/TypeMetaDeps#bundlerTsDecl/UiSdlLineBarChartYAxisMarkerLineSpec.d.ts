export interface UiSdlLineBarChartYAxisMarkerLineSpec {

  readonly relatedSerieId: string;
  withRelatedSerieId(relatedSerieId: string): UiSdlLineBarChartYAxisMarkerLineSpec;

  readonly legendLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendLabel(legendLabel: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartYAxisMarkerLineSpec;

  readonly legendDescription?: string | null | UiSdlDynamicValueSpec | null | null;
  withLegendDescription(legendDescription: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLineBarChartYAxisMarkerLineSpec;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlLineBarChartYAxisMarkerLineSpec;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlLineBarChartYAxisMarkerLineSpec;

  readonly visualizationType: UiSdlLineBarChartYAxisMarkerLineVisualization | UiSdlLineBarChartYAxisMarkerRangeShadingVisualization;
  withVisualizationType(visualizationType: IUiSdlLineBarChartYAxisMarkerLineVisualization | IUiSdlLineBarChartYAxisMarkerRangeShadingVisualization): UiSdlLineBarChartYAxisMarkerLineSpec;
}

