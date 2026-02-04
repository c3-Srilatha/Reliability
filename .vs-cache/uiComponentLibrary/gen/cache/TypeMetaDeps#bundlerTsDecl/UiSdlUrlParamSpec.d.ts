export interface UiSdlUrlParamSpec {

  readonly element?: string | null;
  withElement(element: string | null): UiSdlUrlParamSpec;

  readonly excludeName?: boolean;
  withExcludeName(excludeName: boolean): UiSdlUrlParamSpec;
}

