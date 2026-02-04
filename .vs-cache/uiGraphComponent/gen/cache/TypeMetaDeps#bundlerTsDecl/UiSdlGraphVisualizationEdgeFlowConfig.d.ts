export interface UiSdlGraphVisualizationEdgeFlowConfig {

  readonly flow?: boolean;
  withFlow(flow: boolean): UiSdlGraphVisualizationEdgeFlowConfig;

  readonly flowVelocity?: number | null;
  withFlowVelocity(flowVelocity: number | null): UiSdlGraphVisualizationEdgeFlowConfig;

  readonly flowVelocityByProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withFlowVelocityByProperty(flowVelocityByProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationEdgeFlowConfig;
}

