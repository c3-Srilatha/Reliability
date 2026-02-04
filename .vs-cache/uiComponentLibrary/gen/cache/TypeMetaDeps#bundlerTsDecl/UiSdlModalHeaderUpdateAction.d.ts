export interface UiSdlModalHeaderUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlModalHeaderUpdateAction;

  readonly payload?: UiSdlModalHeaderUpdatePayload | null;
  withPayload(payload: IUiSdlModalHeaderUpdatePayload | null): UiSdlModalHeaderUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlModalHeaderUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlModalHeaderUpdateAction;
}

