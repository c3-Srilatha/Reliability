export interface UiSdlDateTimeParamKindFormatSpec {

  readonly year?: string | null;
  withYear(year: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly month?: string | null;
  withMonth(month: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly day?: string | null;
  withDay(day: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly hour?: string | null;
  withHour(hour: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly hour12?: boolean;
  withHour12(hour12: boolean): UiSdlDateTimeParamKindFormatSpec;

  readonly minute?: string | null;
  withMinute(minute: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly second?: string | null;
  withSecond(second: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly timeZoneName?: string | null;
  withTimeZoneName(timeZoneName: string | null): UiSdlDateTimeParamKindFormatSpec;

  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): UiSdlDateTimeParamKindFormatSpec;
}

