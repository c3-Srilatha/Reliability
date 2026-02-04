export interface UiSdlSearchResultsSelectPayload {

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlSearchResultsSelectPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSearchResultsSelectPayload;
}

