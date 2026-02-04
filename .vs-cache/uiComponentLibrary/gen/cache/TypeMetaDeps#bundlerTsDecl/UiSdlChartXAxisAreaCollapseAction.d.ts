export interface UiSdlChartXAxisAreaCollapseAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChartXAxisAreaCollapseAction;

  readonly payload?: UiSdlChartXAxisAreaCollapsePayload | null;
  withPayload(payload: IUiSdlChartXAxisAreaCollapsePayload | null): UiSdlChartXAxisAreaCollapseAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChartXAxisAreaCollapseAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChartXAxisAreaCollapseAction;
}

