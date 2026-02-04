export interface UiSdlDensityIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDensityIdSetAction;

  readonly payload?: UiSdlDensityIdSetPayload | null;
  withPayload(payload: IUiSdlDensityIdSetPayload | null): UiSdlDensityIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDensityIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDensityIdSetAction;
}

