export interface IrisRemixConsoleTest {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): IrisRemixConsoleTest;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): IrisRemixConsoleTest;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): IrisRemixConsoleTest;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): IrisRemixConsoleTest;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): IrisRemixConsoleTest;

  readonly sepalLengthCm: number;
  withSepalLengthCm(sepalLengthCm: number): IrisRemixConsoleTest;

  readonly sepalWidthCm: number;
  withSepalWidthCm(sepalWidthCm: number): IrisRemixConsoleTest;

  readonly petalLengthCm: number;
  withPetalLengthCm(petalLengthCm: number): IrisRemixConsoleTest;

  readonly petalWidthCm: number;
  withPetalWidthCm(petalWidthCm: number): IrisRemixConsoleTest;

  readonly species?: string | null;
  withSpecies(species: string | null): IrisRemixConsoleTest;
}

