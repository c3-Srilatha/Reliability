export interface UiSdlWithTimeZone {

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): UiSdlWithTimeZone;
}

