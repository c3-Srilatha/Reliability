export interface UiSdlDataSpecArgumentsMergePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataSpecArgumentsMergePayload;

  readonly args?: C3.Map<string | null, any>;
  withArgs(args: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataSpecArgumentsMergePayload;
}

