export interface AiVisionMissilesPositionDataPoint {

  readonly start: DateTime;
  withStart(start: DateTime | Date | string): AiVisionMissilesPositionDataPoint;

  readonly outlierCode?: number | null;
  withOutlierCode(outlierCode: number | null): AiVisionMissilesPositionDataPoint;

  readonly comments?: string | null;
  withComments(comments: string | null): AiVisionMissilesPositionDataPoint;

  readonly isEstimated?: boolean;
  withIsEstimated(isEstimated: boolean): AiVisionMissilesPositionDataPoint;

  readonly dataVersion?: number | null;
  withDataVersion(dataVersion: number | null): AiVisionMissilesPositionDataPoint;

  readonly statusCode?: string | null;
  withStatusCode(statusCode: string | null): AiVisionMissilesPositionDataPoint;

  readonly PK_BIN_SEPARATOR?: string | null;
  withPK_BIN_SEPARATOR(PK_BIN_SEPARATOR: string | null): AiVisionMissilesPositionDataPoint;

  readonly parent: AiVisionMissilesPositionDataHeader;
  withParent(parent: IAiVisionMissilesPositionDataHeader): AiVisionMissilesPositionDataPoint;

  readonly id: string;
  withId(id: string): AiVisionMissilesPositionDataPoint;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionMissilesPositionDataPoint;

  readonly name?: string | null;
  withName(name: string | null): AiVisionMissilesPositionDataPoint;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionMissilesPositionDataPoint;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionMissilesPositionDataPoint;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionMissilesPositionDataPoint;

  readonly latitude?: number | null;
  withLatitude(latitude: number | null): AiVisionMissilesPositionDataPoint;

  readonly longitude?: number | null;
  withLongitude(longitude: number | null): AiVisionMissilesPositionDataPoint;

  readonly altitude?: number | null;
  withAltitude(altitude: number | null): AiVisionMissilesPositionDataPoint;
}

