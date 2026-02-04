declare namespace Es {
  export interface PackageNpmScriptSpec {

    readonly scriptName?: string | null;
    withScriptName(scriptName: string | null): Es.PackageNpmScriptSpec;

    readonly async?: boolean;
    withAsync(async: boolean): Es.PackageNpmScriptSpec;
  }
}

