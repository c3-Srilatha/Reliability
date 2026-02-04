export interface UiSdlRoutesSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlRoutesSetAction;

  readonly payload?: UiSdlRoutesSetPayload | null;
  withPayload(payload: IUiSdlRoutesSetPayload | null): UiSdlRoutesSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlRoutesSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlRoutesSetAction;
}

