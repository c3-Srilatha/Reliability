export interface TestSpyAnimal {

  readonly id: string;
  withId(id: string): TestSpyAnimal;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestSpyAnimal;

  readonly name?: string | null;
  withName(name: string | null): TestSpyAnimal;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestSpyAnimal;

  readonly version?: number | null;
  withVersion(version: number | null): TestSpyAnimal;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestSpyAnimal;

  readonly animal: string;
  withAnimal(animal: string): TestSpyAnimal;
}

