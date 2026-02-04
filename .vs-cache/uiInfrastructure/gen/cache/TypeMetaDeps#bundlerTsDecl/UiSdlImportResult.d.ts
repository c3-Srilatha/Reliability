export interface UiSdlImportResult {

  readonly imports?: string | null;
  withImports(imports: string | null): UiSdlImportResult;

  readonly importNames?: C3.Array<string | null>;
  withImportNames(importNames: C3.Array<string | null> | Array<string | null>): UiSdlImportResult;
}

