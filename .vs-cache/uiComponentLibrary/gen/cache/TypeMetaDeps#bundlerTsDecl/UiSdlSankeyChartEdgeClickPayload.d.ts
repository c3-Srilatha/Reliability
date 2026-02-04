export interface UiSdlSankeyChartEdgeClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSankeyChartEdgeClickPayload;

  readonly source?: string | null;
  withSource(source: string | null): UiSdlSankeyChartEdgeClickPayload;

  readonly target?: string | null;
  withTarget(target: string | null): UiSdlSankeyChartEdgeClickPayload;

  readonly sourceId?: string | null;
  withSourceId(sourceId: string | null): UiSdlSankeyChartEdgeClickPayload;

  readonly targetId?: string | null;
  withTargetId(targetId: string | null): UiSdlSankeyChartEdgeClickPayload;
}

