export interface UiSdlIdCreateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlIdCreateAction;

  readonly payload?: UiSdlIdCreatePayload | null;
  withPayload(payload: IUiSdlIdCreatePayload | null): UiSdlIdCreateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlIdCreateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlIdCreateAction;
}

