export interface UiSdlAppGetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAppGetAction;

  readonly payload?: UiSdlAppGetPayload | null;
  withPayload(payload: IUiSdlAppGetPayload | null): UiSdlAppGetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAppGetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAppGetAction;
}

