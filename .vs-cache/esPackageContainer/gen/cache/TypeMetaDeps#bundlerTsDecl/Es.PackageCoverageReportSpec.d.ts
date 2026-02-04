declare namespace Es {
  export interface PackageCoverageReportSpec {

    readonly reportPaths?: C3.Array<string | null>;
    withReportPaths(reportPaths: C3.Array<string | null> | Array<string | null>): Es.PackageCoverageReportSpec;

    readonly fileType?: string | null;
    withFileType(fileType: string | null): Es.PackageCoverageReportSpec;

    readonly minCoverageExpectation?: number | null;
    withMinCoverageExpectation(minCoverageExpectation: number | null): Es.PackageCoverageReportSpec;
  }
}

