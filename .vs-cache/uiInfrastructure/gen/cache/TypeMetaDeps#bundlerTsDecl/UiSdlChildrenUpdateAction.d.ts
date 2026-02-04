export interface UiSdlChildrenUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChildrenUpdateAction;

  readonly payload?: UiSdlChildrenUpdatePayload | null;
  withPayload(payload: IUiSdlChildrenUpdatePayload | null): UiSdlChildrenUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChildrenUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChildrenUpdateAction;
}

