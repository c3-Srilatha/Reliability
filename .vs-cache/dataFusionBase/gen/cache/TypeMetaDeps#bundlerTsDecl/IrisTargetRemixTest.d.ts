export interface IrisTargetRemixTest {

  readonly id: string;
  withId(id: string): IrisTargetRemixTest;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): IrisTargetRemixTest;

  readonly name?: string | null;
  withName(name: string | null): IrisTargetRemixTest;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): IrisTargetRemixTest;

  readonly version?: number | null;
  withVersion(version: number | null): IrisTargetRemixTest;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): IrisTargetRemixTest;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): IrisTargetRemixTest;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): IrisTargetRemixTest;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): IrisTargetRemixTest;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): IrisTargetRemixTest;

  readonly species?: string | null;
  withSpecies(species: string | null): IrisTargetRemixTest;
}

