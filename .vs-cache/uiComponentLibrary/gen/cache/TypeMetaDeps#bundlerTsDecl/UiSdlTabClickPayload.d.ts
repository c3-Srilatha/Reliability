export interface UiSdlTabClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTabClickPayload;

  readonly tab?: UiSdlPageTab | null;
  withTab(tab: IUiSdlPageTab | null): UiSdlTabClickPayload;
}

