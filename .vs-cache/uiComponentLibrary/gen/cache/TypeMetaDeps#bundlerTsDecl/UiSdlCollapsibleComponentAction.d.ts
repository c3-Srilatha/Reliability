export interface UiSdlCollapsibleComponentAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCollapsibleComponentAction;

  readonly payload?: UiSdlCollapsibleComponentPayload | null;
  withPayload(payload: IUiSdlCollapsibleComponentPayload | null): UiSdlCollapsibleComponentAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCollapsibleComponentAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCollapsibleComponentAction;
}

