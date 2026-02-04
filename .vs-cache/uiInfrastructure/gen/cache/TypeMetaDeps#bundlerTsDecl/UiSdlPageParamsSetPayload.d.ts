export interface UiSdlPageParamsSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlPageParamsSetPayload;

  readonly pageParams?: C3.Map<string | null, string | null | C3.Array<string | null> | null>;
  withPageParams(pageParams: C3.Map<string | null, string | null | C3.Array<string | null> | null> | {[key: string | null]: string | null | C3.Array<string | null> | Array<string | null> | null}): UiSdlPageParamsSetPayload;
}

