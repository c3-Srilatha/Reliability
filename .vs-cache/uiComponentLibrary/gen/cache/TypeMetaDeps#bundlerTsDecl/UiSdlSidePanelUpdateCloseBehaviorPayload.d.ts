export interface UiSdlSidePanelUpdateCloseBehaviorPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSidePanelUpdateCloseBehaviorPayload;

  readonly closeBehavior?: string | null;
  withCloseBehavior(closeBehavior: string | null): UiSdlSidePanelUpdateCloseBehaviorPayload;
}

