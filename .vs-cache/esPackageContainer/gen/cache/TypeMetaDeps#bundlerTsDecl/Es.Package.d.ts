declare namespace Es {
  export interface Package {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): Es.Package;

    readonly id: string;
    withId(id: string): Es.Package;

    readonly runtime: string;
    withRuntime(runtime: string): Es.Package;

    readonly resourcePath: string;
    withResourcePath(resourcePath: string): Es.Package;

    readonly workspaceName?: string | null;
    withWorkspaceName(workspaceName: string | null): Es.Package;

    readonly buildScript?: string | null;
    withBuildScript(buildScript: string | null): Es.Package;

    readonly setupScript?: string | null;
    withSetupScript(setupScript: string | null): Es.Package;

    readonly cleanupScript?: string | null;
    withCleanupScript(cleanupScript: string | null): Es.Package;

    readonly bundlerScript?: string | null;
    withBundlerScript(bundlerScript: string | null): Es.Package;

    readonly testScript?: string | null;
    withTestScript(testScript: string | null): Es.Package;

    readonly coverageScript?: string | null;
    withCoverageScript(coverageScript: string | null): Es.Package;

    readonly testReportPaths?: C3.Array<string | null>;
    withTestReportPaths(testReportPaths: C3.Array<string | null> | Array<string | null>): Es.Package;

    readonly coverageReports?: C3.Array<Es.PackageCoverageReportSpec | null>;
    withCoverageReports(coverageReports: C3.Array<Es.PackageCoverageReportSpec | null> | Array<IEs.PackageCoverageReportSpec | null>): Es.Package;

    readonly installCommand?: string | null;
    withInstallCommand(installCommand: string | null): Es.Package;
  }
}

