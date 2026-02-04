export interface IrisCanonical {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): IrisCanonical;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): IrisCanonical;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): IrisCanonical;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): IrisCanonical;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): IrisCanonical;

  readonly id: string;
  withId(id: string): IrisCanonical;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): IrisCanonical;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): IrisCanonical;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): IrisCanonical;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): IrisCanonical;

  readonly species?: string | null;
  withSpecies(species: string | null): IrisCanonical;
}

