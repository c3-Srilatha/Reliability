export interface UiSdlCollapsibleNavigationSetItemSelectedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCollapsibleNavigationSetItemSelectedPayload;

  readonly itemId?: string | null;
  withItemId(itemId: string | null): UiSdlCollapsibleNavigationSetItemSelectedPayload;
}

