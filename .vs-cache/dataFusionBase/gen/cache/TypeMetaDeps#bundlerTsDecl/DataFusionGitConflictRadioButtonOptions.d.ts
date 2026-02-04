export interface DataFusionGitConflictRadioButtonOptions {

  readonly LOCAL?: string | null;
  withLOCAL(LOCAL: string | null): DataFusionGitConflictRadioButtonOptions;

  readonly REMOTE?: string | null;
  withREMOTE(REMOTE: string | null): DataFusionGitConflictRadioButtonOptions;

  readonly MANUAL?: string | null;
  withMANUAL(MANUAL: string | null): DataFusionGitConflictRadioButtonOptions;
}

