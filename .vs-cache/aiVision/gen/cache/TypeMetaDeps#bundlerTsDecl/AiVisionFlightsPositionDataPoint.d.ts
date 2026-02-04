export interface AiVisionFlightsPositionDataPoint {

  readonly start: DateTime;
  withStart(start: DateTime | Date | string): AiVisionFlightsPositionDataPoint;

  readonly outlierCode?: number | null;
  withOutlierCode(outlierCode: number | null): AiVisionFlightsPositionDataPoint;

  readonly comments?: string | null;
  withComments(comments: string | null): AiVisionFlightsPositionDataPoint;

  readonly isEstimated?: boolean;
  withIsEstimated(isEstimated: boolean): AiVisionFlightsPositionDataPoint;

  readonly dataVersion?: number | null;
  withDataVersion(dataVersion: number | null): AiVisionFlightsPositionDataPoint;

  readonly statusCode?: string | null;
  withStatusCode(statusCode: string | null): AiVisionFlightsPositionDataPoint;

  readonly PK_BIN_SEPARATOR?: string | null;
  withPK_BIN_SEPARATOR(PK_BIN_SEPARATOR: string | null): AiVisionFlightsPositionDataPoint;

  readonly parent: AiVisionFlightsPositionDataHeader;
  withParent(parent: IAiVisionFlightsPositionDataHeader): AiVisionFlightsPositionDataPoint;

  readonly id: string;
  withId(id: string): AiVisionFlightsPositionDataPoint;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionFlightsPositionDataPoint;

  readonly name?: string | null;
  withName(name: string | null): AiVisionFlightsPositionDataPoint;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionFlightsPositionDataPoint;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionFlightsPositionDataPoint;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionFlightsPositionDataPoint;

  readonly latitude?: number | null;
  withLatitude(latitude: number | null): AiVisionFlightsPositionDataPoint;

  readonly longitude?: number | null;
  withLongitude(longitude: number | null): AiVisionFlightsPositionDataPoint;

  readonly altitude?: number | null;
  withAltitude(altitude: number | null): AiVisionFlightsPositionDataPoint;
}

