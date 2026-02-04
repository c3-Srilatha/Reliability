export interface TestDepartment {

  readonly id: string;
  withId(id: string): TestDepartment;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestDepartment;

  readonly name?: string | null;
  withName(name: string | null): TestDepartment;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestDepartment;

  readonly version?: number | null;
  withVersion(version: number | null): TestDepartment;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestDepartment;

  readonly children?: C3.Array<TestDepartment | null>;
  withChildren(children: C3.Array<TestDepartment | null> | Array<ITestDepartment | null>): TestDepartment;

  readonly parent?: TestDepartment | null;
  withParent(parent: ITestDepartment | null): TestDepartment;

  readonly denormParents?: C3.Array<TestDepartmentDenorm | null>;
  withDenormParents(denormParents: C3.Array<TestDepartmentDenorm | null> | Array<ITestDepartmentDenorm | null>): TestDepartment;

  readonly denormChildren?: C3.Array<TestDepartmentDenorm | null>;
  withDenormChildren(denormChildren: C3.Array<TestDepartmentDenorm | null> | Array<ITestDepartmentDenorm | null>): TestDepartment;
}

