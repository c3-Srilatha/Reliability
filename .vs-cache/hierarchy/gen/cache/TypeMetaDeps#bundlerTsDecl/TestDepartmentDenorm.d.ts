export interface TestDepartmentDenorm {

  readonly id: string;
  withId(id: string): TestDepartmentDenorm;

  readonly from?: TestDepartment | null;
  withFrom(from: ITestDepartment | null): TestDepartmentDenorm;

  readonly to?: TestDepartment | null;
  withTo(to: ITestDepartment | null): TestDepartmentDenorm;

  readonly relationship?: string | null;
  withRelationship(relationship: string | null): TestDepartmentDenorm;

  readonly fromInfo?: string | null;
  withFromInfo(fromInfo: string | null): TestDepartmentDenorm;

  readonly toInfo?: string | null;
  withToInfo(toInfo: string | null): TestDepartmentDenorm;

  readonly involvement?: number | null;
  withInvolvement(involvement: number | null): TestDepartmentDenorm;

  readonly EDGE_SEPARATOR?: string | null;
  withEDGE_SEPARATOR(EDGE_SEPARATOR: string | null): TestDepartmentDenorm;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): TestDepartmentDenorm;

  readonly distance?: number | null;
  withDistance(distance: number | null): TestDepartmentDenorm;

  readonly versionNumber?: number | null;
  withVersionNumber(versionNumber: number | null): TestDepartmentDenorm;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestDepartmentDenorm;

  readonly name?: string | null;
  withName(name: string | null): TestDepartmentDenorm;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestDepartmentDenorm;

  readonly version?: number | null;
  withVersion(version: number | null): TestDepartmentDenorm;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestDepartmentDenorm;
}

