export interface UiSdlPage {

  readonly id: string;
  withId(id: string): UiSdlPage;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlPage;

  readonly urlPaths?: C3.Array<UiSdlRoute | null>;
  withUrlPaths(urlPaths: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlPage;
}

