export interface UiSdlConfigGetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlConfigGetAction;

  readonly payload?: UiSdlConfigGetPayload | null;
  withPayload(payload: IUiSdlConfigGetPayload | null): UiSdlConfigGetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlConfigGetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlConfigGetAction;
}

