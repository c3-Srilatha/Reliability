export interface IrisCanonicalRemixTest {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): IrisCanonicalRemixTest;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): IrisCanonicalRemixTest;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): IrisCanonicalRemixTest;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): IrisCanonicalRemixTest;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): IrisCanonicalRemixTest;

  readonly id: string;
  withId(id: string): IrisCanonicalRemixTest;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): IrisCanonicalRemixTest;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): IrisCanonicalRemixTest;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): IrisCanonicalRemixTest;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): IrisCanonicalRemixTest;

  readonly species?: string | null;
  withSpecies(species: string | null): IrisCanonicalRemixTest;
}

