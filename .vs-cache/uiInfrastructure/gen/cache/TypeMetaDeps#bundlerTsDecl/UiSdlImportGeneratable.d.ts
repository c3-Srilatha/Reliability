export interface UiSdlImportGeneratable {

  readonly generatedImports?: C3.Map<string | null, any>;
  withGeneratedImports(generatedImports: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlImportGeneratable;
}

