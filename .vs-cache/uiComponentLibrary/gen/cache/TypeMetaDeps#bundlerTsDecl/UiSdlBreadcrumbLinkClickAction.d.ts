export interface UiSdlBreadcrumbLinkClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBreadcrumbLinkClickAction;

  readonly payload?: UiSdlBreadcrumbLinkClickPayload | null;
  withPayload(payload: IUiSdlBreadcrumbLinkClickPayload | null): UiSdlBreadcrumbLinkClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBreadcrumbLinkClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBreadcrumbLinkClickAction;
}

