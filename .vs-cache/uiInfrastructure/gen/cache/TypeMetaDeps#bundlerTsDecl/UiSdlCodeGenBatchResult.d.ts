export interface UiSdlCodeGenBatchResult {

  readonly fileDetails?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withFileDetails(fileDetails: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlCodeGenBatchResult;

  readonly usedEnums?: C3.Map<string | null, boolean>;
  withUsedEnums(usedEnums: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlCodeGenBatchResult;
}

