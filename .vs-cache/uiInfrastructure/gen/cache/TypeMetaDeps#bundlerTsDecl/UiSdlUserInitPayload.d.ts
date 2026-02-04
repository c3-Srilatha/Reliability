export interface UiSdlUserInitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUserInitPayload;

  readonly user?: User | null;
  withUser(user: IUser | null): UiSdlUserInitPayload;
}

