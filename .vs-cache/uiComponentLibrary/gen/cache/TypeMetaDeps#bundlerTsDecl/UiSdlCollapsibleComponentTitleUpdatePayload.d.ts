export interface UiSdlCollapsibleComponentTitleUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCollapsibleComponentTitleUpdatePayload;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlCollapsibleComponentTitleUpdatePayload;
}

