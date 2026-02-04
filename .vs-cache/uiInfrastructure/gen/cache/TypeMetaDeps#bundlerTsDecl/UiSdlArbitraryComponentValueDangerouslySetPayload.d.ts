export interface UiSdlArbitraryComponentValueDangerouslySetPayload {

  readonly value?: any;
  withValue(value: any): UiSdlArbitraryComponentValueDangerouslySetPayload;

  readonly path?: C3.Array<string | null>;
  withPath(path: C3.Array<string | null> | Array<string | null>): UiSdlArbitraryComponentValueDangerouslySetPayload;

  readonly componentId?: string | null;
  withComponentId(componentId: string | null): UiSdlArbitraryComponentValueDangerouslySetPayload;
}

