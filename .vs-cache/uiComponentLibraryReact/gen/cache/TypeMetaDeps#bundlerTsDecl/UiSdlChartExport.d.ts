export interface UiSdlChartExport {

  readonly chartActionsDefault?: C3.Array<UiSdlAction | null>;
  withChartActionsDefault(chartActionsDefault: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlChartExport;
}

