export interface UiSdlActionableOptionClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlActionableOptionClickPayload;

  readonly queryString?: string | null;
  withQueryString(queryString: string | null): UiSdlActionableOptionClickPayload;
}

