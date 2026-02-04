export interface UiSdlSearchStringSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSearchStringSetAction;

  readonly payload?: UiSdlSearchStringSetPayload | null;
  withPayload(payload: IUiSdlSearchStringSetPayload | null): UiSdlSearchStringSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSearchStringSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSearchStringSetAction;
}

