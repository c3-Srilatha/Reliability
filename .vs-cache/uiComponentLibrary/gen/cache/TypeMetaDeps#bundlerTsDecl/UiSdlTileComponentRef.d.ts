export interface UiSdlTileComponentRef {

  readonly id: string;
  withId(id: string): UiSdlTileComponentRef;

  readonly component?: string | null;
  withComponent(component: string | null): UiSdlTileComponentRef;
}

