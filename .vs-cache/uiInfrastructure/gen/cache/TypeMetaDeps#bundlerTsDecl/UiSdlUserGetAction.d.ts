export interface UiSdlUserGetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUserGetAction;

  readonly payload?: UiSdlUserGetPayload | null;
  withPayload(payload: IUiSdlUserGetPayload | null): UiSdlUserGetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUserGetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUserGetAction;
}

