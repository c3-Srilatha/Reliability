export interface UiSdlBreadcrumbUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBreadcrumbUpdateAction;

  readonly payload?: UiSdlBreadcrumbUpdatePayload | null;
  withPayload(payload: IUiSdlBreadcrumbUpdatePayload | null): UiSdlBreadcrumbUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBreadcrumbUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBreadcrumbUpdateAction;
}

