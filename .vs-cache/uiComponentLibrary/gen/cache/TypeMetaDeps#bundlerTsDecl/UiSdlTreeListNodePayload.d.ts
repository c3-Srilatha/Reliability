export interface UiSdlTreeListNodePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTreeListNodePayload;

  readonly nodeId?: string | null;
  withNodeId(nodeId: string | null): UiSdlTreeListNodePayload;
}

