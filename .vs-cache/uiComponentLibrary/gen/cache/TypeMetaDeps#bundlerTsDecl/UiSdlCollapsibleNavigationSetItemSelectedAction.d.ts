export interface UiSdlCollapsibleNavigationSetItemSelectedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCollapsibleNavigationSetItemSelectedAction;

  readonly payload?: UiSdlCollapsibleNavigationSetItemSelectedPayload | null;
  withPayload(payload: IUiSdlCollapsibleNavigationSetItemSelectedPayload | null): UiSdlCollapsibleNavigationSetItemSelectedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCollapsibleNavigationSetItemSelectedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCollapsibleNavigationSetItemSelectedAction;
}

