export interface UiSdlColumnSelectAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlColumnSelectAction;

  readonly payload?: UiSdlColumnSelectPayload | null;
  withPayload(payload: IUiSdlColumnSelectPayload | null): UiSdlColumnSelectAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlColumnSelectAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlColumnSelectAction;
}

