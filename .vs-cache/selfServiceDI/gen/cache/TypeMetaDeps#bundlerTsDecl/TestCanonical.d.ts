export interface TestCanonical {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): TestCanonical;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): TestCanonical;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): TestCanonical;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): TestCanonical;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): TestCanonical;

  readonly encoded?: string | null;
  withEncoded(encoded: string | null): TestCanonical;

  readonly idAlias?: string | null;
  withIdAlias(idAlias: string | null): TestCanonical;

  readonly petalLengthCm?: string | null;
  withPetalLengthCm(petalLengthCm: string | null): TestCanonical;
}

