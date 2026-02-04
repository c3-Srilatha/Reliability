export interface TestApiObj {

  readonly id: string;
  withId(id: string): TestApiObj;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiObj;

  readonly name?: string | null;
  withName(name: string | null): TestApiObj;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiObj;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiObj;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiObj;

  readonly parent: TestApiContext;
  withParent(parent: ITestApiContext): TestApiObj;

  readonly objId: string;
  withObjId(objId: string): TestApiObj;

  readonly typeRef: Type;
  withTypeRef(typeRef: IType): TestApiObj;
}

