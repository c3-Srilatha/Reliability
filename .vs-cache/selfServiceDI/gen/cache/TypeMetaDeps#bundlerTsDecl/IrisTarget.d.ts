export interface IrisTarget {

  readonly id: string;
  withId(id: string): IrisTarget;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): IrisTarget;

  readonly name?: string | null;
  withName(name: string | null): IrisTarget;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): IrisTarget;

  readonly version?: number | null;
  withVersion(version: number | null): IrisTarget;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): IrisTarget;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): IrisTarget;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): IrisTarget;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): IrisTarget;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): IrisTarget;

  readonly species?: string | null;
  withSpecies(species: string | null): IrisTarget;
}

