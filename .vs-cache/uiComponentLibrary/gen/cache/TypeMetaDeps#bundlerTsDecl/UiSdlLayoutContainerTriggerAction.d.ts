export interface UiSdlLayoutContainerTriggerAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlLayoutContainerTriggerAction;

  readonly payload?: UiSdlLayoutContainerTriggerPayload | null;
  withPayload(payload: IUiSdlLayoutContainerTriggerPayload | null): UiSdlLayoutContainerTriggerAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlLayoutContainerTriggerAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlLayoutContainerTriggerAction;
}

