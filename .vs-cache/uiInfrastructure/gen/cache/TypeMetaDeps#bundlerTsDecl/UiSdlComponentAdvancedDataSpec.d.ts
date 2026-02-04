export interface UiSdlComponentAdvancedDataSpec {

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlComponentAdvancedDataSpec;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): UiSdlComponentAdvancedDataSpec;
}

