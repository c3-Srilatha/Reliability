export interface UiSdlHiddenThemingIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlHiddenThemingIdSetPayload;

  readonly styleId: string;
  withStyleId(styleId: string): UiSdlHiddenThemingIdSetPayload;

  readonly styleType: string;
  withStyleType(styleType: string): UiSdlHiddenThemingIdSetPayload;
}

