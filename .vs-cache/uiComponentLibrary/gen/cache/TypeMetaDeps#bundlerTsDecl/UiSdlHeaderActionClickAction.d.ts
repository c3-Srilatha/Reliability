export interface UiSdlHeaderActionClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHeaderActionClickAction;

  readonly payload?: UiSdlHeaderActionClickPayload | null;
  withPayload(payload: IUiSdlHeaderActionClickPayload | null): UiSdlHeaderActionClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHeaderActionClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHeaderActionClickAction;
}

