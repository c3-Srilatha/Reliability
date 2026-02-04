export interface UiSdlSankeyChartEdgeClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSankeyChartEdgeClickAction;

  readonly payload?: UiSdlSankeyChartEdgeClickPayload | null;
  withPayload(payload: IUiSdlSankeyChartEdgeClickPayload | null): UiSdlSankeyChartEdgeClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSankeyChartEdgeClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSankeyChartEdgeClickAction;
}

