export interface UiSdlDateRange {

  readonly rangeStart?: DateTime | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withRangeStart(rangeStart: DateTime | Date | string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDateRange;

  readonly rangeEnd?: DateTime | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withRangeEnd(rangeEnd: DateTime | Date | string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlDateRange;
}

