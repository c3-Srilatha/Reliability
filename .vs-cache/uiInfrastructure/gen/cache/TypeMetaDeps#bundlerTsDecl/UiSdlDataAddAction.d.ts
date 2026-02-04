export interface UiSdlDataAddAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDataAddAction;

  readonly payload?: UiSdlDataAddPayload | null;
  withPayload(payload: IUiSdlDataAddPayload | null): UiSdlDataAddAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDataAddAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataAddAction;
}

