export interface UiSdlRoutesSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlRoutesSetPayload;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlRoutesSetPayload;
}

