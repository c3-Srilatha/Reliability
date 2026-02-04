export interface UiSdlCollapsibleComponentTitleUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCollapsibleComponentTitleUpdateAction;

  readonly payload?: UiSdlCollapsibleComponentTitleUpdatePayload | null;
  withPayload(payload: IUiSdlCollapsibleComponentTitleUpdatePayload | null): UiSdlCollapsibleComponentTitleUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCollapsibleComponentTitleUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCollapsibleComponentTitleUpdateAction;
}

