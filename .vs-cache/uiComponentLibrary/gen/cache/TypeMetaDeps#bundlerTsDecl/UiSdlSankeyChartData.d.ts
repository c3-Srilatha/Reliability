export interface UiSdlSankeyChartData {

  readonly nodes?: C3.Array<UiSdlSankeyChartDataNode | null>;
  withNodes(nodes: C3.Array<UiSdlSankeyChartDataNode | null> | Array<IUiSdlSankeyChartDataNode | null>): UiSdlSankeyChartData;

  readonly edges?: C3.Array<UiSdlSankeyChartDataEdge | null>;
  withEdges(edges: C3.Array<UiSdlSankeyChartDataEdge | null> | Array<IUiSdlSankeyChartDataEdge | null>): UiSdlSankeyChartData;
}

