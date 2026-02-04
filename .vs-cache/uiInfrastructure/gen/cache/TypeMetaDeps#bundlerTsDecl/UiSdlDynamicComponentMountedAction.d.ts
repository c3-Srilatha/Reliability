export interface UiSdlDynamicComponentMountedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDynamicComponentMountedAction;

  readonly payload?: UiSdlDynamicComponentMountedPayload | null;
  withPayload(payload: IUiSdlDynamicComponentMountedPayload | null): UiSdlDynamicComponentMountedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDynamicComponentMountedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDynamicComponentMountedAction;
}

