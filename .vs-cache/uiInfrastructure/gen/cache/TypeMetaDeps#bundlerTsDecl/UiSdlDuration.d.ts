export interface UiSdlDuration {

  readonly NANOS_IN_MICROS: number;
  withNANOS_IN_MICROS(NANOS_IN_MICROS: number): UiSdlDuration;

  readonly NANOS_IN_MILLIS: number;
  withNANOS_IN_MILLIS(NANOS_IN_MILLIS: number): UiSdlDuration;

  readonly NANOS_IN_SEC: number;
  withNANOS_IN_SEC(NANOS_IN_SEC: number): UiSdlDuration;

  readonly NANOS_IN_MIN: number;
  withNANOS_IN_MIN(NANOS_IN_MIN: number): UiSdlDuration;

  readonly MICROS_IN_MILLIS: number;
  withMICROS_IN_MILLIS(MICROS_IN_MILLIS: number): UiSdlDuration;

  readonly MICROS_IN_SEC: number;
  withMICROS_IN_SEC(MICROS_IN_SEC: number): UiSdlDuration;

  readonly MICROS_IN_MIN: number;
  withMICROS_IN_MIN(MICROS_IN_MIN: number): UiSdlDuration;

  readonly MILLIS_IN_SEC: number;
  withMILLIS_IN_SEC(MILLIS_IN_SEC: number): UiSdlDuration;

  readonly MILLIS_IN_MIN: number;
  withMILLIS_IN_MIN(MILLIS_IN_MIN: number): UiSdlDuration;

  readonly MILLIS_IN_HOUR: number;
  withMILLIS_IN_HOUR(MILLIS_IN_HOUR: number): UiSdlDuration;

  readonly microseconds: number;
  withMicroseconds(microseconds: number): UiSdlDuration;
}

