export interface UiSdlHiddenSeriesUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHiddenSeriesUpdateAction;

  readonly payload?: UiSdlHiddenSeriesUpdatePayload | null;
  withPayload(payload: IUiSdlHiddenSeriesUpdatePayload | null): UiSdlHiddenSeriesUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHiddenSeriesUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHiddenSeriesUpdateAction;
}

