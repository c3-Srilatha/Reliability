export interface UiSdlPathAndPageParamsConfirmPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlPathAndPageParamsConfirmPayload;

  readonly currentPath?: string | null;
  withCurrentPath(currentPath: string | null): UiSdlPathAndPageParamsConfirmPayload;

  readonly pageParams?: C3.Map<string | null, string | null | C3.Array<string | null> | null>;
  withPageParams(pageParams: C3.Map<string | null, string | null | C3.Array<string | null> | null> | {[key: string | null]: string | null | C3.Array<string | null> | Array<string | null> | null}): UiSdlPathAndPageParamsConfirmPayload;
}

