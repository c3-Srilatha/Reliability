export interface UiSdlTypeWorkerFieldNameFilterSpec {

  readonly isReference?: boolean;
  withIsReference(isReference: boolean): UiSdlTypeWorkerFieldNameFilterSpec;

  readonly isA?: string | null;
  withIsA(isA: string | null): UiSdlTypeWorkerFieldNameFilterSpec;

  readonly bindingName?: string | null;
  withBindingName(bindingName: string | null): UiSdlTypeWorkerFieldNameFilterSpec;
}

