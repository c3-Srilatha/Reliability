export interface UiSdlUserContextPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUserContextPayload;

  readonly userContext?: UiSdlUserContext | null;
  withUserContext(userContext: IUiSdlUserContext | null): UiSdlUserContextPayload;
}

