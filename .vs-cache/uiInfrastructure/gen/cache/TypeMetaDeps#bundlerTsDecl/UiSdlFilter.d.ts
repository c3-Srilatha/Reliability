export interface UiSdlFilter {

  readonly value?: string | null;
  withValue(value: string | null): UiSdlFilter;
}

