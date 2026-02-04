export interface Test2Target {

  readonly id: string;
  withId(id: string): Test2Target;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Test2Target;

  readonly name?: string | null;
  withName(name: string | null): Test2Target;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): Test2Target;

  readonly version?: number | null;
  withVersion(version: number | null): Test2Target;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): Test2Target;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): Test2Target;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): Test2Target;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): Test2Target;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): Test2Target;

  readonly species?: string | null;
  withSpecies(species: string | null): Test2Target;
}

