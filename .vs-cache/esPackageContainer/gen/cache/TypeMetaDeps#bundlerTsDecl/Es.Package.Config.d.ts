declare namespace Es.Package {
  export interface Config {

    readonly configOverride?: string | null;
    withConfigOverride(configOverride: string | null): Es.Package.Config;

    readonly secretOverride?: string | null;
    withSecretOverride(secretOverride: string | null): Es.Package.Config;

    readonly issues?: C3.Array<string | null>;
    withIssues(issues: C3.Array<string | null> | Array<string | null>): Es.Package.Config;

    readonly pkgPath?: string | null;
    withPkgPath(pkgPath: string | null): Es.Package.Config;
  }
}

