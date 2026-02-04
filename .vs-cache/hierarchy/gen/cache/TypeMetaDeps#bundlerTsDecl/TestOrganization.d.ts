export interface TestOrganization {

  readonly id: string;
  withId(id: string): TestOrganization;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestOrganization;

  readonly name?: string | null;
  withName(name: string | null): TestOrganization;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestOrganization;

  readonly version?: number | null;
  withVersion(version: number | null): TestOrganization;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestOrganization;

  readonly children?: C3.Array<TestOrganization | null>;
  withChildren(children: C3.Array<TestOrganization | null> | Array<ITestOrganization | null>): TestOrganization;

  readonly parent?: TestOrganization | null;
  withParent(parent: ITestOrganization | null): TestOrganization;

  readonly denormParents?: C3.Array<TestOrganizationDenorm | null>;
  withDenormParents(denormParents: C3.Array<TestOrganizationDenorm | null> | Array<ITestOrganizationDenorm | null>): TestOrganization;

  readonly denormChildren?: C3.Array<TestOrganizationDenorm | null>;
  withDenormChildren(denormChildren: C3.Array<TestOrganizationDenorm | null> | Array<ITestOrganizationDenorm | null>): TestOrganization;
}

