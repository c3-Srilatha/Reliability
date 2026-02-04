export interface UiSdlFormDataToPropSpec {

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlFormDataToPropSpec;

  readonly prop?: string | null;
  withProp(prop: string | null): UiSdlFormDataToPropSpec;
}

