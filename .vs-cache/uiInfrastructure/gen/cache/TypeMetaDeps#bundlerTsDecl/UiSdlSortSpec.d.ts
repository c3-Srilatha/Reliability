export interface UiSdlSortSpec {

  readonly fieldPath?: string | null;
  withFieldPath(fieldPath: string | null): UiSdlSortSpec;

  readonly dir?: string | null;
  withDir(dir: string | null): UiSdlSortSpec;
}

