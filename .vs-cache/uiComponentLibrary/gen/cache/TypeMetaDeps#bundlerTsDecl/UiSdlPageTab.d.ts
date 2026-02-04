export interface UiSdlPageTab {

  readonly id?: string | null;
  withId(id: string | null): UiSdlPageTab;

  readonly text?: string | null;
  withText(text: string | null): UiSdlPageTab;

  readonly HTMLTitle?: string | null;
  withHTMLTitle(HTMLTitle: string | null): UiSdlPageTab;

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlPageTab;
}

