export interface UiSdlSankeyChartDataNode {

  readonly originalData?: any | null;
  withOriginalData(originalData: any | null): UiSdlSankeyChartDataNode;

  readonly numConnectors?: number | null;
  withNumConnectors(numConnectors: number | null): UiSdlSankeyChartDataNode;
}

