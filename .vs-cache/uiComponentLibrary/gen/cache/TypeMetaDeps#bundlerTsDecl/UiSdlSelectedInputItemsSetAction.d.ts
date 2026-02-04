export interface UiSdlSelectedInputItemsSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSelectedInputItemsSetAction;

  readonly payload?: UiSdlSelectedInputItemsSetPayload | null;
  withPayload(payload: IUiSdlSelectedInputItemsSetPayload | null): UiSdlSelectedInputItemsSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSelectedInputItemsSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSelectedInputItemsSetAction;
}

