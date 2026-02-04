export interface UiSdlFieldSetFilterFieldConditionalFilter {

  readonly parentFilter?: string | null;
  withParentFilter(parentFilter: string | null): UiSdlFieldSetFilterFieldConditionalFilter;

  readonly field?: string | null;
  withField(field: string | null): UiSdlFieldSetFilterFieldConditionalFilter;
}

