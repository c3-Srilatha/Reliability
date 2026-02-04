export interface UiSdlTabComponentRef {

  readonly id: string;
  withId(id: string): UiSdlTabComponentRef;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlTabComponentRef;

  readonly component?: string | null;
  withComponent(component: string | null): UiSdlTabComponentRef;
}

