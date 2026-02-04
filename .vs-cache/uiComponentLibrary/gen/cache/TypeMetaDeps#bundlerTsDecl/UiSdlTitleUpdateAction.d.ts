export interface UiSdlTitleUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTitleUpdateAction;

  readonly payload?: UiSdlTitleUpdatePayload | null;
  withPayload(payload: IUiSdlTitleUpdatePayload | null): UiSdlTitleUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTitleUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTitleUpdateAction;
}

