export interface UiSdlChartClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChartClickAction;

  readonly payload?: UiSdlChartClickPayload | null;
  withPayload(payload: IUiSdlChartClickPayload | null): UiSdlChartClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChartClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChartClickAction;
}

