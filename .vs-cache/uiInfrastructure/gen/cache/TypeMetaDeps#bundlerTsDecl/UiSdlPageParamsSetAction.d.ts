export interface UiSdlPageParamsSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPageParamsSetAction;

  readonly payload?: UiSdlPageParamsSetPayload | null;
  withPayload(payload: IUiSdlPageParamsSetPayload | null): UiSdlPageParamsSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPageParamsSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPageParamsSetAction;
}

