export interface UiSdlHiddenAxesUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlHiddenAxesUpdatePayload;

  readonly data?: C3.Array<string | null>;
  withData(data: C3.Array<string | null> | Array<string | null>): UiSdlHiddenAxesUpdatePayload;
}

