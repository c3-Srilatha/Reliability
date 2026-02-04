export interface UiSdlTabRedirectPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTabRedirectPayload;

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlTabRedirectPayload;
}

