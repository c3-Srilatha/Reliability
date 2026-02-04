export interface TestOrganizationDenorm {

  readonly id: string;
  withId(id: string): TestOrganizationDenorm;

  readonly from?: TestOrganization | null;
  withFrom(from: ITestOrganization | null): TestOrganizationDenorm;

  readonly to?: TestOrganization | null;
  withTo(to: ITestOrganization | null): TestOrganizationDenorm;

  readonly relationship?: string | null;
  withRelationship(relationship: string | null): TestOrganizationDenorm;

  readonly fromInfo?: string | null;
  withFromInfo(fromInfo: string | null): TestOrganizationDenorm;

  readonly toInfo?: string | null;
  withToInfo(toInfo: string | null): TestOrganizationDenorm;

  readonly involvement?: number | null;
  withInvolvement(involvement: number | null): TestOrganizationDenorm;

  readonly EDGE_SEPARATOR?: string | null;
  withEDGE_SEPARATOR(EDGE_SEPARATOR: string | null): TestOrganizationDenorm;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): TestOrganizationDenorm;

  readonly distance?: number | null;
  withDistance(distance: number | null): TestOrganizationDenorm;

  readonly versionNumber?: number | null;
  withVersionNumber(versionNumber: number | null): TestOrganizationDenorm;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestOrganizationDenorm;

  readonly name?: string | null;
  withName(name: string | null): TestOrganizationDenorm;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestOrganizationDenorm;

  readonly version?: number | null;
  withVersion(version: number | null): TestOrganizationDenorm;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestOrganizationDenorm;
}

