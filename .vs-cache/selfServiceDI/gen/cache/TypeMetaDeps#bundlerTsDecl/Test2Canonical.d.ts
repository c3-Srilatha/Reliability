export interface Test2Canonical {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): Test2Canonical;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): Test2Canonical;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): Test2Canonical;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): Test2Canonical;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): Test2Canonical;

  readonly encoded?: string | null;
  withEncoded(encoded: string | null): Test2Canonical;

  readonly idAlias?: string | null;
  withIdAlias(idAlias: string | null): Test2Canonical;

  readonly petalLengthCm?: string | null;
  withPetalLengthCm(petalLengthCm: string | null): Test2Canonical;

  readonly sepalLengthCm?: string | null;
  withSepalLengthCm(sepalLengthCm: string | null): Test2Canonical;

  readonly sepalWidthCm?: string | null;
  withSepalWidthCm(sepalWidthCm: string | null): Test2Canonical;

  readonly species?: string | null;
  withSpecies(species: string | null): Test2Canonical;
}

