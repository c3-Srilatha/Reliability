export interface UiSdlDebounceableInput {

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlDebounceableInput;
}

