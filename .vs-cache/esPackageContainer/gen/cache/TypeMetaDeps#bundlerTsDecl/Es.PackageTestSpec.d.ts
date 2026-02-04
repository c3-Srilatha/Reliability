declare namespace Es {
  export interface PackageTestSpec {

    readonly withCoverage: boolean;
    withWithCoverage(withCoverage: boolean): Es.PackageTestSpec;
  }
}

