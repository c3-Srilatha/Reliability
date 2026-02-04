export interface UiSdlSankeyChartNodeClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSankeyChartNodeClickPayload;

  readonly nodeId?: string | null;
  withNodeId(nodeId: string | null): UiSdlSankeyChartNodeClickPayload;
}

