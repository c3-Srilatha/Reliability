export interface UiSdlBreadcrumbLoadFromRouteAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBreadcrumbLoadFromRouteAction;

  readonly payload?: UiSdlBreadcrumbLoadFromRoutePayload | null;
  withPayload(payload: IUiSdlBreadcrumbLoadFromRoutePayload | null): UiSdlBreadcrumbLoadFromRouteAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBreadcrumbLoadFromRouteAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBreadcrumbLoadFromRouteAction;
}

