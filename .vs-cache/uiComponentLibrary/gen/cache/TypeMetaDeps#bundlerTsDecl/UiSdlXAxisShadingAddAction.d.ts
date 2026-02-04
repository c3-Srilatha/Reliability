export interface UiSdlXAxisShadingAddAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlXAxisShadingAddAction;

  readonly payload?: UiSdlXAxisShadingAddPayload | null;
  withPayload(payload: IUiSdlXAxisShadingAddPayload | null): UiSdlXAxisShadingAddAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlXAxisShadingAddAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlXAxisShadingAddAction;
}

