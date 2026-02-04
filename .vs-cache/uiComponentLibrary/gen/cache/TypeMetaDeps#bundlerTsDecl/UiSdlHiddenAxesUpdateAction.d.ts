export interface UiSdlHiddenAxesUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHiddenAxesUpdateAction;

  readonly payload?: UiSdlHiddenAxesUpdatePayload | null;
  withPayload(payload: IUiSdlHiddenAxesUpdatePayload | null): UiSdlHiddenAxesUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHiddenAxesUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHiddenAxesUpdateAction;
}

