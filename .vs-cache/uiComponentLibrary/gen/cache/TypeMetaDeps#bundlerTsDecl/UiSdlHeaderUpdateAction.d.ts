export interface UiSdlHeaderUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHeaderUpdateAction;

  readonly payload?: UiSdlHeaderUpdatePayload | null;
  withPayload(payload: IUiSdlHeaderUpdatePayload | null): UiSdlHeaderUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHeaderUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHeaderUpdateAction;
}

