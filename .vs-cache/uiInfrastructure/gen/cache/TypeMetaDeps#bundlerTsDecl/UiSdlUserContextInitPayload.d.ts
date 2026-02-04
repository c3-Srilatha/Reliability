export interface UiSdlUserContextInitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUserContextInitPayload;

  readonly user?: UiSdlUserContext | null;
  withUser(user: IUiSdlUserContext | null): UiSdlUserContextInitPayload;
}

