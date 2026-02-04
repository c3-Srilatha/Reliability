export interface UiSdlDataRequestPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataRequestPayload;

  readonly actionTransforms?: C3.Array<string | null>;
  withActionTransforms(actionTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDataRequestPayload;

  readonly mode?: string | null;
  withMode(mode: string | null): UiSdlDataRequestPayload;
}

