export interface TestTarget {

  readonly id: string;
  withId(id: string): TestTarget;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestTarget;

  readonly name?: string | null;
  withName(name: string | null): TestTarget;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestTarget;

  readonly version?: number | null;
  withVersion(version: number | null): TestTarget;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestTarget;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): TestTarget;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): TestTarget;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): TestTarget;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): TestTarget;

  readonly species?: string | null;
  withSpecies(species: string | null): TestTarget;
}

