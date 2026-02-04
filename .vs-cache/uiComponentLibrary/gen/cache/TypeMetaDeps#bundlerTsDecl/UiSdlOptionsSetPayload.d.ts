export interface UiSdlOptionsSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlOptionsSetPayload;

  readonly options?: C3.Array<Obj | null | string | null | null>;
  withOptions(options: C3.Array<Obj | null | string | null | null> | Array<IObj | null | string | null | null>): UiSdlOptionsSetPayload;
}

