export interface UiSdlSankeyChartNodeClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSankeyChartNodeClickAction;

  readonly payload?: UiSdlSankeyChartNodeClickPayload | null;
  withPayload(payload: IUiSdlSankeyChartNodeClickPayload | null): UiSdlSankeyChartNodeClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSankeyChartNodeClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSankeyChartNodeClickAction;
}

