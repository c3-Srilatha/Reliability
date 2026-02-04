export interface UiSdlHistogramClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHistogramClickAction;

  readonly payload?: UiSdlHistogramClickPayload | null;
  withPayload(payload: IUiSdlHistogramClickPayload | null): UiSdlHistogramClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHistogramClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHistogramClickAction;
}

