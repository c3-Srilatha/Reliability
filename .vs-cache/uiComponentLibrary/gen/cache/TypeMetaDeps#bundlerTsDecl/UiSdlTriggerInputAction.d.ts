export interface UiSdlTriggerInputAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTriggerInputAction;

  readonly payload?: UiSdlTriggerInputPayload | null;
  withPayload(payload: IUiSdlTriggerInputPayload | null): UiSdlTriggerInputAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTriggerInputAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTriggerInputAction;
}

