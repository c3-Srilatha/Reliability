export interface UiSdlFormWidth {

  readonly value?: number | null;
  withValue(value: number | null): UiSdlFormWidth;

  readonly unit?: string | null;
  withUnit(unit: string | null): UiSdlFormWidth;
}

