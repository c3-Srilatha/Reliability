export interface UiSdlDataLoadedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataLoadedAction;

  readonly payload?: UiSdlReduxActionPayload | null;
  withPayload(payload: IUiSdlReduxActionPayload | null): UiSdlDataLoadedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataLoadedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataLoadedAction;
}

